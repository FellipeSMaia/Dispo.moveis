"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = titulo;
        this.duracao = duracao;
    }
    get Titulo() {
        return this.titulo;
    }
    get Genero() {
        return this.genero;
    }
    get Duracao() {
        return this.duracao;
    }
}
exports.Filme = Filme;
