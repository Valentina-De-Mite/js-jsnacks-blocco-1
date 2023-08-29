/*
Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// TOOLS:
// - prompt x2
// - if else
// - inner.HTML

// chiedo all'utente di inserire due numeri

let numbers = document.getElementById("numbers");

var message = "";

let userNumber1 = prompt("Inserisci qui il primo numero");
console.log(userNumber1);

let userNumber2 = prompt("Inserisci qui il secondo numero");
console.log(userNumber2);

// confronto i due numeri

if (userNumber1 > userNumber2) {
  message = "Il numero piu' alto e' ";
}
if (userNumber1 < userNumber2) {
  message = "Il numero piu' alto e' ";
}
if (userNumber1 === userNumber2) {
  message = "I numeri sono uguali: ";
} else if ("") {
  message = "inserisci nuovamente 2 numeri ";
}

var numberList = [userNumber1, userNumber2];
console.log(message + Math.max(userNumber1, userNumber2));

number = Math.max(userNumber1, userNumber2);

// stampo in pagina il maggiore

numbers.innerHTML = message + number;
