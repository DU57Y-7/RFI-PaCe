/* =====================================================================
   RENDER BOARD
   Reads window.PARTNERS and window.SPONSORS (defined in supporters.js,
   loaded before this script) and fills the two sections on the page.
   Each card is one clickable tile: logo (or a placeholder) + name,
   wrapped in a single link to that organisation's site.
   ===================================================================== */

(function () {
  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) { return w[0].toUpperCase(); })
      .join("");
  }

  function buildCard(entry) {
    var hasLink = Boolean(entry.link);
    var card = document.createElement(hasLink ? "a" : "div");
    card.className = "supporter-card";
    if (entry.cardBg === "white") card.classList.add("bg-white");
    if (entry.cardBg === "black") card.classList.add("bg-black");
    if (hasLink) {
      card.href = entry.link;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("aria-label", entry.name);
    }

    var logoSlot = document.createElement("div");
    logoSlot.className = "logo-slot";

    if (entry.logo) {
      var img = document.createElement("img");
      img.src = entry.logo;
      img.alt = entry.name + " logo";
      img.loading = "lazy";
      logoSlot.appendChild(img);
    } else {
      var ph = document.createElement("div");
      ph.className = "logo-placeholder";
      ph.textContent = initials(entry.name) + " · logo pending";
      logoSlot.appendChild(ph);
    }
    card.appendChild(logoSlot);

    var name = document.createElement("div");
    name.className = "supporter-name";
    name.textContent = entry.name;
    card.appendChild(name);

    if (entry.note) {
      var note = document.createElement("div");
      note.className = "supporter-note";
      note.textContent = entry.note;
      card.appendChild(note);
    }

    return card;
  }

  function fill(rootId, entries) {
    var root = document.getElementById(rootId);
    if (!root) return;

    if (!entries.length) {
      root.innerHTML =
        '<p>Nothing listed here yet — add an entry to assets/js/supporters.js.</p>';
      return;
    }

    var grid = document.createElement("div");
    grid.className = "card-grid";
    entries.forEach(function (e) { grid.appendChild(buildCard(e)); });
    root.appendChild(grid);
  }

  function render() {
    fill("partners-grid", window.PARTNERS || []);
    fill("sponsors-grid", window.SPONSORS || []);
  }

  document.addEventListener("DOMContentLoaded", render);
})();
