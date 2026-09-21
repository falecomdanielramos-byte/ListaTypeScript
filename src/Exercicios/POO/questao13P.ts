// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function questao13P(): void {
  class Escola {
    public nome: string;
    private _nota1: number;
    private _nota2: number

    constructor(Al: string, No1: number, No2:number) {
      this.nome = Al;
      this._nota1 = No1;
      this._nota2 = No2
    }

    ExibirMedia() {
        let media = (this._nota1 + this._nota2)/2

        if(media >= 7){
            window.alert(`O aluno: ${this.nome} foi aprovado com: ${media.toFixed(2)}`)
        }
        else{
            window.alert(`O aluno: ${this.nome} foi reprovado com: ${media.toFixed(2)}`)
        }
    }

get not1():number{
    return this._nota1
}
set not1(Nota1:number){
    this._nota1=Nota1
}

get not2():number{
    return this._nota2
}
set not2(Nota2:number){
    this._nota2=Nota2
}

  }

  let Nome: string, Nota1: number, Nota2:number
  let continuar = "";
  while (continuar != "N") {

    Nome = String(prompt("Informe o nome do aluno: "))
    Nota1 = Number(prompt("Informe a 1º nota do aluno: "))
    Nota2 = Number(prompt("Informe a 2º nota do aluno: "))

    let aluno = new Escola(Nome,Nota1,Nota2)
    continuar = String(prompt("Deseja cadastrar um novo aluno? (S-Sim ou N-Não)")).toUpperCase()
    
    aluno.ExibirMedia()
  }
  
}
