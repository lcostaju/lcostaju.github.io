function exibirMsg(msg) {
    alert(msg);
}

var btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    exibirMsg("Hello world")
});