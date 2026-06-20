/* =========================================================
   Shared site behaviour: sticky nav, mobile menu, lightbox.
   No build step needed — plain JS, works by just opening the
   HTML files (or hosting them anywhere).
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---- sticky header ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  /* ---- lightbox (gallery pages) ---- */
  var items = document.querySelectorAll(".gallery-item");
  if (items.length) {
    var lightbox = document.querySelector(".lightbox");
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var current = 0;
    var list = Array.prototype.slice.call(items);

    function open(index) {
      current = index;
      var img = list[current].querySelector("img");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent =
        "FRAME " + String(current + 1).padStart(2, "0") + " / " + String(list.length).padStart(2, "0");
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function next() { open((current + 1) % list.length); }
    function prev() { open((current - 1 + list.length) % list.length); }

    list.forEach(function (el, i) {
      el.addEventListener("click", function () { open(i); });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".lightbox-next").addEventListener("click", next);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", prev);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }
});
