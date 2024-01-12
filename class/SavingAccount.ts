import { DioAccount } from "./DioAccount";

export class SavingAccount extends DioAccount{

    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }

    deposit = (value: number): void => {
        const depositValue: number = value + 10
        this.balance += depositValue
        console.log('Você depositou '+depositValue)
    }
}