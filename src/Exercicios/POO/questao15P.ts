// 15. Herança Polimorfismo Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.



export function questao15P(): void {

    abstract class Funcionario {

        Nome: string
        Salario: Number
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

        abstract Calcular():void

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



    }

    class FuncionarioAssalariado extends Funcionario {

        Mes:number

        constructor(
            Nome:string,
            Sal:number,
            Id:number,
            Mes:number
        ){
            super(Nome,Sal,Id)
            this.Mes=Mes
        }
    }












    let Nome: string, Salario: number, HorasTrab: number, Id: number
    let continuar = ""

    while (continuar != "N") {

        Nome = String(prompt("Informe qual e o nome do funcionario: "))
        Salario = Number(prompt("Informe qual e o salario do funcionario: "))
        HorasTrab = Number(prompt("Informe quantas horas o funcionario trabalha: "))

    }













}