var cpf = "333";
var b = "333";
var mensagem = "";
if (b == cpf) {
    mensagem = "Os valores são iguais ";

    if (b === cpf) {
        mensagem = mensagem + "e os tipos são iguais";
    } else {
        mensagem = mensagem + "mas os tipos são diferentes";
    }

    mensagem = mensagem + ".";

    alert(mensagem)
} else {
    alert("Os valores são diferentes.")
}
