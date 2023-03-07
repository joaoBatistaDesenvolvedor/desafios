let h1=document.querySelector("h1");

function calcularFibonacci(num) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] < num) {
        let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximo);
    }

    return fibonacci;
}

function verificarFibonacci(num) {
    let fibonacci = calcularFibonacci(num);

    if (fibonacci.includes(num)) {
return `O número ${num} pertence à sequência de Fibonacci!`;
} else {
return `O número ${num} não pertence à sequência de Fibonacci!`;
   }
}

let num = parseInt(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci: "));
h1.textContent = verificarFibonacci(num);
