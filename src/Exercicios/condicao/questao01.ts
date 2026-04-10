// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo


function digito(){
    let numero:number = Number(prompt("Informe um numero: "))

    if(numero%2 == 0){
        console.log("Esse numero e Par: "+numero)
}else{
    console.log("Esse numero e Impar: "+numero)
}
if(numero > 0){
    console.log("O numero e positivo: "+numero)
}else{
    console.log("O numero e negativo: "+numero)
}
}