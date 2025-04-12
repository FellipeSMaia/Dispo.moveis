class Livro {
    private titulo: string
    private autor: string
    private anoPublicacao: Number


    constructor(titulo: string, autor: string, anoPublicacao: Number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    public getTitulo(): string {
        return this.titulo  
    }

    public getAutor(): string {
        return this.autor
    }

    public getAnoPublicacao(): Number {
        return this.anoPublicacao
    }


    public toString(): string {
        return `Titulo: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicacão: ${this.anoPublicacao}`
    }

}

class Usuario{
    private nome: string
    private idade: Number


    constructor(nome: string, idade: Number) {
        this.nome = nome
        this.idade = idade
    }

    public getNome(): string {
        return this.nome
    }

    public getIdade(): Number {
        return this.idade
    }


    public toString(): string {
        return `Nome: ${this.nome}\nIdade: ${this.idade}`
    }

}


class biblioteca{

    livros: Livro[] = [];
    usuarios: Usuario[] =[]


    public adicionar(livro: Livro, usuario: Usuario) {
        this.livros.push(livro)
        this.usuarios.push(usuario)
    }


    // fazer um metodo de emprestimos, separar as classes

}