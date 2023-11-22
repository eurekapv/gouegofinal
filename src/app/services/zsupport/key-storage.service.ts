import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';

import { CryptoService } from '../../library/services/crypto.service';
import { StorageUtente } from '../../models/stogare-utente.model';


@Injectable({
  providedIn: 'root'
})
export class KeyStorageService {

  userCredentialKey: string = 'gouegoapp';

  constructor(private cryptService: CryptoService) {
      
  }

  /**
   * Memorizza una chiave con valore
   */
  public set(myKey: string, myValue: any):Promise<void> {
    return Preferences.set({key: myKey, value: myValue});
  } 
  
  /**
   * Recupera una chiave memorizzata
   * @param myKey 
   * @returns 
   */
  public get(myKey: string): Promise<GetResult> {
    return Preferences.get({key: myKey})
  }

  /**
   * 
   * @param myStorageUtenteDoc Documento Credenziali
   */
  public saveCredential(myStorageUtenteDoc: StorageUtente): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      let jsonData: string = '';

      if (myStorageUtenteDoc) {

        if (myStorageUtenteDoc.containCredentials()) {

          //Cripto i dati contenuti
          if (myStorageUtenteDoc.crypted) {
            //Procedo con il Crypt dei dati contenuti 
            myStorageUtenteDoc.userLogin = this.cryptService.encrypt(myStorageUtenteDoc.userLogin);
            myStorageUtenteDoc.userPassword = this.cryptService.encrypt(myStorageUtenteDoc.userPassword);
          }         
        }

        //Esporto il Documento come JSON
        jsonData = JSON.stringify(myStorageUtenteDoc);
        
        return this.set(this.userCredentialKey, jsonData);
        
      }
      else {
        reject('No Document to storage');
      }
    })
  }


  /**
   * Carica le credenziali utente memorizzate (se presenti)
   * @returns 
   */
  public loadCredential(): Promise<StorageUtente> {
    let utenteStorageDoc: StorageUtente = new StorageUtente();

    return new Promise<StorageUtente>((resolve) => {
      //Recupero la chiave dallo storage
      this.get(this.userCredentialKey)
          .then((elResult:GetResult) => {

            if (elResult && elResult.value) {
              
              utenteStorageDoc.setFromObjString(elResult.value);

              if (utenteStorageDoc.crypted) {
                //Decripto il contenuto
                utenteStorageDoc.userLogin = this.cryptService.decrypt(utenteStorageDoc.userLogin);
                utenteStorageDoc.userPassword = this.cryptService.decrypt(utenteStorageDoc.userPassword);
              }

              resolve(utenteStorageDoc);
            }
          })
          .catch(error => {
            resolve(utenteStorageDoc);
          })
    })
  }
}
