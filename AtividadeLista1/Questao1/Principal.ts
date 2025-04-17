// Aluno: Fellipe Souza Maia

import { Livro } from "./Livros";
import { Usuario } from "./Usuarios";
import { Biblioteca } from "./Bibliotecas";

// Criação da biblioteca
const biblioteca = new Biblioteca();

// Adicionando 10 livros
const livros = [
  new Livro("1984", "George Orwell", 1949),
  new Livro("Dom Casmurro", "Machado de Assis", 1899),
  new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954),
  new Livro("A Revolução dos Bichos", "George Orwell", 1945),
  new Livro("Harry Potter", "J.K. Rowling", 1997),
  new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943),
  new Livro("O Hobbit", "J.R.R. Tolkien", 1937),
  new Livro("O Alquimista", "Paulo Coelho", 1988),
  new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881),
  new Livro("It: A Coisa", "Stephen King", 1986),
];

livros.forEach((livro) => biblioteca.adicionarLivro(livro));

// Adicionando 5 usuários
const usuarios = [
  new Usuario("Ana", 22),
  new Usuario("Carlos", 30),
  new Usuario("Beatriz", 18),
  new Usuario("Daniel", 25),
  new Usuario("Fernanda", 27),
];

usuarios.forEach((usuario) => biblioteca.adicionarUsuario(usuario));

// Realizando 4 empréstimos
biblioteca.emprestarLivro(livros[0], usuarios[0]);
biblioteca.emprestarLivro(livros[3], usuarios[2]);
biblioteca.emprestarLivro(livros[5], usuarios[1]);
biblioteca.emprestarLivro(livros[9], usuarios[4]);
