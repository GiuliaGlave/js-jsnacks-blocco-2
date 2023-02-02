//JSnack4 (Bonus)
//Crea due array che hanno un numero di elementi diversi.Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.



/* ********** ARRAY DIVERSI ************ */

//dichiaro i 2 array
const arrayA = [];
const arrayALength = Math.floor(Math.random() * 100) + 1;

const arrayB = [];
const arrayBLength = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < arrayALength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    //pusho un numero casuale tra 1 e 100 nell'array
    arrayA.push(randomNumber);
}

for (let i = 0; i < arrayBLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    //pusho un numero casuale tra 1 e 100 nell'array
    arrayB.push(randomNumber);
}

console.log("lunghezza iniziale array A = " + arrayA.length);
console.log("lunghezza iniziale array B = " + arrayB.length);



/* ********** ARRAY UGUALI ************ */

//dichiaro due liste di lunghezze diverse
let longList;
let shortList;

//definisco le condizioni per array lungo e array corto
if(arrayA.length > arrayB.length){
    longList = arrayA;
    shortList = arrayB;
} else {
    longList = arrayB;
    shortList = arrayA;
}

//dichiaro la differenza della linghezza di 2 array
const arrayDifference = longList.length - shortList.length;

//creo un ciclo che aggiunge elementi all'array finchè la i non raggiunge il valore della differenza della length
for( let i=0; i < arrayDifference; i++){

    //aggiungo gli elementi (in questo caso contengono un numero a caso tra 1 e 100)
    shortList.push(Math.floor(Math.random() * 100) + 1);
}

//stampo la length della lista con più elementi e quella con meno elementi
console.log("L'array più lungo contiene " + longList.length + " elementi");
console.log(`Ho aggiunto (${arrayDifference}) elementi all'array più corto. Ora anche lui contiene ${shortList.length} elementi`);