const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
/*icons*/
const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    scrollBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

