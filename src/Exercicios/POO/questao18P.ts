// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.


export function questao18P(): void {

    abstract class Funcionario {

        private _nome: string
        private _matricula: number
        private _salarioBase: number

        constructor(
            No: string,
            Mati: number,
            SalBase: number
        ) {
            this._nome = No
            this._matricula = Mati
            this._salarioBase = SalBase
        }

        public getNome(): string {
            return this._nome
        }

        public setNome(nome: string) {
            this._nome = nome
        }

        public getMatricula(): number {
            return this._matricula
        }

        public setMatricula(matricula: number) {
            this._matricula = matricula
        }

        public getSalarioBase(): number {
            return this._salarioBase
        }

        public setSalarioBase(salarioBase: number) {
            this._salarioBase = salarioBase
        }

        public calcularSalario(): number {
            return this._salarioBase
        }
    }


    class Professor extends Funcionario {

        private _regime: string

        constructor(
            nome: string,
            matricula: number,
            salarioBase: number,
            regime: string
        ) {
            super(nome, matricula, salarioBase)
            this._regime = regime
        }

        public calcularSalario(): number {

            if(this._regime.toUpperCase() == "DE") {
                return this.getSalarioBase() * 1.20
            }

            return this.getSalarioBase()
        }
    }


    class TecnicoAdministrativo extends Funcionario {

        private _auxilio: number

        constructor(
            nome: string,
            matricula: number,
            salarioBase: number
        ) {
            super(nome, matricula, salarioBase)
            this._auxilio = 1000
        }

        public calcularSalario(): number {
            return this.getSalarioBase() + this._auxilio
        }
    }


    class Diretor extends Funcionario {

        private _departamento: string
        private _gratificacao: number

        constructor(
            nome: string,
            matricula: number,
            salarioBase: number,
            departamento: string,
            gratificacao: number
        ) {
            super(nome, matricula, salarioBase)
            this._departamento = departamento
            this._gratificacao = gratificacao
        }

        public calcularSalario(): number {
            return this.getSalarioBase() + this._gratificacao
        }
    }


    let op = 0
    let nome: string
    let matricula: number
    let salarioBase: number

    let totalProfessores = 0
    let totalTecnicos = 0
    let totalDiretores = 0

    while(op != 4) {

        op = Number(prompt("Escolha: 1-Professor 2-Técnico 3-Diretor 4-Encerrar"))

        if(op == 1) {

            nome = String(prompt("Informe o nome do professor: "))
            matricula = Number(prompt("Informe a matrícula: "))
            salarioBase = Number(prompt("Informe o salário base: "))

            let regime = String(prompt("Informe o regime de trabalho: "))

            let professor = new Professor(nome,matricula,salarioBase,regime)

            totalProfessores += professor.calcularSalario()
        }

        else if(op == 2) {

            nome = String(prompt("Informe o nome do técnico: "))
            matricula = Number(prompt("Informe a matrícula: "))
            salarioBase = Number(prompt("Informe o salário base: "))

            let tecnico = new TecnicoAdministrativo(nome,matricula,salarioBase)

            totalTecnicos += tecnico.calcularSalario()
        }

        else if(op == 3) {

            nome = String(prompt("Informe o nome do diretor: "))
            matricula = Number(prompt("Informe a matrícula: "))
            salarioBase = Number(prompt("Informe o salário base: "))

            let departamento = String(prompt("Informe o departamento: "))
            let gratificacao = Number(prompt("Informe o valor da gratificação: "))

            let diretor = new Diretor(nome,matricula,salarioBase,departamento,gratificacao)

            totalDiretores += diretor.calcularSalario()
        }
    }

    let totalGeral = totalProfessores + totalTecnicos + totalDiretores

    window.alert("Relatório da folha de pagamento")

    window.alert("Total com professores: R$ " + totalProfessores.toFixed(2))

    window.alert("Total com técnicos administrativos: R$ " + totalTecnicos.toFixed(2))

    window.alert("Total com diretores: R$ " + totalDiretores.toFixed(2))

    window.alert("Total geral: R$ " + totalGeral.toFixed(2))
}