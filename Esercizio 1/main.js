let somma = 0; 

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
let i = 0;
while (i < 10 ) {
    let numeriInseriti = parseInt(prompt('Inserisci un numero'));
    somma = somma + numeriInseriti;
    i++;
}
//Il programma stampa la somma di tutti i numeri inseriti.
console.log('La somma è: ' + somma);


