import { Injectable } from '@angular/core';
import { DocstructureService } from '../library/services/docstructure.service';
import { BehaviorSubject } from 'rxjs';
import { Tesseramento } from '../models/tesseramento';

@Injectable({
  providedIn: 'root'
})
export class TesseramentoService {

  private _listTessere$ = new BehaviorSubject<Tesseramento[]>([]);
  public get listTessere$() {
    return this._listTessere$;
  }

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Effettua la richiesta per l'elenco delle Tessere Utente
   * @param {string} idUtente Utente
   * @returns 
   */
  request(idUtente: string): Promise<void> {

    return new Promise<void>((resolve, reject) => {

      let filterDoc: Tesseramento = new Tesseramento(true);
      filterDoc.ANNULLATA = 0;
      filterDoc.IDUTENTE = idUtente;

      //Effettuo la richiesta
      this.docStructureService.requestNew(filterDoc)
          .then(listReceived => {
              if (listReceived) {
                this._listTessere$.next(listReceived);
              }
              else {
                this._listTessere$.next([]);
              }

              //Chiamata conclusa
              resolve();
          })
          .catch(error => {
            //errore di connessione
            reject (error);
          })
    })
  }  
}
