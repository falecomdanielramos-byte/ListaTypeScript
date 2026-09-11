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


    AlterarNome(NovoNome:string){
        this.nome=NovoNome
    }
    AlterarFome(NovaFome:number){
        this.fome=NovaFome
    }
    AlterarSaude(NovaSaude:number){
        this.saude=NovaSaude
    }
    AlterarIdade(NovaIdade:number){
        this.idade=NovaIdade
    }
    Exibir():void{
        window.alert(`O Tamagushi: ${this.nome} | Possui a fome: ${this.fome} | Possui a saude: ${this.saude} | Pessui a idade: ${this.idade}`)
    }





}

let nome:string,fome:number,saude:number,idade:number
let continuar="",alter:number,ListaBichin:Bichinho_Virtual [] = []


while(continuar != "N"){

    

    nome = String(prompt("Informe o nome do Tamagushi: "))
    fome = Number(prompt("Informe a fome do Tamagushi: (1 a 10): "))
    saude = Number(prompt("Informe a saude do Tamagushi: (1 a 10): "))
    idade = Number(prompt("Informe a idade do Tamagushi: "))


    let Bichinho = new Bichinho_Virtual(nome,fome,saude,idade)

    ListaBichin.push(Bichinho)

    continuar = String(prompt("Deseja alterar? (S-Sim ou N-Não)"))

    if(continuar === "N"){
        break
    }

    else if(continuar === "S"){

    alter = Number(prompt("informe se deseja mudar algo: ( Alterar \n (1-Nome) \n (2-fome) \n (3-saude) \n (4-idade) )"))

    if(alter === 1){
        let NovoNome = String(prompt("Informe qual o novo nome do Tamagushi: "))
        Bichinho.AlterarNome(NovoNome)
    }
    else if(alter === 2){
        let NovaFome = Number(prompt("Informe qual e a nova fome do Tamagushi: "))
        Bichinho.AlterarFome(NovaFome)
    }
    else if(alter === 3){
        let NovaSaude = Number(prompt("Informe qual e a nova saude do Tamagushi: "))
        Bichinho.AlterarSaude(NovaSaude)
    }
    else if(alter === 4){
        let NovaIdade = Number(prompt("Informe qual e a nova idade do Tamagushi: "))
        Bichinho.AlterarIdade(NovaIdade)
    }
    else if(alter >=5 || alter <=0){ 
        window.alert(`INFORMAÇÂO INVALIDA....tente novamente.`)
        
    }
    }
   
    continuar = String(prompt("Deseja continuar? "))
}


}