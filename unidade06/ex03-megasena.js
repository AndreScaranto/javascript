
var megasena = new Array()
var i = 0;
while (i < 6) {
        var sorteio = Math.ceil(Math.random()*60);
        if (megasena.indexOf(sorteio) < 0) {
        megasena.push(sorteio);
        i++;
        }
        

}

console.log(megasena);
function ordenarNumeros(a,b) {
    return a - b;
}

megasena.sort(ordenarNumeros);
console.log(megasena);
