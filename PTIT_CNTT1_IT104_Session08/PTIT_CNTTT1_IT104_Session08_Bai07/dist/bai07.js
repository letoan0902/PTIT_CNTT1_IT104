"use strict";
function flatten(arr) {
    const result = [];
    for (const item of arr) {
        for (const element of item) {
            result.push(element);
        }
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
