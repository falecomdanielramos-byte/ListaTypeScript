// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function questao02P():void{

    class Quadrado {
        Tamanho_do_lado:number=35
        base:number

        constructor(T:number,B:number){
            this.Tamanho_do_lado=T
            this.base=B
        }
        MudarLado(Novolado:number):void{
            Novolado=50
            this.Tamanho_do_lado=Novolado
        }

        exibirResumo():void{
            window.alert(`O lado de Tamanho: ${this.Tamanho_do_lado} | a area calculada é: ${T*B}`)
        }

    }
    
let T:number,B:number

T=50
B=30

let novoQuadrado = new Quadrado(T,B)

novoQuadrado.exibirResumo()


}