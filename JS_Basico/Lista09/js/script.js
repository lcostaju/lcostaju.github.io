window.addEventListener("DOMContentLoaded", function(){
    var btnValidaBin = this.document.getElementById("validarBin");
    var numBinario = this.document.getElementById("numBinario");

    var validarNumHex = this.document.getElementById("validarNumHex");
    var NumHex = this.document.getElementById("NumHex");

    var numDec = this.document.getElementById("numDec");
    var btnValidarNumDec = this.document.getElementById("btnValidarNumDec");

    var numReal = this.document.getElementById("numReal");
    var btnValidarNumReal = this.document.getElementById("btnValidarNumReal");

    var txtHora = this.document.getElementById("txtHora");
    var btnValidarHora = this.document.getElementById("btnValidarHora");

    var txtData = this.document.getElementById("txtData");
    var btnValidarData = this.document.getElementById("btnValidarData");

    var txtCep = this.document.getElementById("txtCep");
    var btnValidarCep = this.document.getElementById("btnValidarCep");

    var txtCpf = this.document.getElementById("txtCpf");
    var btnValidarCpf = this.document.getElementById("btnValidarCpf");

    var txtCnpj = this.document.getElementById("txtCnpj");
    var btnValidarCnpj = this.document.getElementById("btnValidarCnpj");

    var txtNumParenteses = this.document.getElementById("txtNumParenteses");
    var btnValidarNumParenteses = this.document.getElementById("btnValidarNumParenteses");

    var txtEmail = this.document.getElementById("txtEmail");
    var btnValidarEmail = this.document.getElementById("btnValidarEmail");

    var txtEndereco = this.document.getElementById("txtEndereco");
    var btnValidarEndereco = this.document.getElementById("btnValidarEndereco");

    var txtAltura = this.document.getElementById("txtAltura");
    var btnValidarAltura = this.document.getElementById("btnValidarAltura");

    var txtNome = this.document.getElementById("txtNome");
    var btnValidarNome = this.document.getElementById("btnValidarNome");

    var txtTelefone = this.document.getElementById("txtTelefone");
    var btnValidarTelefone = this.document.getElementById("btnValidarTelefone");

    var txtTexto = this.document.getElementById("txtTexto");
    var btnValidarTexto = this.document.getElementById("btnValidarTexto");

    var txtNumCem = this.document.getElementById("txtNumCem");
    var btnValidarNumCem = this.document.getElementById("btnValidarNumCem");

    var txtPlaca = this.document.getElementById("txtPlaca");
    var btnValidarPlaca = this.document.getElementById("btnValidarPlaca");

    var txtVogais = this.document.getElementById("txtVogais");
    var btnValidarVogais = this.document.getElementById("btnValidarVogais");

    var txtFaturamento = this.document.getElementById("txtFaturamento");
    var btnValidarFaturamento = this.document.getElementById("btnValidarFaturamento");

    var txtMatricula = this.document.getElementById("txtMatricula");
    var btnValidarMatricula = this.document.getElementById("btnValidarMatricula");

    var txtMatricula2 = this.document.getElementById("txtMatricula2");
    var btnValidarMatricula2 = this.document.getElementById("btnValidarMatricula2");

    var txtMatricula3 = this.document.getElementById("txtMatricula3");
    var btnValidarMatricula3 = this.document.getElementById("btnValidarMatricula3");

    function validar(expressao,txtInfo){
        var padrao = expressao;

       if(padrao.test(txtInfo))
           alert("Válido");
        else
            alert("Inválido");
    }

    btnValidaBin.addEventListener("click",function(){
        validar(/^[0-1]{1,}$/,numBinario.value);
    });

    validarNumHex.addEventListener("click",function(){
        validar(/^[0-9A-F]{1,}$/,NumHex.value);
    });

    btnValidarNumDec.addEventListener("click",function(){
        validar(/^[0-9]+,[0-9]+$/,numDec.value);
    });

    btnValidarNumReal.addEventListener("click",function(){
        validar(/^[0-9]+(.|,)[0-9]+$/,numReal.value);
    });

    btnValidarHora.addEventListener("click",function(){
        validar(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/,txtHora.value);
    });

    btnValidarData.addEventListener("click",function(){
        validar(/^\d{2}\/\d{2}\/\d{2,4}$/,txtData.value);
    });

    btnValidarCep.addEventListener("click",function(){
        validar(/^\d{5}-\d{3}$/,txtCep.value);
    });
    
    btnValidarCpf.addEventListener("click",function(){
        validar(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,txtCpf.value);
    });

    btnValidarCnpj.addEventListener("click",function(){
        validar(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,txtCnpj.value);
    });

    btnValidarNumParenteses.addEventListener("click",function(){
        validar(/^\(\d+\)$/,txtNumParenteses.value);
    });

    btnValidarEmail.addEventListener("click",function(){
        validar(/^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}$/,txtEmail.value);
    });

    btnValidarEndereco.addEventListener("click",function(){
        validar(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,txtEndereco.value);
    });

    btnValidarAltura.addEventListener("click",function(){
        validar(/^\d{1,3}(\.|,)\d{1,2}$/,txtAltura.value);
    });

    btnValidarNome.addEventListener("click",function(){
        validar(/^[A-Z][a-z]+$/,txtNome.value);
    });

    btnValidarTelefone.addEventListener("click",function(){
        validar(/^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/,txtTelefone.value);
    });

    btnValidarTexto.addEventListener("click",function(){
        validar(/^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)+$/,txtTexto.value);
    });

    btnValidarNumCem.addEventListener("click",function(){
        validar(/^(100|[1-9][0-9]?)$/,txtNumCem.value);
    });

    btnValidarPlaca.addEventListener("click",function(){
        validar(/^[A-Z]{3}[0-9][A-Z][0-9]{2}$/,txtPlaca.value);
    });

    btnValidarVogais.addEventListener("click",function(){
        validar(/^[abcdeiou]{1,}$/,txtVogais.value);
    });

    btnValidarFaturamento.addEventListener("click",function(){
        validar(/^R\$\d{1,3}(\.\d{3})*(,\d{1,2})?$/,txtFaturamento.value);
    });

    btnValidarMatricula.addEventListener("click",function(){
        validar(/^(IFTM|iftm)-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/,txtMatricula.value);
    });

    btnValidarMatricula2.addEventListener("click",function(){
        validar(/^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/,txtMatricula2.value);
    });

    btnValidarMatricula3.addEventListener("click",function(){
        validar(/^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]\s?(UBERLÂNDIA\sCENTRO|UBERLÂNDIA)$/,txtMatricula3.value);
    });
})