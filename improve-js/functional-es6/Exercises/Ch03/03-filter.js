// BUILT-IN FILTER FUNCTION
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 30, 45]

const by3or5 = numbers.filter((num) => num % 3 === 0 || num % 5 === 0)

console.log('Numbers divided by 3 OR 5 with no remainder: ')
console.log(by3or5)

const isEven = x => x % 2 === 0
const evenNumbers = numbers.filter(isEven)

console.log(evenNumbers)

const words = [
  'Word',
  'Antartica',
  'Brazil',
  'Finland'
]

// Create a lenght test for words in an array
const createLengthTest = (length, subject) =>
    subject.filter(num => num.length >= length)

console.log(createLengthTest(5, words))