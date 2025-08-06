"use strict";
let num1 = 10;
let num2 = "20";
let num3 = "y30";
const sum = (num1, num2) => {
    if (!isNaN(Number(num1))) {
        if (!isNaN(Number(num2))) {
            console.log(Number(num1) + Number(num2));
        }
    }
};
sum(num1, num2);
sum(num2, num3);
