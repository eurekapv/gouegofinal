import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription, Observable, Observer } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import htmlToImage from 'html-to-image';
import { UtenteLivello } from 'src/app/models/utentelivello.model';
import { Sport } from 'src/app/models/sport.model';
import { TipoPrivateImage, PageType } from 'src/app/models/valuelist.model';
import { url } from 'inspector';
import { start } from 'repl';



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
  logoGruppo:string;
  constructor(private startService: StartService,
              private socialSharing: SocialSharing)  {
    this.utenteListener=this.startService.utente.subscribe(data=>{
      this.utente=data;
    })
  }
  

  ngOnInit() {
    this.isDesktop=this.startService.isDesktop;
    console.log('bp0');
    this.startService.requestBase64Image(TipoPrivateImage.logo).then(b64Image=>{
      this.logoGruppo=b64Image;
    })


      
  }


  async onShare(id: string)
  {
    if (!this.startService.isDesktop){

      console.log('bp');
      //recupero il livello
      let livello:UtenteLivello;
      livello= await this.utente.UTENTILIVELLI.find(elem=>{
        return elem.ID==id;
      });
      console.log(livello);
      //compongo il messaggio
      let messaggio: string = this.utente.NOME + ' ha ottenuto il livello ' + livello.DESCRLIVELLO +  ' a ' + livello.DESCRSPORT + '! Complimenti!!';
        console.log(messaggio);
      //recupero l'immagine della card
      let card=document.getElementById(id);
      console.log(card);
      let urlImage: string = await htmlToImage.toJpeg(card,{
        width:350,
        height:600
        
      })
      console.log(urlImage);
      
      //recupero l'url del sito aziendale
      let area=this.startService.areaSelectedValue;
      console.log(area);
      let urlArea=await area.findAreaLinkByPageType(PageType.home);
      console.log(urlArea);
      if(urlArea){
        this.socialSharing.share(messaggio,'',urlImage, urlArea.REFERURL);
      }
      else{
        this.socialSharing.share(messaggio,'',urlImage);
      }
    }    
  }

  doRefresh(event: any){
    event.target.complete();
  }
  
  
  
  
}

