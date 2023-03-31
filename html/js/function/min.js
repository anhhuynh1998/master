// arr1: [3, 5, 1, 8, -3, 7, 8];

// arr2: [7, 12, 6, 9, 20, 56, 89];

// arr3: [];

// arr4: [0, 0, 0, 0, 0, 0];
function minArray(arr) {
    let min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
 let min = minArray(arr1);
 console.log(min);
 let arr2 = [7, 12, 6, 9, 20, 56, 89];
 let min2 = minArray(arr2);
 console.log(min2);
 let arr3 = [];
 let min3 = minArray(arr3);
 console.log(min3);
 let arr4 = [0, 0, 0, 0, 0, 0];
 let min4 = minArray(arr4);
 console.log(min4);