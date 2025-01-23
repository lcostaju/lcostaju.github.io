window.addEventListener("DOMContentLoaded", function(){

    var txtInfo = document.getElementById("txtInfo");
    var btnValidar = this.document.getElementById("btnValidar");

    btnValidar.addEventListener("click", function(){
       //var padrao = /\d/; valida se tem numero
       //var padrao = /^\d/; valida se tem numero no inicio
    //    var padrao = /\d$/; valida se tem numero no final
    //    var padrao = /^\d$/; valida se tem um unico digito
    // var padrao = /^\d{5}-\d{4}$/; //valida telefone
    // var padrao  = /^\(\d{3}\)\d{4}-\d{4}$/ //valida telefone
    // var padrao = /^\d{2}\/\d{2}\/\d{4}$/; //valida data]
    // var padrao = /^[Ii][Ff][Tt][Mm]-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;
    //    var padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;
    // var padrao = /^[MF]$/;
    //var padrao = /^(M|F|Masculino|Feminino)$/i;
    // var padrao = /^[abcde]{2,}$/ //forma palavras com as letras com no minimo 2 letras
    // var padrao = /^[0-9a-f]{1,}$/ //
    //var padrao = /^[^]$/;
    //var padrao = /^\d{2}:\d{2}$/;
    var padrao = /^[a-z]{4,}\d{2,4}\W{2}$/i;

       if(padrao.test(txtInfo.value))
           alert("valido");
        else
            alert("invalido");
    })
})