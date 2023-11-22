import { Injectable } from '@angular/core';
import { DocstructureService } from '../../library/services/docstructure.service';
import { PostResponse } from '../../library/models/post-response.model';
import { Account } from '../../models/utente/account.model';
import { AuthUserMobile } from '../../library/models/auth-user-mobile.model';
import { OperationAuthUserMobile } from '../../models/zsupport/valuelist.model';
import { ParamsExport } from '../../library/models/iddocument.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserMobileService {

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Effettua la richiesta per la modifica della password
   * @param idUtente 
   * @param oldPassword 
   * @param newPassword 
   * @returns 
   */
  onRequestChangePassword(idUtente: string, oldPassword: string, newPassword: string): Promise<PostResponse> {

    return new Promise<PostResponse>((resolve, reject) => {
      
      let docToCall: Account;
      const method = 'RequestProfileOperation';
      let requestDoc: AuthUserMobile;
      let bodyRequest: string = '';

      docToCall = new Account(true);
      requestDoc = new AuthUserMobile();
      requestDoc.init();

      if (idUtente && idUtente.length != 0 && 
          oldPassword && oldPassword.length != 0 && 
          newPassword && newPassword.length != 0 ) {

            requestDoc.OPERATION = OperationAuthUserMobile.requestChangePassword;
            requestDoc.GUIDUTENTE = idUtente;
            requestDoc.CRYPTED = false;
            requestDoc.PASSWORDACTUAL = oldPassword;
            requestDoc.PASSWORDNEXT = newPassword;

            bodyRequest = this._getBodyRequest(requestDoc);

            this.docStructureService.requestForFunction(docToCall, method, bodyRequest)
                                    .then(dataResult => {
                                      console.log(dataResult);
                                      resolve(dataResult);
                                    })
                                    .catch(error => {
                                      reject(error);
                                    })


      }
      else {
        reject('Dati insufficienti per la richiesta')
      }
    })
  }

  /**
   * Prepara il Body da inviare nella chiamata
   * @param requestDoc 
   * @returns 
   */
  private _getBodyRequest(requestDoc: AuthUserMobile): string {
    let bodyRequest = '';
    let paramExport = new ParamsExport();

    if (requestDoc) {
      //Questi sono i parametri per l'esportazione
      paramExport.clearDOProperty = true;
      paramExport.clearPKProperty = true;
      paramExport.clearPrivateProperty = true;

      bodyRequest = requestDoc.exportToJSON(paramExport);
      bodyRequest = `{"requestDoc":${bodyRequest}}`;
    }
    else {
      bodyRequest = `{"requestDoc": null}`;
    }

    return bodyRequest;
  }
}
