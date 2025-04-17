"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    get Nome() {
        return this.nome;
    }
    get Endereco() {
        return this.endereco;
    }
}
exports.Cliente = Cliente;
