import { Component, OnInit } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { NavController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.page.html',
  styleUrls: ['./historylist.page.scss'],
})
export class HistorylistPage implements OnInit {

  selectedView: string='prenotazioni';
  listCorsi: Corso[]=[];
  listPrenotazioni: Prenotazione[]=[];
  listPrenotazioniPianificazione: PrenotazionePianificazione[]=[]
  today : Date;

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
      this.today=new Date;

      this.initProva(4);
  }

  onChangeSegment(value)
  {
    this.selectedView=value.detail.value;
  }

  initProva(num)
  {
    let corsoProva : Corso;
    let prenotaProva: PrenotazionePianificazione;
    for(let i=0; i<num; i++)
    {
      corsoProva=new Corso();
      prenotaProva=new PrenotazionePianificazione();
      corsoProva.ID=String(i);
      prenotaProva.ID=String(i);
      this.listCorsi.push(corsoProva);
      this.listPrenotazioniPianificazione.push(prenotaProva);
      
    }
  }

  onClickCorso(selectedCorso: Corso)
  {
    this.navCtrl.navigateForward(['/','historylist','course',selectedCorso.ID])

  }

  onClickPrenotazione(selectedPrenotazione:PrenotazionePianificazione)
  {
    this.navCtrl.navigateForward(['/','historylist','booking',selectedPrenotazione.ID])
  }

}
