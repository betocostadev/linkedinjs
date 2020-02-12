/* eslint-disable no-console */

/*
// First class function:
const calc = () => 4 * 3

let aNumber = calc()

console.log(aNumber)

const printCalc = (callback) => {
  console.log(callback())
}

printCalc(calc) */

/* Prototype/Class and constructor design patterns */

// class Character {
//   constructor (serie, name, gender, age) {
//     this.serie = serie
//     this.name = name
//     this.gender = gender
//     this.age = age
//   }
// }

// class Chartype extends Character {
//   constructor(serie, name, gender, age, type) {
//     super(serie, name, gender, age)
//     this.type = type
//   }
// }

// const lagertha = new Character('Vikings', 'Lagertha', 'female', 36)
// const ragnar = new Chartype('Vikings', 'Ragnar', 'male', 40, 'Warrior')

/* // Singleton Pattern
let instance = null

class Character {
  constructor (serie, name, gender, age) {
    if (!instance) {
      this.serie = serie
      this.name = name
      this.gender = gender
      this.age = age
      instance = this
    } else {
      return instance
    }
  }
}

const loki = new Character('Vikings', 'Loki', 'male', 43)
const lagertha = new Character('Vikings', 'Lagertha', 'female', 36)
// The output will be for loki only.
console.log(loki)
console.log(lagertha) */

/*
// The Factory pattern

class Car {
  constructor (doors, engine, model) {
    this.doors = doors
    this.engine = engine
    this.model = model
  }
}

class carFactory {
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

const factory = new carFactory()
const m3 = factory.createCar('sedan')
const civic = factory.createCar('hatch')

console.log(m3)
console.log(civic) */

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

class Suv {
  constructor (doors, engine, model) {
    this.doors = doors
    this.engine = engine
    this.model = model
  }
}

class SuvFactory {
  createCar(type) {
    switch(type) {
    case 'big':
      return new Car(4, 'V6', 'big')
    case 'small':
      return new Car(4, '4', 'small')
    default:
      return new Car(2, 'not selected', 'not selected')
    }
  }
}

const carFactory = new CarFactory()
const suvFactory = new SuvFactory()

const autoManufacturer = (type, model) => {
  switch (type) {
  case 'car':
    return carFactory.createCar(model)
  case 'suv':
    return suvFactory.createCar(model)
  default:
    break
  }
}

const m3 = autoManufacturer('car', 'sedan')
const crv = autoManufacturer('suv', 'small')

console.log(m3)
console.log(crv)