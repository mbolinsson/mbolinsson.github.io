"use strict";
const light = document.getElementById("light");
const lampBtn = document.querySelector(".div-btn-lamp");
const skojja = document.querySelector("#skojja");
let isLightOn = false;
let skojjaText = "Sorry skojja bara!";

document.getElementById("btn-lamp").addEventListener("click", function turnTheLightsOn() {
  if (!isLightOn) {
    light.className = "lightning";
    isLightOn = true;
    skojja.innerHTML = "";
  } else {
    light.className = " darknes";
    isLightOn = false;
  }
});

lampBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  lampBtn.style.top = "60vh";
  skojja.innerHTML = skojjaText;
  setTimeout(removeSkojja, 670);
  function removeSkojja() {
    skojja.innerHTML = "";
    skojjaText = "";
  }
}
