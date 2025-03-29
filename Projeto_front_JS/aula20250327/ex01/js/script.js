window.addEventListener("DOMContentLoaded", () => {
    const maior = (x, y) => x > y ? x : y;

    //console.log(maior(30, 20));

    const vet = [10, 20, 30, 40]
    const ref = 20;

    const verfArr = (arr, ref2) => {
        var retArr = [];
        arr.forEach(element => {
            if (element >= ref2)
                retArr.push(element)
        });

        return retArr;
    };

    verfArr(vet, ref).forEach((x, index) => console.log(`${index} = ${x}`));

    const myNumbers = [10,20,30];

    console.log(myNumbers.map(element => element * 2));
    console.log(myNumbers.filter(element => element >= 15));
    console.log(myNumbers.every(element => element >= 15));
    console.log(myNumbers.some(element => element >= 15));
    console.log(myNumbers.reduce((total,element) => total + element),0);
})