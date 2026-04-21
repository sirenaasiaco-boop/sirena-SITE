# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project Structure
This is the **Sirena Asia** website — Asia's Premier Mermaid Collective. Multi-page static site (8 HTML files, all styles inline, no build step).

Pages: `index.html`, `performers.html`, `team.html`, `shows.html`, `gallery.html`, `shop.html`, `news.html`, `contact.html`

- `brand/` — Logo (`SIRENA_logo.png`) and `brand.md` (colors, fonts, tone). Always read `brand/brand.md` before editing design.
- `media/` — Real photos/videos. Structure: `media/performers/[name]/`, `media/gallery/photos/`, `media/gallery/videos/`, `media/general/`. When a performer's real photo exists here, use it instead of `placehold.co`.
- `brand_assets/` — May also contain brand files; check both `brand/` and `brand_assets/`.

## Brand Tokens (do not invent alternatives)
- Navy: `#001a4d` / Deep navy: `#000d26` / Cyan: `#00bcd4` / Cyan glow: `#00e5ff` / Coral: `#ff6b9d` / Mist: `#e8f4f8`
- Fonts: `Cinzel` (display/headings) + `Cormorant Garamond` (sub/italic) + `Inter` (body) — all via Google Fonts CDN
- Logo: use `mix-blend-mode: screen` on all `<img>` logo elements so the logo background blends with dark page

## Local Server
- **Node.js is NOT in the system PATH.** Use the PowerShell server instead.
- Start server: `cmd //c "powershell -ExecutionPolicy Bypass -File C:\\Users\\BLUEMO~1\\AppData\\Local\\Temp\\sirena-serve.ps1" &`
- Server runs on **port 8080** (not 3000) — `http://localhost:8080`
- `serve.ps1` in the project root is the original; `C:/Users/BLUEMO~1/AppData/Local/Temp/sirena-serve.ps1` is the working copy with correct root path.
- Check if already running before starting: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/`
- Never screenshot a `file:///` URL.

## Screenshot Workflow
- Node.js is not installed — `screenshot.mjs` (Puppeteer) cannot run. Screenshots must be taken manually by the user opening a browser.
- When the user reports visual issues, ask them to describe what they see or share a screenshot.
- When changes are made, remind the user to hard-refresh (`Ctrl+Shift+R`) in the browser.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).

## Output Defaults
- All styles inline in each HTML file — no separate CSS files unless explicitly requested
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT/BGCOLOR/TEXTCOLOR?text=Label`
- Mobile-first responsive

## Animation Conventions (established patterns — maintain consistency)
- Floating bubbles: JS-generated `<div class="bubble">` elements, CSS `@keyframes bubbleRise`
- Scroll reveal: `.reveal` + `.reveal.visible` via `IntersectionObserver`
- Entrance: `@keyframes fadeUp` with `animation-delay` stagger
- Parallax: `requestAnimationFrame` on `window.scroll`, only `transform: translateY()`
- Only animate `transform` and `opacity`. Never `transition-all`.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette. Always use the brand tokens above.
- **Shadows:** Layered, color-tinted with low opacity (e.g. `0 4px 24px rgba(255,107,157,0.35)`).
- **Typography:** Headings use `font-weight: 700` or `900` (never 400/300 on hero text). Body `font-weight: 300–400`.
- **Gradients:** Layer multiple radial gradients. Add SVG noise grain texture via `body::before`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Images:** Add gradient overlay (`linear-gradient(180deg, transparent 40%, rgba(0,13,38,0.95))`) on performer cards.
- **Depth:** z-layers: `body::before` (noise, z:1000) → fixed nav (z:100) → mobile menu (z:99) → content.

## Hard Rules
- Do not add sections or features not requested
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not overwrite existing files without confirming with the user first
