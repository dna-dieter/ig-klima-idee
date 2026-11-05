(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("inhaltsverzeichnis");
  var mq = window.matchMedia("(min-width: 56rem)");

  function setNavForViewport() {
    if (!toggle || !nav) return;
    if (mq.matches) {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.hidden = true;
    } else {
      toggle.hidden = false;
      var open = toggle.getAttribute("aria-expanded") === "true";
      nav.hidden = !open;
    }
  }

  function syncToggleLabel() {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.textContent = expanded ? "Inhalt schließen" : "Inhalt öffnen";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.hidden = expanded;
      syncToggleLabel();
    });

    nav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!link || mq.matches) return;
      toggle.setAttribute("aria-expanded", "false");
      nav.hidden = true;
      syncToggleLabel();
    });

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", setNavForViewport);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(setNavForViewport);
    }
    setNavForViewport();
    syncToggleLabel();
  }

  var sectionIds = [
    "editorial",
    "waermepumpenparty",
    "e-auto-pv-speed-dating",
    "buergersolarberatung",
    "aktionsmonat-gebaeude",
    "energiewende-zu-teuer",
    "solar-boomt",
    "todeskampf-industrie",
    "gedenken-9-november"
  ];

  var sections = sectionIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  var links = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );

  function setCurrent(id) {
    links.forEach(function (link) {
      if (link.getAttribute("href") === "#" + id) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateCurrentFromScroll() {
    if (!sections.length) return;
    var marker = window.scrollY + Math.min(120, window.innerHeight * 0.2);
    var current = sections[0].id;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= marker) {
        current = sections[i].id;
      }
    }
    setCurrent(current);
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateCurrentFromScroll();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("hashchange", function () {
    var id = location.hash.replace(/^#/, "");
    if (id) setCurrent(id);
  });

  if (location.hash) {
    setCurrent(location.hash.replace(/^#/, ""));
  } else {
    updateCurrentFromScroll();
  }
})();
