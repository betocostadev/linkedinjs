// RETURNING FUNCTIONS
const createPrinter = () => () => console.log('Hello')
const sayHelloName = () => name => console.log(`Hello ${name}!`)
createPrinter()()
sayHelloName()('Beto')

const createMultiplier = y => x => x * y
const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadruple = createMultiplier(4)

console.log(double(2)) // 4
console.log(triple(3)) // 9
console.log(quadruple(4)) // 16



