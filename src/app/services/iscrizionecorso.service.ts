import { Injectable } from '@angular/core';
import { PostResponse } from '../library/models/postResult.model';
import { PostParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { IscrizioneCorso } from '../models/iscrizionecorso.model';


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
   * Chiama il server e richiede una nuova iscrizione corso
   * PostResponse.result => TRUE Salvataggio Corretto
   * PostResponse.code => Id Iscrizione salvata
   * 
   * @param docIscrizione Iscrizione Corso
   * @returns PostResponse 
   */
  requestSaveIscrizione(docIscrizione: IscrizioneCorso):Promise<PostResponse> {
    return new Promise<PostResponse>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      let myReturn: PostResponse;



      if (docIscrizione) {
        myPostParams.key = 'docIscrizione';
        myPostParams.value = docIscrizione;

        this.docStructureService.requestForFunction(docIscrizione,'mobBookingSave',docIscrizione,myPostParams)
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

}
