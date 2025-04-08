/*
// Exercício 1 - Criar a função que calcula IMC
function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

let altura = Number(prompt('Digite sua altura (em metros):'));
let peso = Number(prompt('Digite seu peso (em quilogramas):'));
let imc = calculaIMC(altura, peso);
console.log(imc);


// Exercício 2 - Calcular um fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}.`);


// Exercício 3 - Converter valor em dólar
function converterDolar(valor) {
    return valor * 4.80;
}

let valor = Number(prompt('Digite um valor para converter em Dólar:'));
let dolar = converterDolar(valor);
console.log(dolar);


// Exercício 4 - Área e perímetro de uma sala retangular
function salaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = altura + altura + largura + largura;

    console.log(`A sala tem uma área equivalente à ${area}.`);
    console.log(`A sala tem perímetro equivalente à ${perimetro}.`);
}

let altura = Number(prompt('Digite a altura da sala:'));
let largura = Number(prompt('Digite a largura da sala:'));
let areaEPerimetro = salaRetangular(altura, largura);



// Exercício 5 - Área e perímetro de uma sala circular
function salaCircular(raio) {
    let area = pi * (raio*raio);
    let perimetro = 2 * pi * raio;

    console.log(`A área da sala circular é igual a ${area}.`);
    console.log(`O perímetro da sala circular é igual a ${perimetro}.`);
}

let pi = 3.14
let raio = Number(prompt('Digite o raio da sala circular:'));
let areaEPerimetro2 = salaCircular(raio);
*/

// Exercício 6 - Mostra tabuada de um número escolhido
function mostraTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = Number(prompt('Digite um valor para ver sua tabuada:'));
let tabuada = mostraTabuada(numero);