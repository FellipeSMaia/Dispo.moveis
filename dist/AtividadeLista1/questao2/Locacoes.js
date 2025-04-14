"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    constructor(cliente, filmes) {
        this.filmesAlugados = [];
        this.cliente = cliente;
        this.filmesAlugados = filmes;
    }
    alugarFilme(filme) {
        this.filmesAlugados.push(filme);
        console.log(`Filme "${filme.Titulo}" alugado por ${this.cliente.Nome}.`);
    }
    exibirFilmesAlugados() {
        console.log(`Filmes alugados por ${this.cliente.Nome}:`);
        if (this.filmesAlugados.length === 0) {
            console.log("Nenhum filme alugado.");
        }
        else {
            this.filmesAlugados.forEach((filme, index) => {
                console.log(`${index + 1}. ${filme.Titulo}`);
            });
        }
    }
}
exports.Locacao = Locacao;
