// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function questao02():void{

    class Quadrado {
        Tamanho_do_lado:number
        base:number


        constructor(T:number,B:number){
            this.Tamanho_do_lado=T
            this.base=B
        }

        exibirResumo():void{

        }

 
    }
    

let T:number,B:number

T=Number(prompt("Informe o valor do lado do Quadrado: "))
B=Number(prompt(""))




}