import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  temDados = false

  constructor(
    private navCtrl: NavController,
    private dadosService: DadosService
    ) {}
    ionViewWillEnter(){
      this.temDados = this.dadosService.temDados()
    }
    irParaListagem(){
      this.navCtrl.navigateForward("/listar")
    }

}
