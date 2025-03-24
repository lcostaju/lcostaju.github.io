window.addEventListener('DOMContentLoaded', function () {
    var arr = [10, 21, 30, 41];

    // const printArr = arr => {
    //     for (let i in arr) console.log(arr[i]);
    // }

    // printArr(arr);

    const oddEven = x => console.log((x % 2 == 0 ? "par" : "impar"));

    //arr.forEach(elemento => console.log(elemento));
    arr.forEach(x => console.log((x % 2 == 0 ? "par" : "impar")));


    //oddEven(32);

    //arr.forEach(oddEven);
});