"use strict";
function mergeObjects(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const user = { id: 1, name: "Toan" };
const job = { title: "Dev", company: "Rikkei" };
const result = mergeObjects(user, job);
console.log(result);
