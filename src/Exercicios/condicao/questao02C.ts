// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera

export function questao02C():void{

    let mes:number = Number(prompt("Informe a estação do mês: (1)janeiro,(2)fevereiro,(3)março,(4)abril,(5)maio,(6)junho,(7)julho,(8)agosto,(9)setembro,(10)outubro,(11)novembro,(12)dezembro"))

    if(mes == 1){
        console.log(`A estação do ano correspondo ao mês: janeiro ${mes}:Verão`)
    }else if(mes == 2){
        console.log(`A estação do ano correspondo ao mês: fevereiro ${mes}:Verão`)
    }else if(mes == 3){
        console.log(`A estação do ano correspondo ao mês: março ${mes}:Verão`)
    }else if(mes == 4){
        console.log(`A estação do ano correspondo ao mês: abril ${mes}:Outono`)
    }else if(mes == 5){
        console.log(`A estação do ano correspondo ao mês: maio ${mes}:Outono`)
    }else if(mes == 6){
        console.log(`A estação do ano correspondo ao mês: junho ${mes}:Outono`)
    }else if(mes == 7){
        console.log(`A estação do ano correspondo ao mês: julho ${mes}:Inverno`)
    }else if(mes == 8){
        console.log(`A estação do ano correspondo ao mês: agosto ${mes}:Inverno`)
    }else if(mes == 9){
        console.log(`A estação do ano correspondo ao mês: setembro ${mes}:Inverno`)
    }else if(mes == 10){
        console.log(`A estação do ano correspondo ao mês: outubro ${mes}:Primavera`)
    }else if(mes == 11){
        console.log(`A estação do ano correspondo ao mês: novembro ${mes}:Primavera`)
    }else if(mes == 12){
        console.log(`A estação do ano correspondo ao mês: dezembro ${mes}:Primavera`)
    }

}