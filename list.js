"use strict";

const list = document.querySelector("#list-item");
var media = window.matchMedia("(min-width: 550px)");

let projects = [
  {
    titel: "Time Machine",
    bread: "jghj been working on a time machine.",
    id: "1"
  },
  {
    titel: "Cold Fusion",
    bread: "I´ve been sdfsdfsdf on a time machine, so sdfsdfs to sendpeaple",
    id: "2"
  },
  {
    titel: "Perpetual",
    bread: "sdff been working on a sdf.",
    id: "3"
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

function mediachange() {
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
}

mediachange();
media.addListener(mediachange());
