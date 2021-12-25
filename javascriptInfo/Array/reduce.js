//flatten a 2D array

const matrix = [[1,2,3], [4,5,6], [7,8,9]]

const resurrection = matrix.reduce((prev, curr) => prev.concat(curr), [])


console.log("22 DEC", resurrection)
