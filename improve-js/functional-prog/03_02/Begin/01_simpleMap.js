// Learning Functional Programming with Javascript
// Chapter 03, Video 02, Exercise 01

const numbers = [ 1, 2, 3, 4, 5 ]
const numbersCubed = [ ]

for(let i = 0; i < numbers.length; i++) {
  let element = numbers[i]
  numbersCubed.push(element * element * element)
}
console.log(numbersCubed)

const numBy3 = ((arr) => {
  return arr.map((element) => {
    return element = element * element * element
  })

})

console.log(numBy3(numbers))