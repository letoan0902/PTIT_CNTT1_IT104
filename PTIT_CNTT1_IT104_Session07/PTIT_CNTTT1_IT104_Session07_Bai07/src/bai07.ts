class Account {
    accountNumber:number;
    protected balance:number;
    protected history:string[];
    protected status:string;

    constructor(accountNumber:number,balance:number,history:string[],status:string){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.history=history;
        this.status=status;
    }

    deposit(money:number){
        if(money<=0){
            console.log("Số tiền không phù hợp");
        }else {
            this.balance+=money;
            this.history.push(`Nạp: +${money}, Số dư: ${this.balance}`)
        }
    }

    withdraw(money:number){}

    showHistory(){
        this.history.forEach((history,index)=>{
            console.log(`History ${index}: ${history}`);
        })
    }
}

class SavingAccount extends Account{
    interestRate:number;
    constructor(accountNumber:number,balance:number,history:string[],status:string,interestRate: number){
        super(accountNumber,balance,history,status);
        this.interestRate=interestRate;
    }

    withdraw(money: number): void {
        if(money<=0){
            console.log("Số tiền rút phải lớn hơn 0");
        }else if(money>this.balance){
            console.log("Số dư hiện tại không đủ");
        }else {
            this.balance-=money;
            this.history.push(`Rút: -${money}, Số dư: ${this.balance}`)
        }
    }
}

const savingAcc = new SavingAccount(1,20000,[],"active",3.5)
savingAcc.deposit(2000);  
savingAcc.withdraw(1500);
savingAcc.withdraw(5500);
savingAcc.showHistory();