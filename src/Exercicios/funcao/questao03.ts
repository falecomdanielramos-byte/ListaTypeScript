// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***


export function questao03(){
let num:number = Number(prompt("Informe um numero para fazer os aninhados: "))

function numero(){
    for(let i:number=1;i <= num;i++){
        let anin:string = ""

        for(let j:number=1;j <= i;j++){
            anin += "*"
        }
        console.log(anin)
    }
}
numero()
}