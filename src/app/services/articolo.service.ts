import { Injectable } from '@angular/core';
import { DocstructureService } from '../library/services/docstructure.service';
import { BehaviorSubject } from 'rxjs';
import { Articolo } from '../models/articolo.model';
import { TipoArticolo } from '../models/valuelist.model';
import { LogApp } from '../models/log.model';
import { RequestParams } from '../library/models/requestParams.model';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {

  /*Elenco degli Articolo in tipologia PRODOTTO*/
  private _listProdotti$ = new BehaviorSubject<Articolo[]>([]);
  public get listProdotti$() {
    return this._listProdotti$;
  }

  /*Elenco degli Articoli in tipologia SERVIZIO*/
  private _listServizi$ = new BehaviorSubject<Articolo[]>([]);
  public get listServizi$() {
    return this._listServizi$;
  }

  /*Elenco degli Articoli in tipologia PACCHETTO ORE*/
  private _listPacchetti$ = new BehaviorSubject<Articolo[]>([]);
  public get listPacchetti$() {
    return this._listPacchetti$;
  }

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Effettuo la richiesta degli articoli
   * @param config Configurazione di Base (per recuperare URL File)
   * @param idArea Area di riferimento
   * @param tipoArticolo Tipologia Articolo (NULL per tutte)
   */
  request(config: StartConfiguration,
          idArea: string, 
          tipoArticolo?:TipoArticolo): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      let filterDoc: Articolo = new Articolo(true);
      filterDoc.IDAREAOPERATIVA = idArea;
      filterDoc.FLAGSHOPONLINE = true;

      
      console.log(config);

      if (tipoArticolo) {
        filterDoc.TIPOARTICOLO = tipoArticolo;
      }

      this.docStructureService.requestNew(filterDoc)
                              .then(listReceived => this._changePathCoverImage(config, listReceived))
                              .then(listReceived => {
                                console.log(listReceived)
                                switch (tipoArticolo) {
                                  case TipoArticolo.prodotto:
                                    //Modifico la lista PRODOTTO
                                    this._listProdotti$.next(listReceived);
                                    break;

                                  case TipoArticolo.servizio:
                                    //Modifico la lista SERVIZIO
                                    this._listServizi$.next(listReceived);
                                    break;           
                                    
                                  case TipoArticolo.pacchettoOre:
                                    //Modifico la lista PACCHETTO ORE
                                    this._listPacchetti$.next(listReceived);
                                    break;                                               
                                
                                  default:
                                    //Modifico tutti e 3 gli array
                                    let listFilter: Articolo[] = [];
                                    //Array prodotti
                                    listFilter = listReceived.filter(item => {
                                                    return item.TIPOARTICOLO == TipoArticolo.prodotto
                                                  })
                                    this._listProdotti$.next(listFilter);

                                    //Array SERVIZIO
                                    listFilter = listReceived.filter(item => {
                                      return item.TIPOARTICOLO == TipoArticolo.servizio
                                    })
                                    this._listServizi$.next(listFilter);

                                    //Array PACCHETTI ORE
                                    listFilter = listReceived.filter(item => {
                                      return item.TIPOARTICOLO == TipoArticolo.pacchettoOre
                                    })
                                    this._listPacchetti$.next(listFilter);

                                    break;
                                }

                                resolve();
                              })
                              .catch(error => {
                                LogApp.consoleLog(error,"error");
                                resolve();
                              })
    })
  }

  /**
   * Effettuo la richiesta di un Articolo
   * @param idArticolo 
   * @param numChild Profondità della richiesta
   * @param decodeAll Decodifica le chiavi esterne
   * @returns 
   */
  requestById(idArticolo: string, numChild = 0, decodeAll = false): Promise<Articolo> {

    return new Promise<Articolo>((resolve, reject) => {
      if (idArticolo && idArticolo.length != 0)   {
        let filterDoc = new Articolo(true);
        filterDoc.ID = idArticolo;
        let reqParams = new RequestParams();
        reqParams.child_level = numChild;
        reqParams.decode.active = decodeAll;

        this.docStructureService.requestNew(filterDoc, reqParams)
                                .then(listData => {
                                  if (listData && listData.length != 0) {
                                    return listData[0];
                                  }
                                  else {
                                    reject('Articolo non trovato');
                                  }
                                })
                                .then(singleDoc => {
                                  resolve(singleDoc);
                                })
                                .catch(error => {
                                  LogApp.consoleLog(error, "error");
                                  reject(error);
                                })
      }
      else {
        reject('idArticolo non specificato');
      }
    })
  }


  /**
   * Adegua il Pathcoverimage cosi da avere un Url Assoluto corretto
   * @param config 
   * @param articoloDoc 
   */
  _changePathCoverImage(config:StartConfiguration, listDoc: Articolo[]): Promise<Articolo[]> {
    return new Promise<Articolo[]>((resolve) => {
      let urlStorage = '';

      if (config && listDoc) {
        //Recupero URL dello Storage
        urlStorage = config.urlStorageGroup;
        if (urlStorage.length != 0) {
          //Aggiungo il percorso assoluto 
          listDoc = listDoc.map<Articolo>((item) => {

            if (item.PATHCOVERIMAGE && item.PATHCOVERIMAGE.length != 0) {
              item.PATHCOVERIMAGE = `${urlStorage}/shopimage/${item.PATHCOVERIMAGE}`
            }
            return item;
          });

          resolve(listDoc);
        }
        else {
          resolve(listDoc);
        }
      }
      else {
        resolve(listDoc);
      }
    })
    

  }
}
