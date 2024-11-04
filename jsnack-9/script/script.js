"use strict"

console.clear();

// Calcolare la somma e la media dei primi 10 numeri (da 0 a 9)

// Con un 'for loop' si possono iterare tutti i numeri da 0 a 9  e salvare il risultato 
// della somma di ognuno con quelli precendenti fino a raggingere la decima iterazione 
// ed uscire dal ciclo.

/*-----------------------------------*\
| Versione con un array già esistente |
\*-----------------------------------*/

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


/*----------------------------------------*\
| Versione con un array creato da funzione |
\*----------------------------------------*/

// Creare un array vuoto

const newArray = [];

// Creare una funzione per generare un array con i numeri che si desidera sommare

function arrayOfNumbs(max) {  // (max) verrà inserito tra le parentesi della funzione quando invocata
    for(let i = 0; i < max; i++) {
        newArray.push(i);
    }
    return newArray;  // la funzione mi restituisce il risultato del ciclo 'for' 
}

// Genero un array con la funzione (con tutti i numeri da 0 a (max-1)
// semplicemente cambiando il valore della funzione)
const numbs = arrayOfNumbs(10);
console.log(numbs);

// varaible per immagazzinare la somma degli interi di numbs
let sum2 = 0;

// Ciclo for per stampare la somma degli elementi dell'array appena creato

for(let i = 0; i < numbs.length; i++) {
    sum2 += numbs[i];
}

// Il risultato viene stamapato a console;
console.log(`La somma dell'array creato con una funzione è: ${sum2}.`);