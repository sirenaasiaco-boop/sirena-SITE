#!/usr/bin/env python3
"""
Instagram Image Collector Agent (Simplified)
Collects images from Instagram URLs using web scraping (no API auth needed).
Works with public posts/reels.
Requires: requests library only (pip install requests)
"""

import os
import sys
import csv
import re
from pathlib import Path
from datetime import datetime
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# Configuration
MEDIA_DIR = Path(__file__).parent / "media" / "social-media" / "instagram"
URLS_FILE = Path(__file__).parent / "instagram-urls.txt"
MANIFEST_FILE = MEDIA_DIR / "manifest.csv"

def ensure_dirs():
    """Ensure required directories exist."""
    MEDIA_DIR.mkdir(parents=True, exist_ok=True)

def load_urls():
    """Load Instagram URLs from file or command line."""
    if URLS_FILE.exists():
        with open(URLS_FILE, 'r') as f:
            urls = [line.strip() for line in f if line.strip() and not line.startswith('#')]
        return urls
    return []

def get_session():
    """Create a session with retry strategy."""
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def extract_shortcode(url):
    """Extract Instagram shortcode from URL."""
    patterns = [
        r'/p/([A-Za-z0-9_-]+)',
        r'/reel/([A-Za-z0-9_-]+)',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

def fetch_image_from_url(shortcode):
    """
    Fetch image from Instagram post by scraping the page.
    Returns image URL if found.
    """
    try:
        session = get_session()
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Try Instagram's oembed endpoint (public, no auth)
        oembed_url = f"https://www.instagram.com/oembed/?url=https://www.instagram.com/p/{shortcode}/"
        
        try:
            resp = session.get(oembed_url, headers=headers, timeout=10)
            resp.raise_for_status()
            data = resp.json()
            
            # Extract image URL from HTML
            if 'thumbnail_url' in data:
                return data['thumbnail_url']
            
            # Parse HTML for image
            if 'html' in data:
                img_match = re.search(r'src="([^"]*)"', data['html'])
                if img_match:
                    return img_match.group(1)
        except Exception as e:
            pass
        
        # Fallback: Try to construct image URL directly
        # Instagram's CDN structure: /ig_cache_key=hash
        fallback_url = f"https://www.instagram.com/p/{shortcode}/?__a=1&__w=1"
        resp = session.get(fallback_url, headers=headers, timeout=10)
        
        if resp.status_code == 200:
            # Try to find image in page source
            content = resp.text
            # Look for image URLs in the response
            img_urls = re.findall(r'https://[^"]*\.jpg[^"]*', content)
            if img_urls:
                return img_urls[0]
        
        return None
        
    except Exception as e:
        print(f"    Error fetching image URL: {str(e)}")
        return None

def download_image(image_url, shortcode):
    """Download image from URL."""
    try:
        if not image_url:
            return False, None
        
        session = get_session()
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = session.get(image_url, headers=headers, timeout=30, allow_redirects=True)
        response.raise_for_status()
        
        # Determine extension
        ext = '.jpg'
        if 'content-type' in response.headers:
            if 'png' in response.headers['content-type']:
                ext = '.png'
            elif 'webp' in response.headers['content-type']:
                ext = '.webp'
        
        # Save image
        filename = f"{shortcode}{ext}"
        filepath = MEDIA_DIR / filename
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"  ✓ Downloaded: {filename} ({len(response.content)} bytes)")
        
        return True, str(filepath)
        
    except Exception as e:
        print(f"  ❌ Download failed: {str(e)}")
        return False, None

def download_instagram_image(url):
    """Download image from Instagram URL."""
    try:
        print(f"Processing: {url}")
        
        shortcode = extract_shortcode(url)
        if not shortcode:
            print(f"  ❌ Could not extract post ID from URL")
            return False, None, shortcode or ''
        
        # Get image URL
        image_url = fetch_image_from_url(shortcode)
        if not image_url:
            print(f"  ⚠️  Could not find image URL (may require login)")
            return False, None, shortcode
        
        # Download the image
        success, filepath = download_image(image_url, shortcode)
        return success, filepath, shortcode
        
    except Exception as e:
        print(f"  ❌ Error: {str(e)}")
        return False, None, ''

def update_manifest(shortcode, url, success, filepath=None):
    """Update the manifest CSV file."""
    row = {
        'shortcode': shortcode,
        'original_url': url,
        'date_collected': datetime.now().isoformat(),
        'status': 'downloaded' if success else 'pending',
        'local_path': filepath or '',
    }
    
    # Read existing or create new
    rows = []
    if MANIFEST_FILE.exists():
        with open(MANIFEST_FILE, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            rows = list(reader) if reader else []
    
    # Check if already exists
    existing = [r for r in rows if r.get('shortcode') == shortcode]
    if not existing:
        rows.append(row)
    
    # Write back
    with open(MANIFEST_FILE, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['shortcode', 'original_url', 'date_collected', 'status', 'local_path']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def main():
    """Main collector function."""
    ensure_dirs()
    
    print("=" * 60)
    print("SIRENA Instagram Image Collector")
    print("=" * 60)
    
    # Load existing URLs
    urls = load_urls()
    
    if len(sys.argv) > 1:
        # URL passed as argument
        new_url = sys.argv[1]
        if new_url not in urls:
            urls.append(new_url)
    
    if not urls:
        print("\n❌ No Instagram URLs found!")
        print(f"\nAdd URLs to {URLS_FILE}:")
        print("  https://www.instagram.com/p/POST_ID/")
        print("  https://www.instagram.com/reel/REEL_ID/")
        return
    
    print(f"\nFound {len(urls)} URL(s) to process:\n")
    
    collected = 0
    for url in urls:
        success, filepath, shortcode = download_instagram_image(url)
        
        if shortcode:
            update_manifest(shortcode, url, success, filepath)
            if success:
                collected += 1
    
    print("\n" + "=" * 60)
    print(f"✓ Collection complete: {collected} image(s) downloaded")
    print(f"📋 Manifest: {MANIFEST_FILE}")
    print(f"📁 Images: {MEDIA_DIR}")
    print("=" * 60)

if __name__ == '__main__':
    main()
