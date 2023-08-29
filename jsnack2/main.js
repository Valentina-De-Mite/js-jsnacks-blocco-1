/*
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// TOOLS:
// - prompt x2
// - if else
// - inner.HTML

// chiedo all'utente di inserire 2 parole

var message = "";

let words = document.getElementById("words");

let userWord1 = prompt("Inserisci qui una prima parola");
console.log(userWord1);

let userWord2 = prompt("Inserisci qui una seconda parola");
console.log(userWord2);

// confronto la lunghezza delle parole

// const wordsList = [userWord1, userWord2];

console.log(`${userWord1} ${userWord1.length}`);
console.log(`${userWord2} ${userWord2.length}`);

// stampo la parola piu' corta e poi quella piu' lunga

if (userWord1.length > userWord2.length) {
  message = "La parola piu' lunga e': " + userWord1;
  word2 = userWord2;
}
if (userWord1.length < userWord2.length) {
  message = "La parola piu' lunga e': " + userWord2;
  word2 = userWord1;
} else if (userWord1.length === userWord2.length) {
  message = "Le parole sono lunghe uguali: ";
}

console.log(message + Math.max(userWord1.length, userWord2.length));

let wordLenght = Math.max(userWord1.length, userWord2.length);

words.innerHTML = message + wordLenght + word2;
