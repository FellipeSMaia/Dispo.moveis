import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Cliente {
  id?: number;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  bairro: string;
  estado: string;
  telefone: string;
}

@Component({
  selector: 'app-minha-conta',
  standalone: false,
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {
  cliente: Cliente | null = null;
  carregando = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.carregarDadosCliente();
  }

  ionViewWillEnter() {
    // Recarrega os dados sempre que a página for exibida
    this.carregarDadosCliente();
  }

  carregarDadosCliente() {
    this.carregando = true;
    
    // Simula carregamento dos dados (substitua pela sua lógica de serviço)
    setTimeout(() => {
      const dadosArmazenados = localStorage.getItem('cliente');
      if (dadosArmazenados) {
        this.cliente = JSON.parse(dadosArmazenados);
      }
      this.carregando = false;
    }, 500);
  }

  navegarParaCadastro() {
    this.router.navigate(['/cadastro-cliente']);
  }

  navegarParaEdicao() {
    this.router.navigate(['/cadastro-cliente'], { 
      queryParams: { modo: 'edicao' } 
    });
  }

  formatarTelefone(telefone: string): string {
    return telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }

  formatarCEP(cep: string): string {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
}