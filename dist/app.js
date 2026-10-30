"use strict";
const cl = console.log;
class Car {
    constructor(colorName, type) {
        this.color = colorName;
        this.type = type;
    }
}
let car1 = new Car("Red", "ev");
cl(car1);
let car2 = new Car("Red", "ev");
cl(car2);
class Department {
    constructor(dname, did) {
        this.dname = dname;
        this.did = did;
        this.describe = function () {
            return `This is Department ${this.dname} with id ${this.did}`;
        };
    }
}
let finance1 = new Department("finance", "123");
cl(finance1);
let finance2 = new Department("finance", "123");
cl(finance2.describe());
//# sourceMappingURL=app.js.map