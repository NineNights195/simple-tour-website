# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

No build step or package manager — open any `.html` file directly in a browser, or serve with:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no tests, linters, or CI pipelines configured.

## Architecture

**Pure static site** — vanilla HTML + CSS + JS, no framework, no bundler.

| File | Role |
|------|------|
| `script.js` | Single source of truth: tour data (`TOURS` array) + all shared JS functions |
| `style.css` | All styles for every page; uses CSS custom properties defined in `:root` |
| `index.html` | Homepage: hero, services slider, full tour listing |
| `tours.html` | Tours-only page: search + category filter + cards |
| `booking.html` | Booking form: reads `?id=` param, renders tour summary, submits to success screen |
| `contact.html` | Contact form (demo submit) + info panel |
| `login.html` | Login form — `action="login.php"` (PHP backend, not included in this repo) |
| `register.html` | Register form with client-side password validation |

## Key patterns

**Adding or editing tours** — all tour data lives in the `TOURS` array at the top of `script.js`. Each object requires: `id` (unique int), `title`, `location`, `category`, `duration` (e.g. `"7 Days"` — the integer is parsed for end-date calculation), `groupSize`, `rating`, `reviews`, `price` (USD int), `image` (URL), `description` (card snippet), `fullDescription` (modal body), `highlights` (string array).

**Category chips** — the `category` field on each tour must exactly match the `data-cat` attribute on the chip buttons in each page's HTML. Both `index.html` and `tours.html` maintain their own chip bars; keep them in sync when adding a new category.

**Modal → Booking handoff** — `openModal()` in `script.js` dynamically sets `#modal-book-btn`'s `onclick` to `booking.html?id=${tour.id}`. The booking page resolves the tour by finding `id` in `TOURS`. Any page that includes the tour modal must give the Book Now button `id="modal-book-btn"`.

**Price calculation** — `booking.html` computes child price as `Math.round(basePrice * 0.8)` (−20%). Grand total = `adults × base + children × childPrice`. This logic is inline in `booking.html`'s `<script>` block, not in `script.js`.

**CSS variables** — all colours, shadows, and border-radius come from `:root` variables (`--primary`, `--primary-l`, `--primary-d`, `--sky`, `--sky-d`, `--bg`, `--white`, `--text`, `--muted`, `--border`). Never hardcode colour values; use the variables.

**Services slider** — fully self-contained inside `index.html`'s inline `<script>`. It calculates visible card count from `window.innerWidth` (3 / 2 / 1 for desktop / tablet / mobile) and translates the track with `transform: translateX`. Rebuilds on resize.
