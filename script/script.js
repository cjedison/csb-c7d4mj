// var myVar = setInterval(myTimer, 1400);
// function myTimer() {
//   document.querySelector(".home-page").style.opacity = "1";
//   document.querySelector(".contact").style.opacity = "1";
// }

/* SEARCH NAV */

function searchFunction() {
  var x = document.getElementById("searchBar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

/* MOBILE NAV */

function navFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

/* SCROLL TO TOP */

// function scrollTop() {
//   window.scrollTo(0, 0);
// }

const loader = document.querySelector(".loader-wrapper");

setTimeout(function fadeLoader() {
  window.scrollTo(0, 0);
  loader.style.opacity = "0";
  loader.style.zIndex = "-2";
}, 1500);
