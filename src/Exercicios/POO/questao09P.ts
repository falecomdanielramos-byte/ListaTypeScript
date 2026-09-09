// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.


export function questao09P(): void {

    class Loja {

        nome: string
        produto: string
        preco: number
        quantidade: number



        constructor(
            No: string,
            Prod: string,
            Preço: number,
            quant: number

        ) {
            this.nome = No
            this.produto = Prod
            this.preco = Preço
            this.quantidade = quant
        }

        Exibirestoque() {
            let estoque = this.preco * this.quantidade

            window.alert(`O cliente: ${this.nome} | comprou: ${this.produto} | com o valor de: ${this.preco.toFixed(2)} | na quantidade: ${this.quantidade.toFixed(2)} || Valor total em estoque: ${estoque.toFixed(2)}`)
        }

    }


    let nome: string, produto: string, preco: number, quantidade: number
    let continuar = ""
    let ListaProdu: Loja[] = []

    continuar = String(prompt("Deseja comprar? (S-Sim ou N-Não)")).toUpperCase()

    while (continuar != "N") {


        nome = String(prompt("Informe o nome do usuario: "))
        produto = String(prompt("Informe o nome do produto: "))
        preco = Number(prompt("Informe o preço do produto: "))
        quantidade = Number(prompt("Informe a quantidade do produto: "))
        continuar = String(prompt("Deseja continuar ? (S-Sim ou N-Não)")).toUpperCase()


        let produ: Loja = new Loja(nome, produto, preco, quantidade)

        ListaProdu.push(produ)



    }

    for (let produ of ListaProdu) {
        produ.Exibirestoque()

    }



}