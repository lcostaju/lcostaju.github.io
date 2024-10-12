function soma(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

function main(){
    var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    var valor2 = parseFloat(prompt("Digite o segundo valor: "));

    var opcao = prompt("Menu\n [+] Somar\n [-] Subtrair\n [*] Multiplicar\n [/] Dividir");

    switch (opcao) {
        case '+':
            alert(soma(valor1,valor2));
            break;
        case '-':
            alert(subtrair(valor1,valor2));
            break;    
        case '*':
            alert(multiplicar(valor1,valor2));
            break;
        case '/':
            alert(dividir(valor1,valor2));    
        default:
            break;
    }
}

main();


