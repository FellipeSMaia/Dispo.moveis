import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonList]
})
export class TarefasPage implements OnInit {

  tarefas: string[] = ["Estudar IONIC", "Fazer Exercicios", "Testar Aplicação"]

  constructor() { }

  ngOnInit() {
  }

}
