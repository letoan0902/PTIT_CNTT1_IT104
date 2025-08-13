function reverseArray<T>(arr:T[]):T[]{
    return arr.reverse();
}

const num1:number[]=[1,2,3,4]
const strs:string[]=["a","b","c","d"]

console.log(reverseArray(num1));
console.log(reverseArray(strs));
