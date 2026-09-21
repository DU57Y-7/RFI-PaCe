/* =====================================================================
   RENDER TEAM
   Reads window.TEAM (defined in team.js) and builds the roster grid
   on team.html. Card order top to bottom: photo, name, role,
   university, LinkedIn link, bio.
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

  function buildAvatar(member) {
    var avatar = document.createElement("div");
    avatar.className = "team-avatar";

    var fallback = document.createElement("div");
    fallback.className = "avatar-initials";
    fallback.textContent = member.name ? initials(member.name) : "?";

    if (member.photo) {
      var img = document.createElement("img");
      img.src = member.photo;
      img.alt = member.name ? member.name : "Team member photo pending";
      img.loading = "lazy";
      // If the photo URL fails (e.g. an expired LinkedIn signed link),
      // fall back to initials instead of a broken image icon.
      img.onerror = function () {
        avatar.innerHTML = "";
        avatar.appendChild(fallback);
      };
      avatar.appendChild(img);
    } else {
      avatar.appendChild(fallback);
    }

    return avatar;
  }

  function buildLinkedIn(url) {
    var link = document.createElement("a");
    link.className = "linkedin-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";

    var svg = "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>' +
      '</svg>'
    );
    var icon = document.createElement("img");
    icon.src = svg;
    icon.alt = "";
    icon.width = 14;
    icon.height = 14;
    link.appendChild(icon);

    link.appendChild(document.createTextNode("LinkedIn"));
    return link;
  }

  function buildCard(member) {
    var card = document.createElement("div");
    card.className = "team-card";

    card.appendChild(buildAvatar(member));

    var name = document.createElement("div");
    name.className = "name";
    name.textContent = member.name ? member.name : "Name coming soon";
    card.appendChild(name);

    var role = document.createElement("div");
    role.className = "role";
    role.textContent = member.role;
    card.appendChild(role);

    var uni = document.createElement("div");
    uni.className = "university";
    uni.textContent = member.university ? member.university : "University — TBC";
    card.appendChild(uni);

    if (member.linkedin) {
      card.appendChild(buildLinkedIn(member.linkedin));
    }

    if (member.bio) {
      var bio = document.createElement("div");
      bio.className = "bio";
      bio.textContent = member.bio;
      card.appendChild(bio);
    }

    return card;
  }

  function render() {
    var root = document.getElementById("team-grid");
    if (!root) return;
    var members = window.TEAM || [];
    if (!members.length) return;
    var grid = document.createElement("div");
    grid.className = "team-grid";
    members.forEach(function (m) { grid.appendChild(buildCard(m)); });
    root.appendChild(grid);
  }

  document.addEventListener("DOMContentLoaded", render);
})();
