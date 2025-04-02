//Exercício 1
console.log('Exercício 1 - Exibir Olá, mundo no console com uma função.');

function mensagemConsole() {
    console.log('Olá, mundo!');
}

mensagemConsole();

//Exercício 2
console.log('Exercício 2 - Função que recebe um nome e exibe uma mensagem.');

function recebeNome(nome) {
    console.log(`Olá, ${nome}!`);
}

recebeNome('Leticia');

//Exercicio 3
console.log('Exercício 3 - Função que recebe um número e retorna o dobro.');

function dobraNumero(numero) {
    return numero * 2;
}

let calculaDobro = dobraNumero(10);
console.log(calculaDobro);

//Exercício 4
console.log('Exercício 4 - Função da média de 3 números.');

function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

let media = calcularMedia(10, 35, 2);
console.log(media);

//Exercício 5
console.log('Exercício 5 - Função que recebe dois números e retorna o maior');

function maiorNumero(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

let comparaNumeros = maiorNumero(105, 55);
console.log(comparaNumeros);

//Exercício 5
console.log('Exercício 5 - Alternativa de resolução do exercício.');

function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero1 = encontrarMaior(15, 9);
console.log(maiorNumero1);

//Exercício 6
console.log('Exercício 6 - Função que vai retornar o resultado de uma multiplicação.');

function quadrado(l) {
    return l * l;
}

let multiplicaNumero = quadrado(10);
console.log(multiplicaNumero);