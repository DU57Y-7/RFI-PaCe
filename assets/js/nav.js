/* =====================================================================
   SITE NAV — hamburger toggle + active-link highlight.
   Every page includes the same header/nav markup and sets
   <body data-page="..."> to the matching value in site-nav's
   data-page attributes, so this script can mark the current page.
   ===================================================================== */

(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("siteNav");
    var backdrop = document.getElementById("navBackdrop");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove("is-open");
      if (backdrop) backdrop.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openNav() {
      nav.classList.add("is-open");
      if (backdrop) backdrop.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav(); else openNav();
    });
    if (backdrop) backdrop.addEventListener("click", closeNav);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });

    // Highlight the current page in the nav list.
    var current = document.body.getAttribute("data-page");
    if (current) {
      var link = nav.querySelector('a[data-page="' + current + '"]');
      if (link) link.setAttribute("aria-current", "page");
    }
  });
})();
