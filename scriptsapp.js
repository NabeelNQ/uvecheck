// Update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('results-time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Form submission
document.getElementById('next-button').addEventListener('click', function() {
    // Get form values and validate (same logic as before)
    // ...

    // Show results page
    document.getElementById('form-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
});

// Back button
document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('form-page').style.display = 'block';
    document.getElementById('results-page').style.display = 'none';
});

// Date input formatting
const dateInputs = document.querySelectorAll('.date-input input');
dateInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        if (value.length > 5) {
            value = value.substring(0, 5) + '/' + value.substring(5, 9);
        }
        e.target.value = value;
    });
});