
let second = 0;
function timer () {
  second++;
  setTimeout(timer, 1000);
  console.log(second);
}
timer(); 