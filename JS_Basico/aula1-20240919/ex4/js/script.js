nome = prompt("Qual seu nome?")
qtd = parseInt(prompt("Quantas vezes vc quer que exiba seu nome?"))

cor = prompt("Qual cor vc que ver o seu nome?")
for(i=0;i<qtd;i++)
document.write(`<p style="color:${cor}">${i+1} - ${nome}</p>`)