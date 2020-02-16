// FUNCTIONS AS OBJECTS

const sayHello = () => console.log('Hello')
console.log(sayHello.name) // function name
console.log(sayHello.length) // Number of arguments
console.log(sayHello.toString()) // the function itself
console.log(sayHello.call(null)) // Can use to change the THIS keyword if it was used

const add = (x, y, z) => x + y + z

console.log(add.apply(null, [5, 10, 15])) // As with CALL instead of null we can use the argument to change 'this'

const sumSixNumbers = (num1, num2, num3, num4, num5, num6) => num1 + num2 + num3 + num4 + num5 + num6

const argsToSum = [2, 4, 8, 16, 32, 64]

console.log(sumSixNumbers.apply(null, [...argsToSum]))

// BIND - It can be used to fix something. Below we will fix the first argument (x) of the add function

const add10 = add.bind(null, 10)
console.log(add10(12, 13))