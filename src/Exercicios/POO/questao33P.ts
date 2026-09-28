// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
// possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
// que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
// ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
// informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
// registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
// recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.
// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.

export function questao33P(): void {

    abstract class Obra {

        private _titulo: string
        private _autor: string

        constructor(
            Tit: string,
            Aut: string
        ) {
            this._titulo = Tit
            this._autor = Aut
        }

        public getTitulo(): string {
            return this._titulo
        }

        public getAutor(): string {
            return this._autor
        }

        abstract registrarAtraso(diasDeAtraso: number): number
    }


    class LivroFisico extends Obra {

        registrarAtraso(diasDeAtraso: number): number {

            let multa = diasDeAtraso * 2.50

            return multa
        }
    }


    class ArtigoDigital extends Obra {

        registrarAtraso(diasDeAtraso: number): number {

            window.alert(
                "Advertência: o artigo digital "
                + this.getTitulo()
                + " foi devolvido com "
                + diasDeAtraso
                + " dias de atraso."
            )

            return 0
        }
    }


    let titulo: string
    let autor: string
    let dias: number
    let op: number
    let continuar = ""

    let livro: LivroFisico
    let artigo: ArtigoDigital

    let obras: Obra[] = []

    let totalMultas = 0


    while (continuar != "N") {

        op = Number(prompt(
            "Informe o tipo da obra: 1-Livro Físico ou 2-Artigo Digital"
        ))

        titulo = String(prompt(
            "Informe o título da obra: "
        ))

        autor = String(prompt(
            "Informe o autor da obra: "
        ))

        dias = Number(prompt(
            "Informe a quantidade de dias de atraso: "
        ))


        if (op == 1) {

            livro = new LivroFisico(
                titulo,
                autor
            )

            obras.push(livro)
        }

        else if (op == 2) {

            artigo = new ArtigoDigital(
                titulo,
                autor
            )

            obras.push(artigo)
        }


        continuar = String(prompt(
            "Deseja cadastrar outra devolução? (S-Sim ou N-Não)"
        )).toUpperCase()


        if (continuar == "N") {

            for (let obra of obras) {

                let multa = obra.registrarAtraso(dias)

                totalMultas += multa
            }
        }
    }


    window.alert(
        "Total de multas a serem recolhidas: R$ "
        + totalMultas.toFixed(2)
    )
}
