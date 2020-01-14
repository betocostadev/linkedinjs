/* eslint-disable no-console */
// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 01

const x = 'Bananas';

const doIf = (condit, func) => {
  if (condit) {
    func();
  }
};

doIf(x === 1, sayXis1);
doIf(x === 'Bananas', function () {
  console.log('x is equal to "Bananas"');
});

doIf(x < 10 && x > 0, sayXisBetween0And10);

function sayXis1() { console.log('x is equal to 1'); }

function sayXisBetween0And10() { console.log('x is between 0 and 10'); }
