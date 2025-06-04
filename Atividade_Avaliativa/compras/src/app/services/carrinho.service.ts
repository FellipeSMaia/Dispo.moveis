import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto.model';
import { ItemCarrinho } from '../models/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: ItemCarrinho[] = [];
  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  
  // Observable para componentes se inscreverem
  carrinho$ = this.carrinhoSubject.asObservable();

  constructor() { }

  adicionarProduto(produto: Produto, quantidade: number = 1): void {
    const itemExistente = this.itensCarrinho.find(item => item.produto.codigo === produto.codigo);
    
    if (itemExistente) {
      // Se produto já existe, aumenta a quantidade
      itemExistente.quantidade += quantidade;
      itemExistente.subtotal = itemExistente.quantidade * itemExistente.produto.valorComDesconto;
    } else {
      // Se é um novo produto, adiciona ao carrinho
      const novoItem: ItemCarrinho = {
        produto: produto,
        quantidade: quantidade,
        subtotal: quantidade * produto.valorComDesconto
      };
      this.itensCarrinho.push(novoItem);
    }
    
    // Notifica todos os observadores sobre a mudança
    this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  removerProduto(codigo: string): void {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.produto.codigo !== codigo);
    this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  obterItens(): ItemCarrinho[] {
    return this.itensCarrinho;
  }

  obterQuantidadeTotal(): number {
    return this.itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
  }

  obterValorTotal(): number {
    return this.itensCarrinho.reduce((total, item) => total + item.subtotal, 0);
  }

  limparCarrinho(): void {
    this.itensCarrinho = [];
    this.carrinhoSubject.next([]);
  }
}