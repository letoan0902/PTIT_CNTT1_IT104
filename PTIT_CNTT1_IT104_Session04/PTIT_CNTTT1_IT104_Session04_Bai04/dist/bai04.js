"use strict";
let check = (num1) => {
    if (typeof (num1) === "string") {
        console.log(`${num1.length} ký tự`);
    }
    else {
        console.log(`${num1 % 2 == 0 ? "Đây là số chẵn" : "Đây là số lẻ"}`);
    }
};
check("Lê Toàn");
check(10);
