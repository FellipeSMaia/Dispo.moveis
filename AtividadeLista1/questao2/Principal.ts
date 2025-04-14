import { Cliente } from "./Clientes";
import { Filme } from "./Filmes";
import { Locacao } from "./Locacoes";

// Criar 10 clientes
const clientes: Cliente[] = [
  new Cliente("Alice", 15),
  new Cliente("Bruno", 16),
  new Cliente("Carla", 17),
  new Cliente("Diego", 18),
  new Cliente("Eduarda", 19),
  new Cliente("Felipe", 20),
  new Cliente("Giovana", 21),
  new Cliente("Henrique", 22),
  new Cliente("Isabela", 23),
  new Cliente("João", 24),
];

// Criar 20 filmes
const filmes: Filme[] = [
  new Filme("O Senhor dos Anéis", "Fantasia", 178),
  new Filme("Matrix", "Ficção Científica", 136),
  new Filme("Avatar", "Ficção Científica", 162),
  new Filme("Titanic", "Romance", 195),
  new Filme("Vingadores: Ultimato", "Ação", 181),
  new Filme("Homem-Aranha: Sem Volta Para Casa", "Ação", 148),
  new Filme("Pantera Negra", "Ação", 134),
  new Filme("Interestelar", "Ficção Científica", 169),
  new Filme("A Origem", "Suspense", 148),
  new Filme("Gladiador", "Drama", 155),
  new Filme("Batman Begins", "Ação", 140),
  new Filme("Coringa", "Drama", 122),
  new Filme("Toy Story", "Animação", 81),
  new Filme("Procurando Nemo", "Animação", 100),
  new Filme("Shrek", "Animação", 90),
  new Filme("Carros", "Animação", 117),
  new Filme("Frozen", "Musical", 102),
  new Filme("Moana", "Aventura", 107),
  new Filme("Up: Altas Aventuras", "Animação", 96),
  new Filme("Wall-E", "Animação", 98),
];

// Criar locações com filmes alugados
const locacoes: Locacao[] = [
  new Locacao(clientes[0], [filmes[0], filmes[1]]),
  new Locacao(clientes[3], [filmes[5], filmes[6], filmes[7]]),
  new Locacao(clientes[5], [filmes[10]]),
  new Locacao(clientes[9], [
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
