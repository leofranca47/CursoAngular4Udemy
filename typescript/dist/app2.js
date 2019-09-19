"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.nummeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = '';
        this.endereco = endereco;
    }
    Concessionaria.prototype.FornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.MostrarListaDeCarros = function () {
        return this.listaDecarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.DizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.DizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.ComprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.DizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('jose', 'veloster');
console.log(pessoa.DizerCarroPreferido());
