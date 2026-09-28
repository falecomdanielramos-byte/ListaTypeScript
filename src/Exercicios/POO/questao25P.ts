// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o

// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.


export function questao25P(): void {

    abstract class Assinatura {

        private _email: string
        private _valorPlano: number

        constructor(
            email: string,
            Valpl: number
        ) {
            this._email = email
            this._valorPlano = Valpl
        }

        public getEmail(): string {
            return this._email
        }

        public getValorPlano(): number {
            return this._valorPlano
        }

        abstract exibirContrato(): void
    }


    class AssinaturaPadrao extends Assinatura {

        exibirContrato(): void {
            window.alert(`E-mail: ${this.getEmail()}`)
            window.alert(`Plano: Padrão`)
            window.alert(`Telas simultâneas: 2`)
            window.alert(`Valor mensal: R$ ${this.getValorPlano().toFixed(2)}`)
        }
    }


    class AssinaturaPremium extends Assinatura {

        exibirContrato(): void {
            window.alert(`E-mail: ${this.getEmail()}`)
            window.alert(`Plano: Premium`)
            window.alert(`Telas simultâneas: 4`)
            window.alert(`Resolução: 4K`)
            window.alert(`Valor mensal: R$ ${this.getValorPlano().toFixed(2)}`)
        }
    }


    let email: string
    let valorPlano: number
    let op: number
    let continuar = ""

    let assinaturaPadrao: AssinaturaPadrao
    let assinaturaPremium: AssinaturaPremium

    let contratos: Assinatura[] = []


    while(continuar != "N") {

        op = Number(prompt("Informe o tipo de plano: 1-Padrão ou 2-Premium"))

        email = String(prompt("Informe o e-mail do usuário: "))

        valorPlano = Number(prompt("Informe o valor do plano mensal: "))


        if(op == 1) {

            assinaturaPadrao = new AssinaturaPadrao(email, valorPlano)

            contratos.push(assinaturaPadrao)
        }

        else if(op == 2) {

            assinaturaPremium = new AssinaturaPremium(email, valorPlano)

            contratos.push(assinaturaPremium)
        }


        continuar = String(prompt("Deseja cadastrar outro cliente? (S-Sim ou N-Não)")).toUpperCase()
    }


    let busca = String(prompt("Informe o e-mail do usuário que deseja buscar: "))

    let encontrado = false


    for(let contrato of contratos) {

        if(contrato.getEmail() == busca) {

            contrato.exibirContrato()

            encontrado = true
        }
    }


    if(encontrado == false) {

        window.alert(`Nenhum contrato encontrado para o e-mail: ${busca}`)
    }
}