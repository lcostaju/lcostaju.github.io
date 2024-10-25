function gerRandomNum(min,max){    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vetNums(){
    var letras = [];
    for(i=0; i<=9; i++){
        letras[i] = String.fromCharCode(i+48);
    }

    return letras;
}

var nums = vetNums();

console.log(nums[gerRandomNum(0,9)])



