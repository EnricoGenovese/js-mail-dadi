"use strict"

console.clear();

/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

// Viene creato un array contenente gli indirizzi e-mail che si vogliono controllare

/*const mailAddress = [
    "pippo@gmail.com",
    "pluto@gmail.com",
    "topolino@gmail.com",
    "paperino@gmail.com",
    "quiquoqua@gmail.com"
];

// si chiede all'utente di inserire il proprio indirizzo e-mail
const userEMail = prompt("Inserisci il tuo indirizzo e-mail");

// si imposta una variabile 'flag' per permettere al loop di interrompesi quando si trova una corrispondenza
let welcome = false;

for(let i = 0; !welcome && i < mailAddress.length; i++) {

    // si chiede al loop di cercare una corrispondenza tra la mail inserita dall'utente
    // e tutte quelle presenti nell'array. Se trovata, il loop si interrompe e imposta il
    // valore di "welcome" come vero.
    if(userEMail === mailAddress[i]) {
        welcome = true;
    } 
}
// Il valore "true" di "welcome" permette di stampare in console il messaggio di benvento
if(welcome) {
    console.log("Benvenuto.")
    // altrimenti viene stamapato in console un messaggio di 'errore' 
} else {
    console.log("La mail inserita non è corretta.")
    } */


/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Si crea una funzione che genera un numero randomico tra un min e un max
// deciso all'invocazione della funzione, per permetterne un (ri-)utilizzo più ampio.
// I numeri della giocata di un dado saranno sempre da 1 a 6 (incluso).

function getRandInt(min, max) {
    min = Math.ceil(min);   // arrotonda per eccesso l'intero casuale (es. 0,95 --> 1)
    max = Math.floor(max);  // arrotonda per difetto l'intero causale (es. 1.95 --> 1)
    
    // Il '+ 1' aggiunto alla sottrazione di min a max permette di avere dei risultati che
    //  possono superare il massimo indicato senza superare il punto dell'intero successivo (massimo 5,999...)
    //  e quindi risultare, approssimati per difetto, anche nel valore stesso del valore massimo.    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  

// Si creano le due variabili delle giocate random, la prima del giocatore e la seconda 
// della CPU.

const humanDieCast = getRandInt(1, 6);
console.log(humanDieCast);

const computerDiecast = getRandInt(1, 6);
console.log(computerDiecast);


// Una serie di condizioni che determinano un vincitore. "Math.floor" + "Math.random()" produce un intero:
// non è necessario cambiare nessun tipo di dato a stringa a 'numero'
if(humanDieCast > computerDiecast) {
    console.log("Vince il giocatore umano!");   // normale comparazione di due interi, scegli il maggiore
} else if (humanDieCast < computerDiecast) {    
    console.log("Vince il Computer!");          // come sopra, invertendo il senso della comparazione
} else {
    console.log("Pareggio.");   // in caso pareggio, il messaggio che prende in considerazione l'opzione
}                               // viene stampato a terminale. 

// "Alea iacta est"
console.log("Premi F5 per giocare ancora.");