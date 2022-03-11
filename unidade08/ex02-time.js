var agora = new Date();
console.log(agora.getHours());
console.log(agora.getHours() + ":" + agora.getMinutes());
console.log(agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds());

function setDoisDigitos(tempo){
    if (tempo < 10) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}

var hora = setDoisDigitos(agora.getHours())
var minuto = setDoisDigitos(agora.getMinutes())
var segundo = setDoisDigitos(agora.getSeconds())
console.log(hora + ":" + minuto + ":" + segundo);