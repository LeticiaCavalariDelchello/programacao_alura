// Exercício 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Exercício 3
function botaoConsole() {
    console.log('O botão foi clicado.');
}

// Exercício 4
function botaoAlerta() {
    alert('Eu amo JS');
}

// Exercício 5
function botaoPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

// Exercício 6
function botaoSoma() {
    let numero1 = parseInt(prompt('Digite um número inteiro:'));
    let numero2 = parseInt(prompt('Digite outro número inteiro:'));

    let resultado = numero1 + numero2;

    alert(`O resultado de ${numero1} + ${numero2} é igual a: ${resultado}`);
}
