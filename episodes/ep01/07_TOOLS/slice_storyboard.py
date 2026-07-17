#!/usr/bin/env python3
"""Regenerate the sixteen clean Episode 1 frame crops from the revised storyboard.

Usage:
    python slice_storyboard.py /path/to/UMADA_EP01_REVISED_STORYBOARD.png /output/frames
"""
from pathlib import Path
from PIL import Image
import sys

COLS = [(16, 395), (400, 765), (770, 1106), (1111, 1519)]
ROWS = [(51, 252), (324, 505), (569, 729), (791, 947)]
NAMES = [
    'ep01-frame-01-council-era.png',
    'ep01-frame-02-dispatch.png',
    'ep01-frame-03-activation.png',
    'ep01-frame-04-arrival-friedmandorstrop.png',
    'ep01-frame-05-garden-at-lab.png',
    'ep01-frame-06-going-for-bread.png',
    'ep01-frame-07-ada-arrives-early.png',
    'ep01-frame-08-tick-four-record.png',
    'ep01-frame-09-tick-five-recognition.png',
    'ep01-frame-10-boom.png',
    'ep01-frame-11-rescue-begins.png',
    'ep01-frame-12-quartz-finds-something.png',
    'ep01-frame-13-to-safety.png',
    'ep01-frame-14-stabilization.png',
    'ep01-frame-15-ada-remembers.png',
    'ep01-frame-16-close-part-two-tease.png',
]

def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit('Usage: slice_storyboard.py BOARD.png OUTPUT_DIR')
    board = Image.open(sys.argv[1]).convert('RGB')
    if board.size != (1536, 1024):
        raise SystemExit(f'Expected 1536x1024 board; received {board.size}. Update crop coordinates before proceeding.')
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    for index, name in enumerate(NAMES):
        row, col = divmod(index, 4)
        left, right = COLS[col]
        top, bottom = ROWS[row]
        board.crop((left, top, right, bottom)).save(out_dir / name, optimize=True)
        print(out_dir / name)

if __name__ == '__main__':
    main()
