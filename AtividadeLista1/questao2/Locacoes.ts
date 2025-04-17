import { Filme } from "./Filmes";
import { Cliente } from "./Clientes";

export class Locacao {
  private cliente: Cliente;
  private filmesAlugados: Filme[] = [];

  constructor(cliente: Cliente, filmes: Filme[]) {
    this.cliente = cliente;
    this.filmesAlugados = filmes;
  }

  // método para alugar filmes
  public alugarFilme(filme: Filme): void {
    this.filmesAlugados.push(filme);
    console.log(`Filme "${filme.Titulo}" alugado por ${this.cliente.Nome}.`);
  }


  // método para exibir os filmes
  public exibirFilmesAlugados(): void {
    console.log(`Filmes alugados por ${this.cliente.Nome}:`);
    if (this.filmesAlugados.length === 0) {
      console.log("Nenhum filme alugado.");
    } else {
      this.filmesAlugados.forEach((filme, index) => {
        console.log(`${index + 1}. ${filme.Titulo}`);
      });
    }
  }
}
