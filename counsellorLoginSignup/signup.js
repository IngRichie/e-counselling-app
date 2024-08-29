document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-button');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const toastContainer = document.getElementById('toast-container');

    const showError = (input, message) => {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = message;
        input.focus();
    };

    const clearErrors = () => {
        emailError.textContent = '';
        passwordError.textContent = '';
    };

    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.className = 'toast';
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    };

    const handleLogin = () => {
        clearErrors();
        let valid = true;

        if (!emailInput.value) {
            showError(emailInput, 'Email is required');
            valid = false;
        }

        if (!passwordInput.value) {
            showError(passwordInput, 'Password is required');
            valid = false;
        }

        if (valid) {
            // Simulate successful login
            showToast('Login successful!');
            // Redirect to the counselor's page (Placeholder path)
            window.location.href = '../counselorDashboard/counselorDashboard.html';
        }
    };

    loginBtn.addEventListener('click', handleLogin);
});
