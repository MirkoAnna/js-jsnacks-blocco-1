// Calcola la somma e la media dei primi 10 numeri.
const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('I numeri sono: ' + numeri);

// Calcolo somma
let somma = 0;

for (let i = 0; i <numeri.length; i++) {
    somma = somma + numeri[i];
}
console.log('La somma dei numeri è: ' + somma);

// Calcolo media
let media = somma / numeri.length;
console.log('La media è di: ' + media);