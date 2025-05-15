import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./configuracoes/configuracoes.page').then( m => m.ConfiguracoesPage)
  },
  {
    path: 'noticias',
    loadComponent: () => import('./noticias/noticias.page').then( m => m.NoticiasPage)
  },
];
