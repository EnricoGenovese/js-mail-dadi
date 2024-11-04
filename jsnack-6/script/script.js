"use strict"

console.clear();

// 1 - Stampa il cubo dei primi N numeri
// 2 - N è un numero indicato dall'utente

// Dato un numero n inserito dall'utente, un ciclo 'for' con interazioni massimo uguali (<=) al
// valore dell'intero indicato dall'utente, ed elevato al cubo per ogni iterazione, potrebbe risolvere
// la consegna.


// Variabile per l'input dellì'utente; il valore verrà usato come numero di iterazioni massime.
const userInput = prompt("Inserisci un numero");

// nel ciclo 'for' il numero di iterazioni non deve superare il valore N di userInput.
for(let i = 0; i <= parseInt(userInput); i++) { // usiamo 'i' come base del cubo; 'i' itera fino a userInput
    if(!isNaN(userInput)) {
    let cube = Math.pow(i, 3); // al posto di usare: cube = i**3
    console.log(`${i}^3 = ${cube}`); // stampiamo anche l'operazione oltre che il risultato 
    } 
}
