// Learning Functional Programming with Javascript
// Chapter 05, Video 03, Exercise 01

function loop(i) {
  console.log(i)
  if (i > 0) {
    loop(i - 1)
  }
}

loop(10)