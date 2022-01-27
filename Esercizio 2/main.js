// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
let numeroInserito = parseInt(prompt('Inserisci il valore dei primi numeri di cui calcolare il cubo'));

let listaNumeri = 0;

for (let i = 0; i < numeroInserito; i++) {
    listaNumeri = i ** 3;
    console.log(i + ' elevato al cubo è: ' + listaNumeri);
}