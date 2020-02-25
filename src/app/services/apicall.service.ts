import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LogApp } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }

  //Effettua una chiamata get
  //ritorna un Observable
  httpGet(url: string, header: HttpHeaders, params: HttpParams) {
    return this._httpGet(url, header, params)
  }


  private _httpGet(url: string, reqHeaders: HttpHeaders, reqParams: HttpParams) {
    LogApp.consoleLog('Chiamata GET a ' + url);
    
    //ritorno la get controllando l'errore
    return this.httpClient.get<any>(url, {
      headers: reqHeaders,
      params: reqParams
    })
    .pipe(
      catchError(this.handleError)
    );

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Errore di chiamata:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Errore Backend Codice ${error.status}, ` +
        `Body: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Si sono verificati errori. Riprovare.');
  };
}
