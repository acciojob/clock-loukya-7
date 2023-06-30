//your JS code here. If required.
function updateTime() {
  const timer = document.getElementById('timer');
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateFormatted = currentDate.toLocaleDateString();
  timer.textContent = `${currentDateFormatted} ${currentTime}`;
}

setInterval(updateTime, 1000);

