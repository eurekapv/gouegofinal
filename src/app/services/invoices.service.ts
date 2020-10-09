import { Injectable } from '@angular/core';
import { IDDocument } from '../library/models/iddocument.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private docStructureService: DocstructureService) { }

  insertInvoicesIntoUtente(utente: Utente){
    return new Promise ((resolve, reject) => {
      if(utente){
        this.docStructureService.loadCollection(utente, 'RICEVUTE')
        .then((updatedUtente) => {
          resolve(updatedUtente);
        })
        .catch(error => {
          reject (error);
        })
      }
      else{
        reject('Utente non specificato');
      }
    })
  }
}
