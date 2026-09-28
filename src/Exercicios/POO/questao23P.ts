// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

export function questao23P(): void {

    abstract class Produto {

        private _codigo: number
        private _nome: string
        private _precoCusto: number

        constructor(
            codigo: number,
            nome: string,
            precoCusto: number
        ) {
            this._codigo = codigo
            this._nome = nome
            this._precoCusto = precoCusto
        }

        public getCodigo(): number {
            return this._codigo
        }

        public getNome(): string {
            return this._nome
        }

        public getPrecoCusto(): number {
            return this._precoCusto
        }

        abstract calcularPreco(): number
    }


    class ProdutoPerecivel extends Produto {

        private _dataValidade: string

        constructor(
            codigo: number,
            nome: string,
            precoCusto: number,
            dataValidade: string
        ) {
            super(codigo, nome, precoCusto)
            this._dataValidade = dataValidade
        }

        calcularPreco(): number {

            let dataAtual = String(prompt("Informe a data atual: "))

            if(dataAtual == this._dataValidade) {

                return this.getPrecoCusto() * 0.70
            }

            else {

                return this.getPrecoCusto()
            }
        }

        get dataValidade(): string {
            return this._dataValidade
        }

        set dataValidade(dataValidade: string) {
            this._dataValidade = dataValidade
        }
    }


    class ProdutoNaoPerecivel extends Produto {

        calcularPreco(): number {

            return this.getPrecoCusto()
        }
    }


    let codigo: number
    let nome: string
    let precoCusto: number
    let op: number
    let continuar = ""

    let perecivel: ProdutoPerecivel
    let naoPerecivel: ProdutoNaoPerecivel

    let produtos: Produto[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de produto: 1-Perecível ou 2-Não Perecível" ))

        codigo = Number(prompt("Informe o código do produto: " ))

        nome = String(prompt("Informe o nome do produto: " ))

        precoCusto = Number(prompt("Informe o preço de custo do produto: " ))


        if(op == 1) {

            let dataValidade = String(prompt("Informe a data de validade: " ))

            perecivel = new ProdutoPerecivel(codigo,nome,precoCusto,dataValidade)

            produtos.push(perecivel)
        }

        else if(op == 2) {

            naoPerecivel = new ProdutoNaoPerecivel(codigo,nome,precoCusto)

            produtos.push(naoPerecivel)
        }


        continuar = String(prompt("Deseja cadastrar outro produto? (S-Sim ou N-Não)" )).toUpperCase()
    }


    for(let produto of produtos) {

    window.alert("Produto: " + produto.getNome())
    window.alert("Código: " + produto.getCodigo())
    window.alert("Valor final: R$ " + produto.calcularPreco().toFixed(2))
}
    
}
