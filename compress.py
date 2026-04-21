"""
compress.py -- one-shot image optimizer for Sirena Asia
Resizes to max 1400px on longest side, saves as JPEG at 82% quality.
NEVER deletes originals -- backs them up to media/_originals/ first.
"""
import os, sys, shutil
from pathlib import Path
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

MEDIA_DIR  = Path(__file__).parent / "media"
BACKUP_DIR = MEDIA_DIR / "_originals"
MAX_PX     = 1400
QUALITY    = 82
EXTS       = {".jpg", ".jpeg", ".png"}

def compress(src: Path):
    rel = src.relative_to(MEDIA_DIR)
    backup = BACKUP_DIR / rel
    backup.parent.mkdir(parents=True, exist_ok=True)

    # Back up original if not already backed up
    if not backup.exists():
        shutil.copy2(src, backup)

    orig_kb = src.stat().st_size // 1024

    with Image.open(src) as img:
        try:
            from PIL import ImageOps
            img = ImageOps.exif_transpose(img)
        except Exception:
            pass

        if img.mode in ("RGBA", "P", "LA"):
            bg = Image.new("RGB", img.size, (10, 20, 45))
            if img.mode == "P":
                img = img.convert("RGBA")
            bg.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        w, h = img.size
        if max(w, h) > MAX_PX:
            scale = MAX_PX / max(w, h)
            img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

        out_path = src.with_suffix(".jpg")
        img.save(out_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

    if src.suffix.lower() == ".png":
        src.unlink()
        src = out_path

    new_kb = src.stat().st_size // 1024
    saved  = orig_kb - new_kb
    print(f"  OK {str(rel)}  {orig_kb}KB -> {new_kb}KB  (saved {saved}KB)")
    return src

def main():
    images = [
        p for p in MEDIA_DIR.rglob("*")
        if p.suffix.lower() in EXTS
        and "_originals" not in p.parts
        and p.stat().st_size > 150_000
    ]

    if not images:
        print("No large images found -- everything is already optimized.")
        return

    print(f"Found {len(images)} images to compress. Backing up to media/_originals/ first.\n")
    for img_path in sorted(images):
        try:
            compress(img_path)
        except Exception as e:
            print(f"  FAIL {img_path.name}: {e}")

    print("\nDone. Originals are safe in media/_originals/")

if __name__ == "__main__":
    main()
