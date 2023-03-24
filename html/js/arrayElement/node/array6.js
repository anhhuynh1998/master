let numbers = [];
for (let i = 0; i <5; i++) {
   numbers[i] = []
    for (let j = 0; j < 7; j++){
        numbers[i][j] = Math.floor((Math.random() * (50-10)) + 10);
    }
}
console.log(numbers)
let data =''
        for(let x=0 ; x<matrix.length;x++){
            data +='<br>'
            for( let y=0 ;y<matrix[x].length;y++){
                data=data + matrix[x][y]+`&ensp;`
            }
        }
        document.write(data)