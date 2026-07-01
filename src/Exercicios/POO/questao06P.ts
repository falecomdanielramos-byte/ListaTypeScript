// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function questao06P():void{

class Conta {
    Numero_Conta:number
    Nome_Cnta:string
    Saldo:number=0

    constructor(
        Nu:number,
        No:string,
        Sa:number
    ){
        this.Numero_Conta=Nu
        this.Nome_Cnta=No
        this.Saldo=Sa
    }

    AlterarNome(NovoNome:string){
        NovoNome = N
        this.Nome_Cnta = NovoNome
    }
    
    Deposito(NovoSaldo:number){
        NovoSaldo = Sa
        this.Saldo = NovoSaldo
    }
    Saque(Sa:number){
        return this.Saldo=this.Saldo-Sa
    }

    Exibir():void{
        window.alert(`A Conta do Usúario: ${this.Nome_Cnta} | Possui o Numero: ${this.Numero_Conta} | Com o Saldo de: ${this.Saldo.toFixed(2)} R$`)
    }

}

let C:number,N:string,S:number
let continuar = "",saquar:string,Sa:number

while(continuar != "N"){

C = Number(prompt("Informe o número da conta: "))
N = String(prompt("Informe o nome do Correntista: "))
S = Number(prompt("Informe o Saldo da conta: "))

let ListaConta = []
let novaConta = new Conta (C,N,S)

saquar = String(prompt("Quer Saquer ? S-Sim ou N-Não: ")).toLocaleUpperCase()

if(saquar === "S"){
    Sa = Number(prompt("Informe o Valor do saque: "))
    novaConta.Saque(Sa)
}

continuar = String(prompt("Quer continuar? S-Sim ou N-Não")).toLocaleUpperCase()




ListaConta.push(novaConta)

for(let novaConta of ListaConta){
    novaConta.Exibir()
}
}


}