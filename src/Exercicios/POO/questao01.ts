// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor



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

    trocarCor(){
        console.log(``)
    }
    MostraCor(cor){
        console.log(`A cor da bola é:${cor}`)
    }
}

let novabola:Bola= new Bola()

let lista:Bola[] = []

let cor:string=String(prompt("Informe a cor da bola: "))

lista.push(cor)