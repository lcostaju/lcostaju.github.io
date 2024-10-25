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

function vetNums(){
    var letras = [];
    for(i=0; i<=9; i++){
        letras[i] = String.fromCharCode(i+48);
    }

    return letras;
}

var nums = vetNums();

var pssLett = '';
var pssNum = '';

for(i=0; i<4; i++)
pssLett += letras[gerRandomNum(0,25)];

for(i=0; i<4; i++)
pssNum += nums[gerRandomNum(0,9)];

console.log(pssLett+pssNum);



