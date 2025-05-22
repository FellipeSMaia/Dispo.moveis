import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private listaDados: any[] = []

  constructor() { }

  adicionarDado(dado: any) {
    this.listaDados.push(dado)
  }

  obterDados(): any [] {
    return this.listaDados
  }

  temDados(): boolean {
    return this.listaDados.length > 0
  }
}
