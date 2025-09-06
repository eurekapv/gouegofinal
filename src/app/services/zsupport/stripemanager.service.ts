import { Injectable } from '@angular/core';
import { environment } from 'application_model/beachforfun/environment.prod';
import { StripePaymentIntent } from 'src/app/models/zsupport/stripe-payment-intent';
import { ApicallService } from './apicall.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { PaymentEnvironment } from 'src/app/models/zsupport/valuelist.model';

@Injectable({
  providedIn: 'root'
})
export class StripemanagerService {

  //https://stripe.capacitorjs.jp/docs/configuration
  
  constructor(private apiService: ApicallService) { }

      /**
     * Ritorna l'headerHttp da utilizzare per le chiamate allo StripeManager
     * @param contentType Eventuale content Type da applicare
     */
    getHttpHeaders(contentType?:string): HttpHeaders {

        let content = 'application/json';

        if (contentType && contentType.length != 0) {
            content = contentType;
        }

        let myHeaders = new HttpHeaders({'Content-type':content});
        
        return myHeaders;
    }

  /**
   * Effettua la richiesta per la creazione di una intenzione di pagamento
   * @param amount 
   * @param currency 
   * @param idAccountConnected 
   */
  requestIntentPayment(mode: PaymentEnvironment, 
                       amount: number, 
                       currency: string = 'eur', 
                       idAccountConnected: string = ''): Promise<StripePaymentIntent> {

    return new Promise<StripePaymentIntent>((resolve, reject) => {
      //Devo effettuare una chiamata post con la richiesta di pagamento
      let urlCall = '';
      let endPoint = 'create-intent-payment';
      //Creo il payload da inviare nel post
      //Il Valore Amount deve essere moltiplicato per 100 Perchè per pagare € 1,00 devo inviare il valore 100
      let payload = {
        mode: mode,
        amount: amount * 100,
        currency: currency,
        idAccountConnected: idAccountConnected
      }

      let headerCall: HttpHeaders;
      let paramsCall: HttpParams;

      //Chiedo gli Header della chiamata
      headerCall = this.getHttpHeaders();
      //Preparo i parametri della chiamata
      paramsCall = this.apiService.getHttpParams();
      
      urlCall = `${environment.externalUrl.stripemanager}/${endPoint}`;

      //Contatto lo Stripe Manager
      this.apiService.httpPost(urlCall, headerCall, paramsCall, JSON.stringify(payload))
                     .subscribe({
                        next: (response) => {
                            if (response) {
                              let intentPaymentDoc = StripePaymentIntent.prepareDocFrom(response);
                              resolve(intentPaymentDoc);
                            }
                            else {
                              reject('Operazione fallita')
                            }
                        },
                        error: (err) => {
                          reject(err);
                        }
                     })


    })

  }
}
