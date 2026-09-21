/* =====================================================================
   RENDER OUTREACH
   Reads window.OUTREACH (defined in outreach.js) and builds the card
   grid on outreach.html.
   ===================================================================== */

(function () {
  var TYPE_LABEL = {
    presentation: "Presentation",
    conference: "Conference",
    outreach: "Outreach",
  };

  function buildTags(types) {
    var wrap = document.createElement("div");
    wrap.className = "outreach-tags";
    (Array.isArray(types) ? types : [types]).forEach(function (t) {
      var tag = document.createElement("span");
      tag.className = "outreach-tag type-" + t;
      tag.textContent = TYPE_LABEL[t] || t;
      wrap.appendChild(tag);
    });
    return wrap;
  }

  function buildCard(item) {
    var card = document.createElement("div");
    card.className = "outreach-card";
    if (item.status === "planned") card.classList.add("is-planned");

    card.appendChild(buildTags(item.type));

    var title = document.createElement("div");
    title.className = "outreach-title";
    title.textContent = item.event;
    card.appendChild(title);

    var meta = document.createElement("div");
    meta.className = "outreach-meta";
    meta.textContent = item.date + " \u00B7 " + item.location;
    card.appendChild(meta);

    var desc = document.createElement("div");
    desc.className = "outreach-desc";
    desc.textContent = item.description;
    card.appendChild(desc);

    if (item.status === "planned") {
      var planned = document.createElement("div");
      planned.className = "outreach-planned";
      planned.textContent = "Planned";
      card.appendChild(planned);
    }

    if (item.photo) {
      var photoWrap = document.createElement("div");
      photoWrap.className = "outreach-photo";
      var img = document.createElement("img");
      img.src = item.photo;
      img.alt = item.event;
      img.loading = "lazy";
      // If a photo fails to load, just drop the image area rather than
      // show a broken image icon.
      img.onerror = function () { photoWrap.remove(); };
      photoWrap.appendChild(img);
      card.appendChild(photoWrap);
    }

    return card;
  }

  function render() {
    var root = document.getElementById("outreach-grid");
    if (!root) return;
    var items = window.OUTREACH || [];
    if (!items.length) {
      root.innerHTML = "<p>Nothing logged yet — add appearances to assets/js/outreach.js.</p>";
      return;
    }
    items.forEach(function (item) { root.appendChild(buildCard(item)); });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
