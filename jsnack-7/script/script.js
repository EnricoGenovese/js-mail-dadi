"use strict"

console.clear();

// 1 - Stampa le potenze del 2 fino a 1000

/*
Immagino che 1000 sia il valore massimo che il risultato della potenza debba raggiungere.
    (2^1000 = 1.071509e+301, sono tanti 0)
*/

// Un 'while loop' potrebbe servire ad interrompere il codice una volta raggiunto il valore desiderato.
// La condizione del ciclo sarebbe: risultato <= 1000.

// imposto le variabili che serviranno nel ciclo
const maxValue = 1000;  // valore oltre il quale il ciclo non itera più
let result = 0;         // la variabile di immagazzinamento dell'operazione nel loop
let i = 1;              // il valore dell'elevatore a potenza di 2

while(result <= maxValue) { // il ciclo itera fino a che la condizione riusulta vera
    result = 2**i;
    i++;                               // per ogni loop 'i' aumenta di +1
    //                                 
    if(result >= maxValue) {           // quando il risultato raggiunge o eccede 'max value'
        result.pop();                  // l'elemento viene eliminato dall'array prima di uscire
    }                                  // dal ciclo
    //
    console.log(result);
}



