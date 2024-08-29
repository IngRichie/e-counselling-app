document.getElementById('registration-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showErrorPopup("Passwords do not match");
        return;
    }

    try {
        // Placeholder logic for user registration
        // Replace this with actual registration logic
        // For example, an API call to your server
        
        // Simulate successful registration
        await new Promise((resolve) => setTimeout(resolve, 1000));

        document.getElementById('registration-form').reset();
        showSuccessPopup();

    } catch (error) {
        console.error("Error during registration:", error);
        showErrorPopup(error.message || "An unexpected error occurred");
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

function showSuccessPopup() {
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'flex';

    document.getElementById('close-popup').addEventListener('click', function() {
        successPopup.style.display = 'none';
        // Redirect to the login page after closing the popup
        window.location.href = "../loginPage/login.html";
    }, { once: true });
}
