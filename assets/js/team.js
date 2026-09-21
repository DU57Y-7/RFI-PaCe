/* =====================================================================
   RFI-PaCe — TEAM DATA
   =====================================================================
   This is the only file you need to edit to update the team page.

   Each entry is one team member:
     name       (required once you have it) — leave off entirely, or
                        set to null, and the card shows "Name coming
                        soon" instead.
     role       (required) — what they work on, e.g. "Team Lead",
                        "RF Systems Lead".
     university (optional) — shown under the role, e.g.
                        "Griffith University — Undergraduate" or
                        "University of Queensland — PhD Candidate".
                        Leave off and the card shows "University — TBC".
     linkedin   (optional) — full LinkedIn profile URL. Shows a
                        LinkedIn link/button on the card. Leave off
                        (or leave as "") to hide it.
     photo      (optional) — image URL for their photo. Can be a
                        local path (assets/img/team/name.png) or an
                        external URL. If it fails to load, the card
                        falls back to initials automatically.
     bio        (optional) — a short paragraph shown under everything
                        else. Leave off and the card just doesn't
                        show a bio section.

   ADDING A MEMBER
     1. (Optional) drop a photo into assets/img/team/, or use a URL.
     2. Add an object to the array below.

   NOTE: Gordon and Seven don't have a saved photo file yet (their
   `photo` path points at assets/img/team/gordon.png and seven.png,
   which don't exist in this build) — their cards will just show
   initials until those images are added.
   ===================================================================== */

const TEAM = [
  {
    name: "Andreas Froehlich",
    role: "Project Manager & Systems Engineering",
    university: "Griffith University — PhD Candidate",
    linkedin: "https://www.linkedin.com/in/afroehlich-sci/",
    photo: "assets/img/team/andreas.png",
    bio: null,
  },
  {
    name: "Derren Healy",
    role: "Deputy Project Manager & Systems Engineering",
    university: "Griffith University — PhD Candidate",
    linkedin: "https://www.linkedin.com/in/derren-healy/",
    photo: "assets/img/team/derren.png",
    bio: null,
  },
  {
    name: "Jatinderbir Singh",
    role: "Thermal & Simulation Engineering",
    university: "Griffith University — PhD Candidate",
    linkedin: "https://www.linkedin.com/in/jatinderbir-singh-a54876226/",
    photo: "assets/img/team/jatinderbir.png",
    bio: null,
  },
  {
    name: "Gordon Haylett",
    role: "Microwave & Digital Engineering",
    university: "University of Queensland",
    linkedin: "",
    photo: "assets/img/team/gordon.png",
    bio: null,
  },
  {
    name: "Max Gadsby",
    role: "Microwave, Analog & Digital Engineering",
    university: "Griffith University — PhD Candidate",
    linkedin: "https://www.linkedin.com/in/max-gadsby-4148b926a/",
    photo: "assets/img/team/max.png",
    bio: null,
  },
  {
    name: "Jesse Markham",
    role: "Signal Processing & Embedded Systems, Social Media",
    university: "Griffith University — Undergraduate Student",
    linkedin: "https://www.linkedin.com/in/jesse-markham/",
    photo: "assets/img/team/jesse.png",
    bio: null,
  },
  {
    name: "Seven Luscombe",
    role: "Structural & Mechanical Engineering",
    university: "Griffith University — Undergraduate Student",
    linkedin: "https://www.linkedin.com/in/seven-luscombe-97a6162bb/",
    photo: "assets/img/team/seven.png",
    bio: null,
  },
  {
    name: "Dustin McGuire",
    role: "Marketing, Outreach & Social Media",
    university: "Griffith University — Undergraduate Student",
    linkedin: "https://www.linkedin.com/in/du57y/",
    photo: "assets/img/team/dustin.png",
    bio: null,
  },
];

window.TEAM = TEAM;
