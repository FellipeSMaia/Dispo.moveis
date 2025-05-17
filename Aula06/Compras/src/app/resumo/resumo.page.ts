import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonCard, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonCard, IonItem ]
})
export class ResumoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items: string[] = []
  newItem: string = ""

  addItem(){
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim())
      this.newItem = ""
    }
  }
}
