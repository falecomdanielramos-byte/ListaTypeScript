// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo


export function questao01():void{
    let numero:number = Number(prompt("Informe um numero: "))

    if(numero%2 == 0){
        window.alert(`Esse numero: ${numero} e Par`)
}else{
    window.alert(`Esse numero: ${numero} e Impar`)
}
if(numero > 0){
    window.alert(`O numero: ${numero} e Positivo`)
}else{
    window.alert(`O numero: ${numero} e negativo`)
}
}