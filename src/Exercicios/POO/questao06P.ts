// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.


class Conta {

    Numero_Conta:number
    Nome_Cnta:string
    Saldo:number=0

    constructor(
        Nu:number,
        No:string,
        
    ){
        this.Numero_Conta=Nu
        this.Nome_Cnta=No
        this.Saldo
    }

    AlterarNome(NovoNome:string){
        NovoNome = nome
        this.Nome_Cnta = NovoNome
    }
    
    Deposito(NovoSaldo:number){
        NovoSaldo = saldo
        this.Saldo = NovoSaldo
    }
    Saque(RemoverSal:number){
        RemoverSal = saldo
    }

    Exibir():void{
        window.alert()
    }

}

let conta:number,nome:string,saldo:number
let continuar = "",saquar:string,saque:number

while(continuar === "S"|| continuar === "SIM"){
conta = Number(prompt("Informe o número da conta: "))
nome = String(prompt("Informe o nome do Correntista: "))
saldo = Number(prompt("Informe o Saldo da conta: "))
continuar = String(prompt("Quer continuar? S-Sim ou N-Não")).toLocaleUpperCase()
saquer = String(prompt("Quer Saquer ? S-Sim ou N-Não: ")).toLocaleUpperCase

if(saquar === "S"){
    
}

let ListaConta = []
let novaConta = new Conta (conta,nome)

ListaConta.push(novaConta)

for(let novaConta of ListaConta){

}
}





