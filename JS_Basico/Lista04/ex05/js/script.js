function gerRandomNum(min,max){    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vetLetrasMcla(){
    var letras = [];
    for(i=0; i<=25; i++){
        letras[i] = String.fromCharCode(i+65);
    }

    return letras;
}

var nums = vetLetrasMcla();

for(i=0; i<4; i++)
console.log(nums[gerRandomNum(0,25)]);