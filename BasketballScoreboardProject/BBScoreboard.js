let count1 = document.getElementById("score1");

let count2 = document.getElementById("score2");

function pad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

let score1 = 0;
let score2 = 0;

count1.innerText = pad(score1, 2);
count2.innerText = pad(score2, 2);
function addOneHome() {
  score1 += 1;
  count1.innerText = pad(score1, 2);
}
function addOneGuest() {
  score2 += 1;
  count2.innerText = pad(score2, 2);
}
function addTwoHome() {
  score1 += 2;
  count1.innerText = pad(score1, 2);
}
function addTwoGuest() {
  score2 += 2;
  count2.innerText = pad(score2, 2);
}
function addThreeHome() {
  score1 += 3;
  count1.innerText = pad(score1, 2);
}
function addThreeGuest() {
  score2 += 3;
  count2.innerText = pad(score2, 2);
}

//timer
let interval = clearInterval(updateCountdown);

const starttime = 12;
let time = starttime * 60;

function startInt() {
  interval = setInterval(updateCountdown, 1000);
}

const countdown = document.getElementById("countText");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? `0` + seconds : seconds;
  countdown.innerText = `${minutes}:${seconds}`;
  time--;
}

function pauseCountdown() {
  setInterval(updateCountdown, 0);
}

//quarter

let quarterEl = document.getElementById(`quarterText`);
let quarterVal = 1;

quarterEl.innerText = parseInt(quarterEl.innerText);

function quarterIn() {
  resetCountdown();
  if (quarterVal < 4) {
    quarterVal += 1;
    quarterEl.innerText = quarterVal;
  }
}

//reset

function resetCountdown() {
  clearInterval(interval);
  countdown.innerText = `12:00`;
  time = 720;
}

//clear

function clearBoard() {
  count1.innerText = `00`;
  count2.innerText = `00`;
  resetCountdown();
  quarterVal = 1;
  quarterEl.innerText = 1;
}
