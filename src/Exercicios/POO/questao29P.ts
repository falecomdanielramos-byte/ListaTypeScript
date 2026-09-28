// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.


export function questao29P(): void {

    abstract class Obra {

        private _titulo: string
        private _autor: string
        private _diasAtraso: number

        constructor(
            Tit: string,
            Aut: string,
            DiasAts: number
        ) {
            this._titulo = Tit
            this._autor = Aut
            this._diasAtraso = DiasAts
        }

        public getTitulo(): string {
            return this._titulo
        }

        public getAutor(): string {
            return this._autor
        }

        public getDiasAtraso(): number {
            return this._diasAtraso
        }

        abstract registrarAtraso(): number
    }


    class LivroFisico extends Obra {

        registrarAtraso(): number {
            return this.getDiasAtraso() * 2.50
        }
    }


    class ArtigoDigital extends Obra {

        registrarAtraso(): number {
            window.alert(`Advertência virtual para o artigo: ${this.getTitulo()}`)
            return 0
        }
    }


    let titulo: string
    let autor: string
    let diasAtraso: number
    let op: number
    let continuar = ""

    let livro: LivroFisico
    let artigo: ArtigoDigital

    let obras: Obra[] = []

    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de obra: 1-Livro Físico ou 2-Artigo Digital"
        ))

        titulo = String(prompt(
            "Informe o título da obra: "
        ))

        autor = String(prompt(
            "Informe o autor da obra: "
        ))

        diasAtraso = Number(prompt(
            "Informe a quantidade de dias de atraso: "
        ))


        if(op == 1) {

            livro = new LivroFisico(titulo, autor, diasAtraso)

            obras.push(livro)
        }

        else if(op == 2) {

            artigo = new ArtigoDigital(titulo, autor, diasAtraso)

            obras.push(artigo)
        }


        continuar = String(prompt(
            "Deseja cadastrar outra obra? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    let totalMultas = 0

    for(let obra of obras) {

        let multa = obra.registrarAtraso()

        totalMultas += multa

        if(multa > 0) {
            window.alert(`Livro: ${obra.getTitulo()}`)
            window.alert(`Multa: R$ ${multa.toFixed(2)}`)
        }
    }


    window.alert(`Total de multas: R$ ${totalMultas.toFixed(2)}`)
}