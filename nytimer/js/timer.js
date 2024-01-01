const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
//backticks for template literals for the expression to update every current year
const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);

const countDown = document.getElementById('countdown');
const newYearPass = false;
//update countdowntime

let fiveminflag = false;

function updateCountdowntime(){
  //get current time as date object
  const currentTime = new Date();
  //subtract time from current year to new year, value is in milliseconds
  const diff = newYearTime - currentTime;

  //gets days to next year using conversions from milliseconds
  const d = Math.floor(diff/1000/60/60/24);
  //hours to next year etc
  const h = Math.floor(diff/1000/60/60)%24;
  const m = Math.floor(diff/1000/60)%60;
  const s = Math.floor(diff/1000)%60;
  //console.log(days);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s: s;

  var tick = new Audio("audio/ticking-clock_1.mp3");
  tick.loop = false;
  tick.volume = 0.3;
  tick.play();
  //console.log(currentTime);

  //get 5 minutes in millseconds
const fivemin = 300000;
const onemin = 60000;

if (diff <= fivemin){
  fiveminflag = true;
  countDown.style.backdropFilter= "blur(2px)";
  days.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  days.style.filter = "drop-shadow(0px 0px 3px white";
  hours.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  hours.style.filter = "drop-shadow(0px 0px 3px white";
  minutes.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  minutes.style.filter = "drop-shadow(0px 0px 3px white";
  seconds.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  seconds.style.filter = "drop-shadow(0px 0px 3px white";
  console.log("It is less than five minutes until " + newYearTime);
} else if (diff <= onemin && diff <= fivemin){
  countDown.style.backdropFilter= "blur(2px)";
  days.style.webkitTextStrokeColor = "rgb(247, 190, 182)";
  days.style.filter = "drop-shadow(0px 0px 3px white";
  hours.style.webkitTextStrokeColor = "rgb(247, 190, 182)";
  hours.style.filter = "drop-shadow(0px 0px 3px white";
  minutes.style.webkitTextStrokeColor = "rgb(247, 190, 182)";
  minutes.style.filter = "drop-shadow(0px 0px 3px white";
  seconds.style.webkitTextStrokeColor = "rgb(247, 190, 182)";
  seconds.style.filter = "drop-shadow(0px 0px 3px white";
  console.log("It is less than 1 minute until " + newYearTime);
} else {
  fiveminflag = false;
  days.style.webkitTextStrokeColor = "aliceblue";
  days.style.filter = "none";
  hours.style.webkitTextStrokeColor = "aliceblue";
  hours.style.filter = "none";
  minutes.style.webkitTextStrokeColor = "aliceblue";
  minutes.style.filter = "none";
  seconds.style.webkitTextStrokeColor = "aliceblue";
  seconds.style.filter = "none";
  console.log("It is not yet five minutes until " + newYearTime);
}
}
setInterval(updateCountdowntime, 1000);

const currentTime = new Date();
const diff = newYearTime - currentTime;

if (diff == 0){
  var fireworks = new Audio("audio/new-year-fireworks-sound4-180205.mp3");
  fireworks.loop = false;
  fireworks.play();
}


countDown.addEventListener("mouseover", ()=>{
  countDown.style.backdropFilter= "blur(2px)";
  /*days.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  days.style.filter = "drop-shadow(0px 0px 3px white";
  hours.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  hours.style.filter = "drop-shadow(0px 0px 3px white";
  minutes.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  minutes.style.filter = "drop-shadow(0px 0px 3px white";
  seconds.style.webkitTextStrokeColor = "rgb(252, 242, 214)";
  seconds.style.filter = "drop-shadow(0px 0px 3px white";*/
});
countDown.addEventListener("mouseout", ()=>{
  countDown.style.backdropFilter= "none"
  days.style.webkitTextStrokeColor = "aliceblue";
  days.style.filter = "none";
  hours.style.webkitTextStrokeColor = "aliceblue";
  hours.style.filter = "none";
  minutes.style.webkitTextStrokeColor = "aliceblue";
  minutes.style.filter = "none";
  seconds.style.webkitTextStrokeColor = "aliceblue";
  seconds.style.filter = "none";
});

window.addEventListener("load", playAudio, false);

function playAudio(){
  var bgm = new Audio("audio/reflected-light-147979.mp3");
  bgm.loop = false;
  bgm.volume = 0.1;
  bgm.play();
}
//VERB
//ADJ
//OCCUPATION
//VERB ENDING IN "ING"
//SILLY WORD

//learned: Event handling, passing arguments, random functions, .match,

//let noun1 = "dog";

/*
*/
