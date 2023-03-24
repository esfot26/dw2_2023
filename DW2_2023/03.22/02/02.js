console.log("02.js Enlazado");
function palindromo(str){ //string cadena de caracteres//
    const reverso= str.split("").reverse().join(""); // Split sirve para separa el array, reverse invierte el arreglo, join une de nuevo el array//
    if (reverso===str){
        console.log("Es un palindromo");
    }
    else{
        console.log("No es un palindromo");
    }
}
console.log(palindromo("oso"));