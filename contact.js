document.querySelector(".btn").addEventListener("click", function (ev) {
  ev.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  nameError.classList.remove("show");
  emailError.classList.remove("show");
  passwordError.classList.remove("show");

  let isValid = true;

  if (name.length < 3) {
    nameError.classList.add("show");
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.classList.add("show");
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.classList.add("show");
    isValid = false;
  }

  if (isValid) {
    alert("Account created successfully!");
     window.location.href = "index.html";
  }
});
