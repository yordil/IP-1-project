document
  .getElementsByClassName("togle")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("navbar")[0].classList.toggle("active");
  });

//form page js

// Function to validate the login form
function validateLoginForm() {
  var username = document.getElementById("login-username").value.trim();
  var password = document.getElementById("login-password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in all fields for login.");
    return false;
  }

  // Additional validation logic can be added here if needed

  return true;
}

// Function to validate the signup form
function validateSignupForm() {
  var username = document.getElementById("signup-username").value.trim();
  var email = document.getElementById("signup-email").value.trim();
  var password = document.getElementById("signup-password").value.trim();
  var confirmPassword = document
    .getElementById("signup-confirm-password")
    .value.trim();

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all fields for signup.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // Additional validation logic can be added here if needed

  return true;
}
document
  .getElementById("signup-submit")
  .addEventListener("click", function (event) {
    console.log("clicked signup");
    if (!validateSignupForm()) {
      event.preventDefault();
    }
  });
// Add event listeners for form submission
