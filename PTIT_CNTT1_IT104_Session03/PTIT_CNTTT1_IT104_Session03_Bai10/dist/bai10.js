"use strict";
let sentence = "hello world apple banana orange pumpkin cucumber";
const hasUniqueChars = (word) => {
    let set = new Set(word);
    return set.size === word.length;
};
const find = (sentence) => {
    let words = sentence.split(" ");
    let maxWord = "";
    for (let word of words) {
        if (hasUniqueChars(word) && word.length > maxWord.length) {
            maxWord = word;
        }
    }
    return maxWord;
};
console.log(find(sentence));
