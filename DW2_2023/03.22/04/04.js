console.log("04.js Enlazado");
var arreglos=["uno","dos","tres"];
const nuevovalor="cinco"; // para cambiar el valor deseado
const valorantiguo="dos"; // para verificar el valor a ser cambiado
for (var i=0;i<=arreglos.length;i++){
    if (arreglos[i]==valorantiguo){
        arreglos[i]=nuevovalor;
    }
}
console.log(arreglos);
