// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function questao01P():void{

class Bola {

    cor:string=String("vermelho")
    circunferencia:number=Number(3500)
    material:string=String("Latex")

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
        NovaCor="verde"
        this.cor=NovaCor
    }


    MostraCor():void{
        window.alert(`Nova cor é: ${this.cor}`)
    }
    

}

let cor:string,circulo:number,matria:string


cor=String("verde")
circulo=Number(3500)
matria=String("Latex")

let novaBola:Bola = new Bola(cor,circulo,matria)

novaBola.MostraCor()

}