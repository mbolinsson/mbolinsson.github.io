const ant1 = document.querySelector(".ant1");
const ant2 = document.querySelector(".ant2");
const ant3 = document.querySelector(".ant3");

myror();

function myror() {
  ant1.src = "./ant1.2.svg";
  ant2.src = "./ant2.svg";
  ant3.src = "./ant3.svg";

  window.setTimeout(myror2, 100);
}

function myror2() {
  ant1.src = "./ant1.3.svg";
  ant2.src = "./ant2.2.svg";
  ant3.src = "./ant3.2.svg";
  window.setTimeout(myror3, 100);
}

function myror3() {
  ant1.src = "./ant1.11.svg";
  ant2.src = "./ant2.3.svg";
  ant3.src = "./ant3.3.svg";
  window.setTimeout(myror4, 200);
}

function myror4() {
  ant1.src = "./ant1.12.svg";
  ant2.src = "./ant2.2.svg";
  ant3.src = "./ant3.2.svg";
  window.setTimeout(myror, 100);
}
