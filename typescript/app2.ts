class Carro {
    private modelo: string 
    private nummeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.nummeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade += 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}

class Concessionaria{
    private endereco: string =''
    private listaDecarros: any
    
    constructor(endereco: string){
        this.endereco = endereco
    }

    public FornecerEndereco(): string {
        return this.endereco
    }

    public MostrarListaDeCarros(): any{
        return this.listaDecarros
    }

}

class Pessoa{
    private nome: string 
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public DizerNome(): string{
        return this.nome
    }

    public DizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public ComprarCarro(carro: any): void{
        this.carro = carro
    }

    public DizerCarroQueTem(): any{
        return this.carro
    }
}

let pessoa = new Pessoa('jose', 'veloster')
console.log(pessoa.DizerCarroPreferido())