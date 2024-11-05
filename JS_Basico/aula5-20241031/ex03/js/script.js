var texto = prompt("informe o texto:");
var palavraIni = prompt("Informe uma palavra para ser substituida na primeira ocorrencia:");
var palavraFim = prompt("Informe por qual palavra ela será substiruida");
//var newText = texto.replace(palavraIni,palavraFim);
var newText = texto.replaceAll(palavraIni,palavraFim);
document.write(`<p>${newText}</p>`);