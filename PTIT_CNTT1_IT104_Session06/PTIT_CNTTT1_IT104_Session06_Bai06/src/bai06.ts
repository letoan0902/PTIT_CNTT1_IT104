class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}
let allStudents: Student[] = [];

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }
    public showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }
    public addStudent(student: Student): void {
        this.students.push(student);
    }
    public filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }
    public addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(
    new Student(1, "Dương"),
    new Student(2, "An"),
    new Student(3, "Huy"),
    new Student(4, "Chung"),
    new Student(5, "Thành"),
    new Student(6, "Hà"),
    new Student(7,"Unknown")
);
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
class1.showStudents();
class2.showStudents();
console.log("Học sinh còn lại trong allStudents:", allStudents);