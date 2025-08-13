"use strict";
function find(arr, predicate) {
    for (const item of arr) {
        if (typeof item === "number" && item % 2 === 0 && predicate(item)) {
            return item;
        }
    }
    return undefined;
}
const numbers = [1, 3, 5, 8, 10, 15];
const result = find(numbers, num => num > 5);
console.log(result);
