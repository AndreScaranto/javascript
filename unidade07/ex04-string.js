var nome = "ANDRE FONTENELLE";
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

var letras_minusculas = nome.toLowerCase();

console.log(letras_minusculas);

var primeira = letras_minusculas.charAt(0).toUpperCase();

console.log(primeira + letras_minusculas.substring(1));

var lista = letras_minusculas.split(" ");

console.log(lista);
console.log(lista.length);
var i = 0;
while ( i < lista.length) {
    primeira = lista[i].charAt(0).toUpperCase();
    lista[i] = primeira + lista[i].substr(1);
    i++;
}

console.log(lista.join(" "))
