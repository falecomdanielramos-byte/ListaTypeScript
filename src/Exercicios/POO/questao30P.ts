// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.


export function questao30P(): void {

    abstract class Passagem {

        private _nome: string
        private _cpf: string
        private _valorBase: number

        constructor(
            nome: string,
            cpf: string,
            ValBs: number
        ) {
            this._nome = nome
            this._cpf = cpf
            this._valorBase = ValBs
        }

        public getNome(): string {
            return this._nome
        }

        public getCpf(): string {
            return this._cpf
        }

        public getValorBase(): number {
            return this._valorBase
        }

        abstract calcularValor(): number
    }


    class PassagemComum extends Passagem {

        calcularValor(): number {
            return this.getValorBase()
        }
    }


    class PassagemEstudantil extends Passagem {

        calcularValor(): number {
            return this.getValorBase() * 0.50
        }
    }


    let nome: string
    let cpf: string
    let valorBase: number
    let op: number
    let continuar = ""

    let passagemComum: PassagemComum
    let passagemEstudantil: PassagemEstudantil

    let passagens: Passagem[] = []


    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de passagem: 1-Comum ou 2-Estudantil"
        ))

        nome = String(prompt(
            "Informe o nome do passageiro: "
        ))

        cpf = String(prompt(
            "Informe o CPF do passageiro: "
        ))

        valorBase = Number(prompt(
            "Informe o valor base da passagem: "
        ))


        if(op == 1) {

            passagemComum = new PassagemComum(nome, cpf, valorBase)

            passagens.push(passagemComum)
        }

        else if(op == 2) {

            passagemEstudantil = new PassagemEstudantil(nome, cpf, valorBase)

            passagens.push(passagemEstudantil)
        }


        continuar = String(prompt(
            "Deseja cadastrar outra passagem? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    let faturamento = 0

    window.alert("Relatório das passagens vendidas:")

    for(let passagem of passagens) {

        let valor = passagem.calcularValor()

        faturamento += valor

        window.alert(`Passageiro: ${passagem.getNome()}`)
        window.alert(`CPF: ${passagem.getCpf()}`)
        window.alert(`Valor da passagem: R$ ${valor.toFixed(2)}`)
    }


    window.alert(`Faturamento total do dia: R$ ${faturamento.toFixed(2)}`)
}