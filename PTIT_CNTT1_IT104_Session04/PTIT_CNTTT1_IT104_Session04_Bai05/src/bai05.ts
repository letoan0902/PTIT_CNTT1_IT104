type Person = {
    name: string;
    age: number;
}
type Employee = {
    employeeId:string;
    department:string
}

type StaffMember=Person&Employee;

const display=(employee:StaffMember)=>{
    console.log(`Nhân viên: ${employee.name} (${employee.age}), Mã nhân viên: ${employee.employeeId} - Phòng: ${employee.department}`);
}

let employee1:StaffMember={
    name: "Lê Phú Toàn",
    age: 18,
    employeeId: "EMP001",
    department: "Kế Toán"
}

display(employee1);