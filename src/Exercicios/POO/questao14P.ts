// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.


export function questao14P():void{

class Livro {

    public titulo:string
    public autor:string
    public ano:number
    private _dispo:boolean


constructor 
(
    Tit:string,
    Au:string,
    Ano:number,
    Dis:boolean
){
    this.titulo=Tit
    this.autor=Au
    this.ano=Ano
    this._dispo=Dis
}
get disponibilidade():boolean{
    return this._dispo
}
set disponibilidade(disponibilidade:boolean){
    this._dispo=disponibilidade
}

ExibirResumo(){
    if(this.disponibilidade === true){
    window.alert(`O Livro: ${this.titulo} | 
    Escrito pelo autor: ${this.autor} |
    Publicado no ano: ${this.ano} |
    Disponibilidade: ${this._dispo} ou Esta disponivel!`) 
}
else {
    window.alert(`O Livro: ${this.titulo} | 
    Escrito pelo autor: ${this.autor} |
    Publicado no ano: ${this.ano} |
    Disponibilidade: ${this._dispo} ou Não! Esta disponivel!`)
}
}

}

let Titulo:string,Autor:string,Ano:number,Disponibilidade:boolean
let ListaLibro:Livro [] = []

for(let i=0;i <= 5;i++){
    Titulo = String(prompt("Informe o titulo do livro: "))
    Autor = String(prompt("Informe o nome do autor do livro: "))
    Ano = Number(prompt("Informe qual ano de publicação do livro: "))
    let Valid = Number(prompt("Informe se o livro esta dispunivel ou não: (1-sim ou 2-não"))
    
    if (Valid === 1){
        Disponibilidade = true
    }else{
        Disponibilidade = false
    }

    let Cadastro = new Livro(Titulo,Autor,Ano,Disponibilidade)
    ListaLibro.push(Cadastro)
    
}
for(let Cadastro of ListaLibro){
    if (Cadastro.disponibilidade === true){
    Cadastro.ExibirResumo()
}
}

let buscarTitu = String(prompt("Informe O titulo do livro que desaja procurar: "))
let achou = false

for(let Cadastro of ListaLibro){

    
    if(Cadastro.titulo.toUpperCase()=== buscarTitu.toUpperCase()){
        achou = true
            if(Cadastro.disponibilidade === true){
                Cadastro.disponibilidade = false
                window.alert(`Emprestimo realizado com sucesso do Livro: ${Cadastro.titulo}`)

            }
            
            
            
            
            else{
                window.alert(`Ops livro: ${Cadastro.titulo} ja esta em emprestimo`)
            }

    }
}
if(achou === false){
        window.alert("perdão,o livro não foi encontrado no sistema.")
    }









}