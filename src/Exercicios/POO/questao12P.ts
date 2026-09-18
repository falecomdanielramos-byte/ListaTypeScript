// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function quest12P():void{
class Consecionaria{

    private _modelo_carro:string
    private _valor_diaria:number
    private _quant_dias:number


    constructor(
        Mod_Ca:string,
        Val_Di:number,
        Quant_Di:number
    ){
        this._modelo_carro=Mod_Ca
        this._valor_diaria=Val_Di
        this._quant_dias=Quant_Di
    }

ExibirResu():void{
    window.alert(`O cliente: ${this._modelo_carro} | Com o valor de: ${this._valor_diaria} a diaria | Por: ${this._quant_dias} dias`)
}

get Mod():string{
    return this._modelo_carro
}
set Mod(Mod:string){
    this._modelo_carro = Mod
}

get Valor():number{
    return this._valor_diaria
}
set Valor(Valor:number){
    this._valor_diaria = Valor
}




}
let Mod:string,Valor:number,Quant:number
let op=""
let ListaCarro:Consecionaria [] = []

while(op != "N"){

    Mod = String(prompt("Informe qual e o modelo do carro: "))
    Valor = Number(prompt("Informe qual e o valor para alugar o carro: "))
    Quant = Number(prompt("Informe quantos dias quer alugar o carro: "))

    op = String(prompt("Deseja Alugar um novo carro? (S-Sim ou N-Não)")).toUpperCase()
    let Cliente = new Consecionaria(Mod,Valor,Quant)
    ListaCarro.push(Cliente)



}
for(let Cliente of ListaCarro){
    Cliente.
}



}