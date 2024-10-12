var num = parseFloat(prompt("Digite um numero: "));

var randNum = Math.floor(Math.random() * num) + 1;

document.write(`<p>Numero randomico entre 1 e ${num} : ${randNum}</p>`);