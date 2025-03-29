window.addEventListener("DOMContentLoaded",()=>{
    const div = document.getElementById("div");
    
    const vetAges = [10,21,31,40];

    //Exercicio 1
    
    

    const sumAge = vet => {
        var soma = 0;
        for (let index in vet) soma+=vet[index];
        return soma; 
    }
    var titleEx1 = document.createElement("p");
    div.appendChild(titleEx1);
    titleEx1.innerHTML = "Exercicio 1";

    var pEx1 = document.createElement("p");
    div.appendChild(pEx1);
    pEx1.innerHTML = `Soma das idades ${sumAge(vetAges)}`;

    var titleEx2 = document.createElement("p");
    div.appendChild(titleEx2);
    titleEx2.innerHTML = "Exercicio 2";

    const avgAge = vet => {
        var soma = 0;
        for (let index in vet) soma+=vet[index];
        return soma/vet.length; 
    }

    var pEx2a = document.createElement("p");
    div.appendChild(pEx2a);
    pEx2a.innerHTML = `A média aritmética simples das idades ${avgAge(vetAges)}`;

    const maxAge = vet =>{
        var max = vet[0];
        vet.forEach(element => {
            if(element > max) max = element;
        });
        return max;
    }

    var pEx2b = document.createElement("p");
    div.appendChild(pEx2b);
    pEx2b.innerHTML = `A maior idade ${maxAge(vetAges)}`;

    const oddAges = vet =>{
        var odds = [];
        vet.forEach(element => {
            if(element %2 != 0)
                odds.push(element);
        });
        return odds;
    }

    var pEx2c = document.createElement("p");
    div.appendChild(pEx2c);
    pEx2c.innerHTML = `As idades ímpares ${oddAges(vetAges).toString()}`;

    const maiores = vet =>{
        var maior = true;
        vet.forEach(element => {
            if(element < 18)
                maior = false;
        });
        return maior;
    }

    var pEx2d = document.createElement("p");
    div.appendChild(pEx2d);
    pEx2d.innerHTML = `Verificar se todos são maiores de idade (idade >= 18); ${maiores(vetAges).toString()}`;

    const verMaior = (vet,ref) =>{
        var maior = true;
        vet.forEach(element => {
            if(element < ref)
                maior = false;
        });
        return maior;
    }

    var ref = prompt("Informe um valor para as questoes do exercicio 2");
    var pEx2e = document.createElement("p");
    div.appendChild(pEx2e);
    pEx2e.innerHTML = `Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário. Idade informada = ${ref}, ${verMaior(vetAges,ref).toString()}`;

    const maioresRef = (vet,ref) =>{
        var maiores = [];
        vet.forEach(element => {
            if(element >= ref)
                maiores.push(element);
        });
        return maiores;
    }

    //var ref = prompt("Informe um valor");
    var pEx2f = document.createElement("p");
    div.appendChild(pEx2f);
    pEx2f.innerHTML = `Exibir todas as idades maiores ou iguais a determinada idade ${maioresRef(vetAges,ref).toString()}`;

    var media = avgAge(maioresRef(vetAges,ref));
    var pEx2g = document.createElement("p");
    div.appendChild(pEx2g);
    pEx2g.innerHTML = `A média das idades das pessoas com idades maiores ou iguais a determinada idade : ${media}`;
});