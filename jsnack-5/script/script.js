"use strict"

console.clear();

/*
1 - Crea un array vuoto;
2 - Chiedi per 6 volte all'utente di inserire un numero,
    se questo è dispari, inseriscilo nell'array.
*/

// Creiamo un array vuoto, in cui verranno inseriti solamente i numeri dispari digitati dall'utente.

const oddNumbs = [];

// Il risultato può essere raggiunto utilizzando un ciclo 'while', permettendo soltanto 6 possibilita 
// di input utilizzando un contatore che raggiunto il valore 6 esce dal loop (e stampa l'array creato);

let c = 0; // il contatore

while(c < 6) { 
    const userNumb = prompt("Inserisci un numero"); // richiesta all'utente di inserire un numero
    // Per ogni iterazione il contatore sale di 1
    c++;
    // Aggiunta del numero all'array solo se dispari
    if(parseInt(userNumb) % 2 !== 0) {
        oddNumbs.push(userNumb); // aggiunge in coda all'array il numero che passa la condizione
    }  
} 

console.log(oddNumbs); // stampa l'array dopo le 6 iterazioni
