var boy = document.getElementById("boy");

boy.addEventListener("mouseenter", function () {
    boy.src = "img/assustado.png";
    document.getElementById("txt1").innerHTML = "O que você quer?"
})

boy.addEventListener("mouseleave", function () {
    boy.src = "img/pensativo.png";
    document.getElementById("txt1").innerHTML = "zzzzzzz"
})


boy.addEventListener("click", function () {
    var nome = prompt("Qual seu nome?");

    if (!nome) {
        boy.src = "img/nervoso.png";
        document.getElementById("txt1").innerHTML = "Não me faça perder meu tempo";
    } else {
        document.getElementById("txt1").innerHTML = `${nome},bem vindo!`;
        boy.src = "img/alegre.png"
    }

})