import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      codigo: 'PROD001',
      descricao: 'Smartphone Samsung Galaxy A54',
      valorNormal: 1299.90,
      valorComDesconto: 999.90,
      detalhes: 'Smartphone com 128GB de armazenamento, câmera tripla de 50MP e tela Super AMOLED de 6.4 polegadas'
    },
    {
      codigo: 'PROD002',
      descricao: 'Notebook Dell Inspiron 15',
      valorNormal: 2499.99,
      valorComDesconto: 1899.99,
      detalhes: 'Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB e tela Full HD de 15.6 polegadas'
    },
    {
      codigo: 'PROD003',
      descricao: 'Smart TV LG 55" 4K',
      valorNormal: 2199.90,
      valorComDesconto: 1699.90,
      detalhes: 'Smart TV LED 55 polegadas com resolução 4K UHD, HDR e sistema operacional webOS'
    },
    {
      codigo: 'PROD004',
      descricao: 'Fone de Ouvido JBL Tune 510BT',
      valorNormal: 199.90,
      valorComDesconto: 149.90,
      detalhes: 'Fone de ouvido Bluetooth com cancelamento de ruído, bateria de 40 horas e som JBL Pure Bass'
    },
    {
      codigo: 'PROD005',
      descricao: 'Tablet iPad Air 64GB',
      valorNormal: 3499.99,
      valorComDesconto: 2999.99,
      detalhes: 'iPad Air com chip A14 Bionic, tela Liquid Retina de 10.9 polegadas e suporte ao Apple Pencil'
    },
    {
      codigo: 'PROD006',
      descricao: 'Console PlayStation 5',
      valorNormal: 4199.99,
      valorComDesconto: 3799.99,
      detalhes: 'Console de videogame com SSD ultrarrápido, ray tracing e controle DualSense com feedback háptico'
    }
  ];

  constructor() { }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorCodigo(codigo: string): Produto | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}