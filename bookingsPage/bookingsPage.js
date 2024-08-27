document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = [
        '14:00', '14:30', '15:00', '15:30',
        '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30'
    ];

    const timeSlotsContainer = document.getElementById('timeSlots');

    timeSlots.forEach(time => {
        const button = document.createElement('button');
        button.textContent = time;
        button.addEventListener('click', () => {
            // Clear previous selection
            document.querySelectorAll('.time-slots button').forEach(btn => btn.classList.remove('selected'));
            // Mark this button as selected
            button.classList.add('selected');
        });
        timeSlotsContainer.appendChild(button);
    });

    // Set the current date in the date input
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').setAttribute('min', today);

    // Submit button click handler
    document.getElementById('submitBtn').addEventListener('click', () => {
        const department = document.getElementById('department').value;
        const bookingType = document.getElementById('bookingType').value;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const selectedTimeSlot = document.querySelector('.time-slots button.selected')?.textContent;

        if (department && bookingType && appointmentDate && selectedTimeSlot) {
            alert(`Appointment booked!\n\nDepartment: ${department}\nBooking Type: ${bookingType}\nDate: ${appointmentDate}\nTime: ${selectedTimeSlot}`);
        } else {
            alert('Please fill all fields and select a time slot.');
        }
    });
});
