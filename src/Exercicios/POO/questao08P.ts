// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.



export function questao08P():void{


class Funcionario{

    nome:string
    cargo:string 
    salario:number

    constructor(
        No:string,
        Ca:string,
        sal:number
    ){
        this.nome=No
        this.cargo=Ca
        this.salario=sal
        
    }


Exibir():void{
    window.alert(`O funcionario: ${this.nome} |Possui um salario de: ${this.salario} | Possui cargo: ${this.cargo}`)
}


}

let nome:string,cargo:string,sala:number
let continuar = ""
let funcionario

continuar = String(prompt("Quer cadastrar um funcionario? (S-Sim ou N-Não)")).toUpperCase()

while(continuar != "N"){

    nome = String(prompt("Informe o nome do funcionario: "))
    cargo = String(prompt("Informe o cargo do funcionario: "))
    sala = Number(prompt("Informe o salario do funcionario: "))
    continuar = String(prompt("Deseja continuar ? (S-Sim ou N-Não)")).toUpperCase()

    
    

    let funcionario:Funcionario = new Funcionario(nome,cargo,sala)
    let ListaFunc:Funcionario [] = [funcionario]
    

    ListaFunc.push(funcionario)

    let cont:string = String(prompt("Quer ver os funcionarios? (Sim ou Não)"))
    
if(cont === "Sim"){

for(let funcionario of ListaFunc){
    funcionario.Exibir()
}

}
    
}





































































































}