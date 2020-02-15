// FUNCTIONS AS DATA

const sayHello = name => console.log('Hello ', name)

const sayHello2 = sayHello

sayHello2('Beto')


// INTERESTING:
const myFunc = true
  ? () => console.log('First option')
  : () => console.log('Second option')

myFunc()

const DEVELOPMENT = true

const fetchDataReal = () => {
  // Intensive operations here
}

const fetchDataFake = () => ({
  name: 'John Doe',
  age: 34
})

const fetchData = DEVELOPMENT
  ? fetchDataFake
  : fetchDataReal

console.log(fetchData())