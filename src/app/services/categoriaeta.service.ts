import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { CategoriaEta } from '../models/categoriaeta.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';

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

  constructor(private apiService: ApicallService) { }

  /**
   * Richiede al server l'elenco delle Categorie Eta
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'CATEGORIEETA';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('appid',config.appId);
    //Nei Parametri imposto il LivelloAutorizzazione
    let myParams = new HttpParams().set('LivelloAutorizzazione','0');
    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
        return data.CATEGORIEETA
      }))
      .subscribe(
         resultData => {

          resultData.forEach(element => {
            let newCategoria = new CategoriaEta();
            newCategoria.setJSONProperty(element);
            this.addCategoriaEta(newCategoria);
          });
         }
      )
  }

  /**
   * Aggiunge un oggetto Categorie Eta all'Observable
   * @param objCategoriaEta Oggetto Categoria Eta da aggiungere
   */
  addCategoriaEta(objCategoriaEta: CategoriaEta) {
    this.listCategorieEta
      .pipe(take(1))
      .subscribe( collEta => {
        this._listCategorieEta.next( collEta.concat(objCategoriaEta));
      })
  }
}
