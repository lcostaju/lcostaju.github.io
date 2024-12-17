window.addEventListener("DOMContentLoaded",function(){
    var tempo = this.document.getElementById("tempo");
    var crono = gerRandomNum(5,10);

    

    var idCronometro = this.setInterval(decres,1000);

    function decres(){
        
        tempo.innerHTML = crono;
        
    
        if(crono <= 3 && crono >=1){
            tempo.style.color = "red";
        }

        if(crono == 0)
            window.location.href = "verVeiculo.html";

        crono --;
    }

    
    
});

function gerRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

