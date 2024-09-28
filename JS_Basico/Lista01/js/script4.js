nota1 = parseFloat(prompt('Nota 1º bimestre'))
nota2 = parseFloat(prompt('Nota 2º bimestre'))

if((nota1 + nota2)>=60)
    alert('Aluno Aprovado')
else
    alert(`Aluno reprovado faltaram ${60-(nota1 + nota2)} ponto(s)`)