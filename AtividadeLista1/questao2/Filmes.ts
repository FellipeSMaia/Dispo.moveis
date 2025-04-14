export class Filme {
  private titulo: string;
  private genero: string;
  private duracao: Number;

  constructor(titulo: string, genero: string, duracao: Number) {
    this.titulo = titulo;
    this.genero = titulo;
    this.duracao = duracao;
  }

  public get Titulo(): string {
    return this.titulo;
  }

  public get Genero(): string {
    return this.genero;
  }

  public get Duracao(): Number {
    return this.duracao;
  }
}
