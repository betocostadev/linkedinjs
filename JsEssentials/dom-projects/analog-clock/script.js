const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Below code is global and not inside the function because there is a problem:
// When seconds gets to 60, it goes back until 0. New math inside the function to fix it.
// Get the date: Hours, minutes and seconds:
let date = new Date();
// console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Will have the degrees we want for the arms
// Math: Convert the times for degrees
// Sec 0 = 0 or 360 degrees | sec 30 = 180 degrees
let hrPosition = (hr*360/12)+(min*(360/60)/12);
// For the min, we have to consider 60 seconds first for each minute to move 1.
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

const runClock = () => {
  /* Downside of this is that we are relying on the math and JS to do the math to make it work.
  While it works fine, the browser usually throttles JavaScript, so it will slow the time if you change tabs, but it corrects it as it can when you open the tab again.
  Another way is to change it as before, but then you need to remove the transition animation on the CSS to work.*/
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;
  // Make them transform rotate acordingly to the arms variables.
  HOURHAND.style.transform = `rotate(${hrPosition}deg`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg`;
}

const interval = setInterval(runClock, 1000);