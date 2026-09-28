// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.


export function questao35P(): void {

    abstract class Paciente {

        private _nome: string
        private _cartaoSUS: number

        constructor(
            nome: string,
            cartaoSUS: number
        ) {
            this._nome = nome
            this._cartaoSUS = cartaoSUS
        }

        public getNome(): string {
            return this._nome
        }

        public getCartaoSUS(): number {
            return this._cartaoSUS
        }

        exibirFicha(): void {
            window.alert(`Paciente: ${this._nome}`)
        }
    }


    class PacienteComum extends Paciente {

        exibirFicha(): void {
            window.alert(`Paciente comum: ${this.getNome()}`)
        }
    }


    class PacientePrioritario extends Paciente {

        private _prioridade: string

        constructor(
            nome: string,
            cartaoSUS: number,
            prioridade: string
        ) {
            super(nome, cartaoSUS)
            this._prioridade = prioridade
        }

        exibirFicha(): void {
            window.alert(`PRIORIDADE: ${this.getNome()} - ${this._prioridade}`)
        }

        get prioridade(): string {
            return this._prioridade
        }

        set prioridade(prioridade: string) {
            this._prioridade = prioridade
        }
    }


    let nome: string
    let cartaoSUS: number
    let op: number
    let continuar = ""

    let pacienteComum: PacienteComum
    let pacientePrioritario: PacientePrioritario

    let pacientes: Paciente[] = []

    let qtdPrioritarios = 0


    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de paciente: 1-Comum ou 2-Prioritário"
        ))

        nome = String(prompt(
            "Informe o nome do paciente: "
        ))

        cartaoSUS = Number(prompt(
            "Informe o número do cartão do SUS: "
        ))


        if(op == 1) {

            pacienteComum = new PacienteComum(nome, cartaoSUS)

            pacientes.push(pacienteComum)
        }

        else if(op == 2) {

            let prioridade = String(prompt(
                "Informe o tipo de prioridade: "
            ))

            pacientePrioritario = new PacientePrioritario(nome, cartaoSUS, prioridade)

            pacientes.push(pacientePrioritario)

            qtdPrioritarios++
        }


        continuar = String(prompt(
            "Deseja cadastrar outro paciente? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    for(let paciente of pacientes) {

        paciente.exibirFicha()
    }


    window.alert(`Total de pacientes prioritários: ${qtdPrioritarios}`)
}
