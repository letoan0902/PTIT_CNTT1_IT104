interface ChangeSpeed {
    speedUp(amount: number): void;  
    slowDown(amount: number): void; 
    stop(): void;                  
}
class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }
    public speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    public slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    public stop(): void {
        this.speed = 0;
        console.log(`Dừng xe. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
const myCar = new Vehicle();
myCar.speedUp(50);   
myCar.slowDown(20);
myCar.stop();