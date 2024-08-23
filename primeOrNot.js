const  primeOrNot = (number)=> {
    if(number <= 1) return 'It is not prime'
    for(let a = 2; a < number; a++)
        return( number % a !== 0  && number % number === 0) ? 'It is prime':'It is not prime'
    }
console.log(primeOrNot(1))