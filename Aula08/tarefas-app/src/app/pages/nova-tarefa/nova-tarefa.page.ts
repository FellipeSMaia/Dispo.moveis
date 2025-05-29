import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusTarefa } from 'src/app/models/status-tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  standalone: false,
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
})
export class NovaTarefaPage {

  titulo = ''
  descricao = ''
  status: StatusTarefa = StatusTarefa.Pendente
  statusList = Object.values(StatusTarefa)
  
  constructor(private tarefasService: TarefasService, private router: Router) { }

  salvar() {
    this.tarefasService.adicionar({
      id: 0,
      titulo: this.titulo,
      descricao: this.descricao,
      status: this.status
    })
    this.router.navigate(['/tarefas'])
  }

}
