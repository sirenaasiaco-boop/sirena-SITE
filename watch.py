"""
watch.py -- auto-compress new images dropped into media/
Watches the media/ folder. Any new image > 150KB gets compressed automatically.
Run once, leave it open in the background.

Usage:  python watch.py
Stop:   Ctrl+C
"""
import sys, time, shutil
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from pathlib import Path
from PIL import Image

try:
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
except ImportError:
    print("Installing watchdog...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "watchdog", "-q"])
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler

MEDIA_DIR  = Path(__file__).parent / "media"
BACKUP_DIR = MEDIA_DIR / "_originals"
MAX_PX     = 1400
QUALITY    = 82
EXTS       = {".jpg", ".jpeg", ".png"}
MIN_BYTES  = 150_000

def compress(src: Path):
    if "_originals" in src.parts:
        return
    if src.suffix.lower() not in EXTS:
        return
    if src.stat().st_size < MIN_BYTES:
        return

    rel    = src.relative_to(MEDIA_DIR)
    backup = BACKUP_DIR / rel
    backup.parent.mkdir(parents=True, exist_ok=True)
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

    # Remove original if it was not already a .jpg
    if src.suffix.lower() in (".png", ".jpeg"):
        src.unlink()

    new_kb = out_path.stat().st_size // 1024
    print(f"  OK {str(rel.parent)}/{out_path.name}  {orig_kb}KB -> {new_kb}KB")

class Handler(FileSystemEventHandler):
    def on_created(self, event):
        if event.is_directory:
            return
        path = Path(event.src_path)
        time.sleep(0.8)
        try:
            compress(path)
        except Exception as e:
            print(f"  FAIL {path.name}: {e}")

    def on_moved(self, event):
        self.on_created(type('E', (), {'is_directory': False, 'src_path': event.dest_path})())

if __name__ == "__main__":
    print(f"Watching  {MEDIA_DIR}")
    print("Drop images into any media/ subfolder -- they will be auto-compressed.")
    print("Press Ctrl+C to stop.\n")

    observer = Observer()
    observer.schedule(Handler(), str(MEDIA_DIR), recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
