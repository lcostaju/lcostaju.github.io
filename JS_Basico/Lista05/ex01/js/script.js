//nomeCompleto = prompt("Qual o seu nome completo?");
var primeiroNome = prompt("Qual o seu primeiro nome?");
var sobrenome = prompt("Qual o seu sobrenome?");
var qtdExib = prompt("Informa a quantidade de vezes que o seu nome deve ser exibido:");
var cor = prompt("Informe a cor que o nome será exibido (em inglês):");
var nomeCompleto = primeiroNome.concat(" ",sobrenome);
//for (i=1; i<=10; i++)
//document.write("<p>"+ i +" - "+ nomeCompleto +"</p>")
for(i=0; i<qtdExib; i++)
    document.write(`<p style="color: ${i % 2 ==0?"black":cor};">${i+1} - ${nomeCompleto}</p>`);