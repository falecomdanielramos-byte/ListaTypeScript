//4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
//local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
//necessárias para o local.

export function questao04P():void{
	
class Local{

Base:number
Altura:number

constructor(B:number,A:number){
this.Base=B
this.Altura=A
}
	calcularArea():number{
		return this.Base*this.Altura
	}
	calcularPerimetro():number{
		return 2*(this.Base+this.Altura)
	}


}

let Altura:number,Base:number

Base= Number(prompt("Informe a base do local: "))
Altura = Number(prompt("Informe a altura do local: "))


let local = new Local(Base,Altura)


window.alert(`A quantidade necessaria de pisos é: ${local.calcularArea()} `)
window.alert(`A quantidade necessaria de rodapés é: ${local.calcularPerimetro()} `)
}