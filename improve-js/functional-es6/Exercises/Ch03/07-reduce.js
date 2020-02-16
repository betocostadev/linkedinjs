// BUILT-IN REDUCE FUNCTION
const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11]

// It starts with an initial value and then it will change this value based on all
// the other elements it finds
const sum = numbers.reduce((acc, element) => {
  console.log(`acc is ${acc}`)
  console.log(`element is ${element}`)
  return acc + element
}, 0) // 0 -> The starting value
console.log(`The sum is: ${sum}`)


const money = 2500
const debt = [ 1900, 45, 75, 120]

// In this case, Acc will start with 2500, the money variable
const remaining = debt.reduce((acc, current) => acc - current, money)
console.log(remaining)

const product = [1, 2, 3, 4, 5].reduce((acc, el) => acc * el, 1)

console.log('Product: ')
console.log(product)
