import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  styleUrls: ['./developer.page.scss'],
})
export class DeveloperPage implements OnInit {

  developerMode = !environment.production;

  constructor(private navController: NavController,
              private startService: StartService) { }


  ngOnInit(){

  }

    //#region GESTIONE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

    return retPath;
  }

  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);

    return myHref;
  }

  /**
   * Torno alla pagina del profilo
   */
  onGoToBack() {
    this.navController.navigateBack(this.backPathArray);
  }   

  //#endregion  

  //#region

  onClickItem(itemMenu: string) {
    switch (itemMenu) {
    
      default:
        break;
    }
  }


  //#endregion


}
