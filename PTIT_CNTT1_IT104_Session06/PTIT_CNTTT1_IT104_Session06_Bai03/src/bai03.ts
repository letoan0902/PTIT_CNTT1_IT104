//method dùng khi 
//Đã biết trước logic chung và muốn dùng lại cho tất cả lớp con.
//Hành vi đó giống nhau ở mọi lớp con hoặc có thể để mặc định, lớp con không cần viết lại.
//Muốn tránh việc lặp lại code ở các lớp con
// class Animal {
//     eat(): void { // method bình thường
//         console.log("Animal is eating...");
//     }
// }
// class Dog extends Animal {
//     // Không override vẫn xài được
// }
// const dog = new Dog();
// dog.eat(); // Animal is eating...

//abstract method dùng khi
// Không biết hoặc không muốn định nghĩa sẵn cách làm.
// Muốn ép buộc tất cả lớp con phải viết lại method đó theo cách riêng.
// Mỗi lớp con sẽ có cách thực hiện khác nhau.
// abstract class Animal {
//     abstract makeSound(): void; // abstract method, không có body
// }
// class Dog extends Animal {
//     makeSound(): void { // bắt buộc phải override
//         console.log("Woof! Woof!");
//     }
// }
// const dog = new Dog();
// dog.makeSound(); // Woof! Woof!