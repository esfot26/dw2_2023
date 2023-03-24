console.log("01.js Enlazado");
function sumar_array(array_n){
    var suma = 0;
    array_n.forEach (function(n){
        suma += n;
    });
    return suma;
}
var n = [102 ,10, 1789]; //El array de números
console.log(n);
var suma = sumar_array(n); //La función de suma
console.log(suma);


