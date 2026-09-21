/* =====================================================================
   RFI-PaCe — OUTREACH DATA
   =====================================================================
   This is the only file you need to edit to update the Outreach page.
   It's a record of where the project has been presented or shown —
   separate from the Timeline (which tracks technical/mission progress)
   and Publications-style documents. Useful later for showing project
   visibility to IEEE GRSS, Griffith, sponsors or flight partners.

   Each entry is one appearance:
     event       (required) — name of the event, e.g. "Ansys Day 2026".
     date        (required) — as specific as you have: "September 2026",
                              "2026", "14 Mar 2027" all work.
     location    (required) — venue / host, e.g. "Griffith University,
                              Nathan" or "Reykjavík, Iceland".
     type        (required) — one or more tags describing what kind of
                              appearance it was. Pick from:
                                "presentation" — a talk / project
                                                 presentation
                                "conference"   — a formal conference
                                "outreach"     — a lower-key project
                                                 introduction / showcase
                              Can be a single string or an array of a
                              few, e.g. ["conference"] or
                              ["presentation", "outreach"].
     description (required) — one or two sentences on what happened.
     status      (optional) — set to "planned" for something booked in
                              but not yet happened (shows a "Planned"
                              note). Leave off once it's actually
                              happened.
     photo       (optional) — path to a photo of the event, e.g.
                              "assets/img/outreach/ansys-day-2026.jpg".
                              Leave off and the card just has no photo.

   Keep the array in chronological order (oldest first) — that's the
   order it renders in.
   ===================================================================== */

const OUTREACH = [
  {
    event: "Ansys Day 2026",
    date: "2026",
    location: "Ansys / university event",
    type: ["presentation"],
    description: "RFI-PaCe was introduced as part of an Ansys-focused engineering event, presenting the mission concept and the role of simulation in the payload development.",
    photo: null,
  },
  {
    event: "Griffith Showcase — Nathan",
    date: "October 2026",
    location: "Griffith University, Nathan",
    type: ["outreach"],
    description: "RFI-PaCe project introduction to attendees at the Griffith University Nathan campus showcase.",
    photo: null,
  },
  {
    event: "Griffith Showcase — Gold Coast",
    date: "November 2026",
    location: "Griffith University, Gold Coast",
    type: ["outreach"],
    description: "RFI-PaCe project introduction to attendees at the Griffith University Gold Coast campus showcase.",
    photo: null,
  },
  {
    event: "IEEE IGARSS 2027",
    date: "2027",
    location: "Reykjavík, Iceland",
    type: ["conference"],
    description: "Planned conference presentation of the RFI-PaCe mission, subject to paper acceptance.",
    status: "planned",
    photo: null,
  },
];

window.OUTREACH = OUTREACH;
