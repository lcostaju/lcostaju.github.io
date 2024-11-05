var nomeComp = prompt("Digite o seu nome completo: ");
var vetNome = nomeComp.toLowerCase().split(" ");
vetNome[0] = vetNome[0].toUpperCase();
var msg = vetNome.join(" ");
alert(msg);