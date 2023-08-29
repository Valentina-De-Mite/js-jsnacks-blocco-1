/*
Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// creo un array vuoto

let oddNumbers = [];

// chiedo all'utente 6 numeri

for (let i = 0; i < 6; i++) {
  let number = Number(prompt("Inserisci qui un numero"));
  if (number % 2 != 0) {
    console.log(number);
    oddNumbers.push(number);
  }
}

document.getElementById("oddNumbers").innerHTML =
  "I numeri dispari sono: " + oddNumbers + ";";
