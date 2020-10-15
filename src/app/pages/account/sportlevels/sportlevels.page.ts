import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription, Observable, Observer } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UtenteLivello } from 'src/app/models/utentelivello.model';
import { Sport } from 'src/app/models/sport.model';
import { TipoPrivateImage, PageType } from 'src/app/models/valuelist.model';
import htmlToImage from 'html-to-image'



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


  // async onOldShare(id: string)
  // {
  //   if (!this.startService.isDesktop){

  //     console.log('bp');
  //     //recupero il livello
  //     let livello:UtenteLivello;
  //     livello= await this.utente.UTENTILIVELLI.find(elem=>{
  //       return elem.ID==id;
  //     });
  //     console.log(livello);
  //     //compongo il messaggio
  //     let messaggio: string = this.utente.NOME + ' ha ottenuto il livello ' + livello.DESCRLIVELLO +  ' a ' + livello.DESCRSPORT + '! Complimenti!!';
  //       console.log(messaggio);
  //     //recupero l'immagine della card
  //     let card=document.getElementById(id);
  //     console.log(card);
  //     let urlImage: string = await htmlToImage.toJpeg(card,{
  //       width:350,
  //       height:600
        
  //     })
  //     console.log(urlImage);
  //     //recupero l'url del sito aziendale
  //     let area=this.startService.areaSelectedValue;
  //     console.log(area);
  //     let urlArea=await area.findAreaLinkByPageType(PageType.home);
  //     console.log(urlArea);
  //     if(urlArea){
  //       this.socialSharing.share(messaggio,'',urlImage, urlArea.REFERURL);
  //     }
  //     else{
  //       this.socialSharing.share(messaggio,'',urlImage);
  //     }
  //   }    
  // }


  /**
   * Tento di condividere 
   * @param sportLevelPrimaryKey Chiave Primaria del record di SportLevel
   */
  onShare(sportLevelPrimaryKey: string)
  {
    let method = 'SVG';
    let options = { width:350, height:600 };
    let messaggio = '';

    if (!this.startService.isDesktop || this.startService.isDesktop){

      console.log('bp');

      //recupero il livello
      let docLivello:UtenteLivello;
      docLivello = this.utente.UTENTILIVELLI.find(elem=>{
        return elem.ID==sportLevelPrimaryKey;
      });

      if (docLivello) {

        console.log('Creo l\'immagine per');
        console.log(docLivello);

        //compongo il messaggio
        messaggio = this.utente.NOME + ' ha ottenuto il livello ' + docLivello.DESCRLIVELLO +  ' a ' + docLivello.DESCRSPORT + '! Complimenti!!';
          
        //recupero l'immagine della card
        let DOMCard=document.getElementById(sportLevelPrimaryKey);
        console.log(DOMCard);

        //Immagine in SVG
        if (method == 'SVG') {

          htmlToImage.toSvgDataURL(DOMCard,options)
            .then(dataUrl => {
              console.log('Fatto: ');
              console.log(dataUrl);
            })
            .catch(error => {
              console.log(error);
            });
        }
        else if (method == 'JPG') {

          htmlToImage.toJpeg(DOMCard, options)
          .then(urlImage => {
            console.log(urlImage);
            console.error('OK qui!');
            
            //recupero l'url del sito aziendale
            let area=this.startService.areaSelectedValue;
            console.log(area);
            let urlArea = area.findAreaLinkByPageType(PageType.home);
            console.log(urlArea);
            if(urlArea){
              this.socialSharing.share(messaggio,'',urlImage, urlArea.REFERURL);
            }
            else{
              this.socialSharing.share(messaggio,'',urlImage);
            }
          })
          .catch(error => {
            console.error('Errore qui!');
            console.log(error);
          })
        }

      }
      
    }    
  }

  doRefresh(event: any){
    event.target.complete();
  }
  
  
  
  
}

