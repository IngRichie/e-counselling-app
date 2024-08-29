document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const bookingTypeSelect = document.getElementById('bookingType');
    const appointmentDateInput = document.getElementById('appointmentDate');
    const timeSlotsDiv = document.getElementById('timeSlots');
    const successPopup = document.getElementById('successPopup');
    const closeBtn = successPopup.querySelector('.close-btn');

    // Function to get selected time slot
    const getSelectedTimeSlot = () => {
        const selectedButton = timeSlotsDiv.querySelector('button.selected');
        return selectedButton ? selectedButton.innerText : null;
    };

    submitBtn.addEventListener('click', () => {
        const bookingType = bookingTypeSelect.value;
        const appointmentDate = appointmentDateInput.value;
        const selectedTimeSlot = getSelectedTimeSlot();

        if (bookingType && appointmentDate && selectedTimeSlot) {
            // Simulate saving booking data
            console.log({
                bookingType,
                appointmentDate,
                selectedTimeSlot
            });

            // Show success popup
            successPopup.style.display = 'flex';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Sample time slots for demonstration purposes
    const timeSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
    timeSlots.forEach(time => {
        const button = document.createElement('button');
        button.innerText = time;
        button.addEventListener('click', () => {
            document.querySelectorAll('.time-slots button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
        timeSlotsDiv.appendChild(button);
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });

    // Close popup when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
});
