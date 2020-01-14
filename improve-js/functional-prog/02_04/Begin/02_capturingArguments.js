/* eslint-disable no-console */
// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {

  return {
    increment: function() {
      count = count + 1;
    },

    currentValue: function() {
      return count;
    }
  };
}

const counterStartingAt6 = createCounter(6);
const counterStartingAt0 = createCounter(0);

console.log(counterStartingAt6.increment());
console.log(counterStartingAt0.currentValue());