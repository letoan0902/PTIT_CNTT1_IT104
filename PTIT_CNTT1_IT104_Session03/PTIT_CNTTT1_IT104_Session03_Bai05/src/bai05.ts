let firstName:string="toan"
let lastName:string="le"

const capitalize = (str:string)=>{
    return str.charAt(0).toUpperCase()+str.slice(1)
}

firstName=capitalize(firstName)
lastName=capitalize(lastName)

let fullName:string=`${firstName} ${lastName}`
console.log(fullName);

