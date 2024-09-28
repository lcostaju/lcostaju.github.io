nomecompleto = prompt("Insira seu nome completo:");
idade = prompt("Informe sua idade");

if(idade>=18)
    alert(`${nomecompleto}, você já POSSUI idade para tirar carteira`)
else
    alert(`${nomecompleto}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - parseInt(idade)} anos.`)