// Exercicio 1
let diaSemana = prompt("Qual o dia da semana? ");

if (diaSemana == "Sabado") {
    alert("Bom fim de semana!");
} else if (diaSemana == 'Domingo') {
    alert("Boa fim de semana!");
} else {
    alert("Boa semana!");
}


// Exercicio 2
let numero = prompt("Digite um número positivo ou negativo: ");

if (numero > 0) {
    alert("O número que você digitou é positivo!");
} else {
    alert("O número que você digitou é negativo!");
}


// Exercicio 3
let pontuacao = prompt("Digite a sua pontuação no jogo: ");

if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar!");
}


//   Exercicio 4
let saldo = prompt("Digite o valor do saldo: ");
alert(`O valor do saldo é de: R$${saldo}.`);


// Exercicio 5
let nome = prompt("Digite o seu nome: ");
alert(`Boas-vindas ${nome}!`);