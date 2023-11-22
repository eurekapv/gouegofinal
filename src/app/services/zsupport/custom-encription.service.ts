import { Injectable } from '@angular/core';
import { LogApp } from '../../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class CustomEncriptionService {

  private privateKey: string = '5468765198654984964198';
  private table = [];


  constructor() {

    this._initTable();
  }
  

  private _initTable(){
    this.table = [
      ['D','d','8','Y','R','g','z','9','B','A' ],          
      ['G','p','B','y','f','M','Z','A','Y','a' ],          
      ['b','P','5','0','N','r','8','a','C','G' ],          
      ['a','r','3','F','1','2','n','X','6','R' ],          
      ['C','N','A','l','g','6','B','Y','5','1' ],          
      ['h','A','0','t','2','7','e','1','J','6' ],          
      ['H','O','R','T','3','A','L','6','h','7' ],          
      ['Q','o','l','w','B','c','R','4','q','2' ],          
      ['j','I','J','6','c','1','4','2','D','5' ],          
      ['1','2','I','5','4','B','c','W','w','b' ],          
    ]
  }


  private _getUTCTimestamp(){
    let utc: number;
    let now = new Date()
    // utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds())

    utc = now.getTime();
    return utc;
  }

  private _encrypt(str){
    let encryptedStr = '';
    
    let keyPointer = 0;


    for(let i = 0; i< str.length; i++){
        //recupero il carattere (numerico) da crittografare
        let initialValue = str[i];

        //recupero il carattere della chiave da usare per la codifica
        let keyValue = this.privateKey[keyPointer];

        //recupero dalla matrice il valore codificato
        let finalValue = this.table[keyValue][initialValue];

        //aggiungo il valore trovato alla stringa finale codificata
        encryptedStr += finalValue

        //avanzo di una posizione con il puntatore alla chiave
        keyPointer ++;

        //se il puntatore alla chiave è arrivato alla fine, torno all'inizio
        if(keyPointer == this.privateKey.length){
            keyPointer = 0;
        }
    }


    return encryptedStr;
  }

  private _decrypt(encryptedStr){

    let decryptedStr = '';
    let keyPointer = 0;

    for(let i = 0; i< encryptedStr.length; i++){

        //recupero il carattere giusto della chiave
        let keyValue = this.privateKey[keyPointer];

        let encryptedChar = encryptedStr[i];

        //con il carattere della chiave, recupero la riga:
        let myRow = this.table[keyValue];

        //nella riga, l'indice del carattere crittografato è il carattere non crittografato
        let decryptedChar = myRow.findIndex(value => {
            return value == encryptedChar;
        })
        
        //aggiungo il carattere trovato alla mia stringa finale 
        decryptedStr += decryptedChar;

        //avanzo di una posizione con il puntatore alla chiave
        keyPointer ++;

        //se il puntatore alla chiave è arrivato alla fine, torno all'inizio
        if(keyPointer == this.privateKey.length){
            keyPointer = 0;
        }
    }

    return decryptedStr;

  }

  private _getSignatureToEncrypt(){
    let str= '';

    let currentTimestamp = this._getUTCTimestamp();

    let time1 = currentTimestamp;
    let time2 = currentTimestamp * 2;
    let time3 = currentTimestamp * 3;

    str = str + time1 + time2 + time3;

    
    return str;
  }

  // private _convertToB64(stringToConvert: string){
  //   //@ts-ignore
  //   let buff = Buffer.from(stringToConvert);

  //   return buff.toString('base64');
  // }

  // private _convertFromB64(stringToConvert: string){
  //   //@ts-ignore
  //   let buff = Buffer.from(stringToConvert, 'base64');
  //   return buff.toString('ascii');
  // }


  /**
   * crittografa una stringa usando la tabella e la chiave
   * @param str stringa da crittografare
   */
  public encrypt(str){
    return this._encrypt(str);
  }

  /**
   * decrittografa la stringa guardando chiave e tabella
   * @param str stringa da decrittografare
   */
  public decrypt(str){
    
      return this._decrypt(str);
  }


  /**
   * restituisce una firma secondo le specifiche. Encodata in B64
   */
  public getB64EncryptedSignature(){
    let signature = this._getSignatureToEncrypt();
    signature = this.encrypt(signature);
    LogApp.consoleLog('Signature: ' + signature);
    //@ts-ignore
    signature = window.btoa(signature);
    LogApp.consoleLog('Signature Base64: ' + signature);
    return signature;
  }



  // public decodeB64Signature(b64EncryptedSignature){
  //   let encryptedSignature = this._convertFromB64(b64EncryptedSignature);
  //   let decryptedSignature = this.decrypt(encryptedSignature);

  //   let tok1 = decryptedSignature.substring(0, 13);
  //   let tok2 = decryptedSignature.substring(13, 26);
  //   let tok3 = decryptedSignature.substring(26, 39);

  //   let tok1n = parseInt(tok1, 10);
  //   let tok2n = parseInt(tok2, 10) / 2;
  //   let tok3n = parseInt(tok3, 10) / 3;

  //   let myDate = new Date(100);
  //   if(tok1n == tok2n && tok1n == tok3n){

  //     myDate.setTime(tok1n);
      
  //   }
  //   return  myDate;
   
  // }
   
}
