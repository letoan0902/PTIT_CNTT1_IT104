class Vehicle {
    protected name:string;
    protected speed:number;
    protected id:string;

    constructor(name:string,speed:number,id:string){
        this.name=name;
        this.speed=speed;
        this.id=id;
    }

    showDown(){
        this.speed--;
    }

    speedUp(){
        this.speed++;
    }

    showSpead(){
        console.log(`Speed: ${this.speed}`);
    }
}

class Bicycle extends Vehicle{
    private gear:number;
    constructor(name:string,speed:number,id:string,gear:number){
        super(name,speed,id);
        this.gear=gear;
    }
}

let byce1=new Bicycle("Xe máy",50,"001",12);
byce1.showDown();
byce1.showSpead();
byce1.speedUp();
byce1.showSpead();