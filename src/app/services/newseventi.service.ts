import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { StartConfiguration } from '../models/start-configuration.model';
import { NewsEvento } from '../models/newsevento.model';
import { IDDocument } from '../library/models/iddocument.model';
import { promise } from 'protractor';




@Injectable({
  providedIn: 'root'
})
export class NewseventiService {

  private _listNews = new BehaviorSubject<NewsEvento[]>([]);

  get listNews() {
    return this._listNews.asObservable();
  }

  constructor(private apiService: ApicallService) { }



  /**
   * Aggiunge una news
   * @param objNews News da aggiungere
   */
  addNews(objNews: NewsEvento) {
    this.listNews
      .pipe(take(1))
      .subscribe (collNews => {
        let findElement = collNews.find(element => {
          return element.ID == objNews.ID
        });

        if (!findElement) {
          this._listNews.next( collNews.concat(objNews));
        }
      })
  }
  

  /**
   * Crea il Parametro Filtro per il campo PUBBLICATADAL
   */
  getFilterDateTime(): string {
    let adesso = new Date();
    let newDoc = new IDDocument();
    let strAdesso = newDoc.formatDateTimeISO(adesso);

    strAdesso = '<' + strAdesso;

    return strAdesso;
  }

  /** Recupera una News e la torna Observable, 
   *
   * @param config Configurazione
   * @param idNews News ricercata
   * */
  getNewsById(idNews: string) {
    let news = this._listNews
                      .getValue()
                      .find(element => {
                        return (element.ID == idNews)
                      });

    return news;
  }

  /**
   * Richiede al server la news
   * @param config Dati configurazione
   * @param idNews News da richiedere al server
   */
  private _requestServerById(config: StartConfiguration, idNews: string) {
    let myHeaders = config.getHttpHeaders();
    //new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'NEWSEVENTO';
    

    let myUrl = config.urlBase + '/' + doObject;  

    //Nei Parametri imposto l'area richiesta
    let myParams = new HttpParams().set('ID',idNews);
    

    return this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
          
            let arReturn = [];
            if (data.NEWSEVENTO) {
              arReturn = data.NEWSEVENTO;
            }

            return arReturn;
          
      }))
      .pipe(take(1))

  }

  /**
   * 
   * @param config Parametri di configurazione
   * @param guidArea GUID Area di riferimento
   * @param n Numero massimo di elementi
   * @returns Promise<NewsEvento[]>
   */
  request(config: StartConfiguration, guidArea:string, n:number){
    return new Promise<NewsEvento[]>((resolve,reject)=>{

      let myHeaders = config.getHttpHeaders();
      
      const doObject = 'NEWSEVENTO';
  
      myHeaders = myHeaders.append('X-HTTP-Method-Override','GETNEXTNEWS')
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto l'area richiesta
      let myParams = new HttpParams().set('guidArea',guidArea);

      myParams = myParams.append('$top', n+'');

      this.apiService.httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data=>{
        let arReturn = [];
        if (data.NEWSEVENTO){
          arReturn=data.NEWSEVENTO;
        }
        return arReturn;
      }))
      .subscribe(myListReceived => {

        let myListNews: NewsEvento[]=[];

        for (let index = 0; index < myListReceived.length; index++) {

          const objElement = myListReceived[index];
          //Creo un nuovo oggetto
          let newsEvento= new NewsEvento();
          //Copio le proprietà
          newsEvento.setJSONProperty(objElement);
          //Inserisco nell'array
          myListNews.push(newsEvento);

        }
        //La Promise ritorna l'elenco news
        resolve(myListNews);

      }, error=>{
        reject(error);
      })

    })
  }



}
