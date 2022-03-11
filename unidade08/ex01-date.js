var agora = new Date();
var meses =["Janeiro","Fevereiro","Março","Abril"];
console.log(agora.getFullYear());
console.log(meses[agora.getMonth()]);
console.log(agora.getDate());
console.log(agora.getDate() + " de " + meses[agora.getMonth()] + " de " + agora.getFullYear())

var aniversario = new Date(1988,10,27);
var semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]

console.log(semana[aniversario.getDay()])
