abstract class Shape {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    abstract getSize():string;
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(name:string,width:number,heigth:number){
        super(name);
        this.width = width;
        this.height = heigth
    }
    getSize():string{
        return`Width:${this.width},Height:${this.height}`;
    }
}
const rect = new Rectangle("My Rectangle", 10, 5);
console.log(rect.getName());
console.log(rect.getSize()); 