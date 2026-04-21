---
name: build-site
description: Use when someone asks to build a website, create a new site, start a site from scratch, or says "let's build the Sirena website". Guides the full creation workflow — discovery, site map, content, and code.
argument-hint: [optional brief, e.g. "luxury spa for women"]
---

## What This Skill Does

Guides the complete creation of a website from scratch:
1. Reads brand assets from `/brand/`
2. Runs a discovery interview
3. Proposes a site map (approval gate)
4. Writes page copy (approval gate)
5. Generates HTML/CSS/JS files into the project root

Stack: Plain HTML, CSS, JavaScript — no frameworks, no build tools.

---

## Step 1: Load Brand Assets

Before asking the user anything, check for `/brand/brand.md`.

- **If it exists:** Read it. Extract logo path, color palette, typography, and tone/voice. Note what's already known — skip those questions in discovery.
- **If it does not exist:** Note that brand details will be collected during discovery, and the file will be created afterward.

Also check `/brand/` for any logo files (`.svg`, `.png`, `.jpg`). Note the path if found.

---

## Step 2: Discovery Interview

Use AskUserQuestion to gather what you don't already know from brand assets. Run one round at a time. Cover:

1. **Business** — What does this business do? Who is it for? What makes it different?
2. **Goals** — What is the website's primary goal? (bookings, sales, info, leads, portfolio?)
3. **Audience** — Who is the target visitor? Age, interest, intent?
4. **Tone & voice** — How should the site sound? (luxurious, warm, minimal, bold, playful?) — skip if already in brand.md
5. **Colors & fonts** — What are the brand colors and preferred fonts? — skip if already in brand.md
6. **Logo** — Is there a logo file? What is the path? — skip if already found in `/brand/`
7. **Must-have content** — Are there specific pages, features, or sections that must be included?

If `$ARGUMENTS` was provided, use it to pre-fill answers where relevant and skip those questions.

After discovery, if `/brand/brand.md` did not exist, offer to create it:
> "I now have your brand details. Want me to save them to `/brand/brand.md` for future use?"

If yes, write the file using the Brand File Template below.

---

## Step 3: Propose Site Map

Based on discovery answers, propose the pages the site needs. Format as:

```
## Proposed Site Map

- **Home** (index.html) — [one line purpose]
- **About** (about.html) — [one line purpose]
- **Services** (services.html) — [one line purpose]
- **Contact** (contact.html) — [one line purpose]
[add/remove pages based on discovery]
```

Then ask:
> "Does this site map look right? Add, remove, or rename any pages before I continue."

**Do not proceed until the user approves the site map.**

---

## Step 4: Write Page Copy

For each approved page, write the full copy:
- Page headline (H1)
- Subheadline or intro paragraph
- Section headings and body copy
- Call-to-action text and button labels
- Any lists, features, or testimonial placeholders

Apply the brand tone and voice throughout. Keep copy concise and purposeful.

Present all copy as a draft in the conversation, organized by page. Then ask:
> "Here's the copy for all pages. Does it capture the right tone? Any changes before I generate the code?"

**Do not proceed until the user approves the copy.**

---

## Step 5: Generate Code

Generate the following files. Write each one using the Write tool.

### Files to generate:

**`style.css`**
- CSS custom properties (variables) for brand colors and fonts at `:root`
- Reset and base styles
- Reusable layout: `.container`, `.section`, `.btn`
- Component styles: `header`, `nav`, `footer`, `hero`, `cards`, `forms`
- Mobile-first responsive design with media queries

**`script.js`**
- Mobile nav toggle
- Smooth scroll for anchor links
- Any interactive elements discovered (e.g. contact form basic validation)

**`index.html` + one file per additional page**
- Full HTML5 document with `<!DOCTYPE html>`
- Link to `style.css` and `script.js`
- Use logo from brand path in `<header>` (e.g. `<img src="/brand/logo.svg" alt="[Company] logo">`)
- Apply approved copy exactly
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Placeholder images: `<img src="placeholder.jpg" alt="[descriptive alt text]">`

### Before writing each file:

Check if the file already exists in the project root. If it does:
> "⚠️ `[filename]` already exists. Overwrite it, skip it, or rename the new file?"

Wait for the user's answer before writing.

---

## Step 6: Wrap Up

After all files are written, output a summary:

```
## Build Complete

**Pages created:**
- index.html
- [other pages]

**Assets linked:**
- /brand/[logo file] → used in header
- style.css → brand colors and fonts applied
- script.js → nav, scroll, interactions

**Next steps:**
- Replace placeholder images with real photos
- Test on mobile (resize browser or use DevTools)
- Add real form action URL to contact form (if applicable)
- Deploy: drag folder to Netlify Drop, or push to GitHub Pages
```

---

## Brand File Template

Use this when creating `/brand/brand.md` from discovery answers:

```markdown
# Sirena Brand

## Logo
- File: /brand/[filename]
- Alt text: [Company name] logo

## Colors
- Primary: #[hex] — [usage, e.g. "buttons, headings"]
- Secondary: #[hex] — [usage]
- Accent: #[hex] — [usage]
- Background: #[hex]
- Text: #[hex]

## Typography
- Headings: [font name] — [source, e.g. Google Fonts]
- Body: [font name] — [source]

## Tone & Voice
[2-3 sentences describing how the brand sounds and what to avoid]

## Business
- Name: [name]
- Tagline: [tagline if any]
- What they do: [one sentence]
- Target audience: [description]
```

---

## Notes

- **Never overwrite existing files silently.** Always warn and ask.
- **Never skip discovery.** Even if $ARGUMENTS provides a brief, still confirm goals and audience.
- **No external images.** Use `placeholder.jpg` with descriptive alt text only.
- **No frameworks or CDN imports** unless the user explicitly asks during discovery.
- **brand.md is the source of truth.** If it exists, trust it over what the user says in discovery (but flag conflicts).
- Keep generated HTML clean and readable — no minification, no inline styles.
