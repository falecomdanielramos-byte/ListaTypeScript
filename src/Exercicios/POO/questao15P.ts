// 15. Herança Polimorfismo Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.


export function questao15P(): void {

    abstract class Funcionario {

        Nome: string
        Salario: number
        private _ID: number

        constructor(
            No: string,
            Sal: number,
            Id: number
        ) {
            this.Nome = No
            this.Salario = Sal
            this._ID = Id
        }

        abstract Calcular(): number
        abstract Exibir(): void
    }


    class FuncionarioHorista extends Funcionario {

        horasTrab: number

        constructor(
            Nome: string,
            Sal: number,
            Id: number,
            HoTrab: number
        ) {
            super(Nome, Sal, Id)
            this.horasTrab = HoTrab
        }

        Calcular(): number {
            return this.Salario * this.horasTrab
        }

        Exibir(): void {
            window.alert(`Nome: ${this.Nome}`)
            window.alert(`Salário: R$ ${this.Calcular().toFixed(2)}`)
        }
    }


    class FuncionarioAssalariado extends Funcionario {

        Mes: number

        constructor(
            Nome: string,
            Sal: number,
            Id: number,
            Mes: number
        ) {
            super(Nome, Sal, Id)
            this.Mes = Mes
        }

        Calcular(): number {
            return this.Salario
        }

        Exibir(): void {
            window.alert(`Nome: ${this.Nome}`)
            window.alert(`Salário mensal: R$ ${this.Calcular().toFixed(2)}`)
        }
    }


    let Nome: string
    let Salario: number
    let HorasTrab: number
    let Id: number
    let op: number
    let continuar = ""

    let funcionarioHorista: FuncionarioHorista
    let funcionarioAssalariado: FuncionarioAssalariado

    let funcionarios: Funcionario[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de funcionario: 1-Horista ou 2-Assalariado"))

        Nome = String(prompt("Informe qual e o nome do funcionario: "))
        Salario = Number(prompt("Informe qual e o salario do funcionario: "))
        Id = Number(prompt("Informe o ID do funcionario: "))


        if(op == 1) {

            HorasTrab = Number(prompt("Informe quantas horas o funcionario trabalha: "))

            funcionarioHorista = new FuncionarioHorista(Nome, Salario, Id, HorasTrab)

            funcionarios.push(funcionarioHorista)
        }

        else if(op == 2) {

            let Mes = Number(prompt("Informe o mês de referência: "))

            funcionarioAssalariado = new FuncionarioAssalariado(Nome, Salario, Id, Mes)

            funcionarios.push(funcionarioAssalariado)
        }


        continuar = String(prompt(
            "Deseja cadastrar outro funcionario? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    for(let funcionario of funcionarios) {

        funcionario.Exibir()
    }
}

