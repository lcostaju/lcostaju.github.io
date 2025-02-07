window.addEventListener('DOMContentLoaded',function(){
    var btnGerar1 = document.getElementById("btnGerar1");
    var btnGerar2 = document.getElementById("btnGerar2");
    var caixa = document.getElementById("caixa");
    var btnGerar3 = document.getElementById("btnGerar3");

    btnGerar1.addEventListener("click",function(){
        var pNovo = document.createElement("p");
        //pnovo.setAttribute("class","boxInterna");
        //pNovo.classList.add("boxInterna");

        pNovo.textContent = "Wilton Filho";
        
        caixa.appendChild(pNovo);
    });

    btnGerar2.addEventListener("click",function(){
        var txtIftm = document.createElement("strong");
        txtIftm.textContent = "Federal";
        var par = document.createElement("p");
        
        par.textContent = `Instituto do triangulo Mineiro`;
        par.appendChild(txtIftm);
        caixa.appendChild(par);
    });

    btnGerar3.addEventListener("click",function(){
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");


        p.textContent = document.getElementById("txtTexto").value;
        img.setAttribute("src","img/download.jpeg");
        img.setAttribute("name",document.getElementById("txtTexto").value)
        img.addEventListener("click",mostrar);
        caixa.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);

        
    });

    

    function mostrar(e){
        alert(e.currentTarget.name);
    }
});