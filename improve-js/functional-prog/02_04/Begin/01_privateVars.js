/* eslint-disable no-console */
// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

// Calling functions within functions - recursion

function giveMeAFunctionThatGivesMeAFunction () {
  return function () {
    return function () {
      console.log('Function inside function, inside function');
    };
  };
}

giveMeAFunctionThatGivesMeAFunction()()();

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
    },
    currentValue: function () {
      return count;
    }
  };
}

const myCounter = createCounter();

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

// myCounter.count = 999; // uh oh! Will not work anymore.

console.log(myCounter.currentValue());
