export function attEx():void{

class Cliente{
    //Atributos
    
    nome:string
    CPF:string
    email:string
    telefone:string
    score:number

    //Constructor
    constructor(
        nome:string,
        CPF:string,
        email:string,
        telefone:string,
        score:number){

            this.nome=nome
            this.CPF=CPF
            this.email=email
            this.telefone=telefone
            this.score=score
    }

}
let novoCliente:Cliente = new Cliente("Maria","0496658565471","maria@gmail.com","40028922",80030)

let lista:Cliente[] = []

}