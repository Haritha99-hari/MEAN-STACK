// account create 
// deposit
// withdrawal
// balance enq

class Bank {

    static bankName=()=>{                             //it will remain constant for all employee here
        console.log("SBI Bank")
    }

    accountCreate = (acno, name, minimum_balance) => {
        this.acno = acno;
        this.name = name;
        this.minimum_balance = minimum_balance;
    }

    deposit = (amount) => {
        this.minimum_balance += amount;
        console.log("your account " + this.acno + " has been credited with amount " + amount + " aval bal " + this.minimum_balance);
    }


    withdraw = (amount) => {
        if (this.minimum_balance >= amount) {
            this.minimum_balance -= amount;
            console.log("your account " + this.acno + " has been debited with amount " + amount + " aval bal " + this.minimum_balance);
        }
        else {
            console.log("insufficient balance")
        }
    }
    balanceEnq = () => {
        console.log("aval balance=" + this.minimum_balance)
    }
}

var obj=new Bank();
obj.accountCreate(100,"Haritha",5000)
obj.deposit(5000);
obj.withdraw(2000);
// obj.withdraw(20000);   juz eg: of insufficient balance
obj.balanceEnq();
Bank.bankName();     //here we can call by class name