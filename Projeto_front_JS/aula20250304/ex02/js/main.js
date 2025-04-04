window.addEventListener("DOMContentLoaded",()=>{
    const vet = [10,20,30];

    // var a = vet[0];
    // var b = vet[1];
    // var c = vet[2];

    // console.log(Math.max(...vet))

    const user = {nome:"wilton",idade:14};
    const user2 = {...user};

    const user3 = {...user,sexo:"M"}
    console.log(user3);

    const user4 = {...user,idade:20};

})