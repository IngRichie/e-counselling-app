import { users } from '../users.js';

// Login form submission event listener
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match any of the hard-coded users
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect based on user role
        if (user.role === "student" || user.role === "counselor") {
            // Redirect to the homepage
            window.location.href = '../homepage/homepage.html';
        }
    } else {
        // Show error pop-up for invalid credentials
        showErrorPopup("Invalid username or password. Please try again.");
    }
});

function showErrorPopup(message) {
    const errorPopup = document.getElementById('error-popup');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorPopup.style.display = 'flex';

    document.getElementById('close-error-popup').addEventListener('click', function() {
        errorPopup.style.display = 'none';
    }, { once: true });
}

function showSuccessPopup(message) {
    const successPopup = document.getElementById('success-popup');
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = message;
    successPopup.style.display = 'flex';

    document.getElementById('close-success-popup').addEventListener('click', function() {
        successPopup.style.display = 'none';
    }, { once: true });
}
