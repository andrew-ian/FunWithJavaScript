const btn = document.querySelector("button");
const fancy = document.getElementById("FancyShmancy");
const boring = document.getElementById("BoringBetty");
const moo = document.getElementById("Moo");

function showAlert() {
  alert("Hello, world!");
}

function bigger() {
  //change font size
  document.getElementById("title").style.fontSize = "24pt";
}

function fancify() {
  //show alert
  showAlert();
  document.getElementById("title").style.fontWeight = "bold";  // font becomes bold
  document.getElementById("title").style.color = "blue";  // font becomes blue
  document.getElementById("title").style.textDecoration = "underline";  // underline the text
}

function reset() {
  //show alert
  showAlert();
  document.getElementById("title").style.fontWeight = "normal"; // change font to normal
  document.getElementById("title").style.color = "black";  // font goes back to black
  document.getElementById("title").style.textDecoration = "none";  // no underline
}

function addMoo() {
  var str = document.getElementById("title");
  str.value = str.value.toUpperCase();
  var parts = str.value.split(".");
  str.value = parts.join("-Moo");
}

btn.onclick = bigger;
fancy.onchange = fancify;
boring.onchange = reset;
moo.onchange = addMoo;


