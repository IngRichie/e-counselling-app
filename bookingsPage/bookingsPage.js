document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const warningPopup = document.getElementById('warningPopup');
    const successPopup = document.getElementById('successPopup');
    const closeBtns = document.querySelectorAll('.close-btn');

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const phone = phoneInput.value;

        // Check if the phone number contains only numbers
        const phoneRegex = /^\d+$/;

        if (!phoneRegex.test(phone)) {
            showPopup(warningPopup);
        } else {
            // Here you might want to process the form data or send it to a server
            showPopup(successPopup);
        }
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const popup = btn.parentElement.parentElement;
            closePopup(popup);

            // Clear form inputs and redirect to homepage if the success popup is closed
            if (popup === successPopup) {
                resetForm();
                redirectToHomepage();
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            closePopup(event.target);

            // Clear form inputs and redirect to homepage if the success popup is closed
            if (event.target === successPopup) {
                resetForm();
                redirectToHomepage();
            }
        }
    });

    function showPopup(popup) {
        popup.style.display = 'flex';
    }

    function closePopup(popup) {
        popup.style.display = 'none';
    }

    function resetForm() {
        appointmentForm.reset();
    }

    function redirectToHomepage() {
        window.location.href = '../homepage/homepage.html'; 
    }
});
