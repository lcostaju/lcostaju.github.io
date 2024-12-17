window.addEventListener("DOMContentLoaded", function () {
    var fabricante = this.document.getElementById("fabricante");
    var nomeCarro = this.document.getElementById("nome");
    var potencia = this.document.getElementById("potencia");
    var garantia = this.document.getElementById("garantia");
    var consumo = this.document.getElementById("consumo");
    var img = this.document.getElementById("img");

    
    var objCarros = [
        {
          imagem: "civic.jpg",
          Fabricante: "Honda",
          Nome: "Civic",
          Potencia: "150 cv",
          Garantia: "3 anos",
          Consumo: "9,7 km/l"
        },
        {
          imagem: "corolla.jpg",
          Fabricante: "Toyota",
          Nome: "Corolla",
          Potencia: "144 cv",
          Garantia: "3 anos",
          Consumo: "10,6 km/l"
        },
        {
          imagem: "troller.jpg",
          Fabricante: "Ford",
          Nome: "Troller",
          Potencia: "200 cv",
          Garantia: "3 anos",
          Consumo: "7,7 km/l"
        },
        {
          imagem: "wrangler.jpg",
          Fabricante: "Jeep",
          Nome: "Wrangler",
          Potencia: "199 cv",
          Garantia: "2 anos",
          Consumo: "3,1 km/l"
        }
      ];
      


    var objPerfil = JSON.parse(this.localStorage.getItem("perfil"));
    //console.log(objPerfil.escolha);

    var nome = this.document.getElementById("nomePerfil");
    nome.innerHTML = objPerfil.nome;

    
        var objSlide = objPerfil.escolha == "natureza"? [objCarros[2],objCarros[3]] : [objCarros[0],objCarros[1]];
        //console.log(objSlide);
        var indexSlide = 0;
        this.setInterval(mudaSlide,2000);

    

    function mudaSlide(){
        if(indexSlide == (objSlide.length) -1) indexSlide =0
        else indexSlide++;

        fabricante.innerHTML = `Fabricante: ${objSlide[indexSlide].Fabricante}`;
        nomeCarro.innerHTML = `Nome: ${objSlide[indexSlide].Nome}`;
        potencia.innerHTML = `Potencia: ${objSlide[indexSlide].Potencia}`;
        garantia.innerHTML = `Garantia: ${objSlide[indexSlide].Garantia}`;
        consumo.innerHTML = `Consumo: ${objSlide[indexSlide].Consumo}`;
        img.src = `img/${objSlide[indexSlide].imagem}`;
    }

    this.document.getElementById("btnMudar").addEventListener("click",function(){
      window.location.href = "index.html";
    });
});