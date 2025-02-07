window.addEventListener("DOMContentLoaded",function(){
    const selNivel = document.getElementById("selNivel");
    const txtTempo = document.getElementById("txtTempo");
    const txtNumero = document.getElementById("txtNumero");
    const txtParesSort = document.getElementById("txtParesSort");

    const btnIniciar = document.getElementById("btnIniciar");
    const btnParar = document.getElementById("btnParar");
    const btnPausar = document.getElementById("btnPausar");

    var numerosSorteados = 0;
    var numerosPares = 0;

    function gerarNumeroAleatorio(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function numAleatorio(){
        var numero = gerarNumeroAleatorio(1,100);
        numerosSorteados++;
        txtNumero.innerHTML = numero;

        if(numero % 2 == 0)
            numerosPares++;

        txtParesSort.innerHTML = numerosPares;
    }

    function gerarNumero(){
        var dificuldade = selNivel.value;

        
            if(dificuldade == "0"){
                randomNums = setInterval(function(){
                    numAleatorio();
                },1000);
            }else if(dificuldade == "1"){
                randomNums = setInterval(function(){
                    numAleatorio();
                },800);
            }else{
                randomNums = setInterval(function(){
                    numAleatorio();
                },700);
            }
        
    }

    function pausarContagem(){
        clearInterval(randomNums);
    }

    function pausarTempo(){
        clearInterval(intervalo);
    }

    function pararTempo(){
        clearInterval(intervalo);
        txtTempo.innerHTML = "00:00";
    }

    function pararContagem(){
        clearInterval(randomNums);
        txtNumero.innerHTML = "_";
    }

    function iniciarContagem(tempo){
        var tempo = tempo.split(":");
        var minutos = parseInt(tempo[0]);
        var segundos = parseInt(tempo[1]);

        intervalo = setInterval(function(){
            if(minutos == 0 && segundos == 0){
                clearInterval(intervalo);
                alert("Tempo esgotado");
            }else{
                if(segundos == 0){
                    minutos--;
                    segundos = 59;
                }else{
                    segundos--;
                }
                txtTempo.innerHTML = (minutos < 10 ? "0"+minutos : minutos) + ":" + (segundos < 10 ? "0"+segundos : segundos);
                
            }
        },1000);
    }



    btnIniciar.addEventListener("click",function(){
        if(selNivel.value == ""){
            alert("Selecione um nível de dificuldade");
        }else{
            selNivel.disabled = true;
            iniciarContagem(txtTempo.innerHTML);
            gerarNumero();
            
        }
        

    });

    btnParar.addEventListener("click",function(){
        pararContagem();
        pararTempo();
        selNivel.disabled = false;
    });

    btnPausar.addEventListener("click",function(){
        pausarTempo();
        pausarContagem();
    });

    selNivel.addEventListener("change",function(){
        var nivel = selNivel.value;
        if(nivel == "0"){
            txtTempo.innerHTML = "01:45";
        }else if(nivel == "1"){
            txtTempo.innerHTML = "01:15";
        }else if(nivel == "2"){
            txtTempo.innerHTML = "00:30";
        }else{
            txtTempo.innerHTML = "00:00";
        }
    });
});