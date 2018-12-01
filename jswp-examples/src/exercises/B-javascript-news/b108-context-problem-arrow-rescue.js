
/**
 #Zadanie - w komentarzach, poniżej.

 #Cel:
 Zobrazowanie problemu kontekstu wywołania w JavaScript.
 Poznanie dodatkowej "super-mocy" arrow (=>) function
*/

function Lawyer ( name ) {
  this.name = name;
  this.introduce = function () {
    console.log('Hello I\'m your lawyer, my name is', this.name)
  };
  this.introduceAfter = function (seconds) {

    setTimeout(function () {
      this.introduce();
    }, seconds * 1000);
  };
}

const harvey = new Lawyer('Harvey Specter');
const louis = new Lawyer('Louis Litt');

// Twój prawnik pojawia się w pokoju przesłuchań natychmiastowo:
harvey.introduce();

// Musisz czekać na swojego prawnika:
// #! Co się stanie jeśli odkomentujemy linię poniżej?
// louis.introduceAfter(1);

// Zadanie:
// 1. Napraw wykorzystując arrow function
// 2. Czy pamiętasz jak dawniej rozwiązywało się tego typu problemy z kontekstem?
