//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

//Crea un array di numeri interi
const numbers = [];
const myArrayLength = Math.floor(Math.random() * 10) + 1;


for (let i = 0; i < myArrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
}
console.log(numbers);


let sum = 0;


for (let i = 0; i < numbers.length; i++) {
    
    const addNumbers = numbers[i];
    
//fai la somma di tutti gli elementi  che sono in posizione dispari
    if(i % 2 !=0 ){

        sum += addNumbers;
    } 
    }

    
console.log("la somma è " + sum)
