//alert
//confirm
// idade = prompt("Digite sua idade");

// console.log(typeof(idade));

// idade = "wilton";
// console.log(typeof(idade));

// idade = true;
// console.log(typeof(idade));
nome = prompt("Qual é o seu nome?");

idade = prompt("Qual sua idade?");

if(idade >= 18)
    alert(`${nome}, você tem idade para tirar CNH`);
else
    alert(`${nome}, você não tem idade para tirar CNH`);