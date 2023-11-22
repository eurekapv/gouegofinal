import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Corso } from 'src/app/models/corso/corso.model';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { Tempistica, TipoCorso } from 'src/app/models/zsupport/valuelist.model';


@Component({
  selector: 'app-item-trainer-corso',
  templateUrl: './item-trainer-corso.component.html',
  styleUrls: ['./item-trainer-corso.component.scss'],
})
export class ItemTrainerCorsoComponent implements OnInit {

  myCorso: Corso;
  myPianificazione: PianificazioneCorso;
  typeList: 'corsi'|'pianificazioni' = 'corsi';
  tipoCorso: typeof TipoCorso = TipoCorso;

  //Sono le voci mostrate in interfaccia
  labelSiglaCalendario = '';
  labelDenominazioneCorso = '';
  labelLocation = '';
  labelLivello = '';
  labelCampo = '';
  labelSport = '';
  valueTipoCorso: TipoCorso;

  

  @Input() set myDocument(value: Corso | PianificazioneCorso) {

    if (value instanceof Corso) {
      this.myCorso = value;
      this.typeList = 'corsi';
     
    }
    else if (value instanceof PianificazioneCorso) {
      this.myPianificazione = value;
      this.typeList = 'pianificazioni';
    }

    this.setLabel();

  }

  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  /**
   * Riemetto il Click al parent
   */
  onClick(event){
    if (event) {
      event.stopPropagation();
    }
    this.click.emit();
  }

  /**
   * colore dell'Item di tipo Ionic Color a seconda del tempo dell'Item
   * @returns 
   */
  colorItem(): string {
    
      let tempoCorso: Tempistica;
      let ionColor = 'success';
      
      
      tempoCorso = Tempistica.PASSATO;

      switch (this.typeList) {
        case 'corsi':

          if (this.myCorso) {
            tempoCorso = this.myCorso.tempoCorso();  
          }

          break;

        case 'pianificazioni':
          
          if (this.myPianificazione) {
            tempoCorso = this.myPianificazione.tempoCorso();
          }
          break;
      
        default:
          tempoCorso = Tempistica.PASSATO;
          break;
      }

      
      switch (tempoCorso) {
        case Tempistica.FUTURO:
          ionColor = 'warning';
          break;
        case Tempistica.IN_CORSO:
          ionColor = 'success';
          break;

        case Tempistica.PASSATO:
          ionColor = 'danger';
          break;
      
        default:
          break;
      }
      
  
      return ionColor;
  }

    /**
   * Ritorna il colore da applicare alla riga verticale che separa 
   * la colonna Sinistra dalla destra
   * 
   */
  getClassColorColumn():string {

      let tempoCorso: Tempistica;

      tempoCorso = Tempistica.PASSATO;

      switch (this.typeList) {
        case 'corsi':

          if (this.myCorso) {
            tempoCorso = this.myCorso.tempoCorso();  
          }

          break;

        case 'pianificazioni':

          if (this.myPianificazione) {
            tempoCorso = this.myPianificazione.tempoCorso();
          }
          break;
      
        default:
          tempoCorso = Tempistica.PASSATO;
          break;
      }
 
      return tempoCorso;
    }  

  /**
   * Imposta le etichette mostrate nel HTML
   */
  setLabel() {

    let fieldName = '';

    this.labelSiglaCalendario = '';
    this.labelDenominazioneCorso = '';
    this.valueTipoCorso = null;

    this.labelLocation = '';
    this.labelLivello = '';
    this.labelCampo = '';
    this.labelSport = '';

    let rigaLog = '';


    if (this.myCorso) {

      fieldName = 'SIGLACALENDARIO';
      this.labelSiglaCalendario = this.nullValue(this.myCorso[fieldName]);
      
      fieldName = 'DENOMINAZIONE';
      this.labelDenominazioneCorso = this.nullValue(this.myCorso[fieldName]);

      fieldName = 'TIPO';
      this.valueTipoCorso = this.myCorso[fieldName];

      fieldName = '_DENOMINAZIONE_Location';
      this.labelLocation = this.nullValue(this.myCorso[fieldName]);

      fieldName = '_DENOMINAZIONE_Livello';
      this.labelLivello = this.nullValue(this.myCorso[fieldName]);
      

      fieldName = '_DENOMINAZIONE_Sport'
      this.labelSport = this.nullValue(this.myCorso[fieldName]);


    }
    else if (this.myPianificazione) {

      //Sigla calendario
      this.labelSiglaCalendario = this.nullValue(this.myPianificazione.getDocPropertyInRepository(['IDCORSO'],'SIGLACALENDARIO'));

      fieldName = '_DENOMINAZIONE_Corso';
      this.labelDenominazioneCorso = this.nullValue(this.myPianificazione[fieldName]);

      //Tipo Corso
      this.valueTipoCorso = this.myPianificazione.getDocPropertyInRepository(['IDCORSO'],'TIPO');

      //Location
      fieldName = '_DENOMINAZIONE_Location';
      this.labelLocation = this.nullValue(this.myPianificazione[fieldName]);

      //Livello
      this.labelLivello = this.nullValue(this.myPianificazione.getDocPropertyInRepository(['IDCORSO','IDLIVELLOENTRATA'],'DENOMINAZIONE'));  
      
      //Sport
      this.labelSport = this.nullValue(this.myPianificazione.getDocPropertyInRepository(['IDCORSO','IDSPORT'],'DENOMINAZIONE'));  

      //Campo
      fieldName = '_DENOMINAZIONE_Campo';
      this.labelCampo = this.nullValue(this.myPianificazione[fieldName]);

     

    }

    
  }


  /**
   * Ritorna o il valore o stringa vuota
   * @param value Valore
   * @returns 
   */
  nullValue(value: string): string {
    return (value ? value : '');
  }

  
}


