
import { Tarefa } from '../models/tarefa';
import { Injectable } from '@angular/core';
import { StatusTarefa } from '../models/status-tarefa';

@Injectable ({ providedIn: 'root'})
export class TarefasService {
  private tarefas: Tarefa[] = [
    { id: 1, titulo:" Estudar Ionic", descricao: 'Ler slides até o final', status: StatusTarefa.Pendente}
  ]
  private nextId = 2

  listar(): Tarefa [] {
    return this.tarefas
  }

  adicionar(tarefa: Tarefa) {
    tarefa.id = this.nextId++
    this.tarefas.push(tarefa)
  }
}
