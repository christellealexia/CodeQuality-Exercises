function calculateMatrixSum(matrix) {
    return sum = matrix.flatMap(row => row).reduce((sum,number) => sum + number,0)
  }
 