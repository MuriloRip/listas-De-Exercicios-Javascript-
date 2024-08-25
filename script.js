function exercicio1() {
    var ex1;

    while (true) {
        ex1 = prompt("Digite sua nota entre 0 e 10:");

        ex1 = parseInt(ex1);

        if (ex1 < 0 || ex1 > 10) {
            alert("Valor inválido! A nota deve estar entre 0 e 10.");
        } else {
            break;
        }
    }
}
function exercicio2(){
    var nome;
    var senha;
    while(true){
        nome = prompt("Digite seu nome de usuario:");
        senha = prompt("Digite sua senha:");
        if(nome == senha){
            alert("(Invalido!) Digite uma senha diferente do Username!")
        }else{
            break;
        }
    }
}
function exercicio3() {
    let N = parseInt(prompt("Digite o número de notas:"));
    let soma = 0;
    let contador = 0;

    while (contador < N) {
        let nota = parseFloat(prompt(`Digite a nota ${contador + 1}:`));
        soma += nota;
        contador++;
    }

    let media = soma / N;
    alert(`A média aritmética das notas é: ${media}`);
}
function exercicio4(){
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero < 2) {
        alert("Não é primo.");
        return;
    }
    let i = 2, isPrimo = true;
    while (i < numero) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
        i++;
    }
    alert(isPrimo ? "É primo." : "Não é primo.");
}
