const ant2 = document.querySelector(".ant2");
const ant1 = document.querySelector(".ant1");

myror();

function myror() {
  ant2.src = "./ant2.svg";
  ant1.src = "./ant1.2.svg";

  window.setTimeout(myror2, 100);
}

function myror2() {
  ant2.src = "./ant2.2.svg";
  ant1.src = "./ant1.3.svg";
  window.setTimeout(myror3, 100);
}

function myror3() {
  ant2.src = "./ant2.3.svg";
  ant1.src = "./ant1.11.svg";
  window.setTimeout(myror4, 300);
}

function myror4() {
  ant2.src = "./ant2.2.svg";
  ant1.src = "./ant1.12.svg";

  window.setTimeout(myror, 100);
}
