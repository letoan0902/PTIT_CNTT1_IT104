"use strict";
let score = [8.0, 9.3, 9.4, 6.5, 5.2, 6.8];
let len = score.length;
let sum = 0;
for (const element of score) {
    sum += element;
}
console.log(`Điểm trung bình: ${sum / len}`);
