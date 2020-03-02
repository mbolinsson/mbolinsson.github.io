const ant1 = document.querySelector(".ant1");
const ant2 = document.querySelector(".ant2");
const ant3 = document.querySelector(".ant3");
let hide = false;

myror();
blackhole1();

function myror() {
  ant1.src = "./images/ant1.2.svg";
  ant2.src = "./images/ant2.svg";

  window.setTimeout(myror2, 50);
}

function myror2() {
  ant1.src = "./images/ant1.3.svg";
  ant2.src = "./images/ant2.2.svg";

  hide = false;
  window.setTimeout(myror3, 90);
}

function myror3() {
  ant1.src = "./images/ant1.11.svg";
  ant2.src = "./images/ant2.3.svg";

  window.setTimeout(myror4, 100);
}

function myror4() {
  ant1.src = "./images/ant1.12.svg";
  ant2.src = "./images/ant2.2.svg";

  window.setTimeout(myror, 70);
}

// Scared Ant

ant3.addEventListener("mouseover", scaredAnt);

function scaredAnt() {
  hide = true;
}

function blackhole1() {
  if (hide) {
    ant3.src = "./images/ant3run.svg";
    return window.setTimeout(hidingant, 50);
  }
  ant3.src = "./images/ant3.svg";
  window.setTimeout(blackhole2, 50);
}

function blackhole2() {
  ant3.src = "./images/ant3.2.svg";
  window.setTimeout(blackhole3, 30);
}
function blackhole3() {
  ant3.src = "./images/ant3.3.svg";
  window.setTimeout(blackhole4, 90);
}
function blackhole4() {
  ant3.src = "./images/ant3.2.svg";
  window.setTimeout(blackhole1, 50);
}

function hidingant() {
  ant3.src = "./images/ant3gone.svg";
  window.setTimeout(blackhole1, 3500);
}
