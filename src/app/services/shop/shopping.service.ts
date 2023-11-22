import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RequestDecode, RequestParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { ArticoloCarrello } from '../../models/articolo-carrello.model';
import { Articolo } from '../../models/articolo.model';
import { LogApp } from '../../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(
    private docStructureService: DocstructureService
  ) { }

  private _cartList: Articolo[] = [];

  cartList: Subject<Articolo[]> = new Subject<Articolo[]>();

  
  addItemToCart(item: Articolo){  
    this._cartList.push(item);
    this.cartList.next(this._cartList);
  }

  removeItemFromCart(item: Articolo){
    let pos = this._cartList.findIndex(el => {
      return el.ID == item.ID
    })

    if(pos != -1 ){
      // elemento trovato!
      this._cartList.splice(pos, 1);
      this.cartList.next(this._cartList);

    }
  }


  requestProducts(filter: Articolo){
    return new Promise<Articolo[]> ((resolve, reject) => {

      
      let decodeParams = new RequestDecode(); 
      decodeParams.active = true;
      
      let requestParams = new RequestParams();

      requestParams.decode = decodeParams;
      
      this.docStructureService
      .requestNew(filter, requestParams)
      .then((listProdotti: Articolo[]) => {
        
        resolve(listProdotti);
      })
      .catch(error => {
        
        LogApp.consoleLog(error,'error');
        reject('Impossibile connettersi');
      })

    })
  }



  submitCart() {
    //invio dati per acquisto
  }
}
