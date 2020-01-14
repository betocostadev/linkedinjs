/* eslint-disable no-func-assign */
/* eslint-disable no-console */
// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02

const DEBUG_MODE_ENABLED = true;

if (DEBUG_MODE_ENABLED) {
  debug = printDebugMessage;
} else {
  debug = doNothing;
}

function debug(message) {
  console.log('DEBUG: ' + message);
}

// ...

debug('Some debug message');


function printDebugMessage(message) {
  console.log('DEBUG: ' + message);
}

function doNothing() { }
