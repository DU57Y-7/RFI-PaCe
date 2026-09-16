/* =====================================================================
   RFI-PaCe — PARTNER & SPONSOR DATA
   =====================================================================
   This is the only file you need to edit for a normal update.

   Fields (same for partners and sponsors):
     name    (required) — organisation name as it should appear
     link    (optional) — the ONE url the whole card opens
     logo    (optional) — path to the logo file in assets/logos/.
                          Omit it and the card shows a "logo pending"
                          placeholder until you add one.
     note    (optional) — one short line under the name, e.g. what they
                          contribute. Leave it off if it adds nothing.
     cardBg  (optional) — "white" | "black". Forces the tile colour
                          behind the logo. All the logos extracted from
                          the team slide are transparent PNGs drawn in
                          dark ink, so they need "white". Leave unset
                          for a logo that reads on the dark page.

   ADDING A NEW SUPPORTER
     1. Drop the logo file into assets/logos/
     2. Add an object to the right array below.
   ===================================================================== */

const PARTNERS = [
  {
    name: "Griffith University",
    link: "https://www.griffith.edu.au",
    logo: "assets/logos/griffith-university.png",
    cardBg: "white",
  },
  {
    name: "The University of Queensland",
    link: "https://www.uq.edu.au",
    logo: "assets/logos/university-of-queensland.png",
    cardBg: "white",
  },
  {
    name: "IEEE Geoscience and Remote Sensing Society",
    link: "https://www.grss-ieee.org",
    logo: "assets/logos/ieee-grss.png",
    cardBg: "white",
  },
];

const SPONSORS = [
  {
    name: "PTC",
    link: "https://www.ptc.com",
    logo: "assets/logos/ptc.png",
    cardBg: "white",
  },
  {
    name: "Ansys",
    link: "https://www.ansys.com",
    logo: "assets/logos/ansys.png",
    cardBg: "white",
  },
  {
    name: "LEAP Australia",
    link: "https://www.leapaust.com.au",
    logo: "assets/logos/leap-australia.png",
    cardBg: "white",
  },
];

// Explicit window assignment — top-level `const` does NOT become a
// window property in a classic <script>, only `var` does. render-board.js
// reads window.PARTNERS / window.SPONSORS, so without these two lines the
// page renders nothing.
window.PARTNERS = PARTNERS;
window.SPONSORS = SPONSORS;
