import { Component, Input, isStandalone} from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-card-tarefa',
  standalone: false,
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.scss'],
})
export class CardTarefaComponent {

  @Input() tarefa!: Tarefa

}
