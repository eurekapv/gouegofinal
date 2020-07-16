import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { IDDocument } from '../models/iddocument.model';
import { Area } from 'src/app/models/area.model';
import { Campo } from 'src/app/models/campo.model';
import { CampoSport } from 'src/app/models/camposport.model';
import { CategoriaEta } from 'src/app/models/categoriaeta.model';
import { Corso } from 'src/app/models/corso.model';
import { CorsoProgramma } from 'src/app/models/corsoprogramma.model';

@Injectable({
  providedIn: 'root'
})
export class DocstructureService {

  tableDocuments = [];

  constructor() { 
    this.initTableDocuments();
  }



  //Inizializzo tutti i documenti
  initTableDocuments() {

    let docAccount = new Account();
    this.addToTable(docAccount);

    let docArea = new Area();
    this.addToTable(docArea);

    let docCampo = new Campo();
    this.addToTable(docCampo);

    let docCampoSport = new CampoSport();
    this.addToTable(docCampoSport);

    let docCatEta = new CategoriaEta();
    this.addToTable(docCatEta);

    let docCorso = new Corso();
    this.addToTable(docCorso);

    let docCorsoProgramma = new CorsoProgramma();
    this.addToTable(docCorsoProgramma);

    
    
  }



  addToTable(document: IDDocument) {
    if (document) {
      this.tableDocuments.push(document);
    }
  }
}



