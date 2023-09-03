import { Injectable } from '@angular/core';
import { createCipheriv, createDecipheriv } from 'crypto';
import { AccountRequestCode } from 'src/app/models/accountregistration.model';
import { Utente } from 'src/app/models/utente.model';
import { Buffer } from 'buffer';
//import { createVerify } from 'crypto'; Se si vuole usare Crypto c'e' questo di Node (https://www.w3schools.com/nodejs/ref_crypto.asp)

@Injectable({
  providedIn: 'root'
}) 
export class CryptoService {

  encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x"; // Must be 32 characters
  initialization_vector = "X05IGQ5qdBnIqAWD"; // Must be 16 characters

  constructor() { }
  

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


  /**
   * Imposta nel documento UtenteDoc e RichiestaDoc la Password per essere inviata
   * Usata nei metodi di RecoveryPassword / Registration ...
   * @param utenteDoc 
   * @param password 
   */
  setSendingPasswordForUtenteDoc(richiestaDoc: AccountRequestCode, utenteDoc: Utente, password: string): boolean {
    let splitPwd:string[] = [];
    let flagResult: boolean = false;
    let useCrypter: boolean = false; //Per ora non uso modalità crypt

    if (richiestaDoc && utenteDoc) {

      if (password && password.length != 0) {
        splitPwd = this.mySplitPassword(password);
  
        if (splitPwd) {
          //Una parte va nel documento di richiesta
          richiestaDoc.TOKEN = splitPwd[0];

          if (useCrypter) {
            utenteDoc.INPUTPASSWORD = '';
            utenteDoc.SHAPASSWORD = splitPwd[1];;
          }
          else {
            
            utenteDoc.INPUTPASSWORD = splitPwd[1];
            utenteDoc.SHAPASSWORD = '';
          }
        }

      }
    }

    return flagResult;

  }



  /**
   * Esegue Encrypt di una stringa
   * @param text 
   * @returns 
   */
  encrypt(text: string): string {
    //Purtroppo Buffer-Xor contiene un errore e va tutto in errore non si puo usare new Buffer ma Buffer.alloc(length)

    const cipher = createCipheriv('aes-256-cbc',Buffer.from(this.encryption_key), Buffer.from(this.initialization_vector))
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted;
  }

  /**
   * Esegue il Decrypt di una stringa
   * @param text 
   * @returns 
   */
  decrypt(text: string): string {
    const decipher = createDecipheriv('aes-256-cbc',Buffer.from(this.encryption_key), Buffer.from(this.initialization_vector))
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec;
  }
}
