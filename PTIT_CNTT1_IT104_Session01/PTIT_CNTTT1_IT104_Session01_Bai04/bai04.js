

const checkNumber = (a)=>{
    if(a%1!=0||a==""){
        alert(`${a} không phải số`)
    }else {
        if(a%2==0){
            alert(`${a} là số chẵn`)
        } else {
            alert(`${a} là số lẻ`)
        }
    }
}

let a = prompt("Nhập số: ");
checkNumber(a);