"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    get Titulo() {
        return this.titulo;
    }
    get Autor() {
        return this.autor;
    }
    get AnoPublicacao() {
        return this.anoPublicacao;
    }
}
exports.Livro = Livro;
