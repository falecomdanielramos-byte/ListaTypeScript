// 2. Desenvolva a tabuada de um número usando for.

export function questao02R():void{
    let nu:number=Number(prompt("Informe um número: "))
    let op:number=Number(prompt("Informe a operação: 1-Soma;2-subração;3-múltiplicoção;4-divisão. "))

    window.alert(`Tabuada de ${nu}`)

    if(op == 1){
        for(let i:number = 1;i <= 10;i++){
            let tabe = nu + i
                window.alert(`Adição: ${nu} + ${i} = ${tabe}`)
    }
    }else if(op == 2){
        for(let i:number = 1;i <= 10;i++){
            let tabe = nu - i
                window.alert(`Subtração: ${nu} - ${i} = ${tabe}`)
    }
    }else if(op == 3){
        for(let i:number = 1;i <= 10;i++){
            let tabe = nu * i
                window.alert(`Múltiplicação: ${nu} * ${i} = ${tabe}`)
    }
    }else if(op == 4){
        for(let i:number = 1;i <= 10;i++){
            let tabe = nu / i
                window.alert(`Divisão: ${nu} / ${i} = ${tabe}`)
    }
    }else{
        window.alert("Essa opção ésta invalida tente novamente...")
    }
}
