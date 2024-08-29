document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Session with John Doe',
                start: '2024-09-01T10:00:00',
                description: 'Discuss progress on therapy.'
            },
            {
                title: 'Session with Jane Smith',
                start: '2024-09-02T14:00:00',
                description: 'Complete goal review.'
            },
            {
                title: 'Follow-up with Mary Johnson',
                start: '2024-09-05T16:00:00',
                description: 'Check-in on treatment plan.'
            }
        ],
        dateCellDidMount: function(info) {
            if (info.date.getDate() === 1) { // Example condition for displaying tooltips
                var tooltip = document.createElement('div');
                tooltip.classList.add('tooltip');
                tooltip.innerText = 'No events on this day';
                info.el.appendChild(tooltip);

                info.el.addEventListener('mouseover', function(event) {
                    var target = event.currentTarget.querySelector('.tooltip');
                    if (target) {
                        target.style.display = 'block';
                    }
                });
                info.el.addEventListener('mouseout', function(event) {
                    var target = event.currentTarget.querySelector('.tooltip');
                    if (target) {
                        target.style.display = 'none';
                    }
                });
            }
        }
    });

    calendar.render();
});

function viewAppointmentDetails(id) {
    window.location.href = `appointment-details.html?id=${id}`;
}
