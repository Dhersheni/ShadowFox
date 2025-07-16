// imp! Navbar Active Script

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    if (
      sec.id === "hero-section" ||
      sec.id === "about-section" ||
      sec.id === "myskills-section" ||
      sec.id === "portfolio" ||
      sec.id === "contact-us"
    ) {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let sectionId = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`.nav-link[href="#${sectionId}"`)
            .classList.add("active");
        });
      }
    }
  });
};

