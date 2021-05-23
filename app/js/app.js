// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
import "bootstrap";
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  function passwordConfirm() {
    debugger;
    const password1 = document.querySelector("#password1");
    const password2 = document.querySelector("#password2");
    if (password1.value === password2.value) return true;

    const textEl1 = password1.parentElement.querySelector(".invalid-feedback");
    const textEl2 = password2.parentElement.querySelector(".invalid-feedback");
    textEl1.textContent = "Пароли не совпадают";
    textEl2.textContent = "Пароли не совпадают";
    password1.classList.add("is-invalid");
  }

  function validateEmail(id) {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const elements = document.querySelectorAll("input[type=email]");
    if (elements) {
      elements.forEach((el) => {
        if (!el.value) return;
        if (!email_regex.test(el.value)) {
          const invalidFeedback =
            el.parentElement.querySelector(".invalid-feedback");
          invalidFeedback.textContent = "Неверный формат ";
          console.log(invalidFeedback);
        }
      });
    }
  }

  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          validateEmail();
        }
        const password1 = document.querySelector("#password1");
        if (password1) {
          if (!passwordConfirm()) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
});
