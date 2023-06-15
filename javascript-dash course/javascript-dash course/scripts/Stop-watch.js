
let [seconds, minutes, hours] = [0, 0, 0];
let timeRef = document.querySelector('.js-time');
let timer = null;
let button = document.querySelector('.js-stop-button');
let buttonStart = document.querySelector('.js-start-button');
let smt = 'Stopped';


document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    if(smt ==='Stopped') {
      watchStart();
      buttonStart.innerHTML = 'Stop';
      smt = 'Started';
    } else if (smt === 'Started') {
      watchStop();
      buttonStart.innerHTML = 'Start';
      smt = 'Stopped';
    }
  });

/*document.querySelector('.js-stop-button')
  .addEventListener('click', () => {
    
    watchStop();
    
}); */

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    watchReset();
  });


function stopwatch() {
  seconds++;
  if(seconds === 60) {
    seconds = 0;
    minutes++;
  } else if(minutes === 60) {
      minutes = 0;
      hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timeRef.innerHTML = h +":"+ m +":"+ s; 
}

function watchStart() {
  
  if(timer != null){
    clearInterval(timer);
  }
    timer = setInterval(() => {
    stopwatch();
  }, 1000);
 }

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  timeRef.innerHTML = '00:00:00';
 }


















/*function timer () {
  second++;
  setTimeout(timer, 1000);
  console.log(second);
}
timer(); */