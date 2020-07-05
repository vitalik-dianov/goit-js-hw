class Car {
  constructor(objectCar) {
    this._speed = 0;
    this._price = objectCar.price;
    this._maxSpeed = objectCar.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  static getSpecs(car) {
    return console.log(
      `Max Speed:${car._maxSpeed} Speed:${car._speed} IsON?:${car._isOn} Distance:${car._distance} Price:${car._price}`
    );
  }

  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    let totalSpeed = 0;
    totalSpeed = this._speed + value;
    if (totalSpeed >= this._maxSpeed) {
      totalSpeed = this._speed - value;
      console.log(`Для достижения скорости 200+ нужен Stage 1`);
    } else {
      this._speed = totalSpeed;
    }
  }

  decelerate(value) {
    let totalSpeed = 0;
    totalSpeed = this._speed - value;

    if (totalSpeed < 0) {
      totalSpeed = this._speed + value;
      this._speed = 0;
      console.log(`Скорость не может быть отрицательной :)`);
    } else {
      this._speed = totalSpeed;
    }
  }
  drive(hours) {
    let totalDistance = 0;

    if (this._isOn === true) {
      totalDistance = hours * this._speed;
      this._distance += totalDistance;
    } else console.log(`Запусти мотор коня`);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
