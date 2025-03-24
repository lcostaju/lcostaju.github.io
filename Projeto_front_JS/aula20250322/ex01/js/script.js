window.addEventListener('DOMContentLoaded', function () {
    // function showMsg() {
    //     alert('Olá, mundo!');
    // }

    // showMsg();
    //Funcao declarativa
    function soma(a, b) {
        return a + b;
    }

    console.log(soma(10, 20));

    //funcao literal
    const s = function soma(a, b) {
        return a + b;
    }


    //funcao anonima
    const s1 = function (a, b) {
        return a + b;
    }

    const exibe = parm => this.alert(parm);

    exibe("lucio");

    const oddEven = (x, y) => alert((x + y) % 2 == 0 ? "par" : "impar");


    oddEven(10, 11);

    var arrIdade1 = [20,30,40,32];
    var arrIdade2 = [21,33,44,35];

    //Arrow function para calcilar a media das idades de um vetor
    const avgAge = vet => {
        var soma = 0;
        for (let index in vet) soma+=vet[index];
        return soma/vet.length; 
    }

    console.log(avgAge(arrIdade1));

    const maxAge = arr =>{
        var max = arr[0];

        for(let i in arr)
            if(arr[i] > max) max = arr[i];
        
        return max;
    }

    console.log(maxAge(arrIdade2));
});