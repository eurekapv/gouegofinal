import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CategoriaEta } from '../../models/archivi/categoriaeta.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { LogApp } from '../../models/zsupport/log.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaetaService {

  private _listCategorieEta = new BehaviorSubject<CategoriaEta[]>([]);

  get listCategorieEta() {
    return this._listCategorieEta.asObservable();
  }

    /**
   * Ritorna la lista non in modalità Observable
   */
  get actualListCategorieEta() {
    return this._listCategorieEta.getValue();
  }

  constructor(private serviceDocStructure: DocstructureService) { }

  /**
   * Richiede al server l'elenco delle Categorie Eta
   * @param config Parametri configurazione chiamata
   */
  request():Promise<CategoriaEta[]> {
    return new Promise<CategoriaEta[]>((resolve,reject)=>{

      let filterCategoria: CategoriaEta = new CategoriaEta(true);

      //Richiedo tutte le categorie
      filterCategoria.ID = '.';
      this.serviceDocStructure.requestNew(filterCategoria)
                              .then(listReceived => {
                                let listReceivedTyped: CategoriaEta[] = listReceived;
                                //Riemetto Observable
                                this._listCategorieEta.next(listReceivedTyped);
                                //Chiudo la Promise
                                resolve(listReceivedTyped);
                              })
                              .catch(error => {
                                LogApp.consoleLog(error);
                                reject(error);
                              })
    })
  }



  /**
   * Cerca e ritorna un record della categoria eta
   * @param idCategoriaEta idCategoria Scelta
   */
  findCategoriaEtaById(idCategoriaEta: string): CategoriaEta {
    let objCategoria: CategoriaEta;
    let listaCat = this._listCategorieEta.getValue();

    if (idCategoriaEta && listaCat && listaCat.length != 0 ) {
        objCategoria = listaCat.find(elCat => {
          return (elCat.ID == idCategoriaEta);
        })
    }

    return objCategoria;
  }


  /**
   * IDCategoria da controllare se l'età risulta valida
   * @param idCategoria idCategoria scelta
   * @param eta Età
   */
  isValid(idCategoria: string, eta: number): boolean {
    let isValid = false;
    let objCategoria: CategoriaEta;

    objCategoria = this.findCategoriaEtaById(idCategoria);

    if (objCategoria) {
        isValid = objCategoria.isValid(eta);
    }

    return isValid;
  }
}
