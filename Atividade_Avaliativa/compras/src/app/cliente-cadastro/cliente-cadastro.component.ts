import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-cliente-cadastro',
  standalone: false,
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss'],
})
export class ClienteCadastroComponent implements OnInit {
  clienteForm: FormGroup;
  isEdicao = false;
  clienteAtual: Cliente | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      endereco: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    this.carregarDadosCliente();
  }

  carregarDadosCliente(): void {
    // Simula carregamento de dados do cliente (pode vir de um service)
    const clienteSalvo = this.getClienteStorage();
    
    if (clienteSalvo) {
      this.isEdicao = true;
      this.clienteAtual = clienteSalvo;
      this.clienteForm.patchValue(clienteSalvo);
    }
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const dadosCliente: Cliente = {
        ...this.clienteForm.value,
        id: this.clienteAtual?.id || Date.now()
      };

      this.salvarCliente(dadosCliente);
      
      // Volta para a página principal (minha-conta)
      this.router.navigate(['/minha-conta']);
    } else {
      this.marcarCamposComoTocados();
    }
  }

  onCancel(): void {
    this.router.navigate(['/minha-conta']);
  }

  // Formatar CEP
  onCepChange(event: any): void {
    let cep = event.target.value.replace(/\D/g, '');
    if (cep.length > 5) {
      cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
    }
    this.clienteForm.patchValue({ cep });
  }

  // Formatar telefone
  onTelefoneChange(event: any): void {
    let telefone = event.target.value.replace(/\D/g, '');
    
    if (telefone.length > 0) {
      if (telefone.length <= 2) {
        telefone = `(${telefone}`;
      } else if (telefone.length <= 6) {
        telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2)}`;
      } else if (telefone.length <= 10) {
        telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`;
      } else {
        telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7, 11)}`;
      }
    }
    
    this.clienteForm.patchValue({ telefone });
  }

  // Validação de campos
  isFieldInvalid(fieldName: string): boolean {
    const field = this.clienteForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.clienteForm.get(fieldName);
    
    if (field?.errors?.['required']) {
      return `${this.getFieldLabel(fieldName)} é obrigatório`;
    }
    
    if (field?.errors?.['minlength']) {
      return `${this.getFieldLabel(fieldName)} deve ter pelo menos 2 caracteres`;
    }
    
    if (field?.errors?.['pattern']) {
      if (fieldName === 'cep') {
        return 'CEP deve estar no formato 00000-000';
      }
      if (fieldName === 'telefone') {
        return 'Telefone deve estar no formato (00) 0000-0000 ou (00) 00000-0000';
      }
    }
    
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      nome: 'Nome',
      endereco: 'Endereço',
      cep: 'CEP',
      cidade: 'Cidade',
      bairro: 'Bairro',
      estado: 'Estado',
      telefone: 'Telefone'
    };
    return labels[fieldName] || fieldName;
  }

  private marcarCamposComoTocados(): void {
    Object.keys(this.clienteForm.controls).forEach(key => {
      this.clienteForm.get(key)?.markAsTouched();
    });
  }

  private salvarCliente(cliente: Cliente): void {
    // Simula salvamento (implementar service real posteriormente)
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }

  private getClienteStorage(): Cliente | null {
    const cliente = localStorage.getItem('cliente');
    return cliente ? JSON.parse(cliente) : null;
  }
}