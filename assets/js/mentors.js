/* =====================================================================
   RFI-PaCe — MENTORS DATA
   =====================================================================
   This is the only file you need to edit to update the Mentors section
   on the Team page. Same fields as team.js — see that file for full
   field docs. Quick version:

     name       — include any title (e.g. "Dr.", "Prof.") in the name
                  itself, since mentors are usually referred to that way.
     role       — what they mentor on. Kept generic ("Mentor") below
                  since no specific focus area was given — make it more
                  specific any time, e.g. "RF Systems Mentor".
     university — their affiliation/organisation.
     linkedin   — leave as "" to hide the LinkedIn link.
     photo      — leave as null to show initials until a photo's added.
     bio        — optional, shown under everything else if set.

   ADDING A MENTOR: add an object to the array below, same as team.js.
   ===================================================================== */

const MENTORS = [
  {
    name: "Dr. Hugo Espinosa",
    role: "Mentor",
    university: "Griffith University",
    linkedin: "https://www.linkedin.com/in/hugogespinosa/",
    photo: "assets/img/team/hugo.png",
    bio: null,
  },
  {
    name: "Prof. David Thiel",
    role: "Mentor",
    university: "Griffith University",
    linkedin: "https://www.linkedin.com/in/david-thiel-b3b0282/",
    photo: "assets/img/team/david.png",
    bio: null,
  },
  {
    name: "Ken Smart",
    role: "Mentor",
    university: "CSIRO — Space and Astronomy",
    linkedin: "https://www.linkedin.com/in/ken-smart-88428516/",
    photo: "assets/img/team/ken.png",
    bio: null,
  },
];

window.MENTORS = MENTORS;
