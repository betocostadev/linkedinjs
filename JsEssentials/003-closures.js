/* JavaScript Essential Training | Closures */

/* A Closure is: A function inside another function and the inner function will use data from the outer function */

/* MDN: Closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures */

function math() {
    // Outer function
    let a = 5;
    let b = 4;
    function multiply() {
        // Inner function
        let result = a * b;
        return result;
    }
    // That is a closure!
    return multiply;
}

let theResult = math();

console.log(theResult());