// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação


export function questao26P(): void {

    abstract class Conta {

        private _titular: string
        private _saldo: number

        constructor(
            titLar: string,
            sal: number
        ) {
            this._titular = titLar
            this._saldo = sal
        }

        public getTitular(): string {
            return this._titular
        }

        public getSaldo(): number {
            return this._saldo
        }

        public depositar(valor: number): void {
            this._saldo += valor
        }

        public sacar(valor: number): void {
            this._saldo -= valor
        }

        abstract movimentar(): void
    }


    class ContaCorrente extends Conta {

        sacar(valor: number): void {
            this.sacarTaxa(valor)
        }

        sacarTaxa(valor: number): void {
            super.sacar(valor + 2)
        }

        movimentar(): void {
            window.alert("Conta Corrente selecionada")
        }
    }


    class ContaPoupanca extends Conta {

        rendimento(): void {
            let valor = this.getSaldo() * 0.01
            this.depositar(valor)
        }

        movimentar(): void {
            window.alert("Conta Poupança selecionada")
        }
    }


    let titular: string
    let saldo: number
    let op: number
    let valor: number
    let continuar = ""

    let corrente: ContaCorrente
    let poupanca: ContaPoupanca

    titular = String(prompt("Informe o nome do titular: "))
    saldo = Number(prompt("Informe o saldo inicial: "))

    corrente = new ContaCorrente(titular, saldo)
    poupanca = new ContaPoupanca(titular, saldo)

    while(continuar != "N") {

        op = Number(prompt(
            "Informe qual conta deseja movimentar: 1-Corrente ou 2-Poupança"
        ))

        if(op == 1) {

            corrente.movimentar()

            let operacao = Number(prompt(
                "Informe a operação: 1-Deposito ou 2-Saque"
            ))

            if(operacao == 1) {

                valor = Number(prompt("Informe o valor do depósito: "))

                corrente.depositar(valor)

                window.alert(
                    "Saldo atual: R$ " + corrente.getSaldo()
                )
            }

            else if(operacao == 2) {

                valor = Number(prompt("Informe o valor do saque: "))

                corrente.sacar(valor)

                window.alert(
                    "Saldo atual: R$ " + corrente.getSaldo()
                )
            }
        }

        else if(op == 2) {

            poupanca.movimentar()

            let operacao = Number(prompt(
                "Informe a operação: 1-Deposito, 2-Saque ou 3-Rendimento"
            ))

            if(operacao == 1) {

                valor = Number(prompt("Informe o valor do depósito: "))

                poupanca.depositar(valor)

                window.alert(
                    "Saldo atual: R$ " + poupanca.getSaldo()
                )
            }

            else if(operacao == 2) {

                valor = Number(prompt("Informe o valor do saque: "))

                poupanca.sacar(valor)

                window.alert(
                    "Saldo atual: R$ " + poupanca.getSaldo()
                )
            }

            else if(operacao == 3) {

                poupanca.rendimento()

                window.alert(
                    "Saldo atual: R$ " + poupanca.getSaldo()
                )
            }
        }

        continuar = String(prompt(
            "Deseja realizar outra operação? (S-Sim ou N-Não)"
        )).toUpperCase()
    }
}

