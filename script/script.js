"use strict"

console.clear();

/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

// Viene creato un array contenente gli indirizzi e-mail che si vogliono controllare
const mailAddress = [
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
    }


/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/