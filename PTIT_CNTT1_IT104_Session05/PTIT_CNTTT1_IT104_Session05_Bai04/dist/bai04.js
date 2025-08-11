"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`Mã xe: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Công ty sản xuất: ${this.company}`);
    }
}
const vehicle = new Vehicle("GTR", 2006, "Dev", "M1");
vehicle.printInfo();
