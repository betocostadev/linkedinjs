// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01

var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

const totalCost = shoppingList.reduce((acc, item) => acc + item.price, 0)

console.log(totalCost)