class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        if (width > 0) {
            this.width = width;
        } else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        if (height > 0) {
            this.height = height;
        } else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
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
console.log("Thông tin sau cập nhật")
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Diện tích: ${rect.getArea()}`);