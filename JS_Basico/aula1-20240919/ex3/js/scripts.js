nome = prompt("Informe seu nome:");

while(!nome.trim())
    alert("Insira seu nome!");

nota1 = prompt("Insira a nota do primeiro bimestre:")
console.log(typeof(nota1));

while(!nota1 || (nota1 < 0))
    alert("Insira uma nota valida")

nota2 = prompt("Insira a nota do primeiro bimestre:")

while(!nota2 || (nota2 < 0))
    alert("Insira uma nota valida")

total = parseFloat(nota1) + parseFloat(nota2);

if(total >= 60)
    alert(`${nome} você está aprovado\n Nota final:${total}`)
else
    alert(`${nome} você está reprovado\n Faltam ${100-total} para ser aprovado`)


