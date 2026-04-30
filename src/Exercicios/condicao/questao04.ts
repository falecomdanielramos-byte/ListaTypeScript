// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.


export function questao04():void{
    let nu1:number = Number(prompt("Informe o primeiro número: "))
    let nu2:number = Number(prompt("Informe o segundo número: "))

    if(nu1 == nu2){
        window.alert(`Os números são iguais. ${nu1} = ${nu2}`)
    }else if(nu1 > nu2){
        window.alert(`O Primeiro é maior. ${nu1} Maior que: ${nu2}`)
    }else{
        window.alert(`O segundo é maior. ${nu2} maior que ${nu1}`)
    }
}