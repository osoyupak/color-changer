/*-----VARIABLES AND DOM OBJECTS-----*/

//define the body element
const body = document.body;

//text boxes for values
const rgbPanel = document.querySelector(".rgb-panel");
const hexPanel = document.querySelector(".hex-panel");
const btn = document.querySelector("button");

// create rgb colors each parameter
let r, g, b, fullRgb;

// started or not check for button
let started = false;

//variable for interval
let startInterval;

/*-----FUNCTIONS-----*/

//random value for rgb's each slot betwwen 0-255
function randomizeColor() {
  let x = Math.floor(Math.random() * 256);
  return x;
}

//creating rgb color by using randomizeColor function and r, g, b vairables
function createRgbColor() {
  r = randomizeColor();
  g = randomizeColor();
  b = randomizeColor();
  fullRgb = `rgb(${r},${g},${b})`;
  return fullRgb;
}

//creating hex value for each element (r,g,b)
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

//creating full hex value
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// applying background and writing values to the screen
function applyAndWriteValues() {
  body.style.backgroundColor = createRgbColor();
  rgbPanel.innerHTML = fullRgb;
  hexPanel.innerHTML = rgbToHex(r, g, b);
}

//initial start
applyAndWriteValues();

// event listeners
btn.addEventListener("click", startStop);
rgbPanel.addEventListener("click", copyValue);
hexPanel.addEventListener("click", copyValue);

//start-stop function of the button
function startStop() {
  if (!started) {
    //refreshing color values every second
    startInterval = setInterval(applyAndWriteValues, 1000);
    started = true;
    btn.innerText = "Stop";
  } else if (started) {
    stopInterval();
  }
}

//stop the interval
function stopInterval() {
  clearInterval(startInterval);
  started = false;
  btn.innerText = "Start";
}

//copying color values
function copyValue() {
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(this);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("Copy");
  alert("Copied color value: " + this.innerHTML);
  stopInterval();
}
