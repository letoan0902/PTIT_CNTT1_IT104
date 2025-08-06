"use strict";
let firstName = "toan";
let lastName = "le";
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
