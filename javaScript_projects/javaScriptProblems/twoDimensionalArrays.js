//Print 2D Array in javascript


function twoDimensionalArray(rows,col,val) {
    let arr = [];

    for (let i = 0; i < rows.length; i++) {
        arr[i] = [];
        for (let j = 0; j < col.length; j++) {
            arr[i][j] = val++
            
        }  
    }
    return arr;
}

console.log(twoDimensionalArray(4,3,0))