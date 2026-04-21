# Instagram Image Collector

Collects images from Instagram URLs for the Sirena website.

## Setup

1. **Install Python** (if not already installed)
   - Download from https://www.python.org

2. **Install dependencies:**
   ```bash
   pip install instagrapi requests
   ```

## Usage

### Option 1: Add URLs to file and collect
Edit `instagram-urls.txt` and add Instagram URLs (one per line):
```
https://www.instagram.com/p/DTb-_l8EhcN/
https://www.instagram.com/p/ANOTHER_POST_ID/
```

Then run:
```bash
python collect-instagram.py
```

### Option 2: Collect single URL directly
```bash
python collect-instagram.py https://www.instagram.com/p/DTb-_l8EhcN/
```

## Output

- **Images** → `media/social-media/instagram/`
- **Manifest** → `media/social-media/instagram/manifest.csv` (tracks all downloads)

## Notes

- ⚠️ Instagram API requires authentication for reliable access
- For best results, provide Instagram login credentials in the script (optional)
- Manual download available via `manifest.csv` if API fails
- Respects Instagram rate limits and Terms of Service
- Only works with URLs from accounts you have permission to access

## Manifest File

The `manifest.csv` includes:
- `post_id` - Instagram post ID
- `original_url` - Original Instagram URL
- `date_collected` - When the image was collected
- `status` - Downloaded or pending
- `local_path` - Path to saved image
- `notes` - Any errors or notes
