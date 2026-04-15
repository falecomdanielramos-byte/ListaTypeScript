// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total


let soma = 0,quanti = 0


while(true){
        let numero:number = Number(prompt("Informe os números {0 para sair}"))

        if(numero == 0){
            break
        }

        quanti++
        soma = soma + numero
}
console.log(`A Quantidade dos números foi: ${quanti}`)
console.log(`A Soma dos números foi: ${soma}`)