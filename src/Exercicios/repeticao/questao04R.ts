// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.


export function questao04():void{

    let x:number=Number(prompt("Informe a um numero: (-1 para Fechar)"))

let Qpar:number=0,Qimpar:number=0

    while(x != -1){

        
        if(x%2==0){
            Qpar++
        }else if(x%3==0){
            Qimpar++
        }
    }
window.alert(`A quantidade de números Pares é de: ${Qpar}`)
window.alert(`A quantidade de números Impares é de: ${Qimpar}`)


}