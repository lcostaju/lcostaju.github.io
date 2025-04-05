window.addEventListener("DOMContentLoaded",() => {
    const container = document.getElementById("container");

    const arrAges = [10, 21, 30,45];

    const pArr = document.createElement("p");
    container.appendChild(pArr);

    pArr.innerHTML = `Idades ${arrAges}`;

    const pA = document.createElement("p");
    container.appendChild(pA);

    var sumAges = arrAges.reduce((total,age) => total+age,0);
    pA.innerHTML = `A soma das idades ${sumAges}`;

    const pB = document.createElement("p");
    container.appendChild(pB);

    var avgAge = arrAges.reduce((total,age) => total+age,0)/arrAges.length;
    pB.innerHTML = `A média aritmética simples das idades ${avgAge}`;

    const pC = document.createElement("p");
    container.appendChild(pC);

    var maxAge = arrAges.reduce((max, current) => current > max ? current : max)
    pC.innerHTML = `A maior idade ${maxAge}`;

    const pD = document.createElement("p");
    container.appendChild(pD);

    var oddAges = arrAges.filter(age => age % 2 != 0);
    pD.innerHTML = `As idades ímpares ${oddAges}`;

    const pE = document.createElement("p");
    container.appendChild(pE);

    var maiorAges = arrAges.every(age => age >= 18);
    pE.innerHTML = `Verificar se todos são maiores de idade (idade >= 18); Retorno:${maiorAges}`;

    const pF = document.createElement("p");
    container.appendChild(pF);

    const labelF = document.createElement("label");
    container.appendChild(labelF);
    labelF.innerHTML = "Insira uma idade:";

    const txtIdade = document.createElement("input");
    container.appendChild(txtIdade);

    const pG = document.createElement("p");
    container.appendChild(pG);

    //var maiorRef = arrAges.every(age => age >= txtIdade.value);

    const pH = document.createElement("p");
    container.appendChild(pH);

    const pI = document.createElement("p");
    container.appendChild(pI);
    

    var btnCalc = document.createElement("input");
    container.appendChild(btnCalc);
    btnCalc.type = "button";
    btnCalc.value = "Calcular g,h,i";

    

    btnCalc.addEventListener("click",() =>{
        var maiorRef = arrAges.every(age => age >= txtIdade.value);
        pG.innerHTML = `Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário ${maiorRef}`;

        var filterAges = arrAges.filter(age => age >= txtIdade.value)
        pH.innerHTML = `Exibir todas as idades maiores ou iguais a determinada idade: ${filterAges}`

        pI.innerHTML = `A média das idades das pessoas com idades maiores ou iguais a determinada idade ${filterAges.reduce((total,age) => total+age,0)}`


    })
})