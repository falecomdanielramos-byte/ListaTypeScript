// 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
// Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
// deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
// subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
// descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
// média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
// polimorfismo.
// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.



export function questao31P(): void {

    abstract class Projeto {

        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(
            titulo: string,
            coordenador: string,
            nota: number
        ) {
            this._titulo = titulo
            this._coordenador = coordenador
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

        public setNota(nota: number) {

            if(nota >= 0 && nota <= 10) {
                this._nota = nota
            }
            else {
                window.alert("Erro: a nota deve estar entre 0 e 10.")
            }
        }

        public abstract descricaoCategoria(): string
    }


    class ProjetoVerde extends Projeto {

        public descricaoCategoria(): string {
            return "Categoria: Projeto Verde - Plantio urbano"
        }
    }


    class ProjetoCultural extends Projeto {

        public descricaoCategoria(): string {
            return "Categoria: Projeto Cultural - Conscientização"
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

        tipo = Number(prompt(
            "Informe o tipo de projeto:\n" +
            "1 - Projeto Verde\n" +
            "2 - Projeto Cultural"
        ))

        titulo = String(prompt("Informe o título do projeto: "))
        coordenador = String(prompt("Informe o coordenador: "))
        nota = Number(prompt("Informe a nota do projeto (0 a 10): "))

        while(nota < 0 || nota > 10) {

            window.alert("Nota inválida! A nota deve estar entre 0 e 10.")

            nota = Number(prompt(
                "Informe novamente a nota do projeto:"
            ))
        }


        if(tipo == 1) {

            let projeto = new ProjetoVerde(
                titulo,
                coordenador,
                nota
            )

            projetos.push(projeto)
            somaNotas += projeto.getNota()
        }

        else if(tipo == 2) {

            let projeto = new ProjetoCultural(
                titulo,
                coordenador,
                nota
            )

            projetos.push(projeto)
            somaNotas += projeto.getNota()
        }


        op = String(prompt(
            "Deseja cadastrar outro projeto? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    let media = 0

    if(projetos.length > 0) {
        media = somaNotas / projetos.length
    }


    window.alert(
        "Média das notas: " + media.toFixed(2)
    )


    window.alert("Projetos acima da média:")

    for(let i = 0; i < projetos.length; i++) {

        if(projetos[i].getNota() > media) {

            window.alert(
                "Título: " + projetos[i].getTitulo() + "\n" +
                "Coordenador: " + projetos[i].getCoordenador() + "\n" +
                "Nota: " + projetos[i].getNota() + "\n" +
                projetos[i].descricaoCategoria()
            )
        }
    }
}