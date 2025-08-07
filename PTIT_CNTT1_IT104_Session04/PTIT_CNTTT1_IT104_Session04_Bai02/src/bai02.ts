let score:number[]=[8.0,9.3,9.4,6.5,5.2,6.8];

let len:number = score.length
let sum:number=0;
for (const element of score) {
    sum+=element
}
console.log(`Điểm trung bình: ${sum/len}`);

