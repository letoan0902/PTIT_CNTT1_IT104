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
    public setName(newName: string): void {
        this.name = newName;
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
     public removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]); // Thêm lại vào allStudents
            this.students.splice(index, 1); // Xóa khỏi lớp
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }

    public editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} để chỉnh sửa.`);
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
);
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("=== Trước khi thay đổi ===");
class1.showStudents();
class2.showStudents();
class1.removeStudent(2);
class2.editStudent(5, "LB");
console.log("\n=== Sau khi thay đổi ===");
class1.showStudents();
class2.showStudents();