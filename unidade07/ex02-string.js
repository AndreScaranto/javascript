
var nome = "Curso JavaScript Fundamental";
var letra = "";
var i = 0;

while (letra != " " && i < nome.length) {
    letra = nome.charAt(i);
    i++;
}

var primeira = nome.substr(0,i);

console.log(primeira);
