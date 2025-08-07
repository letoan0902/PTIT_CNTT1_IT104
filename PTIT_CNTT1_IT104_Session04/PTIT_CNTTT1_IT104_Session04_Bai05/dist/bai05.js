"use strict";
const display = (employee) => {
    console.log(`Nhân viên: ${employee.name} (${employee.age}), Mã nhân viên: ${employee.employeeId} - Phòng: ${employee.department}`);
};
let employee1 = {
    name: "Lê Phú Toàn",
    age: 18,
    employeeId: "EMP001",
    department: "Kế Toán"
};
display(employee1);
