import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription, Observable, Observer } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import htmlToImage from 'html-to-image';
import { Livello } from 'src/app/models/livello.model';
import { UtenteLivello } from 'src/app/models/utentelivello.model';
import { Sport } from 'src/app/models/sport.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoPrivateImage } from 'src/app/models/valuelist.model';



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
  
  //TODO bisogna convertire l'immagine del logo in Base64

  ngOnInit() {
    console.log('bp0');
    this.startService.requestBase64Image(TipoPrivateImage.logo).then(b64Image=>{
      this.logoGruppo=b64Image;
      console.log('bp');
      console.log(this.logoGruppo);
    })
      
  }


  async onShare(id: string)
  {
    let livello:UtenteLivello;
    livello= await this.utente.UTENTILIVELLI.find(elem=>{
      return elem.ID==id;
    });
    let messaggio: string = this.utente.NOME + ' ha ottenuto il livello ' + livello.DESCRLIVELLO +  ' a ' + livello.DESCRSPORT + '!';
    //recupero l'immagine della card
    let card=document.getElementById(id);
    let urlImage= await htmlToImage.toPng(card);
    this.socialSharing.share(messaggio,'',urlImage,'https://www.openbeachvolley.com/milano');
       
  }

  
  
  
}

