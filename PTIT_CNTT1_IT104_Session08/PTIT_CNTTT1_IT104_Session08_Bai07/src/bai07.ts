function flatten<T>(arr:T[][]):T[]{
    const result:T[]=[];
    for (const item of arr) {
        for (const element of item) {
            result.push(element);
        }
    }
    return result;
}

console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));