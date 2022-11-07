// JavaScript Document
console.log("hi");
/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele

var menuOpenButton = document.querySelector("header > button");

console.log(menuOpenButton);

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit

menuOpenButton.addEventListener("click", menuOpenen);

// stap 3: voeg in de functie een class toe aan de nav

function menuOpenen() {
  
 var deNav = document.querySelector("header nav");
  deNav.classList.toggle("open");
}

