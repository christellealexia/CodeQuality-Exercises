function calculateAverage(numbers) {
let sum = numbers.reduce((accumulator,number) => accumulator + number, 0)
let average = sum / numbers.length;
    return average;
  }
