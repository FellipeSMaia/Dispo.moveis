"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livros_1 = require("./Livros");
const Usuarios_1 = require("./Usuarios");
const Bibliotecas_1 = require("./Bibliotecas");
// Criação da biblioteca
const biblioteca = new Bibliotecas_1.Biblioteca();
// Adicionando 10 livros
const livros = [
    new Livros_1.Livro("1984", "George Orwell", 1949),
    new Livros_1.Livro("Dom Casmurro", "Machado de Assis", 1899),
    new Livros_1.Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954),
    new Livros_1.Livro("A Revolução dos Bichos", "George Orwell", 1945),
    new Livros_1.Livro("Harry Potter", "J.K. Rowling", 1997),
    new Livros_1.Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943),
    new Livros_1.Livro("O Hobbit", "J.R.R. Tolkien", 1937),
    new Livros_1.Livro("O Alquimista", "Paulo Coelho", 1988),
    new Livros_1.Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881),
    new Livros_1.Livro("It: A Coisa", "Stephen King", 1986),
];
livros.forEach((livro) => biblioteca.adicionarLivro(livro));
// Adicionando 5 usuários
const usuarios = [
    new Usuarios_1.Usuario("Aline", 1),
    new Usuarios_1.Usuario("Bruno", 2),
    new Usuarios_1.Usuario("Carla", 3),
    new Usuarios_1.Usuario("Daniel", 4),
    new Usuarios_1.Usuario("Eduarda", 5),
];
usuarios.forEach((usuario) => biblioteca.adicionarUsuario(usuario));
// Realizando 4 empréstimos
// Realizando 4 empréstimos usando find()
const emprestar = (tituloLivro, nomeUsuario) => {
    const livro = livros.find((Tl) => Tl.Titulo === tituloLivro);
    const usuario = usuarios.find((Nu) => Nu.Nome === nomeUsuario);
    if (livro && usuario) {
        biblioteca.emprestarLivro(livro, usuario);
    }
    else {
        console.log(`Erro ao emprestar: Livro ou usuário não encontrado.`);
    }
};
emprestar("1984", "Aline");
emprestar("O Senhor dos Anéis", "Bruno");
emprestar("Harry Potter", "Carla");
emprestar("O Hobbit", "Daniel");
