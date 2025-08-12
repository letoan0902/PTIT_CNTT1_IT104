abstract class Job{
    type:string;
    constructor(type:string){
        this.type = type;
    }
    printType():void{
        console.log(`Loại công việc: ${this.type}`);
    }
    abstract calculateSalary():number;
}
class PartimeJob extends Job{
    workingHour:number;
    constructor(workingHour:number){
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 3000*this.workingHour;
    }
}
class Fulltime extends Job{
    constructor(){
        super("Fulltime");
    }
    calculateSalary(): number {
        return 10000000;
    }
}
const parttime = new PartimeJob(120);
const fulltime = new Fulltime();
console.log(`Lương part time: ${parttime.calculateSalary().toLocaleString()} VND`)
console.log(`Lương full time: ${fulltime.calculateSalary().toLocaleString()} VND`);