// COMBINE JAVASCRIPT BUILT-IN FUNCTIONS

const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}]

// Compare the average salary of developers vs others
const devs = employees
    .filter(emp => emp.jobTitle === 'developer')
    .map(devSalary => devSalary.salary)
    .reduce((acc, salary) => acc + salary, 0)

const notDevs = employees
    .filter(emp => emp.jobTitle !== 'developer')
    .map(emp => emp.salary)
    .reduce((acc, salary) => acc + salary, 0)

const average = {
    devs: devs / 4,
    others: notDevs / 3
}
console.log(devs)
console.log(notDevs)

console.table(average)