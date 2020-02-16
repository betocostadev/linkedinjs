// IMPLEMENT PRIVATE VARIABLES
// Usual way... _name - a way to say to other developers

const Person = ({ name, age, job }) => {
  let _name = name
  let _age = age
  let _job = job
  return {
    // Define getters
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    printData: () => console.log(`${_name}, ${_age} years old is a ${_job}`),
    // Setters
    setJob: newJob => _job = newJob,
  }
}

const me = Person({ name: 'Beto', age: 33, job: 'Developer' })
// me._name // -> undefined
// It will be only accessible using the function, since it is inside a closure.
console.log(me.getName())
me.printData()
me.setJob('Front-end developer')
me.printData()