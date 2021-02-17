/*-----VARIABLES AND DOM OBJECTS-----*/

//define the body element
let body = document.body;

//text boxes for values
let rgbPanel = document.querySelector(".rgb-panel");
let hexPanel = document.querySelector(".hex-panel");

// create rgb colors each parameter
let r, g, b, fullRgb;

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

//refreshing color values every second
setInterval(applyAndWriteValues, 1000);
