// BUILT-IN SLICE FUNCTION
// Slice does not mutate data
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.slice(4, 8))

const some = numbers.slice(2, 6)
console.log(some)

// How to use a method that mutates that, and still prevents data mutation?

console.log(numbers.slice().reverse())

