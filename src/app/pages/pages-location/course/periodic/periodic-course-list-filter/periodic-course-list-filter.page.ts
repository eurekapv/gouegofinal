import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Sport } from 'src/app/models/archivi/sport.model';
import { CategoriaEta } from 'src/app/models/archivi/categoriaeta.model';
import { Subscription } from 'rxjs';
import { ValueList, TargetSesso, TipoCorso } from 'src/app/models/zsupport/valuelist.model';
import { ModalController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso/corso.model';

@Component({
  selector: 'app-periodic-course-list-filter',
  templateUrl: './periodic-course-list-filter.page.html',
  styleUrls: ['./periodic-course-list-filter.page.scss'],
})
export class PeriodicCourseListFilterPage implements OnInit, OnDestroy {

  @Input() set myFilter(value: Corso) {
    this._myFilter = value;
    //Procedo alla decodifica
    this.onDecodeId();
  }
  _myFilter: Corso = new Corso(true);

  listSport: Sport[];
  listCatEta: CategoriaEta[];
  subListenSport: Subscription;
  subListenCatEta: Subscription;

  listTargetSesso: ValueList[] = [];
  listTipoCorso: ValueList[] = [];

  dataFine: Date = new Date();


  constructor(private startService: StartService,
              private mdlController: ModalController) { 
                this.onListenData();
              }


  ngOnInit() {

    //Richiedo la lista Sport e Eta
    this.startService.requestSport(true, true);
    this.startService.requestCategorieEta();

  } 

  ngOnDestroy() {
    if (this.subListenSport) {
      this.subListenSport.unsubscribe();
    }

    if (this.subListenCatEta) {
      this.subListenCatEta.unsubscribe();
    }
  }  
/**
 * Effettuo la sottoscrizione alla ricezione
 */
 onListenData() {
                
  this.subListenSport = this.startService.listSport.subscribe(listElements => {
    this.listSport = listElements.filter(item => {
      return !item.DATACANC
    });
    //Procedo alla decodifica
    this.onDecodeId();
  });

  this.subListenCatEta = this.startService.listCategoriaEta.subscribe( listElements => {
    this.listCatEta = listElements;
    //Procedo alla decodifica
    this.onDecodeId();
  });

  this.listTargetSesso = ValueList.getArray(TargetSesso);
  this.listTipoCorso = ValueList.getArray(TipoCorso);
  //Procedo alla decodifica
  this.onDecodeId();

 }

 /**
  * Cerca di decodificare i campi impostando una descrizione
  */
 onDecodeId(): void {
  let mySport: Sport;
  let myCatEta: CategoriaEta;
  let myTarget: ValueList;
  let myTipoCorso: ValueList;
  let nameProp = '';
  

  if (this._myFilter) {

    //Lista Sport presente
    if (this.listSport) {
      mySport = this.listSport.find(elItem => {
        return elItem.ID == this._myFilter.IDSPORT
      });

    }

    if (this.listCatEta) {
      myCatEta = this.listCatEta.find(elItem => {
        return elItem.ID == this._myFilter.IDCATEGORIEETA
      });
    }   
    
    if (this._myFilter.TIPO) {
      if (this.listTipoCorso) {
        myTipoCorso = this.listTipoCorso.find(elItem => {
          return elItem.value == this._myFilter.TIPO
        });        
      }
    }

    if (this._myFilter.TARGETSESSO) {
      if (this.listTargetSesso) {
        myTarget = this.listTargetSesso.find(elItem => {
          return elItem.value == this._myFilter.TARGETSESSO
        });        
      }
    }

    //Attribuzione Descrizioni
    nameProp = '_DESCRSPORT';
    if (mySport) {
      this._myFilter[nameProp] = mySport.DENOMINAZIONE
    }
    else {
      this._myFilter[nameProp] = 'Tutti'
    }

    nameProp = '_DESCRCATEGORIAETA';
    if (myCatEta) {
      this._myFilter[nameProp] = myCatEta.DESCTOOLTIP
    }
    else {
      this._myFilter[nameProp] = 'Tutte'
    }

    nameProp = '_DESCRTIPO';
    if (myTipoCorso) {
      this._myFilter[nameProp] = myTipoCorso.description
    }
    else {
      this._myFilter[nameProp] = 'Tutti'
    }

    nameProp = '_DESCRTARGETSESSO';
    if (myTarget) {
      this._myFilter[nameProp] = myTarget.description
    }
    else {
      this._myFilter[nameProp] = 'Tutti'
    }
  }
 }






  /**
   * Effettuata la scelta del Sesso
   * @param itemSesso 
   */
  onClickChooseSesso(itemSesso?: ValueList) {
    let nameProp = '_DESCRTARGETSESSO';
    if (this._myFilter) {
      if (itemSesso) {
        this._myFilter.TARGETSESSO = itemSesso.value;
        this._myFilter[nameProp] = itemSesso.description;
      }
      else {
        this._myFilter.TARGETSESSO = null;
        this._myFilter[nameProp] = 'Tutti';
      }
    }
  }

  /**
   * Effettuata la scelta della Categoria Età
   * @param itemEta 
   */
  onClickChooseCategoriaEta(itemEta?: CategoriaEta) {
    let nameProp = '_DESCRCATEGORIAETA';
    if (this._myFilter) {
      if (itemEta) {
        this._myFilter.IDCATEGORIEETA = itemEta.ID;
        this._myFilter[nameProp] = itemEta.DESCTOOLTIP;
      }
      else {
        this._myFilter.IDCATEGORIEETA = null;
        this._myFilter[nameProp] = 'Tutte';      }
    }
  }  

  /**
   * Effettuata la scelta della Attività
   * @param itemSport 
   */
  onClickChooseSport(itemSport?: Sport) {
    let nameProp = '_DESCRSPORT';
    if (this._myFilter) {
      if (itemSport) {
        this._myFilter.IDSPORT = itemSport.ID;
        this._myFilter[nameProp] = itemSport.DENOMINAZIONE;
      }
      else {
        this._myFilter.IDSPORT = null;
        this._myFilter[nameProp] = 'Tutte';      
      }
    }
  }  

  /**
   * Effettuata la scelta del Sesso
   * @param itemTipo 
   */
  onClickChooseTipologia(itemTipo?: ValueList) {
    let nameProp = '_DESCRTIPO';
    if (this._myFilter) {
      if (itemTipo) {
        this._myFilter.TIPO = itemTipo.value;
        this._myFilter[nameProp] = itemTipo.description;
      }
      else {
        this._myFilter.TIPO = null;
        this._myFilter[nameProp] = 'Tutti';
      }
    }
  }  

  /**
   * Chiudo la videata Annullando tutto
   */
  closeFilter() {
    this.mdlController.dismiss({
      'dismissFilter': undefined
    });
  }

  /**
   * Chiudo la videata applicando i filtri impostati
   */
  applyFilter() {
    this._myFilter.DATAFINE = new Date(this.dataFine);
    this.mdlController.dismiss({
      'dismissFilter': this._myFilter
    });
  }

  /**
   * Svuota tutti i filtri, tranne la location
   */
  emptyFilter() {
    let nameProp = '_DESCRTARGETSESSO';

    this.dataFine = new Date();

    nameProp = '_DESCRTARGETSESSO';
    this._myFilter.TARGETSESSO = null;
    this._myFilter[nameProp] = 'Tutti';
    
    nameProp = '_DESCRTIPO';
    this._myFilter.TIPO = null;
    this._myFilter[nameProp] = 'Tutti';
    
    nameProp = '_DESCRSPORT';
    this._myFilter.IDSPORT = null;
    this._myFilter[nameProp] = 'Tutti';
    
    
    nameProp = '_DESCRCATEGORIAETA';
    this._myFilter.IDCATEGORIEETA = null;
    this._myFilter[nameProp] = 'Tutte';

    this._myFilter.DATAFINE = new Date();
  }
}
