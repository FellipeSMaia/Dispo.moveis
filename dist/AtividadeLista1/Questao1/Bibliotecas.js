"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }
    // método para adicionar livros em um array
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    // método para adicionar usuarios em um array
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    emprestarLivro(livro, usuario) {
        // criando variaveis e passando como paramentro para a lista
        const livroExiste = this.livros.includes(livro);
        const usuarioExiste = this.usuarios.includes(usuario);
        // verificando se existe ou não
        if (livroExiste && usuarioExiste) {
            console.log(`O livro "${livro.Titulo}" foi emprestado para o usuário ${usuario.Nome}.`);
        }
        else {
            if (!livroExiste && !usuarioExiste) {
                console.log("Livro e usuário não encontrados na biblioteca.");
            }
            else if (!livroExiste) {
                console.log("Livro não encontrado na biblioteca.");
            }
            else {
                console.log("Usuário não encontrado na biblioteca.");
            }
        }
    }
}
exports.Biblioteca = Biblioteca;
