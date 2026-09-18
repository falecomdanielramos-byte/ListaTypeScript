// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


export function questao11P(): void {

    class Lanchonete {

        private _nome: string
        private _pedido: string
        private _valor: number

        constructor(
            Nome: string,
            Pe: string,
            Val: number
        ) {
            this._nome = Nome
            this._pedido = Pe
            this._valor = Val
        }

        public getValor(): number {
            return this._valor
        }

        ExibirResumo() {
            window.alert(`O Cliente: ${this._nome} | Pediu: ${this._pedido} | Com o valor de: ${this._valor.toFixed(2)}`)
        }


    }

    let nome: string, pedido: string, valor: number
    let continuar = ""
    let ListaPedidos: Lanchonete[] = []

    while (continuar !== "N") {

        nome = String(prompt("Informe o nome do cliente: "))
        pedido = String(prompt("Informe o nome do pedido: "))
        valor = Number(prompt("Informe o valor do pedido: "))

        continuar = String(prompt("Deseja registrar um novo cliente com novo pedido? (S-Sim ou N-Não)")).toUpperCase()

        let cliente = new Lanchonete(nome, pedido, valor)
        ListaPedidos.push(cliente)


    }
    let ValorTotal = 0
    for (let cliente of ListaPedidos) {
        cliente.ExibirResumo()
        ValorTotal = ValorTotal + cliente.getValor()
    }
    window.alert(`Valor total dos pedidos ${ValorTotal.toFixed(2)}`)

}