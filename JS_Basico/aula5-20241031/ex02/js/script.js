// function concatString(s1,s2,s3,s4){
//     return s1.concat(" ",s2," ",s3," ",s4);
// }

// var msg1 = "Hello";
// var msg2 = "Wolrd!!";

// var retorno = concatString('Wiltom','de','Paula','Filho');

var nomeComp = prompt("Digite o seu nome completo: ");
var vetNome = nomeComp.split(" ");
var primeiroNome = vetNome[0];
var ultimoNome = vetNome[vetNome.length-1];
var iniciais = '';

for(var i in vetNome)
    iniciais += vetNome[i].at(0)


document.write(`<p>O nome ${nomeComp} possui ${nomeComp.length} caracteres</p>`)
document.write(`<p>A primeira letra do nome é ${nomeComp.at(0)}</p>`)
document.write(`<p>Com todas as letras maiusculas ${nomeComp.toUpperCase()}</p>`)
document.write(`<p>Com todas letras minusculas ${nomeComp.toLowerCase()}</p>`)
document.write(`<p>Primeiro nome: ${primeiroNome}</p>`)
document.write(`<p>Ultimo nome: ${ultimoNome}</p>`)
document.write(`<p>Primeiro nome concatenado com a ultima parte: ${primeiroNome.concat(ultimoNome)}</p>`)
document.write(`<p>Primeiro nome concatenado com a ultima parte: ${primeiroNome.concat(ultimoNome).toUpperCase()}</p>`)
document.write(`<p>O nome tem ${vetNome.length} palavras</p>`)
document.write(`<p>Iniciais concatenas maiusculas ${iniciais.toUpperCase()}</p>`)



