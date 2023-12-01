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
import { Utente } from 'src/app/models/utente/utente.model';


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

  private _startConfig: StartConfiguration; //Mi serve per modificare i path in arrivo
  
  
  //Area di riferimento
  private _idArea: string; 
  public set idArea(value: string) {
    
    let lastIdArea = this._idArea;
    if (value && value.length != 0) {

      this._idArea = value;
      if (this._idArea != lastIdArea) {
        //Creo un nuovo carrello
        this.newShoppingCart();
      }
    }

  }

  //#region GESTIONE CART

  /**
   * Memorizzo la configurazione
   * @param config Configurazione globale
   */
  onStartConfig(config: StartConfiguration) {
    if (config) {
      this._startConfig = config;
    }
  }

  /**
   * Svuota e crea un nuovo carrello   
   */
  newShoppingCart(): void {
    
    //Preparo il nuovo carrello
    let cartDoc = new ShopCarrello();
    cartDoc.IDAREAOPERATIVA = this._idArea;

    this._activeCart.next(cartDoc);
  }

  /**
   * Imposta IDAnagrafica nel carrello
   */
  setIdAnagrafica(userDoc: Utente): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let cart: ShopCarrello;

      if (userDoc) {
        
        //Recupero il carrello attivo
        cart = this._activeCart.getValue();

        if (cart) {

          cart.IDANAGRAFICA = userDoc.ID;
          cart.INDIRIZZO = userDoc.INDIRIZZO;
          cart.CAP = userDoc.CAP;
          cart.COMUNE = userDoc.COMUNE;
          cart.PROVINCIA = userDoc.PROVINCIA;
          cart.ISOSTATO = userDoc.ISOSTATO;
          cart.INDIRIZZODESTINAZIONE = userDoc.INDIRIZZO;
          cart.CAPDESTINAZIONE = userDoc.CAP;
          cart.COMUNEDESTINAZIONE = userDoc.COMUNE;
          cart.PROVINCIADESTINAZIONE = userDoc.PROVINCIA;

          resolve();
        }
        else {
          reject('Carrello non presente');
        }
      }
      else {
        //Svuoto i riferimenti
        cart.IDANAGRAFICA = null;
        cart.INDIRIZZO = null;
        cart.CAP = null;
        cart.COMUNE = null;
        cart.PROVINCIA = null;
        cart.ISOSTATO = null;
        cart.INDIRIZZODESTINAZIONE = null;
        cart.CAPDESTINAZIONE = null;
        cart.COMUNEDESTINAZIONE = null;
        cart.PROVINCIADESTINAZIONE = null;
      }
    })
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

      return new Promise<void>((resolve, reject) => {
        
        let itemCart: DetailCarrello;
        let cart: ShopCarrello;
    
        if (articoloDoc) {
          itemCart = new DetailCarrello();
          itemCart.TIPORIGO = TipoRigoDetailCarrello.prodotti;
          itemCart.IDARTICOLO = articoloDoc.ID;
          itemCart.IDARTICOLOCOLORE = idArticoloColor;
          itemCart.IDARTICOLOTAGLIA = idArticoloTaglia;
          itemCart.QUANTITA = 1;
    
          //Recupero il carrello attivo
          cart = this._activeCart.getValue();
          //Non ho più il carrello
          if (cart) {            
            cart.DETAILCARRELLO.push(itemCart);
            this._activeCart.next(cart);
            resolve();
          }
          else {
            reject('Ops, non ho trovato il carrello');
          }
        }
        else {
          reject('Nessun prodotto specificato');
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

        if (cart) {
          if (cart.DETAILCARRELLO && cart.DETAILCARRELLO.length != 0) {

            //Elimino la riga
            cart.DETAILCARRELLO = cart.DETAILCARRELLO.filter(item => item.ID != idDetail);
            //Riemetto il documento
            this._activeCart.next(cart);
  
            if (recalc) {
                this.recalcCart()
                    .then(()=> {
                      resolve();
                    })
                    .catch(error => {
                      reject(error);
                    })
            }
            else {
              //Chiudo subito
              resolve();
            }
          }
          else {
            resolve();
          }
        }
        else {
          reject('Carrello non presente')
        }
      }
      else {
        reject('Dettaglio non definito');
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
  updateQuantityRowCart(idDetail: string, qta: number, recalc = true):Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      let cart: ShopCarrello;
  
      if (idDetail && idDetail.length != 0) {
        cart = this._activeCart.getValue();
        if (cart) {
          if (cart.DETAILCARRELLO && cart.DETAILCARRELLO.length != 0) {
            let item: DetailCarrello;

            item = cart.DETAILCARRELLO.find(elItem => elItem.ID == idDetail);
            if (item) {
              item.QUANTITA = qta;

              //Riemetto il documento
              this._activeCart.next(cart);

              if (recalc) {
                this.recalcCart()
                    .then(()=> {
                      resolve();
                    })
                    .catch(error => {
                      reject(error);
                    })
              }
              else {
                //Chiudo subito
                resolve();
              }

            }
            else {
              resolve();
            }
          }
          else {
            resolve();
          }
        }
        else {
          reject('Carrello non definito');
        }
      }
      else {
        reject('Dettaglio non definito');
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
                                //Converto la risposta nell'oggetto PostResponse con un documento ShopCarrello contenuto
                                .then(risposta => PostResponse.toPostResponse(risposta, new ShopCarrello()))
                                //Analizzo la risposta positiva o negativa (va in catch)
                                .then((typedRisposta:PostResponse) => typedRisposta.analizeResultFlag())
                                .then((typedRisposta:PostResponse) => typedRisposta.getDocFromList<ShopCarrello>(0))
                                .then((cartDoc:ShopCarrello) => this._changePathImage(cartDoc))
                                .then((cartDoc:ShopCarrello) => {
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
   * Effettua il salvataggio del carrello sul server
   * @returns 
   */
  saveCart(): Promise<void> {
    
    return new Promise<void>((resolve, reject) => {
      let myPostParams : PostParams = new PostParams();
      let method = 'finalizeCart';
      let cartDoc: ShopCarrello;
      let postResponseDoc: PostResponse;
      
      //Recupero il carrello
      cartDoc = this._activeCart.getValue();

      if (cartDoc) {
        
        myPostParams.key = 'cartDoc';
        myPostParams.value = cartDoc;

        this.docStructureService.requestForFunction(cartDoc, method, '', myPostParams)
                                //Converto la risposta nell'oggetto PostResponse con un documento ShopCarrello contenuto
                                .then(risposta => PostResponse.toPostResponse(risposta, new ShopCarrello()))
                                //Analizzo la risposta positiva o negativa (va in catch)
                                .then((typedRisposta:PostResponse) => {
                                    postResponseDoc = typedRisposta;
                                    return typedRisposta.analizeResultFlag()
                                  })
                                .then((typedRisposta:PostResponse) => typedRisposta.getDocFromList<ShopCarrello>(0))
                                .then((cartDoc:ShopCarrello) => this._changePathImage(cartDoc))
                                .then((cartDoc:ShopCarrello) => {
                                  //Riemetto il carrello
                                  this._activeCart.next(cartDoc);
                                  resolve();
                                })
                                .catch(error => {

                                  //Cancello messaggi presenti
                                  cartDoc.clearErrorMessages();

                                  if (postResponseDoc != null) {
                                      cartDoc.setErrorMessage(postResponseDoc.message);
                                      cartDoc.addErrorDocList(postResponseDoc.listMessages);
                                  }
                                  
                                  //Riemetto il carrello
                                  this._activeCart.next(cartDoc);

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

      if (this._startConfig && carrelloDoc && carrelloDoc.DETAILCARRELLO) {
        //Recupero URL dello Storage
        urlStorage = this._startConfig.urlStorageGroup;

        //Elementi del carrello
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
