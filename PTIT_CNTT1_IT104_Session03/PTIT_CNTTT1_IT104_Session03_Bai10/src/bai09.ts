let sentence:string = "hello world apple banana orange pumpkin cucumber"

const hasUniqueChars=(word:string):boolean=>{
    let set = new Set(word)
    return set.size===word.length
}

const find=(sentence:string):string=>{
    let words = sentence.split(" ")
    let maxWord =""
    for(let word of words){
        if(hasUniqueChars(word)&&word.length>maxWord.length){
            maxWord=word
        }
    }
    return maxWord
}

console.log(find(sentence));
