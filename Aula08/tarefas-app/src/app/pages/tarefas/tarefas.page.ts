import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  standalone: false,
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  tarefas: Tarefa[] = []

  constructor(private tarefasService: TarefasService) {}

  ngOnInit() {
    this.tarefas = this.tarefasService.listar()
  }
}
