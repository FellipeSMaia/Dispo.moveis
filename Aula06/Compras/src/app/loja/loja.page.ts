import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonItem]
})
export class LojaPage implements OnInit {

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
