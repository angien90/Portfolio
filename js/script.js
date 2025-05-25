document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 800,
      easing: 'slide'
    });
  });

// Dark / light mode
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    // Kolla om det finns en tidigare inställning i localStorage
    if (localStorage.getItem('theme') === 'dark') {
        checkbox.checked = true;
        body.classList.add('dark-mode');
    } else {
        checkbox.checked = false;
        body.classList.add('light-mode');
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Spara i localStorage
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light'); // Spara i localStorage
        }
    });
});

// Toggla navigeringstyp beroende på skärm
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a");


  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
      this.textContent = this.classList.contains("active") ? "✖" : "☰";
    });

    navLinkItems.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.textContent = "☰";
    });
  });
  }