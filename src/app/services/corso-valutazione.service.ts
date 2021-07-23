import { Injectable } from '@angular/core';
import { PostResponse } from '../library/models/postResult.model';
import { PostParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { CorsoValutazione } from '../models/corsovalutazione.model';

@Injectable({
  providedIn: 'root'
})
export class CorsoValutazioneService {

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Il metodo effettua una chiamata al server per recuperare la scheda
   * 
   * @param idCorso idCorso richiesto
   * @returns CorsoValutazione 
   * @returns Reject Message
   */
requestSchedaValutazioneCorso(idCorso: string):Promise<CorsoValutazione> {
      let myPostParams : PostParams = new PostParams();
      let method = 'getSchedaForTrainer';
      let docToCall: CorsoValutazione = new CorsoValutazione();

    return new Promise<CorsoValutazione>((resolve, reject) => {
      if (idCorso && idCorso.length != 0) {

        //Preparo i parametri della chiamata
        myPostParams.key = 'idCorso';
        myPostParams.value = idCorso;

        this.docStructureService.requestForFunction(docToCall,method,'',myPostParams)
                                .then((risposta: PostResponse) => {

                                  //Non si puo' richiedere la scheda
                                  if (!risposta.result) {

                                    reject(risposta.message);

                                  }
                                  else if (risposta.document) {
                                    //Ho un documento e lo trasformo in CorsoValutazione
                                    let myDocScheda = new CorsoValutazione();
                                    myDocScheda.setJSONProperty(risposta.document);

                                    resolve(myDocScheda);
                                  }
                                  else {
                                    reject('Scheda non ricevuta');
                                  }
                                })
                                .catch(error => {
                                  reject(error);
                                })
      }
      else {
        reject('Nessun corso richiesto');
      }
    })
  }

}
