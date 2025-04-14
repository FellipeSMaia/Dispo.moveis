"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Clientes_1 = require("./Clientes");
const Filmes_1 = require("./Filmes");
const Locacoes_1 = require("./Locacoes");
// Criar 10 clientes
const clientes = [
    new Clientes_1.Cliente("Alice", 15),
    new Clientes_1.Cliente("Bruno", 16),
    new Clientes_1.Cliente("Carla", 17),
    new Clientes_1.Cliente("Diego", 18),
    new Clientes_1.Cliente("Eduarda", 19),
    new Clientes_1.Cliente("Felipe", 20),
    new Clientes_1.Cliente("Giovana", 21),
    new Clientes_1.Cliente("Henrique", 22),
    new Clientes_1.Cliente("Isabela", 23),
    new Clientes_1.Cliente("João", 24),
];
// Criar 20 filmes
const filmes = [
    new Filmes_1.Filme("O Senhor dos Anéis", "Fantasia", 178),
    new Filmes_1.Filme("Matrix", "Ficção Científica", 136),
    new Filmes_1.Filme("Avatar", "Ficção Científica", 162),
    new Filmes_1.Filme("Titanic", "Romance", 195),
    new Filmes_1.Filme("Vingadores: Ultimato", "Ação", 181),
    new Filmes_1.Filme("Homem-Aranha: Sem Volta Para Casa", "Ação", 148),
    new Filmes_1.Filme("Pantera Negra", "Ação", 134),
    new Filmes_1.Filme("Interestelar", "Ficção Científica", 169),
    new Filmes_1.Filme("A Origem", "Suspense", 148),
    new Filmes_1.Filme("Gladiador", "Drama", 155),
    new Filmes_1.Filme("Batman Begins", "Ação", 140),
    new Filmes_1.Filme("Coringa", "Drama", 122),
    new Filmes_1.Filme("Toy Story", "Animação", 81),
    new Filmes_1.Filme("Procurando Nemo", "Animação", 100),
    new Filmes_1.Filme("Shrek", "Animação", 90),
    new Filmes_1.Filme("Carros", "Animação", 117),
    new Filmes_1.Filme("Frozen", "Musical", 102),
    new Filmes_1.Filme("Moana", "Aventura", 107),
    new Filmes_1.Filme("Up: Altas Aventuras", "Animação", 96),
    new Filmes_1.Filme("Wall-E", "Animação", 98),
];
// Criar locações com filmes alugados
const locacoes = [
    new Locacoes_1.Locacao(clientes[0], [filmes[0], filmes[1]]),
    new Locacoes_1.Locacao(clientes[3], [filmes[5], filmes[6], filmes[7]]),
    new Locacoes_1.Locacao(clientes[5], [filmes[10]]),
    new Locacoes_1.Locacao(clientes[9], [
        filmes[15],
        filmes[16],
        filmes[17],
        filmes[18],
        filmes[19],
    ]),
];
// Exibir lista de clientes com seus filmes alugados
console.log("\n--- FILMES ALUGADOS POR CLIENTE ---\n");
locacoes.forEach((locacao) => {
    locacao.exibirFilmesAlugados();
    console.log("-----------------------------");
});
