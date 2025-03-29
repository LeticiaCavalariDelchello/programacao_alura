
// Exercício 1
console.log('Boas-vindas ao programa.');

// Exercício 2
let nome = 'Leticia';
console.log(`Olá, ${nome}!`);

// Exercício 3
let nome1 = 'Leticia';
alert(`Olá, ${nome1}!`);

// Exercício 4
let programacao = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(programacao);

// Exercício 5
let valor1 = 5;
let valor2 = 10;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Exercicio 6
let valor3 = 67;
let valor4 = 8;

let resultado1 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado}`);

// Exercício 7
let idade = prompt('Digite a sua idade: ');

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

// Exercício 8
let numero = prompt('Digite um número:');

if (numero > 0){
    console.log('O número é positivo!');
} else {
    if (numero < 0){
        console.log('O número é negativo');
    } else {
        console.log('O número é zero!')
    }
}

// Exercicio 9
let numero1 = 1;

while (numero1 <= 10) {
    console.log(`Número: ${numero1}.`);
    numero1++;
}

// Exercício 10
let nota = 7;

if (nota >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!')
}

// Exercicio 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Exercicio 12
let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

// Exercicio 13
let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);