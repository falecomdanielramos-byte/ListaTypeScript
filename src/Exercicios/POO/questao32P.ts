// 32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos
// privados nickname e pontuacao (iniciada em zero), sendo pontuação acessível somente pelo método
// realizarMissao() — nunca diretamente. JogadorComum ganha 100 pontos por missão.
// JogadorPremium sobrescreve realizarMissao() e acumula 150 pontos (100 + 50% de bônus). O
// programa solicita ao usuário o tipo e o apelido de cada jogador. A cada rodada, o usuário informa qual
// jogador realizou uma missão. Ao final do torneio, o programa exibe a classificação completa e destaca
// quem ultrapassou 1.000 pontos.
// Requisitos mínimos:
// • pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
// • JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
// • Getter getPontuacao() para leitura controlada.
// • Loop de rodadas com condição de parada por comando do usuário.
// • Exibição final com classificação e destaque para campeões.



export function questao32P(): void {

    abstract class Jogador {

        private _nickname: string
        private _pontuacao: number

        constructor(
            nickname: string
        ) {
            this._nickname = nickname
            this._pontuacao = 0
        }

        public getNickname(): string {
            return this._nickname
        }

        public getPontuacao(): number {
            return this._pontuacao
        }

        abstract realizarMissao(): void

        protected adicionarPontos(pontos: number): void {
            this._pontuacao += pontos
        }
    }


    class JogadorComum extends Jogador {

        realizarMissao(): void {
            this.adicionarPontos(100)
        }
    }


    class JogadorPremium extends Jogador {

        realizarMissao(): void {
            this.adicionarPontos(150)
        }
    }


    let nickname: string
    let op: number
    let continuar = ""

    let jogadorComum: JogadorComum
    let jogadorPremium: JogadorPremium

    let jogadores: Jogador[] = []


    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de jogador: 1-Comum ou 2-Premium"
        ))

        nickname = String(prompt(
            "Informe o nickname do jogador: "
        ))

        if(op == 1) {

            jogadorComum = new JogadorComum(nickname)

            jogadores.push(jogadorComum)
        }

        else if(op == 2) {

            jogadorPremium = new JogadorPremium(nickname)

            jogadores.push(jogadorPremium)
        }

        continuar = String(prompt(
            "Deseja cadastrar outro jogador? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    continuar = ""

    while(continuar != "N") {

        let nomeMissao = String(prompt(
            "Informe o nickname do jogador que realizou a missão: "
        ))

        let encontrou = false

        for(let jogador of jogadores) {

            if(jogador.getNickname() == nomeMissao) {

                jogador.realizarMissao()

                window.alert(
                    jogador.getNickname()
                    + " realizou uma missão e agora possui "
                    + jogador.getPontuacao()
                    + " pontos."
                )

                encontrou = true
            }
        }

        if(encontrou == false) {
            window.alert("Jogador não encontrado")
        }

        continuar = String(prompt(
            "Deseja registrar outra missão? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    window.alert("===== CLASSIFICAÇÃO FINAL =====")

    for(let jogador of jogadores) {

        if(jogador.getPontuacao() > 1000) {

            window.alert(
                "CAMPEÃO: "
                + jogador.getNickname()
                + " - Pontuação: "
                + jogador.getPontuacao()
            )
        }

        else {

            window.alert(
                "Jogador: "
                + jogador.getNickname()
                + " - Pontuação: "
                + jogador.getPontuacao()
            )
        }
    }
}
