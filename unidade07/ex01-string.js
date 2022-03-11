
var frase = "André Scaranto";
var letra = frase.charAt(0);

console.log(letra);
letra = frase.charAt(1);
console.log(letra);
letra = frase.charAt(2);
console.log(letra);
var i = 0;
var primeira_palavra = "";
while (letra != " " && i < frase.length) {
    letra = frase.charAt(i);
    primeira_palavra += letra;
    i++;
}

console.log(primeira_palavra);
