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
  new Usuario("Aline", 1),
  new Usuario("Bruno", 2),
  new Usuario("Carla", 3),
  new Usuario("Daniel", 4),
  new Usuario("Eduarda", 5),
];

usuarios.forEach((usuario) => biblioteca.adicionarUsuario(usuario));

// Realizando 4 empréstimos
const emprestar = (tituloLivro: string, nomeUsuario: string) => {
  const livro = livros.find((Tl) => Tl.Titulo === tituloLivro);
  const usuario = usuarios.find((Nu) => Nu.Nome === nomeUsuario);

  if (livro && usuario) {
    biblioteca.emprestarLivro(livro, usuario);
  } else {
    console.log(`Erro ao emprestar: Livro ou usuário não encontrado.`);
  }
};

emprestar("1984", "Aline");
emprestar("O Senhor dos Anéis", "Bruno");
emprestar("Harry Potter", "Carla");
emprestar("O Hobbit", "Daniel");
