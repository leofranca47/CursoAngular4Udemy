"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.nummeroDePortas = numeroDePortas;
    }
    acelerar(v = 10) {
        this.velocidade += v;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco) {
        this.endereco = '';
        this.endereco = endereco;
    }
    FornecerEndereco() {
        return this.endereco;
    }
    MostrarListaDeCarros() {
        return this.listaDecarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    DizerNome() {
        return this.nome;
    }
    DizerCarroPreferido() {
        return this.carroPreferido;
    }
    ComprarCarro(carro) {
        this.carro = carro;
    }
    DizerCarroQueTem() {
        return this.carro;
    }
}
let pessoa = new Pessoa('jose', 'veloster');
console.log(pessoa.DizerCarroPreferido());
let carroA = new Carro("celta", 4);
carroA.acelerar(60);
console.log(carroA);
console.log(carroA.velocidadeAtual());
