import { Injectable } from '@angular/core';
import { CodiceFiscale } from '../models/codicefiscale.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApicallService } from './apicall.service';

@Injectable({
  providedIn: 'root'
})
export class CodicefiscaleService {

  //Per ottenere i dati del comune dal codice catastale
  //chiamare https://api.cavallinipietro.com/codicefiscale/api/comuni/codicecatastale/L872

  constructor(private apiService: ApicallService) { }

  /**
   * Effettua il controllo di un codice fiscale e torna TRUE se corretto o FALSE se non corretto
   * Nel caso fosse corretto puo' essere richiesta la decodifica del codice in Comune, Provincia, DataNascita etc.
   * @param docCF Documento Codice Fiscale
   * @param decode Decodifica il Codice Fiscale se corretto
   * @param userMsg I testi dei messaggi di errore sono rivolti all'utente finale
   */
  checkCodiceFiscale(codiceFiscale: string, decode?:boolean, userMsg=false): Promise<CodiceFiscale> {
    return new Promise ((resolve, reject)=>{
              let check = false;
              let resDecode = false;
              let docCF: CodiceFiscale;

              if (codiceFiscale && codiceFiscale.length !== 0) {
                docCF = new CodiceFiscale(codiceFiscale);
                //Valido il codice
                check = docCF.validate();

              }
              else {
                docCF = new CodiceFiscale('');
                docCF.msgValidate = 'Codice non specificato';
                docCF.checkValidate = false;
                check = false;
              }

              //Check passato correttamente
              if (check) {
                  if (decode) {

                    //Effettuo la decodifica base
                    resDecode = docCF.basicDecode();
  
                    //Effettuo la chiamata per ottenere i dati del comune dal codice catastale
                    if (resDecode) {
                      //Con il codice del comune cerco di recuperare tutto
                      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
                      

                      //In Testata c'e' sempre l'AppId
                      //myHeaders = myHeaders.set('appid',config.appId);
                      let myUrl = 'https://api.cavallinipietro.com/codicefiscale/api/comuni/codicecatastale' + '/' + docCF.codiceCatastale;  
                  
                      this.apiService
                          .httpGet(myUrl, myHeaders)
                          .subscribe(data => {

                            //In teoria mi ha risposto correttamente
                            if (data.hasOwnProperty('codiceCatastale')) {
                              //Nome comune
                              if (data.hasOwnProperty('nome')) {
                                docCF.comune = data['nome'];

                                //se ho il comune, significa che il cf è italiano
                                docCF.stato = 'Italia'
                              }

                              //Regione
                              if (data.hasOwnProperty('regione')) {
                                docCF.regione = data['regione'];
                              }
                              
                              //Provincia
                              if (data.hasOwnProperty('provincia')) {
                                docCF.provincia = data['provincia'];
                              }

                              //CAP
                              if (data.hasOwnProperty('cap')) {
                                docCF.cap = data['cap'];
                              }

                              if(data.hasOwnProperty('stato')){
                                docCF.stato = data['stato']
                              }

                            }



                            resolve(docCF);

                          } , error => {
                            docCF.checkValidate = false;
                            docCF.msgValidate = error;
                            resolve(docCF);
                          });
                    }
                    else {
                      
                      resolve(docCF);
                    }

                  }
                  else {
                    resolve(docCF);
                  }

              }
              else {
                //Check Codice Fiscale fallito

                //Se i messaggi sono per l'utente cambio con
                if (userMsg) {
                  docCF.msgValidate = 'Codice fiscale non valido';
                }

                reject(docCF);
              }
              
            });

  }


  



  
}
