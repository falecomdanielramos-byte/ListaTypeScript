//4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
//local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
//necessárias para o local.


class retengulo{

Base:number
Altura:number

constructor(B:number,A:number){
this.Base=B
this.Altura=A
}
calcularArea():void{
	return this.Base*this.Altura
}
calcularPerimetro():void{
	return 2*(this.Base+this.Altura)
}

Exigir():void{
window.alert(`A `)
}

}