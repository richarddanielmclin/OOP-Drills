
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

const p1 = new Person('Crash', 'Wumpa', '25')
const p2 = new Person('Neo', 'Wumpa', '51')
const p3 = new Person('Coco', 'Wumpa', '24')
const p4 = new Person('Tiny', 'Wumpa', '30')
const p5 = new Person('Aku', 'Wumpa', '10,000')

p1.sayHello()
p2.sayHello()
p3.sayHello()
p4.sayHello()
p5.sayHello()

const person1 = {
    name: 'Crash',
    sayHello: () => {
        console.log(`Hello! My name is ${person1.name}.`);
    }
}

const person2 = {
    name: 'Neo',
    sayHello: () => {
        console.log(`Hello! My name is ${person2.name}.`);
    }
}

const person3 = {
    name: 'Coco',
    sayHello: () => {
        console.log(`Hello! My name is ${person3.name}.`);
    }
}

const person4 = {
    name: 'Tiny',
    sayHello: () => {
        console.log(`Hello! My name is ${person4.name}.`);
    }
}

const person5 = {
    name: 'Aku',
    sayHello: () => {
        console.log(`Hello! My name is ${person5.name}.`);
    }
}
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Vehicle {
    constructor(type, manufacturer, numOfWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }

    aboutVehicle() {
        console.log(`This vehicle's type is ${this.type}. It was made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, numOfWheels, numOfDoors, hasBed) {
        super(type, manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasBed = hasBed;
    }

    aboutVehicle() {
        if (this.hasBed === true) {
            console.log(`This vehicle's type is ${this.type}. It was made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors, and has a truck bed.`)
        }
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, numOfWheels, numOfDoors, size, mpg) {
        super(type, manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        if (this.size === 'small') {
            console.log(`This vehicle's type is ${this.type}. It was made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors, and it is a size small. It gets an mpg of ${this.mpg}.`)
        } else if (size === 'medium') {
            console.log(`This vehicle's type is ${this.type}. It was made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors, and it is a size medium. It gets an mpg of ${this.mpg}.`)
        }
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, numOfWheels, hasHandlebars, hasSteeringWheel, hasDoors) {
        super(type, manufacturer, numOfWheels)
        this.hasHandlebars = hasHandlebars;
        this.hasSteeringWheel = hasSteeringWheel;
        this.hasDoors = hasDoors;
    }

    aboutVehicle() {
        if (this.hasHandlebars === true && this.hasSteeringWheel === false && this.hasDoors === false) {
            console.log(`This vehicle's type is ${this.type}. It was made by ${this.manufacturer}, and it has ${this.numOfWheels} wheels. It has handlebars instead of a steering wheel, and has no doors.`)
        }
    }
}

let newCycle = new Motorcycle('motorcyle', 'Harley-Davidson', 2, true, false, false)
newCycle.aboutVehicle()