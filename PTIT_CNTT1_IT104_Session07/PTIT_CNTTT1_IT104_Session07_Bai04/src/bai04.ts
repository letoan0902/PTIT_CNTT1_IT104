abstract class Person {
    name: string;
    constructor(name: string) {
        this.name=name;
    }

    displayInfo(){
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person{
    id: string;
    constructor(name: string, id:string){
        super(name);
        this.id=id;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Id: ${this.id}`);
    }
}

class Teacher extends Person{
    subject:string;

    constructor(name: string, subject:string){
        super(name);
        this.subject=subject;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
}

const student1=new Student("Lê Toàn","001");
student1.displayInfo();
const teacher1=new Teacher("Giáo Viên 1","Toán");
teacher1.displayInfo();