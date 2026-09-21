# RFI-PaCe — site

Static site for GitHub Pages. Home, Team, Timeline, Sponsors, Support
Us, Publications and Contact Us, all under one hamburger nav (top
right, every page).

## Structure

```
index.html                    Home (mission patch, blurb)
team.html                     Team page (roster grid)
timeline.html                 Vertical mission timeline
supporters.html                Partners & Sponsors page
support-us.html                Prospectus download + enquiry channel
publications.html              Publications (coming-soon state for now)
contact.html                   Contact Us
assets/css/style.css           All styling
assets/js/nav.js               Hamburger nav open/close + active-page highlight
assets/js/supporters.js        DATA FILE — partners & sponsors list
assets/js/render-board.js      Renders supporters.js onto supporters.html
assets/js/timeline.js          DATA FILE — mission timeline phases
assets/js/render-timeline.js   Renders timeline.js onto timeline.html
assets/js/team.js              DATA FILE — team roster
assets/js/render-team.js       Renders team.js onto team.html
assets/img/                    Mission patch
assets/logos/                  Partner & sponsor logo files
assets/sponsorship-prospectus.pdf   Downloadable from the Support Us page
```

## Updating content

Each data file (`supporters.js`, `timeline.js`, `team.js`) has field
docs in a comment at the top — no HTML editing needed for normal
updates. Everything else works the same as before (see the comments
in those files for exact field names).

### Timeline colours

`timeline.js` sets each phase's `status` to `"done"` (green),
`"current"` (gold) or `"upcoming"` (blue). Keep exactly one phase as
`"current"` — that's the one the gold node and the "In progress now"
tag land on.

### Swapping the prospectus

Drop the new file in over `assets/sponsorship-prospectus.pdf` with
the same filename and the Support Us page's download button picks it
up automatically — nothing else needs to change.

### Nav links

The nav list is duplicated at the top of every HTML file (no build
step on this site), so adding/renaming/removing a page means editing
that `<nav class="site-nav">` block in all seven files. Each link's
`data-page` attribute must match the `<body data-page="...">` value
on its own page, or the active-page highlight won't line up.

## Logos

The logos in `assets/logos/` were cut out of the supporter slide, run
through a super-resolution upscale, and had the blue slide background
keyed out to transparency. They're good for web display at the sizes
used here, but they are **not** official brand assets — if any of
these organisations gives you a proper vector or high-res logo, drop
it in over the top using the same filename and nothing else has to
change.

The mission patch (`assets/img/rfi-pace-logo.png`) was upscaled 4×
from the 150px original and masked to a transparent circle. There's
also `rfi-pace-logo-square.png` (the full 600×600 upscale on its
black square) if you ever want the square version.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repo.
2. Settings → Pages, set the source to the branch and folder holding
   these files.
3. GitHub gives you a URL like `https://<username>.github.io/<repo>/`
   (or your custom domain, via the `CNAME` file).

