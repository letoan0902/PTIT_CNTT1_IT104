const createUser =(name, age=18, role="user")=>{
    console.log(`Name:  ${name}, Age: ${age}, Role: ${role}`);
}


createUser("Dev");
createUser("Nguyen Van A", 20 , "Admin")