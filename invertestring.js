let h1=document.querySelector("h1");
let string = prompt("insira a palavra"); // definindo a string a ser invertida
let novaString = ""; // criando uma string vazia para armazenar o resultado

for (let i = string.length - 1; i >= 0; i--) { // percorrendo a string de trás para frente
  novaString += string[i]; // adicionando cada caractere na nova string

}
h1.textContent = novaString; // exibindo o resultado

