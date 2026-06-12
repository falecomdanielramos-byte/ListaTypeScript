// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function questao05P():void{

 class Pessoa{ 

    nome:string
    idade:number
    peso:number
    altura:number


    constructor(
        N:string,
        I:number,
        P:number,
        A:number
    ){
        this.nome=N
        this.idade=I
        this.peso=P
        this.altura=A
    }

    Envelhecer(NovaAltura:number){
        if(idade<21){

            NovaAltura = altura + 0.5
            this.altura=NovaAltura
        }
    }
    Engordar(){}
    Emagrecer(){}
    Crescer(){}

    Exibir():void{
        window.alert(`A pessoa tem | Nome: ${nome} | Idade: ${idade} | Peso: ${peso} | Altura: ${altura}`)
    }

 }


let nome:string,idade:number,peso:number,altura:number

nome = String(prompt("Informe o nome da pessoa: "))
idade = Number(prompt("Informe a idade da pessoa: "))
peso = Number(prompt("Informe o peso da pessoa: "))
altura = Number(prompt("Informe a altura da pessoa: "))

let pessoa = new Pessoa(nome,idade,peso,altura)

pessoa.Exibir()

}