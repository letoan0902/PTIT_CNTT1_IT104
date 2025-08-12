"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
}
const student1 = new Student("Lê Toàn", "001");
student1.displayInfo();
const teacher1 = new Teacher("Giáo Viên 1", "Toán");
teacher1.displayInfo();
