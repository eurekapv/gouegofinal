import { Component, OnInit } from '@angular/core';
import { NewsEvento } from 'src/app/models/newsevento.model';

import { Browser } from '@capacitor/browser';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
})
export class NewsdetailPage implements OnInit {

  myNews: NewsEvento=new NewsEvento();
  

  constructor(private modalController: ModalController) { 
    
  }

  ngOnInit() {

  }

  /**
   * Apre il link della News
   */
  onClickReadNews(url:string) {
    if (url&&url.length>0){
      Browser.open({url:url})
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
