window.addEventListener("DOMContentLoaded",function(){
    var nome1 = document.getElementById("nome1");
    var nome2 = document.getElementById("nome2");
    var btnExibir = document.getElementById("btnExibir");
    var txtP = document.getElementById("txtP");

    btnExibir.addEventListener("click",function(){
        setTimeout(copiarTxt,2000);
    });

    function copiarTxt(){
        nome2.value = nome1.value;
        txtP.innerHTML = nome1.value;
    }
});