import { Injectable } from '@angular/core';
import { RequestParams } from '../library/models/requestParams.model';
import { TipoPagamento } from '../models/tipopagamento.model';
import { DocstructureService } from '../library/services/docstructure.service';

@Injectable({
  providedIn: 'root'
})
export class TipoPagamentoService {

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Effettua la richiesta per l'elenco della tipologie di pagamento
   * @returns 
   */
  request(numChild:number = 1, decodeAll: boolean = false): Promise<TipoPagamento[]> {

    return new Promise<TipoPagamento[]>((resolve, reject) => {

      let params: RequestParams = new RequestParams();
      let filterDoc: TipoPagamento = new TipoPagamento(true);
      //Carico quelli abilitati per l'app
      filterDoc.APPENABLE = true;
      
      params.child_level = numChild;
      params.decode.active = decodeAll;

      //Effettuo la richiesta
      this.docStructureService.requestNew(filterDoc, params)
          .then(listReceived => {
              //Chiamata conclusa
              resolve(listReceived);
          })
          .catch(error => {
            //errore di connessione
            reject (error);
          })
    })
  }
}
