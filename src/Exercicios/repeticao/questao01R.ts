// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total


let soma = 0,quanti = 0

export function questao01R():void{
    while(true){
            let numero:number = Number(prompt("Informe os números {0 para sair}"))

            if(numero == 0){
                break
            }

            quanti++
            soma = soma + numero
    }
    window.alert(`A Quantidade dos números foi: ${quanti}`)
    window.alert(`A Soma dos números foi: ${soma}`)
}