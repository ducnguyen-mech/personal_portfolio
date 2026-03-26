# My Portfolio — Quick Reference Guide

## How to open the site
Double-click `index.html` — opens in your browser. No install needed.
(If it looks unstyled, use VS Code + Live Server extension instead.)

---

## The new architecture

| Before | Now |
|--------|-----|
| Name/email/LinkedIn copy-pasted in every file | Stored ONCE in `config.js` |
| Nav HTML copy-pasted in every file | Written ONCE in `components.js`, auto-injected |
| Footer HTML copy-pasted in every file | Same — written ONCE, auto-injected |

**The rule:**
- Personal info (name, email, bio...) → edit `config.js`
- Design (colors, fonts, spacing) → edit `style.css`
- Everything else → just the content inside each page

---

## File Map

```
my-portfolio/
│
├── config.js               ← ★ YOUR INFO — edit this first
├── components.js           ← Shared nav + footer (don't edit)
├── style.css               ← All colors and fonts (edit to restyle)
│
├── index.html              ← About Me page
├── projects.html           ← Projects listing
├── blog.html               ← Blog listing
│
├── projects/
│   ├── template-project.html  ← COPY THIS for new projects
│   └── cnc-milling.html       ← Example
│
├── blog/
│   ├── template-post.html     ← COPY THIS for new posts
│   └── tokyo-trip.html        ← Example
│
└── assets/
    ├── profile.jpg
    ├── resume.pdf
    ├── projects/
    └── blog/
```

---

## Step 1: Fill in your info (once only)

Open `config.js` and update every field. Your name, email, bio, tags etc.
will then appear correctly everywhere automatically.

---

## Add a new project
1. Copy `projects/template-project.html` → rename it
2. Fill in the `<!-- CHANGE: -->` spots
3. Open `projects.html` → copy a card block → update title, excerpt, href
4. Done

## Add a new blog post
1. Copy `blog/template-post.html` → rename it
2. Write your post
3. Open `blog.html` → copy a card block → paste at TOP → update content
4. Done

---

## Snippets

**Image in a post:**
```html
<img src="../assets/projects/photo.jpg" alt="Description" class="post-image" />
<p class="caption">Figure 1 — Caption here.</p>
```

**Table:**
```html
<table class="data-table">
  <thead><tr><th>Col A</th><th>Col B</th></tr></thead>
  <tbody>
    <tr><td>Value</td><td>Value</td></tr>
  </tbody>
</table>
```

**Callout box:**
```html
<div class="callout">💡 Your note here.</div>
```

---

## Go live for free

Drag your `my-portfolio` folder to **app.netlify.com/drop** — done.
