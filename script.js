const form = document.getElementById('registrationForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords do not match!";
        event.preventDefault(); // Stop form submission
    } else {
        passwordError.textContent = ""; // Clear error
        alert("Registration Successful!");
    }
});