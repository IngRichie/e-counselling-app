document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Appointment with John Doe',
                start: '2024-08-29',
                description: 'Discuss progress on therapy'
            },
            {
                title: 'Appointment with Jane Smith',
                start: '2024-08-30',
                description: 'Goal review session'
            }
        ],
        eventMouseEnter: function(info) {
            var tooltip = new Tooltip(info.el, {
                title: info.event.extendedProps.description,
                placement: 'top',
                trigger: 'hover',
                container: 'body'
            });
        }
    });

    calendar.render();
});

function viewAppointmentDetails(appointmentId) {
    // Navigate to appointment details page
    // Here we're just simulating with an alert for the example
    alert('Navigating to appointment details for appointment ID: ' + appointmentId);
}

function sendLink() {
    const sessionLink = document.getElementById('sessionLink').value;

    if (sessionLink === "") {
        alert("Please enter a valid video session link.");
        return;
    }

    // For demo purposes, we'll log the link. In a real app, you'd send this to the client.
    console.log(`Session link: ${sessionLink}`);

    // Example: Send the link via email or internal messaging system
    // You could use an email sending service or your backend to handle this.
    // For now, we'll just show an alert.
    alert("Video session link sent to the client!");

    // Clear the input after sending
    document.getElementById('sessionLink').value = "";
}
