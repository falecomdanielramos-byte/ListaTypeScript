// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.



export function questao07P():void{


class Funcionario{

    nome:string
    cargo:string
    percent:number
    salario:number

    constructor(
        No:string,
        Ca:string,
        Pc:number,
        sal:number
    ){
        this.nome=No
        this.cargo=Ca
        this.percent=Pc
        this.salario=sal
        
    }


percentAL(){
    let valorPerc:number = this.salario + (this.salario * percent)/100
    this.salario = valorPerc
}
Exibir():void{
    window.alert(`O funcionario: ${this.nome} |Possui um salario de: ${this.salario} | Possui cargo: ${this.cargo}`)
}


}

let nome:string,cargo:string,percent:number,sala:number
let continuar = ""

continuar = String(prompt("Quer calcular o salario ? (S-Sim ou N-Não)")).toUpperCase()

while(continuar != "N"){

    nome = String(prompt("Informe o nome do funcionario: "))
    cargo = String(prompt("Informe o cargo do funcionario: "))
    percent = Number(prompt("Informe o percentual do aumento: "))
    sala = Number(prompt("Informe o salario do funcionario: "))

    let ListaFunc = []
    
    continuar = String(prompt("Deseja continuar ? (S-Sim ou N-Não)")).toUpperCase()

    let funcionario:Funcionario = new Funcionario(nome,cargo,percent,sala)
    funcionario.percentAL()

    ListaFunc.push(funcionario)

for(let funcionario of ListaFunc){
    funcionario.Exibir()
}
}


}