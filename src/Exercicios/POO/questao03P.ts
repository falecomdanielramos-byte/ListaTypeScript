// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos: Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.


export function questao03P():void{

class Retangulo {

    LadoA:number=100
    LadoB:number=225

    constructor(A:number,B:number){
        this.LadoA=A
        this.LadoB=B
    }
    Mudar(NovoA:number,NovoB:number):void{
        NovoA=500
        this.LadoA=NovoA
        NovoB=30
        this.LadoB=NovoB
    }
    Exibir():void{
        window.alert(`O Valor dos lados é: LadoA: ${this.LadoA} | LadoB: ${this.LadoB}`)
        window.alert(`O calculo da area é: ${NovoA*NovoB}`)
        window.alert(`O calculo do Perímetro é: ${(NovoA+NovoB)*2}`)
    }
}
let NovoA:number,NovoB:number

NovoA=500
NovoB=30

let NovoRetangulo:Retangulo = new Retangulo(NovoA,NovoB)

NovoRetangulo.Exibir()


}