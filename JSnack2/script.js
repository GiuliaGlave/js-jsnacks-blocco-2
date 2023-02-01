//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde.

//partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.



const redId = document.getElementById("red");
const greenId = document.getElementById("green");

const numberArray = [];

//length casuale di elementi in array
const randomLengthArray = Math.floor((Math.random() * 50) + 1) + 10;
//numeri casuali in array
for (let i = 0; i < randomLengthArray; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberArray.push(randomNumber);
}

//separo i pari e i dispari
for (let i = 0; i < numberArray.length; i++) {
    
    splitNumber = numberArray[i];

    if (splitNumber % 2 == 0){
    
        greenId.append("  ." + splitNumber  );
        
    } else{
        redId.append("  ." + splitNumber);
    }
}



