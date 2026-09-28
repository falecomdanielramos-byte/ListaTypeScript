// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function questao05P(): void {

    class Pessoa {

        nome: string
        idade: number
        peso: number
        altura: number

        constructor(
            N: string,
            I: number,
            P: number,
            A: number
        ) {
            this.nome = N
            this.idade = I
            this.peso = P
            this.altura = A
        }

        Envelhecer() {

            this.idade++

            if(this.idade < 21) {
                this.altura = this.altura + 0.5
            }
        }

        Engordar() {
            this.peso = this.peso + 1
        }

        Emagrecer() {
            this.peso = this.peso - 1
        }

        Crescer() {
            if(this.idade < 21) {
                this.altura = this.altura + 0.5
            }
        }

        Exibir(): void {
            window.alert(
                `A pessoa tem | Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.peso} | Altura: ${this.altura}`
            )
        }
    }


    let nome: string
    let idade: number
    let peso: number
    let altura: number

    nome = String(prompt("Informe o nome da pessoa: "))
    idade = Number(prompt("Informe a idade da pessoa: "))
    peso = Number(prompt("Informe o peso da pessoa: "))
    altura = Number(prompt("Informe a altura da pessoa: "))

    let pessoa = new Pessoa(
        nome,
        idade,
        peso,
        altura
    )

    pessoa.Exibir()
}
