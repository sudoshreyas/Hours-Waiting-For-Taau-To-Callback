// Set the start time (replace with your desired start time)
const startTime = new Date('2024-07-27T21:35:00').getTime();

function updateHours() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const elapsedHours = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById('hours').textContent = elapsedHours;
}

// Update the hours immediately and then every second
updateHours();
setInterval(updateHours, 1000);
