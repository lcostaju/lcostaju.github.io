
/**
 * Atualiza a imagem e o texto de um elemento específico na página.
 *
 * @param {string} imagem - O caminho ou URL da nova imagem a ser exibida.
 * @param {string} txt - O novo texto a ser exibido no elemento com ID "txt1".
 *
 * Esta função define a fonte (`src`) da imagem do elemento global `boy` com o valor passado no parâmetro `imagem`.
 * Além disso, atualiza o conteúdo do elemento HTML com o ID "txt1" para exibir o texto passado no parâmetro `txt`.
 */
function setBoy(imagem, txt) {
    boy.src = imagem;
    document.getElementById("txt1").innerHTML = txt;
}
var btnSair = document.getElementById("btnSair");
var boy = document.getElementById("boy");

boy.addEventListener("mouseenter", function () {
    setBoy("img/assustado.png", "O que você quer?")
})

boy.addEventListener("mouseleave", function () {
    setBoy("img/pensativo.png", "zzzzzzzzz!")
})


boy.addEventListener("click", function () {
    var nome = prompt("Qual seu nome?");

    if (!nome) {
        setBoy("img/nervoso.png", "Não me faça perder meu tempo")
    } else {
        setBoy("img/alegre.png", `${nome},bem vindo!`)
    }

})

btnSair.addEventListener("click", function () {
    if(confirm("Deseja realmente sair do jogo?"))
        window.location.href = "../index.html";
});