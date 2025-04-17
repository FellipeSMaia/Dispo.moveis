export class Usuario {
  private nome: string;
  private idade: Number;

  constructor(nome: string, idade: Number) {
    this.nome = nome;
    this.idade = idade;
  }

  public get Nome(): string {
    return this.nome;
  }

  public get Idade(): Number {
    return this.idade;
  }

}
