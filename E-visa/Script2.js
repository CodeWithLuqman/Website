const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
      accordion.querySelector(".accordion-header").addEventListener("click", () => {
        accordion.classList.toggle("open");
      });
    });

const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    scrollBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

