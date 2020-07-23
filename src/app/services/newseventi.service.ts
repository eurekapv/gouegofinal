import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { StartConfiguration } from '../models/start-configuration.model';
import { NewsEventi } from '../models/newseventi.model';
import { IDDocument } from '../library/models/iddocument.model';




@Injectable({
  providedIn: 'root'
})
export class NewseventiService {

  private _listNews = new BehaviorSubject<NewsEventi[]>([]);

  get listNews() {
    return this._listNews.asObservable();
  }

  constructor(private apiService: ApicallService) { }


  /**
   * 
   * @param config Dati configurazione
   * @param idArea Area richiesta
   * @param maxRecord Max Record da recuperare
   */
  request(config: StartConfiguration, idArea: string, maxRecord: number = 0) {
    return new Promise((resolve, reject)=>{
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'NEWSEVENTO';
      const filterDateTime = this.getFilterDateTime();
  
      //In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('appid',config.appId);
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto l'area richiesta
      let myParams = new HttpParams().set('IDAREAOPERATIVA',idArea);
      myParams = myParams.append('PUBBLICATADAL',filterDateTime);
      myParams = myParams.append('$top', (maxRecord + '') );
  
      //Elimino gli attuali
      this._listNews.next([]);
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
            
              let arReturn = [];
              if (data.NEWSEVENTO) {
                arReturn = data.NEWSEVENTO;
              }
  
              return arReturn;
            
        }))
        .subscribe (resultData => {
  
            resultData.forEach(element => {

              console.log('News Elemento');
              console.log(element);

              let newNews = new NewsEventi();
              newNews.setJSONProperty(element);
              this.addNews(newNews);


              console.log('News in JS');
              console.log(newNews);

              resolve();
            });
        }, error=>{
          reject(error);
        })
    })
  }

  /**
   * Aggiunge una news
   * @param objNews News da aggiungere
   */
  addNews(objNews: NewsEventi) {
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
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'NEWSEVENTO';
    

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('appid',config.appId);
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

}
