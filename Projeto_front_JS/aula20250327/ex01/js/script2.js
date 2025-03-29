window.addEventListener('DOMContentLoaded', () => {
    //Nome idade genero salario
    //Ana  18     F     1000
    //Joao 20     M     3000
    //Cesar 30    F     1900
    //Maria 12    F     7000
    //Zé    17    M     2400


    const pessoas = [{ nome: "Ana", idade: 18, genero: "F", salario: 1000.00 },
    { nome: "Joao", idade: 20, genero: "M", salario: 3000.00 },
    { nome: "Cesar", idade: 30, genero: "M", salario: 1900.00 },
    { nome: "Maria", idade: 12, genero: "F", salario: 7000.00 },
    { nome: "Zé", idade: 17, genero: "M", salario: 2400.00 }];

    //console.log(pessoas);
    //Exibir o nome e idade de todas as pessoas maiores de idade
    var maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
    //console.log(maiores);
    maiores.forEach(maior => console.log(`Nome:${maior.nome} Idade:${maior.idade}`))
    //Exibir os nomes de todas as pessoas do sexo masculino
    var pessoasM = pessoas.filter(pessoas => pessoas.genero == "M");
    pessoasM.forEach(pessoa => console.log(`Nome: ${pessoa.nome}`))
    //Exibir os dados da pessoa com o maior salario
    //console.log(pessoas.reduce((ini,pessoa) => {pessoa.salario > ini? pessoa.salario:ini },pessoas[0].salario))
    //Ha alguma pessoa que ganha acima de 5000,00?
    console.log(pessoas.some(pessoa => pessoa.salario > 5000))
    //Media dos salarios dos homens e  das mulheres
    console.log("Media salario Homens");
    console.log(pessoasM.reduce(pessoa => {}))

})