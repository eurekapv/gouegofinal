(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Dr4":
/*!*********************************************!*\
  !*** ./src/app/services/apicall.service.ts ***!
  \*********************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/log.model */ "Ag5x");
/* harmony import */ var _custom_encription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-encription.service */ "Fdj0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ApicallService {
    constructor(httpClient, customEncriptionService) {
        this.httpClient = httpClient;
        this.customEncriptionService = customEncriptionService;
    }
    /**
     * Effettua una chiamata GET verso un server e ritorna un Observable
     * @param url Url da contattare
     * @param header Dati di Testata
     * @param params Parametri di Testata
     */
    httpGet(url, header, params) {
        return this._httpGet(url, header, params);
    }
    /**
     * Effettua una chiamata POST verso un server e ritorna un Observable
     * Utilizzata per Inserimento di Risorse
     * @param url Url da contattare
     * @param header Dati di Testata
     * @param params Parametri
     * @param body Body
     */
    httpPost(url, header, params, body) {
        return this._httpPost(url, header, params, body);
    }
    /**
     * Effettua una chiamata PUT verso un server e ritorna un Observable
     * Utilizzata per Modifica di Risorse
     * @param url Url da contattare
     * @param header Dati di Testata
     * @param body Body
     */
    httpPut(url, header, params, body) {
        return this._httpPut(url, header, params, body);
    }
    /**
   * Esegue una chiamata GET al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   */
    _httpGet(url, reqHeaders, reqParams) {
        _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata GET a ' + url);
        reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
        //ritorno la get controllando l'errore
        return this.httpClient.get(url, {
            headers: reqHeaders,
            params: reqParams
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    /**
     * Esegue una chiamata POST al'Url specificato, controllando l'errore
     * @param url Url da contattare
     * @param reqHeaders Testata
     * @param reqParams  Parametri
     * @param reqBody    Body
     */
    _httpPost(url, reqHeaders, reqParams, reqBody) {
        reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
        _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata POST a ' + url);
        return this.httpClient.post(url, reqBody, {
            headers: reqHeaders,
            params: reqParams
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    /**
     * Esegue una chiamata PUT al'Url specificato, controllando l'errore
     * @param url Url da contattare
     * @param reqHeaders Testata
     * @param reqParams  Parametri
     * @param reqBody    Body
     */
    _httpPut(url, reqHeaders, reqParams, reqBody) {
        _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata PUT a ' + url);
        reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
        return this.httpClient.put(url, reqBody, {
            headers: reqHeaders,
            params: reqParams,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Errore di chiamata:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Errore Backend Codice ${error.status}, ` +
                `Body: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Si sono verificati errori. Riprovare.');
    }
    ;
    /**
   * Esegue una chiamata GET al'Url specificato, controllando l'errore
   * @param url Url da contattare
   * @param reqHeaders Testata
   * @param reqParams  Parametri
   */
    httpGetFile(url, reqHeaders) {
        _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata GET a ' + url);
        //ritorno la get controllando l'errore
        return this.httpClient.get(url, {
            headers: reqHeaders,
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
ApicallService.ɵfac = function ApicallService_Factory(t) { return new (t || ApicallService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_custom_encription_service__WEBPACK_IMPORTED_MODULE_4__["CustomEncriptionService"])); };
ApicallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ApicallService, factory: ApicallService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\My Projects\Github Projects\gouegofinal\src\main.ts */"zUnb");


/***/ }),

/***/ "0ALl":
/*!**************************************************!*\
  !*** ./src/app/models/occupazionecampi.model.ts ***!
  \**************************************************/
/*! exports provided: OccupazioneCampi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupazioneCampi", function() { return OccupazioneCampi; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");



class OccupazioneCampi extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    //a Seconda di TIPO cambiano le logiche di ID e IDREF
    //Tipo = SettoreAttivita.Corso -> ID = IDPianificazioneCorso IDREF = IDCorso 
    //Tipo = SettoreAttivita.Prenotazione -> ID = IDPianificazionePrenotazione e IDREF = IDPrenotazione
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
        let arString = ['IDAREA',
            'IDREF',
            'IDLOCATION',
            'IDCAMPO'
        ];
        let arNumber = ['TIPO'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO', 'DATAFINE'];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
        let arTime = ['ORAINIZIO', 'ORAFINE'];
        let arCollection = [];
        objDescriptor.className = 'OccupazioneCampi';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'OCCUPAZIONECAMPI';
        objDescriptor.describeField = '';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDAREA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        if (this.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settorePrenotazione) {
            objDescriptor.setRelation('IDREF', 'Prenotazione');
        }
        else if (this.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreCorso) {
            objDescriptor.setRelation('IDREF', 'Corso');
        }
        return objDescriptor;
    }
    get iconName() {
        let iconName = '';
        switch (this.TIPO) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreCorso:
                iconName = 'school';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settorePrenotazione:
                iconName = 'calendar-outline';
                break;
        }
        return iconName;
    }
}


/***/ }),

/***/ "1Gk/":
/*!*********************************************!*\
  !*** ./src/app/services/livello.service.ts ***!
  \*********************************************/
/*! exports provided: LivelloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivelloService", function() { return LivelloService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_livello_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/livello.model */ "TH60");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");









class LivelloService {
    constructor(apiService, docService) {
        this.apiService = apiService;
        this.docService = docService;
        this._listLivelli = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._loaded = false;
    }
    get listLivelli() {
        return this._listLivelli.asObservable();
    }
    /**
   * Ritorna la lista non in modalità Observable
   */
    get actualListLivelli() {
        return this._listLivelli.getValue();
    }
    /**
     * Richiede al server l'elenco dei Livelli
     * @param config Parametri configurazione chiamata
     */
    request(config) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'LIVELLO';
            //Nei Parametri imposto il LivelloAutorizzazione
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('LivelloAutorizzazione', '0');
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.LIVELLO;
            }))
                .subscribe(resultData => {
                if (resultData) {
                    //Arrivati dal server
                    this._loaded = true;
                    for (let index = 0; index < resultData.length; index++) {
                        const element = resultData[index];
                        let newLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_3__["Livello"]();
                        newLivello.setJSONProperty(element);
                        this.addLivello(newLivello);
                    }
                    resolve(this.actualListLivelli);
                }
                else {
                    reject('No data Livello retrieved');
                }
            }, error => {
                reject(error);
            });
        });
    }
    //Aggiunge un livello
    addLivello(objLivello) {
        this.listLivelli
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collLivelli => {
            this._listLivelli.next(collLivelli.concat(objLivello));
        });
    }
    /**
     * Richiede al server l'elenco dei Livelli per lo Sport
     * @param idSport Sport da utilizzare
     * @returns Promise Array Livelli Ordinati
     *
     */
    requestLivelliForSport(idSport) {
        let collLivelli = [];
        return new Promise((resolve) => {
            if (idSport && idSport.length != 0) {
                //Devo effettuare la chiamata al server
                let filterLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_3__["Livello"](true);
                filterLivello.IDSPORT = idSport;
                //Effettuo la richiesta
                this.docService.requestNew(filterLivello)
                    .then((collData) => {
                    collLivelli = collData;
                    resolve(collLivelli);
                })
                    .catch(error => {
                    resolve(collLivelli);
                });
            }
            else {
                resolve(collLivelli);
            }
        });
    }
}
LivelloService.ɵfac = function LivelloService_Factory(t) { return new (t || LivelloService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__["DocstructureService"])); };
LivelloService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: LivelloService, factory: LivelloService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1IFm":
/*!************************************************!*\
  !*** ./src/app/models/articolocolore.model.ts ***!
  \************************************************/
/*! exports provided: ArticoloColore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticoloColore", function() { return ArticoloColore; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class ArticoloColore extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDARTICOLO',
            'DESCRIZIONE',
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'ArticoloColore';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOCOLORE';
        objDescriptor.describeField = 'DESCRIZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDARTICOLO', 'Articolo');
        return objDescriptor;
    }
}


/***/ }),

/***/ "1W3u":
/*!******************************************!*\
  !*** ./src/app/services/area.service.ts ***!
  \******************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_area_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/area.model */ "v/X4");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AreaService {
    constructor(apiService) {
        this.apiService = apiService;
        //Elenco Aree
        this._listAree = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._areaSelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_area_model__WEBPACK_IMPORTED_MODULE_3__["Area"]);
    }
    get listAree() {
        return this._listAree.asObservable();
    }
    get areaSelected() {
        return this._areaSelected.asObservable();
    }
    /** Ritorna il valore attuale dell'area selezionata */
    get areaSelectedValue() {
        return this._areaSelected.getValue();
    }
    /**
     * Richiede le Aree legate al Gruppo, ed imposta
     * sia la Lista delle Aree che un Area Selezionata
     *
     * @param config Parametri di configurazione
     */
    request(config, _childLevel) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'AREAOPERATIVA';
            if (!_childLevel) {
                _childLevel = 2;
            }
            myHeaders = myHeaders.set('child-level', _childLevel + '');
            // Nei parametri imposto il gruppo Sportivo
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDGRUPPOSPORTIVO', config.gruppo.ID);
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
                return fullData.AREAOPERATIVA;
            }))
                .subscribe(resultData => {
                //Ricreo l'array di Aree
                this._listAree.next([]);
                //Aggiungo i valori
                this._addMultipleAree(resultData, true);
                resolve();
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Aggiunge un insieme di elementi all'array delle aree
     * @param dataJSON JSON Received
     * @param firstSelect Seleziona il primo elemento e rendilo come Area Selezionata
     */
    _addMultipleAree(dataJSON, firstSelect) {
        let count = 0;
        if (dataJSON) {
            dataJSON.forEach(element => {
                let newArea = new _models_area_model__WEBPACK_IMPORTED_MODULE_3__["Area"]();
                newArea.setJSONProperty(element);
                //Primo Giro e mi richiede di selezionare
                if (firstSelect && count == 0) {
                    this._areaSelected.next(newArea);
                }
                this.listAree
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
                    .subscribe(collAree => {
                    this._listAree.next(collAree.concat(newArea));
                });
                count++;
            });
        }
    }
    /**
     * Seleziona l'area richiesta per ID
     * @param idArea ID Area da Selezionare
     */
    selectAreaByID(idArea) {
        let arElement = this._listAree.getValue();
        let elSelected = arElement.find(element => {
            return element.ID == idArea;
        });
        if (elSelected) {
            //Ememtto la modifica
            this._areaSelected.next(elSelected);
        }
    }
}
AreaService.ɵfac = function AreaService_Factory(t) { return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"])); };
AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AreaService, factory: AreaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1pu4":
/*!****************************************************!*\
  !*** ./src/app/library/services/crypto.service.ts ***!
  \****************************************************/
/*! exports provided: CryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoService", function() { return CryptoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CryptoService {
    constructor() { }
    //Example here: https://cryptojs.gitbook.io/docs/#hashing
    //The set method is use for encrypt the value.
    setAES(keys, value) {
        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    //The get method is use for decrypt the value.
    getAES(keys, value) {
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
    setSHA256(keys, value) {
        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var encrypted = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(value.toString()));
        return encrypted.toString();
    }
    getBCrypt(value) {
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
    mySplitPassword(pwd) {
        let result = false;
        let arFirst = [];
        let arSecond = [];
        let strFirst;
        let strSecond;
        let elArray = [];
        if (pwd && pwd.length !== 0) {
            result = true;
            for (let index = 0; index < pwd.length; index++) {
                const token = pwd.substr(index, 1);
                if ((index + 1) % 2 == 0) {
                    arSecond.push(token);
                }
                else {
                    arFirst.push(token);
                }
            }
            strFirst = arFirst.toString();
            strFirst = strFirst.replace(/,/g, '');
            strSecond = arSecond.reverse().toString();
            strSecond = strSecond.replace(/,/g, '');
            elArray = [];
            elArray.push(strFirst);
            elArray.push(strSecond);
        }
        return elArray;
    }
}
CryptoService.ɵfac = function CryptoService_Factory(t) { return new (t || CryptoService)(); };
CryptoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CryptoService, factory: CryptoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "24+7":
/*!**************************************************!*\
  !*** ./src/app/services/prenotazione.service.ts ***!
  \**************************************************/
/*! exports provided: PrenotazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrenotazioneService", function() { return PrenotazioneService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/prenotazione.model */ "hXF6");
/* harmony import */ var _sport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sport.service */ "KG3q");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/models/postResult.model */ "uNYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











class PrenotazioneService {
    constructor(apiService, sportService) {
        this.apiService = apiService;
        this.sportService = sportService;
        this._listPrenotazioni = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._activePrenotazione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]());
    }
    /** Prenotazione */
    get activePrenotazione() {
        return this._activePrenotazione.asObservable();
    }
    get listPrenotazioni() {
        return this._listPrenotazioni.asObservable();
    }
    //Memorizzo il campo selezionato
    set selectedCampo(value) {
        this._selectedCampo = value;
    }
    get selectedCampo() {
        return this._selectedCampo;
    }
    // Imposta come attiva la Prenotazione passata
    setActivePrenotazione(value) {
        this._activePrenotazione.next(value);
    }
    /**
     * Inizializza la prenotazione con l'AREA
     * @param idArea Area Operativa
     */
    initActivePrenotazione(idArea) {
        this.activePrenotazione
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(elPrenotazione => {
            elPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
            elPrenotazione.initNewPrenotazione(idArea);
            this._activePrenotazione.next(elPrenotazione);
        });
    }
    /**
     * Imposta la Pianificazione Singola
     * @param docPianificazione Pianificazione da impostare
     */
    setPianificazioneSingola(docPianificazione) {
        this.activePrenotazione
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(elPrenotazione => {
            elPrenotazione.setPianificazioneSingola(docPianificazione);
            this._activePrenotazione.next(elPrenotazione);
        });
    }
    /**
     *
     */
    setIDUtenteActivePrenotazione(docUtente) {
        this.activePrenotazione
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(elPrenotazione => {
            elPrenotazione.setUtente(docUtente.ID, docUtente.NOMINATIVO);
            this._activePrenotazione.next(elPrenotazione);
        });
    }
    /**
     * Richiesta elenco Prenotazioni
     * @param config Parametri di configurazione
     * @param idUtente idUtente
     */
    request(config) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            //new HttpHeaders({'Content-type':'text/plain'});
            const doObject = 'PRENOTAZIONE';
            // Nei parametri imposto il gruppo Sportivo
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDGRUPPOSPORTIVO', config.gruppo.ID);
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
                return fullData.PRENOTAZIONE;
            }))
                .subscribe(resultData => {
                for (let index = 0; index < resultData.length; index++) {
                    const element = resultData[index];
                    let docPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
                    docPrenotazione.setJSONProperty(element);
                    this.add2ListPrenotazioni(docPrenotazione);
                }
                resolve(this._listPrenotazioni.getValue());
            }, error => {
                reject(error);
            });
        });
    }
    //Aggiunge una attivita alla lista globale
    add2ListPrenotazioni(objPrenotazione) {
        let listSport = this.sportService.actualListSport;
        this.listPrenotazioni
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collLocation => {
            this._listPrenotazioni.next(collLocation.concat(objPrenotazione));
        });
    }
    /**
     * Richiede una prenotazione al server
     * @param config Dati configurazione
     * @param idPrenotazione IdPrenotazione
     */
    requestById(config, idPrenotazione, numLivelli) {
        //let myHeaders = new HttpHeaders({'Content-type':'text/plain'}).append('child-level', numLivelli + '');
        let myHeaders = config.getHttpHeaders();
        const doObject = 'PRENOTAZIONE';
        myHeaders = myHeaders.append('child-level', numLivelli + '');
        // Nei parametri imposto idPrenotazion richiesto
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idPrenotazione);
        let myUrl = config.urlBase + '/' + doObject;
        return this.apiService
            .httpGet(myUrl, myHeaders, myParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
            let docPrenotazione;
            if (fullData) {
                if (fullData.hasOwnProperty('PRENOTAZIONE')) {
                    let collPrenotazioni = fullData.PRENOTAZIONE;
                    if (collPrenotazioni.length !== 0) {
                        let listSport = this.sportService.actualListSport;
                        docPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
                        docPrenotazione.setJSONProperty(collPrenotazioni[0]);
                        docPrenotazione.PRENOTAZIONEPIANIFICAZIONE.forEach(elPianificazione => {
                            elPianificazione.lookup('IDSPORT', listSport, "DENOMINAZIONE");
                        });
                    }
                }
            }
            return docPrenotazione;
        }));
    }
    /**
     * Richiesta al Server il calcolo dell'importo
     * Metodo Statico: MOBBOOKINGTOTALE
     * Body contiene il JSON del documento
     * @param config Parametri di Configurazione
     */
    requestImporto(config) {
        let docPrenotazione = this._activePrenotazione.getValue();
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', 'MOBBOOKINGTOTALE');
        myHeaders = myHeaders.append('child-level', '999');
        const paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi
        const doObject = 'PRENOTAZIONE';
        let myUrl = config.urlBase + '/' + doObject;
        //Questi sono i parametri per l'esportazione
        let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
        paramExport.clearDOProperty = false;
        paramExport.clearPKProperty = false;
        paramExport.clearPrivateProperty = true;
        //Creo il JSON del documento , eliminando le proprietà private (clear = true) ed inviando le proprietà do e le chiavi primarie(clear = false)
        let myBodyJSON = docPrenotazione.exportToJSON(paramExport);
        //Il parametro inviato nel body deve essere strutturato cosi
        // { "nomeParametro" : { oggetto exportato JSON } }
        let myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}';
        return this.apiService
            .httpPost(myUrl, myHeaders, myParams, myBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
            //fulldata è già l'oggetto Prenotazione
            return fullData;
        }));
    }
    /**
     * Ritorna una Promise per salvare il documento
     * @param config Configurazione
     */
    requestSave(config) {
        return new Promise((resolve, reject) => {
            let docPrenotazione = this._activePrenotazione.getValue();
            let myHeaders = config.getHttpHeaders();
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            const paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi
            //Imposto gli header aggiuntivi
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'MOBBOOKINGSAVE');
            myHeaders = myHeaders.append('child-level', '999');
            //Quali proprietà non voglio esportare
            const noExportDO = false;
            const noExportPK = true;
            const noExportPrivate = true;
            const doObject = 'PRENOTAZIONE';
            let myUrl = config.urlBase + '/' + doObject;
            //Questi sono i parametri per l'esportazione
            let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
            paramExport.clearDOProperty = false;
            paramExport.clearPKProperty = true;
            paramExport.clearPrivateProperty = true;
            //Creo il JSON del documento , eliminando le proprietà do e private (true) e le chiavi primarie(true)
            let myBodyJSON = docPrenotazione.exportToJSON(paramExport);
            //Il parametro inviato nel body deve essere strutturato cosi
            let myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}';
            //Chiamo per il salvataggio                      
            this.apiService
                .httpPost(myUrl, myHeaders, myParams, myBody)
                .subscribe(elPrenotazione => {
                let receivedPrenotazione = _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"].getPrenotazioneFromJson(elPrenotazione);
                if (receivedPrenotazione.ISVALID == true) {
                    resolve(receivedPrenotazione);
                }
                else {
                    let errMessage = '';
                    if (receivedPrenotazione.MSGINVALID && receivedPrenotazione.MSGINVALID.length != 0) {
                        errMessage = receivedPrenotazione.MSGINVALID;
                    }
                    else {
                        errMessage = 'Salvataggio Fallito';
                    }
                    reject(errMessage);
                }
            }, error => {
                console.log(error);
                let errMessage = 'Errore di connessione';
                reject(errMessage);
            });
        });
    }
    /**
     * Richiede al server la cancellazione di una pianificazione
     * @param idPianificazione
     */
    requestDelete(idPianificazione, config) {
        return new Promise((resolve, reject) => {
            const method = 'MOBBOOKINGDELETE';
            const doObject = 'PRENOTAZIONE';
            const myUrl = config.urlBase + '/' + doObject;
            //headers
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', method);
            //params
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idPianificazione', idPianificazione);
            //abbiamo tutto, faccio la richiesta
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .subscribe(data => {
                //creo l'oggetto con la risposta
                let response = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__["PostResponse"]();
                response.setFromResponse(data);
                resolve(response);
            }, err => {
                //creo comunque un postResponse fittizio
                let response = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__["PostResponse"]();
                response.result = false;
                response.message = "Connessione non riuscita";
                reject(response);
            });
        });
    }
}
PrenotazioneService.ɵfac = function PrenotazioneService_Factory(t) { return new (t || PrenotazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_sport_service__WEBPACK_IMPORTED_MODULE_5__["SportService"])); };
PrenotazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: PrenotazioneService, factory: PrenotazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "550M":
/*!*****************************************************!*\
  !*** ./src/app/services/iscrizionecorso.service.ts ***!
  \*****************************************************/
/*! exports provided: IscrizionecorsoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IscrizionecorsoService", function() { return IscrizionecorsoService; });
/* harmony import */ var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/postResult.model */ "uNYz");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/iscrizionecorso.model */ "9PZ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class IscrizionecorsoService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
    }
    /**
     * Contatta il server per conoscere se sono ancora
     * disponibili posti per l'iscrizione a un corso
     *
     * Ritorna un oggetto di tipo =>  PostResponse
     * Result = TRUE (Posti diponibili) / FALSE (Posti Esauriti)
     * @param idCorso idCorso da interrrogare
     */
    getPostiDisponibiliCorso(idCorso) {
        return new Promise((resolve) => {
            let myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
            let myReturn;
            let docToCall = new _models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_3__["IscrizioneCorso"]();
            if (idCorso && idCorso.length != 0) {
                myPostParams.key = 'idCorso';
                myPostParams.value = idCorso;
                this.docStructureService.requestForFunction(docToCall, 'getPostiDisponibili', '', myPostParams)
                    .then((risposta) => {
                    resolve(risposta);
                })
                    .catch(error => {
                    myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                    myReturn.result = false;
                    myReturn.message = 'Nessun posto disponibile';
                    resolve(myReturn);
                });
            }
            else {
                myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                myReturn.result = false;
                myReturn.message = 'Nessun posto disponibile';
                resolve(myReturn);
            }
        });
    }
    /**
     * Chiama il server e richiede una nuova iscrizione corso
     * PostResponse.result => TRUE Salvataggio Corretto
     * PostResponse.code => Id Iscrizione salvata
     *
     * @param docIscrizione Iscrizione Corso
     * @returns PostResponse
     */
    requestSaveIscrizione(docIscrizione) {
        return new Promise((resolve, reject) => {
            let myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
            let myReturn;
            if (docIscrizione) {
                myPostParams.key = 'docIscrizione';
                myPostParams.value = docIscrizione;
                this.docStructureService.requestForFunction(docIscrizione, 'mobBookingSave', docIscrizione, myPostParams)
                    .then((risposta) => {
                    resolve(risposta);
                })
                    .catch(error => {
                    myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                    myReturn.result = false;
                    myReturn.message = error.message;
                    resolve(myReturn);
                });
            }
            else {
                myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                myReturn.result = false;
                myReturn.message = 'Errore preparazione Iscrizione';
                resolve(myReturn);
            }
        });
    }
}
IscrizionecorsoService.ɵfac = function IscrizionecorsoService_Factory(t) { return new (t || IscrizionecorsoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__["DocstructureService"])); };
IscrizionecorsoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: IscrizionecorsoService, factory: IscrizionecorsoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5usX":
/*!****************************************************!*\
  !*** ./src/app/library/models/iddocument.model.ts ***!
  \****************************************************/
/*! exports provided: IDDocument, ParamsExport, IDRepository, FieldOrCondition, FilterCondition, IDOriginal, IDProperty, IDTag, OperatorCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDDocument", function() { return IDDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsExport", function() { return ParamsExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDRepository", function() { return IDRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldOrCondition", function() { return FieldOrCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCondition", function() { return FilterCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDOriginal", function() { return IDOriginal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDProperty", function() { return IDProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDTag", function() { return IDTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorCondition", function() { return OperatorCondition; });
/* harmony import */ var _descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor.model */ "Wz4r");
/* harmony import */ var _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mydatetime.model */ "K4nM");


class IDDocument {
    /**
     *
     * @param onlyInstance Non inizializzare con valori predefiniti il documento, crea solo l'istanza
     */
    constructor(onlyInstance) {
        this._filterConditions = [];
        this._original = new IDOriginal();
        this._repositoryRelDoc = [];
        this._tags = [];
        if (!onlyInstance) {
            this.ID = this.newID();
            this.do_inserted = true;
            this.selected = false;
        }
    }
    get inserted() {
        return this.do_inserted;
    }
    get deleted() {
        return this.do_deleted;
    }
    /**
     * Cerca nel documento la proprietà icone o iconasport e ne calcola
     * la stringa esadecimale
     */
    get htmlIconHex() {
        let value = '';
        let valueIcon = '';
        if (this.hasOwnProperty('IDSPORT')) {
            if (this.hasOwnProperty('ICONASPORT')) {
                value = this['ICONASPORT'];
            }
        }
        else if (this.hasOwnProperty('ICONA')) {
            value = this['ICONA'];
        }
        if (value.length == 0) {
            value = 'e830';
        }
        valueIcon = '&#x' + value + ';';
        return valueIcon;
    }
    /**
     * Ritorna un array di Type Reflector dei campi
     * che formano l'insieme delle ForeignKeys
     */
    get ForeignKeys() {
        let objDescriptor = this.getDescriptor();
        return objDescriptor.foreignKeys;
    }
    /**
     * Imposta il valore nella chiave primaria
     * @param value Valore Chiave Primaria
     */
    setPrimaryKey(value) {
        this.ID = value;
    }
    /**
     * Ritorna la PrimaryKey del documento
     * @param type = 'value' Torna il fieldValue
     * @param type = 'name' Torna il fieldName
     */
    getPrimaryKey(type = 'value') {
        let objDescriptor;
        let propName = '';
        let retValue = '';
        objDescriptor = this.getDescriptor();
        if (objDescriptor) {
            propName = objDescriptor.primaryKeyFieldName;
            if (propName) {
                if (type == 'value') {
                    try {
                        retValue = this[propName];
                    }
                    catch (error) {
                        retValue = '';
                        console.log(error);
                    }
                }
                else if (type == 'name') {
                    retValue = propName;
                }
            }
        }
        return retValue;
    }
    //Generazione GUID
    newID() {
        let strValue = '10000000-1000-4000-8000-100000000000';
        let guid = strValue.replace(/[018]/g, c => (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16));
        guid = guid.toUpperCase();
        return guid;
    }
    /**
     * Metodo Overrable
     */
    getDescriptor() {
        let objDescriptor = new _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        objDescriptor.add('ID', _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        return objDescriptor;
    }
    /**
     * Converte e formatta un valore in stringa
     * Usato per scriverlo nei parametri di chiamata
     * @param tipo Tipo del dato
     * @param value Valore
     */
    formatValue(tipo, value) {
        let strValue = '';
        switch (tipo) {
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char:
                strValue = value;
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateISO(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateTimeISO(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatTime(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean:
                if (value) {
                    strValue = '-1';
                }
                else {
                    strValue = '0';
                }
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number:
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal:
                strValue = value + '';
                break;
            default:
                break;
        }
        return strValue;
    }
    /**
     * Esporta l'oggetto in JSON
     * @param paramExport Oggetto con le caratteristiche esportazione
     * contiene
     *  clearDOProperty Non esporta le proprietà tipiche del documento (selected, do_insert etc)
     *  clearPKProperty Non esporta la Chiave primaria
     *  clearPrivateProperty Non esporta le proprietà private
     *  onlyModified Esporta solo le proprietà diverse dalle original
     *  numLivelli Numero livelli da esportare
     */
    exportToJSON(paramExport) {
        let _this = this;
        let arProperty = Object.keys(_this);
        //Chiedo il Descrittore della classe
        let objDescriptor = _this.getDescriptor();
        let strJSON = '';
        let doProperty = ['do_updated', ' do_loaded', 'do_inserted', 'do_deleted', 'selected'];
        let propExclud = [];
        let row = '';
        let skipAll = false;
        if (!paramExport) {
            paramExport = new ParamsExport();
        }
        // Vuole eliminare le doProperty, le aggiungo all'Array
        if (paramExport.clearDOProperty) {
            //Popolo l'array propExclud con le doProperty
            doProperty.forEach(element => {
                propExclud.push(element);
            });
        }
        //Se vuole non esportare la chiave primaria la aggiungo all'Array esclusioni
        if (paramExport.clearPKProperty) {
            propExclud.push(this.getPrimaryKey('name'));
        }
        //Devo esportare solo i documenti modificati e non ci sono modifiche
        if (paramExport.onlyDocModified && !this.isModified(999)) {
            skipAll = true;
        }
        if (!skipAll) {
            //Ciclo sulle proprietà
            arProperty.forEach(element => {
                let useElement = true;
                //Se devo togliere le proprietà private le elimino
                if (paramExport.clearPrivateProperty && element.startsWith('_')) {
                    useElement = false;
                }
                //Controlliamo se il valore è diverso dal valore original
                if (paramExport.onlyPropertyModified) {
                    //Chiave primaria devo passarla anche se non modificata
                    if (element != this.getPrimaryKey('name')) {
                        //Controllo se la proprietà risulta modificata o no
                        if (_this.propertyIsModified(element) == false) {
                            useElement = false;
                        }
                    }
                }
                if (useElement) {
                    //Inizio la riga con l'elemento
                    row = '\"' + element + '\"' + ':';
                    //Proprietà di tipo Array
                    if (Array.isArray(_this[element]) == true) {
                        //Qui gestisco l'Array
                        let arElements = _this[element];
                        let strArray = '';
                        let strElArray = '';
                        //Ciclo sugli elementi
                        for (let index = 0; index < arElements.length; index++) {
                            let element;
                            element = arElements[index];
                            strElArray = element.exportToJSON(paramExport);
                            if (strElArray && strElArray.trim().length != 0) {
                                if (strArray.length !== 0) {
                                    strArray += ', ';
                                }
                                strArray += strElArray;
                            }
                        }
                        row += '[' + strArray + ']';
                        if (strJSON.length !== 0) {
                            strJSON += ', ';
                        }
                        strJSON += row;
                    }
                    else {
                        let skip = false;
                        //Vuole eliminare le proprietà DO e private e/o le chiavi primarie
                        if (propExclud.length !== 0) {
                            if (propExclud.includes(element)) {
                                skip = true;
                            }
                        }
                        //Proseguo con l'esportazione
                        if (!skip) {
                            //Chiedo il Tipo del Campo con il descriptor
                            let tipoCampo = objDescriptor.getType(element);
                            if (tipoCampo !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].undefined && (_this[element] !== undefined)) {
                                switch (tipoCampo) {
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean:
                                        row += _this[element];
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number:
                                        row += _this[element];
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal:
                                        row += _this[element];
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time:
                                        //E' un orario
                                        row += '\"' + this.formatDateTimeISO(_this[element]) + '\"';
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date:
                                        //E' una data
                                        row += '\"' + this.formatDateISO(_this[element]) + '\"';
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime:
                                        //Campo di tipo DATAORA
                                        row += '\"' + this.formatDateTimeISO(_this[element]) + '\"';
                                        break;
                                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char:
                                        let valore = _this[element];
                                        //Se la stringa contenesse all'interno simboli di " devono essere esportati come \"
                                        //Esempio: "ciao";"tuo" => \"ciao\";\"tuo\"
                                        valore = valore.replace(/"/g, "\\\"");
                                        row += '\"' + valore + '\"';
                                        break;
                                    default:
                                        row += _this[element];
                                        break;
                                }
                            }
                            else {
                                row += 'null';
                            }
                            if (strJSON.length !== 0) {
                                strJSON += ', ';
                            }
                            strJSON += row;
                        }
                    }
                }
            });
            strJSON = '{' + strJSON + '}';
        }
        return strJSON;
    }
    /**
     * Ritorna il documento in Stringa JSON
     */
    toJSON() {
        let strJSON = '';
        let _this = Object.assign({}, this);
        let arKeys = Object.keys(_this);
        /** Ciclo sulle proprietà */
        /* Ho il problema di formattazione Data/Ora che INDE lo vuole come YYYY-MM-DD hh:nn:ss */
        arKeys.forEach(element => {
            if (_this[element] instanceof Date) {
                //Se è di tipo data lo cambio formattandolo in ISODATETIME
                _this[element] = this.formatDateTimeISO(_this[element]);
            }
        });
        // Ora eseguo lo stringify
        strJSON = JSON.stringify(_this);
        return strJSON;
    }
    // Imposta le proprietà basiche dell'oggetto via JSON
    setJSONProperty(dataObject) {
        let _this = this;
        let arProperty = Object.keys(dataObject);
        //Chiedo il Descrittore della classe
        let objDescriptor = _this.getDescriptor();
        // Gli elementi di tipo Array non li copio
        arProperty.forEach(element => {
            if (Array.isArray(dataObject[element]) == false) {
                //Chiedo il Tipo del Campo con il descriptor
                let tipoCampo = objDescriptor.getType(element);
                if (tipoCampo !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].undefined) {
                    switch (tipoCampo) {
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean:
                            let value = parseInt(dataObject[element], 10);
                            if (value === -1) {
                                _this[element] = true;
                            }
                            else {
                                _this[element] = false;
                            }
                            break;
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number:
                            _this[element] = +dataObject[element];
                            break;
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal:
                            _this[element] = +dataObject[element];
                            break;
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time:
                            _this[element] = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].stringToDateObject(dataObject[element]);
                            break;
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date:
                            //E' una data
                            _this[element] = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].stringToDateObject(dataObject[element]);
                            break;
                        case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime:
                            _this[element] = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].stringToDateObject(dataObject[element]);
                            break;
                        default:
                            _this[element] = dataObject[element] + '';
                            break;
                    }
                }
            }
        });
        //Imposto che il documento è originale
        this.setOriginal();
    }
    //Formatta una data passata in ISO (Solo la parte data)
    formatDateISO(data) {
        let format = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateISO(data);
        return format;
    }
    //Formatta una data passata in ISO (Data e Ora)
    formatDateTimeISO(data) {
        let final = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateTimeISO(data);
        return final;
    }
    /** Imposta il documento Originale come se fosse sul database */
    setOriginal() {
        this.do_updated = false;
        this.do_inserted = false;
        this.do_deleted = false;
        this.do_loaded = true;
        //Imposta il documento come originale
        this._original.setAsOriginal(this);
    }
    /**
     * Imposta tutti gli elementi come cancellati
     * @param arElements Array di ELementi IDDOcument o che estendono IDDocument
     */
    static setAllDeleting(arElements) {
        if (arElements) {
            arElements.forEach(element => {
                element.do_deleted = true;
            });
        }
    }
    //#region FUNZIONI STATICHE
    /**
     * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
     * @param value Valore da controllare
     */
    static isNumber(value) {
        return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }
    //#endregion
    //#region REFLECTOR PROPRIETA'
    /**
     * Tipo della proprietà
     * @param PropertyName Nome della proprietà
     */
    getPropertyType(PropertyName) {
        let objDescriptor = this.getDescriptor();
        return objDescriptor.getType(PropertyName);
    }
    /**
     * Ritorna TypeReflector del campo passato come parametro
     * @param fieldName Nome del campo
     */
    getTypeReflectorByFieldName(fieldName) {
        let objDescriptor = this.getDescriptor();
        return objDescriptor.getByFieldName(fieldName);
    }
    /**
     * Controlla se il campo è presente nell'istanza
     * @param fieldName Nome del campo richiesto
     */
    propertyInDoc(fieldName) {
        let arProperty = Object.keys(this);
        let contain = false;
        if (fieldName && fieldName.length !== 0) {
            contain = arProperty.includes(fieldName);
        }
        return contain;
    }
    //#endregion
    /**
     * Controlla se un campo contiene dei dati oppure è vuoto
     * considerando qualsiasi valore undefined, null, nullstring
     * @param fieldName Nome del campo
     */
    propertyIsEmpty(fieldName) {
        let inDoc = this.propertyInDoc(fieldName);
        let empty = false;
        if (inDoc) {
            if (this[fieldName] == undefined || this[fieldName] == null) {
                empty = true;
            }
            else {
                empty = (this[fieldName] + '').length == 0 ? true : false;
            }
        }
        else {
            empty = true;
        }
        return empty;
    }
    //#region CONTROLLO MODIFICHE DOCUMENTO
    /**
     * Controlla se una proprietà risulta modificata
     * @param propertyName Nome Proprietà
     */
    propertyIsModified(propertyName) {
        let modified = false;
        let typeProp = this.getTypeReflectorByFieldName(propertyName);
        //Proprietà presente
        if (this.propertyInDoc(propertyName) && typeProp) {
            if (typeProp.fieldType != _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                modified = this._original.propertyIsModified(this, propertyName);
            }
            else {
                //E' una collection
                let arList = this[propertyName];
                for (let index = 0; index < arList.length; index++) {
                    const elDoc = arList[index];
                    modified = elDoc.isModified(10);
                    if (modified) {
                        //Se modificato esco
                        break;
                    }
                }
            }
        }
        return modified;
    }
    /**
     * Controlla se il documento è in stato modificato (il documento o i documenti delle sue collection)
     * @param numLivelli NumLivelli = 0 Controlla solo il documento, 1 il documento e il primo livello etc..
     */
    isModified(numLivelli = 0) {
        let objDescriptor;
        let retModified = false;
        //Chiedo il descrittore dei campi
        objDescriptor = this.getDescriptor();
        if (objDescriptor) {
            //Ciclo su tutte le proprietà non di tipo collection
            for (let index = 0; index < objDescriptor.fields.length; index++) {
                const element = objDescriptor.fields[index];
                if (element.fieldType !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                    //Chiedo alla proprietà se è modificata
                    retModified = this.propertyIsModified(element.fieldName);
                    if (retModified) {
                        //Basta che un valore sia modificato e tutto il documento 
                        //è modificato
                        break;
                    }
                }
            }
            //Il documento nelle sue proprietà non è modificato
            if (!retModified) {
                //Devo scendere di livello e controllare se sono 
                //modificati i figli
                if (numLivelli > 0) {
                    //Ciclo ancora sul descrittore
                    for (let index = 0; index < objDescriptor.fields.length; index++) {
                        const element = objDescriptor.fields[index];
                        //Cerco le collection
                        if (element.fieldType == _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                            //il Documento contiene questa collection ?
                            if (this.propertyInDoc(element.fieldName)) {
                                if (Array.isArray(this[element.fieldName])) {
                                    //Prendo l'array di elementi e ciclo alla ricerca
                                    let arElements = this[element.fieldName];
                                    //Ciclo sugli elementi dell'array
                                    for (let index = 0; index < arElements.length; index++) {
                                        const elDoc = arElements[index];
                                        retModified = elDoc.isModified(numLivelli - 1);
                                        if (retModified) {
                                            //Ne basta uno e il documento è modificato
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (retModified) {
                            //Ne basta uno per renderlo modificato
                            break;
                        }
                    }
                }
            }
        }
        return retModified;
    }
    //#endregion
    //#region REPOSITORY REL DOC
    /*
    *  Con il _repositoryRelDoc si consente di includere nell'oggetto altri documenti che hanno un nesso con l'attuale
    *  Documenti arrivati da una operazione di getRelDoc ad esempio
    *
    * addToRepositoryRelDoc(document: IDDocument) => Si aggiunge un documento al repository (se il documento per chiave primaria esiste gia aggiorna)
    * findInRepositoryRelDoc(prOrSeq: string || []) => Torna il documento del repository cercandolo per chiave primaria, oppure per sequenza campi
    * getRelDocProperty(prOrSeq: string || [], fieldName: string) => Torna il valore della proprietà richiesta del documento con primaryKey passata o sequenza campi
    */
    /**
     * Aggiunge, se non presente il documento alla repositoryRelDoc
     * @param document Documento da includere
     * @param seqFields Array con la sequenza dei campi usati per il recupero documentale
     */
    addToRepositoryRelDoc(document, seqFields) {
        let docExist;
        let identity = '';
        //Documento da aggiungere
        if (document) {
            //Aggiungo con una sequenza 
            if (seqFields && seqFields.length != 0) {
                identity = seqFields.toString();
            }
            else {
                //Aggiungo per primaryKey
                //Chiedo la PrimaryKey
                identity = document.getPrimaryKey();
            }
            //Cerco se è già nel repository
            if (identity && identity.length != 0) {
                docExist = this.getDocInRepository(identity);
            }
            //Esiste lo aggiorno
            if (docExist) {
                docExist = document;
            }
            else {
                let newRep = new IDRepository();
                newRep.relDoc = document;
                if (seqFields && seqFields.length != 0) {
                    newRep.seqFields = seqFields;
                }
                this._repositoryRelDoc.push(newRep);
            }
        }
    }
    /**
     * Cerca un documento nel repository o per sequenza di campi o per chiave primaria
     * @param pkOrSeq String PrimaryKey oppure Array con la Sequenza
     */
    getDocInRepository(pkOrSeq) {
        let docReturn;
        let identity;
        if (pkOrSeq) {
            if (Array.isArray(pkOrSeq)) {
                identity = pkOrSeq.toString();
            }
            else {
                identity = pkOrSeq;
            }
            if (identity && identity.length != 0) {
                //Ricerchiamo all'interno del repository
                for (let index = 0; index < this._repositoryRelDoc.length; index++) {
                    const element = this._repositoryRelDoc[index];
                    //Documento trovato lo ritorno
                    //FIXME aggiunta seconda condizione, da vedere se va tutto bnene
                    if (identity == element.identifier || identity == element.relDoc.ID) {
                        docReturn = element.relDoc;
                        break;
                    }
                }
            }
        }
        return docReturn;
    }
    /**
     * Ricerca tra i documenti nel repository, il documento con la primaryKey passata e ritorna il valore della proprietà indicata
     * @param pkOrSeq  Chiave Primaria documento oppure Array con la SeqFields esempio ['IDLOCATION','IAREA']
     * @param fieldName Nome della proprietà da decodificare
     */
    getDocPropertyInRepository(pkOrSeq, fieldName) {
        let relDoc;
        let valRet;
        let identity = '';
        if (pkOrSeq && fieldName && fieldName.length != 0) {
            //Identita di un Documento Correlato è o la chiave primaria o la sequenza dei campi di ricerca
            if (Array.isArray(pkOrSeq)) {
                identity = pkOrSeq.toString();
            }
            else {
                identity = pkOrSeq;
            }
            //Con una identity cerco il documento
            if (identity) {
                relDoc = this.getDocInRepository(identity);
            }
            //Se è presente il documento, ricavo la proprietà
            if (relDoc) {
                let inDoc = relDoc.propertyInDoc(fieldName);
                if (inDoc) {
                    valRet = relDoc[fieldName];
                }
            }
        }
        return valRet;
    }
    //#endregion
    //#region JSON MODIFICHE
    /**
     * UTILIZZATO PRIMA DELLE CREAZIONE DELLA LOGICA ORIGINAL
     *
     * L'istanza documento viene popolata con la CHIAVE PRIMARIA
     * e tutte le proprietà che risultano presenti in docActual ma con un valore modificato in docModify
     * L'istanza del documento puo' essere usata per costruire un JSON di Aggiornamento verso il server
     * da includere nel body
     * Documento Attuale e Documento Modificato non verranno alterati dall'operazione
     * Ritorna TRUE se ci sono proprietà modificate
     * @param docActual Documento Attuale
     * @param docModify Documento Modificato
     */
    setWithChanges(docActual, docModify) {
        let hasModifiche = false;
        let _this = this;
        // La chiave primaria viene sempre copiata
        _this.ID = docActual.ID;
        //Chiedo il Descrittore della classe
        let objDescriptor = _this.getDescriptor();
        /**
         * Ciclo sui campi del documento
         */
        objDescriptor.fields.forEach(field => {
            // Per includere il campo 
            // 1) Non deve essere una collection
            // 2) Non deve essere un campo di Servizio documentale ID, do_deleted etc 
            // 3) Deve esistere sul server
            if (field.fieldType !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection && !field.serviceField() && field.nativeField()) {
                // Il documento con le modifiche possiede il campo
                if (docModify.hasOwnProperty(field.fieldName)) {
                    // Il valore è differente
                    if (docActual[field.fieldName] !== docModify[field.fieldName]) {
                        //Applico la modifica
                        _this[field.fieldName] = docModify[field.fieldName];
                        hasModifiche = true;
                    }
                }
            }
        });
        return hasModifiche;
    }
    /**
     * Modificatore dell'esportazione JSON per le Date
     * @param key Chiave
     * @param value Valore
     */
    JSONReplacer(key, value) {
        if (value instanceof Date) {
            return this.formatDateTimeISO(value);
        }
        return value;
    }
    //#endregion
    //#region DECODIFICA PROPRIETA
    //Esegue la decodifica della proprieta
    //Tutte le proprietà hanno la chiave 
    //in un campo denominato IDXYZ 
    //e decodificate in campi _DESCRXYZ
    /**
     *
     * @param propertyToDecode Nome della proprietà da decodificare
     * @param listDecode Lista con gli elementi
     * @param propertyLookup Nome della proprieta a cui attingere la decodifica
     */
    lookup(propertyToDecode, listDecode, propertyLookup) {
        let namePropertyIDX = propertyToDecode;
        let namePropertyDESCR = '_DESCR' + namePropertyIDX.substring(2, namePropertyIDX.length);
        let _this = this;
        //Proprieta Indice e Descrizione presenti
        if (_this.hasOwnProperty(namePropertyIDX) && _this.hasOwnProperty(namePropertyDESCR)) {
            if (listDecode && propertyLookup) {
                let element = listDecode.find(value => {
                    return value.ID == _this[namePropertyIDX];
                });
                if (element) {
                    if (element.hasOwnProperty(propertyLookup)) {
                        _this[namePropertyDESCR] = element[propertyLookup];
                    }
                }
            }
        }
    }
    //#endregion
    //#region CONDITION
    /**
     * Aggiunge una condizione di filtro differente dalla semplice uguaglianza
     * @param operator    Operatore = > <
     * @param fieldName   Nome Campo
     * @param listOrValue Solo per uguaglianza è possibile indicare un array con i valori da mettere in OR
     */
    addFilterCondition(operator, fieldName, listOrValue) {
        if (fieldName) {
            let objCondition = new FilterCondition(operator, fieldName, listOrValue);
            this._filterConditions.push(objCondition);
        }
    }
    /**
     * Cerca se nelle Condizioni di Filtro è presente il campo e ne ritorna l'oggetto FilterCondition
     * @param fieldName Nome del campo
     */
    getFilterConditionByFieldName(fieldName) {
        let objFilter;
        //Cerchiamo nell'array delle condizioni
        objFilter = this._filterConditions.find(element => {
            return element.fieldName == fieldName;
        });
        return objFilter;
    }
    /**
     * Ritorna l'operatore della condizione di Filtro impostata nel campo
     * Di Default viene tornata sempre l'uguaglianza
     * @param fieldName Nome del campo
     */
    getFilterOperatorByFieldName(fieldName) {
        let objFilter;
        let operator = OperatorCondition.uguale;
        if (fieldName && fieldName.length !== 0) {
            //Chiedo la condizione di filtro se presente
            objFilter = this.getFilterConditionByFieldName(fieldName);
            //Se presente recupero l'operatore della condizione
            if (objFilter) {
                operator = objFilter.operator;
            }
        }
        return operator;
    }
    //#endregion
    //#region TAG DOCUMENTALI
    setTagValue(key, value) {
        let idTag;
        if (key && key.length !== 0) {
            idTag = this._findTag(key);
            if (idTag) {
                idTag.value = value;
            }
            else {
                idTag = new IDTag();
                idTag.key = key;
                idTag.value = value;
            }
        }
    }
    getTagValue(key) {
        let idTag;
        let retValue;
        if (key && key.length !== 0) {
            idTag = this._findTag(key);
            if (idTag) {
                retValue = idTag.value;
            }
        }
        return retValue;
    }
    /**
     * @param key Chiave ricercata
     */
    _findTag(key) {
        let idTag;
        if (this._tags && key && key.length !== 0) {
            idTag = this._tags.find(element => {
                return element.key == key;
            });
        }
        return idTag;
    }
}
class ParamsExport {
    constructor() {
        this.numLivelli = 999;
        this.onlyPropertyModified = false;
        this.onlyDocModified = false;
        this.clearDOProperty = false;
        this.clearPKProperty = false;
        this.clearPrivateProperty = false;
    }
}
/**
 * Classe repository per i documenti correlati
 */
class IDRepository {
    constructor() {
        this.seqFields = [];
    }
    /**
     * Ritorna la primary Key del documento contenuto
     */
    get primaryKey() {
        let propValue = '';
        if (this.relDoc) {
            propValue = this.relDoc.getPrimaryKey();
        }
        return propValue;
    }
    //Ritorna l'identificatore del documento
    get identifier() {
        let ident = '';
        //Se è presente una sequenza, l'identificatore è la sequenza
        if (this.seqFields && this.seqFields.length !== 0) {
            ident = this.seqFields.toString();
        }
        else {
            ident = this.primaryKey;
        }
        return ident;
    }
}
/**
 * Specifica alcune condizioni multiple
 */
class FieldOrCondition {
}
/**
 * Classe di Condizioni di filtro
 */
class FilterCondition {
    constructor(operator, fieldName, listOrValue) {
        this.fieldName = fieldName;
        this.operator = operator;
        this._listOrValue = [];
        //Se ho valori li imposto
        if (listOrValue) {
            this._listOrValue = listOrValue;
        }
    }
    get listOrValue() {
        return this._listOrValue;
    }
    set listOrValue(value) {
        this._listOrValue = value;
    }
}
/**
 * Insieme delle Proprietà Originali di un documento
 */
class IDOriginal {
    constructor() {
        this._propOriginals = [];
    }
    get propOriginals() {
        return this._propOriginals;
    }
    /**
     *
     * @param name Nome Proprieta
     * @param value Valore
     */
    setOriginalProperty(name, value) {
        let prop;
        if (name) {
            prop = this.findPropertyByName(name);
            //Se non lo trovo, creo la proprieta e aggiuno
            if (!prop) {
                prop = new IDProperty();
                prop.name = name;
                this._propOriginals.push(prop);
            }
            //Modifico il valore
            prop.value = value;
        }
    }
    /**
     * Reinizializza l'array originals
     */
    clearPropOriginal() {
        this._propOriginals = [];
    }
    /**
     * Cerca una proprietà per nome
     */
    findPropertyByName(name) {
        let prop;
        if (name) {
            prop = this._propOriginals.find(element => {
                return element.name == name;
            });
        }
        return prop;
    }
    /**
     * Controlla se una proprietà risulta modificata
     * @param propertyName Nome Proprietà
     */
    propertyIsModified(document, propertyName) {
        let modified = false;
        let propOriginal;
        if (document && propertyName && propertyName.length != 0) {
            propOriginal = this.findPropertyByName(propertyName);
            //Se ho original posso controllare
            if (propOriginal) {
                try {
                    if (document[propertyName] != propOriginal.value) {
                        modified = true;
                    }
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
        return modified;
    }
    /**
     * Richiesta di rendere original un documento
     * @param document Documento
     */
    setAsOriginal(document) {
        let objDescriptor;
        if (document) {
            this.clearPropOriginal();
            objDescriptor = document.getDescriptor();
            if (objDescriptor) {
                //Ciclo sui campi del documento
                objDescriptor.fields.forEach(elField => {
                    //Se non sono collection
                    if (elField.fieldType != _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                        //Controllo che il documento contenga la proprietà
                        if (document.propertyInDoc(elField.fieldName)) {
                            //Contiene la proprietà me la segno come Original
                            this.setOriginalProperty(elField.fieldName, document[elField.fieldName]);
                        }
                        else {
                            //Non la contiene metto null come original
                            this.setOriginalProperty(elField.fieldName, null);
                        }
                    }
                });
            }
        }
    }
}
/**
 * Proprietà di un documento
 */
class IDProperty {
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
/**
 * Classe dei tag documentali
 */
class IDTag {
}
/**
 * Operatori delle condizioni
 */
var OperatorCondition;
(function (OperatorCondition) {
    OperatorCondition["uguale"] = "";
    OperatorCondition["minore"] = "<";
    OperatorCondition["maggiore"] = ">";
})(OperatorCondition || (OperatorCondition = {}));


/***/ }),

/***/ "6/gD":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService, PhotoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoType", function() { return PhotoType; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const { Camera, Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
class PhotoService {
    constructor() {
        this.PHOTO_STORAGE = 'photos';
    }
    /**
     *
     * @param typePhoto Tipo della foto
     * @param idPhoto Nel caso di foto profilo è IDUtente
     * @return DataUrl memorizzato
     */
    takePicure(typePhoto, idPhoto) {
        return new Promise((resolve, reject) => {
            Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"].DataUrl,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CameraSource"].Prompt,
                quality: 100
            })
                .then((data) => {
                let myImageDataUrl = data.dataUrl;
                //Salvo nello Storage
                this.storageSave(myImageDataUrl, typePhoto, idPhoto)
                    .then(() => {
                    //Salvataggio corretto, ritorno il dataUrl
                    resolve(myImageDataUrl);
                })
                    .catch(error => {
                    reject(error);
                });
            });
        });
    }
    /**
     * Salvataggio di un DataURL nello storage
     * @param typePhoto Tipo della foto
     * @param idPhoto Identificativo
     */
    storageSave(dataUrlPhoto, typePhoto, idPhoto) {
        let keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
        return new Promise((resolve, reject) => {
            let myPhoto = {
                type: typePhoto,
                dataUrl: dataUrlPhoto
            };
            Storage.set({
                key: keyStorage,
                value: JSON.stringify(myPhoto)
            })
                .then(() => {
                resolve();
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Recupero di un DATAURL dallo storage
     * @param typePhoto Tipo della foto
     * @param idPhoto Identificativo
     * @returns
     */
    storageLoad(typePhoto, idPhoto) {
        let keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
        return new Promise((resolve, reject) => {
            Storage.get({
                key: keyStorage
            })
                .then(data => {
                let myPhoto = JSON.parse(data.value);
                resolve(myPhoto.dataUrl);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
}
PhotoService.ɵfac = function PhotoService_Factory(t) { return new (t || PhotoService)(); };
PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoService, factory: PhotoService.ɵfac, providedIn: 'root' });
var PhotoType;
(function (PhotoType) {
    PhotoType[PhotoType["account"] = 10] = "account";
})(PhotoType || (PhotoType = {}));


/***/ }),

/***/ "6Eaa":
/*!***************************************************!*\
  !*** ./src/app/library/models/structure.model.ts ***!
  \***************************************************/
/*! exports provided: Structure, DynamicClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Structure", function() { return Structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicClass", function() { return DynamicClass; });
/* harmony import */ var _models_sport_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/sport.model */ "A++g");
/* harmony import */ var _models_corso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/corso.model */ "F/re");
/* harmony import */ var src_app_models_area_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/area.model */ "v/X4");
/* harmony import */ var src_app_models_gruppo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/gruppo.model */ "8jQ+");
/* harmony import */ var src_app_models_camposport_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/camposport.model */ "sbYY");
/* harmony import */ var src_app_models_aperturalocation_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/aperturalocation.model */ "w5Je");
/* harmony import */ var src_app_models_account_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/account.model */ "KGuB");
/* harmony import */ var src_app_models_arealink_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/arealink.model */ "h++G");
/* harmony import */ var src_app_models_campo_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/campo.model */ "R5r1");
/* harmony import */ var src_app_models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/categoriaeta.model */ "wG3K");
/* harmony import */ var src_app_models_corsoprogramma_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/corsoprogramma.model */ "t3EU");
/* harmony import */ var src_app_models_livello_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/livello.model */ "TH60");
/* harmony import */ var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/location.model */ "V6dt");
/* harmony import */ var src_app_models_locaton_image_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/locaton-image.model */ "Lk4g");
/* harmony import */ var src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/models/newsevento.model */ "h27B");
/* harmony import */ var src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/pianificazionecorso.model */ "b5Gy");
/* harmony import */ var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/models/prenotazione.model */ "hXF6");
/* harmony import */ var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/models/prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/models/utente.model */ "AN5U");
/* harmony import */ var src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/models/utenteiscrizione.model */ "SCCg");
/* harmony import */ var src_app_models_utentelivello_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/models/utentelivello.model */ "MFYn");
/* harmony import */ var src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/models/utenteprenotazione.model */ "TP3D");
/* harmony import */ var src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/models/impegno.model */ "M0fm");
/* harmony import */ var src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/models/areapaymentsetting.model */ "MO7j");
/* harmony import */ var src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/models/accountregistration.model */ "sTQd");
/* harmony import */ var src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/models/occupazionecampi.model */ "0ALl");
/* harmony import */ var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/models/tipodocumentazione.model */ "ci2e");
/* harmony import */ var src_app_models_documentazione_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/models/documentazione.model */ "PVTr");
/* harmony import */ var src_app_models_corsopresenze_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/models/corsopresenze.model */ "vl3Y");
/* harmony import */ var src_app_models_ricevuta_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/models/ricevuta.model */ "X/Aa");
/* harmony import */ var src_app_models_articolo_model__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/models/articolo.model */ "B7Q7");
/* harmony import */ var src_app_models_articolocolore_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/models/articolocolore.model */ "1IFm");
/* harmony import */ var src_app_models_articolotagliemisura_model__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/models/articolotagliemisura.model */ "hFUh");
/* harmony import */ var src_app_models_unitamisura_model__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/models/unitamisura.model */ "kVR5");
/* harmony import */ var src_app_models_valuta_model__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/models/valuta.model */ "WT0H");
/* harmony import */ var src_app_models_datachiusura_model__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/models/datachiusura.model */ "eF/0");
/* harmony import */ var src_app_models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/models/corsoallegato.model */ "pEHE");





































//https://medium.com/@buddhi.amigo/how-to-create-typescript-classes-dynamically-b29ca7767ee5
const Structure = {
    Sport: _models_sport_model__WEBPACK_IMPORTED_MODULE_0__["Sport"],
    Corso: _models_corso_model__WEBPACK_IMPORTED_MODULE_1__["Corso"],
    Area: src_app_models_area_model__WEBPACK_IMPORTED_MODULE_2__["Area"],
    AreaLink: src_app_models_arealink_model__WEBPACK_IMPORTED_MODULE_7__["AreaLink"],
    AreaPaymentSetting: src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_23__["AreaPaymentSetting"],
    Gruppo: src_app_models_gruppo_model__WEBPACK_IMPORTED_MODULE_3__["Gruppo"],
    CampoSport: src_app_models_camposport_model__WEBPACK_IMPORTED_MODULE_4__["CampoSport"],
    AperturaLocation: src_app_models_aperturalocation_model__WEBPACK_IMPORTED_MODULE_5__["AperturaLocation"],
    Account: src_app_models_account_model__WEBPACK_IMPORTED_MODULE_6__["Account"],
    Campo: src_app_models_campo_model__WEBPACK_IMPORTED_MODULE_8__["Campo"],
    CategoriaEta: src_app_models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_9__["CategoriaEta"],
    CorsoProgramma: src_app_models_corsoprogramma_model__WEBPACK_IMPORTED_MODULE_10__["CorsoProgramma"],
    Livello: src_app_models_livello_model__WEBPACK_IMPORTED_MODULE_11__["Livello"],
    Location: src_app_models_location_model__WEBPACK_IMPORTED_MODULE_12__["Location"],
    LocationImage: src_app_models_locaton_image_model__WEBPACK_IMPORTED_MODULE_13__["LocationImage"],
    NewsEvento: src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_14__["NewsEvento"],
    PianificazioneCorso: src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_15__["PianificazioneCorso"],
    Prenotazione: src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_16__["Prenotazione"],
    PrenotazionePianificazione: src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_17__["PrenotazionePianificazione"],
    Utente: src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_18__["Utente"],
    UtenteIscrizione: src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_19__["UtenteIscrizione"],
    UtenteLivello: src_app_models_utentelivello_model__WEBPACK_IMPORTED_MODULE_20__["UtenteLivello"],
    UtentePrenotazione: src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_21__["UtentePrenotazione"],
    Impegno: src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_22__["Impegno"],
    AccountOperationResponse: src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_24__["AccountOperationResponse"],
    AccountRequestCode: src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_24__["AccountRequestCode"],
    AccountVerifyCode: src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_24__["AccountVerifyCode"],
    OccupazioneCampi: src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_25__["OccupazioneCampi"],
    TipoDocumentazione: src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_26__["TipoDocumentazione"],
    Documentazione: src_app_models_documentazione_model__WEBPACK_IMPORTED_MODULE_27__["Documentazione"],
    CorsoPresenze: src_app_models_corsopresenze_model__WEBPACK_IMPORTED_MODULE_28__["CorsoPresenze"],
    MasterDocumento: src_app_models_ricevuta_model__WEBPACK_IMPORTED_MODULE_29__["MasterDocumento"],
    Articolo: src_app_models_articolo_model__WEBPACK_IMPORTED_MODULE_30__["Articolo"],
    ArticoloColore: src_app_models_articolocolore_model__WEBPACK_IMPORTED_MODULE_31__["ArticoloColore"],
    ArticoloTaglieMisura: src_app_models_articolotagliemisura_model__WEBPACK_IMPORTED_MODULE_32__["ArticoloTaglieMisura"],
    Valuta: src_app_models_valuta_model__WEBPACK_IMPORTED_MODULE_34__["Valuta"],
    UnitaMisura: src_app_models_unitamisura_model__WEBPACK_IMPORTED_MODULE_33__["UnitaMisura"],
    DataChiusura: src_app_models_datachiusura_model__WEBPACK_IMPORTED_MODULE_35__["DataChiusura"],
    CorsoAllegato: src_app_models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_36__["CorsoAllegato"]
};
class DynamicClass {
    constructor(className, opts) {
        if (Structure[className] === undefined || Structure[className] === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new Structure[className](opts);
    }
}


/***/ }),

/***/ "8jQ+":
/*!****************************************!*\
  !*** ./src/app/models/gruppo.model.ts ***!
  \****************************************/
/*! exports provided: Gruppo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gruppo", function() { return Gruppo; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _privateimage_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privateimage.model */ "Oq6q");




class Gruppo extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.PRIVATEIMAGE = [];
    }
    /**
     * Imposta le proprietà del documento
     * @param data JSON Ricevuto
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
        //Imposto le collection
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Imposto le collection del doumento
     * @param data JSON Ricevuto
     */
    setCollection(data) {
        this.PRIVATEIMAGE = [];
        /** Ho delle immagini */
        if (data.PRIVATEIMAGE) {
            this.setCollectionprivateImage(data);
        }
    }
    /**
     * Collection PRIVATEIMAGE
     * @param data JSON Ricevuto
     */
    setCollectionprivateImage(data) {
        data.PRIVATEIMAGE.forEach(element => {
            let newPrivateImage = new _privateimage_model__WEBPACK_IMPORTED_MODULE_3__["PrivateImage"]();
            newPrivateImage.setJSONProperty(element);
            this.PRIVATEIMAGE.push(newPrivateImage);
        });
    }
    /**
* Ritorna il descrittore della Struttura Campi
*/
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
        let arString = ['DENOMINAZIONE',
            'INDIRIZZO',
            'CAP',
            'COMUNE',
            'PROVINCIA',
            'ISOSTATO',
            'CODICEFISCALE',
            'PARTITAIVA',
            'APPID',
            'PREFIXDOMAIN',
            'URLPRIVACY'
        ];
        let arNumber = ['TIPOGRUPPO', 'APPTIPOVERIFICA'];
        let arBoolean = ['APPFLAGREGISTRAZIONE', 'FLAGAPPSHOPONLINE'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['PRIVATEIMAGE'];
        objDescriptor.className = 'Gruppo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'GRUPPOSPORTIVO';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
        return objDescriptor;
    }
    isClosedFromCalendar() {
    }
    get needEmailVerify() {
        if (this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemail || this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
            return true;
        }
        else {
            return false;
        }
    }
    get needMobileVerify() {
        if (this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificasms || this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "9PZ8":
/*!*************************************************!*\
  !*** ./src/app/models/iscrizionecorso.model.ts ***!
  \*************************************************/
/*! exports provided: IscrizioneCorso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IscrizioneCorso", function() { return IscrizioneCorso; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iscrizioneincasso.model */ "xeLN");



class IscrizioneCorso extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.ISCRIZIONEINCASSO = [];
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDCORSO',
            'IDUTENTE',
            'NOMINATIVO',
            'EMAIL',
            'MOBILENUMBER',
            'NOTES',
            'IDSPORT',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'CODICEALFA',
            'IDTIPOPAGAMENTO',
            'IDCODICEIMPOSTA',
            'IDVALUTA'
        ];
        let arNumber = ['ANNOISCRIZIONE',
            'CODICEINT',
            'SESSO',
            'STATOISCRIZIONE',
            'TIPOPREZZO'
        ];
        let arDecimal = ['IMPORTO',
            'IMPOSTA',
            'TOTALE',
            'RESIDUO',
            'INCASSATO'];
        let arBoolean = [];
        let arDate = ['DATAISCRIZIONE', 'DATAFINEISCRIZIONE', 'DATAINIZIO'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'IscrizioneCorso';
        objDescriptor.classWebApiName = 'ISCRIZIONECORSO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.addCollection('ISCRIZIONEINCASSO', 'IscrizioneIncasso', 'IDISCRIZIONECORSO');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        this.setCollection(data);
        this.setOriginal();
    }
    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data) {
        this.ISCRIZIONEINCASSO = [];
        if (data.ISCRIZIONIINCASSI) {
            this.setCollectionIscrizioniIncassi(data.ISCRIZIONIINCASSI);
        }
    }
    /**
     * Imposta la collection ISCRIZIONIINCASSI
     * @param arIncassi JSON Ricevuti
     */
    setCollectionIscrizioniIncassi(arIncassi) {
        this.ISCRIZIONEINCASSO = [];
        if (arIncassi) {
            arIncassi.forEach(element => {
                //Ricerco se esiste già
                let newIscrizioneIncasso = this.getIncassoByID(element.ID);
                //Non esiste lo creo nuovo
                if (!newIscrizioneIncasso) {
                    newIscrizioneIncasso = new _iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_2__["IscrizioneIncasso"]();
                    newIscrizioneIncasso.setJSONProperty(element);
                    this.ISCRIZIONEINCASSO.push(newIscrizioneIncasso);
                }
                else {
                    //Reimposto i valori
                    newIscrizioneIncasso.setJSONProperty(element);
                }
            });
        }
    }
    /**
     * Ritorna l'elemento di IscrizioneIncasso che corrisponde con ID
     */
    getIncassoByID(idIscrizioneIncasso) {
        //Ricerco l'elemento richiesto
        let existIscrizioneIncasso = this.ISCRIZIONEINCASSO.find(elIscrizioneIncasso => {
            return elIscrizioneIncasso.ID == idIscrizioneIncasso;
        });
        return existIscrizioneIncasso;
    }
}


/***/ }),

/***/ "A++g":
/*!***************************************!*\
  !*** ./src/app/models/sport.model.ts ***!
  \***************************************/
/*! exports provided: Sport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sport", function() { return Sport; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _models_livello_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/livello.model */ "TH60");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");



class Sport extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.LIVELLO = [];
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
        let arString = ['DENOMINAZIONE',
            'ICONA'
        ];
        let arNumber = ['TIPOLOGIA', 'PARTECIPANTI'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['LIVELLO'];
        objDescriptor.className = 'Sport';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'SPORT';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
        return objDescriptor;
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Imposta le collection
     * @param data JSON Received
     */
    setCollection(data) {
        this.LIVELLO = [];
        if (data.LIVELLO) {
            this.setCollectionLivello(data.LIVELLO);
        }
    }
    /**
     * Imposta la collection dei Livelli
     * @param data JSON Received
     */
    setCollectionLivello(dataLivello) {
        dataLivello.forEach(elLivello => {
            let newLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_1__["Livello"]();
            newLivello.setJSONProperty(dataLivello);
            this.LIVELLO.push(newLivello);
        });
    }
    ;
}
/*
    Le icone di tipo Stringa sono icone Sportsfont

    INSTALLARE IL MODULO CON:
    > npm install sportsfont
    
    UTILIZZO HTML
    per inserire le icone usare il tag i con la classe opportuna tra quelle disponibili.

    ESEMPI:
    <i class="icon-soccer"></i>
    Usare Style per modificare Colore o Dimensione
    <i class="icon-soccer" style="font-size:20pt;color:red;"></i>

    Class Possibili:
        icon-cricket
        icon-bicycle
        icon-baseball
        icon-golf
        icon-skiing
        icon-soccer
        icon-swimming
        icon-tennis
        icon-theatre
        icon-football
        icon-basketball-1
        icon-pitch
        icon-badminton
        icon-rowing
        icon-rugby
        icon-archery
        icon-baking
        icon-dance
        icon-bouldering
        icon-canoe
        icon-shooting
        icon-climbing
        icon-bowl
        icon-cycling
        icon-volleyball
        icon-unichallenge
        icon-trampoline
        icon-tabletennis
        icon-squash
        icon-sail
        icon-run
        icon-pool
        icon-goal
        icon-lacrosse
        icon-martial
        icon-hockey
        icon-frisbee
        icon-handball
        icon-fencing
        icon-horse
        icon-netball
        icon-darts
        icon-fulltime
        icon-halftime
        icon-kickoff
        icon-debate
        icon-starttime
        icon-cheerleader
        icon-pokemon
        icon-computer
        icon-boxing
        icon-croquet
        icon-cinema
*/ 


/***/ }),

/***/ "AN5U":
/*!****************************************!*\
  !*** ./src/app/models/utente.model.ts ***!
  \****************************************/
/*! exports provided: Utente, storageUtente, ParamsVerifica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utente", function() { return Utente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageUtente", function() { return storageUtente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsVerifica", function() { return ParamsVerifica; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");
/* harmony import */ var _utentelivello_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utentelivello.model */ "MFYn");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _documentazione_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentazione.model */ "PVTr");






class Utente extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    /**
     *
     * @param onlyInstance Non inizializzare il documento, ma crea solo istanza
     */
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this.UTENTILIVELLI = [];
            this.DOCUMENTAZIONI = [];
            this.PROFILAZIONEESTERNA = false;
            this.PROFILAZIONEINTERNA = false;
        }
        this.VERIFICATAMAIL = false;
        this.VERIFICATAMOBILE = false;
    }
    /**
     * Ritorna l'eta del partecipante
     */
    get eta() {
        let num = 0;
        let oggi = new Date();
        if (this.NATOIL) {
            if (this.NATOIL < oggi) {
                num = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].durataAnni(this.NATOIL, oggi);
            }
        }
        return num;
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["Descriptor"]();
        let arString = ['COGNOME',
            'NOME',
            'NOMINATIVO',
            'EMAIL',
            'WEBLOGIN',
            'MOBILENUMBER',
            'INDIRIZZO',
            'CAP',
            'COMUNE',
            'PROVINCIA',
            'ISOSTATO',
            'NATOA',
            'NATOCAP',
            'NATOPROV',
            'NATOISOSTATO',
            'CODICEFISCALE',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'AVATAR',
            'SHAPASSWORD',
            'INPUTPASSWORD',
            'TELEFONO1',
            'TELEFONO2',
            'LISTMANSIONI'
        ];
        let arNumber = ['SESSO', 'RUOLO'];
        let arBoolean = ['NEWSLETTER', 'PROFILAZIONEINTERNA', 'PROFILAZIONEESTERNA', 'VERIFICATAMAIL', 'VERIFICATAMOBILE'];
        let arDate = ['NATOIL'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'Utente';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UTENTE';
        objDescriptor.describeField = 'NOMINATIVO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].time);
        //Aggiungo le collection
        objDescriptor.addCollection('UTENTILIVELLI', 'UtenteLivello', 'IDUTENTE');
        objDescriptor.addCollection('DOCUMENTAZIONI', 'Documentazione', 'IDUTENTE');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        return objDescriptor;
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.UTENTILIVELLI = [];
        //Sistemo le collection
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Imposta le collection dell'oggetto
     * @param data JSON Received
     */
    setCollection(data) {
        if (data.hasOwnProperty('UTENTELIVELLO') && data.UTENTELIVELLO !== undefined) {
            this.setCollectionLivelli(data);
        }
        if (data.hasOwnProperty('DOCUMENTAZIONE') && data.DOCUMENTAZIONE !== undefined) {
            this.setCollectionDocumentazione(data);
        }
    }
    /**
     * Crea gli oggetti UTENTILIVELLI
     * @param data JSON Received
     */
    setCollectionLivelli(data) {
        data.UTENTELIVELLO.forEach(element => {
            let newLevel = new _utentelivello_model__WEBPACK_IMPORTED_MODULE_2__["UtenteLivello"]();
            newLevel.setJSONProperty(element);
            this.UTENTILIVELLI.push(newLevel);
        });
    }
    /**
     * Crea gli oggetti DOCUMENTAZIONE
     * @param data JSON Received
     */
    setCollectionDocumentazione(data) {
        data.DOCUMENTAZIONE.forEach(element => {
            let NewDoc = new _documentazione_model__WEBPACK_IMPORTED_MODULE_5__["Documentazione"]();
            NewDoc.setJSONProperty(element);
            this.DOCUMENTAZIONI.push(NewDoc);
        });
    }
    /**
     * Ritorna una label per indicare se la Mail è verificata oppure no
     */
    getLabelVerificaMail() {
        let labelReturn = '';
        //Mail verificata
        if (this.VERIFICATAMAIL) {
            //Se c'e' la mail dico che è verificata
            if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'VERIFICATA';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        else {
            //Se c'e' la mail dico che non è verificata
            if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'NON VERIFICATA';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        return labelReturn;
    }
    /**
     * Ritorna una label per indicare se il telefono è verificato oppure no
     */
    getLabelVerificaMobile() {
        let labelReturn = '';
        //Mobile verificato
        if (this.VERIFICATAMOBILE) {
            //Se c'e' la mail dico che è verificata
            if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'VERIFICATO';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        else {
            //Se c'e' la mail dico che non è verificata
            if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'NON VERIFICATO';
            }
            else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
            }
        }
        return labelReturn;
    }
    /**
     * Cerca dentro a Utente Livelli se presente uno sport e un determinato livello
     * @param idLivello Livello richiesto
     * @param idSport Sport richiesto
     */
    isForLevelSport(idLivello, idSport) {
        let isValid = false;
        let index = -1;
        if (this.UTENTILIVELLI && this.UTENTILIVELLI.length != 0) {
            index = this.UTENTILIVELLI.findIndex(elLivello => {
                return (elLivello.IDLIVELLO == idLivello && elLivello.IDSPORT == idSport);
            });
        }
        if (index != -1) {
            isValid = true;
        }
        return true;
    }
    /**
     * Confronta il target Sesso con il Sesso dell'utente
     * @param target Target di confronto
     */
    isForTargetSesso(target) {
        let isValid = false;
        if (target && this.SESSO) {
            if ((target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschile || target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschileFemminile) && this.SESSO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Sesso"].maschio) {
                isValid = true;
            }
            else if ((target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].femminile || target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschileFemminile) && this.SESSO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Sesso"].femmina) {
                isValid = true;
            }
        }
        return isValid;
    }
    get anagraficaOk() {
        let error = false;
        if (!(this.COGNOME
            && this.NOME
            && this.INDIRIZZO
            && this.CAP
            && this.COMUNE
            && this.PROVINCIA
            && this.ISOSTATO
            && this.SESSO
            && this.NATOIL
            && this.NATOA
            //&&this.NATOCAP
            && this.NATOPROV
            && this.NATOISOSTATO
            && this.CODICEFISCALE)) {
            error = true;
        }
        if (!error
            && this.NOME != ''
            && this.INDIRIZZO != ''
            && this.CAP != ''
            && this.COMUNE != ''
            && this.PROVINCIA != ''
            && this.ISOSTATO != ''
            && this.NATOA != ''
            //&&this.NATOCAP!= ''
            && this.NATOPROV != ''
            && this.NATOISOSTATO != ''
            && this.CODICEFISCALE != '')
            return !error;
    }
    /**
     * la funzione restituisce i parametri da passare alla verifyPage, per eseguire tutte le verifiche ancora necessarie
     * secondo quanto richiesto dal docGruppo. se non ci sono verifiche necessarie, restituisce undefined
     * @param docGruppo il gruppo sportivo per il quale eseguire l'operazione
     */
    getParamsVerifica(docGruppo) {
        let needVerifyMail = false;
        let needVerifyTel = false;
        let needUpdateProfile = false;
        if (docGruppo.APPTIPOVERIFICA == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemail || docGruppo.APPTIPOVERIFICA == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
            //il gruppo richiede la verifica della mail
            if (!this.VERIFICATAMAIL) {
                //non ho verificato la mail, devo farlo
                needVerifyMail = true;
            }
        }
        if (docGruppo.APPTIPOVERIFICA == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificasms || docGruppo.APPTIPOVERIFICA == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
            //il gruppo richiede la verifica del telefono
            if (!this.VERIFICATAMOBILE) {
                //non ho verificato il telefono, devo farlo
                needVerifyTel = true;
            }
        }
        if (!this.anagraficaOk) {
            //devo aggiornare l'anagrafica
            needUpdateProfile = true;
        }
        //ora creo i parametri
        let params = undefined;
        if (needVerifyMail || needVerifyTel || needUpdateProfile) {
            //se c'è qualcosa da fare, istanzio params e lo valorizzo
            params = new ParamsVerifica();
            if (needVerifyMail && needVerifyTel) {
                //devo verificare sia mail che telefono
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms;
            }
            else if (needVerifyMail) {
                //devo verificare solo la mail
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemail;
            }
            else if (needVerifyTel) {
                //devo verificare solo il tel
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificasms;
            }
            else {
                //non devo verificare niente
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].noverifica;
            }
            //segno nei params se aggionare o meno l'anagrafica
            params.updateDocUtente = needUpdateProfile;
        }
        //ritorno i parametri. se non c'è nulla da verificare, params sarà UNDEFINED    
        return params;
    }
    get isTrainer() {
        let isTrainer = false;
        if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
            if (this.LISTMANSIONI.includes(`"${_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].trainer.toString()}"`)) {
                isTrainer = true;
            }
        }
        return isTrainer;
    }
    get isAssistenteTrainer() {
        let isTrainer = false;
        if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
            if (this.LISTMANSIONI.includes(`"${_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].assistenteTrainer.toString()}"`)) {
                isTrainer = true;
            }
        }
        return isTrainer;
    }
    get isCustode() {
        let isCustode = false;
        if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
            if (this.LISTMANSIONI.includes(`"${_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].custode.toString()}"`)) {
                isCustode = true;
            }
        }
        return isCustode;
    }
}
class storageUtente {
    constructor(user, pwd) {
        this.loginUser = user;
        this.pwdUser = pwd;
        this.cripted = false;
    }
    /**
     * Salvo in Stringa JSON l'oggetto
     */
    saveJSON(crypt) {
        let strReturn = '';
        let myObj = new storageUtente(this.loginUser, this.pwdUser);
        if (crypt) {
            //Qui devo criptare utente e password
            myObj.cripted = true;
        }
        strReturn = JSON.stringify(myObj);
        return strReturn;
    }
    loadJSON(stringaJSON) {
        let myObj = new storageUtente('', '');
        myObj = JSON.parse(stringaJSON);
        if (myObj) {
            if (myObj.cripted) {
                //Devo decriptare username e password
            }
            this.loginUser = myObj.loginUser;
            this.pwdUser = myObj.pwdUser;
            this.cripted = myObj.cripted;
        }
    }
}
class ParamsVerifica {
}


/***/ }),

/***/ "Ag5x":
/*!*************************************!*\
  !*** ./src/app/models/log.model.ts ***!
  \*************************************/
/*! exports provided: LogApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogApp", function() { return LogApp; });
class LogApp {
    /**
     * Visualizza in console i dati
     * @param data Dati da stampare in console
     */
    static consoleLog(data) {
        let showDebug = false;
        if (showDebug) {
            console.log(data);
        }
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: "1.4"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B/ah":
/*!*******************************************************!*\
  !*** ./src/app/services/corso-valutazione.service.ts ***!
  \*******************************************************/
/*! exports provided: CorsoValutazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoValutazioneService", function() { return CorsoValutazioneService; });
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/corsovalutazione.model */ "IGb/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CorsoValutazioneService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
    }
    /**
     * Il metodo effettua una chiamata al server per recuperare la scheda
     *
     * @param idCorso idCorso richiesto
     * @returns CorsoValutazione
     * @returns Reject Message
     */
    requestSchedaValutazioneCorso(idCorso) {
        let myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["PostParams"]();
        let method = 'getSchedaForTrainer';
        let docToCall = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
        return new Promise((resolve, reject) => {
            if (idCorso && idCorso.length != 0) {
                //Preparo i parametri della chiamata
                myPostParams.key = 'idCorso';
                myPostParams.value = idCorso;
                this.docStructureService.requestForFunction(docToCall, method, '', myPostParams)
                    .then((risposta) => {
                    //Non si puo' richiedere la scheda
                    if (!risposta.result) {
                        reject(risposta.message);
                    }
                    else if (risposta.document) {
                        //Ho un documento e lo trasformo in CorsoValutazione
                        let myDocScheda = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
                        myDocScheda.setJSONProperty(risposta.document);
                        resolve(myDocScheda);
                    }
                    else {
                        reject('Scheda non ricevuta');
                    }
                })
                    .catch(error => {
                    reject(error);
                });
            }
            else {
                reject('Nessun corso richiesto');
            }
        });
    }
    /**
     * Richiede al server il salvataggio della scheda
     * @param docScheda Scheda in salvataggio
     */
    requestForSave(docScheda) {
        let myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["PostParams"]();
        let method = 'mobSaveValutazione';
        let docToCall = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
        return new Promise((resolve, reject) => {
            if (docScheda) {
                myPostParams.key = 'docScheda';
                myPostParams.value = docScheda;
                this.docStructureService.requestForFunction(docToCall, method, '', myPostParams)
                    .then((risposta) => {
                    if (!risposta.result) {
                        reject(risposta.message);
                    }
                    else {
                        resolve(risposta);
                    }
                });
            }
            else {
                reject('Nessuna scheda da memorizzare');
            }
        });
    }
}
CorsoValutazioneService.ɵfac = function CorsoValutazioneService_Factory(t) { return new (t || CorsoValutazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__["DocstructureService"])); };
CorsoValutazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CorsoValutazioneService, factory: CorsoValutazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "B7Q7":
/*!******************************************!*\
  !*** ./src/app/models/articolo.model.ts ***!
  \******************************************/
/*! exports provided: Articolo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articolo", function() { return Articolo; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class Articolo extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'CODICE',
            'CODICEBARRE',
            'DESCR',
            'IDUNTAMISURA',
            'SCONTOTEXT',
            'CATEGORIA',
            'DESCRHTML',
            'IDVALUTA',
        ];
        let arNumber = ['PREZZONETTO', 'PREZZOLORDO', 'TIPOARTICOLO', 'TIPOPREZZO'];
        let arBoolean = ['FLAGTAGLIEMISURE', 'FLAGCOLORI', 'FLAGSHOPONLINE'];
        let arDate = [];
        let arDateTime = ['VALIDOFINO'];
        let arTime = [];
        objDescriptor.className = 'Articolo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLO';
        objDescriptor.describeField = 'DESCR';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        //Aggiungo le collection
        objDescriptor.addCollection('ARTICOLITAGLIEMISURE', 'ArticoloTaglieMisura', 'IDARTICOLO');
        objDescriptor.addCollection('ARTICOLICOLORI', 'ArticoloColore', 'IDARTICOLO');
        objDescriptor.setRelation('IDUNITAMISURA', 'UnitaMisura');
        objDescriptor.setRelation('IDVALUTA', 'Valuta');
        return objDescriptor;
    }
}


/***/ }),

/***/ "BWIo":
/*!**********************************************!*\
  !*** ./src/app/services/invoices.service.ts ***!
  \**********************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_ricevuta_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ricevuta.model */ "X/Aa");
/* harmony import */ var _models_utente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/utente.model */ "AN5U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class InvoicesService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
        this._listaDocumentiFiscali = [];
        this.listaDocumentiFiscali = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    /**
     * la funzione richede al server l'elenco delle ricevute per l'utente passato
     * @param utente l'untete per cui si richiedono le fatture
     */
    requestInvoices(utente, anno) {
        return new Promise((resolve, reject) => {
            //creo il filtro
            let filterDocuement = new _models_ricevuta_model__WEBPACK_IMPORTED_MODULE_3__["MasterDocumento"](true);
            filterDocuement.IDANAGRAFICA = utente.ID;
            //se c'è l'anno, lo inserisco nel filtro
            if (anno) {
                filterDocuement.ANNO = anno;
            }
            //faccio la richiesta
            this.docStructureService.requestNew(filterDocuement)
                .then(listDocuments => {
                //salvo la lista in memoria e scateno l'bservable
                this._listaDocumentiFiscali = listDocuments;
                this.listaDocumentiFiscali.next(this._listaDocumentiFiscali);
                resolve(this._listaDocumentiFiscali);
            })
                .catch(error => {
                //errore di connessione
                reject(error);
            });
        });
    }
    /**
     * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
     * @param documento elemento MasterDocumento che si vuole scaricare
     */
    downloadInvoice(documento) {
        return new Promise((resolve, reject) => {
            //metodo statico da richiamare
            const method = 'getFile';
            //creo il mio parametro
            let myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
            myParams.key = 'primaryKey';
            myParams.value = documento.ID;
            this.docStructureService.requestForFunction(documento, method, null, myParams)
                .then((response) => {
                resolve(response);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * la funzione, presa una stringa b64 e il content-type, restituisce il blob
     * @param b64Data stringa B64 SENZA tipo di file
     * @param contentType stringa tipo file (default: application/pdf)
     */
    base64toBlob(b64Data, contentType = 'application/pdf') {
        return new Promise((resolve, reject) => {
            let fullB64 = 'data:' + contentType + ';base64,' + b64Data;
            fetch(fullB64).then(res => {
                res.blob().then(blob => {
                    resolve(blob);
                });
            });
        });
    }
}
InvoicesService.ɵfac = function InvoicesService_Factory(t) { return new (t || InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__["DocstructureService"])); };
InvoicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: InvoicesService, factory: InvoicesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ECYZ":
/*!***********************************************!*\
  !*** ./src/app/models/codicefiscale.model.ts ***!
  \***********************************************/
/*! exports provided: CodiceFiscale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodiceFiscale", function() { return CodiceFiscale; });
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");

class CodiceFiscale {
    constructor(codFisc) {
        this.codiceFiscale = codFisc;
        this.checkValidate = false;
        this.msgValidate = '';
    }
    /**
     * Normalizes a CF by removing white spaces and converting to upper-case.
     * @param string cf Raw CF, possibly with spaces.
     * @return string Normalized CF.
     */
    normalize(cf) {
        return cf.replace(/\s/g, "").toUpperCase();
    }
    /**
       * Returns the formatted CF. Currently does nothing but normalization.
       * @param string cf Raw CF, possibly with spaces.
       * @return string Formatted CF.
       */
    format(cf) {
        return this.normalize(cf);
    }
    /**
       * Validates a regular CF.
       * @param string cf Normalized, 16 characters CF.
       * @return string Null if valid, or string describing why this CF must be
       * rejected.
       */
    PRIVATE_validate_regular(cf) {
        if (!/^[0-9A-Z]{16}$/.test(cf))
            return "Invalid characters.";
        var s = 0;
        var even_map = "BAFHJNPRTVCESULDGIMOQKWZYX";
        for (var i = 0; i < 15; i++) {
            var c = cf[i];
            var n = 0;
            if ("0" <= c && c <= "9")
                n = c.charCodeAt(0) - "0".charCodeAt(0);
            else
                n = c.charCodeAt(0) - "A".charCodeAt(0);
            if ((i & 1) === 0)
                n = even_map.charCodeAt(n) - "A".charCodeAt(0);
            s += n;
        }
        if (s % 26 + "A".charCodeAt(0) !== cf.charCodeAt(15))
            return "Invalid checksum.";
        return null;
    }
    /**
       * Validates a temporary CF.
       * @param string cf Normalized, 11 characters CF.
       * @return string Null if valid, or string describing why this CF must be
       * rejected.
       */
    PRIVATE_validate_temporary(cf) {
        if (!/^[0-9]{11}$/.test(cf))
            return "Invalid characters.";
        var s = 0;
        for (var i = 0; i < 11; i++) {
            var n = cf.charCodeAt(i) - "0".charCodeAt(0);
            if ((i & 1) === 1) {
                n *= 2;
                if (n > 9)
                    n -= 9;
            }
            s += n;
        }
        if (s % 10 !== 0)
            return "Invalid checksum.";
        return null;
    }
    /**
       * Verifies the basic syntax, length and control code of the given CF.
       * @param string cf Raw CF, possibly with spaces.
       * @return string Null if valid, or string describing why this CF must be
       * rejected.
       */
    validate() {
        let check = false;
        let msg = '';
        if (this.codiceFiscale.length !== 0) {
            this.codiceFiscale = this.normalize(this.codiceFiscale);
            if (this.codiceFiscale.length === 0) {
                msg = 'Empty';
            }
            else if (this.codiceFiscale.length === 16) {
                msg = this.PRIVATE_validate_regular(this.codiceFiscale);
            }
            else if (this.codiceFiscale.length === 11) {
                msg = this.PRIVATE_validate_temporary(this.codiceFiscale);
            }
            else {
                msg = "Invalid length.";
            }
        }
        else {
            msg = "Invalid length.";
        }
        //Se c'e' un messaggio, check non passato
        if (msg) {
            check = false;
        }
        else {
            check = true;
        }
        this.msgValidate = msg;
        this.checkValidate = check;
        return check;
    }
    /**
     * Decodifica il codice fiscale nelle sue parti
     */
    basicDecode() {
        let result = false;
        if (this.codiceFiscale.length == 16) {
            result = this.basicDecode16();
        }
        return result;
    }
    /**
     * Effettua una prima e semplice decodifica dei dati contenuti nel codice fiscale
     */
    basicDecode16() {
        let chDay = '';
        let chMonth = '';
        let chYear = '';
        let day = 0;
        let month = 0;
        let year = 0;
        let secolo = 2000;
        let result = true;
        let adesso = new Date();
        //0123456789  10 11 12 13 14 15
        //CVLPTR72P0  9  G  3  8  8   D
        //CODICE CONTROLLO
        this.codiceControllo = this.codiceFiscale.substr(15, 1);
        //CODICE CATASTALE
        this.codiceCatastale = this.codiceFiscale.substr(11, 4);
        chDay = this.codiceFiscale.substr(9, 2);
        chMonth = this.codiceFiscale.substr(8, 1);
        chYear = this.codiceFiscale.substr(6, 2);
        try {
            day = parseInt(chDay, 10);
            year = parseInt(chYear, 10);
        }
        catch (error) {
            result = false;
        }
        if (result) {
            //Determino il mese
            month = this.getMonthFromLetter(chMonth);
            if (month == -1) {
                //errore
                result = false;
            }
        }
        //Sistemazione Year
        if (result) {
            secolo = 2000;
            if ((secolo + year) > adesso.getFullYear()) {
                //Cambio secolo e metto il 1900
                secolo = 1900;
            }
            year = secolo + year;
        }
        //Sistemazione Day
        if (result) {
            if (day > 40) {
                day = day - 40;
                //SESSO
                this.sesso = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Sesso"].femmina;
            }
            else {
                //SESSO
                this.sesso = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Sesso"].maschio;
            }
            //DATA NASCITA
            this.dataNascita = new Date(year, month, day);
        }
        return result;
    }
    getMonthFromLetter(letter) {
        let arMesi = [];
        let index = -1;
        arMesi.push('A');
        arMesi.push('B');
        arMesi.push('C');
        arMesi.push('D');
        arMesi.push('E');
        arMesi.push('H');
        arMesi.push('L');
        arMesi.push('M');
        arMesi.push('P');
        arMesi.push('R');
        arMesi.push('S');
        arMesi.push('T');
        index = arMesi.findIndex(el => {
            return el == letter;
        });
        //Questo e' il numero del mese in javascript
        return index;
    }
}


/***/ }),

/***/ "EXUU":
/*!*******************************************!*\
  !*** ./src/app/services/start.service.ts ***!
  \*******************************************/
/*! exports provided: StartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartService", function() { return StartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _sport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sport.service */ "KG3q");
/* harmony import */ var _categoriaeta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoriaeta.service */ "HPlZ");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course.service */ "IAlr");
/* harmony import */ var _utente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utente.service */ "WWZE");
/* harmony import */ var _livello_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./livello.service */ "1Gk/");
/* harmony import */ var _area_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./area.service */ "1W3u");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location.service */ "yHma");
/* harmony import */ var _coursescheduler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coursescheduler.service */ "daHO");
/* harmony import */ var _prenotazione_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prenotazione.service */ "24+7");
/* harmony import */ var _newseventi_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newseventi.service */ "YbkB");
/* harmony import */ var _slotoccupazione_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slotoccupazione.service */ "MtDR");
/* harmony import */ var _models_start_configuration_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/start-configuration.model */ "OH1o");
/* harmony import */ var _models_utente_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/utente.model */ "AN5U");
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/log.model */ "Ag5x");
/* harmony import */ var _utenteprenotazione_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utenteprenotazione.service */ "l6l+");
/* harmony import */ var _utenteiscrizione_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utenteiscrizione.service */ "SHYz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _codicefiscale_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./codicefiscale.service */ "w26W");
/* harmony import */ var _occupazioni_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./occupazioni.service */ "LKAN");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _documento_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documento.service */ "Vr4T");
/* harmony import */ var _invoices_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./invoices.service */ "BWIo");
/* harmony import */ var _posizione_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./posizione.service */ "Ubxr");
/* harmony import */ var _data_chiusura_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./data-chiusura.service */ "I2uL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _models_gruppo_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../models/gruppo.model */ "8jQ+");
/* harmony import */ var _corsoallegato_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./corsoallegato.service */ "v3Yp");
/* harmony import */ var _iscrizionecorso_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iscrizionecorso.service */ "550M");
/* harmony import */ var _corso_valutazione_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./corso-valutazione.service */ "B/ah");
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./photo.service */ "6/gD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");

































































class StartService {
    constructor(platformService, apiService, storageAccess, sportService, categoriaEtaService, corsoService, utenteService, livelloService, areaService, locationService, corsoCalendarioService, prenotazioniService, newsEventiService, slotOccupazioneService, utentePrenotazioneService, utenteIscrizioneService, codFiscService, occupazioniService, docStructureService, documentoService, invoicesService, posizioneService, dataChiusuraService, urlLocation, corsoAllegatoService, iscrizioneCorsoService, corsoValutazioneService, photoService) {
        this.platformService = platformService;
        this.apiService = apiService;
        this.storageAccess = storageAccess;
        this.sportService = sportService;
        this.categoriaEtaService = categoriaEtaService;
        this.corsoService = corsoService;
        this.utenteService = utenteService;
        this.livelloService = livelloService;
        this.areaService = areaService;
        this.locationService = locationService;
        this.corsoCalendarioService = corsoCalendarioService;
        this.prenotazioniService = prenotazioniService;
        this.newsEventiService = newsEventiService;
        this.slotOccupazioneService = slotOccupazioneService;
        this.utentePrenotazioneService = utentePrenotazioneService;
        this.utenteIscrizioneService = utenteIscrizioneService;
        this.codFiscService = codFiscService;
        this.occupazioniService = occupazioniService;
        this.docStructureService = docStructureService;
        this.documentoService = documentoService;
        this.invoicesService = invoicesService;
        this.posizioneService = posizioneService;
        this.dataChiusuraService = dataChiusuraService;
        this.urlLocation = urlLocation;
        this.corsoAllegatoService = corsoAllegatoService;
        this.iscrizioneCorsoService = iscrizioneCorsoService;
        this.corsoValutazioneService = corsoValutazioneService;
        this.photoService = photoService;
        //Oggetto contentente la configurazione
        this._startConfig = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_start_configuration_model__WEBPACK_IMPORTED_MODULE_16__["StartConfiguration"]());
        /* Valorizzata a TRUE quando l'app è pronta a partire */
        this._appReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        //Determina se la connessione sarà a un database locale, o al server
        this._localConnection = false;
        this._forceIdAreaOnLogin = ''; //Se impostato è l'area da mantenere a seguito del login (Usata quando nella booking non sono loggatto, e al termine devo rimanere sull'area)
        //Ogni volta che cambia la configurazione la invio 
        //al servizio docStructure
        this.startConfig.subscribe(elConfig => {
            this.docStructureService.setConfig(elConfig);
        });
    }
    get appReady() {
        return this._appReady.asObservable();
    }
    get startConfig() {
        return this._startConfig.asObservable();
    }
    get actualStartConfig() {
        return this._startConfig.getValue();
    }
    //Ritorna se l'applicazione sta girando su desktop
    get isDesktop() {
        return !this.platformService.is('hybrid');
    }
    //Ritorna se l'applicazione sta girando dentro al web, quindi non in capacitor o cordova
    get isOnWeb() {
        let result = true;
        if (this.platformService.is("cordova") || this.platformService.is("capacitor")) {
            result = false;
        }
        return result;
    }
    /**
     * Controlla l'esecuzione su IOS
     */
    get isOnAppleSystem() {
        let result = true;
        if (this.platformService.is("ios")) {
            result = false;
        }
        return result;
    }
    /**
     * Controlla l'esecuzione su IOS
     */
    get isOnAndroidSystem() {
        let result = true;
        if (this.platformService.is("android")) {
            result = false;
        }
        return result;
    }
    /**
     * Prende l'Area Attiva e la imposta nella proprietà
     * _forceIdAreaOnLogin
     * Quando il valore della proprietàè settato, a seguito del Login bisogna rimanere su questa area
     */
    setIdAreaForcedForLogin() {
        if (this.areaService.areaSelectedValue) {
            this._forceIdAreaOnLogin = this.areaService.areaSelectedValue.ID;
        }
        else {
            this._forceIdAreaOnLogin = '';
        }
    }
    /**
     * PRIMO STEP DI CONFIGURAZIONE
     *
     * //TODO: QUESTO METODO E' IMPORTANTE PERCHE' INSTRADA L'APPLICAZIONE
     * A SECONDA SE SIAMO SU CAPACITOR/CORDOVA AL CORRETTO APP ID
     * In caso di Capacitor/Cordova bisogna impostare il valore myAppId a mano
     * Negli altri casi, l'appid viene recuperato grazie all URL di chiamata
     *
     * Impostazioni iniziali
     * 1) _localConnection -> TRUE per modalità di debug e punta ai database in locale
     * 2) prefixDomain -> prefisso letto sull'url
     * 3) myAppId -> Application id da utilizzare (modo automatico o manuale)
     */
    settingStartStepOne() {
        let myUrl = '';
        let myAppId = '';
        let arUrl = [];
        let prefixDomain = '';
        //Recupero lo StartConfig, cosi da modificarlo al termine
        let myConfig = this._startConfig.getValue();
        //Modalità Web
        if (this.isOnWeb) {
            //Qui posso cambiare strategia per puntare localmente
            //this._localConnection = true;
            this._localConnection = false;
            if (this._localConnection) {
                //Modalità di Test metto un AppId di test
                myAppId = '00F15A91-5395-445C-B7F4-5BA594E55D2F';
            }
            else {
                //Recupero URL del browser
                myUrl = this.urlLocation.hostname;
                //Simulazione URL
                //myUrl = 'demo.gouego.com';
                //Sto aprendo in localhost ma voglio far puntare al server
                //ancora una volta metto un appId fisso
                if (myUrl == 'localhost') {
                    // myAppId = '00F15A91-5d395-445C-B7F4-5BA594E55D2F'; //Demo AppId
                    myAppId = 'CCBA34A5-24F5-4C22-8485-D891823E3434'; //OpenBeach AppId
                    // myAppId = 'FD291600-D873-49CF-A90C-525926CA2CDC'; //Key Element
                }
                else {
                    //Prendo URL e lo separo
                    arUrl = myUrl.split('.');
                    if (arUrl.length != 0) {
                        //Prendo il prefisso e sulla base di questo ricavo l'AppID
                        prefixDomain = arUrl[0];
                    }
                }
            }
        }
        else {
            //Non è mai in localconnection
            this._localConnection = false;
            //VALORIZZARE L'APP ID PER CAPACITOR
            //TODO: VALORIZZARE APPID PER INSTALLAZIONE CAPACITOR
            myAppId = 'CCBA34A5-24F5-4C22-8485-D891823E3434';
            //Sono su capacitor o cordova
            prefixDomain = '';
        }
        //Imposto URL di chiamata
        myConfig.setUrlLocation(this._localConnection);
        //Reimposto Observable
        this._startConfig.next(myConfig);
        //Il secondo step si preoccupa di ricavare l'app id se mancante, 
        //Impostare i dati nell'oggetti startConfiguration
        //ed iniziare la comunicazione server
        this.settingStartStepTwo(prefixDomain, myAppId);
    }
    /**
     * SECONDO STEP DI CONFIGURAZIONE
     * Il metodo tenta il recupero di un appId se non ne possiede già uno, e se prefixdomain vale qualcosa
     */
    settingStartStepTwo(prefixDomain, myAppId) {
        let docGruppo = new _models_gruppo_model__WEBPACK_IMPORTED_MODULE_31__["Gruppo"](true);
        let params = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_25__["RequestParams"]();
        if (myAppId.length == 0) {
            if (prefixDomain.length != 0) {
                //Chiedo al server 
                //Preparo il documento di filtro
                docGruppo.PREFIXDOMAIN = prefixDomain;
                //Effettuo la chiamata
                this.docStructureService.requestNew(docGruppo)
                    .then(collGruppo => {
                    //Vediamo appId ricevuto
                    let appIdReceived = '';
                    if (collGruppo) {
                        let myList = collGruppo;
                        let myGruppo;
                        //Se riesco recupero appID
                        if (myList && myList.length != 0) {
                            myGruppo = myList[0];
                            appIdReceived = myGruppo.APPID;
                        }
                    }
                    //Step 3 (Se il valore passato è '' siamo in errore)
                    this.settingStartStepThree(appIdReceived);
                })
                    .catch(error => {
                    console.log(error);
                    //Vado allo Step 3 in errore passando stringa vuota
                    this.settingStartStepThree('');
                });
            }
            else {
                //Non ho AppId e non ho trovato modo di leggere URL
                //Vado allo Step 3 in errore passando stringa vuota
                this.settingStartStepThree('');
            }
        }
        else {
            //Sono già in possesso dell'AppId
            this.settingStartStepThree(myAppId);
        }
    }
    /**
     * Fase finale di Start
     * Se il valore di myAppID = '', siamo in errore
     */
    settingStartStepThree(myAppId) {
        //Recupero lo StartConfig, cosi da modificarlo al termine
        let myConfig = this._startConfig.getValue();
        myConfig.appId = myAppId;
        //Reimposto Observable
        this._startConfig.next(myConfig);
        this.requestStartAuthorization();
    }
    /** Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione */
    requestStartAuthorization() {
        const doObject = 'AUTHORIZATION';
        const method = 'requestAuthorization';
        const actualStartConfig = this._startConfig.getValue();
        //Ricavo gli Header da impostare
        let myHeaders = actualStartConfig.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', method);
        //Aggiungo i parametri di chiamata
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('withimages', '1');
        myParams = myParams.append('withoptions', '1');
        //Url da chiamare
        let myUrl = actualStartConfig.urlBase + '/' + doObject;
        // Effettuo la chiamata per l'autorizzazione
        this.apiService
            .httpGet(myUrl, myHeaders, myParams)
            .subscribe(resultData => {
            let objAuth = resultData;
            if (objAuth.result == -1 && objAuth.authcode && objAuth.authcode.length != 0) {
                // Sistemo l'oggetto di configurazione 
                // ed emetto un evento di Cambio
                this.onAuthorizationGrant(objAuth);
            }
            else {
                console.log('Authorization failed');
            }
        }, error => {
            console.log('Comunication Error');
        });
    }
    //Autorizzazione ricevuta
    onAuthorizationGrant(objAuth) {
        let elStartConfig = this._startConfig.getValue();
        //Scrivo in console
        _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Autorizzazione ricevuta');
        //Sistemazione del Gruppo nell'oggetto di configurazione
        elStartConfig.setGruppoAuthorization(objAuth.GRUPPOSPORTIVO);
        //Sistemazione dell'authorization code da usare
        elStartConfig.authorizationAppCode = objAuth.authcode;
        //Emetto l'evento di cambio
        this._startConfig.next(elStartConfig);
        //Passo a richiedere le Aree
        this.requestAree();
        // Mi iscrivo alle modifiche dell'Area Selezionata
        this.onChangeAreaSelezionata();
        //Operazioni ulteriori a seguito dell'autorizzazione
        this.onAfterAuthorization();
    }
    /**
     * Alcune operazioni a seguito dell'autorizzazioni
     */
    onAfterAuthorization() {
        //0- RECUPERO LE CHIUSURE DEL GRUPPO
        this.dataChiusuraService.request()
            .then((listChiusure) => {
        });
        // 1- CHIEDO ELENCO SPORT, LIVELLI, CATEGORIEETA che mi servono sempre
        let elStartConfig = this._startConfig.getValue();
        this.sportService
            .request(elStartConfig, false)
            .catch(error => {
            console.log(error);
        });
        this.livelloService
            .request(elStartConfig)
            .catch(error => {
            console.log(error);
        });
        this.categoriaEtaService
            .request(elStartConfig)
            .catch(error => {
            console.log(error);
        });
        // 2 - TENTO L'ACCESSO AUTOMATICO
        this.loadStorageUtente();
    }
    //#region AREE
    /**
     * Area Selezionata, in versione Observable
     */
    get areaSelected() {
        return this.areaService.areaSelected;
    }
    /** Area Selezionata non Observable */
    get areaSelectedValue() {
        return this.areaService.areaSelectedValue;
    }
    /**
     * Elenco delle Aree
     */
    get listAree() {
        return this.areaService.listAree;
    }
    /**
     * Effettua la connessione al server per la richiesta delle Aree
     * e seleziona la prima area disponibile
     */
    requestAree() {
        const actualStartConfig = this._startConfig.getValue();
        return this.areaService.request(actualStartConfig);
    }
    /**
     * Effettua la selezione di una Area
     * l'oggetto Observable areaSelected verrà emesso con un nuovo valore
     * @param idArea IDArea da selezionare
     */
    selectAreaByID(idArea) {
        this.areaService.selectAreaByID(idArea);
    }
    /**
     * Metodo per sottoscriversi al cambiamento dell'area selezionata
     */
    onChangeAreaSelezionata() {
        this.areaService.areaSelected
            .subscribe(newAreaSelected => {
            //Cambiando Area selezionata
            //Devo necessariamente recuperare le Location
            //Se il documento è in stato inserted non è ancora arrivato dal server
            if (!newAreaSelected.inserted) {
                //Richiedo al server le Location
                this.requestLocation(newAreaSelected.ID);
                //Chiedo la situazione dell' AppReady
                let actualAppReady = this._appReady.getValue();
                if (!actualAppReady) {
                    //Applicazione non ancora pronta
                    //Mi sottoscrivo per capire quando posso partire
                    //appena sono arrivate le location
                    this.listenLocation = this.locationService.listLocation
                        .subscribe(data => {
                        if (data.length !== 0) {
                            //App entra in stato pronto
                            this._appReady.next(true);
                            _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Avvio AppReady');
                            //Dopo che l'app è partita in questo contento non 
                            //mi serve piu sapere lo state Location
                            this.listenLocation.unsubscribe();
                        }
                    });
                }
            }
        });
    }
    //#endregion
    //#region LOCATIONS
    get listLocation() {
        return this.locationService.listLocation;
    }
    /**
     * Ritorna la location attiva
     */
    get activeLocation() {
        return this.locationService.activeLocation;
    }
    /**
     * Richiesta al server di tutte le location dell'area
     * @param idArea Area selezionata
     */
    requestLocation(idArea) {
        const actualStartConfig = this._startConfig.getValue();
        return this.locationService.requestByIdArea(actualStartConfig, idArea);
    }
    newRequestLocation(idArea) {
        return this.locationService.newRequestByIdArea(idArea);
    }
    /** Effettua la richiesta al server di una Location precisa
     * @param idLocation Location scelta
     *
     */
    requestLocationByID(idLocation, _numLivelli) {
        const actualStartConfig = this._startConfig.getValue();
        return this.locationService.requestLocationByID(actualStartConfig, idLocation, _numLivelli);
    }
    /**
     * Cerca nel servizio la Location desiderata
     * NON OBSERVABLE
     * @param idLocation IDLocation cercata
     */
    findLocationByID(idLocation) {
        return this.locationService.findLocationByID(idLocation);
    }
    /**
     *
     * @param selectedLocation Location richiesta
     */
    requestLocationCampiSport(selectedLocation) {
        const listSport = this.sportService.actualListSport;
        const actualStartConfig = this._startConfig.getValue();
        //Inietto nel servizio la decodifica della Lista Sport
        this.locationService.decodeListSport = listSport;
        return this.locationService
            .syncInfoCampi(actualStartConfig, selectedLocation);
    }
    /**
     * Ritorna il template Week con tutti i giorni della settimana e gli SlotTime da applicare
     * in una prenotazione
     * (Schema di Default che andrà successivamente attualizzato con le info di occupazione e
     * chiusura specifica per festività etc)
     * @param docLocation Location richiesta
     */
    getTemplateSlotWeek(docLocation) {
        return this.locationService.getTemplateSlotWeek(docLocation);
    }
    //#endregion
    //#region SPORT SERVICE
    /**
     * Richiede in modalità Observable l'elenco degli sport
     */
    get listSport() {
        return this.sportService.listSport;
    }
    /**
     * Lista degli sport in modalità non observable
     */
    get actualListSport() {
        return this.sportService.actualListSport;
    }
    /**
     * Dato l'id di uno sport, ritorna l'icona
     * @param idSport l'id dello sport
     */
    getSportIcon(idSport) {
        return this.sportService.getIconaSport(idSport);
    }
    /**
     * Richiedo al servizio gli Sport
     * @param withLivelli Scaricamento con Livelli
     */
    requestSport(withLivelli) {
        const actualStartConfig = this._startConfig.getValue();
        this.sportService
            .request(actualStartConfig, withLivelli);
    }
    /**
     * Proprietà per gli Sport di una Location
     */
    get listLocationSport() {
        return this.sportService.listLocationSport;
    }
    /**
     * Richiede al server i dati degli Sport in una location
     * @param config Dati configurazione
     * @param idLocation idLocation selezionata
     */
    requestLocationSport(idLocation) {
        const actualStartConfig = this._startConfig.getValue();
        //Effettuo la chiamata
        return this.sportService.requestLocationSport(actualStartConfig, idLocation);
    }
    //#endregion
    //#region LIVELLI
    get listLivelli() {
        return this.livelloService.listLivelli;
    }
    /**
     * Richiedo al servizio i Livelli
     */
    requestLivelli() {
        const actualStartConfig = this._startConfig.getValue();
        return this.livelloService
            .request(actualStartConfig);
    }
    /**
     * Richiede al server l'elenco dei Livelli per lo sport
     * @param idSport Sport da analizzare
     */
    requestLivelliForSport(idSport) {
        return this.livelloService.requestLivelliForSport(idSport);
    }
    //#endregion
    //#region CATEGORIAETA
    get listCategoriaEta() {
        return this.categoriaEtaService.listCategorieEta;
    }
    /**
     * Richiede al server le Categorie Eta
     */
    requestCategorieEta() {
        const actualStartConfig = this._startConfig.getValue();
        this.categoriaEtaService
            .request(actualStartConfig);
    }
    isValidCategorieEta(idCategoria, eta) {
        return this.categoriaEtaService.isValid(idCategoria, eta);
    }
    //#endregion
    //#region CORSO
    /**
     * Elenco Corsi
     */
    get listCorsi() {
        return this.corsoService.listCorsi;
    }
    /**
     * Elenco Corsi richiesti da un trainer
     */
    get listCorsiTrainer() {
        return this.corsoService.listCorsiTrainer;
    }
    /**
     * Ritorno il filtro corsi impostato nel servizio
     */
    get filterCorsi() {
        return this.corsoService.filterCorsi;
    }
    /**
     * Imposta i filtri corsi nel servizio
     */
    set filterCorsi(value) {
        this.corsoService.filterCorsi = value;
    }
    /**
     * Inizializza e ritorna nuovi Filtri con l'impostazione della location
     * @param idLocation ID Location
     */
    newFilterCorsi(idLocation) {
        return this.corsoService.newFilterCorsi(idLocation);
    }
    requestCorsoById(idCorso) {
        const actualStartConfig = this._startConfig.getValue();
        return this.corsoService.requestById(actualStartConfig, idCorso);
    }
    newRequestCorsoById(idcorso) {
        return this.corsoService.newRequestById(idcorso);
    }
    /**
     * Effettua la chiamata al server per ottenere i corsi riferiti al trainer
     * Risultato nell'Observable listCorsiTrainer
     *
     * @param idTrainer Trainer
     * @param timeState Corsi richiesti
     */
    requestTimeTrainerCourse(idTrainer, timeState) {
        this.corsoService.requestTimeTrainerCourse(idTrainer, timeState);
    }
    //#region coursescheduler
    /**
     * Ritorna il calendario di un corso
     */
    get calendarioCorso() {
        return this.corsoCalendarioService.calendarioCorso;
    }
    /**
     * Richiesto il calendario del corso
     * @param idCorso Corso richiesto
     */
    requestCalendarioCorso(idCorso) {
        const actualStartConfig = this._startConfig.getValue();
        return this.corsoCalendarioService.requestCalendario(actualStartConfig, idCorso);
    }
    requestImpegniTrainer(idRef, dataInizio, dataFine) {
        return this.corsoCalendarioService.requestImpegniTrainer(idRef, dataInizio, dataFine);
    }
    /**
     * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
     * @param idPianificazione l'id della pianificazione da recuperare
    */
    getPianificazioneTrainerById(idPianificazione) {
        return this.corsoCalendarioService.getPianificazioneTrainerById(idPianificazione);
    }
    insertPresenzeIntoPianificazione(docPianificazione) {
        return this.corsoCalendarioService.insertPresenze(docPianificazione);
    }
    requestUpdatePresenze(docPianificazione) {
        return this.corsoCalendarioService.updatePresenze(docPianificazione);
    }
    //#endregion
    ////#region corsi
    //Ritorna il corso selezionato nel servizio
    get selectedCorso() {
        return this.corsoService.selectedCorso;
    }
    //#endregion
    //#region ISCRIZIONE CORSO
    /**
    * Contatta il server per conoscere se sono ancora
    * disponibili posti per l'iscrizione a un corso
    *
    * Ritorna un oggetto di tipo =>  PostResponse
    * Result = TRUE (Posti diponibili) / FALSE (Posti Esauriti)
    *
     * @param idCorso
     * @returns Promise (Resolve)
     */
    getPostiDisponibiliCorso(idCorso) {
        return this.iscrizioneCorsoService.getPostiDisponibiliCorso(idCorso);
    }
    /**
     * Chiama il server per il salvataggio di una nuova iscrizione
     * @param docIscrizione Documento Iscrizione da creare
     */
    requestSaveIscrizione(docIscrizione) {
        return this.iscrizioneCorsoService.requestSaveIscrizione(docIscrizione);
    }
    //#endregion
    //#region CORSO VALUTAZIONE
    /**
     * Chiede al server una Scheda di Valutazione finale Corso
     *
     * @param idCorso idCorso richiesto
     * @returns resolve con la Scheda di Valutazione
     * @return  reject Messaggio Errore
     */
    requestSchedaValutazioneCorso(idCorso) {
        return this.corsoValutazioneService.requestSchedaValutazioneCorso(idCorso);
    }
    /**
     * Richiede al server il salvataggio della scheda di valutazione
     * @param docScheda Scheda in salvataggio
     */
    requestForSaveSchedaValutazioneCorso(docScheda) {
        return this.corsoValutazioneService.requestForSave(docScheda);
    }
    //#endregion
    //#region UTENTE
    get utente() {
        return this.utenteService.utente;
    }
    // Espone se l'utente è loggato 
    get utenteLogged() {
        return this.utenteService.utenteLoggato;
    }
    get actualUtenteLogged() {
        return this.utenteService.actualLoggato;
    }
    /**
     * recupera l'utente loggato (non Obs)
     */
    get actualUtente() {
        return this.utenteService.actualUtente;
    }
    /**
     * Memorizza nello storage username e password
     * @param username Username da memorizzare
     * @param pwd Password da memorizzare
     */
    saveStorageUtente(username, passwd) {
        let account = new _models_utente_model__WEBPACK_IMPORTED_MODULE_17__["storageUtente"](username, passwd);
        //salvo le informazioni criptate
        let strAccount = account.saveJSON(true);
        this.storageAccess.set('gouegoser', strAccount);
        _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Saved credential');
    }
    updateClientUtenteData() {
        return this.utenteService.updateClientData();
    }
    /**
     * Carica dallo Storage le credenziali utente memorizzate
     * Se il recupero è corretto tenta anche il login
     */
    loadStorageUtente() {
        _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Trying autologin');
        //Chiedo di caricare l'impostazione
        this.storageAccess
            .get('gouegoser')
            .then((val) => {
            //Credenziali memorizzate
            if (val) {
                let savedUser = new _models_utente_model__WEBPACK_IMPORTED_MODULE_17__["storageUtente"]('', '');
                savedUser.loadJSON(val);
                if (savedUser.loginUser && savedUser.pwdUser) {
                    //Devo tentare di accedere
                    //Faccio la richiesta al server
                    this.userLogin(savedUser.loginUser, savedUser.pwdUser)
                        .then(() => {
                        _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('AutoLogin passed: ');
                    })
                        .catch(error => {
                        _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('AutoLogin failed: ' + error);
                    });
                }
            }
        })
            .catch(error => {
            //Failed load Storage
        });
    }
    /**
     * Disconnessione utente richiesta
     */
    userLogoff() {
        let myStartConfig = this._startConfig.getValue();
        // Avviso del logoff
        this.utenteService.logoff();
        //Tolgo il codice di autorizzazione utente
        myStartConfig.authorizationUserCode = '';
        //Riemetto l'Observable
        this._startConfig.next(myStartConfig);
        //Tolgo le credenziali memorizzate dallo storage
        this.saveStorageUtente('', '');
    }
    /**
     * Effettua la richiesta
     * @param username Username Utente
     * @param password Password Utente
     */
    userLogin(username, password) {
        const actualStartConfig = this._startConfig.getValue();
        //Mi metto in ascolto per i cambi di Area Favorite a seguito della login
        this.onChangeAreaFavListener();
        //Chiamo il servizio Utente passando username, password, la configurazione e
        //l'eventuale area da Impostare come attiva dopo il login
        return this.utenteService
            .login(username, password, this._startConfig, this._forceIdAreaOnLogin);
    }
    /**
     * Ascolta il cambio dell'idAreaChange
     */
    onChangeAreaFavListener() {
        this.utenteService.idAreaFAV.subscribe(value => {
            //Se arriva un'area favorita, procedo con il cambio
            if (value) {
                //Cambio dell'area
                this.selectAreaByID(value);
            }
        });
    }
    /**
     * Richiedere al server l'operazione di Update Utente
     * @param docUtenteUpdate Documento Utente con le modifiche da inviare
     */
    updateUtente(docUtenteUpdate) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.requestUpdate(actualStartConfig, docUtenteUpdate);
    }
    /**
     * Effettua la richiesta al server per il cambio della password
     * Ritorna un Observable
     * con {RESULT: 0/1, MESSAGE:''}
     * @param oldPsw Password Attuale
     * @param newPsw Nuova Password
     */
    requestChangePassword(oldPsw, newPsw) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.requestChangePassword(actualStartConfig, oldPsw, newPsw);
    }
    /**
     * Foto utente presente nel servizio utente
     */
    get userPicture() {
        return this.utenteService.userPicture;
    }
    /**
     * Apre la fotocamera per la foto utente
     */
    takePictureUtente() {
        let photoType = _photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoType"].account;
        let idPhoto = '';
        return new Promise((resolve, reject) => {
            if (this.utenteLogged) {
                //Identificativo della foto
                this.utente.subscribe(elutente => {
                    idPhoto = elutente.ID;
                    //Apro la fotocamera per il caricamento
                    this.photoService.takePicure(photoType, idPhoto)
                        .then(dataUrl => {
                        //Foto memorizzata, la imposto nel servizio utente
                        this.utenteService.setUserPicture(dataUrl);
                        //Risolvo la Promise
                        resolve(dataUrl);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('No user logged');
            }
        });
    }
    /**
     *
     * @returns DataURL con la foto profilo
     */
    loadPictureUtente() {
        let photoType = _photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoType"].account;
        let idPhoto = '';
        return new Promise((resolve) => {
            if (this.utenteLogged) {
                this.utente.subscribe(elutente => {
                    //Identificativo della foto
                    idPhoto = elutente.ID;
                    //Apro la fotocamera per il caricamento
                    this.photoService.storageLoad(photoType, idPhoto)
                        .then(dataUrl => {
                        //Foto memorizzata, la imposto nel servizio utente
                        this.utenteService.setUserPicture(dataUrl);
                        resolve(dataUrl);
                    })
                        .catch(error => {
                        resolve('');
                    });
                }, error => {
                    resolve('');
                });
            }
            else {
                resolve('');
            }
        });
    }
    //#endregion
    //#region REGISTRAZIONE ACCOUNT
    /**
     * Chiama il server e chiede l'invio dei PINCODE di registrazione
     * @param docRequestCode Dati per la richiesta da inviare al server
     */
    registrationSendCodici(docRequestCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.registrationSendCodici(actualStartConfig, docRequestCode);
    }
    /**
     * Chiama il server inviando i codici inseriti dall'utente per chiederne il controllo
     * @param docVerifyCode Dati per la verifica dei codici inseriti
     */
    registrationVerifyCodici(docVerifyCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.registrationVerifyCodici(actualStartConfig, docVerifyCode);
    }
    /**
     * Invia al server la richiesta per la registrazione di un nuovo account
     * @param docUtente Nuovo Utente da registrare
     * @param docRequestCode Documento richiesta codici presentato in precedenza
     */
    registrationFinalize(docUtente, docRequestCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.registrationFinalize(actualStartConfig, docUtente, docRequestCode);
    }
    //#endregion
    //#region PSW RECOVERY
    recoverySendCodici(docRequestCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.recoverySendCodici(actualStartConfig, docRequestCode);
    }
    recoveryVerifyCodici(docVerifyCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.recoveryVerifyCodici(actualStartConfig, docVerifyCode);
    }
    /**
     * Invia al server la richiesta per la registrazione di un nuovo account
     * @param docUtente Nuovo Utente da registrare
     * @param docRequestCode Documento richiesta codici presentato in precedenza
     */
    recoveryFinalize(docUtente, docRequestCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.recoveryFinalize(actualStartConfig, docUtente, docRequestCode);
    }
    //#endregion
    //#region VALIDATION CONTATTI
    validationSendCodici(docRequestCode, docUtente) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.validationSendCodici(actualStartConfig, docUtente, docRequestCode);
    }
    validationVerifyCodici(docVerifyCode) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteService.validationVerifyCodici(actualStartConfig, docVerifyCode);
    }
    //#region PRENOTAZIONE
    /**
     * Prenotazione Attiva
     */
    get activePrenotazione() {
        return this.prenotazioniService.activePrenotazione;
    }
    //Passo al servizio una prenotazione e la imposto nel servizio
    setActivePrenotazione(value) {
        this.prenotazioniService.setActivePrenotazione(value);
    }
    /**
     * Chiede al servizio di inizializzare una nuova Prenotazione
     * @param idArea IDArea da impostare
     */
    initActivePrenotazione(idArea) {
        this.prenotazioniService.initActivePrenotazione(idArea);
    }
    /**
     * Chiede al servizio di impostare la pianificazione
     * @param docPianificazione Pianificazione da impostare
     */
    setPianificazioneSingola(docPianificazione) {
        this.prenotazioniService.setPianificazioneSingola(docPianificazione);
    }
    /**
     * Chiede al servizio di impostare l'utente
     * @param idUtente Utente da applicare
     */
    setIDUtenteActivePrenotazione(docUtente) {
        this.prenotazioniService.setIDUtenteActivePrenotazione(docUtente);
    }
    /**
     * Richiede al servizio il calcolo
     * della Prenotazione
     *
     */
    requestImportoPrenotazione() {
        const actualStartConfig = this._startConfig.getValue();
        return this.prenotazioniService.requestImporto(actualStartConfig);
    }
    /**
     * Ritorna Observable da analizzare con subscribe relativo alla richiesta di salvataggio
     * della prenotazione
     */
    requestSavePrenotazione() {
        const actualStartConfig = this._startConfig.getValue();
        return this.prenotazioniService.requestSave(actualStartConfig);
    }
    //Mantiene nel servizio il campo per una rilettura futura
    setSelectedCampoPrenotazione(value) {
        this.prenotazioniService.selectedCampo = value;
    }
    //Recupera nel servizio Prenotazione il campo salvato in precedenza
    getSelectedCampoPrenotazione() {
        return this.prenotazioniService.selectedCampo;
    }
    /**
     * Richiede al server una Prenotazione
     * @param idPrenotazione idPrenotazione Padre
     */
    requestPrenotazioneById(idPrenotazione, numLivelli) {
        const actualStartConfig = this._startConfig.getValue();
        return this.prenotazioniService.requestById(actualStartConfig, idPrenotazione, numLivelli);
    }
    requestDeletePianificazione(idPianificazione) {
        const actualStartConfig = this._startConfig.getValue();
        return this.prenotazioniService.requestDelete(idPianificazione, actualStartConfig);
    }
    //#endregion
    //#region UtentePrenotazione
    /**
     * Richiede al server elenco di prenotazioni di un utente
     * @param idUtente IDUtente Prenotazione
     */
    requestUtentePrenotazioni(idUtente) {
        const actualStartConfig = this._startConfig.getValue();
        //Richiedo i dati al servizio
        return this.utentePrenotazioneService.request(actualStartConfig, idUtente);
    }
    /**
     * Lista Prenotazioni di tipo Observable
     */
    get listUtentePrenotazioni() {
        return this.utentePrenotazioneService.listUtentePrenotazione;
    }
    //#endregion
    //#region UtenteIscrizione
    /**
     * Richiede al server elenco di Iscrizioni ai corsi di un utente
     * @param idUtente IDUtente
     */
    requestUtenteIscrizioni(idUtente) {
        const actualStartConfig = this._startConfig.getValue();
        //Richiedo i dati al servizio
        return this.utenteIscrizioneService.request(actualStartConfig, idUtente);
    }
    /**
     * Lista Iscrizioni Corsi di tipo Observable
     */
    get listUtenteIscrizioni() {
        return this.utenteIscrizioneService.listUtenteIscrizione;
    }
    requestIscrizioneById(idIscrizione) {
        const actualStartConfig = this._startConfig.getValue();
        return this.utenteIscrizioneService.requestById(actualStartConfig, idIscrizione);
    }
    //#endregion
    //#region NEWS EVENTI
    get listNews() {
        return this.newsEventiService.listNews;
    }
    /**
     * Recupera le news relative ad un'area
     * @param guidArea il guid dell'area
     * @param nElementi il numero di elementi richiesti
     */
    requestNews(guidArea, nElementi) {
        const actualStartConfig = this._startConfig.getValue();
        return this.newsEventiService.request(actualStartConfig, guidArea, nElementi);
    }
    /** Effettua la richiesta al servizio di una news
     * @param idNews News scelta
     *
     */
    requestNewsByID(idNews) {
        return this.newsEventiService.getNewsById(idNews);
    }
    //#endregion
    //#region OCCUPAZIONE CAMPI
    get docOccupazione() {
        return this.slotOccupazioneService.docOccupazione;
    }
    /**
     * Il servizio prende il template dello Slot, richiede al server i dati di occupazione,
     * corregge il templateSlotDay e lo ripropone come Observable
     * @param templateSlotDay Template della Giornata
     * @param idLocation Location
     * @param idCampo Campo
     * @param dataGiorno Giorno richiesto
     */
    requestSlotOccupazioni(templateSlotDay, docLocation, docCampo, dataGiorno) {
        const actualStartConfig = this._startConfig.getValue();
        //Faccio la richiesta dei dati al servizio
        return this.slotOccupazioneService.request(actualStartConfig, templateSlotDay, docLocation, docCampo, dataGiorno);
    }
    //#endregion
    //#region PAGAMENTI
    //#endregion
    //#region CODICE FISCALE
    /**
     * Promise per il controllo e la decodifica del codice fiscale
     * Puo' essere usata solo per controllare il Codice Controllo con il resto, oppure per decodificare tutti i campi
     * @param codiceFiscale Codice Fiscale da anallizare
     * @param decode
     */
    checkCodiceFiscale(codiceFiscale, decode, userMsg) {
        return this.codFiscService.checkCodiceFiscale(codiceFiscale, decode, userMsg);
    }
    //#endregion
    /**
     * dato un tipo di immagine, la funzione restituisce la stringa in B64
     * @param tipo il tipo di immagine richiesta
     */
    requestBase64Image(tipo) {
        return new Promise((resolve, reject) => {
            const doObject = 'GRUPPOSPORTIVO';
            let config = this._startConfig.getValue();
            let myUrl = config.urlBase + '/' + doObject;
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'getBase64PrivateImage');
            // =new HttpHeaders({
            //   'Content-Type': 'text/plain',
            //   'appid': config.appId,
            //   'X-HTTP-Method-Override':'getBase64PrivateImage'
            // });
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Tipo', tipo + '');
            this.apiService.httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.image;
            }))
                .subscribe(base64 => {
                resolve(base64);
            }, error => {
                reject(error);
            });
        });
        //#region image
    }
    //#endregion
    //#region OCCUPAZIONICAMPI
    requestOccupazioni(idArea, idLocation, top, params, fromTime) {
        return this.occupazioniService.request(idArea, idLocation, params, top, fromTime);
    }
    requestOccupazioniByFilter(filter, params) {
        return this.occupazioniService.requestByFilter(filter, params);
    }
    requestOccupazioneById(idOccupazione, getRelReservation = false) {
        return this.occupazioniService.requestById(idOccupazione, getRelReservation);
    }
    //#endregion
    ////#region DOCUMENTO
    requestDocumento(urlDocumento) {
        return this.documentoService.request(this.actualStartConfig, urlDocumento);
    }
    ////#endregion
    //#region INVOICES
    /**
     * Richiede l'elenco delle ricevute per l'utente passato
     * @param utente il documento utente
     */
    requestInvoices(utente, anno) {
        return this.invoicesService.requestInvoices(utente, anno);
    }
    /**
      * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
      * @param documento elemento MasterDocumento che si vuole scaricare
      */
    downloadInvoice(documento) {
        return this.invoicesService.downloadInvoice(documento);
    }
    /**
   * la funzione, presa una stringa b64 e il content-type, restituisce il blob
   * @param b64Data stringa B64 SENZA tipo di file
   * @param contentType stringa tipo file (default: application/pdf)
   */
    base64toBlob(b64Data, contentType = 'application/pdf') {
        return this.invoicesService.base64toBlob(b64Data, contentType);
    }
    //#endregion
    //#region posizione
    /**
     * La funzione restituisce una promise con la posizione attuale
     */
    getCurrentPosition() {
        return this.posizioneService.getCurrentPosition();
    }
    /**
     * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
     * @param listAree la lista delle aree tra cui cercare
     */
    getNearestArea(listAree) {
        return this.posizioneService.getNearestArea(listAree);
    }
    //#endregion
    //#region DATECHIUSURE
    isFestivita(data, idArea, idLocation, idCampo) {
        return this.dataChiusuraService.idFestivita(idArea, idLocation, idCampo, data);
    }
    //#endregion
    //#region CORSOALLEGATO
    requestListAllegatiByIdCorso(idCorso) {
        return this.corsoAllegatoService.requestByIdCorso(idCorso);
    }
}
StartService.ɵfac = function StartService_Factory(t) { return new (t || StartService)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_sport_service__WEBPACK_IMPORTED_MODULE_5__["SportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_categoriaeta_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utente_service__WEBPACK_IMPORTED_MODULE_8__["UtenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_livello_service__WEBPACK_IMPORTED_MODULE_9__["LivelloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_area_service__WEBPACK_IMPORTED_MODULE_10__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_coursescheduler_service__WEBPACK_IMPORTED_MODULE_12__["CourseschedulerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_prenotazione_service__WEBPACK_IMPORTED_MODULE_13__["PrenotazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_newseventi_service__WEBPACK_IMPORTED_MODULE_14__["NewseventiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_slotoccupazione_service__WEBPACK_IMPORTED_MODULE_15__["SlotoccupazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utenteprenotazione_service__WEBPACK_IMPORTED_MODULE_19__["UtenteprenotazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utenteiscrizione_service__WEBPACK_IMPORTED_MODULE_20__["UtenteiscrizioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_codicefiscale_service__WEBPACK_IMPORTED_MODULE_22__["CodicefiscaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_occupazioni_service__WEBPACK_IMPORTED_MODULE_23__["OccupazioniService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_24__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_documento_service__WEBPACK_IMPORTED_MODULE_26__["DocumentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_invoices_service__WEBPACK_IMPORTED_MODULE_27__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_posizione_service__WEBPACK_IMPORTED_MODULE_28__["PosizioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_data_chiusura_service__WEBPACK_IMPORTED_MODULE_29__["DataChiusuraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_30__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_corsoallegato_service__WEBPACK_IMPORTED_MODULE_32__["CorsoallegatoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_iscrizionecorso_service__WEBPACK_IMPORTED_MODULE_33__["IscrizionecorsoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_corso_valutazione_service__WEBPACK_IMPORTED_MODULE_34__["CorsoValutazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoService"])); };
StartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjectable"]({ token: StartService, factory: StartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ErEm":
/*!***********************************************!*\
  !*** ./src/app/library/models/cache.model.ts ***!
  \***********************************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony import */ var _cachelistelement_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachelistelement.model */ "z5yz");

class Cache {
    constructor() {
        this.list = [];
    }
    /**
     * Cerca nell'Array list se è presente un oggetto della stessa className
     * @param className Nome della classe cercato
     */
    findByClassName(className) {
        return this.list.find(el => {
            return el.className == className;
        });
    }
    /**
     * Aggiunge alla cache un documento
     * @param doc Documento da aggiungere alla cache
     */
    addTo(doc) {
        //Step 1: Cercare nella lista il CacheListElement corretto con il nome classe 
        let objDescriptor;
        let elCacheList;
        let updateIfExist = false;
        if (doc) {
            objDescriptor = doc.getDescriptor();
            if (objDescriptor) {
                //Mi son fatto restituire l'elemento cache
                elCacheList = this.findByClassName(objDescriptor.className);
                //Non ho nessuna cache lista dell'oggetto specificato
                if (!elCacheList) {
                    //Non ce l'abbiamo ancora in cache
                    elCacheList = new _cachelistelement_model__WEBPACK_IMPORTED_MODULE_0__["CacheListElement"](objDescriptor.className);
                    this.list.push(elCacheList);
                    updateIfExist = false;
                    elCacheList.addElement(doc, updateIfExist);
                }
                else {
                    //L'oggetto specificato possiede gia una lista di cache
                    updateIfExist = true;
                    elCacheList.addElement(doc, updateIfExist);
                }
            }
        }
    }
}


/***/ }),

/***/ "F/re":
/*!***************************************!*\
  !*** ./src/app/models/corso.model.ts ***!
  \***************************************/
/*! exports provided: Corso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corso", function() { return Corso; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _settimana_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settimana.model */ "w48H");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _corsoprogramma_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corsoprogramma.model */ "t3EU");
/* harmony import */ var _pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pianificazionecorso.model */ "b5Gy");






class Corso extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this._DESCRCATEGORIEETA = '';
            this._DESCRLIVELLOENTRATA = '';
            this._DESCRSPORT = '';
        }
        this.CORSOPROGRAMMA = [];
        this.PIANIFICAZIONECORSO = [];
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["Descriptor"]();
        let arString = ['DENOMINAZIONE',
            'SIGLACALENDARIO',
            'IDLIVELLOENTRATA',
            '_DESCRLIVELLOENTRATA',
            'IDLIVELLOFINALE',
            'IDSPORT',
            '_DESCRSPORT',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'GIORNIPREVISTI',
            'IDCATEGORIEETA',
            '_DESCRCATEGORIEETA'
        ];
        let arNumber = ['TIPO',
            'NUMEROLEZIONI',
            'NUMPARTECIPANTI',
            'MAXPARTECIPANTI',
            'STATO',
            'STATODINAMICO',
            'TARGETSESSO',
            'DURATA'
        ];
        let arDecimal = ['ORELEZIONE', 'PREZZOLORDO'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO', 'DATAFINE', 'ISCRIZIONEDAL', 'ISCRIZIONEAL'];
        let arDateTime = [];
        let arTime = ['ORAINIZIO'];
        objDescriptor.className = 'Corso';
        objDescriptor.classWebApiName = 'CORSO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].number);
        objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].time);
        objDescriptor.addCollection('CORSOPROGRAMMA', 'CorsoProgramma', 'IDCORSO');
        objDescriptor.addCollection('PIANIFICAZIONECORSO', 'PianificazioneCorso', 'IDCORSO');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        objDescriptor.setRelation('IDLIVELLOENTRATA', 'Livello');
        objDescriptor.setRelation('IDLIVELLOFINALE', 'Livello');
        objDescriptor.setRelation('IDCATEGORIEETA', 'CategoriaEta');
        return objDescriptor;
    }
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        //Sistemo la Settimana in italiano
        this.setSettimana(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Language"].italiano);
        this.setCollection(data);
        this.setOriginal();
    }
    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data) {
        this.CORSOPROGRAMMA = [];
        this.PIANIFICAZIONECORSO = [];
        if (data.CORSOPROGRAMMA) {
            this.setCollectionCorsoProgramma(data.CORSOPROGRAMMA);
        }
        if (data.PIANIFICAZIONECORSO) {
            this.setCollectionPianificazioneCorso(data.PIANIFICAZIONECORSO);
        }
    }
    /**
     * Imposta la collection CorsoProgramma
     * @param arPROGRAMMA JSON Ricevuti
     */
    setCollectionCorsoProgramma(arPROGRAMMA) {
        this.CORSOPROGRAMMA = [];
        if (arPROGRAMMA) {
            arPROGRAMMA.forEach(element => {
                // Ricerco se esiste già
                let newProgramma = this.getCorsoProgrammaByID(element.ID);
                //Non esiste lo creo nuovo
                if (!newProgramma) {
                    newProgramma = new _corsoprogramma_model__WEBPACK_IMPORTED_MODULE_4__["CorsoProgramma"]();
                    newProgramma.setJSONProperty(element);
                    this.CORSOPROGRAMMA.push(newProgramma);
                }
                else {
                    //Reimposto i valori
                    newProgramma.setJSONProperty(element);
                }
            });
        }
    }
    /**
     * Ritorna l'elemento di Corso Programma che corrisponde con ID
     */
    getCorsoProgrammaByID(idCorsoProgramma) {
        // Ricerco se esiste già
        let newProgramma = this.CORSOPROGRAMMA.find(elProgramma => {
            return elProgramma.ID == idCorsoProgramma;
        });
        return newProgramma;
    }
    /**
     * Imposta la collection Pianificazioni Corso
     * @param arPianificazioni JSON Ricevuti
     */
    setCollectionPianificazioneCorso(arPianificazioni) {
        this.PIANIFICAZIONECORSO = [];
        if (arPianificazioni) {
            arPianificazioni.forEach(element => {
                // Ricerco se esiste già
                let newPianificazione = this.getPianificazioneCorsoByID(element.ID);
                //Non esiste lo creo nuovo
                if (!newPianificazione) {
                    newPianificazione = new _pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_5__["PianificazioneCorso"]();
                    newPianificazione.setJSONProperty(element);
                    this.PIANIFICAZIONECORSO.push(newPianificazione);
                }
                else {
                    //Reimposto i valori
                    newPianificazione.setJSONProperty(element);
                }
            });
        }
    }
    /**
     * Ritorna l'elemento di Pianificazione Corso che corrisponde con ID
     */
    getPianificazioneCorsoByID(idPianificazioneCorso) {
        // Ricerco se esiste già
        let findPianificazioneCorso = this.PIANIFICAZIONECORSO.find(elPianificazione => {
            return elPianificazione.ID == idPianificazioneCorso;
        });
        return findPianificazioneCorso;
    }
    /**
     * Ritorna un'altra Settimana in un'altra lingua
     * @param language Lingua
     */
    getTranslateSettimana(language) {
        let myWeek = _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].getArray(true, language);
        let arGiorni = this.GIORNIPREVISTI.split(';');
        //GIORNIPREVISTI contiene 1 Dom, 2 Lun, 3 Mart
        //Ciclo nei giorni
        arGiorni.forEach(charGiorno => {
            let index = parseInt(charGiorno.trim());
            //Vado indietro 
            index = index - 1;
            if (index >= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].domenica && index <= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].sabato) {
                _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].selectDayArray(index, myWeek);
            }
        });
        return myWeek;
    }
    /**
     * Crea un Array di tipo Settimana con le giornate previste per il corso
     * @param language Lingua
     */
    setSettimana(language) {
        //Chiedo un Array Settimana con inizio Domenica
        this._SETTIMANA = _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].getArray(true, language);
        let arGiorni = this.GIORNIPREVISTI.split(';');
        //In giorni previsti c'e' Dom 1, Lun 2 etc
        //Ciclo nei giorni
        arGiorni.forEach(charGiorno => {
            let index = parseInt(charGiorno.trim());
            //Porto a base 0 cosi' Domenica è 0 Lun 1 etc
            index = index - 1;
            if (index >= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].domenica && index <= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].sabato) {
                _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].selectDayArray(index, this._SETTIMANA);
            }
        });
    }
    /**
     * Partendo dall'Array _SETTIMANA crea un array solo per le Giornate selezionate
     */
    getArrayGiorniCorso() {
        let onlyDays = [];
        onlyDays = this._SETTIMANA.filter(element => {
            return element.selected == true;
        });
        return onlyDays;
    }
    /**
     * Serve per capire sulla card cosa scrivere e quale data mettere
     * next -> Inizia il DATAINIZIO
     * during -> Termina il DATAFINE
     * stop -> Concluso il DATAFINE
     */
    tempoCorso() {
        let adesso = new Date();
        let value = "";
        if (this.DATAINIZIO > adesso) {
            value = "next";
        }
        else if (this.DATAFINE > adesso) {
            value = "during";
        }
        else {
            value = "stop";
        }
        return value;
    }
    /**
     * Ritorna TRUE se Oggi è possibile iscriversi al corso
     */
    flagIscrizioniAperte() {
        let flag = false;
        if (this.STATODINAMICO == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["StatoCorso"].iscrizioniAperte) {
            flag = true;
        }
        return flag;
    }
    /**
     * Ritorna una icona a seconda del tipo Corso
     */
    getIcon() {
        let nameIcon = 'ribbon';
        switch (this.TIPO) {
            case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoCorso"].corso:
                nameIcon = 'ribbon';
                break;
            case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoCorso"].prova:
                nameIcon = 'trail-sign';
                break;
            default:
                nameIcon = 'ribbon';
                break;
        }
        return nameIcon;
    }
    /**
     * Controllando il valore del PREZZOLORDO indica se il Corso è Gratuito o a Pagamento
     */
    isAPagamento() {
        let flagPagamento;
        flagPagamento = false;
        if (this.PREZZOLORDO && this.PREZZOLORDO != 0) {
            flagPagamento = true;
        }
        return flagPagamento;
    }
    /**
     * Controlla se esiste un programma del corso
     * @returns TRUE se esiste testo come programma del corso
     */
    existProgrammaCorso() {
        let exist = false;
        if (this.CORSOPROGRAMMA) {
            if (this.CORSOPROGRAMMA.length != 0) {
                for (let index = 0; index < this.CORSOPROGRAMMA.length; index++) {
                    const element = this.CORSOPROGRAMMA[index];
                    if (element.TESTOHTML && element.TESTOHTML.length != 0) {
                        exist = true;
                        break;
                    }
                }
            }
        }
        return exist;
    }
    /**
     * Anche se ci sono piu record li combina con un <BR>
     * @returns Testo HTML Programma corso completo
     */
    getFullProgrammaHTML() {
        let txtReturn = '';
        if (this.CORSOPROGRAMMA) {
            if (this.CORSOPROGRAMMA.length != 0) {
                for (let index = 0; index < this.CORSOPROGRAMMA.length; index++) {
                    const element = this.CORSOPROGRAMMA[index];
                    if (element.TESTOHTML && element.TESTOHTML.length != 0) {
                        if (txtReturn.length != 0) {
                            txtReturn += '<BR>';
                        }
                        txtReturn += element.TESTOHTML;
                    }
                }
            }
        }
        return txtReturn;
    }
}


/***/ }),

/***/ "FAI+":
/*!************************************************************!*\
  !*** ./src/app/models/prenotazionepianificazione.model.ts ***!
  \************************************************************/
/*! exports provided: PrenotazionePianificazione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrenotazionePianificazione", function() { return PrenotazionePianificazione; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");



class PrenotazionePianificazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this.NUMPARTECIPANTI = 1;
            this._DESCRCAMPO = '';
            this._DESCRSPORT = '';
        }
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    setCollection(data) {
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDPRENOTAZIONE',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDSPORT',
            'IDCAMPO',
            'GUIDSERIE',
            'PROGRESSIVO'];
        let arNumber = ['ANNO', 'NUMPARTECIPANTI'];
        let arNumberDecimal = ['DURATAORE',
            'IMPONIBILE',
            'INCASSATO',
            'RESIDUO',
            'IMPOSTA',
            'TOTALE',
            'STATO'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
        let arTime = [];
        objDescriptor.className = 'PrenotazionePianificazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PRENOTAZIONEPIANIFICAZIONE';
        objDescriptor.describeField = 'DATAORAINIZIO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.setRelation('IDPRENOTAZIONE', 'Prenotazione');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
    static getReqForeignKeys() {
        let arRequest = [];
        let objForeign;
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDAREAOPERATIVA');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDSPORT');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDCAMPO');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDLOCATION');
        objForeign.addDescribeField('DENOMINAZIONE');
        objForeign.addDescribeField('INDIRIZZO');
        objForeign.addDescribeField('COMUNE');
        objForeign.addDescribeField('EMAIL');
        arRequest.push(objForeign);
        return arRequest;
    }
}


/***/ }),

/***/ "FYk8":
/*!**********************************************************!*\
  !*** ./src/app/library/services/docstructure.service.ts ***!
  \**********************************************************/
/*! exports provided: DocstructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocstructureService", function() { return DocstructureService; });
/* harmony import */ var _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/iddocument.model */ "5usX");
/* harmony import */ var _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/requestParams.model */ "R2Z1");
/* harmony import */ var _models_structure_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/structure.model */ "6Eaa");
/* harmony import */ var _services_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apicall.service */ "+Dr4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_cache_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/cache.model */ "ErEm");
/* harmony import */ var src_app_models_log_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/log.model */ "Ag5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











class DocstructureService {
    constructor(apiService) {
        this.apiService = apiService;
        //Struttura documentale
        this.structureDocuments = [];
        //Oggetto con la cache
        this.objCache = new _models_cache_model__WEBPACK_IMPORTED_MODULE_6__["Cache"]();
    }
    /**
     * Partendo dal servizio Start Service c'e' un subscribe nel costruttore
     * che serve a inviarmi la configurazione ad ogni cambiamento
     * Impostare la configurazione prima delle chiamate
     * @param configuration Configurazione di Partenza
     */
    setConfig(elConfig) {
        this.myConfig = elConfig;
        src_app_models_log_model__WEBPACK_IMPORTED_MODULE_7__["LogApp"].consoleLog('New Configuration received');
    }
    /**
     * Decodifica tutte le Foreign Key presenti, eccetto quelle passate nell'array di esclusione
     * @param doc Documento da decodificare
     * @param fieldsExclude Campi di ForeignKeys da non decodificare
     */
    decodeAll(doc, useCache = true, fieldsExclude) {
        return new Promise((resolve, reject) => {
            let executePromise = [];
            if (doc) {
                //Chiedo le ForeignKeys del documento
                let arForeign = doc.ForeignKeys;
                let _this = this;
                /**Ciclo sulle foreignkey */
                for (let index = 0; index < arForeign.length; index++) {
                    const element = arForeign[index];
                    let use = true;
                    if (fieldsExclude && fieldsExclude.length !== 0) {
                        //Utilizzo questa foreignkeys solo se non presente tra quelle da
                        //escludere
                        use = !(fieldsExclude.includes(element.fieldName));
                    }
                    if (use) {
                        //Richiedo la decodifica del campo
                        executePromise.push(_this.decode(doc, element.fieldName, useCache));
                    }
                }
                //Ho dei campi che devo decodificare con le Promise
                if (executePromise.length !== 0) {
                    Promise.all(executePromise).then(() => {
                        resolve();
                    })
                        .catch(err => {
                        reject(err);
                    });
                }
                else {
                    //Non ho nulla da decodificare e va bene cosi
                    resolve();
                }
            }
            else {
                reject('Document null');
            }
        });
    }
    /**
     *
     * @param doc Documento
     * @param fieldDecode Nome del campo da cui parte la decodifica
     */
    decode(doc, fieldDecode, useCache = true, newDecodeField) {
        return new Promise((resolve, reject) => {
            //Step 1: field Decode esiste in doc
            //Step 2: field Decode è in una relazione
            let definition;
            let queryServer = true;
            let result = false;
            let goToDecode = false;
            if (doc && fieldDecode) {
                //Chiedo la definizione del campo, e controlla che
                //n
                definition = doc.getTypeReflectorByFieldName(fieldDecode);
                //Definizione presente
                if (definition) {
                    if (definition.isForeignKey) { //  {relFieldDoc}
                        //Decodifica se il campo  contiene un valore
                        goToDecode = !(doc.propertyIsEmpty(fieldDecode));
                        //Il campo da decodificare contiene un valore
                        if (goToDecode) {
                            //Step 3: Cercare nella cache 
                            //Se non lo trovo nella cache devo richiederlo al server
                            if (useCache) {
                                //Cerco nella cache se trovo la decodifica
                                result = this._decodeInCache(doc, definition, newDecodeField);
                                //Se non trovo in cache devo eseguire la query al server
                                queryServer = !result;
                            }
                            //Chiedo al server
                            if (queryServer) {
                                this._decodeWithServer(doc, definition, newDecodeField)
                                    .then(() => {
                                    resolve();
                                })
                                    .catch(errMessage => {
                                    reject(errMessage);
                                });
                            }
                            else {
                                //Ho usato la cache
                                resolve();
                            }
                        }
                        else {
                            //Il campo non contiene valori e quini non lo decodifico
                            resolve();
                        }
                    }
                    else {
                        reject('Field ' + fieldDecode + ' is not a foreingKey');
                    }
                }
                else {
                    reject('Field ' + fieldDecode + ' unknown in structure');
                }
            }
            else {
                reject('Field or Document null');
            }
        });
    }
    /**
     * Contatta il server per richiedere elementi
     * in Definition come relFieldDoc e relFieldName
     * @param doc
     * @param definition
     * @param newDecodeField
     */
    _decodeWithServer(doc, definition, newDecodeField) {
        return new Promise((resolve, reject) => {
            let docFilter = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](definition.relFieldDoc, true);
            //Valorizzo le proprietà del documento come filtro di caricamento
            docFilter[definition.relFieldName] = doc[definition.fieldName];
            this.requestNew(docFilter)
                .then(serverElement => {
                //In teoria dovrei aver ricevuto qualcosa dal server
                if (serverElement.length !== 0) {
                    //Step 1: Inserirlo in cache
                    this.objCache.addTo(serverElement[0]);
                    //Step 2: Valorizzare le proprietà
                    this._setNewDecodeField(doc, serverElement[0], newDecodeField);
                }
                resolve();
            })
                .catch(errMessage => {
                reject(errMessage);
            });
        });
    }
    /**
     *
     * @param doc Documento da decodificare
     * @param definition Definitione del campo e sua relazione
     * @param newDecodeField Se presenti vengono creati come campi di decodifica al posto del describeRowField
     */
    _decodeInCache(doc, definition, newDecodeField) {
        let elementList;
        let result = false;
        let findElement;
        let nameField;
        if (doc && definition) {
            if (this.objCache) {
                elementList = this.objCache.findByClassName(definition.relFieldDoc);
                //Questa è la lista degli elementi della stessa tipologia del 
                //documento di riferimento che contiene le decodifiche
                if (elementList) {
                    nameField = definition.relFieldName;
                    if (elementList.list) {
                        //Cerco nella lista della cache il valore presente nel documento e impostato come nameField nel documento correlato
                        findElement = elementList.findElementByFieldName(nameField, doc[definition.fieldName]);
                        //Questo e' il documento di Decodifica
                        //Devo conoscere il valore della proprietà eletta come describeRowField
                        if (findElement) {
                            //Passo il documento che devo modificare e il documento di decodifica
                            result = this._setNewDecodeField(doc, findElement, newDecodeField);
                        }
                    }
                }
            }
        }
        return result;
    }
    /**
     *
     * @param doc Documento a cui applicare nuovi campi
     * @param docRel Documento di riferimento
     * @param useFields Se presente sono i campi usati per la decodifica, altrimenti viene usato il describeRowFields
     */
    _setNewDecodeField(doc, docRel, useFields) {
        let objDescriptor;
        let result = false;
        let nameDescribe = '';
        let nameNewProperty = '';
        if (doc && docRel) {
            if (!useFields || useFields.length == 0) {
                //doc è il documento a cui aggiungere proprietà
                //in questo caso ne aggiungo 1 sola, che è il describeRowField del docRel
                objDescriptor = docRel.getDescriptor();
                if (objDescriptor && objDescriptor.describeField && objDescriptor.describeField.length !== 0) {
                    nameDescribe = objDescriptor.describeField;
                    nameNewProperty = "_" + objDescriptor.describeField + "_" + objDescriptor.className;
                    //Creo la nuova proprietà con il valore
                    doc[nameNewProperty] = docRel[nameDescribe];
                    result = true;
                }
            }
            else {
                //Nell'array useFields ho i nomi dei campi che voglio come nuovi campi di decodifica
                objDescriptor = docRel.getDescriptor();
                for (let index = 0; index < useFields.length; index++) {
                    const elFieldDecode = useFields[index];
                    nameDescribe = elFieldDecode;
                    nameNewProperty = "_" + elFieldDecode + "_" + objDescriptor.className;
                    //Creo la nuova proprietà con il valore
                    doc[nameNewProperty] = docRel[nameDescribe];
                    result = true;
                }
            }
        }
        return result;
    }
    /**
     * Carica una collection figlia del documento passato
     * e la imposta nel documento
     * @param document  Documento base da cui caricare
     * @param collectionName Nome collection da caricare
     * @param params parametri aggiuntivi
     */
    loadCollection(document, collectionName, params) {
        return new Promise((resolve, reject) => {
            let prosegui = true;
            let objDescriptor;
            let message = '';
            let defCollection;
            let namePrimaryKey = '';
            if (!document) {
                message = 'Documento null';
                prosegui = false;
                reject(message);
            }
            else if (!collectionName || collectionName.length == 0) {
                message = 'Collection non specificata';
                prosegui = false;
                reject(message);
            }
            if (prosegui) {
                //Recupero il descrittore della classe
                objDescriptor = document.getDescriptor();
                if (!objDescriptor) {
                    prosegui = false;
                    message = "Document descriptor not find";
                    reject(message);
                }
            }
            //Controllo correttezza configurazione collection
            if (prosegui) {
                defCollection = objDescriptor.getByCollectionName(collectionName);
                if (!defCollection) {
                    prosegui = false;
                    message = 'Collection ' + collectionName + 'not found';
                    reject(message);
                }
                else if (!defCollection.relFieldDoc || defCollection.relFieldDoc.length == 0) {
                    prosegui = false;
                    message = 'Document in collection ' + collectionName + ' not defined';
                    reject(message);
                }
                else if (!defCollection.relFieldName || defCollection.relFieldName.length == 0) {
                    prosegui = false;
                    message = 'Field in ' + defCollection.relFieldDoc + ' to loading collection ' + collectionName + ' not defined';
                    reject(message);
                }
            }
            if (prosegui) {
                namePrimaryKey = objDescriptor.primaryKeyFieldName;
                if (namePrimaryKey.length == 0) {
                    prosegui = false;
                    message = 'Document Descriptor ' + objDescriptor.className + ' without primary key';
                    reject(message);
                }
            }
            //Preparo il documento di filtro per la chiamata
            if (prosegui) {
                let filterDocument = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](defCollection.relFieldDoc, true);
                filterDocument[defCollection.relFieldName] = document[namePrimaryKey];
                this.requestNew(filterDocument, params)
                    .then(collReceived => {
                    //Devo eliminare i dati precedenti della collection del documento
                    //Svuoto la collection attuale
                    document[defCollection.fieldName] = [];
                    document[defCollection.fieldName] = collReceived;
                    resolve(document);
                })
                    .catch(error => {
                    reject(error);
                });
            }
        });
    }
    /**
     * Per ogni documento contenuto nella collection viene caricata la collection figlia richiesta
     * @param collection Collection di Documenti
     * @param collectionName Collection figlia da caricare
     * @param params parametri aggiuntivi
     */
    loadCollectionMulti(collection, collectionName, params) {
        return new Promise((resolve, reject) => {
            let executePromise = [];
            if (collection && collection.length !== 0) {
                for (let index = 0; index < collection.length; index++) {
                    const elDocument = collection[index];
                    let exPromise = this.loadCollection(elDocument, collectionName, params);
                    executePromise.push(exPromise);
                }
                //Esecuzione di tutte le Promise se presenti
                if (executePromise.length !== 0) {
                    //Eseguo tutte le Promise
                    Promise.all(executePromise)
                        .then(() => {
                        //Ritorno il tutto decodificato
                        resolve(collection);
                    })
                        .catch(err => {
                        reject(err);
                    });
                }
                else {
                    //Non ho nulla da decodificare e va bene cosi
                    resolve(collection);
                }
            }
            else {
                reject('Collection not defined');
            }
        });
    }
    /**
     * Effettua chiamate al server
     * il document dovrà essere istanziato con i parametri che si desiderano diventare filtri di caricamento
     * @param filterDocument Parametri di configurazione
     * @param decode Effettua la decodifica dei dati
     */
    requestNew(filterDocument, params) {
        return new Promise((resolve, reject) => {
            let myHeaders = this.myConfig.getHttpHeaders();
            let objDescriptor;
            let childLevel = -1;
            let orderBy = '';
            let nElem = 0;
            let requestAndDecode = false;
            let foreignFields;
            if (!filterDocument) {
                reject('Documento filtro non presente');
            }
            else {
                //Recupero il descrittore della classe
                objDescriptor = filterDocument.getDescriptor();
                if (!objDescriptor) {
                    reject('Descrittore Documento filtro non presente');
                }
                else if (objDescriptor.doRemote == false) {
                    //Non è gestito esternamente
                    reject('Documento non gestito in remoto');
                }
                else {
                    // Controllo i parametri di richiesta
                    if (params) {
                        if (params.child_level) {
                            childLevel = params.child_level;
                        }
                        if (params.top) {
                            nElem = params.top;
                        }
                        if (params.orderBy) {
                            orderBy = params.orderBy;
                        }
                        if (params.decode) {
                            if (params.decode.active) {
                                requestAndDecode = true;
                                if (params.decode.foreignFields) {
                                    foreignFields = params.decode.foreignFields;
                                }
                            }
                        }
                    }
                    // In Testata c'e' sempre l'AppId
                    //myHeaders = myHeaders.set('appid',this.myConfig.appId);
                    if (childLevel != -1) {
                        myHeaders = myHeaders.append('child-level', childLevel + '');
                    }
                    if (orderBy && orderBy.length !== 0) {
                        myHeaders = myHeaders.append('order-by', orderBy);
                    }
                    //Preparare i parametri con i filtri arrivati sul documento
                    let myParams = this._getHttpParamsFromDoc(filterDocument);
                    if (nElem && nElem > 0) {
                        myParams = myParams.append('$top', nElem + '');
                    }
                    let myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;
                    if (!myParams) {
                        reject('Request Parametri insufficienti');
                    }
                    else {
                        this.apiService
                            .httpGet(myUrl, myHeaders, myParams)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(fullData => {
                            return fullData[objDescriptor.classWebApiName];
                        }))
                            .subscribe(resultData => {
                            let listElement = [];
                            if (resultData) {
                                resultData.forEach(elData => {
                                    let newClass = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objDescriptor.className);
                                    newClass.setJSONProperty(elData);
                                    listElement.push(newClass);
                                });
                            }
                            //Se non devo decodificare posso fare qui il resolve
                            if (!requestAndDecode) {
                                resolve(listElement);
                            }
                            else if (listElement.length !== 0) {
                                this.decodeCollection(listElement, foreignFields)
                                    .then(() => {
                                    resolve(listElement);
                                })
                                    .catch(errMessage => {
                                    reject(errMessage);
                                });
                            }
                            else {
                                resolve(listElement);
                            }
                        }, error => {
                            reject(error);
                        });
                    }
                }
            }
        });
    }
    decodeCollection(collection, foreignFields) {
        //Devo decodificare l'intera collection di dati
        //Versione 1: foreignField non presente
        //        Decodifica di tutte le foreign key presenti con il describeRowField default
        //Versione 2: foreignField presente 
        //        Decodifica delle solo foreign key indicate controllando all'interno se ci sono campi di decodifica richiesti
        return new Promise((resolve, reject) => {
            let executePromise = [];
            //Dati presenti in collection
            if (collection && collection.length !== 0) {
                //Versione 2
                if (foreignFields && foreignFields.length !== 0) {
                    for (let index = 0; index < collection.length; index++) {
                        const doc = collection[index];
                        //Ciclo i ForeignFields
                        for (let iField = 0; iField < foreignFields.length; iField++) {
                            const elForeign = foreignFields[iField];
                            let exPromise = this.decode(doc, elForeign.nameField, true, elForeign.describeFields);
                            //Aggiunta all'Array
                            executePromise.push(exPromise);
                        }
                    }
                }
                else {
                    //Versione 1
                    //Decodifica di tutte le foreign key presenti con il describeRowField default
                    //Utilizzo il decodeAll
                    for (let index = 0; index < collection.length; index++) {
                        const doc = collection[index];
                        //Creo la Promise di decodifica
                        let exPromise = this.decodeAll(doc);
                        //Aggiunta all'Array
                        executePromise.push(exPromise);
                    }
                }
                //Esecuzione di tutte le Promise se presenti
                if (executePromise.length !== 0) {
                    //Eseguo tutte le Promise
                    Promise.all(executePromise)
                        .then(() => {
                        //Ritorno il tutto decodificato
                        resolve(collection);
                    })
                        .catch(err => {
                        reject(err);
                    });
                }
                else {
                    //Non ho nulla da decodificare e va bene cosi
                    resolve(collection);
                }
            }
            else {
                //Non ci sono dati ritorno la stessa collection vuota
                resolve(collection);
            }
        });
    }
    /**
     * Prepara i parametri per la chiamata controllando i parametri presenti sul documento
     * @param document Documento con i parametri di filtro
     */
    _getHttpParamsFromDoc(document) {
        let myParams;
        let arProperty = Object.keys(document); //Prendo tutte le proprietà
        let objDescriptor = document.getDescriptor(); //Descrittore dell'oggetto
        // CIclo le proprieta dell'oggetto filter
        objDescriptor.fields.forEach(element => {
            let nameProperty = element.fieldName;
            let strValue = '';
            let tipo = document.getPropertyType(nameProperty);
            let operatoreSpecial; //Condizione speciale sulla proprietà
            //Se non inizia con _ è una proprieta da includere
            if (!nameProperty.startsWith('_')) {
                let filterCondition;
                //Recupero della condizione di filtro speciale
                filterCondition = document.getFilterConditionByFieldName(nameProperty);
                //Recupero la condizione speciale (potrebbe non esserci)
                operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty);
                //La proprietà non contiene un valore
                if (document[nameProperty] == null || document[nameProperty] == undefined) {
                    //C'e' una condizione di filtro speciale
                    if (filterCondition) {
                        //Gli elementi contenuti vanno in OR e separati dal punto e virgola
                        if (filterCondition.listOrValue && filterCondition.listOrValue.length != 0) {
                            //Ci sono valori da mettere in OR
                            //Devo inserirli separati da ;
                            for (let index = 0; index < filterCondition.listOrValue.length; index++) {
                                const valoreProperty = filterCondition.listOrValue[index];
                                if (strValue && strValue.length != 0) {
                                    strValue += ';';
                                }
                                strValue += document.formatValue(tipo, valoreProperty);
                            }
                            //Si inseriscono con l'operatore uguaglianza
                            operatoreSpecial = _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["OperatorCondition"].uguale;
                        }
                    }
                }
                else {
                    //Converto il valore della proprieta
                    strValue = document.formatValue(tipo, document[nameProperty]);
                    //Recupero la condizione speciale (potrebbe non esserci)
                    operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty);
                }
                //Posso aggiungerle ai parametri
                if (strValue.length !== 0) {
                    //Tutti i parametri vengono aggiunti per uguaglianza o controllando
                    //se presenti con una condizione diversa nel filterCondition
                    //Viene sempre ritornato l'operatore da impostare
                    strValue = operatoreSpecial + strValue;
                    if (myParams == undefined) {
                        myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set(nameProperty, strValue);
                    }
                    else {
                        //Aggiungo il parametro
                        myParams = myParams.append(nameProperty, strValue);
                    }
                }
            }
        });
        return myParams;
    }
    /**
    * Clona un oggetto
    */
    cloneObject(document) {
        let objDescriptor;
        let cloneObj;
        if (document) {
            objDescriptor = document.getDescriptor();
            cloneObj = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objDescriptor.className, true);
            for (var attribut in document) {
                if (typeof document[attribut] === "object") {
                    //cloneObj[attribut] = this.cloneObject(document[attribut]);
                }
                else {
                    cloneObj[attribut] = document[attribut];
                }
            }
        }
        return cloneObj;
    }
    /**
     * Dato un documento di partenza e una sequenza di campi ritorna il documento correlato
     * Esempio Documento Corso contiene IDLOCATION
     * seqField mi da il percorso da seguire per arrivare al documento correlato
     * seqField = ['IDLOCATION'] => Location
     * seqField = ['IDLOCATION', 'IDAREA'] => Area
     * seqField = ['IDLOCATION', 'IDAREA','IDGRUPPO'] => Gruppo
     * @param docStart Documento di partenza
     * @param seqField Percorso da seguire per ottenere il documento correlato
     * @param childLevel Profondita dell'ultima chiamata
     * @param docRepository Aggiunge il documento correlato al documento passato (spesso il docRepository è uguale a docStart)
     */
    getRelDoc(docStart, seqField, childLevel = 2, docRepository, indexSeq = -1) {
        return new Promise((resolve, reject) => {
            let nameField = '';
            let objFieldType;
            if (docStart) {
                if (seqField && seqField.length !== 0) {
                    if (indexSeq == -1) {
                        //Inizio il giro impostando posizione 0
                        indexSeq = 0;
                    }
                }
                if (seqField && seqField.length !== 0) {
                    nameField = seqField[indexSeq];
                    //Con il nome del campo, ottengo la definizione del campo
                    objFieldType = docStart.getTypeReflectorByFieldName(nameField);
                    //Il campo esiste e contiene qualcosa
                    if (objFieldType && docStart.propertyIsEmpty(nameField) == false) {
                        //E' un campo in foreing Key
                        if (objFieldType.isForeignKey) {
                            //Impostare il documento di filtro
                            let filter = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objFieldType.relFieldDoc, true);
                            let idDocFilter = filter;
                            idDocFilter.setPrimaryKey(docStart[nameField]);
                            //creo i filtri per il child level
                            let params = new _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["RequestParams"]();
                            if (seqField.length == indexSeq + 1) {
                                params.child_level = childLevel;
                            }
                            else {
                                params.child_level = 1;
                            }
                            this.requestNew(idDocFilter, params)
                                .then(arElement => {
                                if (arElement && arElement.length !== 0) {
                                    let element = arElement[0];
                                    //Ho ancora relazioni da decodificare
                                    if (indexSeq + 1 < seqField.length) {
                                        //Incremento l'indice sequenza
                                        indexSeq++;
                                        //Eseguo un nuovo relDoc
                                        return this.getRelDoc(element, seqField, childLevel, docRepository, indexSeq);
                                    }
                                    else {
                                        //Il giro è finito
                                        //Elemento presente e vuole che venga aggiunto al documento chiamante come relDoc nel Repository
                                        if (element && docRepository) {
                                            //Aggiungo al repository
                                            docRepository.addToRepositoryRelDoc(element, seqField);
                                        }
                                        return resolve(element);
                                    }
                                }
                                else {
                                    console.log('Document rel not found');
                                    return resolve(null);
                                }
                            })
                                .catch(error => {
                                return reject(error);
                            });
                        }
                        else {
                            console.log('Foreign Key not found');
                            return resolve(null);
                        }
                    }
                    else {
                        console.log('Foreign Key not found');
                        return resolve(null);
                    }
                }
                else {
                    reject('Sequence Field Link empty');
                }
            }
            else {
                reject('Document null or undefined');
            }
        });
    }
    /**
     * Richiede per tutti i documenti della collection, un documento relativo
     * basato sulla sequenza seqField
     * Il documento correlato viene aggiunto al repository di ogni documento
     * @param collection Collection di Documenti della stessa tipologia
     * @param seqField Percorso da seguire per ottenere il documento correlato
     */
    getRelDocCollection(collection, seqField) {
        return new Promise((resolve, reject) => {
            let executePromise = [];
            if (collection) {
                for (let index = 0; index < collection.length; index++) {
                    const elDoc = collection[index];
                    let elPromise = this.getRelDoc(elDoc, seqField, 1, elDoc);
                    executePromise.push(elPromise);
                }
                if (executePromise.length != 0) {
                    Promise.all(executePromise)
                        .then(() => {
                        resolve();
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
            }
        });
    }
    // ****************************************************************
    // ***************  REQUEST PER I METODI STATICI    ***************
    // ****************************************************************
    /**
     * Effettua una chiamata POST al metodo indicato dell'oggetto specificato
     * E' possibile indicare a scelta:
     * 1) un jsonbody stringa o documento (il documento viene convertito in JSON)
     * 2) postParams:unione di chiavi /valore da inviare nei parametri se i valori non sono oggetti, altrimenti essendo oggetti,
     *    viene creato un oggetto e innestato nel body
     *
     *
     *
     *
     * @param documentCall Documento a cui effettuare la chiamata
     * @param method nome del metodo statico da chiamare
     * @param jsonBodyOrDoc body da inviare in formato json o documento
     * @param postParams Array con i parametri da aggiungere nell'url
     */
    requestForFunction(documentCall, method, jsonBodyOrDoc, postParams) {
        return new Promise((resolve, reject) => {
            let myHeaders = this.myConfig.getHttpHeaders();
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
            let myUrl = '';
            let myJsonBody = '';
            let postBasicType = false;
            let objDescriptor;
            if (!this.myConfig) {
                reject('Configuration non presente');
            }
            else if (!documentCall) {
                reject('Documento non presente');
            }
            else if (method.length == 0) {
                reject('Metodo non presente');
            }
            else {
                //Recupero il descrittore della classe
                objDescriptor = documentCall.getDescriptor();
                if (!objDescriptor) {
                    reject('Descrittore Documento non presente');
                }
                else if (objDescriptor.doRemote == false) {
                    //Non è gestito esternamente
                    reject('Documento non gestito in remoto');
                }
                else {
                    //Creo URL di chiamata
                    myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;
                    //Sistemo l'header
                    myHeaders = myHeaders.append('X-HTTP-Method-Override', method);
                    //Controllo dei parametri post
                    if (postParams) {
                        //Controllo come sono i parametri di post
                        postBasicType = _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"].getBasicTypeFrom(postParams);
                        if (postBasicType) {
                            //Essendo tutti parametri basici li sistemo come parametri
                            //Se è un Array
                            if (Array.isArray(postParams)) {
                                if (postParams.length != 0) {
                                    for (let index = 0; index < postParams.length; index++) {
                                        const elParam = postParams[index];
                                        myParams = myParams.append(elParam.key, elParam.value);
                                    }
                                }
                            }
                            else {
                                //Oggetto semplice
                                myParams = myParams.append(postParams.key, postParams.value);
                            }
                        }
                        else {
                            //Costruire un oggetto da sistemare nel body
                            jsonBodyOrDoc = _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"].getJsonFrom(postParams);
                        }
                    }
                    if (jsonBodyOrDoc) {
                        if (typeof jsonBodyOrDoc == "string") {
                            myJsonBody = jsonBodyOrDoc;
                        }
                        else if (typeof jsonBodyOrDoc == "object") {
                            //Questi sono i parametri per l'esportazione
                            let paramExport = new _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["ParamsExport"]();
                            paramExport.clearDOProperty = true;
                            paramExport.clearPKProperty = false;
                            paramExport.clearPrivateProperty = true;
                            paramExport.onlyPropertyModified = true;
                            paramExport.onlyDocModified = true;
                            paramExport.numLivelli = 999;
                            myJsonBody = jsonBodyOrDoc.exportToJSON(paramExport);
                        }
                    }
                    //Effettuo la chiamata POST
                    this.apiService.httpPost(myUrl, myHeaders, myParams, jsonBodyOrDoc)
                        .subscribe(response => {
                        resolve(response);
                    }, error => {
                        reject(error);
                    });
                }
            }
        });
    }
    // **********************************************
    // *          REQUEST FOR UPDATE                *
    // **********************************************
    /**
     * Richiesta effettuata al server per aggiornare un documento
     * @param document Documento da aggiornare
     * @param onlyPropModified Invia solo le proprietà modificate
     */
    requestForUpdate(document, onlyPropModified = true, onlyDocModified = false) {
        //Si esegue una PUT con il parametro ID e il body i valori da modificare
        return new Promise((resolve, reject) => {
            let myHeaders = this.myConfig.getHttpHeaders();
            let objDescriptor;
            let fieldNamePK = '';
            let fieldValuePK = '';
            let jsonBody = '';
            let myParams;
            let myUrl = '';
            if (!document) {
                reject('Document null');
            }
            else {
                //Recupero il descrittore della classe
                objDescriptor = document.getDescriptor();
                if (!objDescriptor) {
                    reject('Descrittore Documento filtro non presente');
                }
                else if (objDescriptor.doRemote == false) {
                    //Non è gestito esternamente
                    reject('Documento non gestito in remoto');
                }
                else {
                    //Recupero nome e valore della primary Key
                    fieldNamePK = document.getPrimaryKey('name');
                    fieldValuePK = document.getPrimaryKey('value');
                    //Vuole che aggiorni le proprietà modificate ma non ne ho
                    //Che facciamo dico che è andata a buon fine
                    if (onlyPropModified && document.isModified() == false) {
                    }
                    else {
                        //Preparo il body
                        //Questi sono i parametri per l'esportazione
                        let paramExport = new _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["ParamsExport"]();
                        paramExport.clearDOProperty = true;
                        paramExport.clearPKProperty = false;
                        paramExport.clearPrivateProperty = true;
                        paramExport.onlyPropertyModified = onlyPropModified;
                        paramExport.onlyDocModified = onlyDocModified;
                        jsonBody = document.exportToJSON(paramExport);
                        myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;
                        this.apiService
                            .httpPut(myUrl, myHeaders, myParams, jsonBody)
                            .subscribe(() => {
                            resolve();
                        }, error => {
                            reject(error);
                        });
                    }
                }
            }
        });
    }
}
DocstructureService.ɵfac = function DocstructureService_Factory(t) { return new (t || DocstructureService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"])); };
DocstructureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: DocstructureService, factory: DocstructureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Fdj0":
/*!*******************************************************!*\
  !*** ./src/app/services/custom-encription.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomEncriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEncriptionService", function() { return CustomEncriptionService; });
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/log.model */ "Ag5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomEncriptionService {
    constructor() {
        this.privateKey = '5468765198654984964198';
        this.table = [];
        this._initTable();
    }
    _initTable() {
        this.table = [
            ['D', 'd', '8', 'Y', 'R', 'g', 'z', '9', 'B', 'A'],
            ['G', 'p', 'B', 'y', 'f', 'M', 'Z', 'A', 'Y', 'a'],
            ['b', 'P', '5', '0', 'N', 'r', '8', 'a', 'C', 'G'],
            ['a', 'r', '3', 'F', '1', '2', 'n', 'X', '6', 'R'],
            ['C', 'N', 'A', 'l', 'g', '6', 'B', 'Y', '5', '1'],
            ['h', 'A', '0', 't', '2', '7', 'e', '1', 'J', '6'],
            ['H', 'O', 'R', 'T', '3', 'A', 'L', '6', 'h', '7'],
            ['Q', 'o', 'l', 'w', 'B', 'c', 'R', '4', 'q', '2'],
            ['j', 'I', 'J', '6', 'c', '1', '4', '2', 'D', '5'],
            ['1', '2', 'I', '5', '4', 'B', 'c', 'W', 'w', 'b'],
        ];
    }
    _getUTCTimestamp() {
        let utc;
        let now = new Date();
        // utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds())
        utc = now.getTime();
        return utc;
    }
    _encrypt(str) {
        let encryptedStr = '';
        let keyPointer = 0;
        for (let i = 0; i < str.length; i++) {
            //recupero il carattere (numerico) da crittografare
            let initialValue = str[i];
            //recupero il carattere della chiave da usare per la codifica
            let keyValue = this.privateKey[keyPointer];
            //recupero dalla matrice il valore codificato
            let finalValue = this.table[keyValue][initialValue];
            //aggiungo il valore trovato alla stringa finale codificata
            encryptedStr += finalValue;
            //avanzo di una posizione con il puntatore alla chiave
            keyPointer++;
            //se il puntatore alla chiave è arrivato alla fine, torno all'inizio
            if (keyPointer == this.privateKey.length) {
                keyPointer = 0;
            }
        }
        return encryptedStr;
    }
    _decrypt(encryptedStr) {
        let decryptedStr = '';
        let keyPointer = 0;
        for (let i = 0; i < encryptedStr.length; i++) {
            //recupero il carattere giusto della chiave
            let keyValue = this.privateKey[keyPointer];
            let encryptedChar = encryptedStr[i];
            //con il carattere della chiave, recupero la riga:
            let myRow = this.table[keyValue];
            //nella riga, l'indice del carattere crittografato è il carattere non crittografato
            let decryptedChar = myRow.findIndex(value => {
                return value == encryptedChar;
            });
            //aggiungo il carattere trovato alla mia stringa finale 
            decryptedStr += decryptedChar;
            //avanzo di una posizione con il puntatore alla chiave
            keyPointer++;
            //se il puntatore alla chiave è arrivato alla fine, torno all'inizio
            if (keyPointer == this.privateKey.length) {
                keyPointer = 0;
            }
        }
        return decryptedStr;
    }
    _getSignatureToEncrypt() {
        let str = '';
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
    encrypt(str) {
        return this._encrypt(str);
    }
    /**
     * decrittografa la stringa guardando chiave e tabella
     * @param str stringa da decrittografare
     */
    decrypt(str) {
        return this._decrypt(str);
    }
    /**
     * restituisce una firma secondo le specifiche. Encodata in B64
     */
    getB64EncryptedSignature() {
        let signature = this._getSignatureToEncrypt();
        signature = this.encrypt(signature);
        _models_log_model__WEBPACK_IMPORTED_MODULE_0__["LogApp"].consoleLog('Signature: ' + signature);
        //@ts-ignore
        signature = window.btoa(signature);
        _models_log_model__WEBPACK_IMPORTED_MODULE_0__["LogApp"].consoleLog('Signature Base64: ' + signature);
        return signature;
    }
}
CustomEncriptionService.ɵfac = function CustomEncriptionService_Factory(t) { return new (t || CustomEncriptionService)(); };
CustomEncriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomEncriptionService, factory: CustomEncriptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HPlZ":
/*!**************************************************!*\
  !*** ./src/app/services/categoriaeta.service.ts ***!
  \**************************************************/
/*! exports provided: CategoriaetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaetaService", function() { return CategoriaetaService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/categoriaeta.model */ "wG3K");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class CategoriaetaService {
    constructor(apiService) {
        this.apiService = apiService;
        this._listCategorieEta = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get listCategorieEta() {
        return this._listCategorieEta.asObservable();
    }
    /**
   * Ritorna la lista non in modalità Observable
   */
    get actualListCategorieEta() {
        return this._listCategorieEta.getValue();
    }
    /**
     * Richiede al server l'elenco delle Categorie Eta
     * @param config Parametri configurazione chiamata
     */
    request(config) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'CATEGORIEETA';
            //Nei Parametri imposto il LivelloAutorizzazione
            //TODO: Fatta cosi non mi piace
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('LivelloAutorizzazione', '0');
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.CATEGORIEETA;
            }))
                .subscribe(resultData => {
                if (resultData) {
                    resultData.forEach(element => {
                        let newCategoria = new _models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_3__["CategoriaEta"]();
                        newCategoria.setJSONProperty(element);
                        this.addCategoriaEta(newCategoria);
                        resolve();
                    });
                }
                else {
                    reject('no data Categoria Eta retrieved');
                }
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Aggiunge un oggetto Categorie Eta all'Observable
     * @param objCategoriaEta Oggetto Categoria Eta da aggiungere
     */
    addCategoriaEta(objCategoriaEta) {
        this.listCategorieEta
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collEta => {
            this._listCategorieEta.next(collEta.concat(objCategoriaEta));
        });
    }
    /**
     * Cerca e ritorna un record della categoria eta
     * @param idCategoriaEta idCategoria Scelta
     */
    findCategoriaEtaById(idCategoriaEta) {
        let objCategoria;
        let listaCat = this._listCategorieEta.getValue();
        if (idCategoriaEta && listaCat && listaCat.length != 0) {
            objCategoria = listaCat.find(elCat => {
                return (elCat.ID == idCategoriaEta);
            });
        }
        return objCategoria;
    }
    /**
     * IDCategoria da controllare se l'età risulta valida
     * @param idCategoria idCategoria scelta
     * @param eta Età
     */
    isValid(idCategoria, eta) {
        let isValid = false;
        let objCategoria;
        objCategoria = this.findCategoriaEtaById(idCategoria);
        if (objCategoria) {
            isValid = objCategoria.isValid(eta);
        }
        return isValid;
    }
}
CategoriaetaService.ɵfac = function CategoriaetaService_Factory(t) { return new (t || CategoriaetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"])); };
CategoriaetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CategoriaetaService, factory: CategoriaetaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I2uL":
/*!***************************************************!*\
  !*** ./src/app/services/data-chiusura.service.ts ***!
  \***************************************************/
/*! exports provided: DataChiusuraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChiusuraService", function() { return DataChiusuraService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_datachiusura_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/datachiusura.model */ "eF/0");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class DataChiusuraService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
        this._listChiusure = [];
        this.listChiusure = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    /**
     * aggiuge un elemento alla lista
     * @param element l'elemento da aggiungere
     */
    addElementToList(element) {
        this._listChiusure.push(element);
        this.listChiusure.next(this._listChiusure);
    }
    /**
     * Richiede l'elenco completo di tutte le chiusure del gruppo sportivo SOLO PER GLI AFFITTI
     */
    request() {
        return new Promise((resolve, reject) => {
            //creo il filtro
            let filterDocument = new _models_datachiusura_model__WEBPACK_IMPORTED_MODULE_4__["DataChiusura"](true);
            //aggiungo le due condizioni in or (chiusure per affitti e per affitti/corsi)
            filterDocument.addFilterCondition(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["OperatorCondition"].uguale, 'ATTIVITACHIUSURA', [_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["AttivitaChiusura"].affittoStrutture, _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["AttivitaChiusura"].tutte]);
            //ora faccio la richiesta
            this.docStructureService.requestNew(filterDocument)
                .then(rawListChiusure => {
                //salvo la lista ed emetto l'observable
                this._listChiusure = rawListChiusure;
                this.listChiusure.next(this._listChiusure);
                //risolvo la lista
                // console.log('LISTA CHIUSURE');
                // console.log(this._listChiusure);
                resolve(this._listChiusure);
            });
        });
    }
    /**
     * Ritorna se la Data passata è una festività di chiusura
     * @param idArea L'area
     * @param idLocation la location
     * @param idCampo il campo
     * @param data la data da controllare
     */
    idFestivita(idArea, idLocation, idCampo, data) {
        let aperto = true;
        if (this._listChiusure) {
            for (let index = 0; index < this._listChiusure.length; index++) {
                const elemChiusura = this._listChiusure[index];
                if (elemChiusura.IDAREA == idArea &&
                    (elemChiusura.IDLOCATION == undefined || elemChiusura.IDLOCATION == idLocation) &&
                    (elemChiusura.IDCAMPO == undefined || elemChiusura.IDCAMPO == idCampo)) {
                    //REGOLA VALIDA DA CONTROLLARE - IN QUESTO GIORNO SIAMO CHIUSI
                    if (elemChiusura.TIPOCHIUSURA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoChiusura"].rangeDate && elemChiusura.DATADAL <= data && data <= elemChiusura.DATAAL) {
                        //il giorno  ricade in un range di date di chiusura
                        aperto = false;
                        break;
                    }
                    else if (elemChiusura.TIPOCHIUSURA == _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].getFesta(data)) {
                        //nel giorno  c'è una festa in cui il centro chiude
                        aperto = false;
                        break;
                    }
                }
            }
        }
        return (!aperto);
    }
}
DataChiusuraService.ɵfac = function DataChiusuraService_Factory(t) { return new (t || DataChiusuraService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__["DocstructureService"])); };
DataChiusuraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataChiusuraService, factory: DataChiusuraService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IAlr":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_corso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/corso.model */ "F/re");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_filtercorsi_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/filtercorsi.model */ "NWOI");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











class CourseService {
    constructor(docStructureService, apiService) {
        this.docStructureService = docStructureService;
        this.apiService = apiService;
        this._listCorsi = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._selectedCorso = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]());
        this._listCorsiTrainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get listCorsi() {
        return this._listCorsi.asObservable();
    }
    /**
     * Sono i corsi che il trainer richiede nella pagina Trainer
     */
    get listCorsiTrainer() {
        return this._listCorsiTrainer.asObservable();
    }
    get selectedCorso() {
        return this._selectedCorso.asObservable();
    }
    get filterCorsi() {
        return this.filterCorsi;
    }
    set filterCorsi(value) {
        this._filterCorsi = value;
    }
    set decodeListSport(value) {
        this._decodeListSport = value;
    }
    set decodeListLivelli(value) {
        this._decodeListLivelli = value;
    }
    set decodeListEta(value) {
        this._decodeListEta = value;
    }
    /**
     * Inizializza e ritorna una copia del filtro dei corsi
     * @param idLocation Location da utilizzare
     */
    newFilterCorsi(idLocation) {
        this._filterCorsi = new _models_filtercorsi_model__WEBPACK_IMPORTED_MODULE_5__["FilterCorsi"](idLocation);
        return this._filterCorsi;
    }
    /**
     * Effettua una chiamata al server per il recupero dei corsi
     * Utilizzare il documento di Filtro per richiedere dati filtrati
     * @param config Parametri di configurazione
     * @param docUser Documento Utente loggato. Se presente i corsi vengono proposti solo quelli validi all'utente
     */
    requestById(config, idCorso, numLivelli) {
        return new Promise((resolve, reject) => {
            if (!numLivelli) {
                numLivelli = '3';
            }
            let myHeaders = config.getHttpHeaders();
            //new HttpHeaders({'Content-type':'text/plain'});
            const doObject = 'CORSO';
            myHeaders = myHeaders.set('child-level', numLivelli);
            let myUrl = config.urlBase + '/' + doObject;
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idCorso);
            //Effettuo la chiamata
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.CORSO;
            }))
                .subscribe(resultData => {
                if (resultData[0] && resultData[0] != {}) {
                    let objCorso = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]();
                    objCorso.setJSONProperty(resultData[0]);
                    //Decodifico i campi chiave
                    objCorso.lookup('IDSPORT', this._decodeListSport, 'DENOMINAZIONE');
                    //Decodifico i campi chiave
                    objCorso.lookup('IDCATEGORIEETA', this._decodeListEta, 'DESCTOOLTIP');
                    //Decodifico i campi chiave
                    objCorso.lookup('IDLIVELLOENTRATA', this._decodeListLivelli, 'DENOMINAZIONE');
                    resolve(objCorso);
                }
                else {
                    reject('corso non trovato');
                }
            }, error => {
                reject(error);
            });
        });
    }
    newRequestById(idCorso) {
        return new Promise((resolve, reject) => {
            //preparo il filtro
            let filtroCorso = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"](true);
            filtroCorso.ID = idCorso;
            //preparo i parametri per decodificare
            let params = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["RequestParams"]();
            params.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["RequestDecode"]();
            params.decode.active = true;
            //faccio la richiesta
            this.docStructureService.requestNew(filtroCorso, params)
                .then((listCorsi) => {
                let myCorso;
                if (listCorsi && listCorsi.length != 0) {
                    //Prendo il primo corso (in teoria anche l'unico)
                    myCorso = listCorsi[0];
                }
                if (myCorso) {
                    //ora richiedo anche il programma
                    this.docStructureService.loadCollection(myCorso, 'CORSOPROGRAMMA')
                        .then(() => {
                        resolve(myCorso);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
                else {
                    reject('Errore recupero corso');
                }
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Effettua la chiamata al server per ottenere i corsi riferiti al trainer
     * Risultato nell'Observable listCorsiTrainer
     *
     * @param idTrainer Trainer
     * @param timeState Corsi richiesti
     */
    requestTimeTrainerCourse(idTrainer, timeState) {
        let myPostParams;
        let arPostParams = [];
        let method = 'getCorsitrainer';
        let docCall = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]();
        if (idTrainer && idTrainer.length != 0) {
            if ([-1, 0, 1].includes(timeState)) {
                //Procedo con la chiamata
                myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["PostParams"]();
                myPostParams.key = 'idTrainer';
                myPostParams.value = idTrainer;
                arPostParams.push(myPostParams);
                myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["PostParams"]();
                myPostParams.key = 'stateTime';
                myPostParams.value = timeState;
                arPostParams.push(myPostParams);
                this.docStructureService.requestForFunction(docCall, method, '', arPostParams)
                    .then((collData) => {
                    let listElement = [];
                    let collDataCorso;
                    if (collData) {
                        if (collData.hasOwnProperty('CORSO')) {
                            collDataCorso = collData['CORSO'];
                            if (collDataCorso.length != 0) {
                                //Creo la lista
                                collDataCorso.forEach(elData => {
                                    let newElement = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"];
                                    newElement.setJSONProperty(elData);
                                    listElement.push(newElement);
                                    //Ogni volta riemetto la lista
                                    this._listCorsiTrainer.next(listElement);
                                });
                                //Adesso voglio anche decodificare i dati contenuti
                                this.docStructureService.decodeCollection(listElement)
                                    .then(() => {
                                    //Riemetto la lista aggiornata
                                    this._listCorsiTrainer.next(listElement);
                                })
                                    .catch(error => {
                                    //Anche in errore riemetto la lista
                                    this._listCorsiTrainer.next(listElement);
                                });
                            }
                            else {
                                //Nessun dato
                                this._listCorsiTrainer.next([]);
                            }
                        }
                        else {
                            //Nessun dato
                            this._listCorsiTrainer.next([]);
                        }
                    }
                    else {
                        //Nessun dato
                        this._listCorsiTrainer.next([]);
                    }
                });
            }
        }
    }
    /**
     * Ritorna un oggetto HttpParams con i parametri impostati
     * @param filter Oggetto co i filtri da applicare e passare come HttpParams
     */
    getHttpParamsFilter(filter) {
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDLOCATION', filter.IDLOCATION);
        let arProperty = Object.keys(filter); //Prendo tutte le proprieta
        // CIclo le proprieta dell'oggetto filter
        arProperty.forEach(element => {
            let nameProperty = element;
            //Se non inizia con _ è una proprieta da includere
            if (!nameProperty.startsWith('_')) {
                //Se c'è un valore
                if (filter[nameProperty]) {
                    let value = filter[nameProperty];
                    /* Per la DATAFINE applico la condizione se è presente*/
                    if (value == 'DATAFINE') {
                        if (filter._CONDITIONDATAFINE) {
                            value = filter._CONDITIONDATAFINE + value;
                        }
                    }
                    //Aggiungo il parametro
                    myParams = myParams.append(nameProperty, value);
                }
            }
            else if (nameProperty = '_CHECKISCRIZIONEAPERTA') {
                if (filter[nameProperty]) {
                    //devo includere la ricerca 
                    //per avere solo i corsi con iscrizione aperta
                }
            }
        });
        return myParams;
    }
    /**
     * Aggiunge un corso all'elenco dei corsi
     * @param objCorso Corso da Aggiungere
     */
    addCorso(objCorso) {
        this.listCorsi
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collCorsi => {
            this._listCorsi.next(collCorsi.concat(objCorso));
        });
    }
    /**
     * Elimina tutti i corsi presenti
     */
    emptyCorsi() {
        this._listCorsi.next([]);
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"])); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IGb/":
/*!**************************************************!*\
  !*** ./src/app/models/corsovalutazione.model.ts ***!
  \**************************************************/
/*! exports provided: CorsoValutazione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoValutazione", function() { return CorsoValutazione; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _corsovalutazionelivello_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corsovalutazionelivello.model */ "eRJB");



class CorsoValutazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.DATAORAVALUTAZIONE = new Date();
        this.TESTOVALUTAZIONE = '';
        this.CORSOVALUTAZIONELIVELLO = [];
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDCORSO',
            'TESTOVALUTAZIONE',
            'IDUTENTE',
            'NOMINATIVO'
        ];
        let arNumber = ['VOTAZIONEFINALE'];
        let arBoolean = ['FLAGBOZZA'];
        let arDate = ['DATAORAVALUTAZIONE'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'CorsoValutazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOVALUTAZIONE';
        objDescriptor.describeField = 'NOMINATIVO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        return objDescriptor;
    }
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        this.setCollection(data);
        this.setOriginal();
    }
    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data) {
        this.CORSOVALUTAZIONELIVELLO = [];
        if (data.CORSOVALUTAZIONELIVELLO) {
            this.setCollectionCorsoValutazioneLivello(data.CORSOVALUTAZIONELIVELLO);
        }
    }
    /**
     * Imposta la collection CORSOVALUTAZIONELIVELLO coni dati ricevuti
     * @param arValutazioni JSON Ricevuti
     */
    setCollectionCorsoValutazioneLivello(arValutazioni) {
        this.CORSOVALUTAZIONELIVELLO = [];
        if (arValutazioni) {
            arValutazioni.forEach(element => {
                // Ricerco se esiste già
                let newValutazione = this.getCorsoValutazioneLivelloByID(element.ID);
                //Non esiste lo creo nuovo
                if (!newValutazione) {
                    newValutazione = new _corsovalutazionelivello_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazioneLivello"]();
                    //Imposto i dati
                    newValutazione.setJSONProperty(element);
                    //Aggiungo alla collection
                    this.CORSOVALUTAZIONELIVELLO.push(newValutazione);
                }
                else {
                    //Reimposto i valori
                    newValutazione.setJSONProperty(element);
                }
            });
        }
    }
    /**
     * Ritorna l'elemento di Corso Valutazione Livello che corrisponde con ID
     */
    getCorsoValutazioneLivelloByID(idCorsoValutazioneLivello) {
        // Ricerco se esiste già
        let findRecord = this.CORSOVALUTAZIONELIVELLO.find(elvalutazioneLivello => {
            return elvalutazioneLivello.ID == idCorsoValutazioneLivello;
        });
        return findRecord;
    }
}


/***/ }),

/***/ "K4nM":
/*!****************************************************!*\
  !*** ./src/app/library/models/mydatetime.model.ts ***!
  \****************************************************/
/*! exports provided: MyDateTime, TypePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDateTime", function() { return MyDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePeriod", function() { return TypePeriod; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptor.model */ "Wz4r");



class MyDateTime {
    //Formatta una data passata in ISO (Solo la parte data)
    static formatDateISO(data) {
        let intMese = data.getMonth() + 1;
        let intGiorno = data.getDate();
        let mese = (intMese > 9) ? (intMese + '') : ('0' + intMese);
        let giorno = (intGiorno > 9) ? (intGiorno + '') : ('0' + intGiorno);
        let format = [data.getFullYear(), mese, giorno].join('-');
        return format;
    }
    //Formatta una data passata in ISO (Data e Ora)
    static formatDateTimeISO(data) {
        let prefixDate = MyDateTime.formatDateISO(data);
        let ore = (data.getHours() > 9) ? (data.getHours() + '') : ('0' + data.getHours());
        let minuti = (data.getMinutes() > 9) ? (data.getMinutes() + '') : ('0' + data.getMinutes());
        let secondi = (data.getSeconds() > 9) ? (data.getSeconds() + '') : ('0' + data.getSeconds());
        let final = prefixDate + ' ' + ore + ':' + minuti + ':' + secondi;
        return final;
    }
    //Formatta un orario passata  (Data e Ora)
    static formatTime(data, withSeconds = false) {
        let ore = (data.getHours() > 9) ? (data.getHours() + '') : ('0' + data.getHours());
        let minuti = (data.getMinutes() > 9) ? (data.getMinutes() + '') : ('0' + data.getMinutes());
        let secondi = (data.getSeconds() > 9) ? (data.getSeconds() + '') : ('0' + data.getSeconds());
        let final = ore + ':' + minuti;
        if (withSeconds) {
            final = final + ':' + secondi;
        }
        return final;
    }
    /**
     *
     * @param data Data
     * @param format Formattazione di moment.js da applicare
     */
    static formatDate(data, maskFormat) {
        //https://momentjs.com/docs/#/displaying/
        return moment__WEBPACK_IMPORTED_MODULE_0__(data).format(maskFormat);
    }
    /**
    * Trasforma la stringa in un oggetto di tipo Data
    * @param strInput data / dataOra / Ora in formato stringa
    */
    static stringToDateObject(strInput) {
        //1 - Devo capire cos'è
        let strDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        let strTime = '00:00:00';
        let timeZone = '+01:00';
        let strComplete = '';
        let dataReturn;
        let arElement;
        arElement = [];
        if (strInput && strInput.length !== 0) {
            //Splitto Data, Ora, TimeZone
            arElement = MyDateTime.splitDateTime(strInput);
            if (arElement[0].length !== 0) {
                strDate = arElement[0];
            }
            if (arElement[1].length !== 0) {
                strTime = arElement[1];
            }
            if (arElement[2].length !== 0) {
                timeZone = arElement[2];
            }
            //Non aggiungere il TimeZone perchè non da errori ma l'uso della proprietà data da problemi
            strComplete = `${strDate}T${strTime}`;
            dataReturn = moment__WEBPACK_IMPORTED_MODULE_0__(strComplete).toDate();
            return dataReturn;
        }
    }
    /**
     *
     * @param strDateTime Stringa di data e ora
     * @param arReturn Separa gli elementi in posizione 0 la data e 1 l'ora
     */
    static splitDateTime(strDateTime) {
        let tipo;
        let strDate = '';
        let strTime = '';
        let strTimeZone = '';
        let arReturn;
        arReturn = [];
        if (strDateTime.length !== 0) {
            if (strDateTime.includes('-') || strDateTime.includes('/')) {
                if (strDateTime.includes(':')) {
                    tipo = _descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime;
                    //Cerchiamo il simbolo T oppure uno spazio
                    strDateTime = strDateTime.replace(' ', 'T');
                    strDateTime = strDateTime.replace('+', 'T');
                    let el = strDateTime.split('T');
                    for (let index = 0; index < el.length; index++) {
                        const element = el[index];
                        switch (index) {
                            case 0:
                                strDate = element;
                                break;
                            case 1:
                                strTime = element;
                                break;
                            case 2:
                                strTimeZone = element;
                                break;
                            default:
                                break;
                        }
                    }
                }
                else {
                    //Solo una data
                    tipo = _descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date;
                    strDate = strDateTime;
                }
            }
            else if (strDateTime.includes(':')) {
                //Solo un orario
                tipo = _descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time;
                strTime = strDateTime;
            }
        }
        arReturn.push(strDate);
        arReturn.push(strTime);
        arReturn.push(strTimeZone);
        return arReturn;
    }
    /**
     * Applica una nuova data all'oggetto applyDataOra mantenendo l'orario
     * @param nuovaData Nuova Data da applicare
     * @param applyDataOra DataOra a cui modificare la data
     */
    static changeDateInTime(nuovaData, applyDataOra) {
        let strDataOra = '';
        let newReturn;
        if (nuovaData && applyDataOra) {
            strDataOra = MyDateTime.formatDateISO(nuovaData);
            let ore = (applyDataOra.getHours() > 9) ? (applyDataOra.getHours() + '') : ('0' + applyDataOra.getHours());
            let minuti = (applyDataOra.getMinutes() > 9) ? (applyDataOra.getMinutes() + '') : ('0' + applyDataOra.getMinutes());
            let secondi = (applyDataOra.getSeconds() > 9) ? (applyDataOra.getSeconds() + '') : ('0' + applyDataOra.getSeconds());
            strDataOra = `${strDataOra}T${ore}:${minuti}:${secondi}`;
            newReturn = moment__WEBPACK_IMPORTED_MODULE_0__(strDataOra).toDate();
        }
        return newReturn;
    }
    /**
     * Controlla se il Range Check cade dentro a min max DateTime
     * Usato per capire le occupazioni
     * @param startCheck Range da controllare (Start Date)
     * @param endCheck Range da controllare (End Date)
     * @param minDateTime
     * @param maxDateTime
     */
    static dateTimeInside(startCheck, endCheck, minDateTime, maxDateTime) {
        // CONTROLLO EFFETTUATO RITORNO TRUE SE:
        // A) FINE IN MEZZO SENZA INIZIO            --> end > min && end <= max
        // oppure B) INIZIO IN MEZZO SENZA FINE     --> start >= min && start < max
        // oppure C) FUORI                          --> start <= min && end >= max
        let result = false;
        //Moment consente di decidere [ uguaglianza o ( esclusione di una data
        if (moment__WEBPACK_IMPORTED_MODULE_0__(endCheck).isBetween(minDateTime, maxDateTime, 'minute', '(]') ||
            moment__WEBPACK_IMPORTED_MODULE_0__(startCheck).isBetween(minDateTime, maxDateTime, 'minute', '[)') ||
            (moment__WEBPACK_IMPORTED_MODULE_0__(startCheck).isSameOrBefore(minDateTime, 'minute') && moment__WEBPACK_IMPORTED_MODULE_0__(endCheck).isSameOrAfter(maxDateTime, 'minute'))) {
            result = true;
        }
        return result;
    }
    /**
     * Calcola il numero di Ore intercorse tra le due date ore
     * @param startDate Data Ora Iniziale (Inferiore)
     * @param endDate Data Ora Finale (Superiore)
     */
    static durataOre(startDate, endDate) {
        let ore = 0;
        if (startDate && endDate) {
            let mStart = moment__WEBPACK_IMPORTED_MODULE_0__(startDate);
            let mEnd = moment__WEBPACK_IMPORTED_MODULE_0__(endDate);
            ore = mEnd.diff(mStart, 'hours', true);
        }
        return ore;
    }
    /**
     * Calcola il numero di Ore intercorse tra le due date ore
     * @param inferiorDate Data Ora Iniziale (Inferiore)
     * @param superiorDate Data Ora Finale (Superiore)
     */
    static durataAnni(inferiorDate, superiorDate) {
        let anni = 0;
        if (inferiorDate && superiorDate) {
            let mStart = moment__WEBPACK_IMPORTED_MODULE_0__(inferiorDate);
            let mEnd = moment__WEBPACK_IMPORTED_MODULE_0__(superiorDate);
            anni = mEnd.diff(mStart, 'years', true);
        }
        return anni;
    }
    /**
     * Aggiungo o sottrae da una data il periodo passato nei parametri
     * @param dateTime Data Ora di partenza
     * @param addOrSub Valore numerico positivo per aggiungere, neghativo per sottrarre
     * @param period Periodo da aggiungere o sottrarre
     */
    static calcola(dateTime, addOrSub, period) {
        let value;
        let dReturn;
        if (dateTime && period) {
            let mDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateTime); //Oggetto di tipo moment
            if (addOrSub < 0) {
                value = addOrSub * -1;
                mDate.subtract(value, period);
            }
            else if (addOrSub > 0) {
                value = addOrSub;
                mDate.add(value, period);
            }
            dReturn = mDate.toDate();
        }
        return dReturn;
    }
    /**
     * Torna un valore della Value List TipoChiusura per indicare la festività
     * @param data Data da controllare
     */
    static getFesta(data) {
        let tipoChiusura;
        let meseGiorno = moment__WEBPACK_IMPORTED_MODULE_0__(data).format('MMDD');
        let dataAngelo;
        let maskAngelo = '';
        let dataPasqua;
        let maskPasqua = '';
        dataPasqua = MyDateTime.calcolaPasqua(data.getFullYear());
        maskPasqua = moment__WEBPACK_IMPORTED_MODULE_0__(dataPasqua).format('MMDD');
        dataAngelo = MyDateTime.calcola(dataPasqua, 1, TypePeriod.days);
        maskAngelo = moment__WEBPACK_IMPORTED_MODULE_0__(dataAngelo).format('MMDD');
        switch (meseGiorno) {
            case '0325':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].aprile25;
                break;
            case '1208':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].dicembre8;
                break;
            case '0815':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].ferragosto;
                break;
            case '0602':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].giugno2;
                break;
            case '0501':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].maggio1;
                break;
            case '1225':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].natale;
                break;
            case '1226':
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].santoStefano;
                break;
            case maskPasqua:
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].pasquaCattolica;
                break;
            case maskAngelo:
                tipoChiusura = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoChiusura"].pasquaCattolica;
                break;
            default:
                tipoChiusura = 0;
                break;
        }
        return tipoChiusura;
    }
    /**
     * Calcola la data di Pasqua per l'anno
     * @param anno Anno
     */
    static calcolaPasqua(anno) {
        let a = 0, b = 0, c = 0, d = 0, e = 0, m = 0, n = 0, giorno = 0, mese = 0;
        if (anno <= 2099) {
            m = 24;
            n = 5;
        }
        else if (anno <= 2199) {
            m = 24;
            n = 6;
        }
        else if (anno <= 2299) {
            m = 25;
            n = 0;
        }
        else if (anno <= 2399) {
            m = 26;
            n = 1;
        }
        else if (anno <= 2499) {
            m = 25;
            n = 1;
        }
        a = anno % 19;
        b = anno % 4;
        c = anno % 7;
        d = ((19 * a) + m) % 30;
        e = ((2 * b) + (4 * c) + (6 * d) + n) % 7;
        if ((d + e) < 10) {
            giorno = d + e + 22;
            mese = 3;
        }
        else {
            giorno = d + e - 9;
            mese = 4;
        }
        if (Math.floor(giorno) == 26 && Math.floor(mese) == 4) {
            giorno = 19;
            mese = 4;
        }
        if (Math.floor(giorno) == 25 && Math.floor(mese) == 4 && d == 20 && e == 6 && a > 10) {
            giorno = 10;
            mese = 4;
        }
        let dataReturn = new Date(anno, Math.floor(mese - 1), Math.floor(giorno));
        return dataReturn;
    }
    /**
     * Con la data passata calcola una data di inizio/fine della settimana
     * o del mese in cui myDate è contenuta
     * @param myDate Data da utilizzare
     * @param based Il calcolo è effettuata per la settimana o il mese
     * @param where Si vuole la data di inizio o fine
     */
    static getStartEndDate(myDate, based, where) {
        let resultDate;
        if (myDate) {
            if (where == 'start') {
                resultDate = moment__WEBPACK_IMPORTED_MODULE_0__(myDate).startOf(based).toDate();
            }
            else if (where == 'end') {
                resultDate = moment__WEBPACK_IMPORTED_MODULE_0__(myDate).endOf(based).toDate();
            }
        }
        return resultDate;
    }
    /**
     * Crea una Data senza l'orario
     * @param myDateTime
     */
    static getOnlyDate(myDateTime) {
        let dateResult;
        dateResult = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(myDateTime).format('YYYY-MM-DD'));
        return dateResult;
    }
}
var TypePeriod;
(function (TypePeriod) {
    TypePeriod["years"] = "y";
    TypePeriod["quarters"] = "Q";
    TypePeriod["months"] = "M";
    TypePeriod["weeks"] = "w";
    TypePeriod["days"] = "d";
    TypePeriod["hours"] = "h";
    TypePeriod["minutes"] = "m";
    TypePeriod["seconds"] = "s";
    TypePeriod["milliseconds"] = "ms";
})(TypePeriod || (TypePeriod = {}));


/***/ }),

/***/ "KG3q":
/*!*******************************************!*\
  !*** ./src/app/services/sport.service.ts ***!
  \*******************************************/
/*! exports provided: SportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportService", function() { return SportService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_sport_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/sport.model */ "A++g");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SportService {
    constructor(apiService) {
        this.apiService = apiService;
        this._listSport = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._listLocationSport = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._loaded = false;
    }
    //Lista di tutti gli sport presenti in Gouego
    get listSport() {
        return this._listSport.asObservable();
    }
    /**
    * Ritorna la lista non in modalità Observable
    */
    get actualListSport() {
        return this._listSport.getValue();
    }
    //Lista degli sport presenti in una location
    get listLocationSport() {
        return this._listLocationSport.asObservable();
    }
    /**
     * Richiede al server l'elenco delle Attività
     * @param config Parametri configurazione chiamata
     */
    request(config, withLivelli) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'SPORT';
            //TODO: Non mi piace molto il modo
            //Nei Parametri imposto il LivelloAutorizzazione
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('LivelloAutorizzazione', '0');
            let myUrl = config.urlBase + '/' + doObject;
            if (withLivelli) {
                //Richiedo di caricare anche i livelli
                myHeaders = myHeaders.append('only-level', '-1');
            }
            /*Non ho ancora caricato dal server*/
            if (!this._loaded) {
                this.apiService
                    .httpGet(myUrl, myHeaders, myParams)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                    return data.SPORT;
                }))
                    .subscribe(resultData => {
                    //Arrivati dal server
                    this._loaded = true;
                    if (resultData) {
                        for (let index = 0; index < resultData.length; index++) {
                            const element = resultData[index];
                            let newSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
                            newSport.setJSONProperty(element);
                            this.add2ListSport(newSport);
                        }
                        resolve(this._listSport);
                    }
                    else {
                        reject('No data Attività retrieved');
                    }
                }, error => {
                    reject(error);
                });
            }
            else {
                //Già caricati dal server
            }
        });
    }
    //Aggiunge una attivita alla lista globale
    add2ListSport(objSport) {
        this.listSport
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collSport => {
            this._listSport.next(collSport.concat(objSport));
        });
    }
    /**
     * Richiede le attività praticate in una location
     * Sottoscriversi all'oggetto listLocationSport per ricevere i risultati
     *
     * @param config Dati configurazione
     * @param idLocation Location
     */
    requestLocationSport(config, idLocation) {
        return new Promise((resolve, reject) => {
            // const myHeaders = new HttpHeaders({'Content-type':'text/plain', 
            //                   'X-HTTP-Method-Override':'getSportLocation', 
            //                   'appid':config.appId,
            //                   'child-level': '1'
            //                   });
            let myHeaders = config.getHttpHeaders();
            const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('idLocation', idLocation);
            const doObject = 'SPORT';
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'getSportLocation');
            myHeaders = myHeaders.append('child-level', '1');
            let myUrl = config.urlBase + '/' + doObject;
            //Svuoto gli attuali
            this._listLocationSport.next([]);
            // Effettuo la chiamata
            return this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.SPORT;
            }))
                .subscribe(resultData => {
                resultData.forEach(element => {
                    let newSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
                    newSport.setJSONProperty(element);
                    this.add2ListLocationSport(newSport);
                });
                resolve(this._listLocationSport);
            }, error => {
                reject(error);
            });
        });
    }
    //Aggiunge una attivita alla lista globale
    add2ListLocationSport(objSport) {
        this.listLocationSport
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collSport => {
            this._listLocationSport.next(collSport.concat(objSport));
        });
    }
    /**
   * Dato l'id di uno sport, restituisce la stringa dell'icona associata
   * @param idSport l'id dello sport
   */
    getIconaSport(idSport) {
        let listSport = this._listSport.getValue();
        let icona = '';
        let docSport;
        if (listSport) {
            //Cerco lo Sport nella collection
            docSport = listSport.find(el => {
                return el.ID == idSport;
            });
            //Sport trovato applico l'icona
            if (!docSport) {
                //Ne creo uno fasullo
                docSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
            }
            //Ricavo l'icona
            icona = docSport.htmlIconHex;
        }
        return icona;
    }
}
SportService.ɵfac = function SportService_Factory(t) { return new (t || SportService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"])); };
SportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SportService, factory: SportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KGuB":
/*!*****************************************!*\
  !*** ./src/app/models/account.model.ts ***!
  \*****************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class Account extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDREF',
            'COGNOME',
            'NOME',
            'NOMINATIVO',
            'EMAIL',
            'WEBLOGIN',
            'SHAPASSWORD',
            'INPUTPASSWORD',
            'MOBILENUMBER',
            'IDAREAOPERATIVA',
            'IDLOCATION'
        ];
        let arNumber = ['RUOLO', 'MANSIONE'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'Account';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ACCOUNT';
        objDescriptor.describeField = 'NOMINATIVO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        return objDescriptor;
    }
}


/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "L1/s":
/*!***********************************************!*\
  !*** ./src/app/models/imdb/slotweek.model.ts ***!
  \***********************************************/
/*! exports provided: SlotWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotWeek", function() { return SlotWeek; });
/* harmony import */ var _slotday_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slotday.model */ "NyLC");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../valuelist.model */ "W8X0");


class SlotWeek {
    constructor() {
        this.SLOTDAYS = [];
        this.SLOTMINUTES = 30;
    }
    /**
     * Creazione dell'array SlotDay con tutte le giornate
     */
    initDays() {
        let arGiorni = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].getArray(_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"]);
        this.SLOTDAYS = [];
        arGiorni.forEach(element => {
            let daySlot = new _slotday_model__WEBPACK_IMPORTED_MODULE_0__["SlotDay"]();
            //Imposto il giorno della settimana
            daySlot.WEEKDAY = element.value;
            this.SLOTDAYS.push(daySlot);
        });
    }
    /**
     * Ritorna uno slotday presente nell'array
     * @param weekDayRequest WeekDay richiesto
     */
    getSlotDay(weekDayRequest) {
        return this.SLOTDAYS.find(element => {
            return element.WEEKDAY == weekDayRequest;
        });
    }
    /**
     * Ritorna una copia di uno SlotDay
     *
     * @param dataGiorno Data richiesta
     * @param changeTimeDate Se impostata a TRUE viene cambiata la data presente negli slottime impostando la data Giorno
     */
    getCopySlotDay(dataGiorno, changeTimeDate) {
        let weekDay = dataGiorno.getDay();
        let myCopySlot;
        let mySlot;
        mySlot = this.SLOTDAYS.find(element => {
            return element.WEEKDAY == weekDay;
        });
        if (mySlot) {
            //Creo un nuovo oggetto e copio tutte le proprietà
            myCopySlot = new _slotday_model__WEBPACK_IMPORTED_MODULE_0__["SlotDay"]();
            myCopySlot.copyFrom(mySlot);
            /* TUTTI GLI SLOTTIMES DEVONO RICEVERE LA STESSA GIORNATA */
            if (changeTimeDate) {
                myCopySlot.changeDateInSlotTime(dataGiorno);
            }
        }
        return myCopySlot;
    }
    /**
     * Crea per ogni giornata, tutti gli slot time
     */
    createSlotTimeDays() {
        //Ciclo sui giorni presenti
        this.SLOTDAYS.forEach(element => {
            element.createSlotTime(this.SLOTMINUTES);
        });
    }
}


/***/ }),

/***/ "LKAN":
/*!*************************************************!*\
  !*** ./src/app/services/occupazioni.service.ts ***!
  \*************************************************/
/*! exports provided: OccupazioniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupazioniService", function() { return OccupazioniService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/occupazionecampi.model */ "0ALl");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class OccupazioniService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
        this._listOccupazioni = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get listOccupazioni() {
        return this._listOccupazioni.asObservable();
    }
    /**
     * Richiede la lista di occupazione campi
     * Senza filtro precedente, imposto la data Inizio da oggi
     * @param filterDocument
     * @param decodeAll
     */
    request(idArea, idLocation, params, top = undefined, fromTime = undefined) {
        let adesso = new Date();
        return new Promise((resolve, reject) => {
            let filterTipo = [];
            //Quando voglio mettere in OR dei valori su un campo, creo un array 
            //e lo passo alla funzione addFilterCondition
            filterTipo.push(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settoreCorso);
            filterTipo.push(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settorePrenotazione);
            let filterDocument = new _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__["OccupazioneCampi"](true);
            filterDocument.DATAINIZIO = adesso;
            // filterDocument.ORAINIZIO = adesso;
            filterDocument.IDAREA = idArea;
            //Aggiungo la condizione speciale per TIPO con dei valori in OR
            filterDocument.addFilterCondition(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_2__["OperatorCondition"].uguale, 'TIPO', filterTipo);
            if (idLocation) {
                filterDocument.IDLOCATION = idLocation;
            }
            if (fromTime) {
                filterDocument.ORAFINE = fromTime;
                filterDocument.addFilterCondition(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_2__["OperatorCondition"].maggiore, 'ORAFINE');
            }
            if (!params) {
                params = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"]();
                params.decode.active = true;
                params.top = top;
            }
            this.docStructureService
                .requestNew(filterDocument, params)
                .then(genericListElements => {
                let listElements = genericListElements;
                listElements.sort((a, b) => {
                    if (a.ORAINIZIO > b.ORAINIZIO) {
                        return 1;
                    }
                    else if (a.ORAINIZIO < b.ORAINIZIO) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                //gli elementi sono ordinati, ma devon controllare che ne siano arrivati davvero il numero giusto (INDE FA CAGARE!!!)
                if (top && listElements.length > top) {
                    //devo tagliare 
                    listElements.splice(top);
                }
                //Riemetto Observable
                this._listOccupazioni.next(listElements);
                //Chiudo la promise
                resolve(listElements);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Richiede i dati occupazione con filtri
     * @param filter Filtro di caricamento
     * @param params Parametri
     * @returns
     */
    requestByFilter(filter, params) {
        return new Promise((resolve, reject) => {
            let myFilter;
            let myParams;
            if (filter) {
                myFilter = filter;
                if (params) {
                    myParams = params;
                }
                else {
                    myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"]();
                    myParams.decode.active = true;
                }
                //abbiamo tutto, possiamo fare la richiesta
                this.docStructureService.requestNew(myFilter, myParams)
                    .then((genericListElements) => {
                    let listElements = genericListElements;
                    listElements.sort((a, b) => {
                        if (a.ORAINIZIO > b.ORAINIZIO) {
                            return 1;
                        }
                        else if (a.ORAINIZIO < b.ORAINIZIO) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    });
                    let arPromises = [];
                    listElements.forEach(elOccupazione => {
                        arPromises.push(this.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 1, elOccupazione));
                    });
                    Promise.all(arPromises)
                        .then(() => {
                        resolve(listElements);
                    })
                        .catch(error => {
                        reject(error);
                    });
                })
                    .catch(error => {
                    reject(error);
                });
            }
            else {
                reject('Documento filtro non definito');
            }
        });
    }
    /**
     * Richiede una singola occupazione cercando per id, se il secondo parametro è true, richiede anche il docprenotazione collegato e lo inserisce nel repository
     * il docprenotazione viene inoltre decodificato, e contiene l'elenco delle pianificazioni; anch'esse decodificate
     * @param idOccupazione id da cercare
     * @param requestRelatedReservation indica se richiedere anche il documento prenotazione collegato e inserirlo nel docrepository
     */
    requestById(idOccupazione, requestRelatedReservation = false) {
        return new Promise((resolve, reject) => {
            //filtro e parametri
            let myFilter = new _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__["OccupazioneCampi"](true);
            let myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"]();
            //controllo di avere un id
            if (idOccupazione && idOccupazione.length > 0) {
                //preparo i parametri
                myFilter.ID = idOccupazione;
                myParams.decode.active = true;
                //faccio la richiesta
                this.docStructureService.requestNew(myFilter, myParams)
                    .then((resultList) => {
                    //se ho ottenuto qualcosa, lo ritorno al prossimo .then
                    if (resultList[0]) {
                        return (resultList[0]);
                    }
                    //altrimenti rigetto
                    else {
                        reject('Nessuna occupazione presente con id indicato');
                    }
                })
                    .then((elOccupazione) => {
                    //adesso che ho l'elemento, se mi è stato chiesto recupero il docprenotazione
                    if (requestRelatedReservation) {
                        this.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 3, elOccupazione)
                            .then(() => {
                            //@ts-ignore
                            let docPrenotazione = elOccupazione.getDocInRepository(elOccupazione.IDREF);
                            //ora devo decodificare la prenotazione e le pianificazioni
                            let reqForeign = _models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__["PrenotazionePianificazione"].getReqForeignKeys();
                            Promise.all([
                                (this.docStructureService.decodeAll(docPrenotazione, true)),
                                (this.docStructureService.decodeCollection(docPrenotazione.PRENOTAZIONEPIANIFICAZIONE, reqForeign))
                            ])
                                .then(() => {
                                resolve(elOccupazione);
                            });
                        })
                            .catch(error => { reject(error); });
                    }
                    else {
                        resolve(elOccupazione);
                    }
                })
                    .catch(error => {
                    reject(error);
                });
            }
            else {
                reject('Id non fornito');
            }
        });
    }
    /**
     * Lista completa di occupazione
     * @param collOccupazione Lista completa di occupazione
     */
    createShortList(collOccupazione) {
        let shortList;
        if (collOccupazione && collOccupazione.length != 0) {
            shortList = collOccupazione.filter((element, index) => {
                return (index < 5);
            });
        }
        else {
            shortList = [];
        }
    }
}
OccupazioniService.ɵfac = function OccupazioniService_Factory(t) { return new (t || OccupazioniService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__["DocstructureService"])); };
OccupazioniService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: OccupazioniService, factory: OccupazioniService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Lk4g":
/*!***********************************************!*\
  !*** ./src/app/models/locaton-image.model.ts ***!
  \***********************************************/
/*! exports provided: LocationImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationImage", function() { return LocationImage; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class LocationImage extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IMAGEURL'];
        let arNumber = [];
        let arBoolean = ['COVERIMAGE'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'LocationImage';
        objDescriptor.classWebApiName = 'LOCATIONIMAGE';
        objDescriptor.doRemote = true;
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        return objDescriptor;
    }
}


/***/ }),

/***/ "M0fm":
/*!*****************************************!*\
  !*** ./src/app/models/impegno.model.ts ***!
  \*****************************************/
/*! exports provided: Impegno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Impegno", function() { return Impegno; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");



class Impegno extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
  * Ritorna il descrittore della Struttura Campi
  */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDREFER',
            'DENOMINAZIONE',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'IDSPORT',
            'IDUTENTE'];
        let arNumber = ['SETTORE'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'Impegno';
        objDescriptor.classWebApiName = 'IMPEGNO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        return objDescriptor;
    }
    static getReqForeignKeys() {
        let arRequest = [];
        let objForeign;
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDAREAOPERATIVA');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDSPORT');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDCAMPO');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDLOCATION');
        objForeign.addDescribeField('DENOMINAZIONE');
        objForeign.addDescribeField('INDIRIZZO');
        arRequest.push(objForeign);
        return arRequest;
    }
}


/***/ }),

/***/ "MFYn":
/*!***********************************************!*\
  !*** ./src/app/models/utentelivello.model.ts ***!
  \***********************************************/
/*! exports provided: UtenteLivello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteLivello", function() { return UtenteLivello; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class UtenteLivello extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDSPORT',
            'IDLIVELLO',
            'DESCRSPORT',
            'DESCRLIVELLO'
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'UtenteLivello';
        objDescriptor.classWebApiName = 'UTENTELIVELLO';
        objDescriptor.doRemote = true;
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDLIVELLO', 'Livello');
        return objDescriptor;
    }
    /**
     * Imposta le proprietà
     * @param data JSON Ricevere
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
    }
}


/***/ }),

/***/ "MO7j":
/*!****************************************************!*\
  !*** ./src/app/models/areapaymentsetting.model.ts ***!
  \****************************************************/
/*! exports provided: AreaPaymentSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPaymentSetting", function() { return AreaPaymentSetting; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");



class AreaPaymentSetting extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREAOPERATIVA',
            'PPACCOUNT',
            'PPCLIENTIDSANDBOX',
            'PPCLIENTIDPRODUCTION',
            'PPCLIENTSECRET',
            'SETTORI',
            'STPUBLICKEY',
            'STPUBLICKEYTEST'
        ];
        let arNumber = ['TIPOPAYMENT', 'PPENVIRONMENT', 'STENVIRONMENT'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'AreaPaymentSetting';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'AREAPAYMENTSETTING';
        objDescriptor.describeField = 'TIPOPAYMENT';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        return objDescriptor;
    }
    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setOriginal();
    }
    /**
     * Dato un Settore di pagamento, ritorna TRUE se il Setting lo contempla
     * @param settore Settore di pagamento
     */
    isFor(settore) {
        let arSettori = [];
        let mySettore = settore + '';
        let incluso = false;
        if (this.SETTORI && this.SETTORI.length != 0) {
            arSettori = this.SETTORI.split(';');
            if (arSettori.includes(mySettore)) {
                incluso = true;
            }
        }
        return incluso;
    }
    /**
    * Ritorna una Icon a seconda del channel
    */
    get icon() {
        let icona = '';
        switch (this.TIPOPAYMENT) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].applePay:
                icona = 'logo-apple';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].bonifico:
                icona = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].googlePay:
                icona = 'logo-google';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].stripe:
                icona = 'card-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal:
                icona = 'logo-paypal';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].onSite:
                icona = 'cash-outline';
                break;
            default:
                break;
        }
        return icona;
    }
    /**
    * Ritorna una Label da mostrare in interfaccia
    */
    get label() {
        let etichetta = '';
        switch (this.TIPOPAYMENT) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].applePay:
                etichetta = 'Apple Pay';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].bonifico:
                etichetta = 'Bonifico';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].googlePay:
                etichetta = 'GPay';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].stripe:
                etichetta = 'Carta di credito';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal:
                etichetta = 'Paypal';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].onSite:
                etichetta = 'Paga in struttura';
                break;
            default:
                break;
        }
        return etichetta;
    }
    //E' possibile pagare con funzionalità dentro all'App
    get paymentInApp() {
        let inApp = false;
        switch (this.TIPOPAYMENT) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].onSite:
                inApp = false;
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal:
                inApp = true;
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].bonifico:
                inApp = false;
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].applePay:
                inApp = false;
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].googlePay:
                inApp = false;
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].stripe:
                inApp = false;
                break;
            default:
                break;
        }
        return inApp;
    }
    /**
     * Imposta al massimo 3 valori di ritorno dal enum PaymentMode
     * pagaStruttura se presente una voce onSite
     * pagaBonifico se presente una voce bonifico
     * pagaAdesso se presente un pagamento elettronico
     *
     * @param arPaymentSettings Elenco Configurazione pagamenti
     */
    static prepareArPaymentMode(arPaymentSettings) {
        let onSite = false;
        let withBonifico = false;
        let electronicPay = false;
        let myElList;
        let arReturn = [];
        if (arPaymentSettings) {
            arPaymentSettings.forEach(element => {
                switch (element.TIPOPAYMENT) {
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].onSite:
                        if (!onSite) {
                            myElList = new _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"](_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentMode"].pagaStruttura, 'Paga in struttura');
                            myElList.itemIcon = 'cash-outline';
                            arReturn.push(myElList);
                        }
                        onSite = true;
                        break;
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].bonifico:
                        if (!withBonifico) {
                            myElList = new _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"](_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentMode"].pagaBonifico, 'Effettua un bonifico');
                            myElList.itemIcon = 'document-text-outline';
                            arReturn.push(myElList);
                        }
                        withBonifico = true;
                        break;
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].applePay:
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].googlePay:
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal:
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].stripe:
                        if (!electronicPay) {
                            myElList = new _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"](_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentMode"].pagaAdesso, 'Paga adesso');
                            myElList.itemIcon = 'card-outline';
                            arReturn.push(myElList);
                        }
                        electronicPay = true;
                        break;
                    default:
                        break;
                }
            });
        }
        return arReturn;
    }
}


/***/ }),

/***/ "MtDR":
/*!*****************************************************!*\
  !*** ./src/app/services/slotoccupazione.service.ts ***!
  \*****************************************************/
/*! exports provided: SlotoccupazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotoccupazioneService", function() { return SlotoccupazioneService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_imdb_slotday_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/imdb/slotday.model */ "NyLC");
/* harmony import */ var _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/dateslotlock.model */ "P2W9");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/log.model */ "Ag5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class SlotoccupazioneService {
    constructor(apiCall) {
        this.apiCall = apiCall;
        this._docOccupazione = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_imdb_slotday_model__WEBPACK_IMPORTED_MODULE_4__["SlotDay"]());
        this.gapHour = 0;
        this.gapMinutes = 0;
    }
    get docOccupazione() {
        return this._docOccupazione.asObservable();
    }
    /**
     * Passando un tempo in minuti imposta il Gap da utilizzare
     * @param minuti Minuti da impostare
     */
    setGapMinutes(minuti) {
        if (minuti && minuti !== 0) {
            this.gapMinutes = minuti;
            this.gapHour = (minuti / 60);
        }
        else {
            this.gapMinutes = 0;
            this.gapHour = 0;
        }
    }
    /**
     * Prende in ingresso il template Slot Day, richiede al server i soli dati di occupazione di un determinato campo per un determinato giorno,
     * sistema il template con le occupazioni e lo riporta come risultato Observable
     *
     *
     * @param config Dati configurazione
     * @param docLocation Location richiesta
     * @param docCampo Campo richiesto
     * @param dataGiorno Giorno richiesto
     */
    request(config, templateSlotDay, docLocation, docCampo, dataGiorno) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'CAMPO';
            const strData = moment__WEBPACK_IMPORTED_MODULE_0__(dataGiorno).format('YYYY-MM-DD');
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'GETDATESLOTLOCK');
            if (docLocation && docCampo) {
                let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('guidArea', docLocation.IDAREAOPERATIVA);
                myParams = myParams.append('guidLocation', docLocation.ID);
                myParams = myParams.append('guidCampo', docCampo.ID);
                myParams = myParams.append('dataGiorno', strData);
                let myUrl = config.urlBase + '/' + doObject;
                this.apiCall
                    .httpGet(myUrl, myHeaders, myParams)
                    .subscribe(resultData => {
                    //Reimposto il Gap dei minuti
                    this.setGapMinutes(docLocation.MINUTIPREAVVISOPRENOTAZIONE);
                    //Ora cerco di sincronizzare il template del giorno con le occupazioni arrivate
                    this.syncResult(resultData, templateSlotDay);
                    resolve();
                }, error => {
                    reject(error);
                });
            }
            else {
                _models_log_model__WEBPACK_IMPORTED_MODULE_8__["LogApp"].consoleLog('Dati Occupazione: RICHIESTA FAILED');
                _models_log_model__WEBPACK_IMPORTED_MODULE_8__["LogApp"].consoleLog('Manca' + (!docLocation ? 'Location' : '') + ' ' + (!docCampo ? 'Campo' : ''));
                this._docOccupazione.next(templateSlotDay);
                reject();
            }
        });
    }
    /**
     *
     * @param resultDataServer Result in arrivo dal server
     * @param templateSlot Template Slot in arrivo dalla videata
     */
    syncResult(resultDataServer, templateSlot) {
        //Converto il risultato in un oggetto reale
        let srvResult = new _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__["DateSlotLock"]();
        let nowMoment;
        let isSlotOccupato;
        srvResult.setJSONProperty(resultDataServer);
        /**Informazioni occupazioni ricevute */
        if (srvResult.RESULT) {
            templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati
            templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;
            /** Ciclo sugli Slot Orari */
            templateSlot.SLOTTIMES.forEach(elSlotTime => {
                //TUTTO CHIUSO
                if (!templateSlot.APERTOCHIUSO) {
                    //Giornata Chiusa
                    elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                }
                else {
                    //Giornata Aperta
                    //Lo Slot ha già una impostazione da Template
                    //Nel caso da template sia CHIUSO non lo cambio
                    if (elSlotTime.STATO !== _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso) {
                        //Ora Attuale
                        nowMoment = moment__WEBPACK_IMPORTED_MODULE_0__();
                        //Lo Slot è nel passato - lo imposto a chiuso
                        if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isSameOrBefore(nowMoment)) {
                            //Lo Slot non è disponibile
                            elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                        }
                        else {
                            //Slot è nel futuro
                            //Controllo se lo Slot è occupato
                            isSlotOccupato = this.slotInServerSlotLock(elSlotTime, srvResult);
                            if (isSlotOccupato) {
                                //E' tra gli slot occupati
                                elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].occupato;
                            }
                            else {
                                //Sembra libero lo SLOT ma controlliamo se c'e' un GAP di Preavviso
                                if (this.gapHour != 0) {
                                    let disponibileDa = nowMoment.add(this.gapHour, 'hours');
                                    //Essendo dopo il preavviso lo segno come libero
                                    if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isAfter(disponibileDa)) {
                                        elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].libero;
                                    }
                                    else {
                                        //Contattare in sede per la disponibilità
                                        elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].contattare;
                                    }
                                }
                                else {
                                    //Non ci sono Gap di preavviso
                                    elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].libero;
                                }
                            }
                        }
                    }
                }
            });
        }
        //Emetto l'evento di cambio
        this._docOccupazione.next(templateSlot);
    }
    /**
   *
   * @param resultDataServer Result in arrivo dal server
   * @param templateSlot Template Slot in arrivo dalla videata
   */
    syncResultOriginale(resultDataServer, templateSlot) {
        //Converto il risultato in un oggetto reale
        let srvResult = new _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__["DateSlotLock"]();
        srvResult.setJSONProperty(resultDataServer);
        /**Informazioni occupazioni ricevute */
        if (srvResult.RESULT) {
            templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati
            templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;
            /** Ciclo sugli Slot Orari */
            templateSlot.SLOTTIMES.forEach(elSlotTime => {
                //TUTTO CHIUSO
                if (!templateSlot.APERTOCHIUSO) {
                    //Giornata Chiusa
                    elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                }
                else {
                    //Giornata Aperta
                    //Lo Slot ha già una impostazione da Template
                    //Nel caso da template sia CHIUSO non lo cambio
                    if (elSlotTime.STATO !== _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso) {
                        //ad Adesso applico un gap di Ore
                        //GAP ORE E' un preavviso
                        let adesso = moment__WEBPACK_IMPORTED_MODULE_0__().add(this.gapHour, 'hours');
                        //Se l'inizio dello Slot è superiore ad adesso
                        if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isAfter(adesso)) {
                            let inSlot = this.slotInServerSlotLock(elSlotTime, srvResult);
                            if (inSlot) {
                                //E' tra gli slot occupati
                                elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].occupato;
                            }
                        }
                        else {
                            //Lo Slot non è disponibile
                            elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                        }
                    }
                }
            });
        }
        //Emetto l'evento di cambio
        this._docOccupazione.next(templateSlot);
    }
    /**
     * Controlla se lo Slot è dentro a quelli Lock arrivati dal server
     * @param docSlot Slot da controllare
     * @param serverSlotLock Slot Bloccati a livello server
     */
    slotInServerSlotLock(docSlot, serverSlotLock) {
        let findInSlotLock = false;
        let result;
        if (serverSlotLock) {
            if (serverSlotLock.TIMELOCK) {
                //Ciclo sugli orari bloccati
                for (let index = 0; index < serverSlotLock.TIMELOCK.length; index++) {
                    const elLock = serverSlotLock.TIMELOCK[index];
                    result = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__["MyDateTime"].dateTimeInside(docSlot.START, docSlot.END, elLock.START, elLock.END);
                    if (result) {
                        //SLOT OCCUPATO
                        findInSlotLock = true;
                        break;
                    }
                }
            }
        }
        return findInSlotLock;
    }
}
SlotoccupazioneService.ɵfac = function SlotoccupazioneService_Factory(t) { return new (t || SlotoccupazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"])); };
SlotoccupazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: SlotoccupazioneService, factory: SlotoccupazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NWOI":
/*!*********************************************!*\
  !*** ./src/app/models/filtercorsi.model.ts ***!
  \*********************************************/
/*! exports provided: FilterCorsi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCorsi", function() { return FilterCorsi; });
// Proprietà per Filtraggio Corsi
class FilterCorsi {
    constructor(idLoc) {
        this.IDLOCATION = idLoc;
        this._CHECKISCRIZIONEAPERTA = false;
    }
}


/***/ }),

/***/ "NyLC":
/*!**********************************************!*\
  !*** ./src/app/models/imdb/slotday.model.ts ***!
  \**********************************************/
/*! exports provided: SlotDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotDay", function() { return SlotDay; });
/* harmony import */ var _slottime_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slottime.model */ "TORv");
/* harmony import */ var _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valuelist.model */ "W8X0");




class SlotDay {
    constructor() {
        this.SLOTTIMES = [];
        this.APERTOCHIUSO = true;
        this._TEMPLATELOCK = true; //Il giorno è ancora bloccato in quanto solo template e non attualizzato (Non posso prenotare nulla ancora)
        this.setStandardTime();
    }
    /**
     * Copia tutte le proprietà dall'oggetto passato
     * @param oldObject Oggetto da cui copiare
     */
    copyFrom(oldObject) {
        this.WEEKDAY = oldObject.WEEKDAY;
        this.STARTTIME = oldObject.STARTTIME;
        this.ENDTIME = oldObject.ENDTIME;
        this.APERTOCHIUSO = oldObject.APERTOCHIUSO;
        this._TEMPLATELOCK = oldObject._TEMPLATELOCK;
        this.SLOTTIMES = [];
        oldObject.SLOTTIMES.forEach(elSlotTime => {
            let slot = new _slottime_model__WEBPACK_IMPORTED_MODULE_0__["SlotTime"](elSlotTime.START, elSlotTime.END);
            slot.selected = elSlotTime.selected;
            slot.STATO = elSlotTime.STATO;
            this.SLOTTIMES.push(slot);
        });
    }
    /**
     * segna come chiusi gli slot che sforano dentro un eventuale periodo intermedio di chiusura
     */
    disableClosedSlots() {
        if (this.STARTMIDDLE && this.ENDMIDDLE) {
            this.SLOTTIMES.forEach(element => {
                if (element.END > this.ENDMIDDLE && element.START < this.STARTMIDDLE) {
                    element.STATO = _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].chiuso;
                }
            });
        }
    }
    /**
     * setta i parametri di un'eventuale chiusura e riapertura intermedia
     * @param chiusura l'orario di chiusura intermedia
     * @param riapertura l'orario di riapertura dopo la chiusura intermedia
     */
    setChiusuraIntermedia(chiusura, riapertura) {
        if (chiusura && riapertura) {
            this.ENDMIDDLE = chiusura;
            this.STARTMIDDLE = riapertura;
        }
    }
    setStandardTime() {
        let adesso = new Date();
        this.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 8, 0, 0);
        this.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 20, 0, 0);
    }
    /**
     * Creazione degli Slot Time
     * @param minutiSlot Minuti di ogni slot
     */
    createSlotTime(minutiSlot) {
        let anno = 0;
        let mese = 0;
        let giorno = 0;
        let oreStart = 0;
        let minutiStart = 0;
        let oreEnd = 0;
        let minutiEnd = 0;
        if (this.APERTOCHIUSO) {
            anno = this.STARTTIME.getFullYear();
            mese = this.STARTTIME.getMonth();
            giorno = this.STARTTIME.getDate();
            oreStart = this.STARTTIME.getHours();
            oreEnd = this.ENDTIME.getHours();
            minutiStart = this.STARTTIME.getMinutes();
            minutiEnd = this.ENDTIME.getMinutes();
            let myData = { anno, mese, giorno };
            let myStart = { ore: oreStart, minuti: minutiStart };
            let myEnd = { ore: oreEnd, minuti: minutiEnd };
            this.SLOTTIMES = _slottime_model__WEBPACK_IMPORTED_MODULE_0__["SlotTime"].getArrayStandardSlot(myData, myStart, myEnd, minutiSlot);
            this.disableClosedSlots();
        }
    }
    /**
     * Imposta tutti i figli SlotTime applicando a START e END lo stesso orario ma sulla data passata
     * @param nuovaData Nuova Data da applicare
     */
    changeDateInSlotTime(nuovaData) {
        if (this.SLOTTIMES) {
            this.SLOTTIMES.forEach(elSlotTime => {
                elSlotTime.changeDateInSlotTime(nuovaData);
            });
        }
    }
    /**
     * Effettua le operazioni per il cambio selezione di uno slot
     * @param idSlotTime SlotTime in cambiamento selection
     */
    changeSelectionSlotTime(actualSlot) {
        let newState;
        let contaSelected;
        let findSlot;
        let findStart;
        let docPianificazione;
        if (actualSlot) {
            newState = !actualSlot.selected; //Il nuovo stato che assumerà lo Slot
            //Se il nuovo stato è disattivare, posso farlo
            if (newState == false) {
                contaSelected = 0;
                findSlot = false;
                //Se prima dello Slot da disattivare ci fossero elementi selezionati, 
                // allora devo disattivare lo slot richiesto e tutti i seguenti
                this.SLOTTIMES.forEach(element => {
                    if (element.ID == actualSlot.ID) {
                        findSlot = true;
                        element.selected = false;
                    }
                    else if (!findSlot && element.selected) {
                        contaSelected++;
                    }
                    else if (findSlot && contaSelected > 0) {
                        element.selected = false;
                    }
                });
            }
            else {
                contaSelected = 0;
                findSlot = false;
                //Se il nuovo Stato è ATTIVARE devo effettuare l'operazione 
                //controllando le altre selezioni
                //Le selezioni massime possono essere solo 2
                this.SLOTTIMES.forEach(element => {
                    //Elemento selezionato
                    if (element.selected) {
                        //Se ne ho già selezionato 1, devo disattivare questo
                        if ((contaSelected >= 1 && !findSlot) || (findSlot && contaSelected !== 1)) {
                            element.selected = false;
                        }
                        else {
                            contaSelected++;
                        }
                    }
                    else if (element.ID == actualSlot.ID) {
                        element.selected = true;
                        findSlot = true;
                        contaSelected++;
                    }
                });
                //Ora se ci sono 2 selezione posso selezionare tutto cio' che sta in mezzo
                if (contaSelected == 2) {
                    findStart = false;
                    let lastIndex = -1;
                    for (let index = 0; index < this.SLOTTIMES.length; index++) {
                        const element = this.SLOTTIMES[index];
                        if (element.selected && findStart) {
                            //Ho finito di selezionare - esco
                            lastIndex = index;
                            break;
                        }
                        else if (element.selected && !findStart) {
                            //Inizia adesso la selezione
                            findStart = true;
                        }
                        else if (findStart) {
                            //Ho trovato l'inizio e non ho ancora finito
                            //Qua in mezzo c'e' qualcosa di chiuso o occupato e quindi mi devo fermare
                            if (element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].chiuso || element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].occupato || element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].contattare) {
                                lastIndex = index;
                                break;
                            }
                            else {
                                element.selected = true;
                            }
                        }
                    }
                    //Tutto quello che sta dopo il lastIndex deve essere disattivato
                    if (lastIndex != -1 && lastIndex < this.SLOTTIMES.length) {
                        for (let index = lastIndex + 1; index < this.SLOTTIMES.length; index++) {
                            const element = this.SLOTTIMES[index];
                            element.selected = false;
                        }
                    }
                }
            }
        }
        //Lo faccio fuori dagli If cosi creo sempre un oggetto
        //Qui cerco di creare un oggetto di PrenotazionePianificazione da restituire
        docPianificazione = this.getPrenotazionePianificazione();
        return docPianificazione;
    }
    getPrenotazionePianificazione() {
        let docPianificazione;
        let findStart = false;
        docPianificazione = new _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__["PrenotazionePianificazione"]();
        /**Devo cercare il primo selezionato e l'ultimo */
        if (this.SLOTTIMES) {
            this.SLOTTIMES.forEach(elSlot => {
                if (elSlot.selected) {
                    if (findStart) {
                        docPianificazione.DATAORAFINE = elSlot.END;
                        //Nel caso lo slot di End sia alle 00:00 allora sono le 00:00 del giorno seguente
                        if (elSlot.END.getHours() == 0 && elSlot.END.getMinutes() == 0) {
                            docPianificazione.DATAORAFINE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].calcola(elSlot.END, 1, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["TypePeriod"].days);
                        }
                        docPianificazione.DURATAORE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].durataOre(docPianificazione.DATAORAINIZIO, docPianificazione.DATAORAFINE);
                    }
                    else {
                        findStart = true;
                        docPianificazione.DATAORAINIZIO = elSlot.START;
                        docPianificazione.DATAORAFINE = elSlot.END;
                        if (elSlot.END.getHours() == 0 && elSlot.END.getMinutes() == 0) {
                            docPianificazione.DATAORAFINE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].calcola(elSlot.END, 1, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["TypePeriod"].days);
                        }
                        docPianificazione.DURATAORE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].durataOre(docPianificazione.DATAORAINIZIO, docPianificazione.DATAORAFINE);
                    }
                }
            });
        }
        return docPianificazione;
    }
    /**
     * Cerca e ritorna uno SlotTime per id
     * @param idSlotTime id dello slottime da ricercare
     */
    findSlotTimeById(idSlotTime) {
        let findSlot;
        if (idSlotTime) {
            findSlot = this.SLOTTIMES.find(element => {
                return element.ID == idSlotTime;
            });
        }
        return findSlot;
    }
}


/***/ }),

/***/ "OH1o":
/*!*****************************************************!*\
  !*** ./src/app/models/start-configuration.model.ts ***!
  \*****************************************************/
/*! exports provided: StartConfiguration, StartAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartConfiguration", function() { return StartConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartAuthorization", function() { return StartAuthorization; });
/* harmony import */ var _gruppo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gruppo.model */ "8jQ+");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StartConfiguration {
    constructor() {
        this._urlComponent = 'COMPGOUEGO';
        this._ready = false;
        this._titleApp = 'Gouego';
        this._companyName = 'Gouego Sport';
        //Immagine Rettangolare
        //Questa è sempre una immagine statica
        this._appUrlLogo = 'assets/img/logoapp.png';
        //Questa è inizialmente come appUrlLogo ma il server puo' mandarcene un'altra
        this._companyUrlLogo = this._appUrlLogo;
        //Immagine Quadrata come ICONA
        //Questa è sempre una immagine statica
        this._appUrlIcon = 'assets/img/iconapp.png';
        //Questa è inizialmente come appUrlIcon ma il server puo' mandarcene un'altra
        this._companyUrlIcon = this._appUrlIcon;
        //AppId gestito dagli eventi dello Start Service
        this._appId = '';
        this._idAreaSelected = '';
    }
    /**
     *
     * @param prefixDomain Prefisso del dominio es (openbeach,demo, localhost)
     * @param testingMode
     */
    setUrlLocation(testingMode = false) {
        if (testingMode == true) {
            //Modalità di test
            //Modalità in locale
            //Protocollo per forza http
            this._urlProtocol = 'http';
            this._urlDomain = 'localhost/gouegoapi';
            this._urlFileServer = 'localhost/gouego';
        }
        else {
            //Non sono in test perchè voglio collegarmi al server, ma da dentro ionic serve
            this._urlProtocol = 'https';
            //Modalità Server
            this._urlDomain = 'api.gouego.com';
            this._urlFileServer = 'app.gouego.com/admin';
        }
    }
    // Utilizzato al termine di una chiamata di 
    // Autorizzazione
    setGruppoAuthorization(responseData) {
        // Inizializzo il Gruppo
        this._gruppo = new _gruppo_model__WEBPACK_IMPORTED_MODULE_0__["Gruppo"]();
        this._gruppo.setJSONProperty(responseData);
        //Ciclo sulle immagini ricevute (se presenti)
        this._gruppo.PRIVATEIMAGE.forEach(elImage => {
            if (elImage.FILENAMEESTENSIONE) {
                switch (elImage.TIPO) {
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoPrivateImage"].icon:
                        this._companyUrlIcon = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoPrivateImage"].logo:
                        this._companyUrlLogo = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                    default:
                        break;
                }
            }
        });
        if (this._gruppo.DENOMINAZIONE) {
            this._companyName = this._gruppo.DENOMINAZIONE;
        }
    }
    get gruppo() {
        return this._gruppo;
    }
    set gruppo(value) {
        this._gruppo = value;
    }
    get idAreaSelected() {
        return this._idAreaSelected;
    }
    set idAreaSelected(value) {
        this._idAreaSelected = value;
    }
    /**
     * Ritorna il logo standard di Gouego
     */
    get appUrlLogo() {
        return this._appUrlLogo;
    }
    set appUrlLogo(value) {
        this._appUrlLogo = value;
    }
    /**
     * Ritorna il logo aziendale
     */
    get companyUrlLogo() {
        return this._companyUrlLogo;
    }
    set companyUrlLogo(value) {
        this._companyUrlLogo = value;
    }
    //#endregion
    //#region Brand Logo Image
    /**
     * Ritorna Icona Rettangolare Standard
     */
    get appUrlIcon() {
        return this._appUrlIcon;
    }
    set appUrlIcon(value) {
        this._appUrlIcon = value;
    }
    /**
     * Ritorna Icona Aziendale
     */
    get companyUrlIcon() {
        return this._companyUrlIcon;
    }
    set companyUrlIcon(value) {
        this._companyUrlIcon = value;
    }
    //#endregion
    /**
     * Ritorna Logo rettangolare da utilizzare
     */
    getUrlLogo() {
        return (this._companyUrlLogo ? this._companyUrlLogo : this._appUrlLogo);
    }
    /**
     * Ritorna una Icona quadrata
     */
    getUrlIcon() {
        return (this._companyUrlIcon ? this._companyUrlIcon : this._appUrlIcon);
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
    }
    get companyName() {
        return this._companyName;
    }
    set companyName(value) {
        this._companyName = value;
    }
    get titleApp() {
        return this._titleApp;
    }
    set titleApp(value) {
        this._titleApp = value;
    }
    get ready() {
        return this._ready;
    }
    set ready(value) {
        this._ready = value;
    }
    // get set appId
    get appId() {
        return this._appId;
    }
    set appId(value) {
        this._appId = value;
    }
    get urlDomain() {
        return this._urlDomain;
    }
    get urlFileServer() {
        let myUrl = `${this._urlProtocol}://${this._urlFileServer}`;
        return myUrl;
    }
    //Url di Base per effettuare la chiamata
    get urlBase() {
        let myUrl = `${this._urlProtocol}://${this._urlDomain}`;
        myUrl = myUrl + '/' + this._urlComponent;
        return myUrl;
    }
    /**
     * Codice autorizzazione Applicazione ottenuto nella fase di
     * shaking iniziale da inviare come authcode ad ogni richiesta
     */
    get authorizationAppCode() {
        return this._authorizationAppCode;
    }
    set authorizationAppCode(value) {
        this._authorizationAppCode = value;
    }
    /**
     * Codice autorizzazione utente ottenuto nella fase di login
     * e da inviare se loggato
     */
    get authorizationUserCode() {
        return this._authorizationUserCode;
    }
    set authorizationUserCode(value) {
        this._authorizationUserCode = value;
    }
    /**
     * Ritorna l'headerHttp da applicare con l'impostazione
     * @param contentType Eventuale content Type da applicare
     */
    getHttpHeaders(contentType) {
        let content = 'application/json';
        if (contentType && contentType.length != 0) {
            content = contentType;
        }
        let myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': content });
        //Se ho l'app-id lo imposto, 
        //altrimenti 
        if (this._appId && this._appId.length != 0) {
            myHeaders = myHeaders.append('appid', this._appId);
        }
        else {
            myHeaders = myHeaders.append('dashrequest', '-1');
        }
        myHeaders = myHeaders.append('fromrequest', 'gouegoapp');
        //Devo inviare il codice di autorizzazione app
        if (this._authorizationAppCode && this._authorizationAppCode.length != 0) {
            myHeaders = myHeaders.append('authcode', this._authorizationAppCode);
        }
        //Devo inviare il codice di autorizazione utente
        if (this._authorizationUserCode && this._authorizationUserCode.length != 0) {
            myHeaders = myHeaders.append('authusercode', this._authorizationUserCode);
        }
        return myHeaders;
    }
}
class StartAuthorization {
    constructor() {
    }
}


/***/ }),

/***/ "Oq6q":
/*!**********************************************!*\
  !*** ./src/app/models/privateimage.model.ts ***!
  \**********************************************/
/*! exports provided: PrivateImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateImage", function() { return PrivateImage; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class PrivateImage extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['FILENAMEESTENSIONE'];
        let arNumber = ['TIPO'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'PrivateImage';
        objDescriptor.doRemote = false;
        objDescriptor.classWebApiName = '';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        return objDescriptor;
    }
}


/***/ }),

/***/ "P2W9":
/*!**********************************************!*\
  !*** ./src/app/models/dateslotlock.model.ts ***!
  \**********************************************/
/*! exports provided: DateSlotLock, TimeLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSlotLock", function() { return DateSlotLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLock", function() { return TimeLock; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class DateSlotLock extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor() {
        super();
        this.RESULT = false;
        this.APERTOCHIUSO = false;
        this.TIMELOCK = [];
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Imposta le collection
     */
    setCollection(data) {
        this.TIMELOCK = [];
        if (data) {
            if (data.TIMELOCK) {
                data.TIMELOCK.forEach(element => {
                    let newTl = new TimeLock();
                    newTl.setJSONProperty(element);
                    this.TIMELOCK.push(newTl);
                });
            }
        }
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['MESSAGE'];
        let arNumber = [];
        let arNumberDecimal = [];
        let arBoolean = ['APERTOCHIUSO', 'RESULT'];
        let arDate = ['DATA'];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['TIMELOCK'];
        objDescriptor.className = 'DateSlotLock';
        objDescriptor.classWebApiName = '';
        objDescriptor.doRemote = false;
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        return objDescriptor;
    }
}
class TimeLock extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor() {
        super();
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = [];
        let arNumber = [];
        let arNumberDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['START', 'END'];
        let arTime = [];
        let arCollection = [];
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        return objDescriptor;
    }
}


/***/ }),

/***/ "PVTr":
/*!************************************************!*\
  !*** ./src/app/models/documentazione.model.ts ***!
  \************************************************/
/*! exports provided: InvioDocumentazione, Documentazione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvioDocumentazione", function() { return InvioDocumentazione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documentazione", function() { return Documentazione; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class InvioDocumentazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
  * Ritorna il descrittore della Struttura Campi
  */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDTIPODOCUMENTAZIONE',
            'FILE',
            'DESCRIZIONE',
            'TOKENUTENTE'];
        objDescriptor.className = 'InvioDocumentazione';
        objDescriptor.doRemote = false;
        objDescriptor.describeField = 'DESCRIZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        return objDescriptor;
    }
}
class Documentazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance = false) {
        super(onlyInstance);
    }
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDUTENTE',
            'IDTIPODOCUMENTAZIONE',
            'DESCRIZIONE',
            'FILENAMEESTENSIONE',
            'FILETYPE'
        ];
        let arBoolean = ['CLIENTUPLOAD'];
        let arDate = ['VALIDOFINO'];
        let arDateTime = ['DATAORACARICAMENTO', 'DATAORAMODIFICA'];
        let arNumber = ['CLASSE'];
        objDescriptor.className = 'Documentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DOCUMENTAZIONE';
        objDescriptor.describeField = 'FILENAMEESTENSIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDTIPODOCUMENTAZIONE', 'TipoDocumentazione');
        return objDescriptor;
    }
}


/***/ }),

/***/ "R2Z1":
/*!*******************************************************!*\
  !*** ./src/app/library/models/requestParams.model.ts ***!
  \*******************************************************/
/*! exports provided: PostParams, RequestParams, RequestDecode, RequestForeign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostParams", function() { return PostParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestParams", function() { return RequestParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDecode", function() { return RequestDecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForeign", function() { return RequestForeign; });
/* harmony import */ var _descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor.model */ "Wz4r");
/* harmony import */ var _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idlibrary.model */ "rEUH");


//Classe con parametri Request POST
class PostParams {
    constructor() {
        this.exportOnlyPropertyModified = false;
        this.exportOnlyDocModified = false;
    }
    /**
     * Controlla se il value contenuto è di tipo basico
     */
    isBasicType() {
        let basic = false;
        let typeVar;
        let arBasicType = [];
        typeVar = _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__["IDLibrary"].getValueType(this.value);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal);
        arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        if (arBasicType.includes(typeVar)) {
            basic = true;
        }
        return basic;
    }
    /**
     * Esporta l'insieme chiave valore come
     * "chiave": valore
     * in formato JSON
     */
    exportJSON() {
        let jsonReturn = '';
        let jsonValue = _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__["IDLibrary"].exportJSONValue(this.value, this.exportOnlyPropertyModified, this.exportOnlyDocModified);
        jsonReturn = `\"${this.key}\":` + jsonValue;
        return jsonReturn;
    }
    /**
     * Dato un oggetto PostParams o un ArrayPostParams controlla
     * che gli elementi siano di tipo basico
     */
    static getBasicTypeFrom(myParams) {
        let basic = false;
        if (myParams) {
            if (Array.isArray(myParams)) {
                basic = true;
                for (let index = 0; index < myParams.length; index++) {
                    const element = myParams[index];
                    if (element.isBasicType() == false) {
                        basic = false;
                        break;
                    }
                }
            }
            else {
                basic = myParams.isBasicType();
            }
        }
        return basic;
    }
    /**
     * Viene creato un oggetto JSON con gli elementi presenti in myParams
     * @param myParams Singolo oggetto PostParams o Array di PostParams
     */
    static getJsonFrom(myParams) {
        let jsonReturn = '';
        if (myParams) {
            if (Array.isArray(myParams)) {
                for (let index = 0; index < myParams.length; index++) {
                    const element = myParams[index];
                    let jsonSingle = element.exportJSON();
                    if (jsonReturn.length !== 0) {
                        jsonReturn += ', ';
                    }
                    jsonReturn += jsonSingle;
                }
            }
            else {
                jsonReturn = myParams.exportJSON();
            }
        }
        jsonReturn = '{' + jsonReturn + '}';
        return jsonReturn;
    }
}
//Classe con parametri da impostare nelle Request di tipo Get
class RequestParams {
    constructor() {
        this.decode = new RequestDecode();
    }
}
/**
 * Classe con la definizione dei parametri di decodifica se richiesta
 */
class RequestDecode {
    //Se non passato vengono decodificati tutti i campi di foreign key con le describeRowFiels,
    //altrimenti è possibile specificare le foreignKey da decodificare
    constructor() {
        this.active = false;
        this.foreignFields = [];
    }
    /**
     * Aggiunge una ForeignKey tra quelle da decodificare
     * Ritorna l'oggetto RequestForeign
     * @param nameField Nome del campo di Foreign Key
     */
    addForeignField(nameField) {
        let docForeign;
        if (nameField && nameField.length !== 0) {
            docForeign = new RequestForeign(nameField);
            this.foreignFields.push(docForeign);
        }
        return docForeign;
    }
}
/**
 * Classe con le foreignKey usate per la decodifica, e se presenti i campi di describe da usare
 */
class RequestForeign {
    constructor(nameField) {
        this.nameField = nameField;
        this.describeFields = [];
    }
    addDescribeField(nameField) {
        if (nameField && nameField.length !== 0) {
            this.describeFields.push(nameField);
        }
    }
}


/***/ }),

/***/ "R5r1":
/*!***************************************!*\
  !*** ./src/app/models/campo.model.ts ***!
  \***************************************/
/*! exports provided: Campo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Campo", function() { return Campo; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _camposport_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camposport.model */ "sbYY");



class Campo extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
  * Ritorna il descrittore della Struttura Campi
  */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREAOPERATIVA',
            'IDLOCATION',
            'IDSPORT',
            'DENOMINAZIONE',
            'DIMENSIONI'
        ];
        let arNumber = ['TIPOLOGIA', 'STRUTTURA'];
        let arNumberDecimal = ['DURATAOREMINIMA'];
        let arBoolean = ['UTILIZZABILE'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['CAMPOSPORT'];
        objDescriptor.className = 'Campo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CAMPO';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        return objDescriptor;
    }
    // Sovrascrivo il metodo IDDocument
    setJSONProperty(data) {
        //Chiamo il metodo IDDocument
        super.setJSONProperty(data);
        //Chiamo il metodo per le collection
        this.setCollection(data);
        this.setOriginal();
    }
    /**
     * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
     * @param data JSON Received
     */
    setCollection(data) {
        // Riazzero e ricreo
        this.CAMPOSPORT = [];
        //Sistemazione Immagini Location
        if (data.CAMPOSPORT) {
            this.setCollectionCampoSport(data);
        }
    }
    /**
     * Inizializza la collection Apertura Location con oggetto tipizzati
     * @param data JSON Received
     */
    setCollectionCampoSport(data) {
        if (data.CAMPOSPORT) {
            data.CAMPOSPORT.forEach(elCampoSport => {
                let newCampoSport = new _camposport_model__WEBPACK_IMPORTED_MODULE_2__["CampoSport"]();
                newCampoSport.setJSONProperty(elCampoSport);
                this.CAMPOSPORT.push(newCampoSport);
            });
        }
    }
    //Aggiunge alla collection un campo Sport
    addCampoSport(docCampoSport) {
        if (!this.CAMPOSPORT) {
            this.CAMPOSPORT = [];
        }
        this.CAMPOSPORT.push(docCampoSport);
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SCCg":
/*!**************************************************!*\
  !*** ./src/app/models/utenteiscrizione.model.ts ***!
  \**************************************************/
/*! exports provided: UtenteIscrizione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteIscrizione", function() { return UtenteIscrizione; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");



class UtenteIscrizione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDCORSO',
            'IDAREAOPERATIVA',
            'DENOMINAZIONECORSO',
            'IDUTENTE',
            'IDSPORT',
            'DENOMINAZIONESPORT',
            'ICONASPORT',
            'IDLOCATION',
            'DENOMINAZIONELOCATION',
            'INDIRIZZOLOCATION',
            'COMUNELOCATION',
            'IDCAMPO',
            'DENOMINAZIONECAMPO',
            'IDTIPOPAGAMENTO',
            'DESCRTIPOPAGAMENTO',
            'CODICEALFA',
            'GIORNIPREVISTI'
        ];
        let arNumber = ['TIPOCORSO', 'ANNOISCRIZIONE', 'CODICEINT', 'STATOISCRIZIONE'];
        let arNumberDecimal = ['IMPORTO', 'VERSATO', 'RESIDUO', 'ORELEZIONE'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO', 'DATAFINE', 'DATAISCRIZIONE'];
        let arDateTime = ['ORAINIZIO'];
        let arTime = [];
        objDescriptor.className = 'UtenteIscrizione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UTENTEISCRIZIONE';
        objDescriptor.describeField = 'DENOMINAZIONECORSO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        return objDescriptor;
    }
    /**
    * Ritorna una icona a seconda del tipo Corso
    */
    getIcon() {
        let nameIcon = 'ribbon';
        switch (this.TIPOCORSO) {
            case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoCorso"].corso:
                nameIcon = 'ribbon';
                break;
            case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoCorso"].prova:
                nameIcon = 'trail-sign';
                break;
            default:
                nameIcon = 'ribbon';
                break;
        }
        return nameIcon;
    }
    /**
    * Ritorna il valore che è necessario pagare
    */
    get amountPayment() {
        let myAmount = 0;
        myAmount = this.RESIDUO;
        return myAmount;
    }
    /**
     * Stato del pagamento in formato testo
     * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
     */
    getCaptionStatePayment(showForPay = false) {
        let caption = '';
        if (this.amountPayment != 0) {
            if (showForPay) {
                caption = 'Paga Ora';
            }
            else {
                caption = 'Corso da pagare';
            }
        }
        else {
            caption = 'Corso pagato';
        }
        return caption;
    }
    /**
     * Ritorna lo Stato del pagamento Iscrizione
     */
    getStatoPagamento() {
        let myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].daPagare;
        if (this.RESIDUO == 0) {
            myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].pagato;
        }
        else if (this.RESIDUO != 0 && this.RESIDUO != this.IMPORTO) {
            myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].pagatoInParte;
        }
        return myStato;
    }
}


/***/ }),

/***/ "SHYz":
/*!******************************************************!*\
  !*** ./src/app/services/utenteiscrizione.service.ts ***!
  \******************************************************/
/*! exports provided: UtenteiscrizioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteiscrizioneService", function() { return UtenteiscrizioneService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/utenteiscrizione.model */ "SCCg");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class UtenteiscrizioneService {
    constructor(apiService) {
        this.apiService = apiService;
        this._listUtenteIscrizione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get listUtenteIscrizione() {
        return this._listUtenteIscrizione.asObservable();
    }
    /**
    * Richiede l'elenco delle Iscrizioni Corsi
    * @param config Dati configurazione
    * @param idUtente Utente che effettua richiesta
    * @param maxRecord Max Record da recuperare
    */
    request(config, idUtente, maxRecord = 0) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('order-by', 'desc');
            //new HttpHeaders({'Content-type':'text/plain'});
            const doObject = 'UTENTEISCRIZIONE';
            const filterDateTime = this.getFilterDateTime();
            let myUrl = config.urlBase + '/' + doObject;
            //Nei Parametri imposto l'area richiesta
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('IDUTENTE', idUtente);
            myParams = myParams.append('DATAISCRIZIONE', filterDateTime);
            myParams = myParams.append('$top', (maxRecord + ''));
            //Elimino gli attuali
            this._listUtenteIscrizione.next([]);
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
                let arReturn = [];
                if (data.UTENTEISCRIZIONE) {
                    arReturn = data.UTENTEISCRIZIONE;
                }
                return arReturn;
            }))
                .subscribe(resultData => {
                for (let index = 0; index < resultData.length; index++) {
                    const element = resultData[index];
                    let newUtenteIscrizione = new _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__["UtenteIscrizione"]();
                    newUtenteIscrizione.setJSONProperty(element);
                    this.addUtenteIscrizione(newUtenteIscrizione);
                }
                resolve(this._listUtenteIscrizione.getValue());
            }, error => {
                reject(error);
            });
        });
    }
    /**
  *
  * @param config Dati configurazione
  * @param idIscrizione ID Iscrizione richiesta
  */
    requestById(config, idIscrizione) {
        return new Promise((resolve, reject) => {
            //let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('order-by', 'desc');
            const doObject = 'UTENTEISCRIZIONE';
            const filterDateTime = this.getFilterDateTime();
            let myUrl = config.urlBase + '/' + doObject;
            //Nei Parametri imposto richiesta
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('ID', idIscrizione);
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
                return data.UTENTEISCRIZIONE;
            }))
                .subscribe(arrData => {
                let docIscrizione = new _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__["UtenteIscrizione"]();
                if (arrData) {
                    if (arrData[0]) {
                        docIscrizione.setJSONProperty(arrData[0]);
                        resolve(docIscrizione);
                    }
                    else {
                        reject('iscrizione inesistente');
                    }
                }
                else {
                    reject('iscrizione inesistente');
                }
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Aggiunge all'elenco una prenotazione dell'utente
     * @param objUtenteIscrizione Prenotazione da aggiungere
     */
    addUtenteIscrizione(objUtenteIscrizione) {
        this.listUtenteIscrizione
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(collUtenteIscrizione => {
            let findElement = collUtenteIscrizione.find(element => {
                return element.ID == objUtenteIscrizione.ID;
            });
            if (!findElement) {
                this._listUtenteIscrizione.next(collUtenteIscrizione.concat(objUtenteIscrizione));
            }
        });
    }
    /**
   * Crea il Parametro Filtro per il campo
   */
    getFilterDateTime() {
        let adesso = new Date();
        let newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
        let startDate = new Date(adesso.getFullYear(), 0, 1);
        let strAdesso = '';
        if (adesso.getMonth() < 6) {
            startDate = new Date((adesso.getFullYear()) - 1, 5, 1);
        }
        strAdesso = newDoc.formatDateTimeISO(startDate);
        strAdesso = '>' + strAdesso;
        return strAdesso;
    }
}
UtenteiscrizioneService.ɵfac = function UtenteiscrizioneService_Factory(t) { return new (t || UtenteiscrizioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"])); };
UtenteiscrizioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UtenteiscrizioneService, factory: UtenteiscrizioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/start.service */ "EXUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_ion_app_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(platform, splashScreen, statusBar, startService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.startService = startService;
        this.showSplash = true;
        this.initializeApp();
    }
    initializeApp() {
        // this.splashScreen.hide(); // Nasconde l'immagine statica
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            this.listenAppReady = this.startService.appReady
                .subscribe(valueReady => {
                if (valueReady) {
                    //Ambiente pronto
                    //Termino lo Splash
                    this.showSplash = false;
                    //Tolgo la sottoscrizione
                    if (this.listenAppReady) {
                        this.listenAppReady.unsubscribe();
                    }
                }
            });
            //Mi Sottoscrivo per ricevere la configurazione
            this.listenStartConfig = this.startService.startConfig
                .subscribe(element => {
                //Memorizzo per la visualizzazione del Menu
                this.startConfig = element;
            });
            // Richiedo l'autorizzazione
            //this.startService.requestStartAuthorization();
            this.startService.settingStartStepOne();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "splash", 4, "ngIf"], [4, "ngIf"], [1, "splash"], [1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ion_app_1_Template, 2, 0, "ion-app", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSplash);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSplash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRouterOutlet"]], styles: [".titleicon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  margin: 0px 0px 0px 0px;\n  display: -webkit-flex;\n  width: 100%;\n  height: 150px;\n  text-align: center;\n}\n.titleicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 150px;\n}\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-back-splash);\n}\n.sk-cube-grid[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: 100px auto;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 33%;\n  background-color: var(--ion-color-primary);\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBSUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBREo7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNRLDBEQUFBO0FBRFo7QUFHRTtFQUNFLDZCQUFBO0VBQ1EscUJBQUE7QUFBWjtBQUNFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQUVaO0FBREU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBSVo7QUFIRTtFQUNFLDZCQUFBO0VBQ1EscUJBQUE7QUFNWjtBQUxFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQVFaO0FBUEU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBVVo7QUFURTtFQUNFLDJCQUFBO0VBQ1EsbUJBQUE7QUFZWjtBQVhFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQWNaO0FBYkU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBZ0JaO0FBZEU7RUFDRTtJQUVVLDJCQUFBO0VBaUJaO0VBaEJJO0lBRVEsMkJBQUE7RUFrQlo7QUFDRjtBQWZFO0VBQ0U7SUFFVSwyQkFBQTtFQWlCWjtFQWhCSTtJQUVRLDJCQUFBO0VBa0JaO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXRsZWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zcGxhc2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2stc3BsYXNoKTtcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0OyBcclxuICB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "TH60":
/*!*****************************************!*\
  !*** ./src/app/models/livello.model.ts ***!
  \*****************************************/
/*! exports provided: Livello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Livello", function() { return Livello; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class Livello extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
    }
    /**
* Ritorna il descrittore della Struttura Campi
*/
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDSPORT',
            'DENOMINAZIONE'
        ];
        let arNumber = ['PROGRESSIONE', 'ETAMINIMA', 'ETAMASSIMA'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'Livello';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'LIVELLO';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDSPORT', 'Sport');
        return objDescriptor;
    }
}


/***/ }),

/***/ "TORv":
/*!***********************************************!*\
  !*** ./src/app/models/imdb/slottime.model.ts ***!
  \***********************************************/
/*! exports provided: SlotTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotTime", function() { return SlotTime; });
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../valuelist.model */ "W8X0");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/models/iddocument.model */ "5usX");




/**
 * Classe che identifica una linea oraria di una prenotazione (slot)
 */
class SlotTime extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_3__["IDDocument"] {
    constructor(inizioTime, fineTime) {
        super();
        this.START = inizioTime;
        this.END = fineTime;
        this.STATO = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoSlot"].libero;
    }
    /** Ritorna un array degli slot da impostare */
    static getArrayStandardSlot(data, start, end, minuteSlot) {
        let arSlots = [];
        let startDate = new Date(data.anno, data.mese, data.giorno, start.ore, start.minuti, 0);
        let endDate = new Date(data.anno, data.mese, data.giorno, end.ore, end.minuti, 0);
        let countWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(startDate);
        let endWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(endDate);
        /** Mentre la data è inferiore o uguale */
        //while (countWrapper.isSameOrBefore(endWrapper)) {
        while (countWrapper.isBefore(endWrapper)) {
            //Al count aggiungo i minuti dello slot
            let endSlotWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(countWrapper.toDate());
            endSlotWrapper.add(minuteSlot, 'm');
            //Creo lo Slot
            let slotBlock = new SlotTime(countWrapper.toDate(), endSlotWrapper.toDate());
            //Aggiungo all'array di ritorno
            arSlots.push(slotBlock);
            //Aumento il Count dei minuti di slot
            countWrapper.add(minuteSlot, 'm');
        }
        return arSlots;
    }
    /**
     * Imposta a START e END l'orario presente ma sulla data passata
     * @param nuovaData Nuova data da applicare
     */
    changeDateInSlotTime(nuovaData) {
        if (nuovaData) {
            if (this.START) {
                //Aggiorno la data 
                this.START = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].changeDateInTime(nuovaData, this.START);
            }
            if (this.END) {
                //Aggiorno la data 
                this.END = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].changeDateInTime(nuovaData, this.END);
            }
        }
    }
}


/***/ }),

/***/ "TP3D":
/*!****************************************************!*\
  !*** ./src/app/models/utenteprenotazione.model.ts ***!
  \****************************************************/
/*! exports provided: UtentePrenotazione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtentePrenotazione", function() { return UtentePrenotazione; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class UtentePrenotazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this.NUMPARTECIPANTI = 1;
        }
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    setCollection(data) {
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDPRENOTAZIONE',
            'IDAREAOPERATIVA',
            'IDUTENTE',
            'IDLOCATION',
            'INDIRIZZOLOCATION',
            'COMUNELOCATION',
            'IDSPORT',
            'DENOMINAZIONESPORT',
            'IDCAMPO',
            'DENOMINAZIONECAMPO'
        ];
        let arNumber = ['NUMPARTECIPANTI'];
        let arNumberDecimal = ['DURATAORE'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
        let arTime = [];
        objDescriptor.className = 'UtentePrenotazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UTENTEPRENOTAZIONE';
        objDescriptor.describeField = 'DATAORAINIZIO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.setRelation('IDPRENOTAZIONE', 'Prenotazione');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
}


/***/ }),

/***/ "Ubxr":
/*!***********************************************!*\
  !*** ./src/app/services/posizione.service.ts ***!
  \***********************************************/
/*! exports provided: PosizioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosizioneService", function() { return PosizioneService; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
class PosizioneService {
    constructor() { }
    /**
     * La funzione restituisce una promise con la posizione attuale
     */
    getCurrentPosition() {
        return Geolocation.getCurrentPosition();
    }
    /**
   * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
   * @param listAree la lista delle aree tra cui cercare
   */
    getNearestArea(listAree) {
        return new Promise((resolve, reject) => {
            let nearestArea;
            //Se ci sono delle aree
            if (listAree && listAree.length != 0) {
                //inizio a salvarmi la prima
                nearestArea = listAree[0];
                //se è solo una ho finito
                if (listAree.length == 1) {
                    resolve(nearestArea);
                }
                else {
                    //se sono almeno due
                    //recupero la posizione attuale
                    this.getCurrentPosition()
                        .then(currentPosition => {
                        //se effettivamento ho la posizione, posso ciclare sull'array
                        for (let index = 1; index < listAree.length; index++) {
                            if (listAree[index].distanceFrom(currentPosition)) {
                                //se è possibile calcolare la distanza per quest'area (sono presenti lat e long)
                                if (listAree[index].distanceFrom(currentPosition) < nearestArea.distanceFrom(currentPosition)) {
                                    //se l'area corrente è più vicina di quella memorizzata, la salvo
                                    nearestArea = listAree[index];
                                }
                            }
                        }
                        //ho finito, posso risolvere
                        resolve(nearestArea);
                    })
                        .catch(error => {
                        //errore, non ho recuperato la posizione
                        reject(error);
                    });
                }
            }
            else {
                //errore, non mi hanno passato le aree
                reject('Errore, lista aree vuota');
            }
        });
    }
}
PosizioneService.ɵfac = function PosizioneService_Factory(t) { return new (t || PosizioneService)(); };
PosizioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PosizioneService, factory: PosizioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "V6dt":
/*!******************************************!*\
  !*** ./src/app/models/location.model.ts ***!
  \******************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locaton-image.model */ "Lk4g");
/* harmony import */ var _campo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campo.model */ "R5r1");
/* harmony import */ var _aperturalocation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aperturalocation.model */ "w5Je");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");






class Location extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this._LISTOCCUPAZIONI = [];
        this.LOCATIONIMAGE = [];
        this.CAMPO = [];
        this.APERTURALOCATION = [];
        if (!onlyInstance) {
            this.ENABLEPRENOTAZIONI = false;
            this.MINUTISLOTPRENOTAZIONE = 30;
            this.MINUTIPREAVVISOPRENOTAZIONE = 0;
            // Imposto una cover standard
            this.setStandardCover();
        }
    }
    /**
* Ritorna il descrittore della Struttura Campi
*/
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["Descriptor"]();
        let arString = ['IDAREAOPERATIVA',
            'DENOMINAZIONE',
            'INDIRIZZO',
            'CAP',
            'COMUNE',
            'PROVINCIA',
            'ISOSTATO',
            'IMAGEURL',
            'DESCRIZIONEMOB',
            'TELEFONO',
            'EMAIL',
            'IDAZIENDACLIENTE'
        ];
        let arNumber = ['MINUTISLOTPRENOTAZIONE', 'MINUTIPREAVVISOPRENOTAZIONE', 'APPVISIBILITY', 'MINUTIPREAVVISODELETEPRENOTAZIONE'];
        let arBoolean = ['FAVORITE', 'ENABLEPRENOTAZIONI', 'ENABLEDELETEPRENOTAZIONI'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['LOCATIONIMAGE', 'CAMPO', 'APERTURALOCATION'];
        objDescriptor.className = 'Location';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'LOCATION';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        return objDescriptor;
    }
    // Sovrascrivo il metodo IDDocument
    setJSONProperty(data) {
        //Chiamo il metodo IDDocument
        super.setJSONProperty(data);
        //Chiamo il metodo per le collection
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Imposta una coverImage standard, eliminando le presenti
     */
    setStandardCover() {
        this.LOCATIONIMAGE = [];
        let standardImage = 'assets/img/cardhome_ge.png';
        //Immagine Cover nell'oggetto
        this.IMAGEURL = standardImage;
        //Creo una immagine standard
        let newImage = new _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__["LocationImage"];
        newImage.COVERIMAGE = true;
        newImage.IMAGEURL = standardImage;
        //Impostazione nell'Array
        this.LOCATIONIMAGE.push(newImage);
    }
    /** Ritorna il percorso da applicare al tag image */
    getUrlImage(tipoSocieta) {
        let returnImage = '';
        if (this.IMAGEURL) {
            returnImage = this.IMAGEURL;
        }
        else {
            if (tipoSocieta) {
                switch (tipoSocieta) {
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoSocieta"].sportiva:
                        returnImage = 'assets/img/cardhome_ss.png';
                        break;
                    case _valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoSocieta"].formazione:
                        returnImage = 'assets/img/cardhome_fo.png';
                        break;
                    default:
                        break;
                }
            }
            else {
                returnImage = 'assets/img/cardhome_ge.png';
            }
        }
        return returnImage;
    }
    /** Ritorna il numero di campi presenti nella Location */
    getNumCampi() {
        let numCampi = 0;
        if (this.CAMPO) {
            numCampi = this.CAMPO.length;
        }
        return numCampi;
    }
    /** Ritorna una copia dell'Array senza l'immagine di Cover */
    imageGallery() {
        return [...this.LOCATIONIMAGE.filter(element => {
                return !element.COVERIMAGE;
            })];
    }
    //#region COLLECTION SETTING
    /**
     * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
     * @param data JSON Received
     */
    setCollection(data) {
        // Riazzero e ricreo le aperture
        this.APERTURALOCATION = [];
        //Sistemazione Immagini Location
        if (data.LOCATIONIMAGE) {
            this.setCollectionLocationImage(data);
        }
        //Sistemazione Aperture Location
        if (data.APERTURALOCATION) {
            this.setCollectionAperturaLocation(data);
        }
        //Sistenazione Campo
        if (data.CAMPO) {
            this.setCollectionCampo(data);
        }
    }
    /**
     * Inizializza la collection CAMPO con i dati ricevuti tipizzando gli oggetti
     * @param data JSON Received
     */
    setCollectionCampo(data) {
        if (data.CAMPO) {
            //Imposto gli elementi CAMPO in stato da eliminare
            //Utilizzando l'oggetto IDCollection
            _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"].setAllDeleting(this.CAMPO);
            // Ciclo sugli elementi arrivati
            data.CAMPO.forEach(elCampo => {
                // Cerco eventualmente il campo
                let docCampo = this.getCampoByID(elCampo.ID);
                //Campo non trovato
                if (!docCampo) {
                    docCampo = new _campo_model__WEBPACK_IMPORTED_MODULE_2__["Campo"]();
                    docCampo.setJSONProperty(elCampo);
                    this.CAMPO.push(docCampo);
                }
                else {
                    //Campo Trovato
                    docCampo.setJSONProperty(elCampo);
                    docCampo.do_deleted = false;
                }
            });
            //Rimozione di tutti gli elementi non cancellati
            this.CAMPO = this.CAMPO.filter(element => {
                return !element.do_deleted;
            });
        }
    }
    /**
     * Inizializza la collection Apertura Location con oggetto tipizzati
     * @param data JSON Received
     */
    setCollectionAperturaLocation(data) {
        if (data.APERTURALOCATION) {
            data.APERTURALOCATION.forEach(elApertura => {
                let newDay = new _aperturalocation_model__WEBPACK_IMPORTED_MODULE_3__["AperturaLocation"]();
                newDay.setJSONProperty(elApertura);
                this.APERTURALOCATION.push(newDay);
            });
        }
    }
    /**
     * Imposta la collection delle LocationImage
     * @param data JSON Received
     */
    setCollectionLocationImage(data) {
        if (data.LOCATIONIMAGE) {
            if (data.LOCATIONIMAGE.length !== 0) {
                //Svuoto l'array
                this.LOCATIONIMAGE = [];
                //Ciclo sulle Location Image arrivate
                data.LOCATIONIMAGE.forEach(elImage => {
                    let newImage = new _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__["LocationImage"]();
                    newImage.setJSONProperty(elImage);
                    this.LOCATIONIMAGE.push(newImage);
                    // Se fosse l'immagine di Cover la imposto nell'oggetto
                    if (newImage.COVERIMAGE) {
                        this.IMAGEURL = newImage.IMAGEURL;
                    }
                });
            }
        }
    }
    //#endregion
    getCampoByID(id) {
        return this.CAMPO.find(element => {
            return element.ID == id;
        });
    }
    /**
     * Cicla su tutti i CAMPI presenti ed elimina
     * le informazioni CAMPOSPORT
     */
    emptyCampiSport() {
        this.CAMPO.forEach(elCampo => {
            elCampo.CAMPOSPORT = [];
        });
    }
    /**
     *
     * @param docCampoSport Campo Sport da aggiungere
     * @param idCampo IDCampo da prelevare
     */
    addCampoSport(docCampoSport, idCampo) {
        this.CAMPO.forEach(elCampo => {
            if (elCampo.ID == idCampo) {
                elCampo.addCampoSport(docCampoSport);
            }
        });
    }
    /**
     * Ritorna l'oggetto Campo che nell'array risulta successivo a quello rappresentato da idCampo
     * Undefined se non ci sono elementi o elementi successivi a quello selezionato
     * @param idCampo IDCampo Attuale
     */
    getNextCampo(idCampo = '') {
        let myCampo;
        let isNext = false;
        if (this.CAMPO) {
            for (let index = 0; index < this.CAMPO.length; index++) {
                const elCampo = this.CAMPO[index];
                //Senza idCampo il primo che trovo va bene
                if (!idCampo) {
                    myCampo = elCampo;
                    break;
                }
                else if (isNext) {
                    //Questo è quello che mi serve
                    myCampo = elCampo;
                    break;
                }
                else if (elCampo.ID == idCampo) {
                    //Sarà il prossimo che devo usare
                    isNext = true;
                }
            }
        }
        return myCampo;
    }
    /**
     * Ritorna un campo partendo dal suo Indice
     * @param indexZeroBase Indice del campo Zero Base
     */
    getCampoByIndex(indexZeroBase) {
        let myCampo;
        if (this.CAMPO) {
            myCampo = this.CAMPO[indexZeroBase];
        }
        return myCampo;
    }
    /**
     * Ritorna l'indirizzo della Location nel formato
     * Indirizzo - Citta
     * @param shortVersion Versione ridotta con Indirizzo se presente, oppure Citta
     */
    getAddressLocation(shortVersion) {
        let value = '';
        if (shortVersion) {
            if (this.INDIRIZZO.length !== 0) {
                value = this.INDIRIZZO;
            }
            else if (this.COMUNE.length !== 0) {
                value = this.COMUNE;
            }
        }
        else {
            if (this.INDIRIZZO.length !== 0) {
                value = this.INDIRIZZO;
            }
            if (this.COMUNE.length !== 0) {
                if (value.length !== 0) {
                    value += ' - ';
                }
                value += this.COMUNE;
            }
        }
        return value;
    }
    /**
     * Cerca nella collection dei campi, verificando se lo Sport passato come parametro, puo' essere
     * giocato e ritorna un Array dei Campi Consentiti
     * @param isSport
     */
    getAvalaibleFields(idSport) {
        let arCampi = [];
        if (idSport) {
            if (this.CAMPO) {
                arCampi = this.CAMPO.filter(el => {
                    let trovato = false;
                    if (el.CAMPOSPORT) {
                        for (const iterator of el.CAMPOSPORT) {
                            if (iterator.IDSPORT == idSport) {
                                trovato = true;
                                break;
                            }
                        }
                    }
                    return trovato;
                });
            }
        }
        return arCampi;
    }
}


/***/ }),

/***/ "Vr4T":
/*!***********************************************!*\
  !*** ./src/app/services/documento.service.ts ***!
  \***********************************************/
/*! exports provided: DocumentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoService", function() { return DocumentoService; });
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DocumentoService {
    constructor(apiCallService) {
        this.apiCallService = apiCallService;
    }
    request(config, fileUrl) {
        let myHeaders;
        //Per ora non dichiaro un tipo (funziona lo stesso)
        //new HttpHeaders({'Content-type':'text/plain'});    
        let myUrl = config.urlFileServer + '/' + fileUrl;
        return this.apiCallService
            .httpGetFile(myUrl, myHeaders)
            .toPromise();
    }
}
DocumentoService.ɵfac = function DocumentoService_Factory(t) { return new (t || DocumentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_0__["ApicallService"])); };
DocumentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DocumentoService, factory: DocumentoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W8X0":
/*!*******************************************!*\
  !*** ./src/app/models/valuelist.model.ts ***!
  \*******************************************/
/*! exports provided: TipoArea, SettoreAttivita, SettorePagamentiAttivita, TipoCampo, TipoCorso, StatoCorso, TipoSocieta, TipoSport, Mansione, Ruolo, TargetSesso, Sesso, Language, Giorni, StrutturaCampo, StatoSlot, TipoPrivateImage, StatoPrenotazione, AmbitoNews, PageType, TipoVerificaAccount, RequestPincodeUse, TipoArticolo, TipoPrezzo, TipoMasterDocumento, TipoChiusura, AttivitaChiusura, StatoPagamento, TipoRigoIncasso, PaymentChannel, PaymentEnvironment, PaymentMode, PaypalStatus, FileType, LocationAppVisibility, ModalitaFruizione, ValueList, Condition, RequestState, SegmentCorsi, StatoIscrizione, Mesi, TimeTrainerCourse, RangeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoArea", function() { return TipoArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettoreAttivita", function() { return SettoreAttivita; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettorePagamentiAttivita", function() { return SettorePagamentiAttivita; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCampo", function() { return TipoCampo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCorso", function() { return TipoCorso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoCorso", function() { return StatoCorso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoSocieta", function() { return TipoSocieta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoSport", function() { return TipoSport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mansione", function() { return Mansione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruolo", function() { return Ruolo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSesso", function() { return TargetSesso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sesso", function() { return Sesso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Giorni", function() { return Giorni; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrutturaCampo", function() { return StrutturaCampo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoSlot", function() { return StatoSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPrivateImage", function() { return TipoPrivateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoPrenotazione", function() { return StatoPrenotazione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbitoNews", function() { return AmbitoNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoVerificaAccount", function() { return TipoVerificaAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPincodeUse", function() { return RequestPincodeUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoArticolo", function() { return TipoArticolo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPrezzo", function() { return TipoPrezzo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMasterDocumento", function() { return TipoMasterDocumento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoChiusura", function() { return TipoChiusura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttivitaChiusura", function() { return AttivitaChiusura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoPagamento", function() { return StatoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoRigoIncasso", function() { return TipoRigoIncasso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentChannel", function() { return PaymentChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentEnvironment", function() { return PaymentEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMode", function() { return PaymentMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalStatus", function() { return PaypalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAppVisibility", function() { return LocationAppVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalitaFruizione", function() { return ModalitaFruizione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueList", function() { return ValueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestState", function() { return RequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentCorsi", function() { return SegmentCorsi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoIscrizione", function() { return StatoIscrizione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesi", function() { return Mesi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrainerCourse", function() { return TimeTrainerCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSearch", function() { return RangeSearch; });
var TipoArea;
(function (TipoArea) {
    TipoArea[TipoArea["areaGruppo"] = 10] = "areaGruppo";
    TipoArea[TipoArea["areaIndipendente"] = 20] = "areaIndipendente";
})(TipoArea || (TipoArea = {}));
var SettoreAttivita;
(function (SettoreAttivita) {
    SettoreAttivita[SettoreAttivita["settoreCorso"] = 10] = "settoreCorso";
    SettoreAttivita[SettoreAttivita["settorePrenotazione"] = 20] = "settorePrenotazione";
    SettoreAttivita[SettoreAttivita["settoreTorneo"] = 30] = "settoreTorneo";
})(SettoreAttivita || (SettoreAttivita = {}));
var SettorePagamentiAttivita;
(function (SettorePagamentiAttivita) {
    SettorePagamentiAttivita[SettorePagamentiAttivita["settorePagamentoCorso"] = 10] = "settorePagamentoCorso";
    SettorePagamentiAttivita[SettorePagamentiAttivita["settorePagamentoPrenotazione"] = 20] = "settorePagamentoPrenotazione";
    SettorePagamentiAttivita[SettorePagamentiAttivita["settorePagamentoTorneo"] = 30] = "settorePagamentoTorneo";
    SettorePagamentiAttivita[SettorePagamentiAttivita["settorePagamentoShop"] = 40] = "settorePagamentoShop";
})(SettorePagamentiAttivita || (SettorePagamentiAttivita = {}));
var TipoCampo;
(function (TipoCampo) {
    TipoCampo[TipoCampo["campo"] = 10] = "campo";
    TipoCampo[TipoCampo["aulaIndividuale"] = 100] = "aulaIndividuale";
    TipoCampo[TipoCampo["aulaMultipla"] = 110] = "aulaMultipla";
    TipoCampo[TipoCampo["sala"] = 200] = "sala";
    TipoCampo[TipoCampo["salone"] = 210] = "salone";
})(TipoCampo || (TipoCampo = {}));
var TipoCorso;
(function (TipoCorso) {
    TipoCorso[TipoCorso["corso"] = 10] = "corso";
    TipoCorso[TipoCorso["prova"] = 20] = "prova";
})(TipoCorso || (TipoCorso = {}));
var StatoCorso;
(function (StatoCorso) {
    StatoCorso[StatoCorso["inserito"] = 10] = "inserito";
    StatoCorso[StatoCorso["inValutazione"] = 20] = "inValutazione";
    StatoCorso[StatoCorso["confermato"] = 30] = "confermato";
    StatoCorso[StatoCorso["iscrizioniAperte"] = 40] = "iscrizioniAperte";
    StatoCorso[StatoCorso["inEsecuzione"] = 50] = "inEsecuzione";
    StatoCorso[StatoCorso["eseguito"] = 60] = "eseguito";
    StatoCorso[StatoCorso["annullato"] = 80] = "annullato";
})(StatoCorso || (StatoCorso = {}));
var TipoSocieta;
(function (TipoSocieta) {
    TipoSocieta[TipoSocieta["sportiva"] = 10] = "sportiva";
    TipoSocieta[TipoSocieta["formazione"] = 20] = "formazione";
})(TipoSocieta || (TipoSocieta = {}));
var TipoSport;
(function (TipoSport) {
    TipoSport[TipoSport["gruppo"] = 10] = "gruppo";
    TipoSport[TipoSport["coppia"] = 20] = "coppia";
    TipoSport[TipoSport["individuale"] = 30] = "individuale";
})(TipoSport || (TipoSport = {}));
var Mansione;
(function (Mansione) {
    Mansione[Mansione["trainer"] = 10] = "trainer";
    Mansione[Mansione["assistenteTrainer"] = 20] = "assistenteTrainer";
    Mansione[Mansione["segreteria"] = 200] = "segreteria";
    Mansione[Mansione["contabile"] = 210] = "contabile";
    Mansione[Mansione["social"] = 220] = "social";
    Mansione[Mansione["custode"] = 230] = "custode";
})(Mansione || (Mansione = {}));
var Ruolo;
(function (Ruolo) {
    Ruolo[Ruolo["admin"] = 1] = "admin";
    Ruolo[Ruolo["super"] = 20] = "super";
    Ruolo[Ruolo["collaboratore"] = 30] = "collaboratore";
    Ruolo[Ruolo["cliente"] = 50] = "cliente";
})(Ruolo || (Ruolo = {}));
var TargetSesso;
(function (TargetSesso) {
    TargetSesso[TargetSesso["maschile"] = 10] = "maschile";
    TargetSesso[TargetSesso["femminile"] = 20] = "femminile";
    TargetSesso[TargetSesso["maschileFemminile"] = 30] = "maschileFemminile";
})(TargetSesso || (TargetSesso = {}));
var Sesso;
(function (Sesso) {
    Sesso[Sesso["maschio"] = 10] = "maschio";
    Sesso[Sesso["femmina"] = 20] = "femmina";
})(Sesso || (Sesso = {}));
var Language;
(function (Language) {
    Language["italiano"] = "ITA";
    Language["inglese"] = "ENG";
    Language["spagnolo"] = "ESP";
    Language["francese"] = "FR";
})(Language || (Language = {}));
var Giorni;
(function (Giorni) {
    Giorni[Giorni["domenica"] = 0] = "domenica";
    Giorni[Giorni["lunedi"] = 1] = "lunedi";
    Giorni[Giorni["martedi"] = 2] = "martedi";
    Giorni[Giorni["mercoledi"] = 3] = "mercoledi";
    Giorni[Giorni["giovedi"] = 4] = "giovedi";
    Giorni[Giorni["venerdi"] = 5] = "venerdi";
    Giorni[Giorni["sabato"] = 6] = "sabato";
})(Giorni || (Giorni = {}));
var StrutturaCampo;
(function (StrutturaCampo) {
    StrutturaCampo[StrutturaCampo["coperto"] = 10] = "coperto";
    StrutturaCampo[StrutturaCampo["scoperto"] = 20] = "scoperto";
    StrutturaCampo[StrutturaCampo["copertoScoperto"] = 30] = "copertoScoperto";
})(StrutturaCampo || (StrutturaCampo = {}));
var StatoSlot;
(function (StatoSlot) {
    StatoSlot[StatoSlot["libero"] = 0] = "libero";
    StatoSlot[StatoSlot["occupato"] = 10] = "occupato";
    StatoSlot[StatoSlot["chiuso"] = 20] = "chiuso";
    StatoSlot[StatoSlot["contattare"] = 21] = "contattare";
})(StatoSlot || (StatoSlot = {}));
var TipoPrivateImage;
(function (TipoPrivateImage) {
    TipoPrivateImage[TipoPrivateImage["logo"] = 10] = "logo";
    TipoPrivateImage[TipoPrivateImage["icon"] = 20] = "icon";
})(TipoPrivateImage || (TipoPrivateImage = {}));
var StatoPrenotazione;
(function (StatoPrenotazione) {
    StatoPrenotazione[StatoPrenotazione["confermata"] = 10] = "confermata";
    StatoPrenotazione[StatoPrenotazione["daConfermare"] = 20] = "daConfermare";
    StatoPrenotazione[StatoPrenotazione["disdetta"] = 30] = "disdetta";
})(StatoPrenotazione || (StatoPrenotazione = {}));
var AmbitoNews;
(function (AmbitoNews) {
    AmbitoNews[AmbitoNews["corso"] = 10] = "corso";
    AmbitoNews[AmbitoNews["prenotazione"] = 20] = "prenotazione";
    AmbitoNews[AmbitoNews["torneo"] = 30] = "torneo";
})(AmbitoNews || (AmbitoNews = {}));
var PageType;
(function (PageType) {
    PageType[PageType["home"] = 10] = "home";
    PageType[PageType["policyPrivacy"] = 20] = "policyPrivacy";
    PageType[PageType["condizioniVenditaPrenotazioni"] = 100] = "condizioniVenditaPrenotazioni";
    PageType[PageType["condizioniVenditaIscrizioni"] = 110] = "condizioniVenditaIscrizioni";
    PageType[PageType["facebook"] = 200] = "facebook";
    PageType[PageType["twitter"] = 210] = "twitter";
    PageType[PageType["instagram"] = 220] = "instagram";
    PageType[PageType["tikTok"] = 230] = "tikTok";
})(PageType || (PageType = {}));
//Questa lista non è presente in Inde ma memorizzata sul db nelle opzioni
var TipoVerificaAccount;
(function (TipoVerificaAccount) {
    TipoVerificaAccount[TipoVerificaAccount["noverifica"] = 0] = "noverifica";
    TipoVerificaAccount[TipoVerificaAccount["verificaemail"] = 10] = "verificaemail";
    TipoVerificaAccount[TipoVerificaAccount["verificasms"] = 20] = "verificasms";
    TipoVerificaAccount[TipoVerificaAccount["verificaemailsms"] = 30] = "verificaemailsms";
})(TipoVerificaAccount || (TipoVerificaAccount = {}));
var RequestPincodeUse;
(function (RequestPincodeUse) {
    RequestPincodeUse[RequestPincodeUse["forRegistration"] = 10] = "forRegistration";
    RequestPincodeUse[RequestPincodeUse["forRecovery"] = 20] = "forRecovery";
    RequestPincodeUse[RequestPincodeUse["forValidation"] = 30] = "forValidation";
})(RequestPincodeUse || (RequestPincodeUse = {}));
var TipoArticolo;
(function (TipoArticolo) {
    TipoArticolo[TipoArticolo["prodotto"] = 10] = "prodotto";
    TipoArticolo[TipoArticolo["servizio"] = 20] = "servizio";
})(TipoArticolo || (TipoArticolo = {}));
var TipoPrezzo;
(function (TipoPrezzo) {
    TipoPrezzo[TipoPrezzo["alNettoDiImposta"] = 10] = "alNettoDiImposta";
    TipoPrezzo[TipoPrezzo["comprensiviDiImposta"] = 20] = "comprensiviDiImposta";
})(TipoPrezzo || (TipoPrezzo = {}));
var TipoMasterDocumento;
(function (TipoMasterDocumento) {
    TipoMasterDocumento[TipoMasterDocumento["preventivo"] = 10] = "preventivo";
    TipoMasterDocumento[TipoMasterDocumento["fattura"] = 500] = "fattura";
    TipoMasterDocumento[TipoMasterDocumento["notaDiCredito"] = 510] = "notaDiCredito";
    TipoMasterDocumento[TipoMasterDocumento["ricevuta"] = 530] = "ricevuta";
})(TipoMasterDocumento || (TipoMasterDocumento = {}));
var TipoChiusura;
(function (TipoChiusura) {
    TipoChiusura[TipoChiusura["rangeDate"] = 10] = "rangeDate";
    TipoChiusura[TipoChiusura["natale"] = 20] = "natale";
    TipoChiusura[TipoChiusura["santoStefano"] = 30] = "santoStefano";
    TipoChiusura[TipoChiusura["pasquaCattolica"] = 40] = "pasquaCattolica";
    TipoChiusura[TipoChiusura["lunediDellAngelo"] = 50] = "lunediDellAngelo";
    TipoChiusura[TipoChiusura["ferragosto"] = 60] = "ferragosto";
    TipoChiusura[TipoChiusura["aprile25"] = 70] = "aprile25";
    TipoChiusura[TipoChiusura["maggio1"] = 80] = "maggio1";
    TipoChiusura[TipoChiusura["dicembre8"] = 90] = "dicembre8";
    TipoChiusura[TipoChiusura["giugno2"] = 100] = "giugno2";
})(TipoChiusura || (TipoChiusura = {}));
var AttivitaChiusura;
(function (AttivitaChiusura) {
    AttivitaChiusura[AttivitaChiusura["tutte"] = -1] = "tutte";
    AttivitaChiusura[AttivitaChiusura["affittoStrutture"] = 10] = "affittoStrutture";
    AttivitaChiusura[AttivitaChiusura["svolgimentoCorsi"] = 20] = "svolgimentoCorsi";
})(AttivitaChiusura || (AttivitaChiusura = {}));
var StatoPagamento;
(function (StatoPagamento) {
    StatoPagamento[StatoPagamento["daPagare"] = 0] = "daPagare";
    StatoPagamento[StatoPagamento["pagatoInParte"] = 10] = "pagatoInParte";
    StatoPagamento[StatoPagamento["pagato"] = 20] = "pagato";
})(StatoPagamento || (StatoPagamento = {}));
var TipoRigoIncasso;
(function (TipoRigoIncasso) {
    TipoRigoIncasso[TipoRigoIncasso["incassato"] = 10] = "incassato";
    TipoRigoIncasso[TipoRigoIncasso["scadenza"] = 20] = "scadenza";
    TipoRigoIncasso[TipoRigoIncasso["abbuono"] = 30] = "abbuono";
    TipoRigoIncasso[TipoRigoIncasso["perdita"] = 40] = "perdita";
})(TipoRigoIncasso || (TipoRigoIncasso = {}));
//Canali dove effettuare il pagamento, compreso onSite in contanti
var PaymentChannel;
(function (PaymentChannel) {
    PaymentChannel[PaymentChannel["onSite"] = 10] = "onSite";
    PaymentChannel[PaymentChannel["bonifico"] = 50] = "bonifico";
    PaymentChannel[PaymentChannel["applePay"] = 200] = "applePay";
    PaymentChannel[PaymentChannel["googlePay"] = 210] = "googlePay";
    PaymentChannel[PaymentChannel["paypal"] = 220] = "paypal";
    PaymentChannel[PaymentChannel["stripe"] = 240] = "stripe";
})(PaymentChannel || (PaymentChannel = {}));
var PaymentEnvironment;
(function (PaymentEnvironment) {
    PaymentEnvironment[PaymentEnvironment["test"] = 10] = "test";
    PaymentEnvironment[PaymentEnvironment["production"] = 20] = "production";
})(PaymentEnvironment || (PaymentEnvironment = {}));
//Si puo' pagare in struttura, pagare subito, o con un bonifico
var PaymentMode;
(function (PaymentMode) {
    PaymentMode[PaymentMode["pagaStruttura"] = 10] = "pagaStruttura";
    PaymentMode[PaymentMode["pagaBonifico"] = 50] = "pagaBonifico";
    PaymentMode[PaymentMode["pagaAdesso"] = 200] = "pagaAdesso";
})(PaymentMode || (PaymentMode = {}));
//Stati possibili a seguito di una richiesta pagamento Paypal
/*
The possible values are:

CREATED. The order was created with the specified context.
SAVED. The order was saved and persisted. The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order.
APPROVED. The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment. For example, a card, bank account, or so on.
VOIDED. All purchase units in the order are voided.
COMPLETED. The payment was authorized or the authorized payment was captured for the order.
PAYER_ACTION_REQUIRED. The order requires an action from the payer (e.g. 3DS authentication). Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of the response prior to authorizing or capturing the order.
*/
var PaypalStatus;
(function (PaypalStatus) {
    PaypalStatus["created"] = "CREATED";
    PaypalStatus["saved"] = "SAVED";
    PaypalStatus["approved"] = "APPROVED";
    PaypalStatus["voided"] = "VOIDED";
    PaypalStatus["completed"] = "COMPLETED";
    PaypalStatus["payer_action_required"] = "PAYER_ACTION_REQUIRED";
})(PaypalStatus || (PaypalStatus = {}));
var FileType;
(function (FileType) {
    FileType["immagini"] = "file-photo-o";
    FileType["video"] = "file-movie-o";
    FileType["audio"] = "file-audio-o";
    FileType["zip"] = "file-archive-o";
    FileType["text"] = "file-text-o";
    FileType["indefinito"] = "file-o";
    FileType["word"] = "file-word-o";
    FileType["excel"] = "file-excel-o";
    FileType["powerpoint"] = "file-powerpoint-o";
    FileType["pdf"] = "file-pdf-o";
})(FileType || (FileType = {}));
//Indica chi puo' visualizzare la location nell'app
//Tutti, Nessuno (Location nascosta), Utenti Specifici (quando la location ha un IDAZIENDACLIENTE, solo gli Utenti legati alla azienda)
var LocationAppVisibility;
(function (LocationAppVisibility) {
    LocationAppVisibility[LocationAppVisibility["tutti"] = -1] = "tutti";
    LocationAppVisibility[LocationAppVisibility["nessuno"] = 0] = "nessuno";
    LocationAppVisibility[LocationAppVisibility["utentiSpecifici"] = -2] = "utentiSpecifici";
})(LocationAppVisibility || (LocationAppVisibility = {}));
var ModalitaFruizione;
(function (ModalitaFruizione) {
    ModalitaFruizione[ModalitaFruizione["inPresenza"] = 10] = "inPresenza";
    ModalitaFruizione[ModalitaFruizione["inRemoto"] = 20] = "inRemoto";
})(ModalitaFruizione || (ModalitaFruizione = {}));
class ValueList {
    /**
     *
     * @param valore Valore Elemento
     * @param descrizione Descrizione
     */
    constructor(valore, descrizione) {
        this.value = valore;
        this.description = descrizione;
        this.selected = false;
    }
    /**
     * Decodifica un valore da una lista valori
     * @param objEnum Lista Valori da utilizzare
     * @param value Valore da decodificare
     */
    static decode(objEnum, value) {
        let label = '';
        // Proprietà presente
        if (objEnum.hasOwnProperty(value)) {
            // Ricavo l'identificativo dato all'Enum
            label = objEnum[value];
            // Ora trasformo la label
            label = ValueList.convert(label);
        }
        return label;
    }
    /**
     * Esempio di utilizzo della decode
     */
    esempioUso() {
        let label = '';
        label = ValueList.decode(SettoreAttivita, SettoreAttivita.settoreCorso);
    }
    /**
     * Preleva una etichetta senza Spazi ma in Camel Mode ed inserisce
     * uno spazio prima di ogni maiuscola
     * @param label Etichetta da convertira
     */
    static convert(label) {
        let retLabel = '';
        let car = '';
        if (label) {
            for (let index = 0; index < label.length; index++) {
                car = label.substring(index, index + 1);
                if (car == car.toUpperCase()) {
                    retLabel = retLabel + ' ';
                }
                if (index === 0) {
                    car = car.toUpperCase();
                }
                retLabel = retLabel + car;
            }
        }
        return retLabel;
    }
    /**
     * Dato un Enum (Lista Valori) Torna un Array con elementi
     * value - description
     * @param objEnum Nome della Lista Valori desiderata
     */
    static getArray(objEnum) {
        let retElements = [];
        Object.keys(objEnum).forEach(key => {
            if (ValueList.isNumber(key) == false) {
                let field = key;
                let value = objEnum[field];
                let decodifica = ValueList.decode(objEnum, value);
                let element = new ValueList(value, decodifica);
                retElements.push(element);
            }
        });
        return retElements;
    }
    /**
     * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
     * @param value Valore da controllare
     */
    static isNumber(value) {
        return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
    }
}
//#region LISTE VALORI INTERNE
//Liste non presenti in GOUEGO
var Condition;
(function (Condition) {
    Condition["uguale"] = "=";
    Condition["maggiore"] = ">";
    Condition["minore"] = "<";
    Condition["diverso"] = "#";
})(Condition || (Condition = {}));
var RequestState;
(function (RequestState) {
    RequestState[RequestState["noRequest"] = 0] = "noRequest";
    RequestState[RequestState["waitingReply"] = 1] = "waitingReply";
    RequestState[RequestState["executed"] = 2] = "executed";
})(RequestState || (RequestState = {}));
var SegmentCorsi;
(function (SegmentCorsi) {
    SegmentCorsi[SegmentCorsi["tutti"] = 10] = "tutti";
    SegmentCorsi[SegmentCorsi["mioLivello"] = 20] = "mioLivello";
})(SegmentCorsi || (SegmentCorsi = {}));
var StatoIscrizione;
(function (StatoIscrizione) {
    StatoIscrizione[StatoIscrizione["confermata"] = -1] = "confermata";
    StatoIscrizione[StatoIscrizione["inProva"] = 0] = "inProva";
})(StatoIscrizione || (StatoIscrizione = {}));
var Mesi;
(function (Mesi) {
    Mesi[Mesi["gennaio"] = 1] = "gennaio";
    Mesi[Mesi["febbraio"] = 2] = "febbraio";
    Mesi[Mesi["marzo"] = 3] = "marzo";
    Mesi[Mesi["aprile"] = 4] = "aprile";
    Mesi[Mesi["maggio"] = 5] = "maggio";
    Mesi[Mesi["giugno"] = 6] = "giugno";
    Mesi[Mesi["luglio"] = 7] = "luglio";
    Mesi[Mesi["agosto"] = 8] = "agosto";
    Mesi[Mesi["settembre"] = 9] = "settembre";
    Mesi[Mesi["ottobre"] = 10] = "ottobre";
    Mesi[Mesi["novembre"] = 11] = "novembre";
    Mesi[Mesi["dicembre"] = 12] = "dicembre";
})(Mesi || (Mesi = {}));
//Identifica un corso rispett ad oggi
var TimeTrainerCourse;
(function (TimeTrainerCourse) {
    TimeTrainerCourse[TimeTrainerCourse["attivi"] = 0] = "attivi";
    TimeTrainerCourse[TimeTrainerCourse["passati"] = -1] = "passati";
    TimeTrainerCourse[TimeTrainerCourse["futuri"] = 1] = "futuri";
})(TimeTrainerCourse || (TimeTrainerCourse = {}));
var RangeSearch;
(function (RangeSearch) {
    RangeSearch[RangeSearch["giorno"] = 10] = "giorno";
    RangeSearch[RangeSearch["settimana"] = 20] = "settimana";
    RangeSearch[RangeSearch["mese"] = 30] = "mese";
})(RangeSearch || (RangeSearch = {}));
//#endregion


/***/ }),

/***/ "WT0H":
/*!****************************************!*\
  !*** ./src/app/models/valuta.model.ts ***!
  \****************************************/
/*! exports provided: Valuta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Valuta", function() { return Valuta; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class Valuta extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'DESCR',
            'SIMBOLO',
            'CODICEISO',
            'ICONPREF'
        ];
        let arNumber = ['NUMDECIMALI'];
        let arBoolean = ['PREDEFINITA'];
        let arDate = ['DATAOBSOLESCENZA'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'Valuta';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'VALUTA';
        objDescriptor.describeField = 'DESCR';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        return objDescriptor;
    }
}


/***/ }),

/***/ "WWZE":
/*!********************************************!*\
  !*** ./src/app/services/utente.service.ts ***!
  \********************************************/
/*! exports provided: UtenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteService", function() { return UtenteService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_utente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/utente.model */ "AN5U");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/models/postResult.model */ "uNYz");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_account_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/account.model */ "KGuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");












class UtenteService {
    constructor(apiService, docService) {
        this.apiService = apiService;
        this.docService = docService;
        this._utente = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]);
        this._utenteLoggato = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._idAreaFAV = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](''); //Avvisa di cambiare l'Area Operativa
        this._userPicture = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    get utente() {
        return this._utente.asObservable();
    }
    get utenteLoggato() {
        return this._utenteLoggato.asObservable();
    }
    get actualLoggato() {
        return this._utenteLoggato.getValue();
    }
    get actualUtente() {
        return this._utente.getValue();
    }
    get userPicture() {
        return this._userPicture.asObservable();
    }
    /**
     * Imposta la UserPicture
     * @param value DataUrl image
     */
    setUserPicture(dataUrl) {
        this._userPicture.next(dataUrl);
    }
    /**
     * Area Favorita dall'utente
     */
    get idAreaFAV() {
        return this._idAreaFAV.asObservable();
    }
    /**
     * Effettua la richiesta al Server con i dati dell'Utente
     * @param config Parametri di configurazione
     * @param username Username Utente
     * @param password Password Utente
     * @param forceIdArea Se impostata, l'area favorita dell'utente diventa questa
     */
    login(username, password, myStartConfig, forceIdArea) {
        return new Promise((resolve, reject) => {
            let myUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
            let jsonBody = '';
            let paramExp = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
            let myAccount = new _models_account_model__WEBPACK_IMPORTED_MODULE_8__["Account"]();
            const method = 'authLoginMob';
            let startConf;
            //Compilo un documento con login e password
            myUtente.WEBLOGIN = username;
            myUtente.INPUTPASSWORD = password;
            //Preparo esportazione
            paramExp.clearDOProperty = true;
            paramExp.clearPKProperty = true;
            paramExp.clearPrivateProperty = true;
            jsonBody = myUtente.exportToJSON(paramExp);
            jsonBody = `{"docUtente" : ${jsonBody}}`;
            //Disattivo il login utente
            this._utenteLoggato.next(false);
            this.docService.requestForFunction(myAccount, method, jsonBody)
                .then((response) => {
                let myUserAuthCode = '';
                //Risposta ricevuta
                if (response.result) {
                    if (response.document) {
                        let docInResponse = response.document;
                        let docUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                        docUtente.setJSONProperty(docInResponse);
                        docUtente.WEBLOGIN = username;
                        docUtente.setOriginal();
                        //Imposto come tag authCode il codice di autorizzazione utente ricevuto
                        docUtente.setTagValue('authCode', response.code);
                        myUserAuthCode = response.code;
                        startConf = myStartConfig.getValue();
                        startConf.authorizationUserCode = response.code;
                        myStartConfig.next(startConf);
                        //Emetto Utente
                        this._utente.next(docUtente);
                        //Emetto il Boolean TRUE di avvenuto accesso
                        this._utenteLoggato.next(true);
                        //Se devo forzare l'area preferita la imposto
                        if (forceIdArea && forceIdArea.length !== 0) {
                            docUtente.IDAREAOPERATIVA = forceIdArea;
                        }
                        //Utente ha una area preferita
                        if (docUtente.IDAREAOPERATIVA) {
                            //Dovrei posizionarlo
                            this._idAreaFAV.next(docUtente.IDAREAOPERATIVA);
                        }
                        //Emetto la risposta del server
                        resolve(response);
                    }
                    else {
                        reject("User document not found");
                    }
                }
                else {
                    reject(response.message);
                }
                //Reimposto authorization code
                startConf = myStartConfig.getValue();
                startConf.authorizationUserCode = response.code;
                myStartConfig.next(startConf);
            })
                .catch(error => {
                //Reimposto authorization code
                startConf = myStartConfig.getValue();
                startConf.authorizationUserCode = '';
                myStartConfig.next(startConf);
                reject(error);
            });
        });
    }
    /**
     * Esecuzione Logoff dell'utente
     */
    logoff() {
        this._utenteLoggato.next(false);
    }
    /**
     * Richiede nuovamente al server i dati dell'utente (esattamente come al login); dopodichè il docutente viene riemesso aggiornato
     * @param authUserCode codice autorizzativo legato all'utente
     */
    updateClientData() {
        return new Promise((resolve, reject) => {
            const method = 'GetActiveUtente'; //Da decidere 
            const document = new _models_account_model__WEBPACK_IMPORTED_MODULE_8__["Account"]();
            //faccio la richiesta
            this.docService.requestForFunction(document, method)
                .then(result => {
                if (result) {
                    let newUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                    newUtente.setJSONProperty(result);
                    this._utenteLoggato.next(true);
                    this._utente.next(newUtente);
                    resolve(newUtente);
                }
                else {
                    throw new Error('Nessuna risposta dal server');
                }
                //recupero l'utente
                //lo metto nella proprietà
                //riemetto il next della proprietà
                //risolvo
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /**
     * Richiede al server l'aggiornamento dei dati Utente
     * @param config Dati di configurazione
     * @param docUtenteUpdate Documento Utente con dati modificati
     */
    requestUpdate(config, docUtenteUpdate) {
        return new Promise((resolve, reject) => {
            const doObject = 'UTENTE';
            const metodo = 'updateUtente';
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            let body = '';
            let myUrl = config.urlBase + '/' + doObject;
            //Body da inviare
            //Questi sono i parametri per l'esportazione
            let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
            paramExport.clearDOProperty = true;
            paramExport.clearPKProperty = false;
            paramExport.clearPrivateProperty = true;
            paramExport.onlyPropertyModified = true;
            body = docUtenteUpdate.exportToJSON(paramExport);
            body = `{"docUtente": ${body}}`;
            //faccio la richiesta
            this.apiService.httpPost(myUrl, myHeaders, myParams, body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(rawResponse => {
                return rawResponse.update;
            })).subscribe(response => {
                let myResponse = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_5__["PostResponse"]();
                myResponse.result = response['result'];
                myResponse.message = response['message'];
                myResponse.document = response['document'];
                if (myResponse.result) {
                    let docUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                    let objDocument = myResponse.getDocument();
                    if (objDocument) {
                        //l'operazione è andata a buon fine, restituisco l'utente
                        docUtente.setJSONProperty(objDocument);
                        this._utente.next(docUtente);
                        resolve(docUtente);
                    }
                    else {
                        reject('Errore ricezione dati server');
                    }
                }
                else {
                    //il server ha risposto, ma l'operazione non è andata a buon fine, restituisco il messaggio di errore
                    reject(response.message);
                }
            }, error => {
                //il server non ha risposto
                reject(error);
            });
        });
    }
    requestChangePassword(config, oldPsw, newPsw) {
        let actualUtente = this._utente.getValue();
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', 'CHANGEPWDMOB');
        //  new HttpHeaders({'Content-type':'application/json',
        //                                    'X-HTTP-Method-Override':'CHANGEPWDMOB',
        //                                    'appid':config.appId
        //                                   });
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('GUIDUTENTE', actualUtente.ID).append('PWDATTUALE', oldPsw).append('PWDNUOVA', newPsw);
        const doObject = 'ACCOUNT';
        let myUrl = config.urlBase + '/' + doObject;
        // Ritorno la chiamata
        return this.apiService
            .httpGet(myUrl, myHeaders, myParams);
    }
    //#region FASI REGISTRAZIONE
    /**
     * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
     * @param config Dati di configurazione
     * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
     */
    registrationSendCodici(config, docRequestCode) {
        //Viene effettuata una chiamata al server per ottenere
        //l'invio di una mail e/o un SMS contenente codici PIN
        const metodo = 'registrationSendCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docRequestCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.activation;
                }))
                    .subscribe((response) => {
                    if (response.result) {
                        resolve(response);
                    }
                    else {
                        reject(response.message);
                    }
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    /**
     * Invia al server una richiesta per verificare i pincode inseriti dall'utente
     * @param config Dati di configurazione
     * @param docVerifyCode Dati da verificare
     */
    registrationVerifyCodici(config, docVerifyCode) {
        const metodo = 'registrationVerifyCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.activation;
                }))
                    .subscribe((response) => {
                    if (response.result) {
                        resolve(response);
                    }
                    else {
                        reject(response.message);
                    }
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    /**
     * Invia al server i dati per completare la registrazione di un account
     * @param config Dati configurazione
     * @param docUtente Utente da registrare
     * @param docRequestCode Documento di Richiesta codici iniziale
     */
    registrationFinalize(config, docUtente, docRequestCode) {
        //Viene inviato al server il documento per chiedere la registrazione utente
        const metodo = 'registrationFinalize';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let bodyUtente = '';
        let bodyFinal = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docRequestCode && docUtente) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyUtente = docUtente.exportToJSON(paramExport);
                bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyFinal)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.activation;
                }))
                    .subscribe((response) => {
                    if (response.result) {
                        resolve(response);
                    }
                    else {
                        reject(response.message);
                    }
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    //#endregion
    //#region  FASI RECUPERO PSW
    /**
     * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
     * @param config Dati di configurazione
     * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
     */
    recoverySendCodici(config, docRequestCode) {
        //Viene effettuata una chiamata al server per ottenere
        //l'invio di una mail e/o un SMS contenente codici PIN
        const metodo = 'recoverySendCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docRequestCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.recovery;
                }))
                    .subscribe((response) => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    /**
      * Invia al server una richiesta per verificare i pincode inseriti dall'utente
      * @param config Dati di configurazione
      * @param docVerifyCode Dati da verificare
      */
    recoveryVerifyCodici(config, docVerifyCode) {
        const metodo = 'recoveryVerifyCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.recovery;
                }))
                    .subscribe((response) => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    /**
     * Invia al server i dati per completare la registrazione di un account
     * @param config Dati configurazione
     * @param docUtente Utente da registrare
     * @param docRequestCode Documento di Richiesta codici iniziale
     */
    recoveryFinalize(config, docUtente, docRequestCode) {
        //Viene inviato al server il documento per chiedere la registrazione utente
        const metodo = 'recoveryFinalize';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let bodyUtente = '';
        let bodyFinal = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docRequestCode && docUtente) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramReqExport);
                //Questi sono i parametri per l'esportazione
                let paramUteExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramUteExport.clearDOProperty = true;
                paramUteExport.clearPKProperty = false;
                paramUteExport.clearPrivateProperty = true;
                bodyUtente = docUtente.exportToJSON(paramUteExport);
                bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyFinal)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.recovery;
                }))
                    .subscribe((response) => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    //#endregion
    //#region VERIFICA CONTATTI
    /**
     * Invia al server la richiesta per inviare via Mail/SMS i codici per la procedura di verifica dei contatti
     * @param config Dati di configurazione
     * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
     */
    validationSendCodici(config, docUtente, docRequestCode) {
        //Viene effettuata una chiamata al server per ottenere
        //l'invio di una mail e/o un SMS contenente codici PIN
        const metodo = 'validationSendCodici';
        // const myHeaders = new HttpHeaders({'Content-type':'application/json',
        //                         'X-HTTP-Method-Override': metodo,
        //                         'appid':config.appId
        //                       });
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let bodyUtente = '';
        let bodyFinal = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docRequestCode) {
                //Questi sono i parametri per l'esportazione
                let paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;
                //Creo il body da inviare
                bodyRequest = docRequestCode.exportToJSON(paramReqExport);
                //Questi sono i parametri per l'esportazione
                let paramUteExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramUteExport.clearDOProperty = true;
                paramUteExport.clearPKProperty = false;
                paramUteExport.clearPrivateProperty = true;
                bodyUtente = docUtente.exportToJSON(paramUteExport);
                bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyFinal)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.validation;
                }))
                    .subscribe((response) => {
                    resolve(response);
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
    /**
    * Invia al server una richiesta per verificare i pincode inseriti dall'utente
    * @param config Dati di configurazione
    * @param docVerifyCode Dati da verificare
    */
    validationVerifyCodici(config, docVerifyCode) {
        const metodo = 'validationVerifyCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';
        let myUrl = config.urlBase + '/' + doObject;
        return new Promise((resolve, reject) => {
            if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramReqExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;
                //Faccio la chiamata POST
                this.apiService
                    .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(received => {
                    return received.validation;
                }))
                    .subscribe((response) => {
                    this.updateClientData()
                        .then(() => {
                        resolve(response);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }, error => {
                    reject(error);
                });
            }
            else {
                reject('Dati mancanti per la richiesta');
            }
        });
    }
}
UtenteService.ɵfac = function UtenteService_Factory(t) { return new (t || UtenteService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"])); };
UtenteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: UtenteService, factory: UtenteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Wz4r":
/*!****************************************************!*\
  !*** ./src/app/library/models/descriptor.model.ts ***!
  \****************************************************/
/*! exports provided: TypeDefinition, TypeReflector, Descriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDefinition", function() { return TypeDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeReflector", function() { return TypeReflector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Descriptor", function() { return Descriptor; });
var TypeDefinition;
(function (TypeDefinition) {
    TypeDefinition["undefined"] = "undefined";
    TypeDefinition["char"] = "String";
    TypeDefinition["date"] = "Date";
    TypeDefinition["dateTime"] = "DateTime";
    TypeDefinition["time"] = "Time";
    TypeDefinition["number"] = "Number";
    TypeDefinition["numberDecimal"] = "Float";
    TypeDefinition["boolean"] = "boolean";
    TypeDefinition["collection"] = "collection";
    TypeDefinition["document"] = "document";
})(TypeDefinition || (TypeDefinition = {}));
/**
* Classe di associazione NomeCampo -> Tipologia
*/
class TypeReflector {
    constructor(campoName, campoType, relDoc, relName) {
        this._fieldName = campoName;
        this._fieldType = campoType;
        this._relFieldDoc = relDoc;
        this._relFieldName = relName;
        //Metto come chiave False, semmai la cambio dopo
        this._primaryKey = false;
        //Se fosse ID lo imposta come chiave primaria
        this._forceIfPrimaryKey();
    }
    get primaryKey() {
        return this._primaryKey;
    }
    set primaryKey(value) {
        this._primaryKey = value;
    }
    get fieldName() {
        return this._fieldName;
    }
    set fieldName(value) {
        this._fieldName = value;
        //Se fosse ID lo imposta come chiave primaria
        this._forceIfPrimaryKey();
    }
    get fieldType() {
        return this._fieldType;
    }
    set fieldType(value) {
        this._fieldType = value;
    }
    /**
 * Forza impostando come primary Key un campo che si chiama ID
 */
    _forceIfPrimaryKey() {
        if (this._fieldName == 'ID') {
            this._primaryKey = true;
        }
    }
    get relFieldDoc() {
        return this._relFieldDoc;
    }
    set relFieldDoc(value) {
        this._relFieldDoc = value;
    }
    get relFieldName() {
        let strReturn = '';
        if (this._relFieldDoc && this._relFieldDoc.length !== 0) {
            if (this._relFieldName && this._relFieldName) {
                strReturn = this._relFieldName;
            }
            else {
                strReturn = 'ID';
            }
        }
        return strReturn;
    }
    set relFieldName(value) {
        this._relFieldName = value;
    }
    /**
     * Ritorna TRUE se il campo è parte di un servizio Documentale
     * ID, do_deleted etc...
     */
    serviceField() {
        let value = false;
        let arServizi = ['ID', 'do_updated', 'do_loaded', 'do_inserted', 'do_deleted'];
        if (arServizi.includes(this._fieldName)) {
            value = true;
        }
        return value;
    }
    /**
     * Ritorna TRUE se il campo è un campo presente anche sul server
     */
    nativeField() {
        let value = true;
        if (this._fieldName.substr(0, 1) == '_') {
            // I campi che iniziano con _ sono privati di solito di Lookup
            value = false;
        }
        return value;
    }
    /**
     * Controlla e indica se ha una relazione il campo
     */
    get isForeignKey() {
        let result = false;
        if (this._relFieldDoc) {
            result = true;
        }
        return result;
    }
}
/**
 * Classe per Tipizzare intere classi
 */
class Descriptor {
    constructor() {
        this.fields = [];
        this._doRemote = false;
        this.add('ID', TypeDefinition.char);
        this.add('do_updated', TypeDefinition.boolean);
        this.add('do_loaded', TypeDefinition.boolean);
        this.add('do_inserted', TypeDefinition.boolean);
        this.add('do_deleted', TypeDefinition.boolean);
    }
    get className() {
        return this._className;
    }
    set className(value) {
        this._className = value;
        if (!this._classWebApiName || this._classWebApiName.length == 0) {
            this._classWebApiName = value;
        }
    }
    get classWebApiName() {
        return this._classWebApiName;
    }
    set classWebApiName(value) {
        this._classWebApiName = value;
    }
    get describeField() {
        return this._describeField;
    }
    set describeField(value) {
        this._describeField = value;
    }
    get doRemote() {
        return this._doRemote;
    }
    set doRemote(value) {
        this._doRemote = value;
    }
    /**
     * Ritorna un array con i campi foreignkey
     */
    get foreignKeys() {
        let arForeign = [];
        if (this.fields) {
            for (let index = 0; index < this.fields.length; index++) {
                const element = this.fields[index];
                const isForeign = element.isForeignKey;
                if (isForeign) {
                    arForeign.push(element);
                }
            }
        }
        return arForeign;
    }
    /**
     * Ritorna il nome della chiave primaria se presente
     */
    get primaryKeyFieldName() {
        let field;
        let fieldName = '';
        field = this.fields.find(elField => {
            return (elField.primaryKey == true);
        });
        if (field) {
            fieldName = field.fieldName;
        }
        return fieldName;
    }
    /**
     * Aggiunge un Campo/Tipo all'insieme
     * @param campoName Nome Campo
     * @param campoType Tipo Campo
     */
    add(campoName, campoType, relDoc, relField) {
        let typeR = new TypeReflector(campoName, campoType, relDoc, relField);
        //Se non esiste lo aggiungo
        if (this.hasFieldName(campoName) == false) {
            this.fields.push(typeR);
        }
    }
    /**
     * Ricerca tra i campi quello denominato fieldName e ne setta una relazione con
     * relDoc grazie a relFieldName
     * @param fieldName
     * @param relDoc
     * @param relFieldName
     */
    setRelation(fieldName, relDoc, relFieldName) {
        let findField = this.fields.find(el => {
            return el.fieldName == fieldName;
        });
        if (findField) {
            findField.relFieldName = relFieldName;
            findField.relFieldDoc = relDoc;
        }
    }
    /**
     * Aggiunge un array di NomiCampo alla stessa tipologia
     * @param arrayCampoName Array con tutti nomi dei campi
     * @param campoType Tipologia da associare
     */
    addMultiple(arrayCampoName, campoType) {
        if (arrayCampoName) {
            arrayCampoName.forEach(element => {
                this.add(element, campoType);
            });
        }
    }
    /**
     * Aggiunge una collection alla struttura
     * @param collectionName Nome Collection
     * @param relDoc Riferimento ai documenti contenuti nella collection
     * @param relFieldName Nome campo nel documento di riferimento che crea il legame
     */
    addCollection(collectionName, relDoc, relFieldName) {
        let newField;
        if (collectionName) {
            if (this.hasCollection(collectionName) == false) {
                newField = new TypeReflector(collectionName, TypeDefinition.collection);
                newField.relFieldDoc = relDoc;
                newField.relFieldName = relFieldName;
                this.fields.push(newField);
            }
        }
    }
    /**
     * Con un nome campo torna la tipologia associata
     * @param campoName Nome del Campo
     */
    getType(campoName) {
        let retType = TypeDefinition.undefined;
        let elType = this.fields.find(element => {
            return element.fieldName == campoName;
        });
        if (elType) {
            retType = elType.fieldType;
        }
        return retType;
    }
    /**
     * Cerca e ritorna il campo per fieldName
     * @param fieldName Nome del campo
     */
    getByFieldName(fieldName) {
        return this.fields.find(el => {
            return el.fieldName == fieldName;
        });
    }
    /**
     * Ritorna se presente una collection passata come parametro
     * @param collectionName Nome Collection
     */
    getByCollectionName(collectionName) {
        let collFind;
        collFind = this.fields.find(elField => {
            return (elField.fieldName == collectionName && elField.fieldType == TypeDefinition.collection);
        });
        return collFind;
    }
    /**
     * Controlla che la collection passata come parametro esista nel documento
     * @param collectionName Nome Collection
     */
    hasCollection(collectionName) {
        let exist = false;
        let collFind;
        collFind = this.fields.find(elField => {
            return (elField.fieldName == collectionName && elField.fieldType == TypeDefinition.collection);
        });
        if (collFind) {
            exist = true;
        }
        return exist;
    }
    /**
   * Controlla che la collection passata come parametro esista nel documento
   * @param collectionName Nome Collection
   */
    hasFieldName(fieldName) {
        let exist = false;
        let fieldFind;
        fieldFind = this.fields.find(elField => {
            return (elField.fieldName == fieldName);
        });
        if (fieldFind) {
            exist = true;
        }
        return exist;
    }
}


/***/ }),

/***/ "X/Aa":
/*!******************************************!*\
  !*** ./src/app/models/ricevuta.model.ts ***!
  \******************************************/
/*! exports provided: MasterDocumento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDocumento", function() { return MasterDocumento; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class MasterDocumento extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance = false) {
        super(onlyInstance);
    }
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDANAGRAFICA',
            'NOTESSTAMPA',
            'IDVALUTA',
            'SERIE',
            'NUMEROSTAMPA'
        ];
        let arBoolean = [];
        let arDate = ['DATADOCUMENTO'];
        let arDateTime = [];
        let arNumber = ['NUMERODOCUMENTO', 'TOTDOCUMENTO', 'TIPOLOGIA', 'ANNO'];
        objDescriptor.className = 'MasterDocumento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'MASTERDOCUMENTO';
        objDescriptor.describeField = 'NOTESSTAMPA';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        return objDescriptor;
    }
}


/***/ }),

/***/ "YbkB":
/*!************************************************!*\
  !*** ./src/app/services/newseventi.service.ts ***!
  \************************************************/
/*! exports provided: NewseventiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewseventiService", function() { return NewseventiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_newsevento_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/newsevento.model */ "h27B");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class NewseventiService {
    constructor(apiService) {
        this.apiService = apiService;
        this._listNews = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get listNews() {
        return this._listNews.asObservable();
    }
    /**
     * Aggiunge una news
     * @param objNews News da aggiungere
     */
    addNews(objNews) {
        this.listNews
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collNews => {
            let findElement = collNews.find(element => {
                return element.ID == objNews.ID;
            });
            if (!findElement) {
                this._listNews.next(collNews.concat(objNews));
            }
        });
    }
    /**
     * Crea il Parametro Filtro per il campo PUBBLICATADAL
     */
    getFilterDateTime() {
        let adesso = new Date();
        let newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
        let strAdesso = newDoc.formatDateTimeISO(adesso);
        strAdesso = '<' + strAdesso;
        return strAdesso;
    }
    /** Recupera una News e la torna Observable,
     *
     * @param config Configurazione
     * @param idNews News ricercata
     * */
    getNewsById(idNews) {
        let news = this._listNews
            .getValue()
            .find(element => {
            return (element.ID == idNews);
        });
        return news;
    }
    /**
     * Richiede al server la news
     * @param config Dati configurazione
     * @param idNews News da richiedere al server
     */
    _requestServerById(config, idNews) {
        let myHeaders = config.getHttpHeaders();
        //new HttpHeaders({'Content-type':'text/plain'});
        const doObject = 'NEWSEVENTO';
        let myUrl = config.urlBase + '/' + doObject;
        //Nei Parametri imposto l'area richiesta
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idNews);
        return this.apiService
            .httpGet(myUrl, myHeaders, myParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            let arReturn = [];
            if (data.NEWSEVENTO) {
                arReturn = data.NEWSEVENTO;
            }
            return arReturn;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    /**
     *
     * @param config Parametri di configurazione
     * @param guidArea GUID Area di riferimento
     * @param n Numero massimo di elementi
     * @returns Promise<NewsEvento[]>
     */
    request(config, guidArea, n) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'NEWSEVENTO';
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'GETNEXTNEWS');
            let myUrl = config.urlBase + '/' + doObject;
            //Nei Parametri imposto l'area richiesta
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('guidArea', guidArea);
            myParams = myParams.append('$top', n + '');
            this.apiService.httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                let arReturn = [];
                if (data.NEWSEVENTO) {
                    arReturn = data.NEWSEVENTO;
                }
                return arReturn;
            }))
                .subscribe(myListReceived => {
                let myListNews = [];
                for (let index = 0; index < myListReceived.length; index++) {
                    const objElement = myListReceived[index];
                    //Creo un nuovo oggetto
                    let newsEvento = new _models_newsevento_model__WEBPACK_IMPORTED_MODULE_4__["NewsEvento"]();
                    //Copio le proprietà
                    newsEvento.setJSONProperty(objElement);
                    //Inserisco nell'array
                    myListNews.push(newsEvento);
                }
                //La Promise ritorna l'elenco news
                resolve(myListNews);
            }, error => {
                reject(error);
            });
        });
    }
}
NewseventiService.ɵfac = function NewseventiService_Factory(t) { return new (t || NewseventiService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"])); };
NewseventiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: NewseventiService, factory: NewseventiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/it */ "1IWC");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _library_services_crypto_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./library/services/crypto.service */ "1pu4");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "te5A");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default.a, 'it');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'it' },
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
        _library_services_crypto_service__WEBPACK_IMPORTED_MODULE_15__["CryptoService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"]
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"]] }); })();


/***/ }),

/***/ "b5Gy":
/*!*****************************************************!*\
  !*** ./src/app/models/pianificazionecorso.model.ts ***!
  \*****************************************************/
/*! exports provided: PianificazioneCorso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianificazioneCorso", function() { return PianificazioneCorso; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _corsopresenze_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corsopresenze.model */ "vl3Y");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");






class PianificazioneCorso extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.CORSOPRESENZE = [];
    }
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        //Imposto la collection
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    /**
     * Sistema le collection se presenti
     * @param data JSON Ricevuto
     */
    setCollection(data) {
        this.CORSOPRESENZE = [];
        if (data.CORSOPRESENZE) {
            this.setCollectionCorsoPresenze(data.CORSOPRESENZE);
        }
    }
    /**
     * Imposta la collection CorsoPresenze
     * @param arPresenze JSON Ricevuti
     */
    setCollectionCorsoPresenze(arPresenze) {
        this.CORSOPRESENZE = [];
        if (arPresenze) {
            arPresenze.forEach(element => {
                // Ricerco se esiste già
                let newProgramma = new _corsopresenze_model__WEBPACK_IMPORTED_MODULE_3__["CorsoPresenze"]();
                newProgramma.setJSONProperty(element);
                this.CORSOPRESENZE.push(newProgramma);
            });
        }
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDCORSO',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'NOTEADMIN',
            'NOTETRAINER'
        ];
        let arNumber = ['VALUEGIORNO', 'ORELEZIONE'];
        let arBoolean = ['MULTIPLA'];
        let arDate = ['DATA'];
        let arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
        let arTime = ['ORAINIZIO'];
        objDescriptor.className = 'PianificazioneCorso';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PIANIFICAZIONECORSO';
        objDescriptor.describeField = 'DATA';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addCollection('CORSOPRESENZE', 'CorsoPresenze', 'IDPIANIFICAZIONECORSO');
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
    static getReqForeignKeys() {
        let arRequest = [];
        let objForeign;
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDAREAOPERATIVA');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDSPORT');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDCAMPO');
        arRequest.push(objForeign);
        objForeign = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__["RequestForeign"]('IDLOCATION');
        objForeign.addDescribeField('DENOMINAZIONE');
        objForeign.addDescribeField('INDIRIZZO');
        objForeign.addDescribeField('COMUNE');
        objForeign.addDescribeField('EMAIL');
        arRequest.push(objForeign);
        return arRequest;
    }
    /**
     * Ritorna TRUE, FALSE a seconda se
     * l'evento è passato o no
     */
    eventoPassato() {
        return (new Date() > this.DATAORAFINE);
    }
    /**
     * Ritorna un valore che indica se la pianificazioneCorso è aggiornabile nelle presenze.
     * @param gapOre Numero Positivo che indica quante ore di tempo di hanno dalla fine del corso per aggiornare le presenze
     */
    canUpdatePresenze(gapOre) {
        let canUpdate = true;
        let now = new Date;
        //Non è ancora iniziato
        if (now < this.DATAORAINIZIO) {
            canUpdate = false;
        }
        else {
            if (gapOre !== 0) {
                if (now > _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].calcola(this.DATAORAFINE, gapOre, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["TypePeriod"].hours)) {
                    canUpdate = false;
                }
            }
        }
        return canUpdate;
    }
    /**
     * Messaggio da mostrare all'utente riguardo all'aggiornamento dei dati presenza
     * @param gapOre Numero Positivo che indica quante ore di tempo di hanno dalla fine del corso per aggiornare le presenze
     */
    msgCanUpdatePresenze(gapOre) {
        let strReturn = '';
        let now = new Date();
        //E' troppo presto
        if (now < this.DATAORAINIZIO) {
            strReturn = 'Non è ancora possibile modificare le presenze di questa lezione';
            strReturn = 'E\' possibile modificare le presenze dal ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatDate(this.DATAORAINIZIO, 'DD/MM/YYYY') + ' dalle ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatTime(this.DATAORAINIZIO, false);
        }
        else {
            //In teoria potrei aggiornare le presenze
            if (gapOre == 0) {
                strReturn = 'Clicca su ogni partecipante per impostare la presenza/assenza';
            }
            else {
                //Possiamo aggiornarle
                if (this.canUpdatePresenze(gapOre)) {
                    //recupero la data entro cui è possibile aggiornare
                    let scadenza = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].calcola(this.DATAORAFINE, gapOre, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["TypePeriod"].hours);
                    //la converto in stringa
                    let strScadenza = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatDate(scadenza, 'DD/MM/YY');
                    strReturn = 'Clicca su ogni partecipante per impostare la presenza/assenza, presenze aggiornabili fino al ' + strScadenza;
                }
                else {
                    strReturn = 'Non è più possibile modificare le presenze di questa lezione';
                }
            }
        }
        return strReturn;
    }
}


/***/ }),

/***/ "ci2e":
/*!****************************************************!*\
  !*** ./src/app/models/tipodocumentazione.model.ts ***!
  \****************************************************/
/*! exports provided: TipoDocumentazione, ClasseDocumento, SorgenteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDocumentazione", function() { return TipoDocumentazione; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasseDocumento", function() { return ClasseDocumento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorgenteFile", function() { return SorgenteFile; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class TipoDocumentazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['DENOMINAZIONE', 'ZORDER'];
        let arNumber = ['CLASSE'];
        objDescriptor.className = 'TipoDocumentazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPODOCUMENTAZIONE';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        return objDescriptor;
    }
}
var ClasseDocumento;
(function (ClasseDocumento) {
    ClasseDocumento[ClasseDocumento["certificatoMedico"] = 10] = "certificatoMedico";
    ClasseDocumento[ClasseDocumento["attestato"] = 20] = "attestato";
    ClasseDocumento[ClasseDocumento["documento"] = 30] = "documento";
    ClasseDocumento[ClasseDocumento["certificazioneIsee"] = 40] = "certificazioneIsee";
    ClasseDocumento[ClasseDocumento["certificazione"] = 50] = "certificazione";
    ClasseDocumento[ClasseDocumento["curriculum"] = 60] = "curriculum";
    ClasseDocumento[ClasseDocumento["documentazione"] = 1000] = "documentazione";
})(ClasseDocumento || (ClasseDocumento = {}));
var SorgenteFile;
(function (SorgenteFile) {
    SorgenteFile["filesystem"] = "file";
    SorgenteFile["photoGallery"] = "photo";
})(SorgenteFile || (SorgenteFile = {}));


/***/ }),

/***/ "daHO":
/*!*****************************************************!*\
  !*** ./src/app/services/coursescheduler.service.ts ***!
  \*****************************************************/
/*! exports provided: CourseschedulerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseschedulerService", function() { return CourseschedulerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pianificazionecorso.model */ "b5Gy");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/log.model */ "Ag5x");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");












class CourseschedulerService {
    constructor(apiService, docStructureService) {
        this.apiService = apiService;
        this.docStructureService = docStructureService;
        this._calendarioCorso = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._listImpegniTrainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    get calendarioCorso() {
        return this._calendarioCorso.asObservable();
    }
    /**
    * recupero la lista degli impegni del trainer (observable)
    */
    get listImpegniTrainer() {
        return this._listImpegniTrainer.asObservable();
    }
    /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param idCorso Corso Richiesto
   */
    requestCalendario(config, idCorso) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            const doObject = 'PIANIFICAZIONECORSO';
            let myUrl = config.urlBase + '/' + doObject;
            //Nei Parametri imposto il corso richiesto
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDCORSO', idCorso);
            //Elimino le schedulazioni presenti
            this.emptyCalendario();
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                return data.PIANIFICAZIONECORSO;
            }))
                .subscribe(resultData => {
                if (resultData) {
                    resultData.forEach(element => {
                        let newCorsoCalendario = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"]();
                        newCorsoCalendario.setJSONProperty(element);
                        _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogApp"].consoleLog(newCorsoCalendario);
                        this.addCorsoCalendario(newCorsoCalendario);
                        resolve();
                    }, error => {
                        reject(error);
                    });
                }
            });
        });
    }
    /**
     * Aggiunge una schedulazione
     * @param objCorsoScheduler Schedulazione Corso
     */
    addCorsoCalendario(objCorsoScheduler) {
        this.calendarioCorso
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collCalendario => {
            this._calendarioCorso.next(collCalendario.concat(objCorsoScheduler));
        });
    }
    /**
     * Aggiunge una pianificazione alla lista Trainer
     * @param docPianificazione Documento di Pianificazione
     */
    addImpegnotrainer(docPianificazione) {
        this.listImpegniTrainer
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collListImpegni => {
            this._listImpegniTrainer.next(collListImpegni.concat(docPianificazione));
        });
    }
    /**
     * Svuota il calendario presente
     */
    emptyCalendario() {
        this._calendarioCorso.next([]);
    }
    /**
     * Svuotare la lista degli impegni del trainer
     */
    emptyListImpegniTrainer() {
        this._listImpegniTrainer.next([]);
    }
    /**
     * richiede al server gli impegni del trainer con id specificato. ritorna la lista tramite Promise. sulla lista vengono anche effettuate le decodifiche
     *
     * @param idRef l'id del trainer
     * @param dataInizio data di inizio
     * @param dataFine data di fine
     */
    requestImpegniTrainer(idRef, dataInizio, dataFine) {
        return new Promise((resolve, reject) => {
            const methodName = 'getPianificazioniTrainer';
            const document = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"](true);
            if (!dataFine && !dataInizio) {
                dataInizio = new Date();
                dataFine = new Date();
            }
            else if (!dataInizio && dataFine) {
                dataInizio = dataFine;
            }
            else if (dataInizio && !dataFine) {
                dataFine = dataInizio;
            }
            let params = {
                'idRef': idRef,
                'dataInizio': _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__["MyDateTime"].formatDateISO(dataInizio),
                'dataFine': _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__["MyDateTime"].formatDateISO(dataFine)
            };
            this.docStructureService.requestForFunction(document, methodName, JSON.stringify(params))
                .then(response => {
                let requestDecode = false;
                //Svuotiamo la lista attuale
                this.emptyListImpegniTrainer();
                if (response.PIANIFICAZIONECORSO) {
                    if (Array.isArray(response.PIANIFICAZIONECORSO)) {
                        /* Ciclo sull'Array ricevuto */
                        for (let index = 0; index < response.PIANIFICAZIONECORSO.length; index++) {
                            requestDecode = true;
                            const element = response.PIANIFICAZIONECORSO[index];
                            let docPianificazioneCorso = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"]();
                            docPianificazioneCorso.setJSONProperty(element);
                            //qui reupero anche il documento livello e me lo salvo nel repository
                            const addToRepository = false;
                            //Chiedo altri dati
                            this.docStructureService.getRelDoc(docPianificazioneCorso, ['IDCORSO', 'IDLIVELLOENTRATA'], 1, docPianificazioneCorso);
                            this.addImpegnotrainer(docPianificazioneCorso);
                        }
                        if (requestDecode) {
                            //Recupero la lista Impegni
                            let listPianificazioni = this._listImpegniTrainer.getValue();
                            //Chiamo la decodifica collection della lista
                            this.docStructureService.decodeCollection(listPianificazioni)
                                .then(() => {
                                //Riemetto Observable
                                this._listImpegniTrainer.next(listPianificazioni);
                                //Riemetto la resolve
                                resolve(this._listImpegniTrainer.getValue());
                            })
                                .catch(error => {
                                console.log(error);
                                reject(error);
                            });
                        }
                        else {
                            //Risolvere con la lista attuale (che sarà vuota)
                            resolve(this._listImpegniTrainer.getValue());
                        }
                    }
                    else {
                        //Risolvere con la lista attuale (che sarà vuota)
                        resolve(this._listImpegniTrainer.getValue());
                    }
                }
                else {
                    //Risolvere con la lista attuale (che sarà vuota)
                    resolve(this._listImpegniTrainer.getValue());
                }
            })
                .catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }
    /**
     * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
     * @param idPianificazione l'id della pianificazione da recuperare
     */
    getPianificazioneTrainerById(idPianificazione) {
        let elem = this._listImpegniTrainer
            .getValue()
            .find((elem) => {
            return elem.ID == idPianificazione;
        });
        return elem;
    }
    /**
     * Richiede al server le presenze della pianificazione passata e le inserisce all'interno della stessa
     * @param docPianificazione IL documento in cui inserire le presenze
     */
    insertPresenze(docPianificazione) {
        return new Promise((resolve, reject) => {
            const collName = 'CORSOPRESENZE';
            this.docStructureService.loadCollection(docPianificazione, collName)
                .then(() => {
                resolve(docPianificazione);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    updatePresenze(docPianificazione) {
        return new Promise((res, rej) => {
            let myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["PostParams"]();
            myPostParams.key = 'docPianificazione';
            myPostParams.value = docPianificazione;
            myPostParams.exportOnlyPropertyModified = true;
            myPostParams.exportOnlyDocModified = true;
            this.docStructureService.requestForFunction(docPianificazione, 'updatePresenze', null, myPostParams)
                .then((response) => {
                res(response);
            })
                .catch(error => {
                rej(error);
            });
        });
    }
}
CourseschedulerService.ɵfac = function CourseschedulerService_Factory(t) { return new (t || CourseschedulerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__["DocstructureService"])); };
CourseschedulerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CourseschedulerService, factory: CourseschedulerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eF/0":
/*!**********************************************!*\
  !*** ./src/app/models/datachiusura.model.ts ***!
  \**********************************************/
/*! exports provided: DataChiusura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChiusura", function() { return DataChiusura; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class DataChiusura extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance = false) {
        super(onlyInstance);
    }
    /**
  * Ritorna il descrittore della Struttura Campi
  */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDAREA',
            'IDLOCATION',
            'IDCAMPO',
            'NOTES',
            'MOTIVAZIONE'
        ];
        let arNumber = ['TIPOCHIUSURA', 'ATTIVITACHIUSURA'];
        let arBoolean = [];
        let arDate = ['DATADAL', 'DATAAL'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'DataChiusura';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DATACHIUSURA';
        objDescriptor.describeField = 'MOTIVAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
}


/***/ }),

/***/ "eRJB":
/*!*********************************************************!*\
  !*** ./src/app/models/corsovalutazionelivello.model.ts ***!
  \*********************************************************/
/*! exports provided: CorsoValutazioneLivello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoValutazioneLivello", function() { return CorsoValutazioneLivello; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class CorsoValutazioneLivello extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDCORSO',
            'IDCORSOVALUTAZIONE',
            'IDUTENTE',
            'NOMINATIVO',
            'IDSPORT',
            'IDLIVELLOENTRATA',
            'IDLIVELLOFINALE'
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'CorsoValutazioneLivello';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOVALUTAZIONELIVELLO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDLIVELLOENTRATA', 'Livello');
        objDescriptor.setRelation('IDLIVELLOFINALE', 'Livello');
        return objDescriptor;
    }
}


/***/ }),

/***/ "h++G":
/*!******************************************!*\
  !*** ./src/app/models/arealink.model.ts ***!
  \******************************************/
/*! exports provided: AreaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaLink", function() { return AreaLink; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class AreaLink extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREAOPERATIVA',
            'REFERURL'];
        let arNumber = ['TIPOURL'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'AreaLink';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'AREALINK';
        objDescriptor.describeField = 'REFERURL';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        //Aggiungo le relazioni
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        return objDescriptor;
    }
    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setOriginal();
    }
}


/***/ }),

/***/ "h27B":
/*!********************************************!*\
  !*** ./src/app/models/newsevento.model.ts ***!
  \********************************************/
/*! exports provided: NewsEvento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEvento", function() { return NewsEvento; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class NewsEvento extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this._NAMEICON = 'newspaper-outline';
            this._COLOR = 'secondary';
        }
    }
    /**
     * Imposta le proprietà della classe
     * @param data JSON Data
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['TITLE',
            'SUBTITLE',
            'SHORTTEXT',
            'LINKNEWS',
            'LINKIMAGE',
            'IDLOCATION',
            'IDAREAOPERATIVA'];
        let arNumber = ['AMBITO'];
        let arNumberDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = ['PUBBLICATADAL'];
        let arTime = [];
        objDescriptor.className = 'NewsEvento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'NEWSEVENTO';
        objDescriptor.describeField = 'TITLE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDLOCATION', 'Location');
        return objDescriptor;
    }
    /**
     * Torna un oggetto News per indicare che non ci sono News
     */
    static getNoNews() {
        let objNews = new NewsEvento();
        objNews.TITLE = 'Nessun evento in programma';
        objNews.SUBTITLE = 'Torna a trovarci per scoprire le prossime novità';
        objNews.do_loaded = false;
        objNews.do_deleted = false;
        return objNews;
    }
}


/***/ }),

/***/ "hFUh":
/*!******************************************************!*\
  !*** ./src/app/models/articolotagliemisura.model.ts ***!
  \******************************************************/
/*! exports provided: ArticoloTaglieMisura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticoloTaglieMisura", function() { return ArticoloTaglieMisura; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class ArticoloTaglieMisura extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDARTICOLO',
            'DESCRIZIONE',
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'ArticoloTaglieMisura';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOTAGLIEMISURA';
        objDescriptor.describeField = 'DESCRIZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDARTICOLO', 'Articolo');
        return objDescriptor;
    }
}


/***/ }),

/***/ "hXF6":
/*!**********************************************!*\
  !*** ./src/app/models/prenotazione.model.ts ***!
  \**********************************************/
/*! exports provided: Prenotazione */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prenotazione", function() { return Prenotazione; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prenotazionepianificazione.model */ "FAI+");



class Prenotazione extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    //si puo' procedere al pagamento finale
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this.IMPORTO = 0;
            this.INCASSATO = 0;
            this.RESIDUO = 0;
            this.TOTALE = 0;
            this.IMPOSTA = 0;
            this.ISVALID = false;
            this.MSGINVALID = '';
            this.IDTRANSACTION = '';
            this.IDORDER = '';
        }
        this.PRENOTAZIONEPIANIFICAZIONE = [];
    }
    //#region INIZIALIZZAZIONE NUOVA PRENOTAZIONE
    /**
     * Inizializza per una nuova prenotazione
     */
    initNewPrenotazione(idArea) {
        //Imposta i parametri nell'oggetto
        this.IDAREAOPERATIVA = idArea;
        this.DATA = new Date();
    }
    /**
     * UTILIZZATA
     * Imposta come oggetto di Pianificazione, quello passato
     * @param docPianificazione Nuovo oggetto di pianificazione
     */
    setPianificazioneSingola(docPianificazione) {
        if (docPianificazione) {
            if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
                this.PRENOTAZIONEPIANIFICAZIONE[0] = docPianificazione;
            }
            else {
                this.PRENOTAZIONEPIANIFICAZIONE.push(docPianificazione);
            }
        }
    }
    /**
     * Impostazione Area
     * @param idArea Area da applicare
     */
    SetArea(idArea) {
        this.IDAREAOPERATIVA = idArea;
        if (this.PRENOTAZIONEPIANIFICAZIONE) {
            this.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
                element.IDAREAOPERATIVA = idArea;
            });
        }
    }
    /**
     * Impostazione Utente
     * @param idUtente Utente che prenota
     */
    setUtente(idUtente, _nominativo) {
        this.IDUTENTE = idUtente;
        if (_nominativo) {
            this.NOMINATIVO = _nominativo;
        }
        else {
            this.NOMINATIVO = '';
        }
    }
    /**
     * ritorna il docPianificazione con id specificato; se id non è specificato, ritorna il primo documento di pianificazione presente
     */
    getPianificazione(idPianificazione) {
        let docPianificazione;
        let index;
        if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
            if (idPianificazione && idPianificazione.length > 0) {
                index = this.getIndexPianificazione(idPianificazione);
            }
            else {
                index = 0;
            }
            docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[index];
        }
        return docPianificazione;
    }
    //#endregion
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }
    setCollection(data) {
        this.PRENOTAZIONEPIANIFICAZIONE = [];
        if (data.PRENOTAZIONEPIANIFICAZIONE) {
            this.setCollectionPianificazioni(data);
        }
    }
    setCollectionPianificazioni(data) {
        data.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
            let newPianificazione = new _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_2__["PrenotazionePianificazione"]();
            newPianificazione.setJSONProperty(element);
            this.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);
        });
    }
    /**
     * Ritorna il descrittore della Prenotazione
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREAOPERATIVA',
            'IDUTENTE',
            'NOMINATIVO',
            'MOBILENUMBER',
            'IDTIPOPAGAMENTO',
            'MSGINVALID',
            'IDTRANSACTION',
            'IDORDER'];
        let arNumber = ['CHANNELPAYMENT'];
        let arNumberDecimal = ['IMPORTO', 'INCASSATO', 'RESIDUO', 'IMPOSTA', 'TOTALE'];
        let arBoolean = ['ISVALID'];
        let arDate = ['DATA'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'Prenotazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PRENOTAZIONE';
        objDescriptor.describeField = 'NOMINATIVO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        return objDescriptor;
    }
    /**
     * Converte il JSON ricevuto e ritorna una Prenotazione
     * @param JsonData Dati JSON ricevuti
     */
    static getPrenotazioneFromJson(JsonData) {
        let newPrenotazione = new Prenotazione();
        newPrenotazione.setJSONProperty(JsonData);
        return newPrenotazione;
    }
    /**
     * Ritorna l'indice dell'oggetto pianificazione con id specificato
     * @param id l'id dell'oggetto pianificazione
     */
    getIndexPianificazione(id) {
        for (let index = 0; index < this.PRENOTAZIONEPIANIFICAZIONE.length; index++) {
            const element = this.PRENOTAZIONEPIANIFICAZIONE[index];
            if (element.ID == id) {
                return index;
            }
        }
    }
    /**
     * Ritorna il valore che è necessario pagare
     */
    get amountPayment() {
        let myAmount = 0;
        if (this.INCASSATO < this.IMPORTO) {
            myAmount = this.IMPORTO - this.INCASSATO;
        }
        return myAmount;
    }
    /**
     * Stato del pagamento in formato testo
     * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
     */
    getCaptionStatePayment(showForPay = false) {
        let caption = '';
        if (this.amountPayment != 0) {
            if (showForPay) {
                caption = 'Paga Ora';
            }
            else {
                caption = 'Prenotazione da pagare';
            }
        }
        else {
            caption = 'Prenotazione pagata';
        }
        return caption;
    }
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kVR5":
/*!*********************************************!*\
  !*** ./src/app/models/unitamisura.model.ts ***!
  \*********************************************/
/*! exports provided: UnitaMisura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitaMisura", function() { return UnitaMisura; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class UnitaMisura extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['CODICE', 'DESCR', 'PREDEFINITA', 'ICONPREF'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'UnitaMisura';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UNITAMISURA';
        objDescriptor.describeField = 'DESCR';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        return objDescriptor;
    }
}


/***/ }),

/***/ "l6l+":
/*!********************************************************!*\
  !*** ./src/app/services/utenteprenotazione.service.ts ***!
  \********************************************************/
/*! exports provided: UtenteprenotazioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtenteprenotazioneService", function() { return UtenteprenotazioneService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/utenteprenotazione.model */ "TP3D");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class UtenteprenotazioneService {
    constructor(apiService) {
        this.apiService = apiService;
        this._listUtentePrenotazione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    //Ritorna la Lista delle prenotazioni di un utente
    get listUtentePrenotazione() {
        return this._listUtentePrenotazione.asObservable();
    }
    /**
     * Effettua la richiesta dell'elenco Prenotazioni di un utente
     * @param config Dati configurazione
     * @param idUtente Utente che effettua richiesta
     * @param maxRecord Max Record da recuperare
     */
    request(config, idUtente, maxRecord = 0) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('order-by', 'desc');
            const doObject = 'UTENTEPRENOTAZIONE';
            const filterDateTime = this.getFilterDateTime();
            let myUrl = config.urlBase + '/' + doObject;
            //Nei Parametri imposto l'area richiesta
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDUTENTE', idUtente);
            myParams = myParams.append('DATAORAINIZIO', filterDateTime);
            myParams = myParams.append('$top', (maxRecord + ''));
            //Elimino gli attuali
            this._listUtentePrenotazione.next([]);
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                let arReturn = [];
                if (data.UTENTEPRENOTAZIONE) {
                    arReturn = data.UTENTEPRENOTAZIONE;
                }
                return arReturn;
            }))
                .subscribe(resultData => {
                resultData.forEach(element => {
                    let newUtentePrenotazione = new _models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_4__["UtentePrenotazione"]();
                    newUtentePrenotazione.setJSONProperty(element);
                    this.addUtentePrenotazione(newUtentePrenotazione);
                });
                //Al termine ritorno la nuova lista
                resolve(this._listUtentePrenotazione);
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Aggiunge all'elenco una prenotazione dell'utente
     * @param objUtentePrenotazione Prenotazione da aggiungere
     */
    addUtentePrenotazione(objUtentePrenotazione) {
        this.listUtentePrenotazione
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(collUtentePrenotazione => {
            let findElement = collUtentePrenotazione.find(element => {
                return element.ID == objUtentePrenotazione.ID;
            });
            if (!findElement) {
                this._listUtentePrenotazione.next(collUtentePrenotazione.concat(objUtentePrenotazione));
            }
        });
    }
    /**
   * Crea il Parametro Filtro per il campo
   */
    getFilterDateTime() {
        let adesso = new Date();
        let newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
        let startDate = new Date(adesso.getFullYear(), 0, 1);
        let strAdesso = '';
        if (adesso.getMonth() < 6) {
            startDate = new Date((adesso.getFullYear()) - 1, 5, 1);
        }
        strAdesso = newDoc.formatDateTimeISO(startDate);
        strAdesso = '>' + strAdesso;
        return strAdesso;
    }
}
UtenteprenotazioneService.ɵfac = function UtenteprenotazioneService_Factory(t) { return new (t || UtenteprenotazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"])); };
UtenteprenotazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UtenteprenotazioneService, factory: UtenteprenotazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pEHE":
/*!***********************************************!*\
  !*** ./src/app/models/corsoallegato.model.ts ***!
  \***********************************************/
/*! exports provided: CorsoAllegato */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoAllegato", function() { return CorsoAllegato; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");



class CorsoAllegato extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDCORSO',
            'IDTIPODOCUMENTAZIONE',
            'DESCRIZIONE',
            'FILENAMEESTENSIONE',
            'FILETYPE',
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'CorsoAllegato';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOALLEGATO';
        objDescriptor.describeField = 'DESCRIZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDTIPODOCUMENTAZIONE', 'TipoDocumentazione');
        objDescriptor.setRelation('IDCORSO', 'Corso');
        return objDescriptor;
    }
    get fileTypeIconName() {
        let iconName = '';
        switch (this.FILETYPE) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].audio:
                iconName = 'musical-notes-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].excel:
                iconName = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].immagini:
                iconName = 'image-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].indefinito:
                iconName = 'document-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].pdf:
                iconName = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].powerpoint:
                iconName = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].text:
                iconName = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].video:
                iconName = 'film-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].word:
                iconName = 'document-text-outline';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_2__["FileType"].zip:
                iconName = 'library-outline';
                break;
        }
        return iconName;
    }
}


/***/ }),

/***/ "rEUH":
/*!***************************************************!*\
  !*** ./src/app/library/models/idlibrary.model.ts ***!
  \***************************************************/
/*! exports provided: IDLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDLibrary", function() { return IDLibrary; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptor.model */ "Wz4r");
/* harmony import */ var _iddocument_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iddocument.model */ "5usX");
/* harmony import */ var _mydatetime_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mydatetime.model */ "K4nM");




class IDLibrary {
    /**
     * Converte e formatta un valore in stringa
     * Usato per scriverlo nei parametri di chiamata
     * @param tipo Tipo del dato
     * @param value Valore
     * @param onlyPropertyModified In caso di Valore documento, esporta solo i modificati o tutto
     */
    static exportJSONValue(value, onlyPropertyModified = false, onlyDocModified = false) {
        let tipo;
        let strValue = '';
        tipo = this.getValueType(value);
        switch (tipo) {
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char:
                strValue = `\"${value}\"`;
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_3__["MyDateTime"].formatDateISO(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_3__["MyDateTime"].formatDateTimeISO(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time:
                strValue = _mydatetime_model__WEBPACK_IMPORTED_MODULE_3__["MyDateTime"].formatTime(value);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean:
                if (value) {
                    strValue = '-1';
                }
                else {
                    strValue = '0';
                }
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number:
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal:
                strValue = value + '';
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection:
                let arValues;
                arValues = value;
                strValue = '[';
                for (let index = 0; index < arValues.length; index++) {
                    const element = arValues[index];
                    const elStr = IDLibrary.exportJSONValue(element, onlyPropertyModified, onlyDocModified);
                    if (elStr && elStr.trim().length !== 0) {
                        //Se la stringa è diversa da 0 aggiungo la virgola
                        if (strValue.length != 0) {
                            strValue += ', ';
                        }
                        strValue += elStr;
                    }
                }
                strValue += ']';
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].document:
                let paramExport = new _iddocument_model__WEBPACK_IMPORTED_MODULE_2__["ParamsExport"];
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = false;
                paramExport.clearPrivateProperty = true;
                paramExport.onlyPropertyModified = onlyPropertyModified;
                paramExport.onlyDocModified = onlyDocModified;
                paramExport.numLivelli = 999;
                let document = value;
                strValue = document.exportToJSON(paramExport);
                break;
            case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined:
                strValue = 'null';
                break;
            default:
                strValue = 'null';
                break;
        }
        return strValue;
    }
    /**
     * Ritorna il tipo di un valore passato
     * @param value Valore da controllare
     */
    static getValueType(value) {
        let typeVar;
        switch (typeof value) {
            case "undefined":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                break;
            case "number":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number;
                break;
            case "string":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char;
                break;
            case "boolean":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean;
                break;
            case "bigint":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number;
                break;
            case "object":
                try {
                    if (Object(moment__WEBPACK_IMPORTED_MODULE_0__["isDate"])(value)) {
                        typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime;
                    }
                    else if (Array.isArray(value)) {
                        typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection;
                    }
                    else {
                        typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].document;
                    }
                }
                catch (error) {
                    typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                }
                break;
            default:
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                break;
        }
        return typeVar;
    }
}


/***/ }),

/***/ "sTQd":
/*!*****************************************************!*\
  !*** ./src/app/models/accountregistration.model.ts ***!
  \*****************************************************/
/*! exports provided: AccountRequestCode, AccountVerifyCode, AccountOperationResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRequestCode", function() { return AccountRequestCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountVerifyCode", function() { return AccountVerifyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOperationResponse", function() { return AccountOperationResponse; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


//Documento inviato in POST nella fase di richiesta Codici
class AccountRequestCode extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor() {
        super();
        this.REQUESTEMAILCODE = false;
        this.REQUESTSMSCODE = false;
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREA',
            'IDREFER',
            'EMAIL',
            'TELEPHONE',
            'TOKEN'
        ];
        let arNumber = ['USE'];
        let arBoolean = ['REQUESTEMAILCODE', 'REQUESTSMSCODE'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'AccountRequestCode';
        objDescriptor.doRemote = false;
        objDescriptor.classWebApiName = '';
        objDescriptor.describeField = '';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        return objDescriptor;
    }
}
//Documento inviato in POST nella fase di Verifica codici
class AccountVerifyCode extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor() {
        super();
        this.EMAILPINCODE = '';
        this.SMSPINCODE = '';
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDAREA',
            'IDREFER',
            'EMAILPINCODE',
            'SMSPINCODE'
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'AccountVerifyCode';
        objDescriptor.doRemote = false;
        objDescriptor.classWebApiName = '';
        objDescriptor.describeField = '';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        return objDescriptor;
    }
}
//Risposta ottenuta dal server 
class AccountOperationResponse {
}


/***/ }),

/***/ "sbYY":
/*!********************************************!*\
  !*** ./src/app/models/camposport.model.ts ***!
  \********************************************/
/*! exports provided: CampoSport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampoSport", function() { return CampoSport; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class CampoSport extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        if (!onlyInstance) {
            this._DESCRSPORT = '';
        }
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDCAMPO',
            'IDSPORT',
            '_DESCRSPORT'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'CampoSport';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CAMPOSPORT';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDSPORT', 'Sport');
        objDescriptor.setRelation('IDCAMPO', 'Campo');
        return objDescriptor;
    }
}


/***/ }),

/***/ "t3EU":
/*!************************************************!*\
  !*** ./src/app/models/corsoprogramma.model.ts ***!
  \************************************************/
/*! exports provided: CorsoProgramma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoProgramma", function() { return CorsoProgramma; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class CorsoProgramma extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['IDCORSO',
            'TESTOHTML'
        ];
        let arNumber = [];
        let arDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'CorsoProgramma';
        objDescriptor.classWebApiName = 'CORSOPROGRAMMA';
        objDescriptor.doRemote = true;
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        objDescriptor.setRelation('IDCORSO', 'Corso');
        return objDescriptor;
    }
}


/***/ }),

/***/ "uNYz":
/*!****************************************************!*\
  !*** ./src/app/library/models/postResult.model.ts ***!
  \****************************************************/
/*! exports provided: PostResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResponse", function() { return PostResponse; });
class PostResponse {
    set document(value) {
        this._document = value;
    }
    get document() {
        return this._document;
    }
    setFromResponse(response) {
        if (response) {
            this.result = response['result'];
            this.message = response['message'];
            this.code = response['code'];
        }
    }
    getDocument() {
        let doc;
        if (this._document && this._document.length != 0) {
            doc = JSON.parse(this._document);
        }
        return doc;
    }
}


/***/ }),

/***/ "v/X4":
/*!**************************************!*\
  !*** ./src/app/models/area.model.ts ***!
  \**************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/location.model */ "V6dt");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _arealink_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arealink.model */ "h++G");
/* harmony import */ var _areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areapaymentsetting.model */ "MO7j");





class Area extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
        this.AREALINKS = [];
        this.LOCATIONS = [];
        this.AREAPAYMENTSETTINGS = [];
        //0 indica che è sempre possibile aggiornare le presenze (dal server non arriva nulla)
        if (!onlyInstance) {
            this.APPGAPOREPRESENZE = 0;
        }
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
        let arString = ['IDGRUPPOSPORTIVO',
            'DENOMINAZIONE',
            'INDIRIZZO',
            'CAP',
            'COMUNE',
            'PROVINCIA',
            'ISOSTATO',
            'CONDVENDITACORSI',
            'CONDVENDPRENOTAZIONI'];
        let arNumber = ['TIPOAREA', 'APPGAPOREPRESENZE', 'LATITUDINE', 'LONGITUDINE'];
        let arBoolean = ['APPSHOW', 'APPISCRIZIONI', 'APPPRENOTAZIONI'];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = ['LOCATIONS', 'AREALINKS', 'AREAPAYMENTSETTINGS'];
        objDescriptor.className = 'Area';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'AREAOPERATIVA';
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
        return objDescriptor;
    }
    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setCollection(data);
        this.setOriginal();
    }
    /**
     * Reimposta l'Array delle location creando veri oggetti di tipo Location
     * @param resultData Json Information
     */
    setCollection(data) {
        if (data) {
            if (data.LOCATION) {
                data.LOCATION.forEach(element => {
                    let objLocation = this.findLocationByID(element.ID);
                    if (!objLocation) {
                        //Nuova Location
                        objLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_1__["Location"]();
                        //Aggiungo all'Array
                        this.LOCATIONS.push(objLocation);
                    }
                    objLocation.setJSONProperty(element);
                });
            }
            if (data.AREALINK) {
                data.AREALINK.forEach(element => {
                    let objAreaLink = this.findAreaLinkByID(element.ID);
                    if (!objAreaLink) {
                        //Nuova Area Link
                        objAreaLink = new _arealink_model__WEBPACK_IMPORTED_MODULE_3__["AreaLink"]();
                        //Aggiungo all'Array
                        this.AREALINKS.push(objAreaLink);
                    }
                    objAreaLink.setJSONProperty(element);
                });
            }
            //se nell'oggetto any che mi arriva è presente il campo AREAPAYMENTSETTING[]
            if (data.AREAPAYMENTSETTING) {
                //ne scorro gli elementi
                data.AREAPAYMENTSETTING.forEach(element => {
                    //cerco se tra gli elementi che ho in memoria è già prsente l'elemento che mi è arrivato
                    let objPaymentSetting = this.findPaymentSettingById(element.ID);
                    //se non è presente
                    if (!objPaymentSetting) {
                        //ne creo uno nuovo
                        objPaymentSetting = new _areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_4__["AreaPaymentSetting"]();
                        //e lo inserisco nell'array
                        this.AREAPAYMENTSETTINGS.push(objPaymentSetting);
                    }
                    //ora valorizzo il nuovo oggetto (che ci fosse già o no è indifferente) con le proprietà dell'oggetto che mi è arrivato
                    objPaymentSetting.setJSONProperty(element);
                });
            }
        }
    }
    /**
     * Cerca nell'array Location e torna la location se trovata
     * @param idLocation Location cercata
     */
    findLocationByID(idLocation) {
        return this.LOCATIONS.find(element => {
            return element.ID == idLocation;
        });
    }
    /**
     * Cerca nella colletion Area Link e ritorna il Link
     * @param idLink Link desiderato
     */
    findAreaLinkByID(idLink) {
        return this.AREALINKS.find(element => {
            return element.ID == idLink;
        });
    }
    /**
    * Cerca nella colletion areapaymentsettings  e ritorna l'elemeto desiderato
    * @param id id dell'elemento eesiderato
    */
    findPaymentSettingById(id) {
        return this.AREAPAYMENTSETTINGS.find(element => {
            return element.ID == id;
        });
    }
    /**
     * Cerca e ritorna un link con il tipo pagina passato
     * @param tipo Tipo pagina richiesto
     */
    findAreaLinkByPageType(tipo) {
        return this.AREALINKS.find(element => {
            return element.TIPOURL == tipo;
        });
    }
    distanceFrom(position) {
        if (this.LATITUDINE && this.LONGITUDINE) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            var radlat1 = Math.PI * this.LATITUDINE / 180;
            var radlat2 = Math.PI * lat / 180;
            var theta = this.LONGITUDINE - lon;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            return dist;
        }
    }
    /**
     * Dato un settore di pagamento, torna i pagamenti che supportano il settore
     * @param Settore Settore dove si richiedono i pagamenti
     */
    getPaymentFor(settore) {
        let arSetting = [];
        if (this.AREAPAYMENTSETTINGS && this.AREAPAYMENTSETTINGS.length != 0) {
            //Ciclo sui modi di pagamento
            for (let index = 0; index < this.AREAPAYMENTSETTINGS.length; index++) {
                const elPaymentSetting = this.AREAPAYMENTSETTINGS[index];
                /* Se il pagamento è adatto al settore */
                if (elPaymentSetting && elPaymentSetting.isFor(settore)) {
                    arSetting.push(elPaymentSetting);
                }
            }
        }
        return arSetting;
    }
}


/***/ }),

/***/ "v3Yp":
/*!***************************************************!*\
  !*** ./src/app/services/corsoallegato.service.ts ***!
  \***************************************************/
/*! exports provided: CorsoallegatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoallegatoService", function() { return CorsoallegatoService; });
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/corsoallegato.model */ "pEHE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CorsoallegatoService {
    constructor(docStructureService) {
        this.docStructureService = docStructureService;
    }
    requestByIdCorso(idCorso) {
        return new Promise((resolve, reject) => {
            //filtro per la richiesta
            let myFilter = new _models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_2__["CorsoAllegato"](true);
            myFilter.IDCORSO = idCorso;
            //Parametri per la richiesta
            let myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["RequestParams"]();
            myParams.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["RequestDecode"]();
            myParams.decode.active = true;
            this.docStructureService.requestNew(myFilter, myParams)
                .then((listAllegati) => {
                resolve(listAllegati);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
}
CorsoallegatoService.ɵfac = function CorsoallegatoService_Factory(t) { return new (t || CorsoallegatoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__["DocstructureService"])); };
CorsoallegatoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CorsoallegatoService, factory: CorsoallegatoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    /* ORIGINALI*/
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
    // Ho provato a cambiare e mandare home al path vuoto (che carica la pagina Home)
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '', loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule) },
    {
        path: 'historylist',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-history-historylist-historylist-module */ "pages-history-historylist-historylist-module").then(__webpack_require__.bind(null, /*! ./pages/history/historylist/historylist.module */ "mU/K")).then(m => m.HistorylistPageModule)
            },
            {
                path: 'booking/:historyId',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-history-historybook-historybook-module */ "pages-history-historybook-historybook-module").then(__webpack_require__.bind(null, /*! ./pages/history/historybook/historybook.module */ "9eO6")).then(m => m.HistorybookPageModule)
            },
            {
                path: 'course/:historyId',
                loadChildren: () => Promise.all(/*! import() | pages-history-historycourse-historycourse-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-location-course-detailcourse-course-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-history-historycourse-historycourse-module")]).then(__webpack_require__.bind(null, /*! ./pages/history/historycourse/historycourse.module */ "BnKM")).then(m => m.HistorycoursePageModule)
            }
        ]
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-account-account-module */ "pages-account-account-module").then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "4+IK")).then(m => m.AccountPageModule)
    },
    {
        path: 'location/:locationId',
        loadChildren: () => Promise.all(/*! import() | pages-location-location-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-location-location-module")]).then(__webpack_require__.bind(null, /*! ./pages/location/location.module */ "lPJH")).then(m => m.LocationPageModule)
    },
    {
        path: 'location',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'listcourses/:locationId',
        loadChildren: () => Promise.all(/*! import() | pages-location-course-listcourses-listcourses-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-listcourses-listcourses-module"), __webpack_require__.e("pages-location-course-listcourses-listcourses-module")]).then(__webpack_require__.bind(null, /*! ./pages/location/course/listcourses/listcourses.module */ "8GLh")).then(m => m.ListcoursesPageModule)
    },
    {
        path: 'listcourses',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'detailcourse',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'detailcourse/:courseId',
        loadChildren: () => Promise.all(/*! import() | pages-location-course-detailcourse-course-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-location-course-detailcourse-course-module"), __webpack_require__.e("pages-location-course-detailcourse-course-module")]).then(__webpack_require__.bind(null, /*! ./pages/location/course/detailcourse/course.module */ "FwVE")).then(m => m.CoursePageModule)
    },
    {
        path: 'news/:newsId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-newsdetail-newsdetail-module */ "common").then(__webpack_require__.bind(null, /*! ./pages/newsdetail/newsdetail.module */ "k52M")).then(m => m.NewsdetailPageModule)
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./pages/news/news.module */ "qUUn")).then(m => m.NewsPageModule)
    },
    {
        path: 'verify',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-verify-verify-module */ "default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d").then(__webpack_require__.bind(null, /*! ./pages/auth/verify/verify.module */ "fFCB")).then(m => m.VerifyPageModule)
    },
    {
        path: 'test',
        loadChildren: () => Promise.all(/*! import() | pages-test-test-module */[__webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("pages-test-test-module")]).then(__webpack_require__.bind(null, /*! ./pages/test/test.module */ "ezsy")).then(m => m.TestPageModule)
    },
    {
        path: 'agenda',
        loadChildren: () => Promise.all(/*! import() | pages-agenda-agenda-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-agenda-module")]).then(__webpack_require__.bind(null, /*! ./pages/agenda/agenda.module */ "uB5f")).then(m => m.AgendaPageModule)
    },
    {
        path: 'agenda-trainer',
        loadChildren: () => Promise.all(/*! import() | pages-agenda-trainer-agenda-trainer-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-trainer-agenda-trainer-module")]).then(__webpack_require__.bind(null, /*! ./pages/agenda-trainer/agenda-trainer.module */ "qqZR")).then(m => m.AgendaTrainerPageModule)
    },
    {
        path: 'agenda-custode',
        loadChildren: () => Promise.all(/*! import() | pages-agenda-custode-agenda-custode-module */[__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-custode-agenda-custode-module")]).then(__webpack_require__.bind(null, /*! ./pages/agenda-custode/agenda-custode.module */ "URBP")).then(m => m.AgendaCustodePageModule)
    },
    {
        // ** dovrebbe rappresentare tutti i percorsi che non vengono intercettati dalle rotte precedenti
        path: '**',
        redirectTo: ''
    }
    // {
    //   path: 'agenda-custode/:idImpegno',
    // },  
    //questo lo lascio commentato, perchè in teoria ci si arriva solo da modale
    // {
    //   path: 'psw-recovery',
    //   loadChildren: () => import('./pages/auth/psw-recovery/psw-recovery.module').then( m => m.PswRecoveryPageModule)
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vl3Y":
/*!***********************************************!*\
  !*** ./src/app/models/corsopresenze.model.ts ***!
  \***********************************************/
/*! exports provided: CorsoPresenze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoPresenze", function() { return CorsoPresenze; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class CorsoPresenze extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = [
            'IDPIANIFICAZIONECORSO',
            'IDUTENTE',
            'NOMINATIVO',
            'NOTE',
            'IDUSERSETTING'
        ];
        let arNumber = ['STATOISCRIZIONE'];
        let arBoolean = ['PRESENTE'];
        let arDate = ['DATACERTIFICATOMEDICO'];
        let arDateTime = ['DATAORASETTING'];
        let arTime = [];
        objDescriptor.className = 'CorsoPresenze';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOPRESENZE';
        objDescriptor.describeField = 'NOMINATIVO';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        objDescriptor.setRelation('IDPIANIFICAZIONECORSO', 'PianificazioneCorso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDUSERSETTING', 'Utente');
        return objDescriptor;
    }
}


/***/ }),

/***/ "w26W":
/*!***************************************************!*\
  !*** ./src/app/services/codicefiscale.service.ts ***!
  \***************************************************/
/*! exports provided: CodicefiscaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodicefiscaleService", function() { return CodicefiscaleService; });
/* harmony import */ var _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/codicefiscale.model */ "ECYZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CodicefiscaleService {
    //Per ottenere i dati del comune dal codice catastale
    //chiamare https://api.cavallinipietro.com/codicefiscale/api/comuni/codicecatastale/L872
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * Effettua il controllo di un codice fiscale e torna TRUE se corretto o FALSE se non corretto
     * Nel caso fosse corretto puo' essere richiesta la decodifica del codice in Comune, Provincia, DataNascita etc.
     * @param docCF Documento Codice Fiscale
     * @param decode Decodifica il Codice Fiscale se corretto
     * @param userMsg I testi dei messaggi di errore sono rivolti all'utente finale
     */
    checkCodiceFiscale(codiceFiscale, decode, userMsg = false) {
        return new Promise((resolve, reject) => {
            let check = false;
            let resDecode = false;
            let docCF;
            if (codiceFiscale && codiceFiscale.length !== 0) {
                docCF = new _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__["CodiceFiscale"](codiceFiscale);
                //Valido il codice
                check = docCF.validate();
            }
            else {
                docCF = new _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__["CodiceFiscale"]('');
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
                        let myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'text/plain' });
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
                                    docCF.stato = 'Italia';
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
                                if (data.hasOwnProperty('stato')) {
                                    docCF.stato = data['stato'];
                                }
                            }
                            resolve(docCF);
                        }, error => {
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
CodicefiscaleService.ɵfac = function CodicefiscaleService_Factory(t) { return new (t || CodicefiscaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"])); };
CodicefiscaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CodicefiscaleService, factory: CodicefiscaleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "w48H":
/*!*******************************************!*\
  !*** ./src/app/models/settimana.model.ts ***!
  \*******************************************/
/*! exports provided: Settimana */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settimana", function() { return Settimana; });
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");

class Settimana {
    constructor(indexDay, language) {
        this.index = indexDay;
        this.selected = false;
        this.color = 'primary';
        this.setAllLabel(language);
    }
    /**
     * Imposto tutte le etichette
     * @param language Lingua
     */
    setAllLabel(language) {
        //Prima determino la Label principale
        switch (language) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Language"].italiano:
                this.setItalianLabel();
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Language"].inglese:
                this.setEnglishLabel();
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Language"].spagnolo:
                this.setSpanishLabel();
                break;
            default:
                this.setItalianLabel();
                break;
        }
        //Ora costruisco le altre label
        this.smallLabel = this.label.substring(0, 3);
        this.xsLabel = this.label.substring(0, 1);
    }
    /**
     * Imposta le etichette dei giorni in italiano
     */
    setItalianLabel() {
        switch (this.index) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica:
                this.label = 'domenica';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].lunedi:
                this.label = 'lunedi\'';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].martedi:
                this.label = 'martedi\'';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].mercoledi:
                this.label = 'mercoledi\'';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].giovedi:
                this.label = 'giovedi\'';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].venerdi:
                this.label = 'venerdi\'';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].sabato:
                this.label = 'sabato';
                break;
        }
    }
    /**
    * Imposta le etichette dei giorni in italiano
    */
    setEnglishLabel() {
        switch (this.index) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica:
                this.label = 'sunday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].lunedi:
                this.label = 'monday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].martedi:
                this.label = 'tuesday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].mercoledi:
                this.label = 'wednesday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].giovedi:
                this.label = 'thursday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].venerdi:
                this.label = 'friday';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].sabato:
                this.label = 'saturday';
                break;
        }
    }
    setSpanishLabel() {
        switch (this.index) {
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica:
                this.label = 'domingo';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].lunedi:
                this.label = 'lunes';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].martedi:
                this.label = 'martes';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].mercoledi:
                this.label = 'miercoles';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].giovedi:
                this.label = 'jueve';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].venerdi:
                this.label = 'viernes';
                break;
            case _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].sabato:
                this.label = 'sabado';
                break;
        }
    }
    /**
     * Ritorna un Array di Giornate
     * @param startSunday Calendario Inizia alla Domenica ?
     * @param language    Lingua Opzionale
     */
    static getArray(startSunday, language) {
        let myWeek = [];
        let startIndex = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].lunedi;
        if (startSunday) {
            startIndex = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica;
        }
        // Ciclo dallo Start Index a 7
        for (let indice = startIndex; indice <= _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].sabato; indice++) {
            let newDay = new Settimana(indice, language);
            myWeek.push(newDay);
        }
        //Se ho iniziato al Lunedi, devo aggiungere in fondo la domenica
        if (startIndex == 1) {
            let newDay = new Settimana(_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica, language);
            myWeek.push(newDay);
        }
        return myWeek;
    }
    /**
     * Imposta a selected un determinato giorno della settimana presente nell'array
     * @param indexDay Indice del Giorno da selezionare
     * @param myWeek Array Settimanale
     */
    static selectDayArray(indexDay, myWeek) {
        if (myWeek) {
            myWeek.forEach(element => {
                if (element.index == indexDay) {
                    element.selected = true;
                }
            });
        }
    }
    /**
     * Ritorna in modalità rapida la label del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getLabel(indexDay, language) {
        let newDay = new Settimana(indexDay, language);
        return newDay.label;
    }
    /**
     * Ritorna in modalità rapida la smallLabel del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getsmallLabel(indexDay, language) {
        let newDay = new Settimana(indexDay, language);
        return newDay.smallLabel;
    }
    /**
     * Ritorna in modalità rapida la xsLabel del Giorno
     * @param indexDay Numero del Giorno
     * @param language Lingua Opzionale
     */
    static getXsLabel(indexDay, language) {
        let newDay = new Settimana(indexDay, language);
        return newDay.xsLabel;
    }
}


/***/ }),

/***/ "w5Je":
/*!**************************************************!*\
  !*** ./src/app/models/aperturalocation.model.ts ***!
  \**************************************************/
/*! exports provided: AperturaLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AperturaLocation", function() { return AperturaLocation; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _settimana_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settimana.model */ "w48H");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");



class AperturaLocation extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
        let arString = [];
        let arNumber = ['GIORNO'];
        let arBoolean = ['APERTOCHIUSO'];
        let arDate = [];
        let arDateTime = [];
        let arTime = ['DALLE1', 'DALLE2', 'ALLE1', 'ALLE2'];
        objDescriptor.className = 'AperturaLocation';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'APERTURALOCATION';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
        return objDescriptor;
    }
    /**
     * Sovrascrive metodo di IDDocument e lo amplia
     * @param data JSON Received
     */
    setJSONProperty(data) {
        super.setJSONProperty(data);
        //Il Giorno che arriva base 1 lo sposto a base 0
        this.GIORNO = this.GIORNO - 1;
        this.setOriginal();
    }
    getDateFromTimeString(timeString) {
        const splitTime = timeString.split(':');
        let ore = 0;
        let minuti = 0;
        let secondi = 0;
        let returnDate = new Date();
        for (let index = 0; index < splitTime.length; index++) {
            switch (index) {
                case 0:
                    ore = Number.parseInt(splitTime[index]);
                    break;
                case 1:
                    minuti = Number.parseInt(splitTime[index]);
                    break;
                case 2:
                    secondi = Number.parseInt(splitTime[index]);
                    break;
            }
        }
        returnDate.setHours(ore, minuti, secondi);
        return returnDate;
    }
    /** Ritorna l'etichetta del giorno */
    getLabel(language) {
        let label = _settimana_model__WEBPACK_IMPORTED_MODULE_1__["Settimana"].getLabel(this.GIORNO, language);
        return label;
    }
    isOpen() {
        return this.APERTOCHIUSO;
    }
    get isAlwaysOpen() {
        if (this.isOpen() && !this.DALLE1 && !this.DALLE2) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Ritorna l'orario impostato minore o maggiore di apertura o chiusura
     * UNDEFINED se non trovato oppure se la Location è chiusa
     * @param type min || max a seconda se su vuole l'orario inferiore o superiore
     */
    getOrario(type) {
        let value;
        if (this.APERTOCHIUSO) {
            if (type == 'min') {
                if (this.DALLE1) {
                    value = this.DALLE1;
                }
                else if (this.DALLE2) {
                    value = this.DALLE2;
                }
            }
            else if (type == 'max') {
                if (this.ALLE2) {
                    value = this.ALLE2;
                }
                else if (this.ALLE1) {
                    value = this.ALLE1;
                }
            }
            else if (type == 'middleMin') {
                if (this.ALLE1) {
                    value = this.ALLE1;
                }
            }
            else if (type == 'middleMax') {
                if (this.DALLE2) {
                    value = this.DALLE2;
                }
            }
        }
        return value;
    }
}


/***/ }),

/***/ "wG3K":
/*!**********************************************!*\
  !*** ./src/app/models/categoriaeta.model.ts ***!
  \**********************************************/
/*! exports provided: CategoriaEta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaEta", function() { return CategoriaEta; });
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");


class CategoriaEta extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
* Ritorna il descrittore della Struttura Campi
*/
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
        let arString = ['CODICE',
            'DESCTOOLTIP'
        ];
        let arNumber = ['ETAMINIMA', 'ETAMASSIMA'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime = [];
        let arTime = [];
        let arCollection = [];
        objDescriptor.className = 'CategoriaEta';
        objDescriptor.classWebApiName = 'CATEGORIEETA';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DESCTOOLTIP';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
        objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
        return objDescriptor;
    }
    setJSONProperty(data) {
        super.setJSONProperty(data);
        this.setOriginal();
    }
    /**
     * Verifica se l'eta rientra nel range
     * @param eta Eta da controllare
     */
    isValid(eta) {
        let isValid = false;
        if (!this.ETAMINIMA && !this.ETAMASSIMA) {
            isValid = true;
        }
        else if (!this.ETAMASSIMA) {
            //Non c'e' eta massima solo la minima
            if (eta >= this.ETAMINIMA) {
                isValid = true;
            }
        }
        else if (!this.ETAMINIMA) {
            //Non c'e' eta minima solo la massima
            if (eta <= this.ETAMASSIMA) {
                isValid = true;
            }
        }
        else {
            //Ci sono entrambi le eta
            if (eta >= this.ETAMINIMA && eta <= this.ETAMASSIMA) {
                isValid = true;
            }
        }
        return isValid;
    }
}


/***/ }),

/***/ "xeLN":
/*!***************************************************!*\
  !*** ./src/app/models/iscrizioneincasso.model.ts ***!
  \***************************************************/
/*! exports provided: IscrizioneIncasso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IscrizioneIncasso", function() { return IscrizioneIncasso; });
/* harmony import */ var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/descriptor.model */ "Wz4r");
/* harmony import */ var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library/models/iddocument.model */ "5usX");


class IscrizioneIncasso extends _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"] {
    constructor(onlyInstance) {
        super(onlyInstance);
    }
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor() {
        let objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
        let arString = ['IDISCRIZIONECORSO',
            'NOTES',
            'DICITURADOC',
            'IDCONTO',
            'IDTRANSACTION',
            'IDORDER'
        ];
        let arNumber = ['ZORDER',
            'MODALITA',
            'TIPORIGO',
            'TIPOPREZZO'
        ];
        let arDecimal = ['IMPORTO'
        ];
        let arBoolean = [];
        let arDate = ['DATAOPERAZIONE'];
        let arDateTime = [];
        let arTime = [];
        objDescriptor.className = 'IscrizioneIncasso';
        objDescriptor.classWebApiName = 'ISCRIZIONEINCASSO';
        objDescriptor.doRemote = true;
        objDescriptor.describeField = 'DENOMINAZIONE';
        objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].char);
        objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
        objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal);
        objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].boolean);
        objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
        objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
        objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
        return objDescriptor;
    }
    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data) {
        //Chiamo IDDOcument
        super.setJSONProperty(data);
        this.setOriginal();
    }
}


/***/ }),

/***/ "yHma":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_location_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/location.model */ "V6dt");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apicall.service */ "+Dr4");
/* harmony import */ var _models_camposport_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/camposport.model */ "sbYY");
/* harmony import */ var _models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/imdb/slotweek.model */ "L1/s");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../library/services/docstructure.service */ "FYk8");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");















class LocationService {
    constructor(apiService, loadingCtrl, docStructureService) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.docStructureService = docStructureService;
        this._listLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._activeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]());
    }
    //VARIABILI PER PRENOTAZIONI
    get listLocation() {
        return this._listLocation.asObservable();
    }
    set decodeListSport(value) {
        this._decodeListSport = value;
    }
    get activeLocation() {
        return this._activeLocation.asObservable();
    }
    /**
     * Recupero delle Location di un'area
     * @param config Parametri di configurazione
     * @param idArea Area di riferimento
     */
    requestByIdArea(config, idArea) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            //new HttpHeaders({'Content-type':'text/plain'});
            const doObject = 'LOCATION';
            const locVisTutti = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__["LocationAppVisibility"].tutti; //Queste sono le location pubbliche
            // Nei parametri imposto l'Area Operativa
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDAREAOPERATIVA', idArea);
            //Chiedo solo le location Pubbliche (In teoria qui bisognerà gestire il caso di Location legate a una azienda a cui l'utente è collegato)
            myParams = myParams.append('APPVISIBILITY', (locVisTutti + ''));
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
                return fullData.LOCATION;
            }))
                .subscribe(resultData => {
                //Cancello le Location
                this._listLocation.next([]);
                //Inserisco le location
                this._addMultipleLocation(resultData);
                resolve(resultData);
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Richiede un elenco di location con idArea passato, e lo risolve direttamente, senza passare da nessun'altra parte (usa il nuovo docstructure per fare la richiesta)
     * @param idArea l'id dell'area
     */
    newRequestByIdArea(idArea) {
        return new Promise((resolve, reject) => {
            let myFilter = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"](true);
            myFilter.IDAREAOPERATIVA = idArea;
            let myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["RequestParams"]();
            myParams.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["RequestDecode"]();
            myParams.decode.active = true;
            this.docStructureService.requestNew(myFilter, myParams)
                .then(listLocation => {
                resolve(listLocation);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta
   *
   */
    requestLocationByID(config, idLocation, _numLivelli) {
        return new Promise((resolve, reject) => {
            let myHeaders = config.getHttpHeaders();
            //new HttpHeaders({'Content-type':'text/plain'});
            const doObject = 'LOCATION';
            if (!_numLivelli) {
                _numLivelli = 3;
            }
            myHeaders = myHeaders.set('child-level', _numLivelli + '');
            // Nei parametri imposto l'Area Operativa
            let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idLocation);
            let myUrl = config.urlBase + '/' + doObject;
            this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
                return fullData.LOCATION;
            }))
                .subscribe(resultData => {
                let locReturn;
                if (resultData && resultData.length !== 0) {
                    locReturn = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]();
                    locReturn.setJSONProperty(resultData[0]);
                    //Emetto evento di cambio
                    this._activeLocation.next(locReturn);
                    resolve(locReturn);
                }
                else {
                    reject('location non trovata');
                }
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Aggiunge un insieme di elementi all'array delle Location
     * @param dataJSON JSON Received
    */
    _addMultipleLocation(dataJSON) {
        if (dataJSON) {
            dataJSON.forEach(element => {
                let newLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]();
                newLocation.setJSONProperty(element);
                this.listLocation
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
                    .subscribe(collLocation => {
                    this._listLocation.next(collLocation.concat(newLocation));
                });
            });
        }
    }
    //#region SINCRONIZZAZIONE CON CAMPI SPORT
    /**
     * Richiede al Server le informazioni sulle tipologie dei Campi (e Attività Svolte)
     * @param config Parametri di configurazione
     * @param docLocation Location da Completare con i campi Sport
     */
    syncInfoCampi(config, docLocation) {
        //Elimino le informazioni precedenti dei Campi Sport
        docLocation.emptyCampiSport();
        //Creo un Observable
        let myLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](docLocation);
        docLocation.CAMPO.forEach(elCampo => {
            this.syncInfoCampoSport(config, elCampo.ID)
                .subscribe(resultData => {
                resultData.forEach(elCampoSport => {
                    let docCampoSport = new _models_camposport_model__WEBPACK_IMPORTED_MODULE_5__["CampoSport"]();
                    docCampoSport.setJSONProperty(elCampoSport);
                    docCampoSport.lookup('IDSPORT', this._decodeListSport, 'DENOMINAZIONE');
                    myLocation
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
                        .subscribe(docLocation => {
                        docLocation.addCampoSport(docCampoSport, elCampo.ID);
                        myLocation.next(docLocation);
                    });
                });
            });
        });
        return myLocation.asObservable();
    }
    /**
     * Sincronizzo le informazioni degli sport dei campi
     */
    syncInfoCampoSport(config, idCampo) {
        let myHeaders = config.getHttpHeaders();
        //new HttpHeaders({'Content-type':'text/plain'});
        const doObject = 'CAMPOSPORT';
        // Nei parametri imposto il Campo
        let myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDCAMPO', idCampo);
        let myUrl = config.urlBase + '/' + doObject;
        return this.apiService
            .httpGet(myUrl, myHeaders, myParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fullData => {
            return fullData.CAMPOSPORT;
        }));
    }
    /**
     * Ritorna la Location presente in memoria
     * @param idLocation Location cercata
     */
    findLocationByID(idLocation) {
        let arLocation = this._listLocation.getValue();
        return arLocation.find(element => {
            return element.ID == idLocation;
        });
    }
    //#endregion
    //#region PRENOTAZIONE
    /**
     * Data la Location, ritorna il template settimanale con gli slot time da applicare
     * (Default Slot Time)
     * Andranno poi attualizzati ulteriormente
     * @param docLocation Location da utilizzare
     */
    getTemplateSlotWeek(docLocation) {
        let weekTemplate = new _models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_6__["SlotWeek"]();
        weekTemplate.IDAREAOPERATIVA = docLocation.IDAREAOPERATIVA;
        weekTemplate.IDLOCATION = docLocation.ID;
        if (docLocation.MINUTISLOTPRENOTAZIONE) {
            weekTemplate.SLOTMINUTES = docLocation.MINUTISLOTPRENOTAZIONE;
        }
        //Inizializzo con i giorni
        weekTemplate.initDays();
        //Ciclo sulle Aperture Location per poter impostare l'orario minimo e massimo per ogni giorno
        docLocation.APERTURALOCATION.forEach(elApertura => {
            let daySlot = weekTemplate.getSlotDay(elApertura.GIORNO);
            let minDateTime;
            let maxDateTime;
            let middleMinTime;
            let middleMaxTime;
            //APERTO
            if (elApertura.APERTOCHIUSO) {
                daySlot.APERTOCHIUSO = true;
                //Imposto orari standard di apertura
                daySlot.setStandardTime();
                //Ora devo recuperare ora iniziale e finale definite 
                //sulla apertura location
                minDateTime = elApertura.getOrario('min');
                maxDateTime = elApertura.getOrario('max');
                middleMinTime = elApertura.getOrario('middleMin');
                middleMaxTime = elApertura.getOrario('middleMax');
                //Imposto gli orari di inizio e fine se ci sono
                if (minDateTime && maxDateTime) {
                    daySlot.STARTTIME = minDateTime;
                    daySlot.ENDTIME = maxDateTime;
                    //se ci sono gli orari intermedi, li imposto
                    if (middleMaxTime && middleMinTime) {
                        daySlot.setChiusuraIntermedia(middleMinTime, middleMaxTime);
                    }
                }
                else {
                    //Vuol dire che è aperto tutto il giorno
                    let adesso = new Date();
                    daySlot.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 0, 0, 0);
                    daySlot.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 23, 59, 59);
                }
            }
            else {
                daySlot.APERTOCHIUSO = false;
            }
        });
        //Ora per tutti i giorni del template devo creare tutti gli slottime
        weekTemplate.createSlotTimeDays();
        return weekTemplate;
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__["DocstructureService"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "z5yz":
/*!**********************************************************!*\
  !*** ./src/app/library/models/cachelistelement.model.ts ***!
  \**********************************************************/
/*! exports provided: CacheListElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheListElement", function() { return CacheListElement; });
class CacheListElement {
    constructor(className) {
        //Nome della classe
        this.className = className;
        //Lista elementi
        this.list = [];
    }
    /**
     * Elemento
     * @param element Elemento da aggiungere
     * @param updateExist Prima di aggiungere controlla se presente e in caso aggiorna
     */
    addElement(element, updateExist = true) {
        let findEl;
        let actionAdd = false;
        if (element) {
            //Prima di aggiungerlo controllo se è presente
            if (updateExist) {
                findEl = this.findElementById(element['ID']);
                if (!findEl) {
                    actionAdd = true;
                }
                else {
                    //Aggiornare le proprietà
                    findEl = element;
                }
            }
            else {
                //Non devo guardare se esiste aggiungi e taci
                actionAdd = true;
            }
            if (actionAdd) {
                this.list.push(element);
            }
        }
    }
    /**
     * Ricerca un elemento
     * @param id Chiave primaria
     */
    findElementById(id) {
        return this.list.find(el => {
            return el.ID == id;
        });
    }
    /**
     * Ricerca un elemento nella lista per nome campo <-> valore
     * @param fieldName Nome del campo
     * @param value Valore cercato
     */
    findElementByFieldName(fieldName, value) {
        return this.list.find(el => {
            return el[fieldName] == value;
        });
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");





// Call the element loader after the platform has been bootstrapped
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map