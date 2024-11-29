//Mapeamento componentes pagina visitante.html
var btnClk1 = document.getElementById("btnClk1");
var btnHover = document.getElementById("btnHover");
var btnHoverOut = document.getElementById("btnHoverOut");
var btnClk2 = document.getElementById("btnClk2");
var img1 = document.getElementById("img1");
var p1 = document.getElementById("p1");
var txtUsuario = document.getElementById("txtUsuario");

function changeImg(img) {
    img1.src = img;
}

function gerRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeP(){
    if (txtUsuario.value != "")
        p1.innerHTML = `Olá, ${txtUsuario.value}`;
}

btnClk1.addEventListener("click", function () {
    changeImg("img/emoji1.jpg");
    changeP();
});

btnHover.addEventListener("mouseenter", function () {
    changeImg("img/emoji2.jpg");
    changeP();
});

btnHoverOut.addEventListener("mouseleave", function () {
    changeImg("img/emoji3.jpg")
    changeP();
});


btnClk2.addEventListener("dblclick", function () {
    changeImg(`img/emoji${gerRandomNum(1, 4)}.jpg`)
    changeP();
})