let hettan = document.querySelector(".hettan");
let oneMore = 0;

const words = [
  "Trevligt!",
  "Kul!",
  "Roligt!",
  "Mysigt!",
  "Angenämt!",
  "Underbart!",
  "Fantastiskt!"
];

// const color = ["red", "green", "black", "tomato", "yellow", "orange", "blue"];

function extraTrevlig() {
  if (oneMore > 6) {
    oneMore = 0;
  }
  hettan.innerHTML = words[oneMore];
  //   hettan.style.color = color[oneMore];
  hettan.style.opacity = "1";
  oneMore++;
  console.log(oneMore);
  window.setTimeout(wait, 2500);
}

function wait() {
  hettan.style.opacity = "0";
  window.setTimeout(extraTrevlig, 2500);
}

extraTrevlig();

const ant2 = document.querySelector(".ant2");

myror();

function myror() {
  ant2.src = "./ant2.2.svg";

  window.setTimeout(myror2, 400);
}

function myror2() {
  ant2.src = "./ant2.3.svg";
  window.setTimeout(myror3, 100);
}

function myror3() {
  ant2.src = "./ant2.svg";
  window.setTimeout(myror4, 300);
}

function myror4() {
  ant2.src = "./ant2.2.svg";
  window.setTimeout(myror, 100);
}
