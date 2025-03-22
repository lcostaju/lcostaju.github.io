window.addEventListener("DOMContentLoaded",function(){
    var btnMario = this.document.getElementById("btnMario");
    var btnLuigi = this.document.getElementById("btnLuigi");
    var container = this.document.getElementById("container");
    var contMario = this.document.getElementById("contMario");
    var contLuigi = this.document.getElementById("contLuigi");

    contMario.innerHTML = 0;
    contLuigi.innerHTML = 0;

    var img = this.document.createElement("img");
    // img.setAttribute("name","mario");
    // img.setAttribute("src",`img/${img.getAttribute("name")}.gif`);
    atualizaImg("mario");
    container.prepend(img);

    img.addEventListener("click",contar);

    function contar(e){
       
        if(e.currentTarget.name == "mario"){
            // alert(contMario.innerHTML);
            contMario.innerHTML = parseInt(contMario.innerHTML) + 1;
        }else{
            contLuigi.innerHTML = parseInt(contLuigi.innerHTML) + 1;
        }            
    }

    function atualizaImg(nome){
        img.setAttribute("name",nome);
        img.setAttribute("src",`img/${img.getAttribute("name")}.gif`);
    }

    btnLuigi.addEventListener("click",function(){
        atualizaImg("luigi");
    });

    btnMario.addEventListener("click",function(){
        atualizaImg("mario");
    })
});