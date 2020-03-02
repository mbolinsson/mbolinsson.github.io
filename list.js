"use strict";

const list = document.querySelector("#list-item");
var media = window.matchMedia("(min-width: 550px)");

let projects = [
  {
    titel: "Time Machine",
    bread:
      "jghj been working on a time machine, so far it´o sendpeaple to antropocen",
    id: "1"
  },
  {
    titel: "Rocket lancher",
    bread:
      "I´ve been sdfsdfsdf on a time machine, so sdfsdfs to sendpeaple to sdfssdfsd",
    id: "2"
  },
  {
    titel: "Infaltebul Tube Man",
    bread:
      "sdff been working on a sdf, so far it´s only e to sendpeaple to antropocen",
    id: "3"
  },
  {
    titel: "Infaltebul Tube Man",
    bread:
      "vbnbv been working on a time machine, possible to sendpeaple to antropocen",
    id: "4"
  }
];
renderHTML(projects);

function template(project) {
  let template = `<li id="list-item" key="${project.id}">
    <a class="project-items" id="project-titel" href="./">${project.titel}</a>
    <p class="bread-text" id="${project.id}">${project.bread}</p>
  </li>`;

  return template;
}

function renderHTML(projects) {
  projects.forEach(project => {
    let newListItem = template(project);
    let innerHTML = list.innerHTML + newListItem;
    list.innerHTML = innerHTML;
  });
}

if (media.matches) {
  let thelist = document.querySelectorAll("#project-titel");

  thelist.forEach(item => {
    item.addEventListener("mouseover", () => {
      let listItem = event.target.closest("#list-item");
      let tjena = listItem.attributes["key"].value;
      console.log("hej");
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
} else {
}
