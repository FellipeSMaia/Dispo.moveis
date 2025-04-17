// Aluno: Fellipe Souza Maia

export class Cliente {
  private nome: string;
  private endereco: string;

  constructor(nome: string, endereco: string) {
    this.nome = nome;
    this.endereco = endereco;
  }

  public get Nome(): string {
    return this.nome;
  }

  public get Endereco(): string {
    return this.endereco;
  }
}
