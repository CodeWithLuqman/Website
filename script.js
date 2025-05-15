document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();

      let name = document.getElementById('name').value.trim();
      let email = document.getElementById('email').value.trim();
      let message = document.getElementById('message').value.trim();
      let errorBox = document.getElementById('formError');
      errorBox.textContent = '';

      // Basic email regex
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !email || !message) {
        errorBox.textContent = 'Please fill all required fields.';
        return;
      }

      if (!email.match(emailPattern)) {
        errorBox.textContent = 'Please enter a valid email address.';
        return;
      }

      // If validation passes
      alert("Form submitted successfully!\n(This is a demo — no data is saved.)");
      document.getElementById('contactForm').reset();
    });
/*Icon*/
const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    scrollBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };