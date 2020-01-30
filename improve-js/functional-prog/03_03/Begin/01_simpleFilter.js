// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 01

const numbers = [ 1, 2, 3, 4, 5 ]
const evensFromNumbers = [ ]

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i]
  if (element % 2 === 0) {
    evensFromNumbers.push(element)
  }
}

const evenNums = numbers.filter((num) => {
  return num % 2 === 0
})

console.log(evenNums)