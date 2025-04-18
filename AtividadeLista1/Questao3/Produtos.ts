// Aluno: Fellipe Souza Maia

export class Produto {
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  public get Nome(): string {
    return this.nome;
  }

  public get Preco(): number {
    return this.preco;
  }
}
