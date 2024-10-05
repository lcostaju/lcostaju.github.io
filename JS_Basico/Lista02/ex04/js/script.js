var qtdPass = prompt("Quantos passageiros iram no onibus?");
var passageirosHomens = [];
var passageirosMulheres = [];
var sexo;
var nome;
for (i = 0; i < qtdPass; i++) {
    //leitura sexo
    sexo = prompt(`Qual é o sexo do passgeiro ${i + 1} (H ou M)?`)
    //leitura nome passageiros
    nome = prompt("Qual é o nome do passageiro?");
    if (sexo == 'h'){
        passageirosHomens.push(nome);
        //passageirosMulheres.push(" - ");
    }else{
        passageirosMulheres.push(nome);
        //passageirosHomens.push(" - ");
    }
        

}

var tamanho = (passageirosHomens.length>passageirosMulheres.length)? passageirosHomens.length:passageirosMulheres.length;

document.write('<table>');
for (i= 0; i < tamanho; i++) {
    document.write('<tr>');
    document.write(`<td>${(passageirosMulheres[i] == undefined)?' - ':passageirosMulheres[i]}</td>`);
    document.write(`<td>${(passageirosHomens[i] == undefined)?' - ':passageirosHomens[i]}</td>`);
    document.write('</tr>');

}
document.write('</table>');

