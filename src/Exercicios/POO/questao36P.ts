// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.



export function questao36P(): void {

    abstract class Curso {

        private _titulo: string
        private _cargaHoraria: number

        constructor(
            Tit: string,
            CargHr: number
        ) {
            this._titulo = Tit
            this._cargaHoraria = CargHr
        }

        public getTitulo(): string {
            return this._titulo
        }

        public getCargaHoraria(): number {
            return this._cargaHoraria
        }

        abstract emitirCertificado(): void
    }


    class CursoLivre extends Curso {

        emitirCertificado(): void {
            window.alert(`O certificado foi liberado para o curso: ${this.getTitulo()}`)
        }
    }


    class CursoTecnico extends Curso {

        private _notaProjeto: number

        constructor(
            titulo: string,
            cargaHoraria: number,
            notaProjeto: number
        ) {
            super(titulo, cargaHoraria)
            this._notaProjeto = notaProjeto
        }

        emitirCertificado(): void {

            if(this._notaProjeto >= 7) {
                window.alert(` o certificado liberado para o curso: ${this.getTitulo()}`)
            }
            else {
                window.alert(`o certificado esta pendente para o curso: ${this.getTitulo()}`)
            }
        }

        get notaProjeto(): number {
            return this._notaProjeto
        }

        set notaProjeto(notaProjeto: number) {
            this._notaProjeto = notaProjeto
        }
    }


    let titulo: string
    let cargaHoraria: number
    let notaProjeto: number
    let op: number
    let continuar = ""

    let cursoLivre: CursoLivre
    let cursoTecnico: CursoTecnico

    let cursos: Curso[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de curso: (1-Curso Livre ou 2-Curso Técnico)"))

        titulo = String(prompt("Informe o título do curso: "))

        cargaHoraria = Number(prompt("Informe a carga horária do curso: "))


        if(op == 1) {

            cursoLivre = new CursoLivre(titulo, cargaHoraria)

            cursos.push(cursoLivre)
        }

        else if(op == 2) {

            notaProjeto = Number(prompt("Informe a nota do projeto final: "))

            cursoTecnico = new CursoTecnico(titulo, cargaHoraria, notaProjeto)

            cursos.push(cursoTecnico)
        }


        continuar = String(prompt("Deseja cadastrar outro curso? (S-Sim ou N-Não)")).toUpperCase()
    }


    window.alert("Resultado dos certificados:")

    for(let curso of cursos) {

        curso.emitirCertificado()
    }
}