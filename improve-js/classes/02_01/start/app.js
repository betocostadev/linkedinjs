/* eslint-disable no-console */
// this code will run fine as the function is hoisted
// CHECK THE USE OF THE SUPER() BELOW!!
sayHi()

class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors
    const doors2 = car2.doors

    return doors1 + doors2
  }
}

// Using super
class Suv extends Car {
  constructor (doors, engine, color, baggageCap) {
    super(doors, engine, color)
    this.baggageCap = baggageCap
  }
}

const m6 = new Suv(5, 'V8', 'black', 400)
console.log(m6)

const cx5 = new Car(4,'V6','grey')
const civic = new Car(3,'V4','blue')

console.log(cx5)
console.log(cx5.carStats())
console.log(civic)
console.log(civic.carStats())
console.log(Car.totalDoors(cx5, civic))


function sayHi() {
  return console.log('Hello this function can be called anywhere!')
}

sayHi()
