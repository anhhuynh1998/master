function generateArray(size, min, max) {
    let arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (max - min)) + min;
    }
    // console.log(arr);
    return arr;
}
// let arr2 = generateArray(10,12,550);
// let arr3 = generateArray(10,12,550);
// console.log(arr2);
// console.log(arr3.toString());
// console.log(generateArray(10,12,550));
// console.log(generateArray(10,12,550).toString());
// document.write(generateArray(10,12,550).toString())
function find(value, array) {
    for (let i = 0; array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}
console.log( find(7,generateArray(10, 5, 10)))