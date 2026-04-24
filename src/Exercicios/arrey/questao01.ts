// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

let lista = [] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let Npar = [] = lista.filter(n => n%2 === 0)
let Nimpar = [] = lista.filter(n => n%2 !== 0)
let multi = [] = lista.filter(n => n%2 === 0 || n%3 === 0 || n%4 === 0)
let lista_reversa = [] = [...lista].reverse

console.log(`Números pares: ${Npar}`)
console.log(`Números impares: ${Nimpar}`)
console.log(`Números Múltiplos de 2,3 e 4: ${multi}`)
console.log(`Números Lista Reversa: ${lista_reversa}`)