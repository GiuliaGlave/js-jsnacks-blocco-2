//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const button = document.getElementById("btn")

//Inserisci un numero


button.addEventListener(
    "click",
    function () {

        let insertNumber = parseInt(document.getElementById("box-number").value);
        const outputMsg = document.getElementById("output-msg")

        if(!isNaN(insertNumber)){

        //se è pari stampa il numero
            if (insertNumber % 2 == 0) {

                outputMsg.innerHTML = (insertNumber +" è pari");
            
            //se è dispari stampa il numero successivo
            } else {
                outputMsg.innerHTML = (`il numero pari successivo è ${insertNumber +1 }`);
            } 
        
        } else {
            
            outputMsg.innerHTML = "Devi inserire un valore numerico";
        }  

    }
)


