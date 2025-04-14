"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    get Nome() {
        return this.nome;
    }
    get Idade() {
        return this.idade;
    }
}
exports.Cliente = Cliente;
