import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonRadioGroup } from '@ionic/angular/standalone';
import { Route } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadio, IonButton, IonLabel, IonInput, IonList, IonButtons, IonMenuButton, IonRadioGroup]
})
export class PagamentoPage implements OnInit {

  constructor(private router: Route) { }

  ngOnInit() {
  }

  efetuarPagamento(){
    
  }

}
