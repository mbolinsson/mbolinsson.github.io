"use strict";

let projectss;
const list = document.querySelector("#list-item");
const media = window.matchMedia("(min-width: 550px)");

function send(data) {
  projectss = data;
  renderHTML(projectss);
  mediachange();
  media.addListener(mediachange());
}

function template(project) {
  return `<li id="list-item" key="${project.id}">
    <a class="project-items" id="project-titel" href="${project.link}">${project.titel}</a>
    <p class="bread-text" id="${project.id}">${project.bread}</p>
  </li>`;
}

function renderHTML(projectss) {
  projectss.forEach((project) => {
    let newListItem = template(project);
    let innerHTML = list.innerHTML + newListItem;
    list.innerHTML = innerHTML;
  });
}

function mediachange() {
  if (media.matches) {
    const thelist = document.querySelectorAll("#project-titel");

    thelist.forEach((item) => {
      item.addEventListener("mouseover", () => {
        eventy(event, ".8rem", "100");
      });
      item.addEventListener("mouseleave", () => {
        eventy(event, "0", "0");
      });
    });

    function eventy(event, fontSize, opacity) {
      const listItem = event.target.closest("#list-item");
      const breadTextKeyValue = listItem.attributes["key"].value;
      const breadTextStyle1 = document.getElementById(breadTextKeyValue).style;
      breadTextStyle1.fontSize = fontSize;
      breadTextStyle1.opacity = opacity;
    }
  } else {
    console.log("error");
  }
}
