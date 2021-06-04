import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UtenteLivello } from 'src/app/models/utentelivello.model';
import { Sport } from 'src/app/models/sport.model';
import { TipoPrivateImage, PageType } from 'src/app/models/valuelist.model';




@Component({
  selector: 'app-sportlevels',
  templateUrl: './sportlevels.page.html',
  styleUrls: ['./sportlevels.page.scss'],
})
export class SportlevelsPage implements OnInit {
  
  isDesktop:boolean;
  utente:Utente;
  utenteListener: Subscription;
  sport: Sport;
  logoGruppoBase64:string;
  showLogoGruppo: boolean;

  constructor(private startService: StartService,
              private socialSharing: SocialSharing)  {

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
                    console.log('Logo Gruppo failed: ' + error);
                  });

  }
  

  ngOnInit() {

    this.isDesktop=this.startService.isDesktop;
      
  }



  


  /**
   * FUNZIONE DEPRECATA NON SUPPORTATA E NON COMPLETA
   * HTML TO IMAGE E' STATO ELIMINATO
   * @param sportLevelPrimaryKey Chiave Primaria del record di SportLevel
   */
  onShare(sportLevelPrimaryKey: string)
  {
    let method = 'SVG';
    let options = { width:350, height:600 };
    let messaggio = '';

    if (!this.startService.isDesktop || this.startService.isDesktop){

      

      //recupero il livello
      let docLivello:UtenteLivello;
      docLivello = this.utente.UTENTILIVELLI.find(elem=>{
        return elem.ID==sportLevelPrimaryKey;
      });

      if (docLivello) {



        //compongo il messaggio
        messaggio = this.utente.NOME + ' ha ottenuto il livello ' + docLivello.DESCRLIVELLO +  ' a ' + docLivello.DESCRSPORT + '! Complimenti!!';
          
        //recupero l'immagine della card
        let DOMCard=document.getElementById(sportLevelPrimaryKey);
        




      }
      
    }    
  }

  doRefresh(event: any){
    event.target.complete();
  }
  
  
  
  
}

