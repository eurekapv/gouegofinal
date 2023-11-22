import { Injectable } from '@angular/core';
import { RequestDecode, RequestParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { CorsoAllegato } from '../../models/corso/corsoallegato.model';

@Injectable({
  providedIn: 'root'
})
export class CorsoallegatoService {

  constructor(
    private docStructureService: DocstructureService
  ) { }


  requestByIdCorso(idCorso: string):Promise<CorsoAllegato[]>{
    return new Promise((resolve, reject) => {

    //filtro per la richiesta
    let myFilter = new CorsoAllegato(true);
    myFilter.IDCORSO = idCorso;

     //Parametri per la richiesta
     let myParams = new RequestParams();
     myParams.decode = new RequestDecode();
     myParams.decode.active = true;

     this.docStructureService.requestNew(myFilter, myParams)
     .then((listAllegati: CorsoAllegato[]) => {
       resolve(listAllegati);
     })

     .catch(error => {
       reject(error);
     })



    })
  }
}
