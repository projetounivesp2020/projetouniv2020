import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {

  constructor(public alertCtrl: AlertController) { }
  async showAlert() {
    const alert = await this.alertCtrl.create({ 
      header: 'Cadastro concluído', 
      message: 'Clique no botão voltar para continuar...', 
      buttons: ['OK']
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
    } 
   }  