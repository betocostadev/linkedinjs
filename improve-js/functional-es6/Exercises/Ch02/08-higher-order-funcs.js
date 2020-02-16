// HIGHER ORDER FUNCTIONS
const divide = (a, b) => a / b

// Why using another function just to check if the divide will work correctly?
// Because we are following the principle of a single function doing only 1 thing correctly.
const secondArgumentIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {
      console.error('Error: Division by 0')
      return null
    }
    return func(...args)
  }

const safeDivide = secondArgumentIsntZero(divide)

console.log(safeDivide(5, 0))
console.log(safeDivide(10, 2))