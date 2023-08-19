import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Sport } from 'src/app/models/sport.model';
import { TipoPrivateImage } from 'src/app/models/valuelist.model';
import { LogApp } from 'src/app/models/log.model';




@Component({
  selector: 'app-sport-levels-account',
  templateUrl: './sport-levels-account.page.html',
  styleUrls: ['./sport-levels-account.page.scss'],
})
export class SportLevelsAccountPage implements OnInit {
  
  isDesktop:boolean;
  utente:Utente;
  utenteListener: Subscription;
  sport: Sport;
  logoGruppoBase64:string;
  showLogoGruppo: boolean;

  constructor(private startService: StartService,
              )  {

                this.showLogoGruppo = false;

                //Attendo la ricezione dei dati Utente
                this.utenteListener=this.startService.utente.subscribe(data=>{
                  this.utente=data;
                });

                //Recupero il logo del gruppo
                this.startService.requestBase64Image(TipoPrivateImage.logo)
                  .then(b64Image=>{

                      //Arriva in Base64
                      this.logoGruppoBase64=b64Image;

                      if (this.logoGruppoBase64.length != 0) {
                        this.showLogoGruppo = true;
                      }
                      else {
                        this.showLogoGruppo = false;
                      }
                  })
                  .catch(error => {
                    this.showLogoGruppo = false;
                    LogApp.consoleLog('Logo Gruppo failed: ' + error,'error');
                  });

  }
  

  ngOnInit() {

    this.isDesktop=this.startService.isDesktop;
      
  }

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


  doRefresh(event: any){
    event.target.complete();
  }
  
  
  
  
}

