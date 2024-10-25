function gerRandomNum(min,max){    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vetLetrasMin(){
    var letras = [];
    for(i=0; i<=25; i++){
        letras[i] = String.fromCharCode(i+97);
    }

    return letras;
}

var letras = vetLetrasMin();

for(i=0; i<4; i++)
console.log(letras[gerRandomNum(0,25)])





