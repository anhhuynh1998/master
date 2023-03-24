let numbers = [];
for (let i = 0; i <5; i++) {
   numbers[i] = []
    for (let j = 0; j < 7; j++){
        numbers[i][j] = Math.floor((Math.random() * (50-10)) + 10);
    }
}
console.log(numbers);