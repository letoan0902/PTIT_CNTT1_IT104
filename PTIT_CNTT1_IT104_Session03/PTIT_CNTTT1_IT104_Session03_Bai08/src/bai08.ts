let num1:any = 10;
let num2:any="20"
let num3:any="y30"

const sum = (num1:any, num2:any)=>{
    if(!isNaN(Number(num1))){
        if(!isNaN(Number(num2))){
            console.log(Number(num1)+Number(num2));
        }
    }
}

sum(num1,num2)
sum(num2,num3)