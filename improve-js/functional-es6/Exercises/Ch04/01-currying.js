// CURRYING AND PARTIAL APPLICATION
// Partial application is when we have a function with some arguments and we then fix some of the arguments. Then we have a function with less arguments than before.
// const add = (x, y, z) => x + y + z
// const add5 = (y, z) => 5 + y + z
const add = (x, y, z) => x + y + z

const addPartial = x =>
  (y, z) => add(x, y, z)

const add5 = addPartial(5) // 5 becomes x

console.log(add5(3, 2))

// Currying -> const sum = add(5)(6)(7)
const sumCurrying = x =>
  y =>
    z => add(x, y, z)

console.log(sumCurrying(2)(3)(5))

