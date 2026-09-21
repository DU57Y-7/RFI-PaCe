/* =====================================================================
   RENDER TIMELINE
   Reads window.TIMELINE (defined in timeline.js, loaded before this
   script) and builds the vertical phase list on timeline.html.
   ===================================================================== */

(function () {
  function buildItem(phase) {
    var item = document.createElement("div");
    item.className = "timeline-item status-" + phase.status;

    var node = document.createElement("div");
    node.className = "timeline-node";
    item.appendChild(node);

    var segment = document.createElement("div");
    segment.className = "segment";
    item.appendChild(segment);

    var period = document.createElement("div");
    period.className = "timeline-period";
    period.textContent = phase.period;
    item.appendChild(period);

    var h3 = document.createElement("h3");
    h3.textContent = phase.title;
    item.appendChild(h3);

    var p = document.createElement("p");
    p.textContent = phase.blurb;
    item.appendChild(p);

    if (phase.status === "current") {
      var tag = document.createElement("span");
      tag.className = "status-tag";
      tag.textContent = "In progress now";
      item.appendChild(tag);
    }

    return item;
  }

  function render() {
    var root = document.getElementById("timeline-root");
    if (!root) return;
    var phases = window.TIMELINE || [];
    if (!phases.length) {
      root.innerHTML = "<p>Timeline coming soon — add phases to assets/js/timeline.js.</p>";
      return;
    }
    var track = document.createElement("div");
    track.className = "timeline-track";
    root.appendChild(track);
    phases.forEach(function (phase) {
      root.appendChild(buildItem(phase));
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
