// FUNCTIONS AS DATA - PART 2

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

// COMMON WAY

const myNumber = 42

const doubled = double(myNumber)
const minusOne = subtractOne(myNumber)
//  ...

// A better way

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5
]

// Since it involves muttation, this code will not by so functional, but it solves the problem

let number = 42

functionsArray.forEach(func => number = func(number))

console.log(number)


