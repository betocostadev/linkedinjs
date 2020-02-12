/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* Behavioral patterns
 */

// Observer pattern
class Car {
  constructor(gas) {
    this.gas = gas
  }

  setGasLevel(val) {
    this.gas = val
    this.notifyAll()
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    this.actions.remove.filter(function(el) {
      return el !== observer
    })
  }

  notifyAll() {
    return this.actions.forEach(function(el) {
      el.update(this)
    }.bind(this))
  }
}

class consumption {
  update(car) {
    car.gas = car.gas + 1
  }
}

/*
// State pattern
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    }
  }
}
 */

//  Iterator pattern
// Loops

/*
// Strategy pattern
class Car {
  constructor(doors, engine, color) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
  }
}

class Suv extends Car {
  constructor(doors, engine, color) {
      super(doors, engine, color);
      this.wheels = 4;
  }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(4, "V8", 'red');
*/

// Mediator pattern

class TrafficTower {
  constructor() {
    this.airplanes = []
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position
    })
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position
    this.trafficTower = trafficTower
    this.trafficTower.airplanes.push(this)
  }

  requestPositions() {
    return this.trafficTower.requestPositions()
  }
}