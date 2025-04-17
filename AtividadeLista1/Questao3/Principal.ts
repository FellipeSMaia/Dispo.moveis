// Aluno: Fellipe Souza Maia

import { Cliente } from "./Clientes";
import { Produto } from "./Produtos";
import { Pedido } from "./Pedidos";

// Criando 10 clientes
const clientes: Cliente[] = [
  new Cliente("Ana", "Rua A"),
  new Cliente("Bruno", "Rua B"),
  new Cliente("Carlos", "Rua C"),
  new Cliente("Diana", "Rua D"),
  new Cliente("Eduardo", "Rua E"),
  new Cliente("Fernanda", "Rua F"),
  new Cliente("Gustavo", "Rua G"),
  new Cliente("Helena", "Rua H"),
  new Cliente("Igor", "Rua I"),
  new Cliente("Julia", "Rua J")
];

// Criando 20 produtos
const produtos: Produto[] = [
  new Produto("Camiseta", 49.90),
  new Produto("Calça Jeans", 89.90),
  new Produto("Tênis", 199.90),
  new Produto("Jaqueta", 149.90),
  new Produto("Boné", 29.90),
  new Produto("Relógio", 249.90),
  new Produto("Mochila", 119.90),
  new Produto("Meias", 19.90),
  new Produto("Óculos de Sol", 99.90),
  new Produto("Chinelo", 39.90),
  new Produto("Blusa de Frio", 129.90),
  new Produto("Shorts", 59.90),
  new Produto("Carteira", 69.90),
  new Produto("Pulseira", 19.90),
  new Produto("Anel", 49.90),
  new Produto("Bermuda", 79.90),
  new Produto("Camisa Polo", 89.90),
  new Produto("Jaqueta de Couro", 299.90),
  new Produto("Sapato Social", 179.90),
  new Produto("Cinto", 39.90)
];

// Criando 10 pedidos
for (let i = 0; i < 10; i++) {
  const cliente = clientes[i];
  const pedido = new Pedido(cliente);

  // Adicionando entre 2 a 4 produtos aleatórios
  const qtdProdutos = Math.floor(Math.random() * 3) + 2;

  for (let j = 0; j < qtdProdutos; j++) {
    const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
    const quantidade = Math.floor(Math.random() * 3) + 1; // de 1 a 3 unidades
    pedido.adicionarProduto(produtoAleatorio, quantidade);
  }

  // Finalizar pedido e mostrar resumo
  pedido.finalizarPedido();
}
