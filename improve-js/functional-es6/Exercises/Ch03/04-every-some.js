// BUILT-IN EVERY AND SOME FUNCTIONS
// These functions don't return the data itself, they check it and return true or false.
const employees = [{
    name: 'Jane Doe',
    salary: 90000,
}, {
    name: 'Donald Jones',
    salary: 65000,
}, {
    name: 'Donna Appleseed',
    salary: 1500000,
}, {
    name: 'John Smith',
    salary: 250000,
}]

const salariesAbove50K = employees.every(salaryMax => salaryMax.salary > 50000) // True
const salariesAbove140K = employees.every(salaryMax => salaryMax.salary > 140000) // false
const salariesAbove200K = employees.some(sal => sal.salary >= 200000) // True some are
const salariesBelow300K = employees.some(salMin => salMin.salary < 300000) // True, all are

// We can get what we want using the inverse, the same way.
const notRich = employees.every(emp => emp.salary < 10000000)
const inverseNotRich = employees.every(emp => emp.salary =!notRich)

console.log(salariesAbove50K)
console.log(salariesAbove140K)
console.log(salariesAbove200K)
console.log(salariesBelow300K)

console.log('Other test')
console.log(notRich)
console.log(inverseNotRich)