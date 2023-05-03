//Print a 3 * 3 matrix in javascript

let matrix = [];

for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = [];
        for (let k = 0; k < 3; k++) {
            matrix[i][j][k] = i + j + k;
            
        }
        
    }
    
}

console.log(matrix);