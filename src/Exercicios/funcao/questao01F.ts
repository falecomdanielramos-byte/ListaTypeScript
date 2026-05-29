// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

export function questao01():void{

    
    let nu:number=Number(prompt("Informe um número: "))

    function somarAte(numero:number):number{            
        
        let soma:number=0

        for(let i:number = 1;i <= numero;i++){

            
            soma +=i
        }
        
        return soma
    }
    let resultado = somarAte(nu)
    
window.alert(`O resultado da soma é: ${resultado}`)

}