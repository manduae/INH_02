// JavaScript Document
console.log("hi");
/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele

var menuOpenButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit

menuOpenButton.addEventListener("click", menuOpenen);

// stap 3: voeg in de functie een class toe aan de nav

function menuOpenen() {
  
 var deNav = document.querySelector("header nav");
  deNav.classList.add("open")
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op

var sluitButton = document.querySelector("header nav button");

// stap 2 - laat die button luisteren naar kliks

sluitButton.addEventListener("click", menuSluiten);

// stap 3 - in de functie verwijder de class van de nav

function menuSluiten() {
  var deNav = document.querySelector("header nav");
  
  deNav.classList.remove("open")
}

