const ant3 = document.querySelector(".ant3");
let antAlreadyHiding = false;

ant3.addEventListener("mouseover", runningAnt);

function runningAnt() {
  if (antAlreadyHiding) {
    return;
  } else {
    ant3.src = "./images/ant3run.svg";
    antAlreadyHiding = true;
    window.setTimeout(goneAnt, 50);
  }
}

function goneAnt() {
  ant3.src = "./images/ant3gone.svg";
  window.setTimeout(setgifback, 3500);
}

function setgifback() {
  ant3.src = "./images/ant3.gif";
  antAlreadyHiding = false;
}
