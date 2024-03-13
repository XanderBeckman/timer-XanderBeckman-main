let timerTag = document.getElementById("timer-tag");

let currentTime = 0;

function updateTimer() {
  currentTime++;
  let minutes = currentTime / 60;
  let seconds = currentTime % 60;
  let timerReadout = minutes + ":" + seconds;
}
timerTag.innerText = timerReadout;

setInterval(updateTimer, 1000);
