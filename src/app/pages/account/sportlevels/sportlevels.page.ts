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



@Component({
  selector: 'app-sportlevels',
  templateUrl: './sportlevels.page.html',
  styleUrls: ['./sportlevels.page.scss'],
})
export class SportlevelsPage implements OnInit {

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
    console.log('bp0');
    this.startService.requestBase64Image(TipoPrivateImage.logo).then(b64Image=>{
      this.logoGruppo=b64Image;
    })
      
  }


  async onShare(id: string)
  {
    //recupero il livello
    let livello:UtenteLivello;
    livello= await this.utente.UTENTILIVELLI.find(elem=>{
      return elem.ID==id;
    });

    //compongo il messaggio
    let messaggio: string = this.utente.NOME + ' ha ottenuto il livello ' + livello.DESCRLIVELLO +  ' a ' + livello.DESCRSPORT + '!';
    
    //recupero l'immagine della card
    let card=document.getElementById(id);
    let urlImage= await htmlToImage.toPng(card);

    //recupero l'url del sito aziendale
    let area=this.startService.areaSelectedValue;
    console.log(area);
    let urlArea=await area.findAreaLinkByPageType(PageType.home)
    if(urlArea){
      this.socialSharing.share(messaggio,'',urlImage, urlArea.REFERURL);
    }
    else{
      this.socialSharing.share(messaggio,'',urlImage);
    }

       
  }

  
  
  
}

