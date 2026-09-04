export function attEx():void{

class Cliente{
    //Atributos
    
    nome:string
    CPF:string
    email:string
    telefone:number
    score:number

    //Constructor
    constructor(
        N:string,
        C:string,
        E:string,
        T:number,
        S:number
    ){

        this.nome=N
        this.CPF=C
        this.email=E
        this.telefone=T
        this.score=S


            
    }
exibirResumo():void{
        window.alert(`O cliente: ${this.nome} | Possui o CPF: ${this.CPF} | Possui o email: ${this.email} | Possui o telefone: ${this.telefone} | Tem o Score: ${this.score}`)    
}

}

let N:string,C:string,E:string,T:number,S:number
let continuar=""


while(continuar!= "N"){

N=String(prompt("Informe o nome do Cliente: "))
C=String(prompt("Informe o CPF: "))
E=String(prompt("Informe o email: "))
T=Number(prompt("Informe o Telefone: "))
S=Number(prompt("Informe o Score: "))
continuar=String(prompt("Quer continuar? S-Sim ou N-Não: ")).toLocaleUpperCase()

let novoCliente:Cliente = new Cliente(N,C,E,T,S)
let lista:Cliente[] = [novoCliente]

lista.push(novoCliente)

for(let novoCliente of lista){
    novoCliente.exibirResumo()
}
}

}