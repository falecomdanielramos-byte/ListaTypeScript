// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.


export function questao19P(): void {

    class Sensor {

        private _codigo: number
        private _leitura: number

        constructor(
            codigo: number,
            leitura: number
        ) {
            this._codigo = codigo
            this._leitura = leitura
        }

        public getCodigo(): number {
            return this._codigo
        }

        public getLeitura(): number {
            return this._leitura
        }

        public setCodigo(codigo: number) {
            this._codigo = codigo
        }

        public setLeitura(leitura: number) {
            this._leitura = leitura
        }
    }


    class SensorTemperatura extends Sensor {

        public exibirLeitura(): string {
            return `Sensor: ${this.getCodigo()} - Leitura: ${this.getLeitura()} atm`
        }
        public alerta(): boolean {
            return this.getLeitura() > 40
        }
    }


    class SensorPressao extends Sensor {

        public exibirLeitura(): string {
            return `Sensor: ${this.getCodigo} - Leitura: ${this.setLeitura} atm`
        }

        public alerta(): boolean {
            return this.getLeitura() > 5
        }
    }


    let op = ""
    let tipo: number
    let codigo: number
    let leitura: number

    let sensores: Sensor[] = []
    let alertas: Sensor[] = []

    while(op != "N") {

        tipo = Number(prompt("Informe o tipo de sensor: 1-Temperatura ou 2-Pressão"))

        codigo = Number(prompt("Informe o código do sensor: "))
        leitura = Number(prompt("Informe a última leitura: "))

        if(tipo == 1) {

            let sensorTemperatura = new SensorTemperatura(codigo,leitura)

            sensores.push(sensorTemperatura)

        }

        else if(tipo == 2) {

            let sensorPressao = new SensorPressao(
                codigo,
                leitura
            )

            sensores.push(sensorPressao)
        }

        op = String(prompt("Deseja cadastrar outro sensor? (S-Sim ou N-Não)")).toUpperCase()
    }


    for(let sensor of sensores) {

        if(sensor instanceof SensorTemperatura) {

            if(sensor.alerta()) {
                alertas.push(sensor)
            }
        }

        else if(sensor instanceof SensorPressao) {

            if(sensor.alerta()) {
                alertas.push(sensor)
            }
        }
    }


    window.alert("Sensores que dispararam alerta de perigo:")

    for(let sensor of alertas) {

        if(sensor instanceof SensorTemperatura) {
            window.alert(sensor.exibirLeitura())
        }

        else if(sensor instanceof SensorPressao) {
            window.alert(sensor.exibirLeitura())
        }
    }
}