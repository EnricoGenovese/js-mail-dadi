"use strict"

console.clear();

// Calcolare la somma e la media dei primi 10 numeri (da 0 a 9)

// Con un 'for loop' si possono iterare tutti i numeri da 0 a 9  e salvare il risultato 
// della somma di ognuno con quelli precendenti fino a raggingere la decima iterazione 
// ed uscire dal ciclo.

/*---------------------------------*\
|Versione con un array già esistente|
\*---------------------------------*/

// Array dei primi 10 numeri
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// variabile in cui salvare la somma dei numeri;
let sum = 0;

// ciclo 'for'per sommare gli elementi dell'array

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(`La somma degli elementi dell'array già esistente è: ${sum}.`); 


