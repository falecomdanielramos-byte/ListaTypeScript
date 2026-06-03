// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function questao03R():void{
    let op:number = Number(prompt("Quer iniciar o Programa? (-1 Para Fechar)"))


    let MaiorSal:number=0,Sal_total:number=0,horas_trab:number=0,salario_hr:number=0,total:number=0,percenF:number=0,percenM:number=0
    let contF:number=0,contM:number=0
    let nome:string="",sexo:string="",MaiorNome:string=""
        
        while(op != -1){

            nome = String(prompt("Informe o nome do funcionario: "))
            horas_trab = Number(prompt("Informe a quantidade de Horas Trabanhadas: "))
            salario_hr = Number(prompt("Informe o salário por hora: "))
            sexo = String(prompt("Informe o sexo do funcionario:(F - Femimino & M - Masculino) ")).toLocaleUpperCase()

            op = Number(prompt("Quer continuar?? (-1 para Fechar)"))
            total = total + salario_hr
            Sal_total = salario_hr * horas_trab
            

        if(MaiorSal < Sal_total){

                MaiorSal = salario_hr
                MaiorNome = nome

            }
        if(sexo == "F"||sexo == "FEMININO" ){
            contF++
        }else if(sexo == "M"||sexo == "MASCULINO"){
            contM++
        }

        

        }


        percenF = contF/100
        percenM = contM/100


        window.alert(`O salário total dos funcionarios é de: ${total}`);
        window.alert(`O funcionario: ${MaiorNome} é o funcionario com o salário de: ${MaiorSal}`);
        window.alert(`O número de funcionarios Masculinos é de: ${contM} é os Feminios é de: ${contF}`)
        window.alert(`O percentual de funcionarios Masculinos é de: ${percenM} é o dos Femininos é de: ${percenF}`)
        


        
    





}