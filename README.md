# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).




## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Emilio Manduapessij

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.heineken.com/nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/sc_main_page.jpeg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/sc_second_page.jpeg" width="375px" alt="omschrijving van de pagina">
 
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  De website bevat voor een grotendeel div elementen, hierdoor vind ik het lastig om de website te ontrafelen middels een semantisch correcte code. Wat ook opvalt is dat de website geen main element bevat.

  #### Screenreader
  www.vanmoof.com/nl getest:
  
  - Punt 1: Het valt me op dat als je op de Nederlandse pagina komt van Van Moof, er een engelse stem te horen is.
  
  - Punt 2: Wanneer je op de pagina komt, hoor je een de slogan, echter eindigt ie abrupt in het midden:
  
  <img src="readme-images/screenread_1.png" width="375px" alt="breakdownschets">

  - Punt 3: Wanneer je de bij "taal" bent, geeft de stem aan: "NL/NL" ipv, context wat je met deze button kan doen.
  
  <img src="readme-images/screenread_2.png" width="375px" alt="breakdownschets">

  - Punt 4: Idem dito voor "Myvanmoof", geen context weergeven wat je met deze button kan doen.
  
  - Punt 5: Als je naar de artikelen gaat, geeft de screenreader niet aan om welk product het gaat:
  
  <img src="readme-images/screenread_3.png" width="375px" alt="breakdownschets">
  
  - Punt 6: Idem dito, op het moment dat je op "ontdek meer" klikt, word er niet aangegeven op welke section je zit als gebruiker.
  
  #### Muis en Toetsenbord 
  De taps zijn over het algemeen wel logisch, echter slaat de screenreader hele blokken over zonder de context te vermelden waar je je bevindt als gebruiker.
  
<details>

Ontvangen test van Giorgio:

<img src="readme-images/giorgio1.png" width="175px" alt="breakdownschets">
<img src="readme-images/giorgio2.png" width="175px" alt="breakdownschets">
<img src="readme-images/giorgio3.png" width="175px" alt="breakdownschets">
<img src="readme-images/giorgio4.png" width="175px" alt="breakdownschets">
<img src="readme-images/giorgio5.png" width="175px" alt="breakdownschets">

Text nog te ontvangen.

</details>

<details open>


Breakdown schets

  <summary>uitwerken na afloop 2e werkgroep</summary>

  <img src="readme-images/breakdownschets1.png" width="375px" alt="breakdownschets">
  
Voortgang

  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Moeite met het vertalen van breakdown schets naar HTML ivm met vragen over alle divs op de website. Hierdoor ben ik niet zeker over het schrijven van mijn HTML, ik wilde eerst voldoende feedback ontvangen van de docent gedurende voortganggesprek 1 waarop ik een 2e breakdownschets kon maken en vervolgens mijn html kon gaan schrijven.


  ### Agenda voor meeting
  samen met je groepje opstellen

  Emilio: Breakdownschets bespreken
  Giorgio: Breakdownschets en HTML bespreken
  Nathan: Breakdownschets en HTML bespreken
  Jesse: HTML bespreken
  


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Punt 1: Mijn belangrijkste vraag werd eigenlijk al beantwoord gedurende de gesprekjes voorafgaand mijn gesprek. Hierin werd veelvuldig uitgelegd dat je met unordered list of ordered list div items en article items kan tackelen. 
  - Punt 2: Header was prima: Logo met image erin, button aan de rechte kant met nav naar voren met Ul en List items.
  - Punt 3: h1 miste, "Heineken silver" h1 maken. "de verfrissende smaak van nu" vervangen van h2 naar p.
  - Punt 4: a in een button, klopt niet. Oplossing: Button leidt naar nieuwe pagina dus dit is een a element.
  - Punt 5: "ons verhaal" moet een h2 worden.
  - Punt 6: Article vervangen voor unordered list met list items.
  - Punt 7: Footer kan beknopter met ul en li items die je vervolgens individueel kan stylen met CSS.
  
  
  Hier mijn 2e versie van de breakdown: 
  
  <img src="readme-images/breakdownschets2.png" width="375px" alt="breakdownschets">
  
  ### Stand van zaken
  Voor mijn gevoel klopt mijn breakdown schets volledig, dit geeft rust aangezien ik nu een correcte HTML basis kan schrijven wat mij helpt in het process naar het coderen van een complete website.
  
  <img src="readme-images/html_progress.png" width="375px" alt="breakdownschets">

  Vragen voor werkgroep 3:
  
  - Vraag 1: Hoe creer ik een dropdown voor elk individuele link in estructude nav?
  - Vraag 2: Is mijn Label + 2 input velden in de footer semantisch correct?
  - Vraag 3: HTML Controle


</details>




## Voortgang 3 (week 4)

<details open>
    
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  Tijdens mijn CSS proces kwam ik tot een aantal inzichtelijke conclusies. Omdat ik per breakpoint ging inspecteren, kwam ik erachter dat sommige sections weggehaald kon worden en de content hierin samengevoegd kom worden. Ik ben nu op het punt om de verschillende sections met daarin de ul en li items aan te spreken met NTH-of-type. Hier wil ik graag feedback voor ontvangen zodat ik hiermee gestructueerd verder kan. Verder is mijn navbar nu voor 80% goed. Overige 20% is de styling van de list items en de aligning bij een grotere breakpoint dan mobiel.
  
  Wat betreft mijn navbar, ik krijg het vlaggetje nog niet mooi uitgelijnd met de andere li items. Om 1 of andere reden krijg ik de margin van het vlaggetje niet links uitgelijnd.
  
  <img src="readme-images/voortgang_vlag.png" width="375px" alt="voortgang_vlag">
  
  Verder heb ik wel voortgang geboekt met het gebruik van nth-of-type (in dit geval nth-of-type(7) img) toe te passen om zo het vlaggetje aan te roepen in het menu. Dit helpt veel. Echter wil ik graag feedback hoe ik dit kan toepassen op mijn sections met de bijbehorende ul, li en items in de list items.


  ### Agenda voor meeting
  samen met je groepje opstellen

  Emilio: CSS Nth child in specefiek. 
  Giorgio: HTML en CSS
  Nathan: -
  Jesse: CSS en Javascript bespreken


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
  2. bron 2
  3. ...

</details>