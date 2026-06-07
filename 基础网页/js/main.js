(function () {

  const header = document.getElementById("header");

  const navLinks = document.querySelectorAll(".nav-link");

  const navToggle = document.getElementById("navToggle");

  const navLinksContainer = document.getElementById("navLinks");

  const backToTopBtn = document.getElementById("backToTop");

  const revealItems = document.querySelectorAll(".reveal-item");



  const sections = [

    { id: "home", el: document.getElementById("home") },

    { id: "basics", el: document.getElementById("basics") },

    { id: "waves", el: document.getElementById("waves") },

    { id: "timeline", el: document.getElementById("timeline") },

    { id: "pioneers", el: document.getElementById("pioneers") },

    { id: "types", el: document.getElementById("types") },

    { id: "future", el: document.getElementById("future") },

    { id: "about", el: document.getElementById("about") },

  ];



  function closeMobileNav() {

    navLinksContainer.classList.remove("open");

    navToggle.classList.remove("open");

  }



  navToggle.addEventListener("click", function () {

    navLinksContainer.classList.toggle("open");

    navToggle.classList.toggle("open");

  });



  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      closeMobileNav();

    });

  });



  function updateActiveNav() {

    const scrollPos = window.scrollY + 120;



    let current = "home";

    sections.forEach(function (section) {

      if (section.el && section.el.offsetTop <= scrollPos) {

        current = section.id;

      }

    });



    navLinks.forEach(function (link) {

      link.classList.toggle("active", link.getAttribute("href") === "#" + current);

    });



    if (header) {

      header.classList.toggle("scrolled", window.scrollY > 16);

    }

  }



  window.addEventListener("scroll", updateActiveNav, { passive: true });

  updateActiveNav();



  backToTopBtn.addEventListener("click", function () {

    window.scrollTo({ top: 0, behavior: "smooth" });

  });



  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }

    );



    revealItems.forEach(function (item, index) {

      item.style.transitionDelay = (index % 6) * 0.06 + "s";

      observer.observe(item);

    });

  } else {

    revealItems.forEach(function (item) {

      item.classList.add("visible");

    });

  }

})();


