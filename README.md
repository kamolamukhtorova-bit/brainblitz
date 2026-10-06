# BrainBlitz

Live quiz game site. Plain HTML/CSS/JS, no build step.

## Files
- `index.html` – the whole app (landing, join flow, host dashboard, creator, game, podium, report)
- `about.html`, `help.html`, `privacy.html`, `terms.html` – static pages (share `page.css` + `page.js`)
- `404.html` – not-found page
- `.nojekyll` – tells GitHub Pages to serve files as-is
- `.github/workflows/pages.yml` – optional Actions deploy

## Deploy on GitHub Pages
1. Create a repo and push all these files to `main`.
2. **Settings → Pages → Build and deployment → Source:**
   - *Deploy from a branch* → `main` / `(root)`, **or**
   - *GitHub Actions* (uses `pages.yml`).
3. Your site appears at `https://<user>.github.io/<repo>/`.

All links are relative, so it works under the `/<repo>/` path and on a custom domain.

## Try the states
- PIN `19xxxx` → "Game is full", PIN `18xxxx` → "Game already started", any other PIN starting with `1` joins.
- After joining, **Try a demo round** opens the player answer screen.

Theme choice is saved in `localStorage` (`bb-theme`).
