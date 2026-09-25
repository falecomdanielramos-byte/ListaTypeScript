    // 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
    // Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
    // Mamíferos têm tipo de alimentação (ex: &quot;Carnívoro&quot;, &quot;Herbívoro”, ...). Para as aves precisa-se saber
    // se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
    // O Método &quot;Hora da Alimentação&quot; (Rotina Polimórfica): Crie uma função ou método executável
    // chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
    // animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
    // acionando o seu método emitirSom()


    export function questao16P(): void {


        abstract class Animal {


            private _nome: string
            private _especie: string
            private _idade: number
            private _sexo: string

            constructor(
                No: string,
                Esp: string,
                Idade: number,
                sexo: string
            ) {
                this._nome = No
                this._especie = Esp
                this._idade = Idade
                this._sexo = sexo
            }


            public getNome(): string {
                return this._nome
            }

            abstract emitirSom(): void
            abstract mover(): void
        }



        class Mamifero extends Animal {

            private _tipoAlimentacao: string;

            constructor(
                nome: string,
                especie: string,
                idade: number,
                sexo: string,
                tipoAlimentacao: string
            ) {
                super(nome, especie, idade, sexo);
                this._tipoAlimentacao = tipoAlimentacao;
            }

            emitirSom(): void {
                alert("O mamífero está emitindo seu som.");
            }

            mover(): void {
                alert("O mamífero está andando.");
            }
            get tipoAli():String{
            return this._tipoAlimentacao
            }
            set tipoAli(tipoAli:string){
                this._tipoAlimentacao = tipoAli
            }

        }
        


        class Ave extends Animal {

            private _migratoria: boolean

            constructor(
                nome: string,
                especie: string,
                idade: number,
                sexo: string,
                migratoria: boolean
            ) {
                super(nome, especie, idade, sexo)
                this._migratoria = migratoria
            }

            emitirSom(): void {
                window.alert("Ave canta.")
            }

            mover(): void {
                alert("Ave voa.")
            }
            get Migra():boolean{
                return this._migratoria
            }
            set Migra(Migra:boolean){
                this._migratoria = Migra
            }
        }

        let nome:string,especi:string,idade:number,sexo:string,op:number
        let mamifero:Mamifero,ave:Ave,continuar = ""
        let listaAnimais: Animal[] = []


    while(continuar != "N"){
        op = Number(prompt("Informe qual e a tipo do animal: 1-Mamifero ou 2-Ave"))

        nome = String(prompt("Informe o nome do animal: "))
        especi = String(prompt("Informe o nome da especi: "))
        idade = Number(prompt("Informe a idade do animal: "))
        sexo = String(prompt("Informe o sexo do animal: "))


        if(op == 1){
            let tipoAli = String(prompt("Informe qual e o tipo da alimentação do animal: "))
                listaAnimais.push(mamifero = new Mamifero(nome,especi,idade,sexo,tipoAli))
        }
        else if(op == 2){
            let Migra = Number(prompt("Informe se a Ave migra: 1-True ou 2-False"))
            if(Migra == 1){
            listaAnimais.push(ave = new Ave(nome,especi,idade,sexo,true))
        }
        else if(Migra == 2){
            listaAnimais.push(ave = new Ave(nome,especi,idade,sexo,false))
        }
        }

        continuar = String(prompt("Deseja cadastrar outro animal? S-Sim ou N-Não")).toUpperCase()
    }
    function simularHoraAlimentacao(listaAnimais: Animal[]): void {

            for (let animal of listaAnimais) {

                window.alert(
                    "O tratador está alimentando o animal: "
                    + animal.getNome()
                );

                animal.emitirSom()
            }
        }
        simularHoraAlimentacao(listaAnimais);
    }