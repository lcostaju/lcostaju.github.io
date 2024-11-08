function exibirMsg(msg){
    alert(msg);
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function(){
    exibirMsg("Clicou em mim");
}


btn2.onmouseenter = function(){
    exibirMsg("Mouse sobre mim");
}
//document.getElementById("btn1").addEventListener("Você clicou em min",exibirMsg);