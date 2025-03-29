
// Exercício 1
let contador = 1;

while (contador <= 10) {
    console.log(`Contador número: ${contador}.`);
    contador++;
}


// Exercício 2
let contador1 = 10;

while (contador1 >= 0) {
    console.log(`Contador número: ${contador1}.`);
    contador1--;
}


// Exercício 3
let contagemRegressiva = prompt("Digite um valor para ser feita uma contagem REGRESSIVA:")

while (contagemRegressiva >= 0) {
    console.log(`Contagem regressiva: ${contagemRegressiva}.`);
    contagemRegressiva--;
}


// Exercício 4
let contagemProgressiva = prompt("Digite um número para ser feita uma contagem PROGRESSIVA:");
let contador2 = 0;

while (contador2 <= contagemProgressiva) {
    console.log(`Contagem progressiva: ${contador2}.`);
    contador2++;
}