// BUILT-IN MAP FUNCTION
const numbers = [1, 2, 3, 4, 5]

// Doubled numbers without mapping:
/* const doubledNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  const doubled = numbers[index] * 2
  doubledNumbers.push(doubled)
}
console.log(doubledNumbers) */

// Doubled numbers mapping - Map does NOT change the original data, that's why we use a new variable
// to hold the changed data.
const doubledMap = numbers.map((num) => num * 2)
console.log(doubledMap)