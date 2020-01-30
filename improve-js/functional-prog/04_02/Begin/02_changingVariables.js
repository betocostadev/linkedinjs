// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02
const fs = require('fs')

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
