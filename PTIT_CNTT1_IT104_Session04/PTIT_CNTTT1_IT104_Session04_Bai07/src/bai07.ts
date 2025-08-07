const progressInput=(input:string|number|boolean):void=>{
    if(typeof input==="string"){
        if(/^\d+$/.test(input)){
            const num=Number(input)
            console.log(num**2);
        }else {
            const count=(input.match(/[a-zA-Z]/g) ||[]).length;
            console.log(`${count} ký tự`);
        }
    }else if(typeof input==="number"){
        if(input<2||input%1!==0){
            console.log("Không phải số nguyên tố");
            return;
        }
        let isPrime = true;
        for (let i = 0; i < Math.sqrt(input); i++) {
            if(input%i===0){
                isPrime=false
                break;
            }
        }
        console.log(isPrime?"Là số nguyên tố":"Không phải số nguyên tố");
        
    } else if(typeof input ==="boolean"){
        if(input){
            console.log("Giá trị là true - tiến hành xử lý");
        }else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}

progressInput("123")
progressInput("abc123")
progressInput(8)
progressInput(true)
progressInput(false)