interface Student {
    name:string;
    age: number;
    email: string
}

let student:Student={
    name: "Lê Phú Toàn",
    age: 19,
    email: "letoan123@gmail.com"
}

const display =(student:Student)=>{
    console.log(`Tên tôi là: ${student.name}, tôi ${student.age} tuổi, email của tôi: ${student.email}`);
}

display(student);