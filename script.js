const startTime = new Date('2024-07-27T22:23:00');

// Function to calculate the hours difference
function calculateHours() {
    const currentTime = new Date();
    const timeDifference = currentTime - startTime;
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    return hoursDifference;
}

// Update the hours on the page
function updateHours() {
    const hoursElement = document.getElementById('hours');
    const hours = calculateHours();
    hoursElement.textContent = hours;
}

// Initial update and set interval to update every hour
updateHours();
setInterval(updateHours, 3600000); // 3600000ms = 1 hour
