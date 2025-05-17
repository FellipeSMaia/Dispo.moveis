import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loja',
    pathMatch: 'full',
  },
  {
    path: 'loja',
    loadComponent: () => import('./loja/loja.page').then( m => m.LojaPage)
  },
  {
    path: 'pagamento',
    loadComponent: () => import('./pagamento/pagamento.page').then( m => m.PagamentoPage)
  },
  {
    path: 'resumo',
    loadComponent: () => import('./resumo/resumo.page').then( m => m.ResumoPage)
  },
];
