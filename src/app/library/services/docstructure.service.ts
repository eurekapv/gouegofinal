import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { IDDocument } from '../models/iddocument.model';
import { Area } from 'src/app/models/area.model';
import { Campo } from 'src/app/models/campo.model';

@Injectable({
  providedIn: 'root'
})
export class DocstructureService {

  tableDocuments = [];

  constructor() { }



  //Inizializzo tutti i documenti
  initTableDocuments() {

    let docAccount = new Account();
    this.addToTable(docAccount);

    let docArea = new Area();
    this.addToTable(docArea);

    let docCampo = new Campo();
    this.addToTable(docCampo);

    
  }



  addToTable(document: IDDocument) {
    if (document) {
      this.tableDocuments.push(document);
    }
  }
}



