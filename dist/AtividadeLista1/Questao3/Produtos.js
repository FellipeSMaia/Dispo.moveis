"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get Nome() {
        return this.nome;
    }
    get Preco() {
        return this.preco;
    }
}
exports.Produto = Produto;
