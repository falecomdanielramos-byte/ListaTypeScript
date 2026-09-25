// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.


export function questao17P(): void {

    abstract class Usuario {

        private _id: number
        private _nome: string

        constructor(
            id: number,
            nome: string
        ) {
            this._id = id
            this._nome = nome
        }

        public getId(): number {
            return this._id
        }

        public getNome(): string {
            return this._nome
        }

        abstract ID(): string
    }


    class Aluno extends Usuario {

        private _curso: string

        constructor(
            id: number,
            nome: string,
            curso: string
        ) {
            super(id, nome)
            this._curso = curso
        }

        ID(): string {
            return `Aluno: ` + this.getNome() + ` | Curso: ` + this._curso
        }

        get curso(): string {
            return this._curso
        }

        set curso(curso: string) {
            this._curso = curso
        }
    }


    class Servidor extends Usuario {

        private _departamento: string

        constructor(
            id: number,
            nome: string,
            departamento: string
        ) {
            super(id, nome)
            this._departamento = departamento
        }

        ID(): string {
            return `Servidor:`  + this.getNome() + ` | Departamento: ` + this._departamento
        }

        get departamento(): string {
            return this._departamento
        }

        set departamento(departamento: string) {
            this._departamento = departamento
        }
    }


    let id: number
    let nome: string
    let op: number
    let continuar = ""

    let aluno: Aluno
    let servidor: Servidor

    let historico: Usuario[] = []

    let qtdAlunos = 0
    let qtdServidores = 0


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de usuario: (1-Aluno ou 2-Servidor)"))

        id = Number(prompt("Informe o ID do usuario:"))

        nome = String(prompt("Informe o nome completo do Usuario: "))


        if(op == 1) {

            let curso = String(prompt("Informe o curso do aluno: "))

            aluno = new Aluno(
                id,
                nome,
                curso
            )

            historico.push(aluno)

            qtdAlunos++
        }

        else if(op == 2) {

            let departamento = String(prompt("Informe o departamento do servidor: "))

            servidor = new Servidor(
                id,
                nome,
                departamento
            )

            historico.push(servidor)

            qtdServidores++
        }


        continuar = String(prompt("Deseja cadastrar outro usuário? (S-Sim ou N-Não)")).toUpperCase()
    }



    window.alert(" Os Usuarios que almoçaram! ")

    for(let usuario of historico) {

        window.alert(usuario.ID())
    }




    window.alert(`Total de acessos de alunos:  ${qtdAlunos}`)

    window.alert(`Total de acessos de servidores:  ${qtdServidores}`)

}