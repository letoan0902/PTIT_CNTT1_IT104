"use strict";
function partialUpdate(obj, update) {
    return Object.assign(Object.assign({}, obj), update);
}
const user1 = { name: 'Toan', age: 30, job: 'Developer' };
console.log(partialUpdate(user1, { age: 31 }));
console.log(partialUpdate(user1, { name: 'Nam', job: 'Designer' }));
