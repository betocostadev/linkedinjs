// CLOSURES
const createPrinter = () => {
  const myNumber = 42

  return () =>
      console.log(`The number is ${myNumber}`);

}

// createPrinter()() // -> The number is 42

const printer = createPrinter();
printer()

