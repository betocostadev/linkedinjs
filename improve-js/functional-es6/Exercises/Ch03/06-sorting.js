// BUILT-IN SORT FUNCTION
// Sort DOES mutation!
const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6]

/*
console.log(mixedUpNumbers.sort())

// Data will be mutated
console.log(mixedUpNumbers)
*/

const ascending = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

const descending = (a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

// Using slice before sort to prevent mutation
const sortedNums = mixedUpNumbers.slice().sort(ascending)
const sortedDescendingNums = mixedUpNumbers.slice().sort(descending)
console.log(sortedNums)
console.log(sortedDescendingNums)