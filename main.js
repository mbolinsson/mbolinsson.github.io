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
