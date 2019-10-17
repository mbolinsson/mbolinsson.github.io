function myFunction() {
  var x = document.getElementById("mobile-column");
  if (x.className === "mobile-column") {
    x.className += " down-menu";
  } else {
    x.className = "mobile-column";
  }
}





setTimeout(function(){
  document.getElementById('js-time').style.backgroundColor = 'transparent';
}, 1400);


