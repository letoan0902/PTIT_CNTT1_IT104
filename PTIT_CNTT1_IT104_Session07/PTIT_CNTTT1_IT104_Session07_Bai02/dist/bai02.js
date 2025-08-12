"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    showDown() {
        this.speed--;
    }
    speedUp() {
        this.speed++;
    }
    showSpead() {
        console.log(`Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let byce1 = new Bicycle("Xe máy", 50, "001", 12);
byce1.showDown();
byce1.showSpead();
byce1.speedUp();
byce1.showSpead();
