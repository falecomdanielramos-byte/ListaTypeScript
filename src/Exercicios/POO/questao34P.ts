// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o

// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.


export function questao34P(): void {

    abstract class Veiculo {

        private _placa: string
        private _horaEntrada: string
        private _horasPermanencia: number

        constructor(
            Pl: string,
            HrEntr: string,
            HrPerm: number
        ) {
            this._placa = Pl
            this._horaEntrada = HrEntr
            this._horasPermanencia = HrPerm
        }

        public getPlaca(): string {
            return this._placa
        }

        public getHoraEntrada(): string {
            return this._horaEntrada
        }

        public getHorasPermanencia(): number {
            return this._horasPermanencia
        }

        abstract calcularValor(HrPerm: number): number
    }


    class Carro extends Veiculo {

        calcularValor(HrPerm: number): number {
            return HrPerm * 5
        }
    }


    class Moto extends Veiculo {

        calcularValor(HrPerm: number): number {
            return HrPerm * 3
        }
    }


    let placa: string
    let horaEntrada: string
    let horasPermanencia: number
    let op: number
    let continuar = ""

    let carro: Carro
    let moto: Moto

    let veiculos: Veiculo[] = []

    let faturamento = 0


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de veículo: 1-Carro ou 2-Moto"))

        placa = String(prompt("Informe a placa do veículo: "))

        horaEntrada = String(prompt("Informe a hora de entrada: "))

        horasPermanencia = Number(prompt("Informe quantas horas o veículo permaneceu: "))

        if(op == 1) {

            carro = new Carro(placa,horaEntrada,horasPermanencia)

            veiculos.push(carro)
        }

        else if(op == 2) {

            moto = new Moto(placa,horaEntrada,horasPermanencia)

            veiculos.push(moto)
        }


        continuar = String(prompt("Deseja cadastrar outro veículo? (S-Sim ou N-Não)")).toUpperCase()
    }


    for(let veiculo of veiculos) {

        let valor = veiculo.calcularValor(veiculo.getHorasPermanencia())

        faturamento += valor

        window.alert(`Veículo:  ${ veiculo.getPlaca()}  Valor: R$ ${ + valor.toFixed(2) }`)
    }


    window.alert(`Faturamento total do dia: R$ ${ faturamento.toFixed(2) }`)
}
