"use strict";
let student = {
    name: "Lê Phú Toàn",
    age: 19,
    email: "letoan123@gmail.com"
};
const display = (student) => {
    console.log(`Tên tôi là: ${student.name}, tôi ${student.age} tuổi, email của tôi: ${student.email}`);
};
display(student);
