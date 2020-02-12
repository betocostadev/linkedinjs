/* eslint-disable no-console */
/* Structural patterns
 */

//  Module pattern
// Use npm start to run the node server and check the file.
// It uses express with node - files: index.js and calc.js

// Mixins pattern
class Car {
  constructor (doors, engine, model) {
    this.doors = doors
    this.engine = engine
    this.model = model
  }
}

class CarFactory {
  createCar(type) {
    switch(type) {
    case 'sedan':
      return new Car(4, 'V6', 'sedan')
    case 'hatch':
      return new Car(2, '4', 'hatch')
    default:
      return new Car(2, 'not selected', 'not selected')
    }
  }
}

let carMixin = {
  revEngine() {
    console.log(`The ${this.engine} of the ${this.model} is revving.`)
  }
}

const carFactory = new CarFactory()

const autoManufacturer = (type, model) => {
  switch (type) {
  case 'car':
    return carFactory.createCar(model)
  default:
    break
  }
}

Object.assign(Car.prototype, carMixin)

const m3 = autoManufacturer('car', 'sedan')

console.log(m3)
m3.revEngine()