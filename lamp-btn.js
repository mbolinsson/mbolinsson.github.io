"use strict";
const light = document.getElementById("light");
let isLightOn = false;

document.getElementById("btn-lamp").addEventListener("click", function turnTheLightsOn() {
  if (!isLightOn) {
    light.className = "lightning";
    isLightOn = true;
  } else {
    light.className = " darknes";
    isLightOn = false;
  }
});
