// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.



export function questao27P(): void {

    abstract class Equipamento {

        private _tombamento: number
        private _descricao: string

        constructor(
            tombamento: number,
            descricao: string
        ) {
            this._tombamento = tombamento
            this._descricao = descricao
        }

        public getTombamento(): number {
            return this._tombamento
        }

        public getDescricao(): string {
            return this._descricao
        }

        abstract autoInspecao(): void
    }


    class Computador extends Equipamento {

        private _ram: number

        constructor(
            tombamento: number,
            descricao: string,
            ram: number
        ) {
            super(tombamento, descricao)
            this._ram = ram
        }

        autoInspecao(): void {
            window.alert(
                "===== FICHA DO COMPUTADOR =====\n"
                + "Tombamento: " + this.getTombamento()
                + "\nDescrição: " + this.getDescricao()
                + "\nMemória RAM: " + this._ram + " GB"
            )
        }

        get ram(): number {
            return this._ram
        }

        set ram(ram: number) {
            this._ram = ram
        }
    }


    class Roteador extends Equipamento {

        private _portas: number

        constructor(
            tombamento: number,
            descricao: string,
            portas: number
        ) {
            super(tombamento, descricao)
            this._portas = portas
        }

        autoInspecao(): void {
            window.alert(
                "===== FICHA DO ROTEADOR =====\n"
                + "Tombamento: " + this.getTombamento()
                + "\nDescrição: " + this.getDescricao()
                + "\nQuantidade de portas: " + this._portas
            )
        }

        get portas(): number {
            return this._portas
        }

        set portas(portas: number) {
            this._portas = portas
        }
    }


    let tombamento: number
    let descricao: string
    let op: number
    let continuar = ""

    let computador: Computador
    let roteador: Roteador

    let equipamentos: Equipamento[] = []


    while(continuar != "N") {

        op = Number(prompt(
            "Informe o tipo de equipamento: 1-Computador ou 2-Roteador"
        ))

        while(op != 1 && op != 2) {
            window.alert("Tipo de equipamento inválido")

            op = Number(prompt(
                "Informe o tipo de equipamento: 1-Computador ou 2-Roteador"
            ))
        }

        tombamento = Number(prompt(
            "Informe o número de tombamento: "
        ))

        while(tombamento <= 0 || isNaN(tombamento)) {
            window.alert("Número de tombamento inválido")

            tombamento = Number(prompt(
                "Informe o número de tombamento: "
            ))
        }

        descricao = String(prompt(
            "Informe a descrição do equipamento: "
        ))

        while(descricao == "") {
            window.alert("A descrição não pode ficar vazia")

            descricao = String(prompt(
                "Informe a descrição do equipamento: "
            ))
        }


        if(op == 1) {

            let ram = Number(prompt(
                "Informe a quantidade de memória RAM em GB: "
            ))

            while(ram <= 0 || isNaN(ram)) {
                window.alert("Quantidade de RAM inválida")

                ram = Number(prompt(
                    "Informe a quantidade de memória RAM em GB: "
                ))
            }

            computador = new Computador(
                tombamento,
                descricao,
                ram
            )

            equipamentos.push(computador)
        }

        else if(op == 2) {

            let portas = Number(prompt(
                "Informe a quantidade de portas: "
            ))

            while(portas <= 0 || isNaN(portas)) {
                window.alert("Quantidade de portas inválida")

                portas = Number(prompt(
                    "Informe a quantidade de portas: "
                ))
            }

            roteador = new Roteador(
                tombamento,
                descricao,
                portas
            )

            equipamentos.push(roteador)
        }


        continuar = String(prompt(
            "Deseja cadastrar outro equipamento? (S-Sim ou N-Não)"
        )).toUpperCase()
    }


    window.alert("===== INVENTÁRIO DOS EQUIPAMENTOS =====")

    for(let equipamento of equipamentos) {
        equipamento.autoInspecao()
    }
}
