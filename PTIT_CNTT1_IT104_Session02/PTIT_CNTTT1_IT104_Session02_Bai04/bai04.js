
const checkElement = (arr, a)=>{
    let check=false;
    let find = arr.find((element) => element === a);
    if(find){
        check=true;
    }
    if(check){
        console.log("true");
    }else {
        console.log("false");
    }
}

checkElement([1, 2, 3, 4, 5], 3)
checkElement([1, 2, 3, 4, 5], 6)
