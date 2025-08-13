"use strict";
function find(arr, value) {
    for (const item of arr) {
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
const num1 = [1, 2, 3, 4, 5];
console.log(find(num1, 3));
console.log(find(num1, 10));
const name1 = ["Toan", "Nam", "Chien"];
console.log(find(name1, "Toan"));
console.log(find(name1, "Nhung"));
