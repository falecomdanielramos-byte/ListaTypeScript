// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade


export function questao10P():void{

class Bichinho_Virtual{
    
    nome:string
    fome:number
    saude:number
    idade:number

    constructor(
        No:string,
        Fo:number,
        Sau:number,
        Ida:number
    ){
        this.nome=No
        this.fome=Fo
        this.saude=Sau
        this.idade=Ida
    }


    AlterarNome(){}
    Fome(){}
    Saude(){}
    Idade(){}



}

let nome:string,fome:number,saude:number,idade:number
let continuar=""
continuar = String(prompt("Deseja iniciar ? (S-Sim ou N-Não)"))

while( continuar != "N"){

    nome = String(prompt("Informe o nome do Tamagushi: "))
    fome = Number(prompt("Informe a fome do Tamagushi: (1 a 10): "))
    saude = Number(prompt("Informe a saude do Tamagushi: (1 a 10): "))
    idade = Number(prompt("Informe a idade do Tamagushi: "))
    continuar = String(prompt("Deseja continuar? "))




    

}







}