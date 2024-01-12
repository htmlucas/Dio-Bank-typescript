import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingAccount } from './class/SavingAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(30)
peopleAccount.withdraw(25)
peopleAccount.getName()
peopleAccount.getBalance()



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(20)
console.log(companyAccount)
//companyAccount.deposit()

const savingAccount: SavingAccount = new SavingAccount('Lucas', 30)
savingAccount.deposit(15)
console.log(savingAccount)