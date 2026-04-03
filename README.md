# tui-image-conv

A browser-based tool that converts images into text-based Unicode art, rendered as copyable HTML snippets. No server, no dependencies — just a single `index.html` file.

## what it does

Drop in a PNG, JPG or WebP image and the converter produces a styled HTML snippet using Unicode block characters and CSS color classes. The output can be pasted into any webpage and will render as a monospaced text image.

## render modes

- **half-block** — upper/lower half-block characters for 2:1 vertical resolution
- **braille** — Unicode braille patterns for fine detail
- **ascii** — classic ASCII density ramp
- **block shading** — full, dark, medium, light shade characters

## color palettes

- true color (24-bit hex)
- ANSI 256
- ANSI 16
- monochrome (white, green, amber)

Floyd-Steinberg dithering is applied automatically when using limited palettes.

## options

- adjustable output width
- TUI-style border frame
- CRT scanline overlay
- filename label
- snippet size indicator

## output

The generated HTML snippet uses CSS class indexing and hex colors to keep file size small. Consecutive identical spans are merged via run-length encoding. Copy the snippet with one click and paste it into any HTML page.

## usage

Open `index.html` in a browser. That's it.

To host it, push to a public GitHub repo and enable GitHub Pages — no build step required.
