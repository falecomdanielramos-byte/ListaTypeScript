// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let mensagem:number=0;
let nu1:number = Number(prompt("Informe um numero: "))
let nu2:number = Number(prompt("Iforme outro numero: "))


let op:string = String(prompt("Informe a operação: soma,subtração,multiplicação,divisão")).toLowerCase()


switch (op){
    case "soma":
        mensagem = nu1 + nu2;
    break;

    case "subração":
        mensagem = nu1 - nu2;
    break;

    case "multiplicação":
        mensagem = nu1 * nu2;
    break;

    case "divisão":
        mensagem = nu1 / nu2;
    break;
}
console.log(`${mensagem}`);