class Vehicle {
    readonly id:string;
    public name:string;
    protected year:number;
    private company:string;
    constructor(name:string,year:number,company:string,id:string){
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    public printInfo(): void {
        console.log(`Mã xe: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Công ty sản xuất: ${this.company}`);
    }
}
const vehicle = new Vehicle("GTR",2006,"Dev","M1");
vehicle.printInfo();