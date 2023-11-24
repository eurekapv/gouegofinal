import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostParams, RequestParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { Articolo } from '../../models/shop/articolo.model';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { DetailCarrello } from 'src/app/models/shop/detail-carrello.model';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { TipoRigoDetailCarrello } from 'src/app/models/zsupport/valuelist.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private docStructureService: DocstructureService
  ) { }

  //Lista Generale dei Carrelli
  private _listShopCarrello$: BehaviorSubject<ShopCarrello[]> = new BehaviorSubject<ShopCarrello[]>([]);

  public get listShopCarrello$() {
    return this._listShopCarrello$;
  }

  public get listShopCarrello(): ShopCarrello[] {
    return this._listShopCarrello$.getValue();
  }


  private _activeCart: BehaviorSubject<ShopCarrello> = new BehaviorSubject<ShopCarrello>(new ShopCarrello());

  public get activeCart$() {
    return this._activeCart;
  }

  public get activeCart(): ShopCarrello {
    return this._activeCart.getValue();
  }

  private startConfig: StartConfiguration; //Mi serve per modificare i path in arrivo
  

  //#region GESTIONE CART

  /**
   * Svuota e crea un nuovo carrello
   * @param {string} idArea
   */
  newShoppingCart(idArea: string, 
                  config: StartConfiguration): void {
    
    //Memorizzo la configurazione di start
    this.startConfig = config;

    //Preparo il nuovo carrello
    let cartDoc = new ShopCarrello();
    cartDoc.IDAREAOPERATIVA = idArea;

    this._activeCart.next(cartDoc);
  }

  /**
   * Aggiunge un elemento al carrello attivo
   * @param articoloDoc Articolo
   * @param idArticoloTaglia Taglia
   * @param idArticoloColor Colore
   */
  addItemToCart(articoloDoc:Articolo, 
                idArticoloTaglia?:string, 
                idArticoloColor?:string): Promise<void> {  

      return new Promise<void>((resolve) => {
        
        let itemCart: DetailCarrello;
        let cart: ShopCarrello;
    
        if (articoloDoc) {
          itemCart = new DetailCarrello();
          itemCart.TIPORIGO = TipoRigoDetailCarrello.prodotti;
          itemCart.IDARTICOLO = articoloDoc.ID;
          itemCart.IDARTICOLOCOLORE = idArticoloColor;
          itemCart.IDARTICOLOTAGLIA = idArticoloTaglia;
          itemCart.QUANTITA = 1;
    
          cart = this._activeCart.getValue();
          cart.DETAILCARRELLO.push(itemCart);
    
          this._activeCart.next(cart);
        
          resolve();
        }

      })

  }

  /**
   * Rimuove la riga richiesta dal carrello
   * @param idDetail 
   * @param {boolean} recalc Esegue il ricalcolo contattando il server
   */
  removeItemFromCart(idDetail: string, recalc = true):Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      let cart: ShopCarrello;
  
      if (idDetail && idDetail.length != 0) {
        cart = this._activeCart.getValue();
        if (cart && cart.DETAILCARRELLO && cart.DETAILCARRELLO.length != 0) {
          //Elimino la riga
          cart.DETAILCARRELLO = cart.DETAILCARRELLO.filter(item => item.ID != idDetail);
          //Riemetto il documento
          this._activeCart.next(cart);

          if (recalc) {
              return this.recalcCart();
          }
          else {
            //Chiudo subito
            resolve();
          }
        }
      }
    })
  }

  /**
   * Modifica la Quantita di un articolo di carrello
   * @param idDetail 
   * @param qta 
   * @param recalc 
   * @returns 
   */
  changeItemQuantityFromCart(idDetail: string, qta: number, recalc = true):Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      let cart: ShopCarrello;
  
      if (idDetail && idDetail.length != 0) {
        cart = this._activeCart.getValue();
        if (cart && cart.DETAILCARRELLO && cart.DETAILCARRELLO.length != 0) {
          let item: DetailCarrello;

          item = cart.DETAILCARRELLO.find(elItem => elItem.ID == idDetail);
          if (item) {
            item.QUANTITA = qta;

            //Riemetto il documento
            this._activeCart.next(cart);

            if (recalc) {
                return this.recalcCart();
            }
            else {
              //Chiudo subito
              resolve();
            }

          }


        }
      }
    })
  }


  /**
   * Contatta il server, inviando il carrello e ottenendo un carrello completo di importi, totali etc
   */
  recalcCart(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      let method = 'recalcCart';
      let cartDoc: ShopCarrello;
      
      //Recupero il carrello
      cartDoc = this._activeCart.getValue();

      if (cartDoc) {
        
        myPostParams.key = 'cartDoc';
        myPostParams.value = cartDoc;

        this.docStructureService.requestForFunction(cartDoc, method, '', myPostParams)
                                .then((risposta: PostResponse) => {
                                  if (!risposta.result) {
                                    reject(risposta.message);
                                  }
                                  else {
                                    console.log(risposta);
                                    return risposta.getTipizedDocument<ShopCarrello>();
                                  }
                                })
                                .then(cartDoc=> {
                                    //Reimposto l'immagine nei dettagli
                                    return this._changePathImage(cartDoc);
                                })
                                .then(cartDoc => {
                                  //Riemetto il carrello
                                  this._activeCart.next(cartDoc);
                                  resolve();
                                })
                                .catch(error => {
                                  reject(error);
                                })
      }
      else {
        reject('Nessun carrello presente');
      }
    })
  }

  /**
   * Adegua il Pathcoverimage cosi da avere un Url Assoluto corretto
   * @param config 
   * @param articoloDoc 
   */
  _changePathImage(carrelloDoc: ShopCarrello): Promise<ShopCarrello> {
    return new Promise<ShopCarrello>((resolve) => {
      let urlStorage = '';
      let defaultImage = environment.additionalConfig.defaultShopImage;

      if (this.startConfig && carrelloDoc && carrelloDoc.DETAILCARRELLO) {
        //Recupero URL dello Storage
        urlStorage = this.startConfig.urlStorageGroup;

        carrelloDoc.DETAILCARRELLO.forEach(elDetail => {
          if (elDetail.TIPORIGO == TipoRigoDetailCarrello.prodotti) {

            if (urlStorage.length != 0) {
              if (elDetail.PATHCOVERIMAGE && elDetail.PATHCOVERIMAGE.length != 0) {
                elDetail.PATHCOVERIMAGE = `${urlStorage}/shopimage/${elDetail.PATHCOVERIMAGE}`
              }
              else {
                elDetail.PATHCOVERIMAGE = defaultImage;
              }
            }
            else {
              elDetail.PATHCOVERIMAGE = defaultImage;
            }
          }
        });

        resolve(carrelloDoc);
      }
      else {
        resolve(carrelloDoc);
      }
    })
    

  }  

  //#endregion 

  //#region ShopCarrello

  /**
   * Richiede gli Ordini per Utente
   * @param idUtente 
   * @returns 
   */
  requestList(idUtente: string): Promise<ShopCarrello[]> {
    return new Promise<ShopCarrello[]>((resolve, reject) => {
      let reqParams: RequestParams = new RequestParams();
      let filterDoc: ShopCarrello = new ShopCarrello(true);
      filterDoc.IDANAGRAFICA = idUtente;

      reqParams.child_level = 2;

      //Effettuo la richiesta
      this.docStructureService.requestNew(filterDoc,reqParams)
          .then(listReceived => {
              if (listReceived) {
                this._listShopCarrello$.next(listReceived);
              }
              else {
                this._listShopCarrello$.next([]);
              }

              //Chiamata conclusa
              resolve(listReceived);
          })
          .catch(error => {
            this._listShopCarrello$.next([]);
            //errore di connessione
            reject (error);
          })      

    })
  }

/**
   * Effettuo la richiesta di un Evento
   * @param idShopCarrello 
   * @param numChild Profondità della richiesta
   * @param decodeAll Decodifica le chiavi esterne
   * @returns 
   */
requestById(idShopCarrello: string, numChild = 0, decodeAll = false): Promise<ShopCarrello> {

  return new Promise<ShopCarrello>((resolve, reject) => {

    if (idShopCarrello && idShopCarrello.length != 0)   {
      let filterDoc = new ShopCarrello(true);
      filterDoc.ID = idShopCarrello;

      let reqParams = new RequestParams();
      reqParams.child_level = numChild;
      reqParams.decode.active = decodeAll;

      this.docStructureService.requestNew(filterDoc, reqParams)
                              .then(listData => {
                                if (listData && listData.length != 0) {
                                  return listData[0];
                                }
                                else {
                                  reject('Carrello non trovato');
                                }
                              })
                              .then(singleDoc => {
                                resolve(singleDoc);
                              })
                              .catch(error => {
                                reject(error);
                              })
    }
    else {
      reject('idShopCarrello non specificato');
    }
  })
}  
  //#endregion
}
