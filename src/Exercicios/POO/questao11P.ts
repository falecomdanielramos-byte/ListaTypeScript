// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


export function questao11P():void{

class Lanchonete {



public nome:string
public pedido:string
public valor:number



constructor(
    Nome:string,
    Pe:string,
    Val:number
){
    this.nome=Nome
    this.pedido=Pe
    this.valor=Val
}


}

let nome:string,pedido:string,valor:number
let continuar=""

while(continuar != "N"){

    nome = String(prompt("Informe o nome do cliente: "))
    pedido = String(prompt("Informe o nome do pedido: "))
    valor = Number(prompt("Informe o valor do pedido: "))
    continuar = String(prompt("Deseja registrar um novo cliente com novo pedido? (S-Sim ou N-Não)")).toUpperCase()

}






}