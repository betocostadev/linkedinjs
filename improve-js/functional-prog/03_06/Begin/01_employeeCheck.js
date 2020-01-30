// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
const _ = require("lodash")

const employees = [
  { name: "John",   salary: 60000,  age: 27, gender: 'M' },
  { name: "Mary",   salary: 110000, age: 50, gender: 'F' },
  { name: "Susan",  salary: 50000,  age: 21, gender: 'F' },
  { name: "Greg",   salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry",  salary: 90000,  age: 39, gender: 'M' },
  { name: "Barb",   salary: 95000,  age: 36, gender: 'F' }
]

const males = _.filter(employees, ((employee) => employee.gender === 'M' ))

const maleAges = males.map((male) => male.age)

const maleAgeTotal = maleAges.reduce((acc, age) => acc + age)

const maleAgeAverage = maleAgeTotal / males.length

console.log('The Males: ', males)
console.log('Male ages: ', maleAges)
console.log('Sum of the male ages: ', maleAgeTotal)
console.log('Average of the male age: ', maleAgeAverage)