import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsEvento } from '../../models/newsevento.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { PostParams, RequestParams } from '../../library/models/requestParams.model';


@Injectable({
  providedIn: 'root'
})
export class NewseventiService {

  private _listNews = new BehaviorSubject<NewsEvento[]>([]);

  get listNews() {
    return this._listNews.asObservable();
  }

  constructor(private docStructure: DocstructureService) { }


  /**
   * Richiede al server la singola News per ID
   * @param idNews News da richiedere al server
   */
  public requestById(idNews: string): Promise<NewsEvento> {

    return new Promise<NewsEvento>((resolve, reject) => 
    {
        if (idNews && idNews.length != 0)       {

          let filterDoc = new NewsEvento(true);
          filterDoc.ID = idNews;

          this.docStructure.requestNew(filterDoc)
                           .then(listNews => {

                              if (listNews && listNews.length != 0) {
                                resolve(listNews[0]);
                              }
                              else {
                                reject('News not found');
                              }
                           })
                           .catch(error => {
                            reject(error);
                           })
        }
        else {
          reject('idNews undefined');
        }
    })

  }

  /**
   * 
   * @param config Parametri di configurazione
   * @param idArea GUID Area di riferimento
   * @param maxItems Numero massimo di elementi
   * @returns Promise<NewsEvento[]>
   */
  request(idArea:string, maxItems:number = 30): Promise<NewsEvento[]>{
    return new Promise<NewsEvento[]>((resolve,reject)=>{


      let docToCall: NewsEvento;
      let method = 'GETNEXTNEWS';
      let reqPostParams: PostParams[] = [];
      let reqOptions: RequestParams;

      
      
      if (idArea && idArea.length != 0) {
        
        docToCall = new NewsEvento(true);
  
        //Questi i parametri della richiesta
        PostParams.addParamsTo(reqPostParams, 'guidArea', idArea);   
        
        //Aggiungo il valore di Top
        reqOptions = new RequestParams();
        reqOptions.top = maxItems;
        
        this.docStructure.requestForFunction(docToCall, method, '', reqPostParams, reqOptions)
                       .then(postReponse => {

                          let listResult: NewsEvento[] = [];

                          if (postReponse && postReponse.hasOwnProperty('NEWSEVENTO')) {

                            //Converto in lista tipizzata
                            listResult = this.docStructure.castCollection(postReponse['NEWSEVENTO'], docToCall);
                          }

                          this._listNews.next(listResult);
                          resolve(listResult);
                          
                       })
                       .catch(error => {
                        reject(error);
                       })        



      }
      else {
        reject('idArea undefined');
      }



    })
  }





}
