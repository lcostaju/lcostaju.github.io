var numIni = parseFloat(prompt("Digite o numero inicial: "));
var numFim = parseFloat(prompt("Digite o numero final: "));

var randNum = Math.floor(Math.random() * (numFim - numIni + 1)) + numIni;

document.write(`<p>Numero randomico entre ${numIni} e ${numFim} : ${randNum}</p>`);