import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  dados = {
    nome: '',
    email: '',
    mensagem: ''
  }
  constructor(
    private dadosService: DadosService,
    private navCtrl: NavController
  ) {}

  salvar(form: NgForm) {
    this.dadosService.adicionarDado({...this.dados})
    form.resetForm()
    this.navCtrl.navigateRoot('/home')
  }

  ngOnInit() {
  }

}
