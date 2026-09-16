# RFI-PaCe — Partners & Sponsors site

Static site for GitHub Pages. Two pages: a landing page and the
partners/sponsors page.

## Structure

```
index.html                    Landing page (mission patch, blurb, CTA)
supporters.html               Partners & Sponsors page
assets/css/style.css          All styling
assets/js/supporters.js       THE DATA FILE — edit this to update the lists
assets/js/render-board.js     Shared rendering logic (no need to touch)
assets/img/                   Mission patch
assets/logos/                 Partner & sponsor logo files
```

## Updating partners and sponsors

Everything lives in `assets/js/supporters.js` — two arrays, `PARTNERS`
and `SPONSORS`. Each entry takes a `name`, a `link` (the one URL the
whole card opens), a `logo` path, an optional one-line `note`, and an
optional `cardBg`. Field docs are in the comment at the top of that
file. No HTML editing needed.

To add someone: drop the logo into `assets/logos/`, add an object to
the right array. An entry with no `logo` shows a "logo pending"
placeholder, so you can list a supporter before their artwork arrives.

### Tile backgrounds

Every logo currently on the site was extracted from the team's supporter
slide as a transparent PNG, and most are drawn in dark ink, so they all
carry `cardBg: "white"`. If you add a logo that's designed for dark
backgrounds, leave `cardBg` off (it sits straight on the navy panel) or
use `cardBg: "black"`.

## Logos

The six logos in `assets/logos/` were cut out of the supporter slide,
run through a super-resolution upscale, and had the blue slide
background keyed out to transparency. They're good for web display at
the sizes used here, but they are **not** official brand assets — if any
of these organisations gives you a proper vector or high-res logo, drop
it in over the top using the same filename and nothing else has to
change.

The mission patch (`assets/img/rfi-pace-logo.png`) was upscaled 4× from
the 150px original and masked to a transparent circle. There's also
`rfi-pace-logo-square.png` (the full 600×600 upscale on its black
square) if you ever want the square version.

Currently listed:

- **Partners** — Griffith University, The University of Queensland,
  CSIRO, IEEE GRSS, Ansys, LEAP Australia
- **Sponsors** — PTC, PCBWay

The CSIRO and PCBWay logos came in as proper transparent PNGs rather
than slide cut-outs, so those two are clean source artwork.

## Adding a second phase later

The site is deliberately built for one phase. If the project ever splits
into phases, copy `supporters.js` → `supporters-phase-2.js`, copy
`supporters.html`, point the new page's `<script src>` at the new data
file, and add a button on `index.html`.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repo.
2. Settings → Pages, set the source to the branch and folder holding
   these files.
3. GitHub gives you a URL like `https://<username>.github.io/<repo>/`.
