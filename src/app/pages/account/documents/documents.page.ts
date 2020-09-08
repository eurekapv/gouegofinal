import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */
  listDocumenti = [];
  inRichiesta = true;

  constructor(private startService: StartService,
              private chooser: Chooser,
              private toastController: ToastController
              ) { 
    this.inRichiesta = true;
  }

  ngOnInit() {
    this.inRichiesta = false;
  }
  

  onClickAdd(){
    if (!this.startService.isDesktop){
      this.chooser.getFile()
      .then(file => {

        //TODO CHIAMATA AL SERVER PER SALVARE IL FILE
        console.log(file ? file.name : 'canceled')
      })
      .catch((error: any) => {
        console.error(error)
      });
    }
    else{
      //TODO MANCA PARTE DESKTOP
    }
  }

  showMessage(msg: string){
    this.toastController.create({
      message: msg
    })
    .then(elToast => {
      elToast.present();
    })
  }

}
