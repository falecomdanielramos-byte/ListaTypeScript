// 24. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.



export function questao24P(): void {

    abstract class Tarefa {

        private _descricao: string
        private _concluida: boolean

        constructor(
            discr: string
        ) {
            this._descricao = discr
            this._concluida = false
        }

        public getDescricao(): string {
            return this._descricao
        }

        public getConcluida(): boolean {
            return this._concluida
        }

        public marcarConcluida(): void {
            this._concluida = true
        }

        abstract exibir(): void
    }


    class TarefaAcademica extends Tarefa {

        private _disciplina: string

        constructor(
            discri: string,
            disci: string
        ) {
            super(discri)
            this._disciplina = disci
        }

        exibir(): void {
            window.alert(`Tarefa acadêmica: ${this.getDescricao()} - Disciplina: ${this._disciplina}`)
        }

        get disciplina(): string {
            return this._disciplina
        }

        set disciplina(disciplina: string) {
            this._disciplina = disciplina
        }
    }


    class TarefaPessoal extends Tarefa {

        private _prioridade: string

        constructor(
            descricao: string,
            prioridade: string
        ) {
            super(descricao)
            this._prioridade = prioridade
        }

        exibir(): void {
            window.alert(`Tarefa pessoal: ${this.getDescricao()} - Prioridade: ${this._prioridade}`)
        }

        get prioridade(): string {
            return this._prioridade
        }

        set prioridade(prioridade: string) {
            this._prioridade = prioridade
        }
    }


    let descricao: string
    let op: number
    let continuar = ""

    let tarefaAcademica: TarefaAcademica
    let tarefaPessoal: TarefaPessoal

    let tarefas: Tarefa[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de tarefa: 1-Acadêmica ou 2-Pessoal"))

        descricao = String(prompt("Informe a descrição da tarefa: "))


        if(op == 1) {

            let disciplina = String(prompt("Informe o nome da disciplina: "))

            tarefaAcademica = new TarefaAcademica(descricao, disciplina)

            tarefas.push(tarefaAcademica)
        }

        else if(op == 2) {

            let prioridade = String(prompt("Informe o nível de prioridade: "))

            tarefaPessoal = new TarefaPessoal(descricao, prioridade)

            tarefas.push(tarefaPessoal)
        }


        continuar = String(prompt("Deseja cadastrar outra tarefa? (S-Sim ou N-Não)")).toUpperCase()
    }


    let menu = 0

    while(menu != 3) {

        menu = Number(prompt("1-Marcar tarefa como concluída  2-Listar tarefas acadêmicas pendentes  3-Sair"))


        if(menu == 1) {

            let busca = String(prompt("Informe a descrição da tarefa que deseja concluir: "))

            for(let tarefa of tarefas) {

                if(tarefa.getDescricao() == busca) {

                    tarefa.marcarConcluida()

                    window.alert(`Tarefa "${tarefa.getDescricao()}" marcada como concluída`)
                }
            }
        }

        else if(menu == 2) {

            window.alert("Tarefas acadêmicas pendentes:")

            for(let tarefa of tarefas) {

                if(tarefa instanceof TarefaAcademica && tarefa.getConcluida() == false) {

                    tarefa.exibir()
                }
            }
        }
    }
}