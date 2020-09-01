import { Injectable } from '@angular/core';
declare var CryptoJS;

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  //Example here: https://cryptojs.gitbook.io/docs/#hashing

  //The set method is use for encrypt the value.
  setAES(keys: string, value: string): string
  {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  getAES(keys: string, value: string): string
  {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  setSHA256(keys: string, value: string): string {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(value.toString()));

    return encrypted.toString();
  }

  
  getBCrypt(value: string):string {
    let encrypted = '';

    encrypted = value;

    return encrypted;
  }


  /**
   * Prende una stringa che corrisponde a una password e la splitta con questa logica
   * Divide in 2 Array i caratteri in posizione Dispari e in posizione Pari
   * Array Dispari lo ritrasforma in stringa da 0...n 
   * Array Pari lo ritrasforma in stringa da n..0
   * Mette le 2 stringhe in elArray per tornarle
   * 
   * @param pwd Password da splittare
   * @param elArray Array con le 2 porzioni splittate
   */
  mySplitPassword(pwd:string): string[] {
    let result = false;
    let arFirst: string [] = [];
    let arSecond: string[] = [];
    let strFirst: string;
    let strSecond: string;
    let elArray:string[] = [];


    if (pwd && pwd.length !== 0)  {
      result = true;

      for (let index = 0; index < pwd.length; index++) {
        const token = pwd.substr(index, 1);

        if ( (index + 1) % 2 == 0) {
          arSecond.push(token);
        }
        else {
          arFirst.push(token);
        }
      }

      strFirst = arFirst.toString();
      strFirst = strFirst.replace(/,/g,'');

      strSecond = arSecond.reverse().toString();
      strSecond = strSecond.replace(/,/g,'');

      elArray = [];
      elArray.push(strFirst);
      elArray.push(strSecond);
    }

    return elArray;
  }

}
