"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Clientes_1 = require("./Clientes");
const Produtos_1 = require("./Produtos");
const Pedidos_1 = require("./Pedidos");
// Criando 10 clientes
const clientes = [
    new Clientes_1.Cliente("Ana", "Rua A"),
    new Clientes_1.Cliente("Bruno", "Rua B"),
    new Clientes_1.Cliente("Carlos", "Rua C"),
    new Clientes_1.Cliente("Diana", "Rua D"),
    new Clientes_1.Cliente("Eduardo", "Rua E"),
    new Clientes_1.Cliente("Fernanda", "Rua F"),
    new Clientes_1.Cliente("Gustavo", "Rua G"),
    new Clientes_1.Cliente("Helena", "Rua H"),
    new Clientes_1.Cliente("Igor", "Rua I"),
    new Clientes_1.Cliente("Julia", "Rua J")
];
// Criando 20 produtos
const produtos = [
    new Produtos_1.Produto("Camiseta", 49.90),
    new Produtos_1.Produto("Calça Jeans", 89.90),
    new Produtos_1.Produto("Tênis", 199.90),
    new Produtos_1.Produto("Jaqueta", 149.90),
    new Produtos_1.Produto("Boné", 29.90),
    new Produtos_1.Produto("Relógio", 249.90),
    new Produtos_1.Produto("Mochila", 119.90),
    new Produtos_1.Produto("Meias", 19.90),
    new Produtos_1.Produto("Óculos de Sol", 99.90),
    new Produtos_1.Produto("Chinelo", 39.90),
    new Produtos_1.Produto("Blusa de Frio", 129.90),
    new Produtos_1.Produto("Shorts", 59.90),
    new Produtos_1.Produto("Carteira", 69.90),
    new Produtos_1.Produto("Pulseira", 19.90),
    new Produtos_1.Produto("Anel", 49.90),
    new Produtos_1.Produto("Bermuda", 79.90),
    new Produtos_1.Produto("Camisa Polo", 89.90),
    new Produtos_1.Produto("Jaqueta de Couro", 299.90),
    new Produtos_1.Produto("Sapato Social", 179.90),
    new Produtos_1.Produto("Cinto", 39.90)
];
// Criando 10 pedidos
for (let i = 0; i < 10; i++) {
    const cliente = clientes[i];
    const pedido = new Pedidos_1.Pedido(cliente);
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
