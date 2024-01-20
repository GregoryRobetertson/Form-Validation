"use strict";

// Get the form element with the id "userName"
const form = document.getElementById("userName");

// Add an event listener to the form's submit event
form.addEventListener("submit", (event) => {
  // Get the username input field within the form
  const usernameInput = form.querySelector('[name="username"]');
  // Trim the whitespace from the entered username
  const usernameValue = usernameInput.value.trim();

  // Check if the length of the trimmed username is less than 5 characters
  if (usernameValue.length < 5) {
    // If the username is too short, display an alert
    alert("Username must be at least 5 characters long");
    // Prevent the default form submission behavior
    event.preventDefault();
  } else {
    // If the username is valid, display a success alert
    alert("Form submitted successfully!");
  }
});

// Get the email input element and the span for error messages
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

// Add an event listener to the email input for the "input" event
emailInput.addEventListener("input", function () {
  // Check if the entered email is valid using the isValidEmail function
  const isValid = isValidEmail(emailInput.value);

  // If the email is valid, clear the error message
  if (isValid) {
    emailError.textContent = "";
  } else {
    // If the email is not valid, display an error message
    emailError.textContent = "Please enter a valid email address.";
  }
});

// Function to check the validity of an email using a regular expression
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Return true if the email matches the regular expression, false otherwise
  return emailRegex.test(email);
}
