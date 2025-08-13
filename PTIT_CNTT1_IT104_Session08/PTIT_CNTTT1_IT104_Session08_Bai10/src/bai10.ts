function findLongestUniqueWord<T extends string>(sentence: T): string | undefined {
    const words = sentence.split(" ");
    let longestWord: string | undefined;

    for (const word of words) {
        if (hasAllUniqueChars(word)) {
            if (!longestWord || word.length > longestWord.length) {
                longestWord = word;
            }
        }
    }

    return longestWord;
}

function hasAllUniqueChars(word: string): boolean {
    const seen = new Set<string>();
    for (const char of word) {
        if (seen.has(char)) return false;
        seen.add(char);
    }
    return true;
}

const input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(input));
