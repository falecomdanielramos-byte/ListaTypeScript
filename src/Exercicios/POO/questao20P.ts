// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.



export function questao20P():void{
class Pedido {

    private _mesa: number
    private _valorIngredientes: number

    constructor(
        mesa: number,
        valorIngredientes: number
    ) {
        this._mesa = mesa
        this._valorIngredientes = valorIngredientes
    }

    public getMesa(): number {
        return this._mesa
    }

    public getValorIngredientes(): number {
        return this._valorIngredientes
    }

    public setMesa(mesa: number) {
        this._mesa = mesa
    }

    public setValorIngredientes(valorIngredientes: number) {
        this._valorIngredientes = valorIngredientes
    }

    public calcularValor(): number {
        return this._valorIngredientes
    }
}


class PedidoEntrega extends Pedido {

    protected _taxaEntrega: number
    private _endereco: string

    constructor(
        mesa: number,
        valorIngredientes: number,
        taxaEntrega: number,
        endereco: string
    ) {
        super(mesa, valorIngredientes)
        this._taxaEntrega = taxaEntrega
        this._endereco = endereco
    }

    public calcularValor(): number {
        return this.getValorIngredientes() + this._taxaEntrega
    }
}
}