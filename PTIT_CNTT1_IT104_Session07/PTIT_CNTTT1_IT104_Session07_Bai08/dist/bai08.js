"use strict";
class Account {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(money) {
        if (money <= 0) {
            console.log("Số tiền không phù hợp");
        }
        else {
            this.balance += money;
            this.history.push(`Nạp: +${money}, Số dư: ${this.balance}`);
        }
    }
    withdraw(money) { }
    showHistory() {
        this.history.forEach((history, index) => {
            console.log(`History ${index}: ${history}`);
        });
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(money) {
        if (money <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
        }
        else if (money > this.balance) {
            console.log("Số dư hiện tại không đủ");
        }
        else {
            this.balance -= money;
            this.history.push(`Rút: -${money}, Số dư: ${this.balance}`);
        }
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = Math.max(0, overdraftLimit);
        this.history.push(`Thiết lập hạn mức thấu chi: ${this.overdraftLimit}`);
    }
    withdraw(money) {
        if (money <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        let available = this.balance + this.overdraftLimit;
        if (money > available) {
            this.history.push(` Rút tiền vượt quá hạn mức`);
            return;
        }
        this.balance -= money;
        this.history.push(` Rút (Thấu chi): -${money}, Số tiền: ${this.balance}`);
    }
}
const savingAcc = new CheckingAccount(1, 1000, [], "active", 500);
savingAcc.deposit(300);
savingAcc.withdraw(1200);
savingAcc.withdraw(400);
savingAcc.withdraw(300);
savingAcc.showHistory();
