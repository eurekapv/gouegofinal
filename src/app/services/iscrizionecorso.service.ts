import { Injectable } from '@angular/core';
import { PostResponse } from '../library/models/postResult.model';
import { PostParams, RequestParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { IscrizioneCorso } from '../models/iscrizione-corso.model';


@Injectable({
  providedIn: 'root'
})
export class IscrizionecorsoService {

  constructor(private docStructureService: DocstructureService
              ) { }
 
  /**
   * Contatta il server per conoscere se sono ancora 
   * disponibili posti per l'iscrizione a un corso
   * 
   * Ritorna un oggetto di tipo =>  PostResponse
   * Result = TRUE (Posti diponibili) / FALSE (Posti Esauriti)
   * @param idCorso idCorso da interrrogare
   */
  getPostiDisponibiliCorso(idCorso: string):Promise<PostResponse> {

    return new Promise<PostResponse>((resolve) => {
      
      let myPostParams : PostParams = new PostParams();
      let myReturn: PostResponse;
      let docToCall: IscrizioneCorso = new IscrizioneCorso();


      if (idCorso && idCorso.length != 0) {
        myPostParams.key = 'idCorso';
        myPostParams.value = idCorso;

        this.docStructureService.requestForFunction(docToCall,'getPostiDisponibili','',myPostParams)
                        .then((risposta: PostResponse) => {
                          resolve(risposta);
                        })
                        .catch(error => {
                          myReturn = new PostResponse();
                          myReturn.result = false;
                          myReturn.message = 'Nessun posto disponibile';
                          resolve(myReturn);                          
                        })


      }
      else {
        myReturn = new PostResponse();
        myReturn.result = false;
        myReturn.message = 'Nessun posto disponibile';
        resolve(myReturn);
      }

      
            
    })
  }

  /**
   * Chiama il server e richiede l'importo per una iscrizione del corso
   * Al minimo deve essere valorizzato IDCorso, IDUtente
   * @param docIscrizione Iscrizione Corso
   * @returns Iscrizione Corso
   * @deprecated Usare la versione requestTotale
   */
  requestTotaleIscrizione(docIscrizione: IscrizioneCorso):Promise<IscrizioneCorso> {

    return new Promise<IscrizioneCorso>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      
      if (docIscrizione) {
        myPostParams.key = 'sampleIscrizione';
        myPostParams.value = docIscrizione;

        this.docStructureService.requestForFunction(docIscrizione,'mobBookingTotale',docIscrizione,myPostParams)
                        .then((data: any) => {
                          let elIscrizione: IscrizioneCorso;
                          elIscrizione = new IscrizioneCorso();

                          
                          if (data) {
                            elIscrizione.setJSONProperty(data);
                          }

                          resolve(elIscrizione);
                        })
                        .catch(error => {
                          reject(error)
                        })


      }
      else {
        reject('Errore preparazione documenti');
      }

    })
  }  

  /**
   * In caso di errori server va in reject
   * @param paramsDocIscrizione Documento a cui vengono compilati
   * DataIscrizione, IdCorso, IdUtente, IdTipoPagamento
   */
  onRequestIscrizioneDocFor(paramsDocIscrizione: IscrizioneCorso):Promise<IscrizioneCorso> {
    return new Promise<IscrizioneCorso>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      const method = 'onRequestIscrizioneDocFor';
      
      if (paramsDocIscrizione) {
        myPostParams.key = 'sampleIscrizione';
        myPostParams.value = paramsDocIscrizione;

        this.docStructureService.requestForFunction(paramsDocIscrizione,method,paramsDocIscrizione,myPostParams)
                        .then((data: PostResponse) => {

                          let elIscrizione: IscrizioneCorso;

                          if (data && data.result) {
                            //Iscrizione ricevuta
                            elIscrizione = new IscrizioneCorso();
  
                            if (data.document) {
                              elIscrizione.setJSONProperty(data.document);
                            }

                            resolve(elIscrizione);

                          }
                          else {
                            reject('Calcolo totale fallito');
                          }

                        })
                        .catch(error => {
                          reject(error)
                        })


      }
      else {
        reject('Errore preparazione documenti');
      }

    })
  }


  /**
   * Chiama il server e richiede una nuova iscrizione corso
   * PostResponse.result => TRUE Salvataggio Corretto
   * PostResponse.code => Id Iscrizione salvata
   * 
   * @param docIscrizione Iscrizione Corso
   * @returns PostResponse 
   */
  onRequestIscrizioneDocSave(docIscrizione: IscrizioneCorso):Promise<PostResponse> {
    return new Promise<PostResponse>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      let myReturn: PostResponse;
      let method = 'onRequestIscrizioneDocSave';


      if (docIscrizione) {
        myPostParams.key = 'receivedDoc';
        myPostParams.value = docIscrizione;

        this.docStructureService.requestForFunction(docIscrizione, method ,docIscrizione,myPostParams)
                        .then((risposta: PostResponse) => {
                          resolve(risposta);
                        })
                        .catch(error => {
                          myReturn = new PostResponse();
                          myReturn.result = false;
                          myReturn.message = error.message;
                          resolve(myReturn);                          
                        })


      }
      else {
        myReturn = new PostResponse();
        myReturn.result = false;
        myReturn.message = 'Errore preparazione Iscrizione';
        resolve(myReturn);
      }

    })
  }

  /**
   * Ricerca una Iscrizione Corso per Chiave Primaria
   * (Reject se non trovata)
   * @param idPrimary Chiave Primaria
   * @param childLevel Default = 1 
   * @param decodeAll Default FALSE - Decodifica la ricezione
   */
  requestById(idPrimary: string, childLevel: number = 1, decodeAll:boolean = false): Promise<IscrizioneCorso> {
    let filterDoc: IscrizioneCorso;
    let reqParams: RequestParams;

    return new Promise<IscrizioneCorso>((resolve, reject) => {
        if (idPrimary && idPrimary.length != 0) {

          filterDoc = new IscrizioneCorso(true);
          filterDoc.ID = idPrimary;

          reqParams = new RequestParams();
          reqParams.child_level = childLevel;
          reqParams.decode.active = decodeAll;

          this.docStructureService.requestNew(filterDoc, reqParams)
                                  .then(listReceived => {
                                    if (!listReceived || listReceived.length == 0) {
                                      reject('Iscrizione non trovata');
                                    }
                                    else {
                                      resolve(listReceived[0]);
                                    }
                                  })
                                  .catch(error => {
                                    reject(error);
                                  })                                  

        }
        else {
          reject('Id Primary undefined');
        }
    })
  }


  /**
   * Effettua il caricamento dei dati filtrati
   * @param filterDoc Filtro con i campi per la ricerca
   * @param childLevel 
   * @param decodeAll 
   * @returns 
   */
  requestByFilter(filterDoc: IscrizioneCorso, childLevel: number = 1, decodeAll:boolean = false): Promise<IscrizioneCorso[]> {

    let reqParams: RequestParams;

    return new Promise<IscrizioneCorso[]>((resolve, reject) => {
        if (filterDoc) {
          
          reqParams = new RequestParams();
          reqParams.child_level = childLevel;
          reqParams.decode.active = decodeAll;

          this.docStructureService.requestNew(filterDoc, reqParams)
                                  .then(listReceived => {
                                    resolve(listReceived);
                                  })
                                  .catch(error => {
                                    reject(error);
                                  })

        }
        else {
          reject('FilterDoc undefined');
        }
    })
  }  
}
