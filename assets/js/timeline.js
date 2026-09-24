/* =====================================================================
   RFI-PaCe — MISSION TIMELINE DATA
   =====================================================================
   This is the only file you need to edit to update the timeline page.

   Each entry is one phase of the mission:
     period    (required) — short label for when this happens,
                            e.g. "Mar – Jun 2026". Doesn't need to be
                            exact dates if you don't have them yet.
     title     (required) — name of the phase.
     blurb     (required) — one or two sentences on what happens in
                            this phase.
     status    (required) — one of:
                              "done"     — phase is complete (shown green)
                              "current"  — phase is happening now (shown gold)
                              "upcoming" — phase hasn't started yet (shown blue)
                            Exactly one phase should normally be "current".

   Keep the array in chronological order — that's the order it renders
   top to bottom.
   ===================================================================== */

const TIMELINE = [
  {
    period: "January 2026",
    title: "Project Kickoff",
    blurb: "RFI-PaCe begins as Team Australia for the IEEE GRSS Student Grand Challenge, establishing the mission concept, team, and initial system architecture.",
    status: "done",
  },
  {
    period: "April 2026",
    title: "Preliminary Design Review (PDR)",
    blurb: "Preliminary payload architecture and subsystem concepts are reviewed against the mission requirements, establishing the baseline for detailed development.",
    status: "done",
  },
  {
    period: "September 2026",
    title: "Critical Design Review (CDR)",
    blurb: "The detailed payload design is reviewed and the hardware, PCB, mechanical, thermal, and processing architectures are prepared for implementation.",
    status: "current",
  },
  {
    period: "November 2026",
    title: "Engineering Model / Integration",
    blurb: "The engineering model is assembled and subsystem integration begins, combining the RF, digital, mechanical, and processing elements of the payload.",
    status: "upcoming",
  },
  {
    period: "January 2027",
    title: "Verification & Environmental Testing",
    blurb: "The integrated payload undergoes functional, performance, and environmental verification in preparation for flight delivery.",
    status: "upcoming",
  },
  {
    period: "TBD",
    title: "Delivery & Launch",
    blurb: "The flight-ready payload is delivered for spacecraft integration, followed by launch and on-orbit commissioning.",
    status: "upcoming",
  },
  {
    period: "January 2027",
    title: "IGARSS 2027 Paper Submission",
    blurb: "A conference paper presenting key outcomes from the RFI-PaCe project is planned for submission to IEEE IGARSS 2027.",
    status: "upcoming",
  },
  {
    period: "Subject to acceptance",
    title: "IGARSS 2027 Presentation",
    blurb: "Subject to paper acceptance, project results are planned to be presented at IEEE IGARSS 2027 in Reykjavík.",
    status: "upcoming",
  },
 {
    period: "Mid-Late 2027",
    title: "Further Research",
    blurb: "Stay tuned for details, as this is not the end of the team",
    status: "upcoming",
  },
];

window.TIMELINE = TIMELINE;
