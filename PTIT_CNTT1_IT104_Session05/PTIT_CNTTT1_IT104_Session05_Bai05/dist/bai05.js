"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 3);
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Diện tích: ${rect.getArea()}`);
rect.setWidth(10);
rect.setHeight(6);
console.log("Thông tin sau cập nhật");
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Diện tích: ${rect.getArea()}`);
