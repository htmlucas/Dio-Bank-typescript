export abstract class DioAccount {
  readonly name: string
  readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    this.balance += value
    console.log('Voce depositou '+value+' R$')
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance > value){
      this.balance -= value
      console.log('Você retirou '+value+' R$')
      console.log('Seu novo valor é de:'+this.balance+' R$')
    }else{
      throw new Error('Valor inválido ou conta inválida')
    }

    
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
