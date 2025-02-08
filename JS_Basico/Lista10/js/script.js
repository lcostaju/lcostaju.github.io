window.addEventListener("DOMContentLoaded",function(){
    const selNivel = document.getElementById("selNivel");
    const txtTempo = document.getElementById("txtTempo");
    const txtNumero = document.getElementById("txtNumero");
    const txtParesSort = document.getElementById("txtParesSort");
    const txtAcertos = document.getElementById("txtAcertos");
    const txtErros = document.getElementById("txtErros");
    const percent = document.getElementById("percent");

    const btnIniciar = document.getElementById("btnIniciar");
    const btnParar = document.getElementById("btnParar");
    const btnPausar = document.getElementById("btnPausar");

    var numerosSorteados = 0;
    var numerosPares = 0;
    var playNums = false;

    function zerarRegistros(){
        numerosSorteados = 0;
        numerosPares = 0;
        txtAcertos.innerHTML = "0";
        txtErros.innerHTML = "0";
        txtParesSort.innerHTML = "0";
        percent.innerHTML = "(0%)";
    }

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
                    txtNumero.style.color = "black";
                    txtNumero.style.pointerEvents = "auto";
                    percent.innerHTML = `(${((parseInt(txtAcertos.innerHTML) / numerosPares)*100).toFixed(2)}%)`;
                },1000);
            }else if(dificuldade == "1"){
                randomNums = setInterval(function(){
                    numAleatorio();
                    txtNumero.style.color = "black";
                    txtNumero.style.pointerEvents = "auto";
                    percent.innerHTML = `(${((parseInt(txtAcertos.innerHTML) / numerosPares)*100).toFixed(2)}%)`;
                },800);
            }else{
                randomNums = setInterval(function(){
                    numAleatorio();
                    txtNumero.style.color = "black";
                    txtNumero.style.pointerEvents = "auto";
                    percent.innerHTML = `(${((parseInt(txtAcertos.innerHTML) / numerosPares)*100).toFixed(2)}%)`;
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

    function setTempo(){
        var nivel = selNivel.value;
        if(nivel == "0"){
            txtTempo.innerHTML = "01:45";
        }else if(nivel == "1"){
            txtTempo.innerHTML = "01:15";
        }else if(nivel == "2"){
            txtTempo.innerHTML = "00:05";
        }else{
            txtTempo.innerHTML = "00:00";
        }
    }

    function iniciarContagem(tempo){
        var tempo = tempo.split(":");
        var minutos = parseInt(tempo[0]);
        var segundos = parseInt(tempo[1]);

        intervalo = setInterval(function(){
            if(minutos == 0 && segundos == 0){
                clearInterval(intervalo);
                clearInterval(randomNums);
                setTempo();
                alert("Tempo esgotado");
                selNivel.disabled = false;
                txtNumero.innerHTML = "_";
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
            playNums = true;
            selNivel.disabled = true;
            iniciarContagem(txtTempo.innerHTML);
            gerarNumero();
            if(txtNumero.innerHTML == "_"){
                zerarRegistros();
            }
        }
        

    });

    btnParar.addEventListener("click",function(){
        pararContagem();
        pararTempo();
        selNivel.disabled = false;
        playNums = false;
        selNivel.value = "";
        zerarRegistros();
    });

    btnPausar.addEventListener("click",function(){
        pausarTempo();
        pausarContagem();
        playNums = false;
    });

    selNivel.addEventListener("change",function(){
        setTempo();
    });

    txtNumero.addEventListener("click",function(){
        if(playNums){
            if(txtNumero.innerHTML % 2 == 0){
                txtAcertos.innerHTML = parseInt(txtAcertos.innerHTML) + 1;
                txtNumero.style.color = "green";
                txtNumero.style.pointerEvents = "none";
            }else{
                txtErros.innerHTML = parseInt(txtErros.innerHTML) + 1;
                txtNumero.style.color = "red";
            }
            
        }
    });
});