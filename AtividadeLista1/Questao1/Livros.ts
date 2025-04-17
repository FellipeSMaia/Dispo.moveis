export class Livro {
    private titulo: string
    private autor: string
    private anoPublicacao: Number


    constructor(titulo: string, autor: string, anoPublicacao: Number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    public get Titulo(): string {
        return this.titulo  
    }

    public get Autor(): string {
        return this.autor
    }

    public get AnoPublicacao(): Number {
        return this.anoPublicacao
    }

}
