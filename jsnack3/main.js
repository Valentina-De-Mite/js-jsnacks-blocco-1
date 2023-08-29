/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

// TOOLS:
// - prompt x10
// - if else
// - inner.HTML

// chiedo all'utente di inserire dieci numeri

let plusNumbers = document.getElementById("plusNumbers");

let userNumber1 = Number(prompt("Inserisci qui il primo numero"));
console.log(userNumber1);
let userNumber2 = Number(prompt("Inserisci qui il secondo numero"));
console.log(userNumber2);
let userNumber3 = Number(prompt("Inserisci qui il terzo numero"));
console.log(userNumber3);
let userNumber4 = Number(prompt("Inserisci qui il quarto numero"));
console.log(userNumber4);
let userNumber5 = Number(prompt("Inserisci qui il quinto numero"));
console.log(userNumber5);
let userNumber6 = Number(prompt("Inserisci qui il sesto numero"));
console.log(userNumber6);
let userNumber7 = Number(prompt("Inserisci qui il settimo numero"));
console.log(userNumber7);
let userNumber8 = Number(prompt("Inserisci qui il ottavo numero"));
console.log(userNumber8);
let userNumber9 = Number(prompt("Inserisci qui il nono numero"));
console.log(userNumber9);
let userNumber10 = Number(prompt("Inserisci qui il decimo numero"));
console.log(userNumber10);

const userNumbers = [
  userNumber1,
  userNumber2,
  userNumber3,
  userNumber4,
  userNumber5,
  userNumber6,
  userNumber7,
  userNumber8,
  userNumber9,
  userNumber10,
];

// confronto i numeri in ciclo e cerco quelli dispari

let sum = 0;
for (let i = 0; i < userNumbers.length; i++) {
  sum += userNumbers[i];
  console.log(sum);
}

// stampo in pagina il risultato
plusNumbers.innerHTML = "La somma finale e': " + sum;
