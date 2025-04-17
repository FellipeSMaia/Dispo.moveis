"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente) {
        this.produtos = [];
        this.cliente = cliente;
    }
    // Método para adicionar um produto ao carrinho
    adicionarProduto(produto, quantidade) {
        this.produtos.push({ produto, quantidade });
        console.log(`Produto "${produto.Nome}" adicionado ao carrinho. Quantidade: ${quantidade}`);
    }
    // Método para calcular o valor total do pedido
    calcularTotal() {
        let total = 0;
        this.produtos.forEach((item) => {
            total += item.produto.Preco * item.quantidade;
        });
        return total;
    }
    // Método para finalizar o pedido e exibir o resumo
    finalizarPedido() {
        console.log(`\nResumo do Pedido para o Cliente: ${this.cliente.Nome}`);
        console.log("----------------------------------------");
        this.produtos.forEach((item) => {
            console.log(`Produto: ${item.produto.Nome}`);
            console.log(`Quantidade: ${item.quantidade}`);
            console.log(`Preço Unitário: R$ ${item.produto.Preco.toFixed(2)}`);
            console.log(`Subtotal: R$ ${(item.produto.Preco * item.quantidade).toFixed(2)}`);
            console.log("----------------------------------------");
        });
        const total = this.calcularTotal();
        console.log(`Valor Total do Pedido: R$ ${total.toFixed(2)}`);
    }
}
exports.Pedido = Pedido;
