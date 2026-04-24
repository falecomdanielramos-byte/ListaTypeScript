// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

let num:number = Number(prompt("Informe um numero para fazer os aninhados: "))

function numero(){
    for(let i:number=0;i = num;i++){
        let anin = "*"+i
        console.log(anin)
    }
}