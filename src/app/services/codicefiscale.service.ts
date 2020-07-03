import { Injectable } from '@angular/core';
import { CodiceFiscale } from '../models/codicefiscale.model';

@Injectable({
  providedIn: 'root'
})
export class CodicefiscaleService {

  private _codiceFiscale: string;

  set codiceFiscale(value) {
    this._codiceFiscale = value; 
  }

  get codiceFiscale() {
    return this.codiceFiscale;
  }


  constructor() { }

  /**
   * Effettua il controllo di un codice fiscale e torna TRUE se corretto o FALSE se non corretto
   * Nel caso fosse corretto puo' essere richiesta la decodifica del codice in Comune, Provincia, DataNascita etc.
   * @param docCF Documento Codice Fiscale
   * @param decode Decodifica il Codice Fiscale se corretto
   */
  checkCodiceFiscale(docCF: CodiceFiscale, decode?:boolean): boolean {
    let check = false;
    let resDecode = false;

    if (docCF) {
      check = docCF.validate();
    }

    if (check && decode) {
        //Effettuo la decodifica base
        resDecode = docCF.basicDecode();

        //Effettuo la chiamata per ottenere i dati del comune dal codice catastale
        if (resDecode) {

        }
    }
    return check;
  }


  



  
}
