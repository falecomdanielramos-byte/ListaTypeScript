// /28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.




export function questao28P(): void {

    abstract class Acomodacao {

        private _numeroQuarto: number
        private _precoDiaria: number
        private _dias: number

        constructor(
            NuQuar: number,
            PrecDia: number,
            dias: number
        ) {
            this._numeroQuarto = NuQuar
            this._precoDiaria = PrecDia
            this._dias = dias
        }

        public getNumeroQuarto(): number {
            return this._numeroQuarto
        }

        public getPrecoDiaria(): number {
            return this._precoDiaria
        }

        public getDias(): number {
            return this._dias
        }

        abstract calcularTotal(): number
    }


    class AcomodacaoBasica extends Acomodacao {

        calcularTotal(): number {
            return this.getPrecoDiaria() * this.getDias()
        }
    }


    class SuiteMaster extends Acomodacao {

        private _adicionalHidro: number

        constructor(
            numeroQuarto: number,
            precoDiaria: number,
            dias: number,
            adicionalHidro: number
        ) {
            super(numeroQuarto, precoDiaria, dias)
            this._adicionalHidro = adicionalHidro
        }

        calcularTotal(): number {
            return (this.getPrecoDiaria() + this._adicionalHidro) * this.getDias()
        }

        get adicionalHidro(): number {
            return this._adicionalHidro
        }

        set adicionalHidro(adicionalHidro: number) {
            this._adicionalHidro = adicionalHidro
        }
    }


    let numeroQuarto: number
    let precoDiaria: number
    let dias: number
    let adicionalHidro: number
    let op: number
    let continuar = ""

    let acomodacaoBasica: AcomodacaoBasica
    let suiteMaster: SuiteMaster

    let acomodacoes: Acomodacao[] = []


    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de acomodação: 1-Básica ou 2-Suíte Master"
        ))

        numeroQuarto = Number(prompt(
            "Informe o número do quarto: "
        ))

        precoDiaria = Number(prompt(
            "Informe o preço da diária: "
        ))

        dias = Number(prompt(
            "Informe quantos dias o hóspede ficou: "
        ))


        if(op == 1) {

            acomodacaoBasica = new AcomodacaoBasica(numeroQuarto, precoDiaria, dias)

            acomodacoes.push(acomodacaoBasica)
        }

        else if(op == 2) {

            adicionalHidro = Number(prompt(
                "Informe o valor adicional da hidromassagem: "
            ))

            suiteMaster = new SuiteMaster(numeroQuarto, precoDiaria, dias, adicionalHidro)

            acomodacoes.push(suiteMaster)
        }


        continuar = String(prompt(
            "Deseja cadastrar outro quarto? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    window.alert("Quartos que faturaram mais de R$ 1.000,00:")

    for(let acomodacao of acomodacoes) {

        let total = acomodacao.calcularTotal()

        if(total > 1000) {

            window.alert(`Quarto: ${acomodacao.getNumeroQuarto()}`)
            window.alert(`Valor total: R$ ${total.toFixed(2)}`)
        }
    }
}