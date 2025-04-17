"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
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
exports.Usuario = Usuario;
