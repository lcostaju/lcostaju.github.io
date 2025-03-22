window.addEventListener("DOMContentLoaded",function(){
    var txt = prompt("Insira um texto");
    var letra = this.prompt("Insira uma letra");
    var arrTxt = txt.split(" ");
    var container = this.document.getElementById("container")
   
    
    for (let i in arrTxt) 
        if(arrTxt[i].toLocaleLowerCase().startsWith(letra))
            arrTxt.splice(i,1);
    

    var newTxt = arrTxt.join(" ");
    
    var p = document.createElement("p");
    container.appendChild(p);

    p.innerHTML = newTxt;
});