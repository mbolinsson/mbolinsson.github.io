"use strict";

let list = document.querySelector("#list-item");

let projects = [
  {
    titel: "Time Machine",
    bread:
      "jghj been working on a time machine, so far it´o sendpeaple to antropocen"
  },
  {
    titel: "Rocket lancher",
    bread:
      "I´ve been sdfsdfsdf on a time machine, so sdfsdfs to sendpeaple to sdfssdfsd"
  },
  {
    titel: "Infaltebul Tube Man",
    bread:
      "sdff been working on a sdf, so fjkljkljkljk hjk hkj hkj hjk hkjk hkjar it´s only e to sendpeaple to antropocen"
  },
  {
    titel: "Infaltel Tube Man",
    bread:
      "vbnbv been working on a time machine, phjkhj khj kh khjk hkjossible to sendpeaple to antropocen"
  }
];
renderHTML(projects);

function template(project) {
  let id = Date.now();
  let template = `<li id="list-item" key="${id}">
    <a class="project-items" id="project-titel" href="./">${project.titel}</a>
    <p class="bread-text" id="${id}">${project.bread}</p>
    
  </li>`;
  console.log(id);

  return template;
}

function renderHTML(projects) {
  projects.forEach(project => {
    let newListItem = template(project);
    let innerHTML = list.innerHTML + newListItem;
    list.innerHTML = innerHTML;
  });
}

let thelist = document.querySelectorAll("#project-titel");

thelist.forEach(item => {
  item.addEventListener("mouseover", () => {
    let listItem = event.target.closest("#list-item");
    let tjena = listItem.attributes["key"].value;

    document.getElementById(tjena).style.fontSize = ".8rem";
    document.getElementById(tjena).style.opacity = "100";
  });
});

thelist.forEach(item => {
  item.addEventListener("mouseleave", () => {
    let listItem = event.target.closest("#list-item");
    let tjena = listItem.attributes["key"].value;
    document.getElementById(tjena).style.fontSize = "0";
    document.getElementById(tjena).style.opacity = "0";
  });
});
