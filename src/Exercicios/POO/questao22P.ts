// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.


export function questao22P(): void {

    abstract class Veiculo {

        private _placa: string
        private _quilometragem: number

        constructor(
            placa: string,
            quilometragem: number
        ) {
            this._placa = placa
            this._quilometragem = quilometragem
        }

        public getPlaca(): string {
            return this._placa
        }

        public getQuilometragem(): number {
            return this._quilometragem
        }

        abstract precisaRevisao(): boolean
    }


    class Onibus extends Veiculo {

        precisaRevisao(): boolean {

            if(this.getQuilometragem() >= 10000) {
                return true
            }

            else {
                return false
            }
        }
    }


    class Ambulancia extends Veiculo {

        precisaRevisao(): boolean {

            if(this.getQuilometragem() >= 5000) {
                return true
            }

            else {
                return false
            }
        }
    }


    let placa: string
    let quilometragem: number
    let op: number
    let continuar = ""

    let onibus: Onibus
    let ambulancia: Ambulancia

    let veiculos: Veiculo[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de veículo: 1-Ônibus ou 2-Ambulância"))

        placa = String(prompt("Informe a placa do veículo: "))

        quilometragem = Number(prompt("Informe a quilometragem atual do veículo: "))


        if(op == 1) {

            onibus = new Onibus(placa,quilometragem)

            veiculos.push(onibus)
        }

        else if(op == 2) {

            ambulancia = new Ambulancia(placa,quilometragem)

            veiculos.push(ambulancia)
        }


        continuar = String(prompt("Deseja cadastrar outro veículo? (S-Sim ou N-Não)")).toUpperCase()
    }


    let placaConsulta = String(prompt("Informe a placa do veículo que deseja consultar: "))


    for(let veiculo of veiculos) {

        if(veiculo.getPlaca() == placaConsulta) {

            if(veiculo.precisaRevisao()) {

                window.alert("O veiculo " + veiculo.getPlaca() + " precisa de manutenção.")
            }

            else {

                window.alert("O veículo " + veiculo.getPlaca() + " não precisa de manutenção.")
            }
        }
    }
}
