const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const userInput = document.getElementById('userInput');

let countdown=null;

startBtn.addEventListener('click', () => {
  clearInterval(countdown); 

  let time = parseInt(userInput.value) * 60; 

  if (isNaN(time) || time <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  countdown = setTimeout(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds=seconds < 10 ?'0' +seconds :seconds;
    timerDisplay.textContent = `${minutes}:${seconds }`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's up!";
    }
  }, 500);
});
