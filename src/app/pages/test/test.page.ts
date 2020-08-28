import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page'
import { TipoVerificaAccount } from 'src/app/models/valuelist.model'

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(
    private modalController : ModalController,
    private startService : StartService
  ) { }

  ngOnInit() {
    let docUtente : Utente;
    let subDocUtente = this.startService.utente.subscribe(elDocUtente => {
      docUtente = elDocUtente;
    })


    this.modalController.create({
      component: VerifyPage,
      componentProps: {
        params : {
          tipoVerifica : TipoVerificaAccount.verificaemailsms,
          updateDocUtente : true
        }
      }
    }).then(elModal => {
      elModal.present();
    })
  }

}
