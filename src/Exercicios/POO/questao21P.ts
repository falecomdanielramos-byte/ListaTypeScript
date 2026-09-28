// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest

// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.


export function questao21P(): void {

    class Projeto {

        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(
            tit: string,
            cooc: string,
            nota: number
        ) {
            this._titulo = tit
            this._coordenador = cooc
            this._nota = 0
            this.setNota(nota)
        }

        public getTitulo(): string {
            return this._titulo
        }

        public getCoordenador(): string {
            return this._coordenador
        }

        public getNota(): number {
            return this._nota
        }

        public setNota(nota: number): void {

            if(nota >= 0 && nota <= 10) {
                this._nota = nota
            }
        }

        public identificar(): string {
            return `Projeto: ${this._titulo} - Coordenador: ${this._coordenador} - Nota: ${this._nota}`
        }
    }


    class ProjetoVerde extends Projeto {

        public identificar(): string {
            return `Projeto Verde: ${this.getTitulo()} - Coordenador: ${this.getCoordenador()} - Nota: ${this.getNota()}`
        }
    }


    class ProjetoCultural extends Projeto {

        public identificar(): string {
            return `Projeto Cultural: ${this.getTitulo()} - Coordenador: ${this.getCoordenador()} - Nota: ${this.getNota()}`
        }
    }


    let op = ""
    let tipo: number
    let titulo: string
    let coordenador: string
    let nota: number

    let projetos: Projeto[] = []

    let somaNotas = 0


    while(op != "N") {

        tipo = Number(prompt("Informe o tipo de projeto: 1-Projeto Verde ou 2-Projeto Cultural"))

        titulo = String(prompt("Informe o título do projeto: "))

        coordenador = String(prompt("Informe o coordenador: "))

        nota = Number(prompt("Informe a nota do projeto (0 a 10): "))


        while(nota < 0 || nota > 10) {

            nota = Number(prompt("Nota inválida! Informe uma nota entre 0 e 10:"))
        }


        if(tipo == 1) {

            let projeto = new ProjetoVerde(titulo, coordenador, nota)

            projetos.push(projeto)

            somaNotas += projeto.getNota()
        }

        else if(tipo == 2) {

            let projeto = new ProjetoCultural(titulo, coordenador, nota)

            projetos.push(projeto)

            somaNotas += projeto.getNota()
        }


        op = String(prompt("Deseja cadastrar outro projeto? (S-Sim ou N-Não)")).toUpperCase()
    }


    let media = 0

    if(projetos.length > 0) {

        media = somaNotas / projetos.length
    }


    window.alert(`Média das notas: ${media.toFixed(2)}`)

    window.alert("Projetos acima da média:")


    for(let i = projetos.length - 1; i >= 0; i--) {

        if(projetos[i].getNota() > media) {

            window.alert(projetos[i].identificar())
        }
    }
}