import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostResponse } from '../../library/models/post-response.model';
import { PostParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { MasterDocumento } from '../../models/utente/master-documento.model';
import { Utente } from '../../models/utente/utente.model';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private _listaDocumentiFiscali: MasterDocumento[] = [];
  listaDocumentiFiscali = new BehaviorSubject<MasterDocumento[]>([])

  constructor(private docStructureService: DocstructureService) { }

 

  /**
   * la funzione richede al server l'elenco delle ricevute per l'utente passato
   * @param utente l'untete per cui si richiedono le fatture
   */
  requestInvoices(utente: Utente, anno?: number):Promise<MasterDocumento[]>{  
    return new Promise((resolve, reject) => {

      //creo il filtro
      let filterDocuement: MasterDocumento = new MasterDocumento(true);
      filterDocuement.IDANAGRAFICA = utente.ID;

      //se c'è l'anno, lo inserisco nel filtro
      if (anno){
        filterDocuement.ANNO = anno;
      }      

      //faccio la richiesta
      this.docStructureService.requestNew(filterDocuement)
      .then(listDocuments => {
        
        //salvo la lista in memoria e scateno l'bservable
        this._listaDocumentiFiscali = listDocuments;
        this.listaDocumentiFiscali.next(this._listaDocumentiFiscali);
        resolve(this._listaDocumentiFiscali);

      })
      .catch(error => {
        //errore di connessione
        reject (error);
      })
    })    
  }


  /**
   * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
   * @param documento elemento MasterDocumento che si vuole scaricare
   */
  downloadInvoice(documento: MasterDocumento):Promise<PostResponse>{
    return new Promise ((resolve, reject) => {

      //metodo statico da richiamare
      const method = 'getFile';

      //creo il mio parametro
      let myParams: PostParams = new PostParams();
      myParams.key = 'primaryKey';
      myParams.value = documento.ID;

      this.docStructureService.requestForFunction(documento, method, null, myParams)
      .then((response: PostResponse) => {
        resolve (response);
      })
      .catch(error => {
        reject (error);
      })


    })
  }






  /**
   * la funzione, presa una stringa b64 e il content-type, restituisce il blob
   * @param b64Data stringa B64 SENZA tipo di file
   * @param contentType stringa tipo file (default: application/pdf)
   */
  base64toBlob(b64Data, contentType='application/pdf'):Promise<Blob>{
    
    return new Promise((resolve, reject) => {

      let fullB64 = 'data:'+contentType + ';base64,'+ b64Data;
    
              fetch(fullB64).then(res => {
                res.blob().then(blob => {
                  resolve(blob);
                })
              })
    })
  }










          
}
