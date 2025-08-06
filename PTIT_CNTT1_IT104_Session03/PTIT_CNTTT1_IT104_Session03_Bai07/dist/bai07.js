"use strict";
let string = "Mot cau bat ky, loc ra ky tu khong trung lap";
let result = "";
for (const word of string) {
    if (!result.includes(word)) {
        result += word;
    }
}
console.log(result);
