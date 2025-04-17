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
    new Usuarios_1.Usuario("Ana", 22),
    new Usuarios_1.Usuario("Carlos", 30),
    new Usuarios_1.Usuario("Beatriz", 18),
    new Usuarios_1.Usuario("Daniel", 25),
    new Usuarios_1.Usuario("Fernanda", 27),
];
usuarios.forEach((usuario) => biblioteca.adicionarUsuario(usuario));
// Realizando 4 empréstimos
biblioteca.emprestarLivro(livros[0], usuarios[0]);
biblioteca.emprestarLivro(livros[3], usuarios[2]);
biblioteca.emprestarLivro(livros[5], usuarios[1]);
biblioteca.emprestarLivro(livros[9], usuarios[4]);
