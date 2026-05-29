// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function questao01P():void{

class Bola {

    cor:string
    circunferencia:number
    material:string

    constructor(
        coloraçao:string,
        circulo:number,
        matria:string
    ){
        this.cor=coloraçao
        this.circunferencia=circulo
        this.material=matria
    }

    MudarCor(NovaCor:string):void{
        NovaCor=String(prompt("Informe a nova cor: "))
        this.cor=NovaCor
    }


    MostraCor():void{
        window.alert(`Nova cor é: ${this.cor}`)
    }
}


}