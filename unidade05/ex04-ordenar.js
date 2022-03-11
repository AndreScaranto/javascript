var salada = new Array();
salada[0] = "Uva";
salada[1] = "Mamão";
salada[2] = "Pêra";
salada[3] = "Maçã";
salada.push("Abacate");


console.log(salada);

salada.sort();
console.log(salada);


var megasena = new Array(43,10,3,2,1,59);



console.log(megasena);

function ordenarNumeros(a,b) {
    return a-b;
}
megasena.sort();
console.log(megasena);

megasena.sort(ordenarNumeros);
console.log(megasena);
