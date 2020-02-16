// RECURSION - A function that calls itself
/*
const recursiveFunction = () => {
  // doSomething
  recursiveFunction()
} */

const countDown = num => {
  if (num < 0) return // The stop condition
  console.log(num)
  num--
  countDown(num)
}

countDown(10)

const countUp = (start, max) => {
  if (start > max) return
  console.log(start)
  countUp(start + 1, max)
}
console.log('Count up: ')
countUp(1, 6)