var passageiros = [];
var addPass = "s";
var idade = 0;
var nome = "";
var mediaIdade = 0;
var soma =0;
var sorteado = ""
while(addPass == "s"){
    nome = prompt("Digite o nome do passageiro: ");
    idade = parseFloat(prompt("Digite a idade do passageiro: "));

    passageiros.push({nomePass:nome,idadePass:idade});

    addPass = prompt("Deseja incluir mais um passageiro?[s] para sim [n] para não");
}

for(i=0;i < passageiros.length; i++){
    soma+=passageiros[i].idadePass;
}

mediaIdade = soma/(passageiros.length);

document.write(`<p>A média de idade dos passageiros é ${mediaIdade}</p>`);

var sorteado = Math.floor(Math.random() * passageiros.length);
document.write(`<p>O grande sorteado foi.... ${passageiros[sorteado].nomePass} !!!!!!</p>`);