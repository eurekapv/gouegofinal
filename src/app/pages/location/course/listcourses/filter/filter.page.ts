import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Sport } from 'src/app/models/sport.model';
import { CategoriaEta } from 'src/app/models/categoriaeta.model';
import { Subscription } from 'rxjs';
import { FilterCorsi } from 'src/app/models/filtercorsi.model';
import { ValueList, TargetSesso, TipoCorso } from 'src/app/models/valuelist.model';
import { ModalController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit, OnDestroy {

  @Input() myFilter: Corso;

  listSport: Sport[];
  listCatEta: CategoriaEta[];
  listenSport: Subscription;
  listenCatEta: Subscription;

  listTargetSesso: ValueList[] = [];
  listTipoCorso: ValueList[] = [];

  dataFine: Date = new Date;

  constructor(private startService: StartService,
              private mdlController: ModalController) { 

    this.listenSport = this.startService.listSport.subscribe(listElements => {
      this.listSport = listElements;
    });

    this.listenCatEta = this.startService.listCategoriaEta.subscribe( listElements => {
      this.listCatEta = listElements;
    });

    this.listTargetSesso = ValueList.getArray(TargetSesso);
    this.listTipoCorso = ValueList.getArray(TipoCorso);
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.listenSport) {
      this.listenSport.unsubscribe();
    }

    if (this.listenCatEta) {
      this.listenCatEta.unsubscribe();
    }
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  };

  compareWithSelect = this.compareWithFn;


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
    this.myFilter.DATAFINE = new Date(this.dataFine);
    this.mdlController.dismiss({
      'dismissFilter': this.myFilter
    });
  }

  /**
   * Svuota tutti i filtri, tranne la location
   */
  emptyFilter() {
    this.myFilter.TARGETSESSO = null;
    this.myFilter.TIPO = null;
    this.myFilter.IDSPORT = null;
    this.myFilter.IDCATEGORIEETA = null;
    this.myFilter.DATAFINE = new Date();
  }
}
