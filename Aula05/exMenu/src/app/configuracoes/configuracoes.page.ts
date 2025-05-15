import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {settingsOutline } from 'ionicons/icons';

import { IonContent, IonHeader, IonTitle, IonToolbar , IonButtons, IonMenuButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class ConfiguracoesPage implements OnInit {

  constructor() { 
    addIcons ({settingsOutline});
  }

  ngOnInit() {
  }

}
