let phoneBooks=[];
const addContact=(object)=>{
    phoneBooks.push(object);
}

const displayPhone=()=>{
    for (const object of phoneBooks) {
        console.log(object.name);
        console.log(object.sdt);
        console.log(object.email);
    }
}

addContact({
    name: "Lê Toàn",
    sdt: "0932333802",
    email: "letoan123@gmail.com"
})

addContact({
    name: "Nguyễn Hiếu",
    sdt: "0986593258",
    email: "nguyenhieu23@gmail.com"
})

displayPhone();