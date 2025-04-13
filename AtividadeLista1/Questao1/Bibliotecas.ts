import { Livro } from "./Livros";
import { Usuario } from "./Usuarios";

export class Biblioteca {
  livros: Livro[] = [];
  usuarios: Usuario[] = [];

  public adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }

  public adicionarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  public emprestarLivro(livro: Livro, usuario: Usuario) {
    // criando variaveis e passando como paramentro para a lista
    const livroExiste = this.livros.includes(livro);
    const usuarioExiste = this.usuarios.includes(usuario);

    // verificando se existe ou não
    if (livroExiste && usuarioExiste) {
      console.log(
        `O livro "${livro.Titulo}" foi emprestado para o usuário ${usuario.Nome}.`
      );
    } else {
      if (!livroExiste && !usuarioExiste) {
        console.log("Livro e usuário não encontrados na biblioteca.");
      } else if (!livroExiste) {
        console.log("Livro não encontrado na biblioteca.");
      } else {
        console.log("Usuário não encontrado na biblioteca.");
      }
    }
  }
}
