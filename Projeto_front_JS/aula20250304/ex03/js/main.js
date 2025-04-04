window.addEventListener("DOMContentLoaded",() =>{
    const vet = [10,20,30];

    const [a,b,c] = vet;

    const user = {nome:"Lucio",idade:32};

    var {nome:nomeUser} = user;
    console.log(nomeUser);
})