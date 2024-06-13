// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggler for small screens
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Dynamically adjust map height based on screen size
  function adjustMapHeight() {
    const map = document.getElementById("map");
    if (window.innerWidth < 768) {
      map.style.height = "300px";
    } else {
      map.style.height = "450px";
    }
  }

  // Adjust map height on load and resize
  adjustMapHeight();
  window.addEventListener("resize", adjustMapHeight);

  function adjustFormLayout() {
    const formGroups = document.querySelectorAll(
      ".contact-section .form-group"
    );
    if (window.innerWidth < 768) {
      formGroups.forEach((group) => {
        group.style.width = "100%";
        group.style.marginBottom = "15px";
      });
    } else {
      formGroups.forEach((group) => {
        group.style.width = "48%";
        group.style.marginBottom = "0";
      });
    }
  }
});
