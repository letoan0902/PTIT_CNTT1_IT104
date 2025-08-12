abstract class Animal{
    name:string;

    constructor(name:string){
        this.name=name;
    }
    abstract makeNoise():void;

    printName():void{
        console.log(`Name: ${this.name}`);
    }
}

class Cat extends Animal{
    makeNoise(): void {
        console.log("Meo Meo");
    }
}

class Dog extends Animal{
    makeNoise(): void {
        console.log(`Gau Gau`);
    }
}

const myCat = new Cat("Mèo Mướp")
const myDog=new Dog("Chó Husky")

myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();