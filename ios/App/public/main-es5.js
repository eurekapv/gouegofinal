(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Dr4":
    /*!*********************************************!*\
      !*** ./src/app/services/apicall.service.ts ***!
      \*********************************************/

    /*! exports provided: ApicallService */

    /***/
    function Dr4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApicallService", function () {
        return ApicallService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_log_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/log.model */
      "Ag5x");
      /* harmony import */


      var _custom_encription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./custom-encription.service */
      "Fdj0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApicallService = /*#__PURE__*/function () {
        function ApicallService(httpClient, customEncriptionService) {
          _classCallCheck(this, ApicallService);

          this.httpClient = httpClient;
          this.customEncriptionService = customEncriptionService;
        }
        /**
         * Effettua una chiamata GET verso un server e ritorna un Observable
         * @param url Url da contattare
         * @param header Dati di Testata
         * @param params Parametri di Testata
         */


        _createClass(ApicallService, [{
          key: "httpGet",
          value: function httpGet(url, header, params) {
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

        }, {
          key: "httpPost",
          value: function httpPost(url, header, params, body) {
            return this._httpPost(url, header, params, body);
          }
          /**
           * Effettua una chiamata PUT verso un server e ritorna un Observable
           * Utilizzata per Modifica di Risorse
           * @param url Url da contattare
           * @param header Dati di Testata
           * @param body Body
           */

        }, {
          key: "httpPut",
          value: function httpPut(url, header, params, body) {
            return this._httpPut(url, header, params, body);
          }
          /**
          * Esegue una chiamata GET al'Url specificato, controllando l'errore
          * @param url Url da contattare
          * @param reqHeaders Testata
          * @param reqParams  Parametri
          */

        }, {
          key: "_httpGet",
          value: function _httpGet(url, reqHeaders, reqParams) {
            _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata GET a ' + url);

            reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature()); //ritorno la get controllando l'errore

            return this.httpClient.get(url, {
              headers: reqHeaders,
              params: reqParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
          /**
           * Esegue una chiamata POST al'Url specificato, controllando l'errore
           * @param url Url da contattare
           * @param reqHeaders Testata
           * @param reqParams  Parametri
           * @param reqBody    Body
           */

        }, {
          key: "_httpPost",
          value: function _httpPost(url, reqHeaders, reqParams, reqBody) {
            reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());

            _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata POST a ' + url);

            return this.httpClient.post(url, reqBody, {
              headers: reqHeaders,
              params: reqParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
          /**
           * Esegue una chiamata PUT al'Url specificato, controllando l'errore
           * @param url Url da contattare
           * @param reqHeaders Testata
           * @param reqParams  Parametri
           * @param reqBody    Body
           */

        }, {
          key: "_httpPut",
          value: function _httpPut(url, reqHeaders, reqParams, reqBody) {
            _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata PUT a ' + url);

            reqHeaders = reqHeaders.append('authsign', this.customEncriptionService.getB64EncryptedSignature());
            return this.httpClient.put(url, reqBody, {
              headers: reqHeaders,
              params: reqParams,
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('Errore di chiamata:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Errore Backend Codice ".concat(error.status, ", ") + "Body: ".concat(error.error));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Si sono verificati errori. Riprovare.');
          }
        }, {
          key: "httpGetFile",
          value:
          /**
          * Esegue una chiamata GET al'Url specificato, controllando l'errore
          * @param url Url da contattare
          * @param reqHeaders Testata
          * @param reqParams  Parametri
          */
          function httpGetFile(url, reqHeaders) {
            _models_log_model__WEBPACK_IMPORTED_MODULE_3__["LogApp"].consoleLog('Chiamata GET a ' + url); //ritorno la get controllando l'errore


            return this.httpClient.get(url, {
              headers: reqHeaders,
              responseType: 'blob'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
          }
        }]);

        return ApicallService;
      }();

      ApicallService.ɵfac = function ApicallService_Factory(t) {
        return new (t || ApicallService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_custom_encription_service__WEBPACK_IMPORTED_MODULE_4__["CustomEncriptionService"]));
      };

      ApicallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: ApicallService,
        factory: ApicallService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\HP\My Projects\Github Projects\gouegofinal\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ALl":
    /*!**************************************************!*\
      !*** ./src/app/models/occupazionecampi.model.ts ***!
      \**************************************************/

    /*! exports provided: OccupazioneCampi */

    /***/
    function ALl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OccupazioneCampi", function () {
        return OccupazioneCampi;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var OccupazioneCampi = /*#__PURE__*/function (_library_models_iddoc) {
        _inherits(OccupazioneCampi, _library_models_iddoc);

        var _super = _createSuper(OccupazioneCampi);

        //a Seconda di TIPO cambiano le logiche di ID e IDREF
        //Tipo = SettoreAttivita.Corso -> ID = IDPianificazioneCorso IDREF = IDCorso 
        //Tipo = SettoreAttivita.Prenotazione -> ID = IDPianificazionePrenotazione e IDREF = IDPrenotazione
        function OccupazioneCampi(onlyInstance) {
          _classCallCheck(this, OccupazioneCampi);

          return _super.call(this, onlyInstance);
        }
        /**
         * Ritorna il descrittore della Struttura Campi
        */


        _createClass(OccupazioneCampi, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
            var arString = ['IDAREA', 'IDREF', 'IDLOCATION', 'IDCAMPO'];
            var arNumber = ['TIPO'];
            var arBoolean = [];
            var arDate = ['DATAINIZIO', 'DATAFINE'];
            var arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
            var arTime = ['ORAINIZIO', 'ORAFINE'];
            var arCollection = [];
            objDescriptor.className = 'OccupazioneCampi';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'OCCUPAZIONECAMPI';
            objDescriptor.describeField = '';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDAREA', 'Area');
            objDescriptor.setRelation('IDLOCATION', 'Location');
            objDescriptor.setRelation('IDCAMPO', 'Campo');

            if (this.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settorePrenotazione) {
              objDescriptor.setRelation('IDREF', 'Prenotazione');
            } else if (this.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreCorso) {
              objDescriptor.setRelation('IDREF', 'Corso');
            }

            return objDescriptor;
          }
        }, {
          key: "iconName",
          get: function get() {
            var iconName = '';

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
        }]);

        return OccupazioneCampi;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "1Gk/":
    /*!*********************************************!*\
      !*** ./src/app/services/livello.service.ts ***!
      \*********************************************/

    /*! exports provided: LivelloService */

    /***/
    function Gk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LivelloService", function () {
        return LivelloService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_livello_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/livello.model */
      "TH60");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LivelloService = /*#__PURE__*/function () {
        function LivelloService(apiService, docService) {
          _classCallCheck(this, LivelloService);

          this.apiService = apiService;
          this.docService = docService;
          this._listLivelli = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._loaded = false;
        }

        _createClass(LivelloService, [{
          key: "listLivelli",
          get: function get() {
            return this._listLivelli.asObservable();
          }
          /**
          * Ritorna la lista non in modalità Observable
          */

        }, {
          key: "actualListLivelli",
          get: function get() {
            return this._listLivelli.getValue();
          }
          /**
           * Richiede al server l'elenco dei Livelli
           * @param config Parametri configurazione chiamata
           */

        }, {
          key: "request",
          value: function request(config) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'LIVELLO'; //Nei Parametri imposto il LivelloAutorizzazione

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('LivelloAutorizzazione', '0');
              var myUrl = config.urlBase + '/' + doObject;

              _this2.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.LIVELLO;
              })).subscribe(function (resultData) {
                if (resultData) {
                  //Arrivati dal server
                  _this2._loaded = true;

                  for (var index = 0; index < resultData.length; index++) {
                    var element = resultData[index];
                    var newLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_3__["Livello"]();
                    newLivello.setJSONProperty(element);

                    _this2.addLivello(newLivello);
                  }

                  resolve(_this2.actualListLivelli);
                } else {
                  reject('No data Livello retrieved');
                }
              }, function (error) {
                reject(error);
              });
            });
          } //Aggiunge un livello

        }, {
          key: "addLivello",
          value: function addLivello(objLivello) {
            var _this3 = this;

            this.listLivelli.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collLivelli) {
              _this3._listLivelli.next(collLivelli.concat(objLivello));
            });
          }
          /**
           * Richiede al server l'elenco dei Livelli per lo Sport
           * @param idSport Sport da utilizzare
           * @returns Promise Array Livelli Ordinati
           *
           */

        }, {
          key: "requestLivelliForSport",
          value: function requestLivelliForSport(idSport) {
            var _this4 = this;

            var collLivelli = [];
            return new Promise(function (resolve) {
              if (idSport && idSport.length != 0) {
                //Devo effettuare la chiamata al server
                var filterLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_3__["Livello"](true);
                filterLivello.IDSPORT = idSport; //Effettuo la richiesta

                _this4.docService.requestNew(filterLivello).then(function (collData) {
                  collLivelli = collData;
                  resolve(collLivelli);
                })["catch"](function (error) {
                  resolve(collLivelli);
                });
              } else {
                resolve(collLivelli);
              }
            });
          }
        }]);

        return LivelloService;
      }();

      LivelloService.ɵfac = function LivelloService_Factory(t) {
        return new (t || LivelloService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__["DocstructureService"]));
      };

      LivelloService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: LivelloService,
        factory: LivelloService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "1IFm":
    /*!************************************************!*\
      !*** ./src/app/models/articolocolore.model.ts ***!
      \************************************************/

    /*! exports provided: ArticoloColore */

    /***/
    function IFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticoloColore", function () {
        return ArticoloColore;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var ArticoloColore = /*#__PURE__*/function (_library_models_iddoc2) {
        _inherits(ArticoloColore, _library_models_iddoc2);

        var _super2 = _createSuper(ArticoloColore);

        function ArticoloColore() {
          _classCallCheck(this, ArticoloColore);

          return _super2.apply(this, arguments);
        }

        _createClass(ArticoloColore, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDARTICOLO', 'DESCRIZIONE'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'ArticoloColore';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'ARTICOLOCOLORE';
            objDescriptor.describeField = 'DESCRIZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            objDescriptor.setRelation('IDARTICOLO', 'Articolo');
            return objDescriptor;
          }
        }]);

        return ArticoloColore;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "1W3u":
    /*!******************************************!*\
      !*** ./src/app/services/area.service.ts ***!
      \******************************************/

    /*! exports provided: AreaService */

    /***/
    function W3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaService", function () {
        return AreaService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_area_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/area.model */
      "v/X4");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AreaService = /*#__PURE__*/function () {
        function AreaService(apiService) {
          _classCallCheck(this, AreaService);

          this.apiService = apiService; //Elenco Aree

          this._listAree = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._areaSelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_area_model__WEBPACK_IMPORTED_MODULE_3__["Area"]());
        }

        _createClass(AreaService, [{
          key: "listAree",
          get: function get() {
            return this._listAree.asObservable();
          }
        }, {
          key: "areaSelected",
          get: function get() {
            return this._areaSelected.asObservable();
          }
          /** Ritorna il valore attuale dell'area selezionata */

        }, {
          key: "areaSelectedValue",
          get: function get() {
            return this._areaSelected.getValue();
          }
          /**
           * Richiede le Aree legate al Gruppo, ed imposta
           * sia la Lista delle Aree che un Area Selezionata
           *
           * @param config Parametri di configurazione
           */

        }, {
          key: "request",
          value: function request(config, _childLevel) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'AREAOPERATIVA';

              if (!_childLevel) {
                _childLevel = 2;
              }

              myHeaders = myHeaders.set('child-level', _childLevel + ''); // Nei parametri imposto il gruppo Sportivo

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDGRUPPOSPORTIVO', config.gruppo.ID);
              var myUrl = config.urlBase + '/' + doObject;

              _this5.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
                return fullData.AREAOPERATIVA;
              })).subscribe(function (resultData) {
                //Ricreo l'array di Aree
                _this5._listAree.next([]); //Aggiungo i valori


                _this5._addMultipleAree(resultData, true);

                resolve();
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Aggiunge un insieme di elementi all'array delle aree
           * @param dataJSON JSON Received
           * @param firstSelect Seleziona il primo elemento e rendilo come Area Selezionata
           */

        }, {
          key: "_addMultipleAree",
          value: function _addMultipleAree(dataJSON, firstSelect) {
            var _this6 = this;

            var count = 0;

            if (dataJSON) {
              dataJSON.forEach(function (element) {
                var newArea = new _models_area_model__WEBPACK_IMPORTED_MODULE_3__["Area"]();
                newArea.setJSONProperty(element); //Primo Giro e mi richiede di selezionare

                if (firstSelect && count == 0) {
                  _this6._areaSelected.next(newArea);
                }

                _this6.listAree.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collAree) {
                  _this6._listAree.next(collAree.concat(newArea));
                });

                count++;
              });
            }
          }
          /**
           * Seleziona l'area richiesta per ID
           * @param idArea ID Area da Selezionare
           */

        }, {
          key: "selectAreaByID",
          value: function selectAreaByID(idArea) {
            var arElement = this._listAree.getValue();

            var elSelected = arElement.find(function (element) {
              return element.ID == idArea;
            });

            if (elSelected) {
              //Ememtto la modifica
              this._areaSelected.next(elSelected);
            }
          }
        }]);

        return AreaService;
      }();

      AreaService.ɵfac = function AreaService_Factory(t) {
        return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]));
      };

      AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: AreaService,
        factory: AreaService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "1pu4":
    /*!****************************************************!*\
      !*** ./src/app/library/services/crypto.service.ts ***!
      \****************************************************/

    /*! exports provided: CryptoService */

    /***/
    function pu4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CryptoService", function () {
        return CryptoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CryptoService = /*#__PURE__*/function () {
        function CryptoService() {
          _classCallCheck(this, CryptoService);
        } //Example here: https://cryptojs.gitbook.io/docs/#hashing
        //The set method is use for encrypt the value.


        _createClass(CryptoService, [{
          key: "setAES",
          value: function setAES(keys, value) {
            var key = CryptoJS.enc.Utf8.parse(keys);
            var iv = CryptoJS.enc.Utf8.parse(keys);
            var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
              keySize: 128 / 8,
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
            });
            return encrypted.toString();
          } //The get method is use for decrypt the value.

        }, {
          key: "getAES",
          value: function getAES(keys, value) {
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
        }, {
          key: "setSHA256",
          value: function setSHA256(keys, value) {
            var key = CryptoJS.enc.Utf8.parse(keys);
            var iv = CryptoJS.enc.Utf8.parse(keys);
            var encrypted = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(value.toString()));
            return encrypted.toString();
          }
        }, {
          key: "getBCrypt",
          value: function getBCrypt(value) {
            var encrypted = '';
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

        }, {
          key: "mySplitPassword",
          value: function mySplitPassword(pwd) {
            var result = false;
            var arFirst = [];
            var arSecond = [];
            var strFirst;
            var strSecond;
            var elArray = [];

            if (pwd && pwd.length !== 0) {
              result = true;

              for (var index = 0; index < pwd.length; index++) {
                var token = pwd.substr(index, 1);

                if ((index + 1) % 2 == 0) {
                  arSecond.push(token);
                } else {
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
        }]);

        return CryptoService;
      }();

      CryptoService.ɵfac = function CryptoService_Factory(t) {
        return new (t || CryptoService)();
      };

      CryptoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CryptoService,
        factory: CryptoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "24+7":
    /*!**************************************************!*\
      !*** ./src/app/services/prenotazione.service.ts ***!
      \**************************************************/

    /*! exports provided: PrenotazioneService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrenotazioneService", function () {
        return PrenotazioneService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/prenotazione.model */
      "hXF6");
      /* harmony import */


      var _sport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sport.service */
      "KG3q");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../library/models/postResult.model */
      "uNYz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrenotazioneService = /*#__PURE__*/function () {
        function PrenotazioneService(apiService, sportService) {
          _classCallCheck(this, PrenotazioneService);

          this.apiService = apiService;
          this.sportService = sportService;
          this._listPrenotazioni = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._activePrenotazione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]());
        }
        /** Prenotazione */


        _createClass(PrenotazioneService, [{
          key: "activePrenotazione",
          get: function get() {
            return this._activePrenotazione.asObservable();
          }
        }, {
          key: "listPrenotazioni",
          get: function get() {
            return this._listPrenotazioni.asObservable();
          } //Memorizzo il campo selezionato

        }, {
          key: "selectedCampo",
          get: function get() {
            return this._selectedCampo;
          } // Imposta come attiva la Prenotazione passata
          ,
          set: function set(value) {
            this._selectedCampo = value;
          }
        }, {
          key: "setActivePrenotazione",
          value: function setActivePrenotazione(value) {
            this._activePrenotazione.next(value);
          }
          /**
           * Inizializza la prenotazione con l'AREA
           * @param idArea Area Operativa
           */

        }, {
          key: "initActivePrenotazione",
          value: function initActivePrenotazione(idArea) {
            var _this7 = this;

            this.activePrenotazione.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (elPrenotazione) {
              elPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
              elPrenotazione.initNewPrenotazione(idArea);

              _this7._activePrenotazione.next(elPrenotazione);
            });
          }
          /**
           * Imposta la Pianificazione Singola
           * @param docPianificazione Pianificazione da impostare
           */

        }, {
          key: "setPianificazioneSingola",
          value: function setPianificazioneSingola(docPianificazione) {
            var _this8 = this;

            this.activePrenotazione.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (elPrenotazione) {
              elPrenotazione.setPianificazioneSingola(docPianificazione);

              _this8._activePrenotazione.next(elPrenotazione);
            });
          }
          /**
           *
           */

        }, {
          key: "setIDUtenteActivePrenotazione",
          value: function setIDUtenteActivePrenotazione(docUtente) {
            var _this9 = this;

            this.activePrenotazione.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (elPrenotazione) {
              elPrenotazione.setUtente(docUtente.ID, docUtente.NOMINATIVO);

              _this9._activePrenotazione.next(elPrenotazione);
            });
          }
          /**
           * Richiesta elenco Prenotazioni
           * @param config Parametri di configurazione
           * @param idUtente idUtente
           */

        }, {
          key: "request",
          value: function request(config) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

              var doObject = 'PRENOTAZIONE'; // Nei parametri imposto il gruppo Sportivo

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDGRUPPOSPORTIVO', config.gruppo.ID);
              var myUrl = config.urlBase + '/' + doObject;

              _this10.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
                return fullData.PRENOTAZIONE;
              })).subscribe(function (resultData) {
                for (var index = 0; index < resultData.length; index++) {
                  var element = resultData[index];
                  var docPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
                  docPrenotazione.setJSONProperty(element);

                  _this10.add2ListPrenotazioni(docPrenotazione);
                }

                resolve(_this10._listPrenotazioni.getValue());
              }, function (error) {
                reject(error);
              });
            });
          } //Aggiunge una attivita alla lista globale

        }, {
          key: "add2ListPrenotazioni",
          value: function add2ListPrenotazioni(objPrenotazione) {
            var _this11 = this;

            var listSport = this.sportService.actualListSport;
            this.listPrenotazioni.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collLocation) {
              _this11._listPrenotazioni.next(collLocation.concat(objPrenotazione));
            });
          }
          /**
           * Richiede una prenotazione al server
           * @param config Dati configurazione
           * @param idPrenotazione IdPrenotazione
           */

        }, {
          key: "requestById",
          value: function requestById(config, idPrenotazione, numLivelli) {
            var _this12 = this;

            //let myHeaders = new HttpHeaders({'Content-type':'text/plain'}).append('child-level', numLivelli + '');
            var myHeaders = config.getHttpHeaders();
            var doObject = 'PRENOTAZIONE';
            myHeaders = myHeaders.append('child-level', numLivelli + ''); // Nei parametri imposto idPrenotazion richiesto

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idPrenotazione);
            var myUrl = config.urlBase + '/' + doObject;
            return this.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
              var docPrenotazione;

              if (fullData) {
                if (fullData.hasOwnProperty('PRENOTAZIONE')) {
                  var collPrenotazioni = fullData.PRENOTAZIONE;

                  if (collPrenotazioni.length !== 0) {
                    var listSport = _this12.sportService.actualListSport;
                    docPrenotazione = new _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"]();
                    docPrenotazione.setJSONProperty(collPrenotazioni[0]);
                    docPrenotazione.PRENOTAZIONEPIANIFICAZIONE.forEach(function (elPianificazione) {
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

        }, {
          key: "requestImporto",
          value: function requestImporto(config) {
            var docPrenotazione = this._activePrenotazione.getValue();

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'MOBBOOKINGTOTALE');
            myHeaders = myHeaders.append('child-level', '999');
            var paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi

            var doObject = 'PRENOTAZIONE';
            var myUrl = config.urlBase + '/' + doObject; //Questi sono i parametri per l'esportazione

            var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
            paramExport.clearDOProperty = false;
            paramExport.clearPKProperty = false;
            paramExport.clearPrivateProperty = true; //Creo il JSON del documento , eliminando le proprietà private (clear = true) ed inviando le proprietà do e le chiavi primarie(clear = false)

            var myBodyJSON = docPrenotazione.exportToJSON(paramExport); //Il parametro inviato nel body deve essere strutturato cosi
            // { "nomeParametro" : { oggetto exportato JSON } }

            var myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}';
            return this.apiService.httpPost(myUrl, myHeaders, myParams, myBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
              //fulldata è già l'oggetto Prenotazione
              return fullData;
            }));
          }
          /**
           * Ritorna una Promise per salvare il documento
           * @param config Configurazione
           */

        }, {
          key: "requestSave",
          value: function requestSave(config) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              var docPrenotazione = _this13._activePrenotazione.getValue();

              var myHeaders = config.getHttpHeaders();
              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              var paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi
              //Imposto gli header aggiuntivi

              myHeaders = myHeaders.append('X-HTTP-Method-Override', 'MOBBOOKINGSAVE');
              myHeaders = myHeaders.append('child-level', '999'); //Quali proprietà non voglio esportare

              var noExportDO = false;
              var noExportPK = true;
              var noExportPrivate = true;
              var doObject = 'PRENOTAZIONE';
              var myUrl = config.urlBase + '/' + doObject; //Questi sono i parametri per l'esportazione

              var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
              paramExport.clearDOProperty = false;
              paramExport.clearPKProperty = true;
              paramExport.clearPrivateProperty = true; //Creo il JSON del documento , eliminando le proprietà do e private (true) e le chiavi primarie(true)

              var myBodyJSON = docPrenotazione.exportToJSON(paramExport); //Il parametro inviato nel body deve essere strutturato cosi

              var myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}'; //Chiamo per il salvataggio                      

              _this13.apiService.httpPost(myUrl, myHeaders, myParams, myBody).subscribe(function (elPrenotazione) {
                var receivedPrenotazione = _models_prenotazione_model__WEBPACK_IMPORTED_MODULE_4__["Prenotazione"].getPrenotazioneFromJson(elPrenotazione);

                if (receivedPrenotazione.ISVALID == true) {
                  resolve(receivedPrenotazione);
                } else {
                  var errMessage = '';

                  if (receivedPrenotazione.MSGINVALID && receivedPrenotazione.MSGINVALID.length != 0) {
                    errMessage = receivedPrenotazione.MSGINVALID;
                  } else {
                    errMessage = 'Salvataggio Fallito';
                  }

                  reject(errMessage);
                }
              }, function (error) {
                console.log(error);
                var errMessage = 'Errore di connessione';
                reject(errMessage);
              });
            });
          }
          /**
           * Richiede al server la cancellazione di una pianificazione
           * @param idPianificazione
           */

        }, {
          key: "requestDelete",
          value: function requestDelete(idPianificazione, config) {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              var method = 'MOBBOOKINGDELETE';
              var doObject = 'PRENOTAZIONE';
              var myUrl = config.urlBase + '/' + doObject; //headers

              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('X-HTTP-Method-Override', method); //params

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idPianificazione', idPianificazione); //abbiamo tutto, faccio la richiesta

              _this14.apiService.httpGet(myUrl, myHeaders, myParams).subscribe(function (data) {
                //creo l'oggetto con la risposta
                var response = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__["PostResponse"]();
                response.setFromResponse(data);
                resolve(response);
              }, function (err) {
                //creo comunque un postResponse fittizio
                var response = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_7__["PostResponse"]();
                response.result = false;
                response.message = "Connessione non riuscita";
                reject(response);
              });
            });
          }
        }]);

        return PrenotazioneService;
      }();

      PrenotazioneService.ɵfac = function PrenotazioneService_Factory(t) {
        return new (t || PrenotazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_sport_service__WEBPACK_IMPORTED_MODULE_5__["SportService"]));
      };

      PrenotazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: PrenotazioneService,
        factory: PrenotazioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "550M":
    /*!*****************************************************!*\
      !*** ./src/app/services/iscrizionecorso.service.ts ***!
      \*****************************************************/

    /*! exports provided: IscrizionecorsoService */

    /***/
    function M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IscrizionecorsoService", function () {
        return IscrizionecorsoService;
      });
      /* harmony import */


      var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/postResult.model */
      "uNYz");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/iscrizionecorso.model */
      "9PZ8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IscrizionecorsoService = /*#__PURE__*/function () {
        function IscrizionecorsoService(docStructureService) {
          _classCallCheck(this, IscrizionecorsoService);

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


        _createClass(IscrizionecorsoService, [{
          key: "getPostiDisponibiliCorso",
          value: function getPostiDisponibiliCorso(idCorso) {
            var _this15 = this;

            return new Promise(function (resolve) {
              var myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
              var myReturn;
              var docToCall = new _models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_3__["IscrizioneCorso"]();

              if (idCorso && idCorso.length != 0) {
                myPostParams.key = 'idCorso';
                myPostParams.value = idCorso;

                _this15.docStructureService.requestForFunction(docToCall, 'getPostiDisponibili', '', myPostParams).then(function (risposta) {
                  resolve(risposta);
                })["catch"](function (error) {
                  myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                  myReturn.result = false;
                  myReturn.message = 'Nessun posto disponibile';
                  resolve(myReturn);
                });
              } else {
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

        }, {
          key: "requestSaveIscrizione",
          value: function requestSaveIscrizione(docIscrizione) {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              var myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
              var myReturn;

              if (docIscrizione) {
                myPostParams.key = 'docIscrizione';
                myPostParams.value = docIscrizione;

                _this16.docStructureService.requestForFunction(docIscrizione, 'mobBookingSave', docIscrizione, myPostParams).then(function (risposta) {
                  resolve(risposta);
                })["catch"](function (error) {
                  myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                  myReturn.result = false;
                  myReturn.message = error.message;
                  resolve(myReturn);
                });
              } else {
                myReturn = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_0__["PostResponse"]();
                myReturn.result = false;
                myReturn.message = 'Errore preparazione Iscrizione';
                resolve(myReturn);
              }
            });
          }
        }]);

        return IscrizionecorsoService;
      }();

      IscrizionecorsoService.ɵfac = function IscrizionecorsoService_Factory(t) {
        return new (t || IscrizionecorsoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__["DocstructureService"]));
      };

      IscrizionecorsoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: IscrizionecorsoService,
        factory: IscrizionecorsoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "5usX":
    /*!****************************************************!*\
      !*** ./src/app/library/models/iddocument.model.ts ***!
      \****************************************************/

    /*! exports provided: IDDocument, ParamsExport, IDRepository, FieldOrCondition, FilterCondition, IDOriginal, IDProperty, IDTag, OperatorCondition */

    /***/
    function usX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDDocument", function () {
        return IDDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParamsExport", function () {
        return ParamsExport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDRepository", function () {
        return IDRepository;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldOrCondition", function () {
        return FieldOrCondition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterCondition", function () {
        return FilterCondition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDOriginal", function () {
        return IDOriginal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDProperty", function () {
        return IDProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDTag", function () {
        return IDTag;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperatorCondition", function () {
        return OperatorCondition;
      });
      /* harmony import */


      var _descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./descriptor.model */
      "Wz4r");
      /* harmony import */


      var _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mydatetime.model */
      "K4nM");

      var IDDocument = /*#__PURE__*/function () {
        /**
         *
         * @param onlyInstance Non inizializzare con valori predefiniti il documento, crea solo l'istanza
         */
        function IDDocument(onlyInstance) {
          _classCallCheck(this, IDDocument);

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

        _createClass(IDDocument, [{
          key: "inserted",
          get: function get() {
            return this.do_inserted;
          }
        }, {
          key: "deleted",
          get: function get() {
            return this.do_deleted;
          }
          /**
           * Cerca nel documento la proprietà icone o iconasport e ne calcola
           * la stringa esadecimale
           */

        }, {
          key: "htmlIconHex",
          get: function get() {
            var value = '';
            var valueIcon = '';

            if (this.hasOwnProperty('IDSPORT')) {
              if (this.hasOwnProperty('ICONASPORT')) {
                value = this['ICONASPORT'];
              }
            } else if (this.hasOwnProperty('ICONA')) {
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

        }, {
          key: "ForeignKeys",
          get: function get() {
            var objDescriptor = this.getDescriptor();
            return objDescriptor.foreignKeys;
          }
          /**
           * Imposta il valore nella chiave primaria
           * @param value Valore Chiave Primaria
           */

        }, {
          key: "setPrimaryKey",
          value: function setPrimaryKey(value) {
            this.ID = value;
          }
          /**
           * Ritorna la PrimaryKey del documento
           * @param type = 'value' Torna il fieldValue
           * @param type = 'name' Torna il fieldName
           */

        }, {
          key: "getPrimaryKey",
          value: function getPrimaryKey() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
            var objDescriptor;
            var propName = '';
            var retValue = '';
            objDescriptor = this.getDescriptor();

            if (objDescriptor) {
              propName = objDescriptor.primaryKeyFieldName;

              if (propName) {
                if (type == 'value') {
                  try {
                    retValue = this[propName];
                  } catch (error) {
                    retValue = '';
                    console.log(error);
                  }
                } else if (type == 'name') {
                  retValue = propName;
                }
              }
            }

            return retValue;
          } //Generazione GUID

        }, {
          key: "newID",
          value: function newID() {
            var strValue = '10000000-1000-4000-8000-100000000000';
            var guid = strValue.replace(/[018]/g, function (c) {
              return (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16);
            });
            guid = guid.toUpperCase();
            return guid;
          }
          /**
           * Metodo Overrable
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            objDescriptor.add('ID', _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            return objDescriptor;
          }
          /**
           * Converte e formatta un valore in stringa
           * Usato per scriverlo nei parametri di chiamata
           * @param tipo Tipo del dato
           * @param value Valore
           */

        }, {
          key: "formatValue",
          value: function formatValue(tipo, value) {
            var strValue = '';

            switch (tipo) {
              case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]:
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

              case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]:
                if (value) {
                  strValue = '-1';
                } else {
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

        }, {
          key: "exportToJSON",
          value: function exportToJSON(paramExport) {
            var _this17 = this;

            var _this = this;

            var arProperty = Object.keys(_this); //Chiedo il Descrittore della classe

            var objDescriptor = _this.getDescriptor();

            var strJSON = '';
            var doProperty = ['do_updated', ' do_loaded', 'do_inserted', 'do_deleted', 'selected'];
            var propExclud = [];
            var row = '';
            var skipAll = false;

            if (!paramExport) {
              paramExport = new ParamsExport();
            } // Vuole eliminare le doProperty, le aggiungo all'Array


            if (paramExport.clearDOProperty) {
              //Popolo l'array propExclud con le doProperty
              doProperty.forEach(function (element) {
                propExclud.push(element);
              });
            } //Se vuole non esportare la chiave primaria la aggiungo all'Array esclusioni


            if (paramExport.clearPKProperty) {
              propExclud.push(this.getPrimaryKey('name'));
            } //Devo esportare solo i documenti modificati e non ci sono modifiche


            if (paramExport.onlyDocModified && !this.isModified(999)) {
              skipAll = true;
            }

            if (!skipAll) {
              //Ciclo sulle proprietà
              arProperty.forEach(function (element) {
                var useElement = true; //Se devo togliere le proprietà private le elimino

                if (paramExport.clearPrivateProperty && element.startsWith('_')) {
                  useElement = false;
                } //Controlliamo se il valore è diverso dal valore original


                if (paramExport.onlyPropertyModified) {
                  //Chiave primaria devo passarla anche se non modificata
                  if (element != _this17.getPrimaryKey('name')) {
                    //Controllo se la proprietà risulta modificata o no
                    if (_this.propertyIsModified(element) == false) {
                      useElement = false;
                    }
                  }
                }

                if (useElement) {
                  //Inizio la riga con l'elemento
                  row = '\"' + element + '\"' + ':'; //Proprietà di tipo Array

                  if (Array.isArray(_this[element]) == true) {
                    //Qui gestisco l'Array
                    var arElements = _this[element];
                    var strArray = '';
                    var strElArray = ''; //Ciclo sugli elementi

                    for (var index = 0; index < arElements.length; index++) {
                      var _element = void 0;

                      _element = arElements[index];
                      strElArray = _element.exportToJSON(paramExport);

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
                  } else {
                    var skip = false; //Vuole eliminare le proprietà DO e private e/o le chiavi primarie

                    if (propExclud.length !== 0) {
                      if (propExclud.includes(element)) {
                        skip = true;
                      }
                    } //Proseguo con l'esportazione


                    if (!skip) {
                      //Chiedo il Tipo del Campo con il descriptor
                      var tipoCampo = objDescriptor.getType(element);

                      if (tipoCampo !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].undefined && _this[element] !== undefined) {
                        switch (tipoCampo) {
                          case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]:
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
                            row += '\"' + _this17.formatDateTimeISO(_this[element]) + '\"';
                            break;

                          case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date:
                            //E' una data
                            row += '\"' + _this17.formatDateISO(_this[element]) + '\"';
                            break;

                          case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime:
                            //Campo di tipo DATAORA
                            row += '\"' + _this17.formatDateTimeISO(_this[element]) + '\"';
                            break;

                          case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]:
                            var valore = _this[element]; //Se la stringa contenesse all'interno simboli di " devono essere esportati come \"
                            //Esempio: "ciao";"tuo" => \"ciao\";\"tuo\"

                            valore = valore.replace(/"/g, "\\\"");
                            row += '\"' + valore + '\"';
                            break;

                          default:
                            row += _this[element];
                            break;
                        }
                      } else {
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

        }, {
          key: "toJSON",
          value: function toJSON() {
            var _this18 = this;

            var strJSON = '';

            var _this = Object.assign({}, this);

            var arKeys = Object.keys(_this);
            /** Ciclo sulle proprietà */

            /* Ho il problema di formattazione Data/Ora che INDE lo vuole come YYYY-MM-DD hh:nn:ss */

            arKeys.forEach(function (element) {
              if (_this[element] instanceof Date) {
                //Se è di tipo data lo cambio formattandolo in ISODATETIME
                _this[element] = _this18.formatDateTimeISO(_this[element]);
              }
            }); // Ora eseguo lo stringify

            strJSON = JSON.stringify(_this);
            return strJSON;
          } // Imposta le proprietà basiche dell'oggetto via JSON

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(dataObject) {
            var _this = this;

            var arProperty = Object.keys(dataObject); //Chiedo il Descrittore della classe

            var objDescriptor = _this.getDescriptor(); // Gli elementi di tipo Array non li copio


            arProperty.forEach(function (element) {
              if (Array.isArray(dataObject[element]) == false) {
                //Chiedo il Tipo del Campo con il descriptor
                var tipoCampo = objDescriptor.getType(element);

                if (tipoCampo !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].undefined) {
                  switch (tipoCampo) {
                    case _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]:
                      var value = parseInt(dataObject[element], 10);

                      if (value === -1) {
                        _this[element] = true;
                      } else {
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
            }); //Imposto che il documento è originale

            this.setOriginal();
          } //Formatta una data passata in ISO (Solo la parte data)

        }, {
          key: "formatDateISO",
          value: function formatDateISO(data) {
            var format = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateISO(data);

            return format;
          } //Formatta una data passata in ISO (Data e Ora)

        }, {
          key: "formatDateTimeISO",
          value: function formatDateTimeISO(data) {
            var _final = _mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateTimeISO(data);

            return _final;
          }
          /** Imposta il documento Originale come se fosse sul database */

        }, {
          key: "setOriginal",
          value: function setOriginal() {
            this.do_updated = false;
            this.do_inserted = false;
            this.do_deleted = false;
            this.do_loaded = true; //Imposta il documento come originale

            this._original.setAsOriginal(this);
          }
          /**
           * Imposta tutti gli elementi come cancellati
           * @param arElements Array di ELementi IDDOcument o che estendono IDDocument
           */

        }, {
          key: "getPropertyType",
          value: //#endregion
          //#region REFLECTOR PROPRIETA'

          /**
           * Tipo della proprietà
           * @param PropertyName Nome della proprietà
           */
          function getPropertyType(PropertyName) {
            var objDescriptor = this.getDescriptor();
            return objDescriptor.getType(PropertyName);
          }
          /**
           * Ritorna TypeReflector del campo passato come parametro
           * @param fieldName Nome del campo
           */

        }, {
          key: "getTypeReflectorByFieldName",
          value: function getTypeReflectorByFieldName(fieldName) {
            var objDescriptor = this.getDescriptor();
            return objDescriptor.getByFieldName(fieldName);
          }
          /**
           * Controlla se il campo è presente nell'istanza
           * @param fieldName Nome del campo richiesto
           */

        }, {
          key: "propertyInDoc",
          value: function propertyInDoc(fieldName) {
            var arProperty = Object.keys(this);
            var contain = false;

            if (fieldName && fieldName.length !== 0) {
              contain = arProperty.includes(fieldName);
            }

            return contain;
          } //#endregion

          /**
           * Controlla se un campo contiene dei dati oppure è vuoto
           * considerando qualsiasi valore undefined, null, nullstring
           * @param fieldName Nome del campo
           */

        }, {
          key: "propertyIsEmpty",
          value: function propertyIsEmpty(fieldName) {
            var inDoc = this.propertyInDoc(fieldName);
            var empty = false;

            if (inDoc) {
              if (this[fieldName] == undefined || this[fieldName] == null) {
                empty = true;
              } else {
                empty = (this[fieldName] + '').length == 0 ? true : false;
              }
            } else {
              empty = true;
            }

            return empty;
          } //#region CONTROLLO MODIFICHE DOCUMENTO

          /**
           * Controlla se una proprietà risulta modificata
           * @param propertyName Nome Proprietà
           */

        }, {
          key: "propertyIsModified",
          value: function propertyIsModified(propertyName) {
            var modified = false;
            var typeProp = this.getTypeReflectorByFieldName(propertyName); //Proprietà presente

            if (this.propertyInDoc(propertyName) && typeProp) {
              if (typeProp.fieldType != _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                modified = this._original.propertyIsModified(this, propertyName);
              } else {
                //E' una collection
                var arList = this[propertyName];

                for (var index = 0; index < arList.length; index++) {
                  var elDoc = arList[index];
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

        }, {
          key: "isModified",
          value: function isModified() {
            var numLivelli = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var objDescriptor;
            var retModified = false; //Chiedo il descrittore dei campi

            objDescriptor = this.getDescriptor();

            if (objDescriptor) {
              //Ciclo su tutte le proprietà non di tipo collection
              for (var index = 0; index < objDescriptor.fields.length; index++) {
                var element = objDescriptor.fields[index];

                if (element.fieldType !== _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                  //Chiedo alla proprietà se è modificata
                  retModified = this.propertyIsModified(element.fieldName);

                  if (retModified) {
                    //Basta che un valore sia modificato e tutto il documento 
                    //è modificato
                    break;
                  }
                }
              } //Il documento nelle sue proprietà non è modificato


              if (!retModified) {
                //Devo scendere di livello e controllare se sono 
                //modificati i figli
                if (numLivelli > 0) {
                  //Ciclo ancora sul descrittore
                  for (var _index = 0; _index < objDescriptor.fields.length; _index++) {
                    var _element2 = objDescriptor.fields[_index]; //Cerco le collection

                    if (_element2.fieldType == _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                      //il Documento contiene questa collection ?
                      if (this.propertyInDoc(_element2.fieldName)) {
                        if (Array.isArray(this[_element2.fieldName])) {
                          //Prendo l'array di elementi e ciclo alla ricerca
                          var arElements = this[_element2.fieldName]; //Ciclo sugli elementi dell'array

                          for (var _index2 = 0; _index2 < arElements.length; _index2++) {
                            var elDoc = arElements[_index2];
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
          } //#endregion
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

        }, {
          key: "addToRepositoryRelDoc",
          value: function addToRepositoryRelDoc(document, seqFields) {
            var docExist;
            var identity = ''; //Documento da aggiungere

            if (document) {
              //Aggiungo con una sequenza 
              if (seqFields && seqFields.length != 0) {
                identity = seqFields.toString();
              } else {
                //Aggiungo per primaryKey
                //Chiedo la PrimaryKey
                identity = document.getPrimaryKey();
              } //Cerco se è già nel repository


              if (identity && identity.length != 0) {
                docExist = this.getDocInRepository(identity);
              } //Esiste lo aggiorno


              if (docExist) {
                docExist = document;
              } else {
                var newRep = new IDRepository();
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

        }, {
          key: "getDocInRepository",
          value: function getDocInRepository(pkOrSeq) {
            var docReturn;
            var identity;

            if (pkOrSeq) {
              if (Array.isArray(pkOrSeq)) {
                identity = pkOrSeq.toString();
              } else {
                identity = pkOrSeq;
              }

              if (identity && identity.length != 0) {
                //Ricerchiamo all'interno del repository
                for (var index = 0; index < this._repositoryRelDoc.length; index++) {
                  var element = this._repositoryRelDoc[index]; //Documento trovato lo ritorno
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

        }, {
          key: "getDocPropertyInRepository",
          value: function getDocPropertyInRepository(pkOrSeq, fieldName) {
            var relDoc;
            var valRet;
            var identity = '';

            if (pkOrSeq && fieldName && fieldName.length != 0) {
              //Identita di un Documento Correlato è o la chiave primaria o la sequenza dei campi di ricerca
              if (Array.isArray(pkOrSeq)) {
                identity = pkOrSeq.toString();
              } else {
                identity = pkOrSeq;
              } //Con una identity cerco il documento


              if (identity) {
                relDoc = this.getDocInRepository(identity);
              } //Se è presente il documento, ricavo la proprietà


              if (relDoc) {
                var inDoc = relDoc.propertyInDoc(fieldName);

                if (inDoc) {
                  valRet = relDoc[fieldName];
                }
              }
            }

            return valRet;
          } //#endregion
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

        }, {
          key: "setWithChanges",
          value: function setWithChanges(docActual, docModify) {
            var hasModifiche = false;

            var _this = this; // La chiave primaria viene sempre copiata


            _this.ID = docActual.ID; //Chiedo il Descrittore della classe

            var objDescriptor = _this.getDescriptor();
            /**
             * Ciclo sui campi del documento
             */


            objDescriptor.fields.forEach(function (field) {
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

        }, {
          key: "JSONReplacer",
          value: function JSONReplacer(key, value) {
            if (value instanceof Date) {
              return this.formatDateTimeISO(value);
            }

            return value;
          } //#endregion
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

        }, {
          key: "lookup",
          value: function lookup(propertyToDecode, listDecode, propertyLookup) {
            var namePropertyIDX = propertyToDecode;
            var namePropertyDESCR = '_DESCR' + namePropertyIDX.substring(2, namePropertyIDX.length);

            var _this = this; //Proprieta Indice e Descrizione presenti


            if (_this.hasOwnProperty(namePropertyIDX) && _this.hasOwnProperty(namePropertyDESCR)) {
              if (listDecode && propertyLookup) {
                var element = listDecode.find(function (value) {
                  return value.ID == _this[namePropertyIDX];
                });

                if (element) {
                  if (element.hasOwnProperty(propertyLookup)) {
                    _this[namePropertyDESCR] = element[propertyLookup];
                  }
                }
              }
            }
          } //#endregion
          //#region CONDITION

          /**
           * Aggiunge una condizione di filtro differente dalla semplice uguaglianza
           * @param operator    Operatore = > <
           * @param fieldName   Nome Campo
           * @param listOrValue Solo per uguaglianza è possibile indicare un array con i valori da mettere in OR
           */

        }, {
          key: "addFilterCondition",
          value: function addFilterCondition(operator, fieldName, listOrValue) {
            if (fieldName) {
              var objCondition = new FilterCondition(operator, fieldName, listOrValue);

              this._filterConditions.push(objCondition);
            }
          }
          /**
           * Cerca se nelle Condizioni di Filtro è presente il campo e ne ritorna l'oggetto FilterCondition
           * @param fieldName Nome del campo
           */

        }, {
          key: "getFilterConditionByFieldName",
          value: function getFilterConditionByFieldName(fieldName) {
            var objFilter; //Cerchiamo nell'array delle condizioni

            objFilter = this._filterConditions.find(function (element) {
              return element.fieldName == fieldName;
            });
            return objFilter;
          }
          /**
           * Ritorna l'operatore della condizione di Filtro impostata nel campo
           * Di Default viene tornata sempre l'uguaglianza
           * @param fieldName Nome del campo
           */

        }, {
          key: "getFilterOperatorByFieldName",
          value: function getFilterOperatorByFieldName(fieldName) {
            var objFilter;
            var operator = OperatorCondition.uguale;

            if (fieldName && fieldName.length !== 0) {
              //Chiedo la condizione di filtro se presente
              objFilter = this.getFilterConditionByFieldName(fieldName); //Se presente recupero l'operatore della condizione

              if (objFilter) {
                operator = objFilter.operator;
              }
            }

            return operator;
          } //#endregion
          //#region TAG DOCUMENTALI

        }, {
          key: "setTagValue",
          value: function setTagValue(key, value) {
            var idTag;

            if (key && key.length !== 0) {
              idTag = this._findTag(key);

              if (idTag) {
                idTag.value = value;
              } else {
                idTag = new IDTag();
                idTag.key = key;
                idTag.value = value;
              }
            }
          }
        }, {
          key: "getTagValue",
          value: function getTagValue(key) {
            var idTag;
            var retValue;

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

        }, {
          key: "_findTag",
          value: function _findTag(key) {
            var idTag;

            if (this._tags && key && key.length !== 0) {
              idTag = this._tags.find(function (element) {
                return element.key == key;
              });
            }

            return idTag;
          }
        }], [{
          key: "setAllDeleting",
          value: function setAllDeleting(arElements) {
            if (arElements) {
              arElements.forEach(function (element) {
                element.do_deleted = true;
              });
            }
          } //#region FUNZIONI STATICHE

          /**
           * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
           * @param value Valore da controllare
           */

        }, {
          key: "isNumber",
          value: function isNumber(value) {
            return value != null && value !== '' && !isNaN(Number(value.toString()));
          }
        }]);

        return IDDocument;
      }();

      var ParamsExport = function ParamsExport() {
        _classCallCheck(this, ParamsExport);

        this.numLivelli = 999;
        this.onlyPropertyModified = false;
        this.onlyDocModified = false;
        this.clearDOProperty = false;
        this.clearPKProperty = false;
        this.clearPrivateProperty = false;
      };
      /**
       * Classe repository per i documenti correlati
       */


      var IDRepository = /*#__PURE__*/function () {
        function IDRepository() {
          _classCallCheck(this, IDRepository);

          this.seqFields = [];
        }
        /**
         * Ritorna la primary Key del documento contenuto
         */


        _createClass(IDRepository, [{
          key: "primaryKey",
          get: function get() {
            var propValue = '';

            if (this.relDoc) {
              propValue = this.relDoc.getPrimaryKey();
            }

            return propValue;
          } //Ritorna l'identificatore del documento

        }, {
          key: "identifier",
          get: function get() {
            var ident = ''; //Se è presente una sequenza, l'identificatore è la sequenza

            if (this.seqFields && this.seqFields.length !== 0) {
              ident = this.seqFields.toString();
            } else {
              ident = this.primaryKey;
            }

            return ident;
          }
        }]);

        return IDRepository;
      }();
      /**
       * Specifica alcune condizioni multiple
       */


      var FieldOrCondition = function FieldOrCondition() {
        _classCallCheck(this, FieldOrCondition);
      };
      /**
       * Classe di Condizioni di filtro
       */


      var FilterCondition = /*#__PURE__*/function () {
        function FilterCondition(operator, fieldName, listOrValue) {
          _classCallCheck(this, FilterCondition);

          this.fieldName = fieldName;
          this.operator = operator;
          this._listOrValue = []; //Se ho valori li imposto

          if (listOrValue) {
            this._listOrValue = listOrValue;
          }
        }

        _createClass(FilterCondition, [{
          key: "listOrValue",
          get: function get() {
            return this._listOrValue;
          },
          set: function set(value) {
            this._listOrValue = value;
          }
        }]);

        return FilterCondition;
      }();
      /**
       * Insieme delle Proprietà Originali di un documento
       */


      var IDOriginal = /*#__PURE__*/function () {
        function IDOriginal() {
          _classCallCheck(this, IDOriginal);

          this._propOriginals = [];
        }

        _createClass(IDOriginal, [{
          key: "propOriginals",
          get: function get() {
            return this._propOriginals;
          }
          /**
           *
           * @param name Nome Proprieta
           * @param value Valore
           */

        }, {
          key: "setOriginalProperty",
          value: function setOriginalProperty(name, value) {
            var prop;

            if (name) {
              prop = this.findPropertyByName(name); //Se non lo trovo, creo la proprieta e aggiuno

              if (!prop) {
                prop = new IDProperty();
                prop.name = name;

                this._propOriginals.push(prop);
              } //Modifico il valore


              prop.value = value;
            }
          }
          /**
           * Reinizializza l'array originals
           */

        }, {
          key: "clearPropOriginal",
          value: function clearPropOriginal() {
            this._propOriginals = [];
          }
          /**
           * Cerca una proprietà per nome
           */

        }, {
          key: "findPropertyByName",
          value: function findPropertyByName(name) {
            var prop;

            if (name) {
              prop = this._propOriginals.find(function (element) {
                return element.name == name;
              });
            }

            return prop;
          }
          /**
           * Controlla se una proprietà risulta modificata
           * @param propertyName Nome Proprietà
           */

        }, {
          key: "propertyIsModified",
          value: function propertyIsModified(document, propertyName) {
            var modified = false;
            var propOriginal;

            if (document && propertyName && propertyName.length != 0) {
              propOriginal = this.findPropertyByName(propertyName); //Se ho original posso controllare

              if (propOriginal) {
                try {
                  if (document[propertyName] != propOriginal.value) {
                    modified = true;
                  }
                } catch (error) {
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

        }, {
          key: "setAsOriginal",
          value: function setAsOriginal(document) {
            var _this19 = this;

            var objDescriptor;

            if (document) {
              this.clearPropOriginal();
              objDescriptor = document.getDescriptor();

              if (objDescriptor) {
                //Ciclo sui campi del documento
                objDescriptor.fields.forEach(function (elField) {
                  //Se non sono collection
                  if (elField.fieldType != _descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].collection) {
                    //Controllo che il documento contenga la proprietà
                    if (document.propertyInDoc(elField.fieldName)) {
                      //Contiene la proprietà me la segno come Original
                      _this19.setOriginalProperty(elField.fieldName, document[elField.fieldName]);
                    } else {
                      //Non la contiene metto null come original
                      _this19.setOriginalProperty(elField.fieldName, null);
                    }
                  }
                });
              }
            }
          }
        }]);

        return IDOriginal;
      }();
      /**
       * Proprietà di un documento
       */


      var IDProperty = /*#__PURE__*/function () {
        function IDProperty() {
          _classCallCheck(this, IDProperty);
        }

        _createClass(IDProperty, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            this._value = v;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(v) {
            this._name = v;
          }
        }]);

        return IDProperty;
      }();
      /**
       * Classe dei tag documentali
       */


      var IDTag = function IDTag() {
        _classCallCheck(this, IDTag);
      };
      /**
       * Operatori delle condizioni
       */


      var OperatorCondition;

      (function (OperatorCondition) {
        OperatorCondition["uguale"] = "";
        OperatorCondition["minore"] = "<";
        OperatorCondition["maggiore"] = ">";
      })(OperatorCondition || (OperatorCondition = {}));
      /***/

    },

    /***/
    "6/gD":
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /*! exports provided: PhotoService, PhotoType */

    /***/
    function gD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoType", function () {
        return PhotoType;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem,
          Storage = _capacitor_core__WEBP.Storage;

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService() {
          _classCallCheck(this, PhotoService);

          this.PHOTO_STORAGE = 'photos';
        }
        /**
         *
         * @param typePhoto Tipo della foto
         * @param idPhoto Nel caso di foto profilo è IDUtente
         * @return DataUrl memorizzato
         */


        _createClass(PhotoService, [{
          key: "takePicure",
          value: function takePicure(typePhoto, idPhoto) {
            var _this20 = this;

            return new Promise(function (resolve, reject) {
              Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"].DataUrl,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CameraSource"].Prompt,
                quality: 100
              }).then(function (data) {
                var myImageDataUrl = data.dataUrl; //Salvo nello Storage

                _this20.storageSave(myImageDataUrl, typePhoto, idPhoto).then(function () {
                  //Salvataggio corretto, ritorno il dataUrl
                  resolve(myImageDataUrl);
                })["catch"](function (error) {
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

        }, {
          key: "storageSave",
          value: function storageSave(dataUrlPhoto, typePhoto, idPhoto) {
            var keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
            return new Promise(function (resolve, reject) {
              var myPhoto = {
                type: typePhoto,
                dataUrl: dataUrlPhoto
              };
              Storage.set({
                key: keyStorage,
                value: JSON.stringify(myPhoto)
              }).then(function () {
                resolve();
              })["catch"](function (error) {
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

        }, {
          key: "storageLoad",
          value: function storageLoad(typePhoto, idPhoto) {
            var keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
            return new Promise(function (resolve, reject) {
              Storage.get({
                key: keyStorage
              }).then(function (data) {
                var myPhoto = JSON.parse(data.value);
                resolve(myPhoto.dataUrl);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ɵfac = function PhotoService_Factory(t) {
        return new (t || PhotoService)();
      };

      PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PhotoService,
        factory: PhotoService.ɵfac,
        providedIn: 'root'
      });
      var PhotoType;

      (function (PhotoType) {
        PhotoType[PhotoType["account"] = 10] = "account";
      })(PhotoType || (PhotoType = {}));
      /***/

    },

    /***/
    "6Eaa":
    /*!***************************************************!*\
      !*** ./src/app/library/models/structure.model.ts ***!
      \***************************************************/

    /*! exports provided: Structure, DynamicClass */

    /***/
    function Eaa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Structure", function () {
        return Structure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicClass", function () {
        return DynamicClass;
      });
      /* harmony import */


      var _models_sport_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/sport.model */
      "A++g");
      /* harmony import */


      var _models_corso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/corso.model */
      "F/re");
      /* harmony import */


      var src_app_models_area_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/area.model */
      "v/X4");
      /* harmony import */


      var src_app_models_gruppo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/gruppo.model */
      "8jQ+");
      /* harmony import */


      var src_app_models_camposport_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/camposport.model */
      "sbYY");
      /* harmony import */


      var src_app_models_aperturalocation_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/aperturalocation.model */
      "w5Je");
      /* harmony import */


      var src_app_models_account_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/account.model */
      "KGuB");
      /* harmony import */


      var src_app_models_arealink_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/arealink.model */
      "h++G");
      /* harmony import */


      var src_app_models_campo_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/campo.model */
      "R5r1");
      /* harmony import */


      var src_app_models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models/categoriaeta.model */
      "wG3K");
      /* harmony import */


      var src_app_models_corsoprogramma_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/corsoprogramma.model */
      "t3EU");
      /* harmony import */


      var src_app_models_livello_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/models/livello.model */
      "TH60");
      /* harmony import */


      var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/models/location.model */
      "V6dt");
      /* harmony import */


      var src_app_models_locaton_image_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/models/locaton-image.model */
      "Lk4g");
      /* harmony import */


      var src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/models/newsevento.model */
      "h27B");
      /* harmony import */


      var src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/models/pianificazionecorso.model */
      "b5Gy");
      /* harmony import */


      var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/models/prenotazione.model */
      "hXF6");
      /* harmony import */


      var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/models/prenotazionepianificazione.model */
      "FAI+");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/models/utenteiscrizione.model */
      "SCCg");
      /* harmony import */


      var src_app_models_utentelivello_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/models/utentelivello.model */
      "MFYn");
      /* harmony import */


      var src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/models/utenteprenotazione.model */
      "TP3D");
      /* harmony import */


      var src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/models/impegno.model */
      "M0fm");
      /* harmony import */


      var src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/models/areapaymentsetting.model */
      "MO7j");
      /* harmony import */


      var src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/models/accountregistration.model */
      "sTQd");
      /* harmony import */


      var src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/models/occupazionecampi.model */
      "0ALl");
      /* harmony import */


      var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/models/tipodocumentazione.model */
      "ci2e");
      /* harmony import */


      var src_app_models_documentazione_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/models/documentazione.model */
      "PVTr");
      /* harmony import */


      var src_app_models_corsopresenze_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/app/models/corsopresenze.model */
      "vl3Y");
      /* harmony import */


      var src_app_models_ricevuta_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! src/app/models/ricevuta.model */
      "X/Aa");
      /* harmony import */


      var src_app_models_articolo_model__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/app/models/articolo.model */
      "B7Q7");
      /* harmony import */


      var src_app_models_articolocolore_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/app/models/articolocolore.model */
      "1IFm");
      /* harmony import */


      var src_app_models_articolotagliemisura_model__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/app/models/articolotagliemisura.model */
      "hFUh");
      /* harmony import */


      var src_app_models_unitamisura_model__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! src/app/models/unitamisura.model */
      "kVR5");
      /* harmony import */


      var src_app_models_valuta_model__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! src/app/models/valuta.model */
      "WT0H");
      /* harmony import */


      var src_app_models_datachiusura_model__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! src/app/models/datachiusura.model */
      "eF/0");
      /* harmony import */


      var src_app_models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! src/app/models/corsoallegato.model */
      "pEHE"); //https://medium.com/@buddhi.amigo/how-to-create-typescript-classes-dynamically-b29ca7767ee5


      var Structure = {
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

      var DynamicClass = function DynamicClass(className, opts) {
        _classCallCheck(this, DynamicClass);

        if (Structure[className] === undefined || Structure[className] === null) {
          throw new Error("Class type of '".concat(className, "' is not in the store"));
        }

        return new Structure[className](opts);
      };
      /***/

    },

    /***/
    "8jQ+":
    /*!****************************************!*\
      !*** ./src/app/models/gruppo.model.ts ***!
      \****************************************/

    /*! exports provided: Gruppo */

    /***/
    function jQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Gruppo", function () {
        return Gruppo;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _privateimage_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privateimage.model */
      "Oq6q");

      var Gruppo = /*#__PURE__*/function (_library_models_iddoc3) {
        _inherits(Gruppo, _library_models_iddoc3);

        var _super3 = _createSuper(Gruppo);

        function Gruppo(onlyInstance) {
          var _this21;

          _classCallCheck(this, Gruppo);

          _this21 = _super3.call(this, onlyInstance);
          _this21.PRIVATEIMAGE = [];
          return _this21;
        }
        /**
         * Imposta le proprietà del documento
         * @param data JSON Ricevuto
         */


        _createClass(Gruppo, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Gruppo.prototype), "setJSONProperty", this).call(this, data); //Imposto le collection


            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Imposto le collection del doumento
           * @param data JSON Ricevuto
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
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

        }, {
          key: "setCollectionprivateImage",
          value: function setCollectionprivateImage(data) {
            var _this22 = this;

            data.PRIVATEIMAGE.forEach(function (element) {
              var newPrivateImage = new _privateimage_model__WEBPACK_IMPORTED_MODULE_3__["PrivateImage"]();
              newPrivateImage.setJSONProperty(element);

              _this22.PRIVATEIMAGE.push(newPrivateImage);
            });
          }
          /**
          * Ritorna il descrittore della Struttura Campi
          */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
            var arString = ['DENOMINAZIONE', 'INDIRIZZO', 'CAP', 'COMUNE', 'PROVINCIA', 'ISOSTATO', 'CODICEFISCALE', 'PARTITAIVA', 'APPID', 'PREFIXDOMAIN', 'URLPRIVACY'];
            var arNumber = ['TIPOGRUPPO', 'APPTIPOVERIFICA'];
            var arBoolean = ['APPFLAGREGISTRAZIONE', 'FLAGAPPSHOPONLINE'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['PRIVATEIMAGE'];
            objDescriptor.className = 'Gruppo';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'GRUPPOSPORTIVO';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }, {
          key: "isClosedFromCalendar",
          value: function isClosedFromCalendar() {}
        }, {
          key: "needEmailVerify",
          get: function get() {
            if (this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemail || this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "needMobileVerify",
          get: function get() {
            if (this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificasms || this.APPTIPOVERIFICA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return Gruppo;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "9PZ8":
    /*!*************************************************!*\
      !*** ./src/app/models/iscrizionecorso.model.ts ***!
      \*************************************************/

    /*! exports provided: IscrizioneCorso */

    /***/
    function PZ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IscrizioneCorso", function () {
        return IscrizioneCorso;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iscrizioneincasso.model */
      "xeLN");

      var IscrizioneCorso = /*#__PURE__*/function (_library_models_iddoc4) {
        _inherits(IscrizioneCorso, _library_models_iddoc4);

        var _super4 = _createSuper(IscrizioneCorso);

        function IscrizioneCorso(onlyInstance) {
          var _this23;

          _classCallCheck(this, IscrizioneCorso);

          _this23 = _super4.call(this, onlyInstance);
          _this23.ISCRIZIONEINCASSO = [];
          return _this23;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(IscrizioneCorso, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDCORSO', 'IDUTENTE', 'NOMINATIVO', 'EMAIL', 'MOBILENUMBER', 'NOTES', 'IDSPORT', 'IDAREAOPERATIVA', 'IDLOCATION', 'IDCAMPO', 'CODICEALFA', 'IDTIPOPAGAMENTO', 'IDCODICEIMPOSTA', 'IDVALUTA'];
            var arNumber = ['ANNOISCRIZIONE', 'CODICEINT', 'SESSO', 'STATOISCRIZIONE', 'TIPOPREZZO'];
            var arDecimal = ['IMPORTO', 'IMPOSTA', 'TOTALE', 'RESIDUO', 'INCASSATO'];
            var arBoolean = [];
            var arDate = ['DATAISCRIZIONE', 'DATAFINEISCRIZIONE', 'DATAINIZIO'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'IscrizioneCorso';
            objDescriptor.classWebApiName = 'ISCRIZIONECORSO';
            objDescriptor.doRemote = true;
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo IDDOcument
            _get(_getPrototypeOf(IscrizioneCorso.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data);
            this.setOriginal();
          }
          /**
           * Sistema le collection se presenti
           * @param data JSON Ricevuto
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            this.ISCRIZIONEINCASSO = [];

            if (data.ISCRIZIONIINCASSI) {
              this.setCollectionIscrizioniIncassi(data.ISCRIZIONIINCASSI);
            }
          }
          /**
           * Imposta la collection ISCRIZIONIINCASSI
           * @param arIncassi JSON Ricevuti
           */

        }, {
          key: "setCollectionIscrizioniIncassi",
          value: function setCollectionIscrizioniIncassi(arIncassi) {
            var _this24 = this;

            this.ISCRIZIONEINCASSO = [];

            if (arIncassi) {
              arIncassi.forEach(function (element) {
                //Ricerco se esiste già
                var newIscrizioneIncasso = _this24.getIncassoByID(element.ID); //Non esiste lo creo nuovo


                if (!newIscrizioneIncasso) {
                  newIscrizioneIncasso = new _iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_2__["IscrizioneIncasso"]();
                  newIscrizioneIncasso.setJSONProperty(element);

                  _this24.ISCRIZIONEINCASSO.push(newIscrizioneIncasso);
                } else {
                  //Reimposto i valori
                  newIscrizioneIncasso.setJSONProperty(element);
                }
              });
            }
          }
          /**
           * Ritorna l'elemento di IscrizioneIncasso che corrisponde con ID
           */

        }, {
          key: "getIncassoByID",
          value: function getIncassoByID(idIscrizioneIncasso) {
            //Ricerco l'elemento richiesto
            var existIscrizioneIncasso = this.ISCRIZIONEINCASSO.find(function (elIscrizioneIncasso) {
              return elIscrizioneIncasso.ID == idIscrizioneIncasso;
            });
            return existIscrizioneIncasso;
          }
        }]);

        return IscrizioneCorso;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "A++g":
    /*!***************************************!*\
      !*** ./src/app/models/sport.model.ts ***!
      \***************************************/

    /*! exports provided: Sport */

    /***/
    function AG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sport", function () {
        return Sport;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _models_livello_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/livello.model */
      "TH60");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var Sport = /*#__PURE__*/function (_library_models_iddoc5) {
        _inherits(Sport, _library_models_iddoc5);

        var _super5 = _createSuper(Sport);

        function Sport(onlyInstance) {
          var _this25;

          _classCallCheck(this, Sport);

          _this25 = _super5.call(this, onlyInstance);
          _this25.LIVELLO = [];
          return _this25;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Sport, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
            var arString = ['DENOMINAZIONE', 'ICONA'];
            var arNumber = ['TIPOLOGIA', 'PARTECIPANTI'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['LIVELLO'];
            objDescriptor.className = 'Sport';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'SPORT';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Sport.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Imposta le collection
           * @param data JSON Received
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            this.LIVELLO = [];

            if (data.LIVELLO) {
              this.setCollectionLivello(data.LIVELLO);
            }
          }
          /**
           * Imposta la collection dei Livelli
           * @param data JSON Received
           */

        }, {
          key: "setCollectionLivello",
          value: function setCollectionLivello(dataLivello) {
            var _this26 = this;

            dataLivello.forEach(function (elLivello) {
              var newLivello = new _models_livello_model__WEBPACK_IMPORTED_MODULE_1__["Livello"]();
              newLivello.setJSONProperty(dataLivello);

              _this26.LIVELLO.push(newLivello);
            });
          }
        }]);

        return Sport;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
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

      /***/

    },

    /***/
    "AN5U":
    /*!****************************************!*\
      !*** ./src/app/models/utente.model.ts ***!
      \****************************************/

    /*! exports provided: Utente, storageUtente, ParamsVerifica */

    /***/
    function AN5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Utente", function () {
        return Utente;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "storageUtente", function () {
        return storageUtente;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParamsVerifica", function () {
        return ParamsVerifica;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");
      /* harmony import */


      var _utentelivello_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utentelivello.model */
      "MFYn");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _documentazione_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./documentazione.model */
      "PVTr");

      var Utente = /*#__PURE__*/function (_library_models_iddoc6) {
        _inherits(Utente, _library_models_iddoc6);

        var _super6 = _createSuper(Utente);

        /**
         *
         * @param onlyInstance Non inizializzare il documento, ma crea solo istanza
         */
        function Utente(onlyInstance) {
          var _this27;

          _classCallCheck(this, Utente);

          _this27 = _super6.call(this, onlyInstance);

          if (!onlyInstance) {
            _this27.UTENTILIVELLI = [];
            _this27.DOCUMENTAZIONI = [];
            _this27.PROFILAZIONEESTERNA = false;
            _this27.PROFILAZIONEINTERNA = false;
          }

          _this27.VERIFICATAMAIL = false;
          _this27.VERIFICATAMOBILE = false;
          return _this27;
        }
        /**
         * Ritorna l'eta del partecipante
         */


        _createClass(Utente, [{
          key: "eta",
          get: function get() {
            var num = 0;
            var oggi = new Date();

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

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["Descriptor"]();
            var arString = ['COGNOME', 'NOME', 'NOMINATIVO', 'EMAIL', 'WEBLOGIN', 'MOBILENUMBER', 'INDIRIZZO', 'CAP', 'COMUNE', 'PROVINCIA', 'ISOSTATO', 'NATOA', 'NATOCAP', 'NATOPROV', 'NATOISOSTATO', 'CODICEFISCALE', 'IDAREAOPERATIVA', 'IDLOCATION', 'AVATAR', 'SHAPASSWORD', 'INPUTPASSWORD', 'TELEFONO1', 'TELEFONO2', 'LISTMANSIONI'];
            var arNumber = ['SESSO', 'RUOLO'];
            var arBoolean = ['NEWSLETTER', 'PROFILAZIONEINTERNA', 'PROFILAZIONEESTERNA', 'VERIFICATAMAIL', 'VERIFICATAMOBILE'];
            var arDate = ['NATOIL'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'Utente';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'UTENTE';
            objDescriptor.describeField = 'NOMINATIVO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].time); //Aggiungo le collection

            objDescriptor.addCollection('UTENTILIVELLI', 'UtenteLivello', 'IDUTENTE');
            objDescriptor.addCollection('DOCUMENTAZIONI', 'Documentazione', 'IDUTENTE');
            objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
            objDescriptor.setRelation('IDLOCATION', 'Location');
            return objDescriptor;
          }
        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Utente.prototype), "setJSONProperty", this).call(this, data);

            this.UTENTILIVELLI = []; //Sistemo le collection

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Imposta le collection dell'oggetto
           * @param data JSON Received
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
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

        }, {
          key: "setCollectionLivelli",
          value: function setCollectionLivelli(data) {
            var _this28 = this;

            data.UTENTELIVELLO.forEach(function (element) {
              var newLevel = new _utentelivello_model__WEBPACK_IMPORTED_MODULE_2__["UtenteLivello"]();
              newLevel.setJSONProperty(element);

              _this28.UTENTILIVELLI.push(newLevel);
            });
          }
          /**
           * Crea gli oggetti DOCUMENTAZIONE
           * @param data JSON Received
           */

        }, {
          key: "setCollectionDocumentazione",
          value: function setCollectionDocumentazione(data) {
            var _this29 = this;

            data.DOCUMENTAZIONE.forEach(function (element) {
              var NewDoc = new _documentazione_model__WEBPACK_IMPORTED_MODULE_5__["Documentazione"]();
              NewDoc.setJSONProperty(element);

              _this29.DOCUMENTAZIONI.push(NewDoc);
            });
          }
          /**
           * Ritorna una label per indicare se la Mail è verificata oppure no
           */

        }, {
          key: "getLabelVerificaMail",
          value: function getLabelVerificaMail() {
            var labelReturn = ''; //Mail verificata

            if (this.VERIFICATAMAIL) {
              //Se c'e' la mail dico che è verificata
              if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'VERIFICATA';
              } else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
              }
            } else {
              //Se c'e' la mail dico che non è verificata
              if (this.EMAIL && this.EMAIL.length !== 0) {
                labelReturn = 'NON VERIFICATA';
              } else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
              }
            }

            return labelReturn;
          }
          /**
           * Ritorna una label per indicare se il telefono è verificato oppure no
           */

        }, {
          key: "getLabelVerificaMobile",
          value: function getLabelVerificaMobile() {
            var labelReturn = ''; //Mobile verificato

            if (this.VERIFICATAMOBILE) {
              //Se c'e' la mail dico che è verificata
              if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'VERIFICATO';
              } else {
                //Se non c'e' la mail non dico nulla
                labelReturn = '';
              }
            } else {
              //Se c'e' la mail dico che non è verificata
              if (this.MOBILENUMBER && this.MOBILENUMBER.length !== 0) {
                labelReturn = 'NON VERIFICATO';
              } else {
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

        }, {
          key: "isForLevelSport",
          value: function isForLevelSport(idLivello, idSport) {
            var isValid = false;
            var index = -1;

            if (this.UTENTILIVELLI && this.UTENTILIVELLI.length != 0) {
              index = this.UTENTILIVELLI.findIndex(function (elLivello) {
                return elLivello.IDLIVELLO == idLivello && elLivello.IDSPORT == idSport;
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

        }, {
          key: "isForTargetSesso",
          value: function isForTargetSesso(target) {
            var isValid = false;

            if (target && this.SESSO) {
              if ((target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschile || target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschileFemminile) && this.SESSO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Sesso"].maschio) {
                isValid = true;
              } else if ((target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].femminile || target == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"].maschileFemminile) && this.SESSO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Sesso"].femmina) {
                isValid = true;
              }
            }

            return isValid;
          }
        }, {
          key: "anagraficaOk",
          get: function get() {
            var error = false;

            if (!(this.COGNOME && this.NOME && this.INDIRIZZO && this.CAP && this.COMUNE && this.PROVINCIA && this.ISOSTATO && this.SESSO && this.NATOIL && this.NATOA //&&this.NATOCAP
            && this.NATOPROV && this.NATOISOSTATO && this.CODICEFISCALE)) {
              error = true;
            }

            if (!error && this.NOME != '' && this.INDIRIZZO != '' && this.CAP != '' && this.COMUNE != '' && this.PROVINCIA != '' && this.ISOSTATO != '' && this.NATOA != '' //&&this.NATOCAP!= ''
            && this.NATOPROV != '' && this.NATOISOSTATO != '' && this.CODICEFISCALE != '') return !error;
          }
          /**
           * la funzione restituisce i parametri da passare alla verifyPage, per eseguire tutte le verifiche ancora necessarie
           * secondo quanto richiesto dal docGruppo. se non ci sono verifiche necessarie, restituisce undefined
           * @param docGruppo il gruppo sportivo per il quale eseguire l'operazione
           */

        }, {
          key: "getParamsVerifica",
          value: function getParamsVerifica(docGruppo) {
            var needVerifyMail = false;
            var needVerifyTel = false;
            var needUpdateProfile = false;

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
            } //ora creo i parametri


            var params = undefined;

            if (needVerifyMail || needVerifyTel || needUpdateProfile) {
              //se c'è qualcosa da fare, istanzio params e lo valorizzo
              params = new ParamsVerifica();

              if (needVerifyMail && needVerifyTel) {
                //devo verificare sia mail che telefono
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemailsms;
              } else if (needVerifyMail) {
                //devo verificare solo la mail
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificaemail;
              } else if (needVerifyTel) {
                //devo verificare solo il tel
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].verificasms;
              } else {
                //non devo verificare niente
                params.tipoVerifica = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoVerificaAccount"].noverifica;
              } //segno nei params se aggionare o meno l'anagrafica


              params.updateDocUtente = needUpdateProfile;
            } //ritorno i parametri. se non c'è nulla da verificare, params sarà UNDEFINED    


            return params;
          }
        }, {
          key: "isTrainer",
          get: function get() {
            var isTrainer = false;

            if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
              if (this.LISTMANSIONI.includes("\"".concat(_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].trainer.toString(), "\""))) {
                isTrainer = true;
              }
            }

            return isTrainer;
          }
        }, {
          key: "isAssistenteTrainer",
          get: function get() {
            var isTrainer = false;

            if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
              if (this.LISTMANSIONI.includes("\"".concat(_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].assistenteTrainer.toString(), "\""))) {
                isTrainer = true;
              }
            }

            return isTrainer;
          }
        }, {
          key: "isCustode",
          get: function get() {
            var isCustode = false;

            if (this.LISTMANSIONI && this.LISTMANSIONI.length > 0) {
              if (this.LISTMANSIONI.includes("\"".concat(_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Mansione"].custode.toString(), "\""))) {
                isCustode = true;
              }
            }

            return isCustode;
          }
        }]);

        return Utente;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);

      var storageUtente = /*#__PURE__*/function () {
        function storageUtente(user, pwd) {
          _classCallCheck(this, storageUtente);

          this.loginUser = user;
          this.pwdUser = pwd;
          this.cripted = false;
        }
        /**
         * Salvo in Stringa JSON l'oggetto
         */


        _createClass(storageUtente, [{
          key: "saveJSON",
          value: function saveJSON(crypt) {
            var strReturn = '';
            var myObj = new storageUtente(this.loginUser, this.pwdUser);

            if (crypt) {
              //Qui devo criptare utente e password
              myObj.cripted = true;
            }

            strReturn = JSON.stringify(myObj);
            return strReturn;
          }
        }, {
          key: "loadJSON",
          value: function loadJSON(stringaJSON) {
            var myObj = new storageUtente('', '');
            myObj = JSON.parse(stringaJSON);

            if (myObj) {
              if (myObj.cripted) {//Devo decriptare username e password
              }

              this.loginUser = myObj.loginUser;
              this.pwdUser = myObj.pwdUser;
              this.cripted = myObj.cripted;
            }
          }
        }]);

        return storageUtente;
      }();

      var ParamsVerifica = function ParamsVerifica() {
        _classCallCheck(this, ParamsVerifica);
      };
      /***/

    },

    /***/
    "Ag5x":
    /*!*************************************!*\
      !*** ./src/app/models/log.model.ts ***!
      \*************************************/

    /*! exports provided: LogApp */

    /***/
    function Ag5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogApp", function () {
        return LogApp;
      });

      var LogApp = /*#__PURE__*/function () {
        function LogApp() {
          _classCallCheck(this, LogApp);
        }

        _createClass(LogApp, null, [{
          key: "consoleLog",
          value:
          /**
           * Visualizza in console i dati
           * @param data Dati da stampare in console
           */
          function consoleLog(data) {
            var showDebug = false;

            if (showDebug) {
              console.log(data);
            }
          }
        }]);

        return LogApp;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "B/ah":
    /*!*******************************************************!*\
      !*** ./src/app/services/corso-valutazione.service.ts ***!
      \*******************************************************/

    /*! exports provided: CorsoValutazioneService */

    /***/
    function BAh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoValutazioneService", function () {
        return CorsoValutazioneService;
      });
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/corsovalutazione.model */
      "IGb/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CorsoValutazioneService = /*#__PURE__*/function () {
        function CorsoValutazioneService(docStructureService) {
          _classCallCheck(this, CorsoValutazioneService);

          this.docStructureService = docStructureService;
        }
        /**
         * Il metodo effettua una chiamata al server per recuperare la scheda
         *
         * @param idCorso idCorso richiesto
         * @returns CorsoValutazione
         * @returns Reject Message
         */


        _createClass(CorsoValutazioneService, [{
          key: "requestSchedaValutazioneCorso",
          value: function requestSchedaValutazioneCorso(idCorso) {
            var _this30 = this;

            var myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["PostParams"]();
            var method = 'getSchedaForTrainer';
            var docToCall = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
            return new Promise(function (resolve, reject) {
              if (idCorso && idCorso.length != 0) {
                //Preparo i parametri della chiamata
                myPostParams.key = 'idCorso';
                myPostParams.value = idCorso;

                _this30.docStructureService.requestForFunction(docToCall, method, '', myPostParams).then(function (risposta) {
                  //Non si puo' richiedere la scheda
                  if (!risposta.result) {
                    reject(risposta.message);
                  } else if (risposta.document) {
                    //Ho un documento e lo trasformo in CorsoValutazione
                    var myDocScheda = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
                    myDocScheda.setJSONProperty(risposta.document);
                    resolve(myDocScheda);
                  } else {
                    reject('Scheda non ricevuta');
                  }
                })["catch"](function (error) {
                  reject(error);
                });
              } else {
                reject('Nessun corso richiesto');
              }
            });
          }
          /**
           * Richiede al server il salvataggio della scheda
           * @param docScheda Scheda in salvataggio
           */

        }, {
          key: "requestForSave",
          value: function requestForSave(docScheda) {
            var _this31 = this;

            var myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["PostParams"]();
            var method = 'mobSaveValutazione';
            var docToCall = new _models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazione"]();
            return new Promise(function (resolve, reject) {
              if (docScheda) {
                myPostParams.key = 'docScheda';
                myPostParams.value = docScheda;

                _this31.docStructureService.requestForFunction(docToCall, method, '', myPostParams).then(function (risposta) {
                  if (!risposta.result) {
                    reject(risposta.message);
                  } else {
                    resolve(risposta);
                  }
                });
              } else {
                reject('Nessuna scheda da memorizzare');
              }
            });
          }
        }]);

        return CorsoValutazioneService;
      }();

      CorsoValutazioneService.ɵfac = function CorsoValutazioneService_Factory(t) {
        return new (t || CorsoValutazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__["DocstructureService"]));
      };

      CorsoValutazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CorsoValutazioneService,
        factory: CorsoValutazioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "B7Q7":
    /*!******************************************!*\
      !*** ./src/app/models/articolo.model.ts ***!
      \******************************************/

    /*! exports provided: Articolo */

    /***/
    function B7Q7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Articolo", function () {
        return Articolo;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var Articolo = /*#__PURE__*/function (_library_models_iddoc7) {
        _inherits(Articolo, _library_models_iddoc7);

        var _super7 = _createSuper(Articolo);

        function Articolo() {
          _classCallCheck(this, Articolo);

          return _super7.apply(this, arguments);
        }

        _createClass(Articolo, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['CODICE', 'CODICEBARRE', 'DESCR', 'IDUNTAMISURA', 'SCONTOTEXT', 'CATEGORIA', 'DESCRHTML', 'IDVALUTA'];
            var arNumber = ['PREZZONETTO', 'PREZZOLORDO', 'TIPOARTICOLO', 'TIPOPREZZO'];
            var arBoolean = ['FLAGTAGLIEMISURE', 'FLAGCOLORI', 'FLAGSHOPONLINE'];
            var arDate = [];
            var arDateTime = ['VALIDOFINO'];
            var arTime = [];
            objDescriptor.className = 'Articolo';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'ARTICOLO';
            objDescriptor.describeField = 'DESCR';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time); //Aggiungo le collection

            objDescriptor.addCollection('ARTICOLITAGLIEMISURE', 'ArticoloTaglieMisura', 'IDARTICOLO');
            objDescriptor.addCollection('ARTICOLICOLORI', 'ArticoloColore', 'IDARTICOLO');
            objDescriptor.setRelation('IDUNITAMISURA', 'UnitaMisura');
            objDescriptor.setRelation('IDVALUTA', 'Valuta');
            return objDescriptor;
          }
        }]);

        return Articolo;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "BWIo":
    /*!**********************************************!*\
      !*** ./src/app/services/invoices.service.ts ***!
      \**********************************************/

    /*! exports provided: InvoicesService */

    /***/
    function BWIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesService", function () {
        return InvoicesService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_ricevuta_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/ricevuta.model */
      "X/Aa");
      /* harmony import */


      var _models_utente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/utente.model */
      "AN5U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InvoicesService = /*#__PURE__*/function () {
        function InvoicesService(docStructureService) {
          _classCallCheck(this, InvoicesService);

          this.docStructureService = docStructureService;
          this._listaDocumentiFiscali = [];
          this.listaDocumentiFiscali = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        /**
         * la funzione richede al server l'elenco delle ricevute per l'utente passato
         * @param utente l'untete per cui si richiedono le fatture
         */


        _createClass(InvoicesService, [{
          key: "requestInvoices",
          value: function requestInvoices(utente, anno) {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              //creo il filtro
              var filterDocuement = new _models_ricevuta_model__WEBPACK_IMPORTED_MODULE_3__["MasterDocumento"](true);
              filterDocuement.IDANAGRAFICA = utente.ID; //se c'è l'anno, lo inserisco nel filtro

              if (anno) {
                filterDocuement.ANNO = anno;
              } //faccio la richiesta


              _this32.docStructureService.requestNew(filterDocuement).then(function (listDocuments) {
                //salvo la lista in memoria e scateno l'bservable
                _this32._listaDocumentiFiscali = listDocuments;

                _this32.listaDocumentiFiscali.next(_this32._listaDocumentiFiscali);

                resolve(_this32._listaDocumentiFiscali);
              })["catch"](function (error) {
                //errore di connessione
                reject(error);
              });
            });
          }
          /**
           * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
           * @param documento elemento MasterDocumento che si vuole scaricare
           */

        }, {
          key: "downloadInvoice",
          value: function downloadInvoice(documento) {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              //metodo statico da richiamare
              var method = 'getFile'; //creo il mio parametro

              var myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"]();
              myParams.key = 'primaryKey';
              myParams.value = documento.ID;

              _this33.docStructureService.requestForFunction(documento, method, null, myParams).then(function (response) {
                resolve(response);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
          /**
           * la funzione, presa una stringa b64 e il content-type, restituisce il blob
           * @param b64Data stringa B64 SENZA tipo di file
           * @param contentType stringa tipo file (default: application/pdf)
           */

        }, {
          key: "base64toBlob",
          value: function base64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'application/pdf';
            return new Promise(function (resolve, reject) {
              var fullB64 = 'data:' + contentType + ';base64,' + b64Data;
              fetch(fullB64).then(function (res) {
                res.blob().then(function (blob) {
                  resolve(blob);
                });
              });
            });
          }
        }]);

        return InvoicesService;
      }();

      InvoicesService.ɵfac = function InvoicesService_Factory(t) {
        return new (t || InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_2__["DocstructureService"]));
      };

      InvoicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: InvoicesService,
        factory: InvoicesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ECYZ":
    /*!***********************************************!*\
      !*** ./src/app/models/codicefiscale.model.ts ***!
      \***********************************************/

    /*! exports provided: CodiceFiscale */

    /***/
    function ECYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodiceFiscale", function () {
        return CodiceFiscale;
      });
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");

      var CodiceFiscale = /*#__PURE__*/function () {
        function CodiceFiscale(codFisc) {
          _classCallCheck(this, CodiceFiscale);

          this.codiceFiscale = codFisc;
          this.checkValidate = false;
          this.msgValidate = '';
        }
        /**
         * Normalizes a CF by removing white spaces and converting to upper-case.
         * @param string cf Raw CF, possibly with spaces.
         * @return string Normalized CF.
         */


        _createClass(CodiceFiscale, [{
          key: "normalize",
          value: function normalize(cf) {
            return cf.replace(/\s/g, "").toUpperCase();
          }
          /**
             * Returns the formatted CF. Currently does nothing but normalization.
             * @param string cf Raw CF, possibly with spaces.
             * @return string Formatted CF.
             */

        }, {
          key: "format",
          value: function format(cf) {
            return this.normalize(cf);
          }
          /**
             * Validates a regular CF.
             * @param string cf Normalized, 16 characters CF.
             * @return string Null if valid, or string describing why this CF must be
             * rejected.
             */

        }, {
          key: "PRIVATE_validate_regular",
          value: function PRIVATE_validate_regular(cf) {
            if (!/^[0-9A-Z]{16}$/.test(cf)) return "Invalid characters.";
            var s = 0;
            var even_map = "BAFHJNPRTVCESULDGIMOQKWZYX";

            for (var i = 0; i < 15; i++) {
              var c = cf[i];
              var n = 0;
              if ("0" <= c && c <= "9") n = c.charCodeAt(0) - "0".charCodeAt(0);else n = c.charCodeAt(0) - "A".charCodeAt(0);
              if ((i & 1) === 0) n = even_map.charCodeAt(n) - "A".charCodeAt(0);
              s += n;
            }

            if (s % 26 + "A".charCodeAt(0) !== cf.charCodeAt(15)) return "Invalid checksum.";
            return null;
          }
          /**
             * Validates a temporary CF.
             * @param string cf Normalized, 11 characters CF.
             * @return string Null if valid, or string describing why this CF must be
             * rejected.
             */

        }, {
          key: "PRIVATE_validate_temporary",
          value: function PRIVATE_validate_temporary(cf) {
            if (!/^[0-9]{11}$/.test(cf)) return "Invalid characters.";
            var s = 0;

            for (var i = 0; i < 11; i++) {
              var n = cf.charCodeAt(i) - "0".charCodeAt(0);

              if ((i & 1) === 1) {
                n *= 2;
                if (n > 9) n -= 9;
              }

              s += n;
            }

            if (s % 10 !== 0) return "Invalid checksum.";
            return null;
          }
          /**
             * Verifies the basic syntax, length and control code of the given CF.
             * @param string cf Raw CF, possibly with spaces.
             * @return string Null if valid, or string describing why this CF must be
             * rejected.
             */

        }, {
          key: "validate",
          value: function validate() {
            var check = false;
            var msg = '';

            if (this.codiceFiscale.length !== 0) {
              this.codiceFiscale = this.normalize(this.codiceFiscale);

              if (this.codiceFiscale.length === 0) {
                msg = 'Empty';
              } else if (this.codiceFiscale.length === 16) {
                msg = this.PRIVATE_validate_regular(this.codiceFiscale);
              } else if (this.codiceFiscale.length === 11) {
                msg = this.PRIVATE_validate_temporary(this.codiceFiscale);
              } else {
                msg = "Invalid length.";
              }
            } else {
              msg = "Invalid length.";
            } //Se c'e' un messaggio, check non passato


            if (msg) {
              check = false;
            } else {
              check = true;
            }

            this.msgValidate = msg;
            this.checkValidate = check;
            return check;
          }
          /**
           * Decodifica il codice fiscale nelle sue parti
           */

        }, {
          key: "basicDecode",
          value: function basicDecode() {
            var result = false;

            if (this.codiceFiscale.length == 16) {
              result = this.basicDecode16();
            }

            return result;
          }
          /**
           * Effettua una prima e semplice decodifica dei dati contenuti nel codice fiscale
           */

        }, {
          key: "basicDecode16",
          value: function basicDecode16() {
            var chDay = '';
            var chMonth = '';
            var chYear = '';
            var day = 0;
            var month = 0;
            var year = 0;
            var secolo = 2000;
            var result = true;
            var adesso = new Date(); //0123456789  10 11 12 13 14 15
            //CVLPTR72P0  9  G  3  8  8   D
            //CODICE CONTROLLO

            this.codiceControllo = this.codiceFiscale.substr(15, 1); //CODICE CATASTALE

            this.codiceCatastale = this.codiceFiscale.substr(11, 4);
            chDay = this.codiceFiscale.substr(9, 2);
            chMonth = this.codiceFiscale.substr(8, 1);
            chYear = this.codiceFiscale.substr(6, 2);

            try {
              day = parseInt(chDay, 10);
              year = parseInt(chYear, 10);
            } catch (error) {
              result = false;
            }

            if (result) {
              //Determino il mese
              month = this.getMonthFromLetter(chMonth);

              if (month == -1) {
                //errore
                result = false;
              }
            } //Sistemazione Year


            if (result) {
              secolo = 2000;

              if (secolo + year > adesso.getFullYear()) {
                //Cambio secolo e metto il 1900
                secolo = 1900;
              }

              year = secolo + year;
            } //Sistemazione Day


            if (result) {
              if (day > 40) {
                day = day - 40; //SESSO

                this.sesso = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Sesso"].femmina;
              } else {
                //SESSO
                this.sesso = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Sesso"].maschio;
              } //DATA NASCITA


              this.dataNascita = new Date(year, month, day);
            }

            return result;
          }
        }, {
          key: "getMonthFromLetter",
          value: function getMonthFromLetter(letter) {
            var arMesi = [];
            var index = -1;
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
            index = arMesi.findIndex(function (el) {
              return el == letter;
            }); //Questo e' il numero del mese in javascript

            return index;
          }
        }]);

        return CodiceFiscale;
      }();
      /***/

    },

    /***/
    "EXUU":
    /*!*******************************************!*\
      !*** ./src/app/services/start.service.ts ***!
      \*******************************************/

    /*! exports provided: StartService */

    /***/
    function EXUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartService", function () {
        return StartService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _sport_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sport.service */
      "KG3q");
      /* harmony import */


      var _categoriaeta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categoriaeta.service */
      "HPlZ");
      /* harmony import */


      var _course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./course.service */
      "IAlr");
      /* harmony import */


      var _utente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./utente.service */
      "WWZE");
      /* harmony import */


      var _livello_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./livello.service */
      "1Gk/");
      /* harmony import */


      var _area_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./area.service */
      "1W3u");
      /* harmony import */


      var _location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./location.service */
      "yHma");
      /* harmony import */


      var _coursescheduler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./coursescheduler.service */
      "daHO");
      /* harmony import */


      var _prenotazione_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./prenotazione.service */
      "24+7");
      /* harmony import */


      var _newseventi_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./newseventi.service */
      "YbkB");
      /* harmony import */


      var _slotoccupazione_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./slotoccupazione.service */
      "MtDR");
      /* harmony import */


      var _models_start_configuration_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../models/start-configuration.model */
      "OH1o");
      /* harmony import */


      var _models_utente_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../models/utente.model */
      "AN5U");
      /* harmony import */


      var _models_log_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../models/log.model */
      "Ag5x");
      /* harmony import */


      var _utenteprenotazione_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./utenteprenotazione.service */
      "l6l+");
      /* harmony import */


      var _utenteiscrizione_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./utenteiscrizione.service */
      "SHYz");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _codicefiscale_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./codicefiscale.service */
      "w26W");
      /* harmony import */


      var _occupazioni_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./occupazioni.service */
      "LKAN");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _documento_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./documento.service */
      "Vr4T");
      /* harmony import */


      var _invoices_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./invoices.service */
      "BWIo");
      /* harmony import */


      var _posizione_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./posizione.service */
      "Ubxr");
      /* harmony import */


      var _data_chiusura_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./data-chiusura.service */
      "I2uL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _models_gruppo_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../models/gruppo.model */
      "8jQ+");
      /* harmony import */


      var _corsoallegato_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./corsoallegato.service */
      "v3Yp");
      /* harmony import */


      var _iscrizionecorso_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./iscrizionecorso.service */
      "550M");
      /* harmony import */


      var _corso_valutazione_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./corso-valutazione.service */
      "B/ah");
      /* harmony import */


      var _photo_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./photo.service */
      "6/gD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StartService = /*#__PURE__*/function () {
        function StartService(platformService, apiService, storageAccess, sportService, categoriaEtaService, corsoService, utenteService, livelloService, areaService, locationService, corsoCalendarioService, prenotazioniService, newsEventiService, slotOccupazioneService, utentePrenotazioneService, utenteIscrizioneService, codFiscService, occupazioniService, docStructureService, documentoService, invoicesService, posizioneService, dataChiusuraService, urlLocation, corsoAllegatoService, iscrizioneCorsoService, corsoValutazioneService, photoService) {
          var _this34 = this;

          _classCallCheck(this, StartService);

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
          this.photoService = photoService; //Oggetto contentente la configurazione

          this._startConfig = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_start_configuration_model__WEBPACK_IMPORTED_MODULE_16__["StartConfiguration"]());
          /* Valorizzata a TRUE quando l'app è pronta a partire */

          this._appReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false); //Determina se la connessione sarà a un database locale, o al server

          this._localConnection = false;
          this._forceIdAreaOnLogin = ''; //Se impostato è l'area da mantenere a seguito del login (Usata quando nella booking non sono loggatto, e al termine devo rimanere sull'area)
          //Ogni volta che cambia la configurazione la invio 
          //al servizio docStructure

          this.startConfig.subscribe(function (elConfig) {
            _this34.docStructureService.setConfig(elConfig);
          });
        }

        _createClass(StartService, [{
          key: "appReady",
          get: function get() {
            return this._appReady.asObservable();
          }
        }, {
          key: "startConfig",
          get: function get() {
            return this._startConfig.asObservable();
          }
        }, {
          key: "actualStartConfig",
          get: function get() {
            return this._startConfig.getValue();
          } //Ritorna se l'applicazione sta girando su desktop

        }, {
          key: "isDesktop",
          get: function get() {
            return !this.platformService.is('hybrid');
          } //Ritorna se l'applicazione sta girando dentro al web, quindi non in capacitor o cordova

        }, {
          key: "isOnWeb",
          get: function get() {
            var result = true;

            if (this.platformService.is("cordova") || this.platformService.is("capacitor")) {
              result = false;
            }

            return result;
          }
          /**
           * Controlla l'esecuzione su IOS
           */

        }, {
          key: "isOnAppleSystem",
          get: function get() {
            var result = true;

            if (this.platformService.is("ios")) {
              result = false;
            }

            return result;
          }
          /**
           * Controlla l'esecuzione su IOS
           */

        }, {
          key: "isOnAndroidSystem",
          get: function get() {
            var result = true;

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

        }, {
          key: "setIdAreaForcedForLogin",
          value: function setIdAreaForcedForLogin() {
            if (this.areaService.areaSelectedValue) {
              this._forceIdAreaOnLogin = this.areaService.areaSelectedValue.ID;
            } else {
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

        }, {
          key: "settingStartStepOne",
          value: function settingStartStepOne() {
            var myUrl = '';
            var myAppId = '';
            var arUrl = [];
            var prefixDomain = ''; //Recupero lo StartConfig, cosi da modificarlo al termine

            var myConfig = this._startConfig.getValue(); //Modalità Web


            if (this.isOnWeb) {
              //Qui posso cambiare strategia per puntare localmente
              //this._localConnection = true;
              this._localConnection = false;

              if (this._localConnection) {
                //Modalità di Test metto un AppId di test
                myAppId = '00F15A91-5395-445C-B7F4-5BA594E55D2F';
              } else {
                //Recupero URL del browser
                myUrl = this.urlLocation.hostname; //Simulazione URL
                //myUrl = 'demo.gouego.com';
                //Sto aprendo in localhost ma voglio far puntare al server
                //ancora una volta metto un appId fisso

                if (myUrl == 'localhost') {
                  // myAppId = '00F15A91-5d395-445C-B7F4-5BA594E55D2F'; //Demo AppId
                  myAppId = 'CCBA34A5-24F5-4C22-8485-D891823E3434'; //OpenBeach AppId
                  // myAppId = 'FD291600-D873-49CF-A90C-525926CA2CDC'; //Key Element
                } else {
                  //Prendo URL e lo separo
                  arUrl = myUrl.split('.');

                  if (arUrl.length != 0) {
                    //Prendo il prefisso e sulla base di questo ricavo l'AppID
                    prefixDomain = arUrl[0];
                  }
                }
              }
            } else {
              //Non è mai in localconnection
              this._localConnection = false; //VALORIZZARE L'APP ID PER CAPACITOR
              //TODO: VALORIZZARE APPID PER INSTALLAZIONE CAPACITOR

              myAppId = 'CCBA34A5-24F5-4C22-8485-D891823E3434'; //Sono su capacitor o cordova

              prefixDomain = '';
            } //Imposto URL di chiamata


            myConfig.setUrlLocation(this._localConnection); //Reimposto Observable

            this._startConfig.next(myConfig); //Il secondo step si preoccupa di ricavare l'app id se mancante, 
            //Impostare i dati nell'oggetti startConfiguration
            //ed iniziare la comunicazione server


            this.settingStartStepTwo(prefixDomain, myAppId);
          }
          /**
           * SECONDO STEP DI CONFIGURAZIONE
           * Il metodo tenta il recupero di un appId se non ne possiede già uno, e se prefixdomain vale qualcosa
           */

        }, {
          key: "settingStartStepTwo",
          value: function settingStartStepTwo(prefixDomain, myAppId) {
            var _this35 = this;

            var docGruppo = new _models_gruppo_model__WEBPACK_IMPORTED_MODULE_31__["Gruppo"](true);
            var params = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_25__["RequestParams"]();

            if (myAppId.length == 0) {
              if (prefixDomain.length != 0) {
                //Chiedo al server 
                //Preparo il documento di filtro
                docGruppo.PREFIXDOMAIN = prefixDomain; //Effettuo la chiamata

                this.docStructureService.requestNew(docGruppo).then(function (collGruppo) {
                  //Vediamo appId ricevuto
                  var appIdReceived = '';

                  if (collGruppo) {
                    var myList = collGruppo;
                    var myGruppo; //Se riesco recupero appID

                    if (myList && myList.length != 0) {
                      myGruppo = myList[0];
                      appIdReceived = myGruppo.APPID;
                    }
                  } //Step 3 (Se il valore passato è '' siamo in errore)


                  _this35.settingStartStepThree(appIdReceived);
                })["catch"](function (error) {
                  console.log(error); //Vado allo Step 3 in errore passando stringa vuota

                  _this35.settingStartStepThree('');
                });
              } else {
                //Non ho AppId e non ho trovato modo di leggere URL
                //Vado allo Step 3 in errore passando stringa vuota
                this.settingStartStepThree('');
              }
            } else {
              //Sono già in possesso dell'AppId
              this.settingStartStepThree(myAppId);
            }
          }
          /**
           * Fase finale di Start
           * Se il valore di myAppID = '', siamo in errore
           */

        }, {
          key: "settingStartStepThree",
          value: function settingStartStepThree(myAppId) {
            //Recupero lo StartConfig, cosi da modificarlo al termine
            var myConfig = this._startConfig.getValue();

            myConfig.appId = myAppId; //Reimposto Observable

            this._startConfig.next(myConfig);

            this.requestStartAuthorization();
          }
          /** Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione */

        }, {
          key: "requestStartAuthorization",
          value: function requestStartAuthorization() {
            var _this36 = this;

            var doObject = 'AUTHORIZATION';
            var method = 'requestAuthorization';

            var actualStartConfig = this._startConfig.getValue(); //Ricavo gli Header da impostare


            var myHeaders = actualStartConfig.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', method); //Aggiungo i parametri di chiamata

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('withimages', '1');
            myParams = myParams.append('withoptions', '1'); //Url da chiamare

            var myUrl = actualStartConfig.urlBase + '/' + doObject; // Effettuo la chiamata per l'autorizzazione

            this.apiService.httpGet(myUrl, myHeaders, myParams).subscribe(function (resultData) {
              var objAuth = resultData;

              if (objAuth.result == -1 && objAuth.authcode && objAuth.authcode.length != 0) {
                // Sistemo l'oggetto di configurazione 
                // ed emetto un evento di Cambio
                _this36.onAuthorizationGrant(objAuth);
              } else {
                console.log('Authorization failed');
              }
            }, function (error) {
              console.log('Comunication Error');
            });
          } //Autorizzazione ricevuta

        }, {
          key: "onAuthorizationGrant",
          value: function onAuthorizationGrant(objAuth) {
            var elStartConfig = this._startConfig.getValue(); //Scrivo in console


            _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Autorizzazione ricevuta'); //Sistemazione del Gruppo nell'oggetto di configurazione


            elStartConfig.setGruppoAuthorization(objAuth.GRUPPOSPORTIVO); //Sistemazione dell'authorization code da usare

            elStartConfig.authorizationAppCode = objAuth.authcode; //Emetto l'evento di cambio

            this._startConfig.next(elStartConfig); //Passo a richiedere le Aree


            this.requestAree(); // Mi iscrivo alle modifiche dell'Area Selezionata

            this.onChangeAreaSelezionata(); //Operazioni ulteriori a seguito dell'autorizzazione

            this.onAfterAuthorization();
          }
          /**
           * Alcune operazioni a seguito dell'autorizzazioni
           */

        }, {
          key: "onAfterAuthorization",
          value: function onAfterAuthorization() {
            //0- RECUPERO LE CHIUSURE DEL GRUPPO
            this.dataChiusuraService.request().then(function (listChiusure) {}); // 1- CHIEDO ELENCO SPORT, LIVELLI, CATEGORIEETA che mi servono sempre

            var elStartConfig = this._startConfig.getValue();

            this.sportService.request(elStartConfig, false)["catch"](function (error) {
              console.log(error);
            });
            this.livelloService.request(elStartConfig)["catch"](function (error) {
              console.log(error);
            });
            this.categoriaEtaService.request(elStartConfig)["catch"](function (error) {
              console.log(error);
            }); // 2 - TENTO L'ACCESSO AUTOMATICO

            this.loadStorageUtente();
          } //#region AREE

          /**
           * Area Selezionata, in versione Observable
           */

        }, {
          key: "areaSelected",
          get: function get() {
            return this.areaService.areaSelected;
          }
          /** Area Selezionata non Observable */

        }, {
          key: "areaSelectedValue",
          get: function get() {
            return this.areaService.areaSelectedValue;
          }
          /**
           * Elenco delle Aree
           */

        }, {
          key: "listAree",
          get: function get() {
            return this.areaService.listAree;
          }
          /**
           * Effettua la connessione al server per la richiesta delle Aree
           * e seleziona la prima area disponibile
           */

        }, {
          key: "requestAree",
          value: function requestAree() {
            var actualStartConfig = this._startConfig.getValue();

            return this.areaService.request(actualStartConfig);
          }
          /**
           * Effettua la selezione di una Area
           * l'oggetto Observable areaSelected verrà emesso con un nuovo valore
           * @param idArea IDArea da selezionare
           */

        }, {
          key: "selectAreaByID",
          value: function selectAreaByID(idArea) {
            this.areaService.selectAreaByID(idArea);
          }
          /**
           * Metodo per sottoscriversi al cambiamento dell'area selezionata
           */

        }, {
          key: "onChangeAreaSelezionata",
          value: function onChangeAreaSelezionata() {
            var _this37 = this;

            this.areaService.areaSelected.subscribe(function (newAreaSelected) {
              //Cambiando Area selezionata
              //Devo necessariamente recuperare le Location
              //Se il documento è in stato inserted non è ancora arrivato dal server
              if (!newAreaSelected.inserted) {
                //Richiedo al server le Location
                _this37.requestLocation(newAreaSelected.ID); //Chiedo la situazione dell' AppReady


                var actualAppReady = _this37._appReady.getValue();

                if (!actualAppReady) {
                  //Applicazione non ancora pronta
                  //Mi sottoscrivo per capire quando posso partire
                  //appena sono arrivate le location
                  _this37.listenLocation = _this37.locationService.listLocation.subscribe(function (data) {
                    if (data.length !== 0) {
                      //App entra in stato pronto
                      _this37._appReady.next(true);

                      _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Avvio AppReady'); //Dopo che l'app è partita in questo contento non 
                      //mi serve piu sapere lo state Location


                      _this37.listenLocation.unsubscribe();
                    }
                  });
                }
              }
            });
          } //#endregion
          //#region LOCATIONS

        }, {
          key: "listLocation",
          get: function get() {
            return this.locationService.listLocation;
          }
          /**
           * Ritorna la location attiva
           */

        }, {
          key: "activeLocation",
          get: function get() {
            return this.locationService.activeLocation;
          }
          /**
           * Richiesta al server di tutte le location dell'area
           * @param idArea Area selezionata
           */

        }, {
          key: "requestLocation",
          value: function requestLocation(idArea) {
            var actualStartConfig = this._startConfig.getValue();

            return this.locationService.requestByIdArea(actualStartConfig, idArea);
          }
        }, {
          key: "newRequestLocation",
          value: function newRequestLocation(idArea) {
            return this.locationService.newRequestByIdArea(idArea);
          }
          /** Effettua la richiesta al server di una Location precisa
           * @param idLocation Location scelta
           *
           */

        }, {
          key: "requestLocationByID",
          value: function requestLocationByID(idLocation, _numLivelli) {
            var actualStartConfig = this._startConfig.getValue();

            return this.locationService.requestLocationByID(actualStartConfig, idLocation, _numLivelli);
          }
          /**
           * Cerca nel servizio la Location desiderata
           * NON OBSERVABLE
           * @param idLocation IDLocation cercata
           */

        }, {
          key: "findLocationByID",
          value: function findLocationByID(idLocation) {
            return this.locationService.findLocationByID(idLocation);
          }
          /**
           *
           * @param selectedLocation Location richiesta
           */

        }, {
          key: "requestLocationCampiSport",
          value: function requestLocationCampiSport(selectedLocation) {
            var listSport = this.sportService.actualListSport;

            var actualStartConfig = this._startConfig.getValue(); //Inietto nel servizio la decodifica della Lista Sport


            this.locationService.decodeListSport = listSport;
            return this.locationService.syncInfoCampi(actualStartConfig, selectedLocation);
          }
          /**
           * Ritorna il template Week con tutti i giorni della settimana e gli SlotTime da applicare
           * in una prenotazione
           * (Schema di Default che andrà successivamente attualizzato con le info di occupazione e
           * chiusura specifica per festività etc)
           * @param docLocation Location richiesta
           */

        }, {
          key: "getTemplateSlotWeek",
          value: function getTemplateSlotWeek(docLocation) {
            return this.locationService.getTemplateSlotWeek(docLocation);
          } //#endregion
          //#region SPORT SERVICE

          /**
           * Richiede in modalità Observable l'elenco degli sport
           */

        }, {
          key: "listSport",
          get: function get() {
            return this.sportService.listSport;
          }
          /**
           * Lista degli sport in modalità non observable
           */

        }, {
          key: "actualListSport",
          get: function get() {
            return this.sportService.actualListSport;
          }
          /**
           * Dato l'id di uno sport, ritorna l'icona
           * @param idSport l'id dello sport
           */

        }, {
          key: "getSportIcon",
          value: function getSportIcon(idSport) {
            return this.sportService.getIconaSport(idSport);
          }
          /**
           * Richiedo al servizio gli Sport
           * @param withLivelli Scaricamento con Livelli
           */

        }, {
          key: "requestSport",
          value: function requestSport(withLivelli) {
            var actualStartConfig = this._startConfig.getValue();

            this.sportService.request(actualStartConfig, withLivelli);
          }
          /**
           * Proprietà per gli Sport di una Location
           */

        }, {
          key: "listLocationSport",
          get: function get() {
            return this.sportService.listLocationSport;
          }
          /**
           * Richiede al server i dati degli Sport in una location
           * @param config Dati configurazione
           * @param idLocation idLocation selezionata
           */

        }, {
          key: "requestLocationSport",
          value: function requestLocationSport(idLocation) {
            var actualStartConfig = this._startConfig.getValue(); //Effettuo la chiamata


            return this.sportService.requestLocationSport(actualStartConfig, idLocation);
          } //#endregion
          //#region LIVELLI

        }, {
          key: "listLivelli",
          get: function get() {
            return this.livelloService.listLivelli;
          }
          /**
           * Richiedo al servizio i Livelli
           */

        }, {
          key: "requestLivelli",
          value: function requestLivelli() {
            var actualStartConfig = this._startConfig.getValue();

            return this.livelloService.request(actualStartConfig);
          }
          /**
           * Richiede al server l'elenco dei Livelli per lo sport
           * @param idSport Sport da analizzare
           */

        }, {
          key: "requestLivelliForSport",
          value: function requestLivelliForSport(idSport) {
            return this.livelloService.requestLivelliForSport(idSport);
          } //#endregion
          //#region CATEGORIAETA

        }, {
          key: "listCategoriaEta",
          get: function get() {
            return this.categoriaEtaService.listCategorieEta;
          }
          /**
           * Richiede al server le Categorie Eta
           */

        }, {
          key: "requestCategorieEta",
          value: function requestCategorieEta() {
            var actualStartConfig = this._startConfig.getValue();

            this.categoriaEtaService.request(actualStartConfig);
          }
        }, {
          key: "isValidCategorieEta",
          value: function isValidCategorieEta(idCategoria, eta) {
            return this.categoriaEtaService.isValid(idCategoria, eta);
          } //#endregion
          //#region CORSO

          /**
           * Elenco Corsi
           */

        }, {
          key: "listCorsi",
          get: function get() {
            return this.corsoService.listCorsi;
          }
          /**
           * Elenco Corsi richiesti da un trainer
           */

        }, {
          key: "listCorsiTrainer",
          get: function get() {
            return this.corsoService.listCorsiTrainer;
          }
          /**
           * Ritorno il filtro corsi impostato nel servizio
           */

        }, {
          key: "filterCorsi",
          get: function get() {
            return this.corsoService.filterCorsi;
          }
          /**
           * Imposta i filtri corsi nel servizio
           */
          ,
          set: function set(value) {
            this.corsoService.filterCorsi = value;
          }
          /**
           * Inizializza e ritorna nuovi Filtri con l'impostazione della location
           * @param idLocation ID Location
           */

        }, {
          key: "newFilterCorsi",
          value: function newFilterCorsi(idLocation) {
            return this.corsoService.newFilterCorsi(idLocation);
          }
        }, {
          key: "requestCorsoById",
          value: function requestCorsoById(idCorso) {
            var actualStartConfig = this._startConfig.getValue();

            return this.corsoService.requestById(actualStartConfig, idCorso);
          }
        }, {
          key: "newRequestCorsoById",
          value: function newRequestCorsoById(idcorso) {
            return this.corsoService.newRequestById(idcorso);
          }
          /**
           * Effettua la chiamata al server per ottenere i corsi riferiti al trainer
           * Risultato nell'Observable listCorsiTrainer
           *
           * @param idTrainer Trainer
           * @param timeState Corsi richiesti
           */

        }, {
          key: "requestTimeTrainerCourse",
          value: function requestTimeTrainerCourse(idTrainer, timeState) {
            this.corsoService.requestTimeTrainerCourse(idTrainer, timeState);
          } //#region coursescheduler

          /**
           * Ritorna il calendario di un corso
           */

        }, {
          key: "calendarioCorso",
          get: function get() {
            return this.corsoCalendarioService.calendarioCorso;
          }
          /**
           * Richiesto il calendario del corso
           * @param idCorso Corso richiesto
           */

        }, {
          key: "requestCalendarioCorso",
          value: function requestCalendarioCorso(idCorso) {
            var actualStartConfig = this._startConfig.getValue();

            return this.corsoCalendarioService.requestCalendario(actualStartConfig, idCorso);
          }
        }, {
          key: "requestImpegniTrainer",
          value: function requestImpegniTrainer(idRef, dataInizio, dataFine) {
            return this.corsoCalendarioService.requestImpegniTrainer(idRef, dataInizio, dataFine);
          }
          /**
           * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
           * @param idPianificazione l'id della pianificazione da recuperare
          */

        }, {
          key: "getPianificazioneTrainerById",
          value: function getPianificazioneTrainerById(idPianificazione) {
            return this.corsoCalendarioService.getPianificazioneTrainerById(idPianificazione);
          }
        }, {
          key: "insertPresenzeIntoPianificazione",
          value: function insertPresenzeIntoPianificazione(docPianificazione) {
            return this.corsoCalendarioService.insertPresenze(docPianificazione);
          }
        }, {
          key: "requestUpdatePresenze",
          value: function requestUpdatePresenze(docPianificazione) {
            return this.corsoCalendarioService.updatePresenze(docPianificazione);
          } //#endregion
          ////#region corsi
          //Ritorna il corso selezionato nel servizio

        }, {
          key: "selectedCorso",
          get: function get() {
            return this.corsoService.selectedCorso;
          } //#endregion
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

        }, {
          key: "getPostiDisponibiliCorso",
          value: function getPostiDisponibiliCorso(idCorso) {
            return this.iscrizioneCorsoService.getPostiDisponibiliCorso(idCorso);
          }
          /**
           * Chiama il server per il salvataggio di una nuova iscrizione
           * @param docIscrizione Documento Iscrizione da creare
           */

        }, {
          key: "requestSaveIscrizione",
          value: function requestSaveIscrizione(docIscrizione) {
            return this.iscrizioneCorsoService.requestSaveIscrizione(docIscrizione);
          } //#endregion
          //#region CORSO VALUTAZIONE

          /**
           * Chiede al server una Scheda di Valutazione finale Corso
           *
           * @param idCorso idCorso richiesto
           * @returns resolve con la Scheda di Valutazione
           * @return  reject Messaggio Errore
           */

        }, {
          key: "requestSchedaValutazioneCorso",
          value: function requestSchedaValutazioneCorso(idCorso) {
            return this.corsoValutazioneService.requestSchedaValutazioneCorso(idCorso);
          }
          /**
           * Richiede al server il salvataggio della scheda di valutazione
           * @param docScheda Scheda in salvataggio
           */

        }, {
          key: "requestForSaveSchedaValutazioneCorso",
          value: function requestForSaveSchedaValutazioneCorso(docScheda) {
            return this.corsoValutazioneService.requestForSave(docScheda);
          } //#endregion
          //#region UTENTE

        }, {
          key: "utente",
          get: function get() {
            return this.utenteService.utente;
          } // Espone se l'utente è loggato 

        }, {
          key: "utenteLogged",
          get: function get() {
            return this.utenteService.utenteLoggato;
          }
        }, {
          key: "actualUtenteLogged",
          get: function get() {
            return this.utenteService.actualLoggato;
          }
          /**
           * recupera l'utente loggato (non Obs)
           */

        }, {
          key: "actualUtente",
          get: function get() {
            return this.utenteService.actualUtente;
          }
          /**
           * Memorizza nello storage username e password
           * @param username Username da memorizzare
           * @param pwd Password da memorizzare
           */

        }, {
          key: "saveStorageUtente",
          value: function saveStorageUtente(username, passwd) {
            var account = new _models_utente_model__WEBPACK_IMPORTED_MODULE_17__["storageUtente"](username, passwd); //salvo le informazioni criptate

            var strAccount = account.saveJSON(true);
            this.storageAccess.set('gouegoser', strAccount);

            _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Saved credential');
          }
        }, {
          key: "updateClientUtenteData",
          value: function updateClientUtenteData() {
            return this.utenteService.updateClientData();
          }
          /**
           * Carica dallo Storage le credenziali utente memorizzate
           * Se il recupero è corretto tenta anche il login
           */

        }, {
          key: "loadStorageUtente",
          value: function loadStorageUtente() {
            var _this38 = this;

            _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('Trying autologin'); //Chiedo di caricare l'impostazione


            this.storageAccess.get('gouegoser').then(function (val) {
              //Credenziali memorizzate
              if (val) {
                var savedUser = new _models_utente_model__WEBPACK_IMPORTED_MODULE_17__["storageUtente"]('', '');
                savedUser.loadJSON(val);

                if (savedUser.loginUser && savedUser.pwdUser) {
                  //Devo tentare di accedere
                  //Faccio la richiesta al server
                  _this38.userLogin(savedUser.loginUser, savedUser.pwdUser).then(function () {
                    _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('AutoLogin passed: ');
                  })["catch"](function (error) {
                    _models_log_model__WEBPACK_IMPORTED_MODULE_18__["LogApp"].consoleLog('AutoLogin failed: ' + error);
                  });
                }
              }
            })["catch"](function (error) {//Failed load Storage
            });
          }
          /**
           * Disconnessione utente richiesta
           */

        }, {
          key: "userLogoff",
          value: function userLogoff() {
            var myStartConfig = this._startConfig.getValue(); // Avviso del logoff


            this.utenteService.logoff(); //Tolgo il codice di autorizzazione utente

            myStartConfig.authorizationUserCode = ''; //Riemetto l'Observable

            this._startConfig.next(myStartConfig); //Tolgo le credenziali memorizzate dallo storage


            this.saveStorageUtente('', '');
          }
          /**
           * Effettua la richiesta
           * @param username Username Utente
           * @param password Password Utente
           */

        }, {
          key: "userLogin",
          value: function userLogin(username, password) {
            var actualStartConfig = this._startConfig.getValue(); //Mi metto in ascolto per i cambi di Area Favorite a seguito della login


            this.onChangeAreaFavListener(); //Chiamo il servizio Utente passando username, password, la configurazione e
            //l'eventuale area da Impostare come attiva dopo il login

            return this.utenteService.login(username, password, this._startConfig, this._forceIdAreaOnLogin);
          }
          /**
           * Ascolta il cambio dell'idAreaChange
           */

        }, {
          key: "onChangeAreaFavListener",
          value: function onChangeAreaFavListener() {
            var _this39 = this;

            this.utenteService.idAreaFAV.subscribe(function (value) {
              //Se arriva un'area favorita, procedo con il cambio
              if (value) {
                //Cambio dell'area
                _this39.selectAreaByID(value);
              }
            });
          }
          /**
           * Richiedere al server l'operazione di Update Utente
           * @param docUtenteUpdate Documento Utente con le modifiche da inviare
           */

        }, {
          key: "updateUtente",
          value: function updateUtente(docUtenteUpdate) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.requestUpdate(actualStartConfig, docUtenteUpdate);
          }
          /**
           * Effettua la richiesta al server per il cambio della password
           * Ritorna un Observable
           * con {RESULT: 0/1, MESSAGE:''}
           * @param oldPsw Password Attuale
           * @param newPsw Nuova Password
           */

        }, {
          key: "requestChangePassword",
          value: function requestChangePassword(oldPsw, newPsw) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.requestChangePassword(actualStartConfig, oldPsw, newPsw);
          }
          /**
           * Foto utente presente nel servizio utente
           */

        }, {
          key: "userPicture",
          get: function get() {
            return this.utenteService.userPicture;
          }
          /**
           * Apre la fotocamera per la foto utente
           */

        }, {
          key: "takePictureUtente",
          value: function takePictureUtente() {
            var _this40 = this;

            var photoType = _photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoType"].account;
            var idPhoto = '';
            return new Promise(function (resolve, reject) {
              if (_this40.utenteLogged) {
                //Identificativo della foto
                _this40.utente.subscribe(function (elutente) {
                  idPhoto = elutente.ID; //Apro la fotocamera per il caricamento

                  _this40.photoService.takePicure(photoType, idPhoto).then(function (dataUrl) {
                    //Foto memorizzata, la imposto nel servizio utente
                    _this40.utenteService.setUserPicture(dataUrl); //Risolvo la Promise


                    resolve(dataUrl);
                  })["catch"](function (error) {
                    reject(error);
                  });
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('No user logged');
              }
            });
          }
          /**
           *
           * @returns DataURL con la foto profilo
           */

        }, {
          key: "loadPictureUtente",
          value: function loadPictureUtente() {
            var _this41 = this;

            var photoType = _photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoType"].account;
            var idPhoto = '';
            return new Promise(function (resolve) {
              if (_this41.utenteLogged) {
                _this41.utente.subscribe(function (elutente) {
                  //Identificativo della foto
                  idPhoto = elutente.ID; //Apro la fotocamera per il caricamento

                  _this41.photoService.storageLoad(photoType, idPhoto).then(function (dataUrl) {
                    //Foto memorizzata, la imposto nel servizio utente
                    _this41.utenteService.setUserPicture(dataUrl);

                    resolve(dataUrl);
                  })["catch"](function (error) {
                    resolve('');
                  });
                }, function (error) {
                  resolve('');
                });
              } else {
                resolve('');
              }
            });
          } //#endregion
          //#region REGISTRAZIONE ACCOUNT

          /**
           * Chiama il server e chiede l'invio dei PINCODE di registrazione
           * @param docRequestCode Dati per la richiesta da inviare al server
           */

        }, {
          key: "registrationSendCodici",
          value: function registrationSendCodici(docRequestCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.registrationSendCodici(actualStartConfig, docRequestCode);
          }
          /**
           * Chiama il server inviando i codici inseriti dall'utente per chiederne il controllo
           * @param docVerifyCode Dati per la verifica dei codici inseriti
           */

        }, {
          key: "registrationVerifyCodici",
          value: function registrationVerifyCodici(docVerifyCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.registrationVerifyCodici(actualStartConfig, docVerifyCode);
          }
          /**
           * Invia al server la richiesta per la registrazione di un nuovo account
           * @param docUtente Nuovo Utente da registrare
           * @param docRequestCode Documento richiesta codici presentato in precedenza
           */

        }, {
          key: "registrationFinalize",
          value: function registrationFinalize(docUtente, docRequestCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.registrationFinalize(actualStartConfig, docUtente, docRequestCode);
          } //#endregion
          //#region PSW RECOVERY

        }, {
          key: "recoverySendCodici",
          value: function recoverySendCodici(docRequestCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.recoverySendCodici(actualStartConfig, docRequestCode);
          }
        }, {
          key: "recoveryVerifyCodici",
          value: function recoveryVerifyCodici(docVerifyCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.recoveryVerifyCodici(actualStartConfig, docVerifyCode);
          }
          /**
           * Invia al server la richiesta per la registrazione di un nuovo account
           * @param docUtente Nuovo Utente da registrare
           * @param docRequestCode Documento richiesta codici presentato in precedenza
           */

        }, {
          key: "recoveryFinalize",
          value: function recoveryFinalize(docUtente, docRequestCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.recoveryFinalize(actualStartConfig, docUtente, docRequestCode);
          } //#endregion
          //#region VALIDATION CONTATTI

        }, {
          key: "validationSendCodici",
          value: function validationSendCodici(docRequestCode, docUtente) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.validationSendCodici(actualStartConfig, docUtente, docRequestCode);
          }
        }, {
          key: "validationVerifyCodici",
          value: function validationVerifyCodici(docVerifyCode) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteService.validationVerifyCodici(actualStartConfig, docVerifyCode);
          } //#region PRENOTAZIONE

          /**
           * Prenotazione Attiva
           */

        }, {
          key: "activePrenotazione",
          get: function get() {
            return this.prenotazioniService.activePrenotazione;
          } //Passo al servizio una prenotazione e la imposto nel servizio

        }, {
          key: "setActivePrenotazione",
          value: function setActivePrenotazione(value) {
            this.prenotazioniService.setActivePrenotazione(value);
          }
          /**
           * Chiede al servizio di inizializzare una nuova Prenotazione
           * @param idArea IDArea da impostare
           */

        }, {
          key: "initActivePrenotazione",
          value: function initActivePrenotazione(idArea) {
            this.prenotazioniService.initActivePrenotazione(idArea);
          }
          /**
           * Chiede al servizio di impostare la pianificazione
           * @param docPianificazione Pianificazione da impostare
           */

        }, {
          key: "setPianificazioneSingola",
          value: function setPianificazioneSingola(docPianificazione) {
            this.prenotazioniService.setPianificazioneSingola(docPianificazione);
          }
          /**
           * Chiede al servizio di impostare l'utente
           * @param idUtente Utente da applicare
           */

        }, {
          key: "setIDUtenteActivePrenotazione",
          value: function setIDUtenteActivePrenotazione(docUtente) {
            this.prenotazioniService.setIDUtenteActivePrenotazione(docUtente);
          }
          /**
           * Richiede al servizio il calcolo
           * della Prenotazione
           *
           */

        }, {
          key: "requestImportoPrenotazione",
          value: function requestImportoPrenotazione() {
            var actualStartConfig = this._startConfig.getValue();

            return this.prenotazioniService.requestImporto(actualStartConfig);
          }
          /**
           * Ritorna Observable da analizzare con subscribe relativo alla richiesta di salvataggio
           * della prenotazione
           */

        }, {
          key: "requestSavePrenotazione",
          value: function requestSavePrenotazione() {
            var actualStartConfig = this._startConfig.getValue();

            return this.prenotazioniService.requestSave(actualStartConfig);
          } //Mantiene nel servizio il campo per una rilettura futura

        }, {
          key: "setSelectedCampoPrenotazione",
          value: function setSelectedCampoPrenotazione(value) {
            this.prenotazioniService.selectedCampo = value;
          } //Recupera nel servizio Prenotazione il campo salvato in precedenza

        }, {
          key: "getSelectedCampoPrenotazione",
          value: function getSelectedCampoPrenotazione() {
            return this.prenotazioniService.selectedCampo;
          }
          /**
           * Richiede al server una Prenotazione
           * @param idPrenotazione idPrenotazione Padre
           */

        }, {
          key: "requestPrenotazioneById",
          value: function requestPrenotazioneById(idPrenotazione, numLivelli) {
            var actualStartConfig = this._startConfig.getValue();

            return this.prenotazioniService.requestById(actualStartConfig, idPrenotazione, numLivelli);
          }
        }, {
          key: "requestDeletePianificazione",
          value: function requestDeletePianificazione(idPianificazione) {
            var actualStartConfig = this._startConfig.getValue();

            return this.prenotazioniService.requestDelete(idPianificazione, actualStartConfig);
          } //#endregion
          //#region UtentePrenotazione

          /**
           * Richiede al server elenco di prenotazioni di un utente
           * @param idUtente IDUtente Prenotazione
           */

        }, {
          key: "requestUtentePrenotazioni",
          value: function requestUtentePrenotazioni(idUtente) {
            var actualStartConfig = this._startConfig.getValue(); //Richiedo i dati al servizio


            return this.utentePrenotazioneService.request(actualStartConfig, idUtente);
          }
          /**
           * Lista Prenotazioni di tipo Observable
           */

        }, {
          key: "listUtentePrenotazioni",
          get: function get() {
            return this.utentePrenotazioneService.listUtentePrenotazione;
          } //#endregion
          //#region UtenteIscrizione

          /**
           * Richiede al server elenco di Iscrizioni ai corsi di un utente
           * @param idUtente IDUtente
           */

        }, {
          key: "requestUtenteIscrizioni",
          value: function requestUtenteIscrizioni(idUtente) {
            var actualStartConfig = this._startConfig.getValue(); //Richiedo i dati al servizio


            return this.utenteIscrizioneService.request(actualStartConfig, idUtente);
          }
          /**
           * Lista Iscrizioni Corsi di tipo Observable
           */

        }, {
          key: "listUtenteIscrizioni",
          get: function get() {
            return this.utenteIscrizioneService.listUtenteIscrizione;
          }
        }, {
          key: "requestIscrizioneById",
          value: function requestIscrizioneById(idIscrizione) {
            var actualStartConfig = this._startConfig.getValue();

            return this.utenteIscrizioneService.requestById(actualStartConfig, idIscrizione);
          } //#endregion
          //#region NEWS EVENTI

        }, {
          key: "listNews",
          get: function get() {
            return this.newsEventiService.listNews;
          }
          /**
           * Recupera le news relative ad un'area
           * @param guidArea il guid dell'area
           * @param nElementi il numero di elementi richiesti
           */

        }, {
          key: "requestNews",
          value: function requestNews(guidArea, nElementi) {
            var actualStartConfig = this._startConfig.getValue();

            return this.newsEventiService.request(actualStartConfig, guidArea, nElementi);
          }
          /** Effettua la richiesta al servizio di una news
           * @param idNews News scelta
           *
           */

        }, {
          key: "requestNewsByID",
          value: function requestNewsByID(idNews) {
            return this.newsEventiService.getNewsById(idNews);
          } //#endregion
          //#region OCCUPAZIONE CAMPI

        }, {
          key: "docOccupazione",
          get: function get() {
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

        }, {
          key: "requestSlotOccupazioni",
          value: function requestSlotOccupazioni(templateSlotDay, docLocation, docCampo, dataGiorno) {
            var actualStartConfig = this._startConfig.getValue(); //Faccio la richiesta dei dati al servizio


            return this.slotOccupazioneService.request(actualStartConfig, templateSlotDay, docLocation, docCampo, dataGiorno);
          } //#endregion
          //#region PAGAMENTI
          //#endregion
          //#region CODICE FISCALE

          /**
           * Promise per il controllo e la decodifica del codice fiscale
           * Puo' essere usata solo per controllare il Codice Controllo con il resto, oppure per decodificare tutti i campi
           * @param codiceFiscale Codice Fiscale da anallizare
           * @param decode
           */

        }, {
          key: "checkCodiceFiscale",
          value: function checkCodiceFiscale(codiceFiscale, decode, userMsg) {
            return this.codFiscService.checkCodiceFiscale(codiceFiscale, decode, userMsg);
          } //#endregion

          /**
           * dato un tipo di immagine, la funzione restituisce la stringa in B64
           * @param tipo il tipo di immagine richiesta
           */

        }, {
          key: "requestBase64Image",
          value: function requestBase64Image(tipo) {
            var _this42 = this;

            return new Promise(function (resolve, reject) {
              var doObject = 'GRUPPOSPORTIVO';

              var config = _this42._startConfig.getValue();

              var myUrl = config.urlBase + '/' + doObject;
              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('X-HTTP-Method-Override', 'getBase64PrivateImage'); // =new HttpHeaders({
              //   'Content-Type': 'text/plain',
              //   'appid': config.appId,
              //   'X-HTTP-Method-Override':'getBase64PrivateImage'
              // });

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Tipo', tipo + '');

              _this42.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.image;
              })).subscribe(function (base64) {
                resolve(base64);
              }, function (error) {
                reject(error);
              });
            }); //#region image
          } //#endregion
          //#region OCCUPAZIONICAMPI

        }, {
          key: "requestOccupazioni",
          value: function requestOccupazioni(idArea, idLocation, top, params, fromTime) {
            return this.occupazioniService.request(idArea, idLocation, params, top, fromTime);
          }
        }, {
          key: "requestOccupazioniByFilter",
          value: function requestOccupazioniByFilter(filter, params) {
            return this.occupazioniService.requestByFilter(filter, params);
          }
        }, {
          key: "requestOccupazioneById",
          value: function requestOccupazioneById(idOccupazione) {
            var getRelReservation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return this.occupazioniService.requestById(idOccupazione, getRelReservation);
          } //#endregion
          ////#region DOCUMENTO

        }, {
          key: "requestDocumento",
          value: function requestDocumento(urlDocumento) {
            return this.documentoService.request(this.actualStartConfig, urlDocumento);
          } ////#endregion
          //#region INVOICES

          /**
           * Richiede l'elenco delle ricevute per l'utente passato
           * @param utente il documento utente
           */

        }, {
          key: "requestInvoices",
          value: function requestInvoices(utente, anno) {
            return this.invoicesService.requestInvoices(utente, anno);
          }
          /**
            * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
            * @param documento elemento MasterDocumento che si vuole scaricare
            */

        }, {
          key: "downloadInvoice",
          value: function downloadInvoice(documento) {
            return this.invoicesService.downloadInvoice(documento);
          }
          /**
          * la funzione, presa una stringa b64 e il content-type, restituisce il blob
          * @param b64Data stringa B64 SENZA tipo di file
          * @param contentType stringa tipo file (default: application/pdf)
          */

        }, {
          key: "base64toBlob",
          value: function base64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'application/pdf';
            return this.invoicesService.base64toBlob(b64Data, contentType);
          } //#endregion
          //#region posizione

          /**
           * La funzione restituisce una promise con la posizione attuale
           */

        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return this.posizioneService.getCurrentPosition();
          }
          /**
           * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
           * @param listAree la lista delle aree tra cui cercare
           */

        }, {
          key: "getNearestArea",
          value: function getNearestArea(listAree) {
            return this.posizioneService.getNearestArea(listAree);
          } //#endregion
          //#region DATECHIUSURE

        }, {
          key: "isFestivita",
          value: function isFestivita(data, idArea, idLocation, idCampo) {
            return this.dataChiusuraService.idFestivita(idArea, idLocation, idCampo, data);
          } //#endregion
          //#region CORSOALLEGATO

        }, {
          key: "requestListAllegatiByIdCorso",
          value: function requestListAllegatiByIdCorso(idCorso) {
            return this.corsoAllegatoService.requestByIdCorso(idCorso);
          }
        }]);

        return StartService;
      }();

      StartService.ɵfac = function StartService_Factory(t) {
        return new (t || StartService)(_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_sport_service__WEBPACK_IMPORTED_MODULE_5__["SportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_categoriaeta_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utente_service__WEBPACK_IMPORTED_MODULE_8__["UtenteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_livello_service__WEBPACK_IMPORTED_MODULE_9__["LivelloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_area_service__WEBPACK_IMPORTED_MODULE_10__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_location_service__WEBPACK_IMPORTED_MODULE_11__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_coursescheduler_service__WEBPACK_IMPORTED_MODULE_12__["CourseschedulerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_prenotazione_service__WEBPACK_IMPORTED_MODULE_13__["PrenotazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_newseventi_service__WEBPACK_IMPORTED_MODULE_14__["NewseventiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_slotoccupazione_service__WEBPACK_IMPORTED_MODULE_15__["SlotoccupazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utenteprenotazione_service__WEBPACK_IMPORTED_MODULE_19__["UtenteprenotazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_utenteiscrizione_service__WEBPACK_IMPORTED_MODULE_20__["UtenteiscrizioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_codicefiscale_service__WEBPACK_IMPORTED_MODULE_22__["CodicefiscaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_occupazioni_service__WEBPACK_IMPORTED_MODULE_23__["OccupazioniService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_24__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_documento_service__WEBPACK_IMPORTED_MODULE_26__["DocumentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_invoices_service__WEBPACK_IMPORTED_MODULE_27__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_posizione_service__WEBPACK_IMPORTED_MODULE_28__["PosizioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_data_chiusura_service__WEBPACK_IMPORTED_MODULE_29__["DataChiusuraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_30__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_corsoallegato_service__WEBPACK_IMPORTED_MODULE_32__["CorsoallegatoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_iscrizionecorso_service__WEBPACK_IMPORTED_MODULE_33__["IscrizionecorsoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_corso_valutazione_service__WEBPACK_IMPORTED_MODULE_34__["CorsoValutazioneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵinject"](_photo_service__WEBPACK_IMPORTED_MODULE_35__["PhotoService"]));
      };

      StartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjectable"]({
        token: StartService,
        factory: StartService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ErEm":
    /*!***********************************************!*\
      !*** ./src/app/library/models/cache.model.ts ***!
      \***********************************************/

    /*! exports provided: Cache */

    /***/
    function ErEm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cache", function () {
        return Cache;
      });
      /* harmony import */


      var _cachelistelement_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cachelistelement.model */
      "z5yz");

      var Cache = /*#__PURE__*/function () {
        function Cache() {
          _classCallCheck(this, Cache);

          this.list = [];
        }
        /**
         * Cerca nell'Array list se è presente un oggetto della stessa className
         * @param className Nome della classe cercato
         */


        _createClass(Cache, [{
          key: "findByClassName",
          value: function findByClassName(className) {
            return this.list.find(function (el) {
              return el.className == className;
            });
          }
          /**
           * Aggiunge alla cache un documento
           * @param doc Documento da aggiungere alla cache
           */

        }, {
          key: "addTo",
          value: function addTo(doc) {
            //Step 1: Cercare nella lista il CacheListElement corretto con il nome classe 
            var objDescriptor;
            var elCacheList;
            var updateIfExist = false;

            if (doc) {
              objDescriptor = doc.getDescriptor();

              if (objDescriptor) {
                //Mi son fatto restituire l'elemento cache
                elCacheList = this.findByClassName(objDescriptor.className); //Non ho nessuna cache lista dell'oggetto specificato

                if (!elCacheList) {
                  //Non ce l'abbiamo ancora in cache
                  elCacheList = new _cachelistelement_model__WEBPACK_IMPORTED_MODULE_0__["CacheListElement"](objDescriptor.className);
                  this.list.push(elCacheList);
                  updateIfExist = false;
                  elCacheList.addElement(doc, updateIfExist);
                } else {
                  //L'oggetto specificato possiede gia una lista di cache
                  updateIfExist = true;
                  elCacheList.addElement(doc, updateIfExist);
                }
              }
            }
          }
        }]);

        return Cache;
      }();
      /***/

    },

    /***/
    "F/re":
    /*!***************************************!*\
      !*** ./src/app/models/corso.model.ts ***!
      \***************************************/

    /*! exports provided: Corso */

    /***/
    function FRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Corso", function () {
        return Corso;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _settimana_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settimana.model */
      "w48H");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _corsoprogramma_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./corsoprogramma.model */
      "t3EU");
      /* harmony import */


      var _pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pianificazionecorso.model */
      "b5Gy");

      var Corso = /*#__PURE__*/function (_library_models_iddoc8) {
        _inherits(Corso, _library_models_iddoc8);

        var _super8 = _createSuper(Corso);

        function Corso(onlyInstance) {
          var _this43;

          _classCallCheck(this, Corso);

          _this43 = _super8.call(this, onlyInstance);

          if (!onlyInstance) {
            _this43._DESCRCATEGORIEETA = '';
            _this43._DESCRLIVELLOENTRATA = '';
            _this43._DESCRSPORT = '';
          }

          _this43.CORSOPROGRAMMA = [];
          _this43.PIANIFICAZIONECORSO = [];
          return _this43;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Corso, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["Descriptor"]();
            var arString = ['DENOMINAZIONE', 'SIGLACALENDARIO', 'IDLIVELLOENTRATA', '_DESCRLIVELLOENTRATA', 'IDLIVELLOFINALE', 'IDSPORT', '_DESCRSPORT', 'IDAREAOPERATIVA', 'IDLOCATION', 'IDCAMPO', 'GIORNIPREVISTI', 'IDCATEGORIEETA', '_DESCRCATEGORIEETA'];
            var arNumber = ['TIPO', 'NUMEROLEZIONI', 'NUMPARTECIPANTI', 'MAXPARTECIPANTI', 'STATO', 'STATODINAMICO', 'TARGETSESSO', 'DURATA'];
            var arDecimal = ['ORELEZIONE', 'PREZZOLORDO'];
            var arBoolean = [];
            var arDate = ['DATAINIZIO', 'DATAFINE', 'ISCRIZIONEDAL', 'ISCRIZIONEAL'];
            var arDateTime = [];
            var arTime = ['ORAINIZIO'];
            objDescriptor.className = 'Corso';
            objDescriptor.classWebApiName = 'CORSO';
            objDescriptor.doRemote = true;
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].number);
            objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_3__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo IDDOcument
            _get(_getPrototypeOf(Corso.prototype), "setJSONProperty", this).call(this, data); //Sistemo la Settimana in italiano


            this.setSettimana(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Language"].italiano);
            this.setCollection(data);
            this.setOriginal();
          }
          /**
           * Sistema le collection se presenti
           * @param data JSON Ricevuto
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
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

        }, {
          key: "setCollectionCorsoProgramma",
          value: function setCollectionCorsoProgramma(arPROGRAMMA) {
            var _this44 = this;

            this.CORSOPROGRAMMA = [];

            if (arPROGRAMMA) {
              arPROGRAMMA.forEach(function (element) {
                // Ricerco se esiste già
                var newProgramma = _this44.getCorsoProgrammaByID(element.ID); //Non esiste lo creo nuovo


                if (!newProgramma) {
                  newProgramma = new _corsoprogramma_model__WEBPACK_IMPORTED_MODULE_4__["CorsoProgramma"]();
                  newProgramma.setJSONProperty(element);

                  _this44.CORSOPROGRAMMA.push(newProgramma);
                } else {
                  //Reimposto i valori
                  newProgramma.setJSONProperty(element);
                }
              });
            }
          }
          /**
           * Ritorna l'elemento di Corso Programma che corrisponde con ID
           */

        }, {
          key: "getCorsoProgrammaByID",
          value: function getCorsoProgrammaByID(idCorsoProgramma) {
            // Ricerco se esiste già
            var newProgramma = this.CORSOPROGRAMMA.find(function (elProgramma) {
              return elProgramma.ID == idCorsoProgramma;
            });
            return newProgramma;
          }
          /**
           * Imposta la collection Pianificazioni Corso
           * @param arPianificazioni JSON Ricevuti
           */

        }, {
          key: "setCollectionPianificazioneCorso",
          value: function setCollectionPianificazioneCorso(arPianificazioni) {
            var _this45 = this;

            this.PIANIFICAZIONECORSO = [];

            if (arPianificazioni) {
              arPianificazioni.forEach(function (element) {
                // Ricerco se esiste già
                var newPianificazione = _this45.getPianificazioneCorsoByID(element.ID); //Non esiste lo creo nuovo


                if (!newPianificazione) {
                  newPianificazione = new _pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_5__["PianificazioneCorso"]();
                  newPianificazione.setJSONProperty(element);

                  _this45.PIANIFICAZIONECORSO.push(newPianificazione);
                } else {
                  //Reimposto i valori
                  newPianificazione.setJSONProperty(element);
                }
              });
            }
          }
          /**
           * Ritorna l'elemento di Pianificazione Corso che corrisponde con ID
           */

        }, {
          key: "getPianificazioneCorsoByID",
          value: function getPianificazioneCorsoByID(idPianificazioneCorso) {
            // Ricerco se esiste già
            var findPianificazioneCorso = this.PIANIFICAZIONECORSO.find(function (elPianificazione) {
              return elPianificazione.ID == idPianificazioneCorso;
            });
            return findPianificazioneCorso;
          }
          /**
           * Ritorna un'altra Settimana in un'altra lingua
           * @param language Lingua
           */

        }, {
          key: "getTranslateSettimana",
          value: function getTranslateSettimana(language) {
            var myWeek = _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].getArray(true, language);

            var arGiorni = this.GIORNIPREVISTI.split(';'); //GIORNIPREVISTI contiene 1 Dom, 2 Lun, 3 Mart
            //Ciclo nei giorni

            arGiorni.forEach(function (charGiorno) {
              var index = parseInt(charGiorno.trim()); //Vado indietro 

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

        }, {
          key: "setSettimana",
          value: function setSettimana(language) {
            var _this46 = this;

            //Chiedo un Array Settimana con inizio Domenica
            this._SETTIMANA = _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].getArray(true, language);
            var arGiorni = this.GIORNIPREVISTI.split(';'); //In giorni previsti c'e' Dom 1, Lun 2 etc
            //Ciclo nei giorni

            arGiorni.forEach(function (charGiorno) {
              var index = parseInt(charGiorno.trim()); //Porto a base 0 cosi' Domenica è 0 Lun 1 etc

              index = index - 1;

              if (index >= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].domenica && index <= _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"].sabato) {
                _settimana_model__WEBPACK_IMPORTED_MODULE_2__["Settimana"].selectDayArray(index, _this46._SETTIMANA);
              }
            });
          }
          /**
           * Partendo dall'Array _SETTIMANA crea un array solo per le Giornate selezionate
           */

        }, {
          key: "getArrayGiorniCorso",
          value: function getArrayGiorniCorso() {
            var onlyDays = [];
            onlyDays = this._SETTIMANA.filter(function (element) {
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

        }, {
          key: "tempoCorso",
          value: function tempoCorso() {
            var adesso = new Date();
            var value = "";

            if (this.DATAINIZIO > adesso) {
              value = "next";
            } else if (this.DATAFINE > adesso) {
              value = "during";
            } else {
              value = "stop";
            }

            return value;
          }
          /**
           * Ritorna TRUE se Oggi è possibile iscriversi al corso
           */

        }, {
          key: "flagIscrizioniAperte",
          value: function flagIscrizioniAperte() {
            var flag = false;

            if (this.STATODINAMICO == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["StatoCorso"].iscrizioniAperte) {
              flag = true;
            }

            return flag;
          }
          /**
           * Ritorna una icona a seconda del tipo Corso
           */

        }, {
          key: "getIcon",
          value: function getIcon() {
            var nameIcon = 'ribbon';

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

        }, {
          key: "isAPagamento",
          value: function isAPagamento() {
            var flagPagamento;
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

        }, {
          key: "existProgrammaCorso",
          value: function existProgrammaCorso() {
            var exist = false;

            if (this.CORSOPROGRAMMA) {
              if (this.CORSOPROGRAMMA.length != 0) {
                for (var index = 0; index < this.CORSOPROGRAMMA.length; index++) {
                  var element = this.CORSOPROGRAMMA[index];

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

        }, {
          key: "getFullProgrammaHTML",
          value: function getFullProgrammaHTML() {
            var txtReturn = '';

            if (this.CORSOPROGRAMMA) {
              if (this.CORSOPROGRAMMA.length != 0) {
                for (var index = 0; index < this.CORSOPROGRAMMA.length; index++) {
                  var element = this.CORSOPROGRAMMA[index];

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
        }]);

        return Corso;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "FAI+":
    /*!************************************************************!*\
      !*** ./src/app/models/prenotazionepianificazione.model.ts ***!
      \************************************************************/

    /*! exports provided: PrenotazionePianificazione */

    /***/
    function FAI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrenotazionePianificazione", function () {
        return PrenotazionePianificazione;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");

      var PrenotazionePianificazione = /*#__PURE__*/function (_library_models_iddoc9) {
        _inherits(PrenotazionePianificazione, _library_models_iddoc9);

        var _super9 = _createSuper(PrenotazionePianificazione);

        function PrenotazionePianificazione(onlyInstance) {
          var _this47;

          _classCallCheck(this, PrenotazionePianificazione);

          _this47 = _super9.call(this, onlyInstance);

          if (!onlyInstance) {
            _this47.NUMPARTECIPANTI = 1;
            _this47._DESCRCAMPO = '';
            _this47._DESCRSPORT = '';
          }

          return _this47;
        }

        _createClass(PrenotazionePianificazione, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(PrenotazionePianificazione.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
        }, {
          key: "setCollection",
          value: function setCollection(data) {}
          /**
           * Ritorna il descrittore della Struttura Campi
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDPRENOTAZIONE', 'IDAREAOPERATIVA', 'IDLOCATION', 'IDSPORT', 'IDCAMPO', 'GUIDSERIE', 'PROGRESSIVO'];
            var arNumber = ['ANNO', 'NUMPARTECIPANTI'];
            var arNumberDecimal = ['DURATAORE', 'IMPONIBILE', 'INCASSATO', 'RESIDUO', 'IMPOSTA', 'TOTALE', 'STATO'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
            var arTime = [];
            objDescriptor.className = 'PrenotazionePianificazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'PRENOTAZIONEPIANIFICAZIONE';
            objDescriptor.describeField = 'DATAORAINIZIO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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
        }], [{
          key: "getReqForeignKeys",
          value: function getReqForeignKeys() {
            var arRequest = [];
            var objForeign;
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
        }]);

        return PrenotazionePianificazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "FYk8":
    /*!**********************************************************!*\
      !*** ./src/app/library/services/docstructure.service.ts ***!
      \**********************************************************/

    /*! exports provided: DocstructureService */

    /***/
    function FYk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocstructureService", function () {
        return DocstructureService;
      });
      /* harmony import */


      var _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/iddocument.model */
      "5usX");
      /* harmony import */


      var _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _models_structure_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/structure.model */
      "6Eaa");
      /* harmony import */


      var _services_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_cache_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/cache.model */
      "ErEm");
      /* harmony import */


      var src_app_models_log_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/log.model */
      "Ag5x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocstructureService = /*#__PURE__*/function () {
        function DocstructureService(apiService) {
          _classCallCheck(this, DocstructureService);

          this.apiService = apiService; //Struttura documentale

          this.structureDocuments = []; //Oggetto con la cache

          this.objCache = new _models_cache_model__WEBPACK_IMPORTED_MODULE_6__["Cache"]();
        }
        /**
         * Partendo dal servizio Start Service c'e' un subscribe nel costruttore
         * che serve a inviarmi la configurazione ad ogni cambiamento
         * Impostare la configurazione prima delle chiamate
         * @param configuration Configurazione di Partenza
         */


        _createClass(DocstructureService, [{
          key: "setConfig",
          value: function setConfig(elConfig) {
            this.myConfig = elConfig;
            src_app_models_log_model__WEBPACK_IMPORTED_MODULE_7__["LogApp"].consoleLog('New Configuration received');
          }
          /**
           * Decodifica tutte le Foreign Key presenti, eccetto quelle passate nell'array di esclusione
           * @param doc Documento da decodificare
           * @param fieldsExclude Campi di ForeignKeys da non decodificare
           */

        }, {
          key: "decodeAll",
          value: function decodeAll(doc) {
            var _this48 = this;

            var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var fieldsExclude = arguments.length > 2 ? arguments[2] : undefined;
            return new Promise(function (resolve, reject) {
              var executePromise = [];

              if (doc) {
                //Chiedo le ForeignKeys del documento
                var arForeign = doc.ForeignKeys;
                var _this = _this48;
                /**Ciclo sulle foreignkey */

                for (var index = 0; index < arForeign.length; index++) {
                  var element = arForeign[index];
                  var use = true;

                  if (fieldsExclude && fieldsExclude.length !== 0) {
                    //Utilizzo questa foreignkeys solo se non presente tra quelle da
                    //escludere
                    use = !fieldsExclude.includes(element.fieldName);
                  }

                  if (use) {
                    //Richiedo la decodifica del campo
                    executePromise.push(_this.decode(doc, element.fieldName, useCache));
                  }
                } //Ho dei campi che devo decodificare con le Promise


                if (executePromise.length !== 0) {
                  Promise.all(executePromise).then(function () {
                    resolve();
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  //Non ho nulla da decodificare e va bene cosi
                  resolve();
                }
              } else {
                reject('Document null');
              }
            });
          }
          /**
           *
           * @param doc Documento
           * @param fieldDecode Nome del campo da cui parte la decodifica
           */

        }, {
          key: "decode",
          value: function decode(doc, fieldDecode) {
            var _this49 = this;

            var useCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var newDecodeField = arguments.length > 3 ? arguments[3] : undefined;
            return new Promise(function (resolve, reject) {
              //Step 1: field Decode esiste in doc
              //Step 2: field Decode è in una relazione
              var definition;
              var queryServer = true;
              var result = false;
              var goToDecode = false;

              if (doc && fieldDecode) {
                //Chiedo la definizione del campo, e controlla che
                //n
                definition = doc.getTypeReflectorByFieldName(fieldDecode); //Definizione presente

                if (definition) {
                  if (definition.isForeignKey) {
                    //  {relFieldDoc}
                    //Decodifica se il campo  contiene un valore
                    goToDecode = !doc.propertyIsEmpty(fieldDecode); //Il campo da decodificare contiene un valore

                    if (goToDecode) {
                      //Step 3: Cercare nella cache 
                      //Se non lo trovo nella cache devo richiederlo al server
                      if (useCache) {
                        //Cerco nella cache se trovo la decodifica
                        result = _this49._decodeInCache(doc, definition, newDecodeField); //Se non trovo in cache devo eseguire la query al server

                        queryServer = !result;
                      } //Chiedo al server


                      if (queryServer) {
                        _this49._decodeWithServer(doc, definition, newDecodeField).then(function () {
                          resolve();
                        })["catch"](function (errMessage) {
                          reject(errMessage);
                        });
                      } else {
                        //Ho usato la cache
                        resolve();
                      }
                    } else {
                      //Il campo non contiene valori e quini non lo decodifico
                      resolve();
                    }
                  } else {
                    reject('Field ' + fieldDecode + ' is not a foreingKey');
                  }
                } else {
                  reject('Field ' + fieldDecode + ' unknown in structure');
                }
              } else {
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

        }, {
          key: "_decodeWithServer",
          value: function _decodeWithServer(doc, definition, newDecodeField) {
            var _this50 = this;

            return new Promise(function (resolve, reject) {
              var docFilter = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](definition.relFieldDoc, true); //Valorizzo le proprietà del documento come filtro di caricamento

              docFilter[definition.relFieldName] = doc[definition.fieldName];

              _this50.requestNew(docFilter).then(function (serverElement) {
                //In teoria dovrei aver ricevuto qualcosa dal server
                if (serverElement.length !== 0) {
                  //Step 1: Inserirlo in cache
                  _this50.objCache.addTo(serverElement[0]); //Step 2: Valorizzare le proprietà


                  _this50._setNewDecodeField(doc, serverElement[0], newDecodeField);
                }

                resolve();
              })["catch"](function (errMessage) {
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

        }, {
          key: "_decodeInCache",
          value: function _decodeInCache(doc, definition, newDecodeField) {
            var elementList;
            var result = false;
            var findElement;
            var nameField;

            if (doc && definition) {
              if (this.objCache) {
                elementList = this.objCache.findByClassName(definition.relFieldDoc); //Questa è la lista degli elementi della stessa tipologia del 
                //documento di riferimento che contiene le decodifiche

                if (elementList) {
                  nameField = definition.relFieldName;

                  if (elementList.list) {
                    //Cerco nella lista della cache il valore presente nel documento e impostato come nameField nel documento correlato
                    findElement = elementList.findElementByFieldName(nameField, doc[definition.fieldName]); //Questo e' il documento di Decodifica
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

        }, {
          key: "_setNewDecodeField",
          value: function _setNewDecodeField(doc, docRel, useFields) {
            var objDescriptor;
            var result = false;
            var nameDescribe = '';
            var nameNewProperty = '';

            if (doc && docRel) {
              if (!useFields || useFields.length == 0) {
                //doc è il documento a cui aggiungere proprietà
                //in questo caso ne aggiungo 1 sola, che è il describeRowField del docRel
                objDescriptor = docRel.getDescriptor();

                if (objDescriptor && objDescriptor.describeField && objDescriptor.describeField.length !== 0) {
                  nameDescribe = objDescriptor.describeField;
                  nameNewProperty = "_" + objDescriptor.describeField + "_" + objDescriptor.className; //Creo la nuova proprietà con il valore

                  doc[nameNewProperty] = docRel[nameDescribe];
                  result = true;
                }
              } else {
                //Nell'array useFields ho i nomi dei campi che voglio come nuovi campi di decodifica
                objDescriptor = docRel.getDescriptor();

                for (var index = 0; index < useFields.length; index++) {
                  var elFieldDecode = useFields[index];
                  nameDescribe = elFieldDecode;
                  nameNewProperty = "_" + elFieldDecode + "_" + objDescriptor.className; //Creo la nuova proprietà con il valore

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

        }, {
          key: "loadCollection",
          value: function loadCollection(document, collectionName, params) {
            var _this51 = this;

            return new Promise(function (resolve, reject) {
              var prosegui = true;
              var objDescriptor;
              var message = '';
              var defCollection;
              var namePrimaryKey = '';

              if (!document) {
                message = 'Documento null';
                prosegui = false;
                reject(message);
              } else if (!collectionName || collectionName.length == 0) {
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
              } //Controllo correttezza configurazione collection


              if (prosegui) {
                defCollection = objDescriptor.getByCollectionName(collectionName);

                if (!defCollection) {
                  prosegui = false;
                  message = 'Collection ' + collectionName + 'not found';
                  reject(message);
                } else if (!defCollection.relFieldDoc || defCollection.relFieldDoc.length == 0) {
                  prosegui = false;
                  message = 'Document in collection ' + collectionName + ' not defined';
                  reject(message);
                } else if (!defCollection.relFieldName || defCollection.relFieldName.length == 0) {
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
              } //Preparo il documento di filtro per la chiamata


              if (prosegui) {
                var filterDocument = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](defCollection.relFieldDoc, true);
                filterDocument[defCollection.relFieldName] = document[namePrimaryKey];

                _this51.requestNew(filterDocument, params).then(function (collReceived) {
                  //Devo eliminare i dati precedenti della collection del documento
                  //Svuoto la collection attuale
                  document[defCollection.fieldName] = [];
                  document[defCollection.fieldName] = collReceived;
                  resolve(document);
                })["catch"](function (error) {
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

        }, {
          key: "loadCollectionMulti",
          value: function loadCollectionMulti(collection, collectionName, params) {
            var _this52 = this;

            return new Promise(function (resolve, reject) {
              var executePromise = [];

              if (collection && collection.length !== 0) {
                for (var index = 0; index < collection.length; index++) {
                  var elDocument = collection[index];

                  var exPromise = _this52.loadCollection(elDocument, collectionName, params);

                  executePromise.push(exPromise);
                } //Esecuzione di tutte le Promise se presenti


                if (executePromise.length !== 0) {
                  //Eseguo tutte le Promise
                  Promise.all(executePromise).then(function () {
                    //Ritorno il tutto decodificato
                    resolve(collection);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  //Non ho nulla da decodificare e va bene cosi
                  resolve(collection);
                }
              } else {
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

        }, {
          key: "requestNew",
          value: function requestNew(filterDocument, params) {
            var _this53 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = _this53.myConfig.getHttpHeaders();

              var objDescriptor;
              var childLevel = -1;
              var orderBy = '';
              var nElem = 0;
              var requestAndDecode = false;
              var foreignFields;

              if (!filterDocument) {
                reject('Documento filtro non presente');
              } else {
                //Recupero il descrittore della classe
                objDescriptor = filterDocument.getDescriptor();

                if (!objDescriptor) {
                  reject('Descrittore Documento filtro non presente');
                } else if (objDescriptor.doRemote == false) {
                  //Non è gestito esternamente
                  reject('Documento non gestito in remoto');
                } else {
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
                  } // In Testata c'e' sempre l'AppId
                  //myHeaders = myHeaders.set('appid',this.myConfig.appId);


                  if (childLevel != -1) {
                    myHeaders = myHeaders.append('child-level', childLevel + '');
                  }

                  if (orderBy && orderBy.length !== 0) {
                    myHeaders = myHeaders.append('order-by', orderBy);
                  } //Preparare i parametri con i filtri arrivati sul documento


                  var myParams = _this53._getHttpParamsFromDoc(filterDocument);

                  if (nElem && nElem > 0) {
                    myParams = myParams.append('$top', nElem + '');
                  }

                  var myUrl = _this53.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

                  if (!myParams) {
                    reject('Request Parametri insufficienti');
                  } else {
                    _this53.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fullData) {
                      return fullData[objDescriptor.classWebApiName];
                    })).subscribe(function (resultData) {
                      var listElement = [];

                      if (resultData) {
                        resultData.forEach(function (elData) {
                          var newClass = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objDescriptor.className);
                          newClass.setJSONProperty(elData);
                          listElement.push(newClass);
                        });
                      } //Se non devo decodificare posso fare qui il resolve


                      if (!requestAndDecode) {
                        resolve(listElement);
                      } else if (listElement.length !== 0) {
                        _this53.decodeCollection(listElement, foreignFields).then(function () {
                          resolve(listElement);
                        })["catch"](function (errMessage) {
                          reject(errMessage);
                        });
                      } else {
                        resolve(listElement);
                      }
                    }, function (error) {
                      reject(error);
                    });
                  }
                }
              }
            });
          }
        }, {
          key: "decodeCollection",
          value: function decodeCollection(collection, foreignFields) {
            var _this54 = this;

            //Devo decodificare l'intera collection di dati
            //Versione 1: foreignField non presente
            //        Decodifica di tutte le foreign key presenti con il describeRowField default
            //Versione 2: foreignField presente 
            //        Decodifica delle solo foreign key indicate controllando all'interno se ci sono campi di decodifica richiesti
            return new Promise(function (resolve, reject) {
              var executePromise = []; //Dati presenti in collection

              if (collection && collection.length !== 0) {
                //Versione 2
                if (foreignFields && foreignFields.length !== 0) {
                  for (var index = 0; index < collection.length; index++) {
                    var doc = collection[index]; //Ciclo i ForeignFields

                    for (var iField = 0; iField < foreignFields.length; iField++) {
                      var elForeign = foreignFields[iField];

                      var exPromise = _this54.decode(doc, elForeign.nameField, true, elForeign.describeFields); //Aggiunta all'Array


                      executePromise.push(exPromise);
                    }
                  }
                } else {
                  //Versione 1
                  //Decodifica di tutte le foreign key presenti con il describeRowField default
                  //Utilizzo il decodeAll
                  for (var _index3 = 0; _index3 < collection.length; _index3++) {
                    var _doc = collection[_index3]; //Creo la Promise di decodifica

                    var _exPromise = _this54.decodeAll(_doc); //Aggiunta all'Array


                    executePromise.push(_exPromise);
                  }
                } //Esecuzione di tutte le Promise se presenti


                if (executePromise.length !== 0) {
                  //Eseguo tutte le Promise
                  Promise.all(executePromise).then(function () {
                    //Ritorno il tutto decodificato
                    resolve(collection);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  //Non ho nulla da decodificare e va bene cosi
                  resolve(collection);
                }
              } else {
                //Non ci sono dati ritorno la stessa collection vuota
                resolve(collection);
              }
            });
          }
          /**
           * Prepara i parametri per la chiamata controllando i parametri presenti sul documento
           * @param document Documento con i parametri di filtro
           */

        }, {
          key: "_getHttpParamsFromDoc",
          value: function _getHttpParamsFromDoc(document) {
            var myParams;
            var arProperty = Object.keys(document); //Prendo tutte le proprietà

            var objDescriptor = document.getDescriptor(); //Descrittore dell'oggetto
            // CIclo le proprieta dell'oggetto filter

            objDescriptor.fields.forEach(function (element) {
              var nameProperty = element.fieldName;
              var strValue = '';
              var tipo = document.getPropertyType(nameProperty);
              var operatoreSpecial; //Condizione speciale sulla proprietà
              //Se non inizia con _ è una proprieta da includere

              if (!nameProperty.startsWith('_')) {
                var filterCondition; //Recupero della condizione di filtro speciale

                filterCondition = document.getFilterConditionByFieldName(nameProperty); //Recupero la condizione speciale (potrebbe non esserci)

                operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty); //La proprietà non contiene un valore

                if (document[nameProperty] == null || document[nameProperty] == undefined) {
                  //C'e' una condizione di filtro speciale
                  if (filterCondition) {
                    //Gli elementi contenuti vanno in OR e separati dal punto e virgola
                    if (filterCondition.listOrValue && filterCondition.listOrValue.length != 0) {
                      //Ci sono valori da mettere in OR
                      //Devo inserirli separati da ;
                      for (var index = 0; index < filterCondition.listOrValue.length; index++) {
                        var valoreProperty = filterCondition.listOrValue[index];

                        if (strValue && strValue.length != 0) {
                          strValue += ';';
                        }

                        strValue += document.formatValue(tipo, valoreProperty);
                      } //Si inseriscono con l'operatore uguaglianza


                      operatoreSpecial = _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["OperatorCondition"].uguale;
                    }
                  }
                } else {
                  //Converto il valore della proprieta
                  strValue = document.formatValue(tipo, document[nameProperty]); //Recupero la condizione speciale (potrebbe non esserci)

                  operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty);
                } //Posso aggiungerle ai parametri


                if (strValue.length !== 0) {
                  //Tutti i parametri vengono aggiunti per uguaglianza o controllando
                  //se presenti con una condizione diversa nel filterCondition
                  //Viene sempre ritornato l'operatore da impostare
                  strValue = operatoreSpecial + strValue;

                  if (myParams == undefined) {
                    myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set(nameProperty, strValue);
                  } else {
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

        }, {
          key: "cloneObject",
          value: function cloneObject(document) {
            var objDescriptor;
            var cloneObj;

            if (document) {
              objDescriptor = document.getDescriptor();
              cloneObj = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objDescriptor.className, true);

              for (var attribut in document) {
                if (typeof document[attribut] === "object") {//cloneObj[attribut] = this.cloneObject(document[attribut]);
                } else {
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

        }, {
          key: "getRelDoc",
          value: function getRelDoc(docStart, seqField) {
            var _this55 = this;

            var childLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
            var docRepository = arguments.length > 3 ? arguments[3] : undefined;
            var indexSeq = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
            return new Promise(function (resolve, reject) {
              var nameField = '';
              var objFieldType;

              if (docStart) {
                if (seqField && seqField.length !== 0) {
                  if (indexSeq == -1) {
                    //Inizio il giro impostando posizione 0
                    indexSeq = 0;
                  }
                }

                if (seqField && seqField.length !== 0) {
                  nameField = seqField[indexSeq]; //Con il nome del campo, ottengo la definizione del campo

                  objFieldType = docStart.getTypeReflectorByFieldName(nameField); //Il campo esiste e contiene qualcosa

                  if (objFieldType && docStart.propertyIsEmpty(nameField) == false) {
                    //E' un campo in foreing Key
                    if (objFieldType.isForeignKey) {
                      //Impostare il documento di filtro
                      var filter = new _models_structure_model__WEBPACK_IMPORTED_MODULE_2__["DynamicClass"](objFieldType.relFieldDoc, true);
                      var idDocFilter = filter;
                      idDocFilter.setPrimaryKey(docStart[nameField]); //creo i filtri per il child level

                      var params = new _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["RequestParams"]();

                      if (seqField.length == indexSeq + 1) {
                        params.child_level = childLevel;
                      } else {
                        params.child_level = 1;
                      }

                      _this55.requestNew(idDocFilter, params).then(function (arElement) {
                        if (arElement && arElement.length !== 0) {
                          var element = arElement[0]; //Ho ancora relazioni da decodificare

                          if (indexSeq + 1 < seqField.length) {
                            //Incremento l'indice sequenza
                            indexSeq++; //Eseguo un nuovo relDoc

                            return _this55.getRelDoc(element, seqField, childLevel, docRepository, indexSeq);
                          } else {
                            //Il giro è finito
                            //Elemento presente e vuole che venga aggiunto al documento chiamante come relDoc nel Repository
                            if (element && docRepository) {
                              //Aggiungo al repository
                              docRepository.addToRepositoryRelDoc(element, seqField);
                            }

                            return resolve(element);
                          }
                        } else {
                          console.log('Document rel not found');
                          return resolve(null);
                        }
                      })["catch"](function (error) {
                        return reject(error);
                      });
                    } else {
                      console.log('Foreign Key not found');
                      return resolve(null);
                    }
                  } else {
                    console.log('Foreign Key not found');
                    return resolve(null);
                  }
                } else {
                  reject('Sequence Field Link empty');
                }
              } else {
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

        }, {
          key: "getRelDocCollection",
          value: function getRelDocCollection(collection, seqField) {
            var _this56 = this;

            return new Promise(function (resolve, reject) {
              var executePromise = [];

              if (collection) {
                for (var index = 0; index < collection.length; index++) {
                  var elDoc = collection[index];

                  var elPromise = _this56.getRelDoc(elDoc, seqField, 1, elDoc);

                  executePromise.push(elPromise);
                }

                if (executePromise.length != 0) {
                  Promise.all(executePromise).then(function () {
                    resolve();
                  })["catch"](function (error) {
                    reject(error);
                  });
                }
              }
            });
          } // ****************************************************************
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

        }, {
          key: "requestForFunction",
          value: function requestForFunction(documentCall, method, jsonBodyOrDoc, postParams) {
            var _this57 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = _this57.myConfig.getHttpHeaders();

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
              var myUrl = '';
              var myJsonBody = '';
              var postBasicType = false;
              var objDescriptor;

              if (!_this57.myConfig) {
                reject('Configuration non presente');
              } else if (!documentCall) {
                reject('Documento non presente');
              } else if (method.length == 0) {
                reject('Metodo non presente');
              } else {
                //Recupero il descrittore della classe
                objDescriptor = documentCall.getDescriptor();

                if (!objDescriptor) {
                  reject('Descrittore Documento non presente');
                } else if (objDescriptor.doRemote == false) {
                  //Non è gestito esternamente
                  reject('Documento non gestito in remoto');
                } else {
                  //Creo URL di chiamata
                  myUrl = _this57.myConfig.urlBase + '/' + objDescriptor.classWebApiName; //Sistemo l'header

                  myHeaders = myHeaders.append('X-HTTP-Method-Override', method); //Controllo dei parametri post

                  if (postParams) {
                    //Controllo come sono i parametri di post
                    postBasicType = _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"].getBasicTypeFrom(postParams);

                    if (postBasicType) {
                      //Essendo tutti parametri basici li sistemo come parametri
                      //Se è un Array
                      if (Array.isArray(postParams)) {
                        if (postParams.length != 0) {
                          for (var index = 0; index < postParams.length; index++) {
                            var elParam = postParams[index];
                            myParams = myParams.append(elParam.key, elParam.value);
                          }
                        }
                      } else {
                        //Oggetto semplice
                        myParams = myParams.append(postParams.key, postParams.value);
                      }
                    } else {
                      //Costruire un oggetto da sistemare nel body
                      jsonBodyOrDoc = _models_requestParams_model__WEBPACK_IMPORTED_MODULE_1__["PostParams"].getJsonFrom(postParams);
                    }
                  }

                  if (jsonBodyOrDoc) {
                    if (typeof jsonBodyOrDoc == "string") {
                      myJsonBody = jsonBodyOrDoc;
                    } else if (typeof jsonBodyOrDoc == "object") {
                      //Questi sono i parametri per l'esportazione
                      var paramExport = new _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["ParamsExport"]();
                      paramExport.clearDOProperty = true;
                      paramExport.clearPKProperty = false;
                      paramExport.clearPrivateProperty = true;
                      paramExport.onlyPropertyModified = true;
                      paramExport.onlyDocModified = true;
                      paramExport.numLivelli = 999;
                      myJsonBody = jsonBodyOrDoc.exportToJSON(paramExport);
                    }
                  } //Effettuo la chiamata POST


                  _this57.apiService.httpPost(myUrl, myHeaders, myParams, jsonBodyOrDoc).subscribe(function (response) {
                    resolve(response);
                  }, function (error) {
                    reject(error);
                  });
                }
              }
            });
          } // **********************************************
          // *          REQUEST FOR UPDATE                *
          // **********************************************

          /**
           * Richiesta effettuata al server per aggiornare un documento
           * @param document Documento da aggiornare
           * @param onlyPropModified Invia solo le proprietà modificate
           */

        }, {
          key: "requestForUpdate",
          value: function requestForUpdate(document) {
            var _this58 = this;

            var onlyPropModified = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var onlyDocModified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            //Si esegue una PUT con il parametro ID e il body i valori da modificare
            return new Promise(function (resolve, reject) {
              var myHeaders = _this58.myConfig.getHttpHeaders();

              var objDescriptor;
              var fieldNamePK = '';
              var fieldValuePK = '';
              var jsonBody = '';
              var myParams;
              var myUrl = '';

              if (!document) {
                reject('Document null');
              } else {
                //Recupero il descrittore della classe
                objDescriptor = document.getDescriptor();

                if (!objDescriptor) {
                  reject('Descrittore Documento filtro non presente');
                } else if (objDescriptor.doRemote == false) {
                  //Non è gestito esternamente
                  reject('Documento non gestito in remoto');
                } else {
                  //Recupero nome e valore della primary Key
                  fieldNamePK = document.getPrimaryKey('name');
                  fieldValuePK = document.getPrimaryKey('value'); //Vuole che aggiorni le proprietà modificate ma non ne ho
                  //Che facciamo dico che è andata a buon fine

                  if (onlyPropModified && document.isModified() == false) {} else {
                    //Preparo il body
                    //Questi sono i parametri per l'esportazione
                    var paramExport = new _models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["ParamsExport"]();
                    paramExport.clearDOProperty = true;
                    paramExport.clearPKProperty = false;
                    paramExport.clearPrivateProperty = true;
                    paramExport.onlyPropertyModified = onlyPropModified;
                    paramExport.onlyDocModified = onlyDocModified;
                    jsonBody = document.exportToJSON(paramExport);
                    myUrl = _this58.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

                    _this58.apiService.httpPut(myUrl, myHeaders, myParams, jsonBody).subscribe(function () {
                      resolve();
                    }, function (error) {
                      reject(error);
                    });
                  }
                }
              }
            });
          }
        }]);

        return DocstructureService;
      }();

      DocstructureService.ɵfac = function DocstructureService_Factory(t) {
        return new (t || DocstructureService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]));
      };

      DocstructureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: DocstructureService,
        factory: DocstructureService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Fdj0":
    /*!*******************************************************!*\
      !*** ./src/app/services/custom-encription.service.ts ***!
      \*******************************************************/

    /*! exports provided: CustomEncriptionService */

    /***/
    function Fdj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomEncriptionService", function () {
        return CustomEncriptionService;
      });
      /* harmony import */


      var _models_log_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/log.model */
      "Ag5x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomEncriptionService = /*#__PURE__*/function () {
        function CustomEncriptionService() {
          _classCallCheck(this, CustomEncriptionService);

          this.privateKey = '5468765198654984964198';
          this.table = [];

          this._initTable();
        }

        _createClass(CustomEncriptionService, [{
          key: "_initTable",
          value: function _initTable() {
            this.table = [['D', 'd', '8', 'Y', 'R', 'g', 'z', '9', 'B', 'A'], ['G', 'p', 'B', 'y', 'f', 'M', 'Z', 'A', 'Y', 'a'], ['b', 'P', '5', '0', 'N', 'r', '8', 'a', 'C', 'G'], ['a', 'r', '3', 'F', '1', '2', 'n', 'X', '6', 'R'], ['C', 'N', 'A', 'l', 'g', '6', 'B', 'Y', '5', '1'], ['h', 'A', '0', 't', '2', '7', 'e', '1', 'J', '6'], ['H', 'O', 'R', 'T', '3', 'A', 'L', '6', 'h', '7'], ['Q', 'o', 'l', 'w', 'B', 'c', 'R', '4', 'q', '2'], ['j', 'I', 'J', '6', 'c', '1', '4', '2', 'D', '5'], ['1', '2', 'I', '5', '4', 'B', 'c', 'W', 'w', 'b']];
          }
        }, {
          key: "_getUTCTimestamp",
          value: function _getUTCTimestamp() {
            var utc;
            var now = new Date(); // utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds())

            utc = now.getTime();
            return utc;
          }
        }, {
          key: "_encrypt",
          value: function _encrypt(str) {
            var encryptedStr = '';
            var keyPointer = 0;

            for (var i = 0; i < str.length; i++) {
              //recupero il carattere (numerico) da crittografare
              var initialValue = str[i]; //recupero il carattere della chiave da usare per la codifica

              var keyValue = this.privateKey[keyPointer]; //recupero dalla matrice il valore codificato

              var finalValue = this.table[keyValue][initialValue]; //aggiungo il valore trovato alla stringa finale codificata

              encryptedStr += finalValue; //avanzo di una posizione con il puntatore alla chiave

              keyPointer++; //se il puntatore alla chiave è arrivato alla fine, torno all'inizio

              if (keyPointer == this.privateKey.length) {
                keyPointer = 0;
              }
            }

            return encryptedStr;
          }
        }, {
          key: "_decrypt",
          value: function _decrypt(encryptedStr) {
            var _this59 = this;

            var decryptedStr = '';
            var keyPointer = 0;

            var _loop = function _loop(i) {
              //recupero il carattere giusto della chiave
              var keyValue = _this59.privateKey[keyPointer];
              var encryptedChar = encryptedStr[i]; //con il carattere della chiave, recupero la riga:

              var myRow = _this59.table[keyValue]; //nella riga, l'indice del carattere crittografato è il carattere non crittografato

              var decryptedChar = myRow.findIndex(function (value) {
                return value == encryptedChar;
              }); //aggiungo il carattere trovato alla mia stringa finale 

              decryptedStr += decryptedChar; //avanzo di una posizione con il puntatore alla chiave

              keyPointer++; //se il puntatore alla chiave è arrivato alla fine, torno all'inizio

              if (keyPointer == _this59.privateKey.length) {
                keyPointer = 0;
              }
            };

            for (var i = 0; i < encryptedStr.length; i++) {
              _loop(i);
            }

            return decryptedStr;
          }
        }, {
          key: "_getSignatureToEncrypt",
          value: function _getSignatureToEncrypt() {
            var str = '';

            var currentTimestamp = this._getUTCTimestamp();

            var time1 = currentTimestamp;
            var time2 = currentTimestamp * 2;
            var time3 = currentTimestamp * 3;
            str = str + time1 + time2 + time3;
            return str;
          } // private _convertToB64(stringToConvert: string){
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

        }, {
          key: "encrypt",
          value: function encrypt(str) {
            return this._encrypt(str);
          }
          /**
           * decrittografa la stringa guardando chiave e tabella
           * @param str stringa da decrittografare
           */

        }, {
          key: "decrypt",
          value: function decrypt(str) {
            return this._decrypt(str);
          }
          /**
           * restituisce una firma secondo le specifiche. Encodata in B64
           */

        }, {
          key: "getB64EncryptedSignature",
          value: function getB64EncryptedSignature() {
            var signature = this._getSignatureToEncrypt();

            signature = this.encrypt(signature);

            _models_log_model__WEBPACK_IMPORTED_MODULE_0__["LogApp"].consoleLog('Signature: ' + signature); //@ts-ignore


            signature = window.btoa(signature);

            _models_log_model__WEBPACK_IMPORTED_MODULE_0__["LogApp"].consoleLog('Signature Base64: ' + signature);

            return signature;
          }
        }]);

        return CustomEncriptionService;
      }();

      CustomEncriptionService.ɵfac = function CustomEncriptionService_Factory(t) {
        return new (t || CustomEncriptionService)();
      };

      CustomEncriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomEncriptionService,
        factory: CustomEncriptionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "HPlZ":
    /*!**************************************************!*\
      !*** ./src/app/services/categoriaeta.service.ts ***!
      \**************************************************/

    /*! exports provided: CategoriaetaService */

    /***/
    function HPlZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaetaService", function () {
        return CategoriaetaService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/categoriaeta.model */
      "wG3K");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CategoriaetaService = /*#__PURE__*/function () {
        function CategoriaetaService(apiService) {
          _classCallCheck(this, CategoriaetaService);

          this.apiService = apiService;
          this._listCategorieEta = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(CategoriaetaService, [{
          key: "listCategorieEta",
          get: function get() {
            return this._listCategorieEta.asObservable();
          }
          /**
          * Ritorna la lista non in modalità Observable
          */

        }, {
          key: "actualListCategorieEta",
          get: function get() {
            return this._listCategorieEta.getValue();
          }
          /**
           * Richiede al server l'elenco delle Categorie Eta
           * @param config Parametri configurazione chiamata
           */

        }, {
          key: "request",
          value: function request(config) {
            var _this60 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'CATEGORIEETA'; //Nei Parametri imposto il LivelloAutorizzazione
              //TODO: Fatta cosi non mi piace

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('LivelloAutorizzazione', '0');
              var myUrl = config.urlBase + '/' + doObject;

              _this60.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.CATEGORIEETA;
              })).subscribe(function (resultData) {
                if (resultData) {
                  resultData.forEach(function (element) {
                    var newCategoria = new _models_categoriaeta_model__WEBPACK_IMPORTED_MODULE_3__["CategoriaEta"]();
                    newCategoria.setJSONProperty(element);

                    _this60.addCategoriaEta(newCategoria);

                    resolve();
                  });
                } else {
                  reject('no data Categoria Eta retrieved');
                }
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Aggiunge un oggetto Categorie Eta all'Observable
           * @param objCategoriaEta Oggetto Categoria Eta da aggiungere
           */

        }, {
          key: "addCategoriaEta",
          value: function addCategoriaEta(objCategoriaEta) {
            var _this61 = this;

            this.listCategorieEta.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collEta) {
              _this61._listCategorieEta.next(collEta.concat(objCategoriaEta));
            });
          }
          /**
           * Cerca e ritorna un record della categoria eta
           * @param idCategoriaEta idCategoria Scelta
           */

        }, {
          key: "findCategoriaEtaById",
          value: function findCategoriaEtaById(idCategoriaEta) {
            var objCategoria;

            var listaCat = this._listCategorieEta.getValue();

            if (idCategoriaEta && listaCat && listaCat.length != 0) {
              objCategoria = listaCat.find(function (elCat) {
                return elCat.ID == idCategoriaEta;
              });
            }

            return objCategoria;
          }
          /**
           * IDCategoria da controllare se l'età risulta valida
           * @param idCategoria idCategoria scelta
           * @param eta Età
           */

        }, {
          key: "isValid",
          value: function isValid(idCategoria, eta) {
            var isValid = false;
            var objCategoria;
            objCategoria = this.findCategoriaEtaById(idCategoria);

            if (objCategoria) {
              isValid = objCategoria.isValid(eta);
            }

            return isValid;
          }
        }]);

        return CategoriaetaService;
      }();

      CategoriaetaService.ɵfac = function CategoriaetaService_Factory(t) {
        return new (t || CategoriaetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]));
      };

      CategoriaetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: CategoriaetaService,
        factory: CategoriaetaService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "I2uL":
    /*!***************************************************!*\
      !*** ./src/app/services/data-chiusura.service.ts ***!
      \***************************************************/

    /*! exports provided: DataChiusuraService */

    /***/
    function I2uL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataChiusuraService", function () {
        return DataChiusuraService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_datachiusura_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/datachiusura.model */
      "eF/0");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataChiusuraService = /*#__PURE__*/function () {
        function DataChiusuraService(docStructureService) {
          _classCallCheck(this, DataChiusuraService);

          this.docStructureService = docStructureService;
          this._listChiusure = [];
          this.listChiusure = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }
        /**
         * aggiuge un elemento alla lista
         * @param element l'elemento da aggiungere
         */


        _createClass(DataChiusuraService, [{
          key: "addElementToList",
          value: function addElementToList(element) {
            this._listChiusure.push(element);

            this.listChiusure.next(this._listChiusure);
          }
          /**
           * Richiede l'elenco completo di tutte le chiusure del gruppo sportivo SOLO PER GLI AFFITTI
           */

        }, {
          key: "request",
          value: function request() {
            var _this62 = this;

            return new Promise(function (resolve, reject) {
              //creo il filtro
              var filterDocument = new _models_datachiusura_model__WEBPACK_IMPORTED_MODULE_4__["DataChiusura"](true); //aggiungo le due condizioni in or (chiusure per affitti e per affitti/corsi)

              filterDocument.addFilterCondition(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["OperatorCondition"].uguale, 'ATTIVITACHIUSURA', [_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["AttivitaChiusura"].affittoStrutture, _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["AttivitaChiusura"].tutte]); //ora faccio la richiesta

              _this62.docStructureService.requestNew(filterDocument).then(function (rawListChiusure) {
                //salvo la lista ed emetto l'observable
                _this62._listChiusure = rawListChiusure;

                _this62.listChiusure.next(_this62._listChiusure); //risolvo la lista
                // console.log('LISTA CHIUSURE');
                // console.log(this._listChiusure);


                resolve(_this62._listChiusure);
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

        }, {
          key: "idFestivita",
          value: function idFestivita(idArea, idLocation, idCampo, data) {
            var aperto = true;

            if (this._listChiusure) {
              for (var index = 0; index < this._listChiusure.length; index++) {
                var elemChiusura = this._listChiusure[index];

                if (elemChiusura.IDAREA == idArea && (elemChiusura.IDLOCATION == undefined || elemChiusura.IDLOCATION == idLocation) && (elemChiusura.IDCAMPO == undefined || elemChiusura.IDCAMPO == idCampo)) {
                  //REGOLA VALIDA DA CONTROLLARE - IN QUESTO GIORNO SIAMO CHIUSI
                  if (elemChiusura.TIPOCHIUSURA == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoChiusura"].rangeDate && elemChiusura.DATADAL <= data && data <= elemChiusura.DATAAL) {
                    //il giorno  ricade in un range di date di chiusura
                    aperto = false;
                    break;
                  } else if (elemChiusura.TIPOCHIUSURA == _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].getFesta(data)) {
                    //nel giorno  c'è una festa in cui il centro chiude
                    aperto = false;
                    break;
                  }
                }
              }
            }

            return !aperto;
          }
        }]);

        return DataChiusuraService;
      }();

      DataChiusuraService.ɵfac = function DataChiusuraService_Factory(t) {
        return new (t || DataChiusuraService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__["DocstructureService"]));
      };

      DataChiusuraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: DataChiusuraService,
        factory: DataChiusuraService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "IAlr":
    /*!********************************************!*\
      !*** ./src/app/services/course.service.ts ***!
      \********************************************/

    /*! exports provided: CourseService */

    /***/
    function IAlr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseService", function () {
        return CourseService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_corso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/corso.model */
      "F/re");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_filtercorsi_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/filtercorsi.model */
      "NWOI");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CourseService = /*#__PURE__*/function () {
        function CourseService(docStructureService, apiService) {
          _classCallCheck(this, CourseService);

          this.docStructureService = docStructureService;
          this.apiService = apiService;
          this._listCorsi = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._selectedCorso = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]());
          this._listCorsiTrainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(CourseService, [{
          key: "listCorsi",
          get: function get() {
            return this._listCorsi.asObservable();
          }
          /**
           * Sono i corsi che il trainer richiede nella pagina Trainer
           */

        }, {
          key: "listCorsiTrainer",
          get: function get() {
            return this._listCorsiTrainer.asObservable();
          }
        }, {
          key: "selectedCorso",
          get: function get() {
            return this._selectedCorso.asObservable();
          }
        }, {
          key: "filterCorsi",
          get: function get() {
            return this.filterCorsi;
          },
          set: function set(value) {
            this._filterCorsi = value;
          }
        }, {
          key: "decodeListSport",
          set: function set(value) {
            this._decodeListSport = value;
          }
        }, {
          key: "decodeListLivelli",
          set: function set(value) {
            this._decodeListLivelli = value;
          }
        }, {
          key: "decodeListEta",
          set: function set(value) {
            this._decodeListEta = value;
          }
          /**
           * Inizializza e ritorna una copia del filtro dei corsi
           * @param idLocation Location da utilizzare
           */

        }, {
          key: "newFilterCorsi",
          value: function newFilterCorsi(idLocation) {
            this._filterCorsi = new _models_filtercorsi_model__WEBPACK_IMPORTED_MODULE_5__["FilterCorsi"](idLocation);
            return this._filterCorsi;
          }
          /**
           * Effettua una chiamata al server per il recupero dei corsi
           * Utilizzare il documento di Filtro per richiedere dati filtrati
           * @param config Parametri di configurazione
           * @param docUser Documento Utente loggato. Se presente i corsi vengono proposti solo quelli validi all'utente
           */

        }, {
          key: "requestById",
          value: function requestById(config, idCorso, numLivelli) {
            var _this63 = this;

            return new Promise(function (resolve, reject) {
              if (!numLivelli) {
                numLivelli = '3';
              }

              var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

              var doObject = 'CORSO';
              myHeaders = myHeaders.set('child-level', numLivelli);
              var myUrl = config.urlBase + '/' + doObject;
              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idCorso); //Effettuo la chiamata

              _this63.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.CORSO;
              })).subscribe(function (resultData) {
                if (resultData[0] && resultData[0] != {}) {
                  var objCorso = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]();
                  objCorso.setJSONProperty(resultData[0]); //Decodifico i campi chiave

                  objCorso.lookup('IDSPORT', _this63._decodeListSport, 'DENOMINAZIONE'); //Decodifico i campi chiave

                  objCorso.lookup('IDCATEGORIEETA', _this63._decodeListEta, 'DESCTOOLTIP'); //Decodifico i campi chiave

                  objCorso.lookup('IDLIVELLOENTRATA', _this63._decodeListLivelli, 'DENOMINAZIONE');
                  resolve(objCorso);
                } else {
                  reject('corso non trovato');
                }
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "newRequestById",
          value: function newRequestById(idCorso) {
            var _this64 = this;

            return new Promise(function (resolve, reject) {
              //preparo il filtro
              var filtroCorso = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"](true);
              filtroCorso.ID = idCorso; //preparo i parametri per decodificare

              var params = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["RequestParams"]();
              params.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_6__["RequestDecode"]();
              params.decode.active = true; //faccio la richiesta

              _this64.docStructureService.requestNew(filtroCorso, params).then(function (listCorsi) {
                var myCorso;

                if (listCorsi && listCorsi.length != 0) {
                  //Prendo il primo corso (in teoria anche l'unico)
                  myCorso = listCorsi[0];
                }

                if (myCorso) {
                  //ora richiedo anche il programma
                  _this64.docStructureService.loadCollection(myCorso, 'CORSOPROGRAMMA').then(function () {
                    resolve(myCorso);
                  })["catch"](function (error) {
                    reject(error);
                  });
                } else {
                  reject('Errore recupero corso');
                }
              })["catch"](function (error) {
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

        }, {
          key: "requestTimeTrainerCourse",
          value: function requestTimeTrainerCourse(idTrainer, timeState) {
            var _this65 = this;

            var myPostParams;
            var arPostParams = [];
            var method = 'getCorsitrainer';
            var docCall = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]();

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
                this.docStructureService.requestForFunction(docCall, method, '', arPostParams).then(function (collData) {
                  var listElement = [];
                  var collDataCorso;

                  if (collData) {
                    if (collData.hasOwnProperty('CORSO')) {
                      collDataCorso = collData['CORSO'];

                      if (collDataCorso.length != 0) {
                        //Creo la lista
                        collDataCorso.forEach(function (elData) {
                          var newElement = new _models_corso_model__WEBPACK_IMPORTED_MODULE_3__["Corso"]();
                          newElement.setJSONProperty(elData);
                          listElement.push(newElement); //Ogni volta riemetto la lista

                          _this65._listCorsiTrainer.next(listElement);
                        }); //Adesso voglio anche decodificare i dati contenuti

                        _this65.docStructureService.decodeCollection(listElement).then(function () {
                          //Riemetto la lista aggiornata
                          _this65._listCorsiTrainer.next(listElement);
                        })["catch"](function (error) {
                          //Anche in errore riemetto la lista
                          _this65._listCorsiTrainer.next(listElement);
                        });
                      } else {
                        //Nessun dato
                        _this65._listCorsiTrainer.next([]);
                      }
                    } else {
                      //Nessun dato
                      _this65._listCorsiTrainer.next([]);
                    }
                  } else {
                    //Nessun dato
                    _this65._listCorsiTrainer.next([]);
                  }
                });
              }
            }
          }
          /**
           * Ritorna un oggetto HttpParams con i parametri impostati
           * @param filter Oggetto co i filtri da applicare e passare come HttpParams
           */

        }, {
          key: "getHttpParamsFilter",
          value: function getHttpParamsFilter(filter) {
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDLOCATION', filter.IDLOCATION);
            var arProperty = Object.keys(filter); //Prendo tutte le proprieta
            // CIclo le proprieta dell'oggetto filter

            arProperty.forEach(function (element) {
              var nameProperty = element; //Se non inizia con _ è una proprieta da includere

              if (!nameProperty.startsWith('_')) {
                //Se c'è un valore
                if (filter[nameProperty]) {
                  var value = filter[nameProperty];
                  /* Per la DATAFINE applico la condizione se è presente*/

                  if (value == 'DATAFINE') {
                    if (filter._CONDITIONDATAFINE) {
                      value = filter._CONDITIONDATAFINE + value;
                    }
                  } //Aggiungo il parametro


                  myParams = myParams.append(nameProperty, value);
                }
              } else if (nameProperty = '_CHECKISCRIZIONEAPERTA') {
                if (filter[nameProperty]) {//devo includere la ricerca 
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

        }, {
          key: "addCorso",
          value: function addCorso(objCorso) {
            var _this66 = this;

            this.listCorsi.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collCorsi) {
              _this66._listCorsi.next(collCorsi.concat(objCorso));
            });
          }
          /**
           * Elimina tutti i corsi presenti
           */

        }, {
          key: "emptyCorsi",
          value: function emptyCorsi() {
            this._listCorsi.next([]);
          }
        }]);

        return CourseService;
      }();

      CourseService.ɵfac = function CourseService_Factory(t) {
        return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]));
      };

      CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: CourseService,
        factory: CourseService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "IGb/":
    /*!**************************************************!*\
      !*** ./src/app/models/corsovalutazione.model.ts ***!
      \**************************************************/

    /*! exports provided: CorsoValutazione */

    /***/
    function IGb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoValutazione", function () {
        return CorsoValutazione;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _corsovalutazionelivello_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./corsovalutazionelivello.model */
      "eRJB");

      var CorsoValutazione = /*#__PURE__*/function (_library_models_iddoc10) {
        _inherits(CorsoValutazione, _library_models_iddoc10);

        var _super10 = _createSuper(CorsoValutazione);

        function CorsoValutazione(onlyInstance) {
          var _this67;

          _classCallCheck(this, CorsoValutazione);

          _this67 = _super10.call(this, onlyInstance);
          _this67.DATAORAVALUTAZIONE = new Date();
          _this67.TESTOVALUTAZIONE = '';
          _this67.CORSOVALUTAZIONELIVELLO = [];
          return _this67;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(CorsoValutazione, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDCORSO', 'TESTOVALUTAZIONE', 'IDUTENTE', 'NOMINATIVO'];
            var arNumber = ['VOTAZIONEFINALE'];
            var arBoolean = ['FLAGBOZZA'];
            var arDate = ['DATAORAVALUTAZIONE'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'CorsoValutazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CORSOVALUTAZIONE';
            objDescriptor.describeField = 'NOMINATIVO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo IDDOcument
            _get(_getPrototypeOf(CorsoValutazione.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data);
            this.setOriginal();
          }
          /**
           * Sistema le collection se presenti
           * @param data JSON Ricevuto
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            this.CORSOVALUTAZIONELIVELLO = [];

            if (data.CORSOVALUTAZIONELIVELLO) {
              this.setCollectionCorsoValutazioneLivello(data.CORSOVALUTAZIONELIVELLO);
            }
          }
          /**
           * Imposta la collection CORSOVALUTAZIONELIVELLO coni dati ricevuti
           * @param arValutazioni JSON Ricevuti
           */

        }, {
          key: "setCollectionCorsoValutazioneLivello",
          value: function setCollectionCorsoValutazioneLivello(arValutazioni) {
            var _this68 = this;

            this.CORSOVALUTAZIONELIVELLO = [];

            if (arValutazioni) {
              arValutazioni.forEach(function (element) {
                // Ricerco se esiste già
                var newValutazione = _this68.getCorsoValutazioneLivelloByID(element.ID); //Non esiste lo creo nuovo


                if (!newValutazione) {
                  newValutazione = new _corsovalutazionelivello_model__WEBPACK_IMPORTED_MODULE_2__["CorsoValutazioneLivello"](); //Imposto i dati

                  newValutazione.setJSONProperty(element); //Aggiungo alla collection

                  _this68.CORSOVALUTAZIONELIVELLO.push(newValutazione);
                } else {
                  //Reimposto i valori
                  newValutazione.setJSONProperty(element);
                }
              });
            }
          }
          /**
           * Ritorna l'elemento di Corso Valutazione Livello che corrisponde con ID
           */

        }, {
          key: "getCorsoValutazioneLivelloByID",
          value: function getCorsoValutazioneLivelloByID(idCorsoValutazioneLivello) {
            // Ricerco se esiste già
            var findRecord = this.CORSOVALUTAZIONELIVELLO.find(function (elvalutazioneLivello) {
              return elvalutazioneLivello.ID == idCorsoValutazioneLivello;
            });
            return findRecord;
          }
        }]);

        return CorsoValutazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "K4nM":
    /*!****************************************************!*\
      !*** ./src/app/library/models/mydatetime.model.ts ***!
      \****************************************************/

    /*! exports provided: MyDateTime, TypePeriod */

    /***/
    function K4nM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyDateTime", function () {
        return MyDateTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypePeriod", function () {
        return TypePeriod;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./descriptor.model */
      "Wz4r");

      var MyDateTime = /*#__PURE__*/function () {
        function MyDateTime() {
          _classCallCheck(this, MyDateTime);
        }

        _createClass(MyDateTime, null, [{
          key: "formatDateISO",
          value: //Formatta una data passata in ISO (Solo la parte data)
          function formatDateISO(data) {
            var intMese = data.getMonth() + 1;
            var intGiorno = data.getDate();
            var mese = intMese > 9 ? intMese + '' : '0' + intMese;
            var giorno = intGiorno > 9 ? intGiorno + '' : '0' + intGiorno;
            var format = [data.getFullYear(), mese, giorno].join('-');
            return format;
          } //Formatta una data passata in ISO (Data e Ora)

        }, {
          key: "formatDateTimeISO",
          value: function formatDateTimeISO(data) {
            var prefixDate = MyDateTime.formatDateISO(data);
            var ore = data.getHours() > 9 ? data.getHours() + '' : '0' + data.getHours();
            var minuti = data.getMinutes() > 9 ? data.getMinutes() + '' : '0' + data.getMinutes();
            var secondi = data.getSeconds() > 9 ? data.getSeconds() + '' : '0' + data.getSeconds();

            var _final2 = prefixDate + ' ' + ore + ':' + minuti + ':' + secondi;

            return _final2;
          } //Formatta un orario passata  (Data e Ora)

        }, {
          key: "formatTime",
          value: function formatTime(data) {
            var withSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var ore = data.getHours() > 9 ? data.getHours() + '' : '0' + data.getHours();
            var minuti = data.getMinutes() > 9 ? data.getMinutes() + '' : '0' + data.getMinutes();
            var secondi = data.getSeconds() > 9 ? data.getSeconds() + '' : '0' + data.getSeconds();

            var _final3 = ore + ':' + minuti;

            if (withSeconds) {
              _final3 = _final3 + ':' + secondi;
            }

            return _final3;
          }
          /**
           *
           * @param data Data
           * @param format Formattazione di moment.js da applicare
           */

        }, {
          key: "formatDate",
          value: function formatDate(data, maskFormat) {
            //https://momentjs.com/docs/#/displaying/
            return moment__WEBPACK_IMPORTED_MODULE_0__(data).format(maskFormat);
          }
          /**
          * Trasforma la stringa in un oggetto di tipo Data
          * @param strInput data / dataOra / Ora in formato stringa
          */

        }, {
          key: "stringToDateObject",
          value: function stringToDateObject(strInput) {
            //1 - Devo capire cos'è
            var strDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
            var strTime = '00:00:00';
            var timeZone = '+01:00';
            var strComplete = '';
            var dataReturn;
            var arElement;
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
              } //Non aggiungere il TimeZone perchè non da errori ma l'uso della proprietà data da problemi


              strComplete = "".concat(strDate, "T").concat(strTime);
              dataReturn = moment__WEBPACK_IMPORTED_MODULE_0__(strComplete).toDate();
              return dataReturn;
            }
          }
          /**
           *
           * @param strDateTime Stringa di data e ora
           * @param arReturn Separa gli elementi in posizione 0 la data e 1 l'ora
           */

        }, {
          key: "splitDateTime",
          value: function splitDateTime(strDateTime) {
            var tipo;
            var strDate = '';
            var strTime = '';
            var strTimeZone = '';
            var arReturn;
            arReturn = [];

            if (strDateTime.length !== 0) {
              if (strDateTime.includes('-') || strDateTime.includes('/')) {
                if (strDateTime.includes(':')) {
                  tipo = _descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime; //Cerchiamo il simbolo T oppure uno spazio

                  strDateTime = strDateTime.replace(' ', 'T');
                  strDateTime = strDateTime.replace('+', 'T');
                  var el = strDateTime.split('T');

                  for (var index = 0; index < el.length; index++) {
                    var element = el[index];

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
                } else {
                  //Solo una data
                  tipo = _descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date;
                  strDate = strDateTime;
                }
              } else if (strDateTime.includes(':')) {
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

        }, {
          key: "changeDateInTime",
          value: function changeDateInTime(nuovaData, applyDataOra) {
            var strDataOra = '';
            var newReturn;

            if (nuovaData && applyDataOra) {
              strDataOra = MyDateTime.formatDateISO(nuovaData);
              var ore = applyDataOra.getHours() > 9 ? applyDataOra.getHours() + '' : '0' + applyDataOra.getHours();
              var minuti = applyDataOra.getMinutes() > 9 ? applyDataOra.getMinutes() + '' : '0' + applyDataOra.getMinutes();
              var secondi = applyDataOra.getSeconds() > 9 ? applyDataOra.getSeconds() + '' : '0' + applyDataOra.getSeconds();
              strDataOra = "".concat(strDataOra, "T").concat(ore, ":").concat(minuti, ":").concat(secondi);
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

        }, {
          key: "dateTimeInside",
          value: function dateTimeInside(startCheck, endCheck, minDateTime, maxDateTime) {
            // CONTROLLO EFFETTUATO RITORNO TRUE SE:
            // A) FINE IN MEZZO SENZA INIZIO            --> end > min && end <= max
            // oppure B) INIZIO IN MEZZO SENZA FINE     --> start >= min && start < max
            // oppure C) FUORI                          --> start <= min && end >= max
            var result = false; //Moment consente di decidere [ uguaglianza o ( esclusione di una data

            if (moment__WEBPACK_IMPORTED_MODULE_0__(endCheck).isBetween(minDateTime, maxDateTime, 'minute', '(]') || moment__WEBPACK_IMPORTED_MODULE_0__(startCheck).isBetween(minDateTime, maxDateTime, 'minute', '[)') || moment__WEBPACK_IMPORTED_MODULE_0__(startCheck).isSameOrBefore(minDateTime, 'minute') && moment__WEBPACK_IMPORTED_MODULE_0__(endCheck).isSameOrAfter(maxDateTime, 'minute')) {
              result = true;
            }

            return result;
          }
          /**
           * Calcola il numero di Ore intercorse tra le due date ore
           * @param startDate Data Ora Iniziale (Inferiore)
           * @param endDate Data Ora Finale (Superiore)
           */

        }, {
          key: "durataOre",
          value: function durataOre(startDate, endDate) {
            var ore = 0;

            if (startDate && endDate) {
              var mStart = moment__WEBPACK_IMPORTED_MODULE_0__(startDate);
              var mEnd = moment__WEBPACK_IMPORTED_MODULE_0__(endDate);
              ore = mEnd.diff(mStart, 'hours', true);
            }

            return ore;
          }
          /**
           * Calcola il numero di Ore intercorse tra le due date ore
           * @param inferiorDate Data Ora Iniziale (Inferiore)
           * @param superiorDate Data Ora Finale (Superiore)
           */

        }, {
          key: "durataAnni",
          value: function durataAnni(inferiorDate, superiorDate) {
            var anni = 0;

            if (inferiorDate && superiorDate) {
              var mStart = moment__WEBPACK_IMPORTED_MODULE_0__(inferiorDate);
              var mEnd = moment__WEBPACK_IMPORTED_MODULE_0__(superiorDate);
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

        }, {
          key: "calcola",
          value: function calcola(dateTime, addOrSub, period) {
            var value;
            var dReturn;

            if (dateTime && period) {
              var mDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateTime); //Oggetto di tipo moment

              if (addOrSub < 0) {
                value = addOrSub * -1;
                mDate.subtract(value, period);
              } else if (addOrSub > 0) {
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

        }, {
          key: "getFesta",
          value: function getFesta(data) {
            var tipoChiusura;
            var meseGiorno = moment__WEBPACK_IMPORTED_MODULE_0__(data).format('MMDD');
            var dataAngelo;
            var maskAngelo = '';
            var dataPasqua;
            var maskPasqua = '';
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

        }, {
          key: "calcolaPasqua",
          value: function calcolaPasqua(anno) {
            var a = 0,
                b = 0,
                c = 0,
                d = 0,
                e = 0,
                m = 0,
                n = 0,
                giorno = 0,
                mese = 0;

            if (anno <= 2099) {
              m = 24;
              n = 5;
            } else if (anno <= 2199) {
              m = 24;
              n = 6;
            } else if (anno <= 2299) {
              m = 25;
              n = 0;
            } else if (anno <= 2399) {
              m = 26;
              n = 1;
            } else if (anno <= 2499) {
              m = 25;
              n = 1;
            }

            a = anno % 19;
            b = anno % 4;
            c = anno % 7;
            d = (19 * a + m) % 30;
            e = (2 * b + 4 * c + 6 * d + n) % 7;

            if (d + e < 10) {
              giorno = d + e + 22;
              mese = 3;
            } else {
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

            var dataReturn = new Date(anno, Math.floor(mese - 1), Math.floor(giorno));
            return dataReturn;
          }
          /**
           * Con la data passata calcola una data di inizio/fine della settimana
           * o del mese in cui myDate è contenuta
           * @param myDate Data da utilizzare
           * @param based Il calcolo è effettuata per la settimana o il mese
           * @param where Si vuole la data di inizio o fine
           */

        }, {
          key: "getStartEndDate",
          value: function getStartEndDate(myDate, based, where) {
            var resultDate;

            if (myDate) {
              if (where == 'start') {
                resultDate = moment__WEBPACK_IMPORTED_MODULE_0__(myDate).startOf(based).toDate();
              } else if (where == 'end') {
                resultDate = moment__WEBPACK_IMPORTED_MODULE_0__(myDate).endOf(based).toDate();
              }
            }

            return resultDate;
          }
          /**
           * Crea una Data senza l'orario
           * @param myDateTime
           */

        }, {
          key: "getOnlyDate",
          value: function getOnlyDate(myDateTime) {
            var dateResult;
            dateResult = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(myDateTime).format('YYYY-MM-DD'));
            return dateResult;
          }
        }]);

        return MyDateTime;
      }();

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
      /***/

    },

    /***/
    "KG3q":
    /*!*******************************************!*\
      !*** ./src/app/services/sport.service.ts ***!
      \*******************************************/

    /*! exports provided: SportService */

    /***/
    function KG3q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SportService", function () {
        return SportService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_sport_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/sport.model */
      "A++g");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SportService = /*#__PURE__*/function () {
        function SportService(apiService) {
          _classCallCheck(this, SportService);

          this.apiService = apiService;
          this._listSport = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._listLocationSport = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._loaded = false;
        } //Lista di tutti gli sport presenti in Gouego


        _createClass(SportService, [{
          key: "listSport",
          get: function get() {
            return this._listSport.asObservable();
          }
          /**
          * Ritorna la lista non in modalità Observable
          */

        }, {
          key: "actualListSport",
          get: function get() {
            return this._listSport.getValue();
          } //Lista degli sport presenti in una location

        }, {
          key: "listLocationSport",
          get: function get() {
            return this._listLocationSport.asObservable();
          }
          /**
           * Richiede al server l'elenco delle Attività
           * @param config Parametri configurazione chiamata
           */

        }, {
          key: "request",
          value: function request(config, withLivelli) {
            var _this69 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'SPORT'; //TODO: Non mi piace molto il modo
              //Nei Parametri imposto il LivelloAutorizzazione

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('LivelloAutorizzazione', '0');
              var myUrl = config.urlBase + '/' + doObject;

              if (withLivelli) {
                //Richiedo di caricare anche i livelli
                myHeaders = myHeaders.append('only-level', '-1');
              }
              /*Non ho ancora caricato dal server*/


              if (!_this69._loaded) {
                _this69.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                  return data.SPORT;
                })).subscribe(function (resultData) {
                  //Arrivati dal server
                  _this69._loaded = true;

                  if (resultData) {
                    for (var index = 0; index < resultData.length; index++) {
                      var element = resultData[index];
                      var newSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
                      newSport.setJSONProperty(element);

                      _this69.add2ListSport(newSport);
                    }

                    resolve(_this69._listSport);
                  } else {
                    reject('No data Attività retrieved');
                  }
                }, function (error) {
                  reject(error);
                });
              } else {//Già caricati dal server
              }
            });
          } //Aggiunge una attivita alla lista globale

        }, {
          key: "add2ListSport",
          value: function add2ListSport(objSport) {
            var _this70 = this;

            this.listSport.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collSport) {
              _this70._listSport.next(collSport.concat(objSport));
            });
          }
          /**
           * Richiede le attività praticate in una location
           * Sottoscriversi all'oggetto listLocationSport per ricevere i risultati
           *
           * @param config Dati configurazione
           * @param idLocation Location
           */

        }, {
          key: "requestLocationSport",
          value: function requestLocationSport(config, idLocation) {
            var _this71 = this;

            return new Promise(function (resolve, reject) {
              // const myHeaders = new HttpHeaders({'Content-type':'text/plain', 
              //                   'X-HTTP-Method-Override':'getSportLocation', 
              //                   'appid':config.appId,
              //                   'child-level': '1'
              //                   });
              var myHeaders = config.getHttpHeaders();
              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('idLocation', idLocation);
              var doObject = 'SPORT';
              myHeaders = myHeaders.append('X-HTTP-Method-Override', 'getSportLocation');
              myHeaders = myHeaders.append('child-level', '1');
              var myUrl = config.urlBase + '/' + doObject; //Svuoto gli attuali

              _this71._listLocationSport.next([]); // Effettuo la chiamata


              return _this71.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.SPORT;
              })).subscribe(function (resultData) {
                resultData.forEach(function (element) {
                  var newSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
                  newSport.setJSONProperty(element);

                  _this71.add2ListLocationSport(newSport);
                });
                resolve(_this71._listLocationSport);
              }, function (error) {
                reject(error);
              });
            });
          } //Aggiunge una attivita alla lista globale

        }, {
          key: "add2ListLocationSport",
          value: function add2ListLocationSport(objSport) {
            var _this72 = this;

            this.listLocationSport.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collSport) {
              _this72._listLocationSport.next(collSport.concat(objSport));
            });
          }
          /**
          * Dato l'id di uno sport, restituisce la stringa dell'icona associata
          * @param idSport l'id dello sport
          */

        }, {
          key: "getIconaSport",
          value: function getIconaSport(idSport) {
            var listSport = this._listSport.getValue();

            var icona = '';
            var docSport;

            if (listSport) {
              //Cerco lo Sport nella collection
              docSport = listSport.find(function (el) {
                return el.ID == idSport;
              }); //Sport trovato applico l'icona

              if (!docSport) {
                //Ne creo uno fasullo
                docSport = new _models_sport_model__WEBPACK_IMPORTED_MODULE_2__["Sport"]();
              } //Ricavo l'icona


              icona = docSport.htmlIconHex;
            }

            return icona;
          }
        }]);

        return SportService;
      }();

      SportService.ɵfac = function SportService_Factory(t) {
        return new (t || SportService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]));
      };

      SportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: SportService,
        factory: SportService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "KGuB":
    /*!*****************************************!*\
      !*** ./src/app/models/account.model.ts ***!
      \*****************************************/

    /*! exports provided: Account */

    /***/
    function KGuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Account", function () {
        return Account;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var Account = /*#__PURE__*/function (_library_models_iddoc11) {
        _inherits(Account, _library_models_iddoc11);

        var _super11 = _createSuper(Account);

        function Account(onlyInstance) {
          _classCallCheck(this, Account);

          return _super11.call(this, onlyInstance);
        }

        _createClass(Account, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Account.prototype), "setJSONProperty", this).call(this, data);
          }
          /**
           * Ritorna il descrittore della Struttura Campi
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDREF', 'COGNOME', 'NOME', 'NOMINATIVO', 'EMAIL', 'WEBLOGIN', 'SHAPASSWORD', 'INPUTPASSWORD', 'MOBILENUMBER', 'IDAREAOPERATIVA', 'IDLOCATION'];
            var arNumber = ['RUOLO', 'MANSIONE'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'Account';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'ACCOUNT';
            objDescriptor.describeField = 'NOMINATIVO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            return objDescriptor;
          }
        }]);

        return Account;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "KwcL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function KwcL(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["jDxf", 43],
        "./pwa-camera-modal-instance.entry.js": ["37vE", 44],
        "./pwa-camera-modal.entry.js": ["cJxf", 45],
        "./pwa-camera.entry.js": ["eGHz", 46],
        "./pwa-toast.entry.js": ["fHjd", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "KwcL";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "L1/s":
    /*!***********************************************!*\
      !*** ./src/app/models/imdb/slotweek.model.ts ***!
      \***********************************************/

    /*! exports provided: SlotWeek */

    /***/
    function L1S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotWeek", function () {
        return SlotWeek;
      });
      /* harmony import */


      var _slotday_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./slotday.model */
      "NyLC");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../valuelist.model */
      "W8X0");

      var SlotWeek = /*#__PURE__*/function () {
        function SlotWeek() {
          _classCallCheck(this, SlotWeek);

          this.SLOTDAYS = [];
          this.SLOTMINUTES = 30;
        }
        /**
         * Creazione dell'array SlotDay con tutte le giornate
         */


        _createClass(SlotWeek, [{
          key: "initDays",
          value: function initDays() {
            var _this73 = this;

            var arGiorni = _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].getArray(_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["Giorni"]);

            this.SLOTDAYS = [];
            arGiorni.forEach(function (element) {
              var daySlot = new _slotday_model__WEBPACK_IMPORTED_MODULE_0__["SlotDay"](); //Imposto il giorno della settimana

              daySlot.WEEKDAY = element.value;

              _this73.SLOTDAYS.push(daySlot);
            });
          }
          /**
           * Ritorna uno slotday presente nell'array
           * @param weekDayRequest WeekDay richiesto
           */

        }, {
          key: "getSlotDay",
          value: function getSlotDay(weekDayRequest) {
            return this.SLOTDAYS.find(function (element) {
              return element.WEEKDAY == weekDayRequest;
            });
          }
          /**
           * Ritorna una copia di uno SlotDay
           *
           * @param dataGiorno Data richiesta
           * @param changeTimeDate Se impostata a TRUE viene cambiata la data presente negli slottime impostando la data Giorno
           */

        }, {
          key: "getCopySlotDay",
          value: function getCopySlotDay(dataGiorno, changeTimeDate) {
            var weekDay = dataGiorno.getDay();
            var myCopySlot;
            var mySlot;
            mySlot = this.SLOTDAYS.find(function (element) {
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

        }, {
          key: "createSlotTimeDays",
          value: function createSlotTimeDays() {
            var _this74 = this;

            //Ciclo sui giorni presenti
            this.SLOTDAYS.forEach(function (element) {
              element.createSlotTime(_this74.SLOTMINUTES);
            });
          }
        }]);

        return SlotWeek;
      }();
      /***/

    },

    /***/
    "LKAN":
    /*!*************************************************!*\
      !*** ./src/app/services/occupazioni.service.ts ***!
      \*************************************************/

    /*! exports provided: OccupazioniService */

    /***/
    function LKAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OccupazioniService", function () {
        return OccupazioniService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/occupazionecampi.model */
      "0ALl");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/prenotazionepianificazione.model */
      "FAI+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OccupazioniService = /*#__PURE__*/function () {
        function OccupazioniService(docStructureService) {
          _classCallCheck(this, OccupazioniService);

          this.docStructureService = docStructureService;
          this._listOccupazioni = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(OccupazioniService, [{
          key: "listOccupazioni",
          get: function get() {
            return this._listOccupazioni.asObservable();
          }
          /**
           * Richiede la lista di occupazione campi
           * Senza filtro precedente, imposto la data Inizio da oggi
           * @param filterDocument
           * @param decodeAll
           */

        }, {
          key: "request",
          value: function request(idArea, idLocation, params) {
            var _this75 = this;

            var top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var fromTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var adesso = new Date();
            return new Promise(function (resolve, reject) {
              var filterTipo = []; //Quando voglio mettere in OR dei valori su un campo, creo un array 
              //e lo passo alla funzione addFilterCondition

              filterTipo.push(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settoreCorso);
              filterTipo.push(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settorePrenotazione);
              var filterDocument = new _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__["OccupazioneCampi"](true);
              filterDocument.DATAINIZIO = adesso; // filterDocument.ORAINIZIO = adesso;

              filterDocument.IDAREA = idArea; //Aggiungo la condizione speciale per TIPO con dei valori in OR

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

              _this75.docStructureService.requestNew(filterDocument, params).then(function (genericListElements) {
                var listElements = genericListElements;
                listElements.sort(function (a, b) {
                  if (a.ORAINIZIO > b.ORAINIZIO) {
                    return 1;
                  } else if (a.ORAINIZIO < b.ORAINIZIO) {
                    return -1;
                  } else {
                    return 0;
                  }
                }); //gli elementi sono ordinati, ma devon controllare che ne siano arrivati davvero il numero giusto (INDE FA CAGARE!!!)

                if (top && listElements.length > top) {
                  //devo tagliare 
                  listElements.splice(top);
                } //Riemetto Observable


                _this75._listOccupazioni.next(listElements); //Chiudo la promise


                resolve(listElements);
              })["catch"](function (error) {
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

        }, {
          key: "requestByFilter",
          value: function requestByFilter(filter, params) {
            var _this76 = this;

            return new Promise(function (resolve, reject) {
              var myFilter;
              var myParams;

              if (filter) {
                myFilter = filter;

                if (params) {
                  myParams = params;
                } else {
                  myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"]();
                  myParams.decode.active = true;
                } //abbiamo tutto, possiamo fare la richiesta


                _this76.docStructureService.requestNew(myFilter, myParams).then(function (genericListElements) {
                  var listElements = genericListElements;
                  listElements.sort(function (a, b) {
                    if (a.ORAINIZIO > b.ORAINIZIO) {
                      return 1;
                    } else if (a.ORAINIZIO < b.ORAINIZIO) {
                      return -1;
                    } else {
                      return 0;
                    }
                  });
                  var arPromises = [];
                  listElements.forEach(function (elOccupazione) {
                    arPromises.push(_this76.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 1, elOccupazione));
                  });
                  Promise.all(arPromises).then(function () {
                    resolve(listElements);
                  })["catch"](function (error) {
                    reject(error);
                  });
                })["catch"](function (error) {
                  reject(error);
                });
              } else {
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

        }, {
          key: "requestById",
          value: function requestById(idOccupazione) {
            var _this77 = this;

            var requestRelatedReservation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new Promise(function (resolve, reject) {
              //filtro e parametri
              var myFilter = new _models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__["OccupazioneCampi"](true);
              var myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"](); //controllo di avere un id

              if (idOccupazione && idOccupazione.length > 0) {
                //preparo i parametri
                myFilter.ID = idOccupazione;
                myParams.decode.active = true; //faccio la richiesta

                _this77.docStructureService.requestNew(myFilter, myParams).then(function (resultList) {
                  //se ho ottenuto qualcosa, lo ritorno al prossimo .then
                  if (resultList[0]) {
                    return resultList[0];
                  } //altrimenti rigetto
                  else {
                      reject('Nessuna occupazione presente con id indicato');
                    }
                }).then(function (elOccupazione) {
                  //adesso che ho l'elemento, se mi è stato chiesto recupero il docprenotazione
                  if (requestRelatedReservation) {
                    _this77.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 3, elOccupazione).then(function () {
                      //@ts-ignore
                      var docPrenotazione = elOccupazione.getDocInRepository(elOccupazione.IDREF); //ora devo decodificare la prenotazione e le pianificazioni

                      var reqForeign = _models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__["PrenotazionePianificazione"].getReqForeignKeys();

                      Promise.all([_this77.docStructureService.decodeAll(docPrenotazione, true), _this77.docStructureService.decodeCollection(docPrenotazione.PRENOTAZIONEPIANIFICAZIONE, reqForeign)]).then(function () {
                        resolve(elOccupazione);
                      });
                    })["catch"](function (error) {
                      reject(error);
                    });
                  } else {
                    resolve(elOccupazione);
                  }
                })["catch"](function (error) {
                  reject(error);
                });
              } else {
                reject('Id non fornito');
              }
            });
          }
          /**
           * Lista completa di occupazione
           * @param collOccupazione Lista completa di occupazione
           */

        }, {
          key: "createShortList",
          value: function createShortList(collOccupazione) {
            var shortList;

            if (collOccupazione && collOccupazione.length != 0) {
              shortList = collOccupazione.filter(function (element, index) {
                return index < 5;
              });
            } else {
              shortList = [];
            }
          }
        }]);

        return OccupazioniService;
      }();

      OccupazioniService.ɵfac = function OccupazioniService_Factory(t) {
        return new (t || OccupazioniService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__["DocstructureService"]));
      };

      OccupazioniService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: OccupazioniService,
        factory: OccupazioniService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Lk4g":
    /*!***********************************************!*\
      !*** ./src/app/models/locaton-image.model.ts ***!
      \***********************************************/

    /*! exports provided: LocationImage */

    /***/
    function Lk4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationImage", function () {
        return LocationImage;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var LocationImage = /*#__PURE__*/function (_library_models_iddoc12) {
        _inherits(LocationImage, _library_models_iddoc12);

        var _super12 = _createSuper(LocationImage);

        function LocationImage(onlyInstance) {
          _classCallCheck(this, LocationImage);

          return _super12.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(LocationImage, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IMAGEURL'];
            var arNumber = [];
            var arBoolean = ['COVERIMAGE'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'LocationImage';
            objDescriptor.classWebApiName = 'LOCATIONIMAGE';
            objDescriptor.doRemote = true;
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }]);

        return LocationImage;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "M0fm":
    /*!*****************************************!*\
      !*** ./src/app/models/impegno.model.ts ***!
      \*****************************************/

    /*! exports provided: Impegno */

    /***/
    function M0fm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Impegno", function () {
        return Impegno;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");

      var Impegno = /*#__PURE__*/function (_library_models_iddoc13) {
        _inherits(Impegno, _library_models_iddoc13);

        var _super13 = _createSuper(Impegno);

        function Impegno(onlyInstance) {
          _classCallCheck(this, Impegno);

          return _super13.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Impegno, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDREFER', 'DENOMINAZIONE', 'IDAREAOPERATIVA', 'IDLOCATION', 'IDCAMPO', 'IDSPORT', 'IDUTENTE'];
            var arNumber = ['SETTORE'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'Impegno';
            objDescriptor.classWebApiName = 'IMPEGNO';
            objDescriptor.doRemote = true;
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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
        }], [{
          key: "getReqForeignKeys",
          value: function getReqForeignKeys() {
            var arRequest = [];
            var objForeign;
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
        }]);

        return Impegno;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "MFYn":
    /*!***********************************************!*\
      !*** ./src/app/models/utentelivello.model.ts ***!
      \***********************************************/

    /*! exports provided: UtenteLivello */

    /***/
    function MFYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtenteLivello", function () {
        return UtenteLivello;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var UtenteLivello = /*#__PURE__*/function (_library_models_iddoc14) {
        _inherits(UtenteLivello, _library_models_iddoc14);

        var _super14 = _createSuper(UtenteLivello);

        function UtenteLivello(onlyInstance) {
          _classCallCheck(this, UtenteLivello);

          return _super14.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(UtenteLivello, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDSPORT', 'IDLIVELLO', 'DESCRSPORT', 'DESCRLIVELLO'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'UtenteLivello';
            objDescriptor.classWebApiName = 'UTENTELIVELLO';
            objDescriptor.doRemote = true;
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(UtenteLivello.prototype), "setJSONProperty", this).call(this, data);
          }
        }]);

        return UtenteLivello;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "MO7j":
    /*!****************************************************!*\
      !*** ./src/app/models/areapaymentsetting.model.ts ***!
      \****************************************************/

    /*! exports provided: AreaPaymentSetting */

    /***/
    function MO7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaPaymentSetting", function () {
        return AreaPaymentSetting;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");

      var AreaPaymentSetting = /*#__PURE__*/function (_library_models_iddoc15) {
        _inherits(AreaPaymentSetting, _library_models_iddoc15);

        var _super15 = _createSuper(AreaPaymentSetting);

        function AreaPaymentSetting(onlyInstance) {
          _classCallCheck(this, AreaPaymentSetting);

          return _super15.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(AreaPaymentSetting, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREAOPERATIVA', 'PPACCOUNT', 'PPCLIENTIDSANDBOX', 'PPCLIENTIDPRODUCTION', 'PPCLIENTSECRET', 'SETTORI', 'STPUBLICKEY', 'STPUBLICKEYTEST'];
            var arNumber = ['TIPOPAYMENT', 'PPENVIRONMENT', 'STENVIRONMENT'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'AreaPaymentSetting';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'AREAPAYMENTSETTING';
            objDescriptor.describeField = 'TIPOPAYMENT';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(AreaPaymentSetting.prototype), "setJSONProperty", this).call(this, data);

            this.setOriginal();
          }
          /**
           * Dato un Settore di pagamento, ritorna TRUE se il Setting lo contempla
           * @param settore Settore di pagamento
           */

        }, {
          key: "isFor",
          value: function isFor(settore) {
            var arSettori = [];
            var mySettore = settore + '';
            var incluso = false;

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

        }, {
          key: "icon",
          get: function get() {
            var icona = '';

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

        }, {
          key: "label",
          get: function get() {
            var etichetta = '';

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
          } //E' possibile pagare con funzionalità dentro all'App

        }, {
          key: "paymentInApp",
          get: function get() {
            var inApp = false;

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

        }], [{
          key: "prepareArPaymentMode",
          value: function prepareArPaymentMode(arPaymentSettings) {
            var onSite = false;
            var withBonifico = false;
            var electronicPay = false;
            var myElList;
            var arReturn = [];

            if (arPaymentSettings) {
              arPaymentSettings.forEach(function (element) {
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
        }]);

        return AreaPaymentSetting;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "MtDR":
    /*!*****************************************************!*\
      !*** ./src/app/services/slotoccupazione.service.ts ***!
      \*****************************************************/

    /*! exports provided: SlotoccupazioneService */

    /***/
    function MtDR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotoccupazioneService", function () {
        return SlotoccupazioneService;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_imdb_slotday_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/imdb/slotday.model */
      "NyLC");
      /* harmony import */


      var _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/dateslotlock.model */
      "P2W9");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _models_log_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../models/log.model */
      "Ag5x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SlotoccupazioneService = /*#__PURE__*/function () {
        function SlotoccupazioneService(apiCall) {
          _classCallCheck(this, SlotoccupazioneService);

          this.apiCall = apiCall;
          this._docOccupazione = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_imdb_slotday_model__WEBPACK_IMPORTED_MODULE_4__["SlotDay"]());
          this.gapHour = 0;
          this.gapMinutes = 0;
        }

        _createClass(SlotoccupazioneService, [{
          key: "docOccupazione",
          get: function get() {
            return this._docOccupazione.asObservable();
          }
          /**
           * Passando un tempo in minuti imposta il Gap da utilizzare
           * @param minuti Minuti da impostare
           */

        }, {
          key: "setGapMinutes",
          value: function setGapMinutes(minuti) {
            if (minuti && minuti !== 0) {
              this.gapMinutes = minuti;
              this.gapHour = minuti / 60;
            } else {
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

        }, {
          key: "request",
          value: function request(config, templateSlotDay, docLocation, docCampo, dataGiorno) {
            var _this78 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'CAMPO';
              var strData = moment__WEBPACK_IMPORTED_MODULE_0__(dataGiorno).format('YYYY-MM-DD');
              myHeaders = myHeaders.append('X-HTTP-Method-Override', 'GETDATESLOTLOCK');

              if (docLocation && docCampo) {
                var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('guidArea', docLocation.IDAREAOPERATIVA);
                myParams = myParams.append('guidLocation', docLocation.ID);
                myParams = myParams.append('guidCampo', docCampo.ID);
                myParams = myParams.append('dataGiorno', strData);
                var myUrl = config.urlBase + '/' + doObject;

                _this78.apiCall.httpGet(myUrl, myHeaders, myParams).subscribe(function (resultData) {
                  //Reimposto il Gap dei minuti
                  _this78.setGapMinutes(docLocation.MINUTIPREAVVISOPRENOTAZIONE); //Ora cerco di sincronizzare il template del giorno con le occupazioni arrivate


                  _this78.syncResult(resultData, templateSlotDay);

                  resolve();
                }, function (error) {
                  reject(error);
                });
              } else {
                _models_log_model__WEBPACK_IMPORTED_MODULE_8__["LogApp"].consoleLog('Dati Occupazione: RICHIESTA FAILED');

                _models_log_model__WEBPACK_IMPORTED_MODULE_8__["LogApp"].consoleLog('Manca' + (!docLocation ? 'Location' : '') + ' ' + (!docCampo ? 'Campo' : ''));

                _this78._docOccupazione.next(templateSlotDay);

                reject();
              }
            });
          }
          /**
           *
           * @param resultDataServer Result in arrivo dal server
           * @param templateSlot Template Slot in arrivo dalla videata
           */

        }, {
          key: "syncResult",
          value: function syncResult(resultDataServer, templateSlot) {
            var _this79 = this;

            //Converto il risultato in un oggetto reale
            var srvResult = new _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__["DateSlotLock"]();
            var nowMoment;
            var isSlotOccupato;
            srvResult.setJSONProperty(resultDataServer);
            /**Informazioni occupazioni ricevute */

            if (srvResult.RESULT) {
              templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati

              templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;
              /** Ciclo sugli Slot Orari */

              templateSlot.SLOTTIMES.forEach(function (elSlotTime) {
                //TUTTO CHIUSO
                if (!templateSlot.APERTOCHIUSO) {
                  //Giornata Chiusa
                  elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                } else {
                  //Giornata Aperta
                  //Lo Slot ha già una impostazione da Template
                  //Nel caso da template sia CHIUSO non lo cambio
                  if (elSlotTime.STATO !== _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso) {
                    //Ora Attuale
                    nowMoment = moment__WEBPACK_IMPORTED_MODULE_0__(); //Lo Slot è nel passato - lo imposto a chiuso

                    if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isSameOrBefore(nowMoment)) {
                      //Lo Slot non è disponibile
                      elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                    } else {
                      //Slot è nel futuro
                      //Controllo se lo Slot è occupato
                      isSlotOccupato = _this79.slotInServerSlotLock(elSlotTime, srvResult);

                      if (isSlotOccupato) {
                        //E' tra gli slot occupati
                        elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].occupato;
                      } else {
                        //Sembra libero lo SLOT ma controlliamo se c'e' un GAP di Preavviso
                        if (_this79.gapHour != 0) {
                          var disponibileDa = nowMoment.add(_this79.gapHour, 'hours'); //Essendo dopo il preavviso lo segno come libero

                          if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isAfter(disponibileDa)) {
                            elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].libero;
                          } else {
                            //Contattare in sede per la disponibilità
                            elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].contattare;
                          }
                        } else {
                          //Non ci sono Gap di preavviso
                          elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].libero;
                        }
                      }
                    }
                  }
                }
              });
            } //Emetto l'evento di cambio


            this._docOccupazione.next(templateSlot);
          }
          /**
          *
          * @param resultDataServer Result in arrivo dal server
          * @param templateSlot Template Slot in arrivo dalla videata
          */

        }, {
          key: "syncResultOriginale",
          value: function syncResultOriginale(resultDataServer, templateSlot) {
            var _this80 = this;

            //Converto il risultato in un oggetto reale
            var srvResult = new _models_dateslotlock_model__WEBPACK_IMPORTED_MODULE_5__["DateSlotLock"]();
            srvResult.setJSONProperty(resultDataServer);
            /**Informazioni occupazioni ricevute */

            if (srvResult.RESULT) {
              templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati

              templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;
              /** Ciclo sugli Slot Orari */

              templateSlot.SLOTTIMES.forEach(function (elSlotTime) {
                //TUTTO CHIUSO
                if (!templateSlot.APERTOCHIUSO) {
                  //Giornata Chiusa
                  elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                } else {
                  //Giornata Aperta
                  //Lo Slot ha già una impostazione da Template
                  //Nel caso da template sia CHIUSO non lo cambio
                  if (elSlotTime.STATO !== _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso) {
                    //ad Adesso applico un gap di Ore
                    //GAP ORE E' un preavviso
                    var adesso = moment__WEBPACK_IMPORTED_MODULE_0__().add(_this80.gapHour, 'hours'); //Se l'inizio dello Slot è superiore ad adesso

                    if (moment__WEBPACK_IMPORTED_MODULE_0__(elSlotTime.START).isAfter(adesso)) {
                      var inSlot = _this80.slotInServerSlotLock(elSlotTime, srvResult);

                      if (inSlot) {
                        //E' tra gli slot occupati
                        elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].occupato;
                      }
                    } else {
                      //Lo Slot non è disponibile
                      elSlotTime.STATO = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoSlot"].chiuso;
                    }
                  }
                }
              });
            } //Emetto l'evento di cambio


            this._docOccupazione.next(templateSlot);
          }
          /**
           * Controlla se lo Slot è dentro a quelli Lock arrivati dal server
           * @param docSlot Slot da controllare
           * @param serverSlotLock Slot Bloccati a livello server
           */

        }, {
          key: "slotInServerSlotLock",
          value: function slotInServerSlotLock(docSlot, serverSlotLock) {
            var findInSlotLock = false;
            var result;

            if (serverSlotLock) {
              if (serverSlotLock.TIMELOCK) {
                //Ciclo sugli orari bloccati
                for (var index = 0; index < serverSlotLock.TIMELOCK.length; index++) {
                  var elLock = serverSlotLock.TIMELOCK[index];
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
        }]);

        return SlotoccupazioneService;
      }();

      SlotoccupazioneService.ɵfac = function SlotoccupazioneService_Factory(t) {
        return new (t || SlotoccupazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]));
      };

      SlotoccupazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: SlotoccupazioneService,
        factory: SlotoccupazioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "NWOI":
    /*!*********************************************!*\
      !*** ./src/app/models/filtercorsi.model.ts ***!
      \*********************************************/

    /*! exports provided: FilterCorsi */

    /***/
    function NWOI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterCorsi", function () {
        return FilterCorsi;
      }); // Proprietà per Filtraggio Corsi


      var FilterCorsi = function FilterCorsi(idLoc) {
        _classCallCheck(this, FilterCorsi);

        this.IDLOCATION = idLoc;
        this._CHECKISCRIZIONEAPERTA = false;
      };
      /***/

    },

    /***/
    "NyLC":
    /*!**********************************************!*\
      !*** ./src/app/models/imdb/slotday.model.ts ***!
      \**********************************************/

    /*! exports provided: SlotDay */

    /***/
    function NyLC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotDay", function () {
        return SlotDay;
      });
      /* harmony import */


      var _slottime_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./slottime.model */
      "TORv");
      /* harmony import */


      var _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../prenotazionepianificazione.model */
      "FAI+");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../valuelist.model */
      "W8X0");

      var SlotDay = /*#__PURE__*/function () {
        function SlotDay() {
          _classCallCheck(this, SlotDay);

          this.SLOTTIMES = [];
          this.APERTOCHIUSO = true;
          this._TEMPLATELOCK = true; //Il giorno è ancora bloccato in quanto solo template e non attualizzato (Non posso prenotare nulla ancora)

          this.setStandardTime();
        }
        /**
         * Copia tutte le proprietà dall'oggetto passato
         * @param oldObject Oggetto da cui copiare
         */


        _createClass(SlotDay, [{
          key: "copyFrom",
          value: function copyFrom(oldObject) {
            var _this81 = this;

            this.WEEKDAY = oldObject.WEEKDAY;
            this.STARTTIME = oldObject.STARTTIME;
            this.ENDTIME = oldObject.ENDTIME;
            this.APERTOCHIUSO = oldObject.APERTOCHIUSO;
            this._TEMPLATELOCK = oldObject._TEMPLATELOCK;
            this.SLOTTIMES = [];
            oldObject.SLOTTIMES.forEach(function (elSlotTime) {
              var slot = new _slottime_model__WEBPACK_IMPORTED_MODULE_0__["SlotTime"](elSlotTime.START, elSlotTime.END);
              slot.selected = elSlotTime.selected;
              slot.STATO = elSlotTime.STATO;

              _this81.SLOTTIMES.push(slot);
            });
          }
          /**
           * segna come chiusi gli slot che sforano dentro un eventuale periodo intermedio di chiusura
           */

        }, {
          key: "disableClosedSlots",
          value: function disableClosedSlots() {
            var _this82 = this;

            if (this.STARTMIDDLE && this.ENDMIDDLE) {
              this.SLOTTIMES.forEach(function (element) {
                if (element.END > _this82.ENDMIDDLE && element.START < _this82.STARTMIDDLE) {
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

        }, {
          key: "setChiusuraIntermedia",
          value: function setChiusuraIntermedia(chiusura, riapertura) {
            if (chiusura && riapertura) {
              this.ENDMIDDLE = chiusura;
              this.STARTMIDDLE = riapertura;
            }
          }
        }, {
          key: "setStandardTime",
          value: function setStandardTime() {
            var adesso = new Date();
            this.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 8, 0, 0);
            this.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 20, 0, 0);
          }
          /**
           * Creazione degli Slot Time
           * @param minutiSlot Minuti di ogni slot
           */

        }, {
          key: "createSlotTime",
          value: function createSlotTime(minutiSlot) {
            var anno = 0;
            var mese = 0;
            var giorno = 0;
            var oreStart = 0;
            var minutiStart = 0;
            var oreEnd = 0;
            var minutiEnd = 0;

            if (this.APERTOCHIUSO) {
              anno = this.STARTTIME.getFullYear();
              mese = this.STARTTIME.getMonth();
              giorno = this.STARTTIME.getDate();
              oreStart = this.STARTTIME.getHours();
              oreEnd = this.ENDTIME.getHours();
              minutiStart = this.STARTTIME.getMinutes();
              minutiEnd = this.ENDTIME.getMinutes();
              var myData = {
                anno: anno,
                mese: mese,
                giorno: giorno
              };
              var myStart = {
                ore: oreStart,
                minuti: minutiStart
              };
              var myEnd = {
                ore: oreEnd,
                minuti: minutiEnd
              };
              this.SLOTTIMES = _slottime_model__WEBPACK_IMPORTED_MODULE_0__["SlotTime"].getArrayStandardSlot(myData, myStart, myEnd, minutiSlot);
              this.disableClosedSlots();
            }
          }
          /**
           * Imposta tutti i figli SlotTime applicando a START e END lo stesso orario ma sulla data passata
           * @param nuovaData Nuova Data da applicare
           */

        }, {
          key: "changeDateInSlotTime",
          value: function changeDateInSlotTime(nuovaData) {
            if (this.SLOTTIMES) {
              this.SLOTTIMES.forEach(function (elSlotTime) {
                elSlotTime.changeDateInSlotTime(nuovaData);
              });
            }
          }
          /**
           * Effettua le operazioni per il cambio selezione di uno slot
           * @param idSlotTime SlotTime in cambiamento selection
           */

        }, {
          key: "changeSelectionSlotTime",
          value: function changeSelectionSlotTime(actualSlot) {
            var newState;
            var contaSelected;
            var findSlot;
            var findStart;
            var docPianificazione;

            if (actualSlot) {
              newState = !actualSlot.selected; //Il nuovo stato che assumerà lo Slot
              //Se il nuovo stato è disattivare, posso farlo

              if (newState == false) {
                contaSelected = 0;
                findSlot = false; //Se prima dello Slot da disattivare ci fossero elementi selezionati, 
                // allora devo disattivare lo slot richiesto e tutti i seguenti

                this.SLOTTIMES.forEach(function (element) {
                  if (element.ID == actualSlot.ID) {
                    findSlot = true;
                    element.selected = false;
                  } else if (!findSlot && element.selected) {
                    contaSelected++;
                  } else if (findSlot && contaSelected > 0) {
                    element.selected = false;
                  }
                });
              } else {
                contaSelected = 0;
                findSlot = false; //Se il nuovo Stato è ATTIVARE devo effettuare l'operazione 
                //controllando le altre selezioni
                //Le selezioni massime possono essere solo 2

                this.SLOTTIMES.forEach(function (element) {
                  //Elemento selezionato
                  if (element.selected) {
                    //Se ne ho già selezionato 1, devo disattivare questo
                    if (contaSelected >= 1 && !findSlot || findSlot && contaSelected !== 1) {
                      element.selected = false;
                    } else {
                      contaSelected++;
                    }
                  } else if (element.ID == actualSlot.ID) {
                    element.selected = true;
                    findSlot = true;
                    contaSelected++;
                  }
                }); //Ora se ci sono 2 selezione posso selezionare tutto cio' che sta in mezzo

                if (contaSelected == 2) {
                  findStart = false;
                  var lastIndex = -1;

                  for (var index = 0; index < this.SLOTTIMES.length; index++) {
                    var element = this.SLOTTIMES[index];

                    if (element.selected && findStart) {
                      //Ho finito di selezionare - esco
                      lastIndex = index;
                      break;
                    } else if (element.selected && !findStart) {
                      //Inizia adesso la selezione
                      findStart = true;
                    } else if (findStart) {
                      //Ho trovato l'inizio e non ho ancora finito
                      //Qua in mezzo c'e' qualcosa di chiuso o occupato e quindi mi devo fermare
                      if (element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].chiuso || element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].occupato || element.STATO == _valuelist_model__WEBPACK_IMPORTED_MODULE_3__["StatoSlot"].contattare) {
                        lastIndex = index;
                        break;
                      } else {
                        element.selected = true;
                      }
                    }
                  } //Tutto quello che sta dopo il lastIndex deve essere disattivato


                  if (lastIndex != -1 && lastIndex < this.SLOTTIMES.length) {
                    for (var _index4 = lastIndex + 1; _index4 < this.SLOTTIMES.length; _index4++) {
                      var _element3 = this.SLOTTIMES[_index4];
                      _element3.selected = false;
                    }
                  }
                }
              }
            } //Lo faccio fuori dagli If cosi creo sempre un oggetto
            //Qui cerco di creare un oggetto di PrenotazionePianificazione da restituire


            docPianificazione = this.getPrenotazionePianificazione();
            return docPianificazione;
          }
        }, {
          key: "getPrenotazionePianificazione",
          value: function getPrenotazionePianificazione() {
            var docPianificazione;
            var findStart = false;
            docPianificazione = new _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__["PrenotazionePianificazione"]();
            /**Devo cercare il primo selezionato e l'ultimo */

            if (this.SLOTTIMES) {
              this.SLOTTIMES.forEach(function (elSlot) {
                if (elSlot.selected) {
                  if (findStart) {
                    docPianificazione.DATAORAFINE = elSlot.END; //Nel caso lo slot di End sia alle 00:00 allora sono le 00:00 del giorno seguente

                    if (elSlot.END.getHours() == 0 && elSlot.END.getMinutes() == 0) {
                      docPianificazione.DATAORAFINE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].calcola(elSlot.END, 1, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["TypePeriod"].days);
                    }

                    docPianificazione.DURATAORE = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].durataOre(docPianificazione.DATAORAINIZIO, docPianificazione.DATAORAFINE);
                  } else {
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

        }, {
          key: "findSlotTimeById",
          value: function findSlotTimeById(idSlotTime) {
            var findSlot;

            if (idSlotTime) {
              findSlot = this.SLOTTIMES.find(function (element) {
                return element.ID == idSlotTime;
              });
            }

            return findSlot;
          }
        }]);

        return SlotDay;
      }();
      /***/

    },

    /***/
    "OH1o":
    /*!*****************************************************!*\
      !*** ./src/app/models/start-configuration.model.ts ***!
      \*****************************************************/

    /*! exports provided: StartConfiguration, StartAuthorization */

    /***/
    function OH1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartConfiguration", function () {
        return StartConfiguration;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartAuthorization", function () {
        return StartAuthorization;
      });
      /* harmony import */


      var _gruppo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gruppo.model */
      "8jQ+");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StartConfiguration = /*#__PURE__*/function () {
        function StartConfiguration() {
          _classCallCheck(this, StartConfiguration);

          this._urlComponent = 'COMPGOUEGO';
          this._ready = false;
          this._titleApp = 'Gouego';
          this._companyName = 'Gouego Sport'; //Immagine Rettangolare
          //Questa è sempre una immagine statica

          this._appUrlLogo = 'assets/img/logoapp.png'; //Questa è inizialmente come appUrlLogo ma il server puo' mandarcene un'altra

          this._companyUrlLogo = this._appUrlLogo; //Immagine Quadrata come ICONA
          //Questa è sempre una immagine statica

          this._appUrlIcon = 'assets/img/iconapp.png'; //Questa è inizialmente come appUrlIcon ma il server puo' mandarcene un'altra

          this._companyUrlIcon = this._appUrlIcon; //AppId gestito dagli eventi dello Start Service

          this._appId = '';
          this._idAreaSelected = '';
        }
        /**
         *
         * @param prefixDomain Prefisso del dominio es (openbeach,demo, localhost)
         * @param testingMode
         */


        _createClass(StartConfiguration, [{
          key: "setUrlLocation",
          value: function setUrlLocation() {
            var testingMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (testingMode == true) {
              //Modalità di test
              //Modalità in locale
              //Protocollo per forza http
              this._urlProtocol = 'http';
              this._urlDomain = 'localhost/gouegoapi';
              this._urlFileServer = 'localhost/gouego';
            } else {
              //Non sono in test perchè voglio collegarmi al server, ma da dentro ionic serve
              this._urlProtocol = 'https'; //Modalità Server

              this._urlDomain = 'api.gouego.com';
              this._urlFileServer = 'app.gouego.com/admin';
            }
          } // Utilizzato al termine di una chiamata di 
          // Autorizzazione

        }, {
          key: "setGruppoAuthorization",
          value: function setGruppoAuthorization(responseData) {
            var _this83 = this;

            // Inizializzo il Gruppo
            this._gruppo = new _gruppo_model__WEBPACK_IMPORTED_MODULE_0__["Gruppo"]();

            this._gruppo.setJSONProperty(responseData); //Ciclo sulle immagini ricevute (se presenti)


            this._gruppo.PRIVATEIMAGE.forEach(function (elImage) {
              if (elImage.FILENAMEESTENSIONE) {
                switch (elImage.TIPO) {
                  case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoPrivateImage"].icon:
                    _this83._companyUrlIcon = "".concat(_this83._urlProtocol, "://").concat(_this83._urlFileServer, "/").concat(elImage.FILENAMEESTENSIONE);
                    break;

                  case _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoPrivateImage"].logo:
                    _this83._companyUrlLogo = "".concat(_this83._urlProtocol, "://").concat(_this83._urlFileServer, "/").concat(elImage.FILENAMEESTENSIONE);
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
        }, {
          key: "gruppo",
          get: function get() {
            return this._gruppo;
          },
          set: function set(value) {
            this._gruppo = value;
          }
        }, {
          key: "idAreaSelected",
          get: function get() {
            return this._idAreaSelected;
          },
          set: function set(value) {
            this._idAreaSelected = value;
          }
          /**
           * Ritorna il logo standard di Gouego
           */

        }, {
          key: "appUrlLogo",
          get: function get() {
            return this._appUrlLogo;
          },
          set: function set(value) {
            this._appUrlLogo = value;
          }
          /**
           * Ritorna il logo aziendale
           */

        }, {
          key: "companyUrlLogo",
          get: function get() {
            return this._companyUrlLogo;
          },
          set: function set(value) {
            this._companyUrlLogo = value;
          } //#endregion
          //#region Brand Logo Image

          /**
           * Ritorna Icona Rettangolare Standard
           */

        }, {
          key: "appUrlIcon",
          get: function get() {
            return this._appUrlIcon;
          },
          set: function set(value) {
            this._appUrlIcon = value;
          }
          /**
           * Ritorna Icona Aziendale
           */

        }, {
          key: "companyUrlIcon",
          get: function get() {
            return this._companyUrlIcon;
          },
          set: function set(value) {
            this._companyUrlIcon = value;
          } //#endregion

          /**
           * Ritorna Logo rettangolare da utilizzare
           */

        }, {
          key: "getUrlLogo",
          value: function getUrlLogo() {
            return this._companyUrlLogo ? this._companyUrlLogo : this._appUrlLogo;
          }
          /**
           * Ritorna una Icona quadrata
           */

        }, {
          key: "getUrlIcon",
          value: function getUrlIcon() {
            return this._companyUrlIcon ? this._companyUrlIcon : this._appUrlIcon;
          }
        }, {
          key: "errorMessage",
          get: function get() {
            return this._errorMessage;
          },
          set: function set(value) {
            this._errorMessage = value;
          }
        }, {
          key: "companyName",
          get: function get() {
            return this._companyName;
          },
          set: function set(value) {
            this._companyName = value;
          }
        }, {
          key: "titleApp",
          get: function get() {
            return this._titleApp;
          },
          set: function set(value) {
            this._titleApp = value;
          }
        }, {
          key: "ready",
          get: function get() {
            return this._ready;
          },
          set: function set(value) {
            this._ready = value;
          } // get set appId

        }, {
          key: "appId",
          get: function get() {
            return this._appId;
          },
          set: function set(value) {
            this._appId = value;
          }
        }, {
          key: "urlDomain",
          get: function get() {
            return this._urlDomain;
          }
        }, {
          key: "urlFileServer",
          get: function get() {
            var myUrl = "".concat(this._urlProtocol, "://").concat(this._urlFileServer);
            return myUrl;
          } //Url di Base per effettuare la chiamata

        }, {
          key: "urlBase",
          get: function get() {
            var myUrl = "".concat(this._urlProtocol, "://").concat(this._urlDomain);
            myUrl = myUrl + '/' + this._urlComponent;
            return myUrl;
          }
          /**
           * Codice autorizzazione Applicazione ottenuto nella fase di
           * shaking iniziale da inviare come authcode ad ogni richiesta
           */

        }, {
          key: "authorizationAppCode",
          get: function get() {
            return this._authorizationAppCode;
          },
          set: function set(value) {
            this._authorizationAppCode = value;
          }
          /**
           * Codice autorizzazione utente ottenuto nella fase di login
           * e da inviare se loggato
           */

        }, {
          key: "authorizationUserCode",
          get: function get() {
            return this._authorizationUserCode;
          },
          set: function set(value) {
            this._authorizationUserCode = value;
          }
          /**
           * Ritorna l'headerHttp da applicare con l'impostazione
           * @param contentType Eventuale content Type da applicare
           */

        }, {
          key: "getHttpHeaders",
          value: function getHttpHeaders(contentType) {
            var content = 'application/json';

            if (contentType && contentType.length != 0) {
              content = contentType;
            }

            var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-type': content
            }); //Se ho l'app-id lo imposto, 
            //altrimenti 

            if (this._appId && this._appId.length != 0) {
              myHeaders = myHeaders.append('appid', this._appId);
            } else {
              myHeaders = myHeaders.append('dashrequest', '-1');
            }

            myHeaders = myHeaders.append('fromrequest', 'gouegoapp'); //Devo inviare il codice di autorizzazione app

            if (this._authorizationAppCode && this._authorizationAppCode.length != 0) {
              myHeaders = myHeaders.append('authcode', this._authorizationAppCode);
            } //Devo inviare il codice di autorizazione utente


            if (this._authorizationUserCode && this._authorizationUserCode.length != 0) {
              myHeaders = myHeaders.append('authusercode', this._authorizationUserCode);
            }

            return myHeaders;
          }
        }]);

        return StartConfiguration;
      }();

      var StartAuthorization = function StartAuthorization() {
        _classCallCheck(this, StartAuthorization);
      };
      /***/

    },

    /***/
    "Oq6q":
    /*!**********************************************!*\
      !*** ./src/app/models/privateimage.model.ts ***!
      \**********************************************/

    /*! exports provided: PrivateImage */

    /***/
    function Oq6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateImage", function () {
        return PrivateImage;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var PrivateImage = /*#__PURE__*/function (_library_models_iddoc16) {
        _inherits(PrivateImage, _library_models_iddoc16);

        var _super16 = _createSuper(PrivateImage);

        function PrivateImage(onlyInstance) {
          _classCallCheck(this, PrivateImage);

          return _super16.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(PrivateImage, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['FILENAMEESTENSIONE'];
            var arNumber = ['TIPO'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'PrivateImage';
            objDescriptor.doRemote = false;
            objDescriptor.classWebApiName = '';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }]);

        return PrivateImage;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "P2W9":
    /*!**********************************************!*\
      !*** ./src/app/models/dateslotlock.model.ts ***!
      \**********************************************/

    /*! exports provided: DateSlotLock, TimeLock */

    /***/
    function P2W9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateSlotLock", function () {
        return DateSlotLock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeLock", function () {
        return TimeLock;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var DateSlotLock = /*#__PURE__*/function (_library_models_iddoc17) {
        _inherits(DateSlotLock, _library_models_iddoc17);

        var _super17 = _createSuper(DateSlotLock);

        function DateSlotLock() {
          var _this84;

          _classCallCheck(this, DateSlotLock);

          _this84 = _super17.call(this);
          _this84.RESULT = false;
          _this84.APERTOCHIUSO = false;
          _this84.TIMELOCK = [];
          return _this84;
        }

        _createClass(DateSlotLock, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(DateSlotLock.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Imposta le collection
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            var _this85 = this;

            this.TIMELOCK = [];

            if (data) {
              if (data.TIMELOCK) {
                data.TIMELOCK.forEach(function (element) {
                  var newTl = new TimeLock();
                  newTl.setJSONProperty(element);

                  _this85.TIMELOCK.push(newTl);
                });
              }
            }
          }
          /**
          * Ritorna il descrittore della Struttura Campi
          */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['MESSAGE'];
            var arNumber = [];
            var arNumberDecimal = [];
            var arBoolean = ['APERTOCHIUSO', 'RESULT'];
            var arDate = ['DATA'];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['TIMELOCK'];
            objDescriptor.className = 'DateSlotLock';
            objDescriptor.classWebApiName = '';
            objDescriptor.doRemote = false;
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }]);

        return DateSlotLock;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);

      var TimeLock = /*#__PURE__*/function (_library_models_iddoc18) {
        _inherits(TimeLock, _library_models_iddoc18);

        var _super18 = _createSuper(TimeLock);

        function TimeLock() {
          _classCallCheck(this, TimeLock);

          return _super18.call(this);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(TimeLock, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = [];
            var arNumber = [];
            var arNumberDecimal = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = ['START', 'END'];
            var arTime = [];
            var arCollection = [];
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }]);

        return TimeLock;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "PVTr":
    /*!************************************************!*\
      !*** ./src/app/models/documentazione.model.ts ***!
      \************************************************/

    /*! exports provided: InvioDocumentazione, Documentazione */

    /***/
    function PVTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvioDocumentazione", function () {
        return InvioDocumentazione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Documentazione", function () {
        return Documentazione;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var InvioDocumentazione = /*#__PURE__*/function (_library_models_iddoc19) {
        _inherits(InvioDocumentazione, _library_models_iddoc19);

        var _super19 = _createSuper(InvioDocumentazione);

        function InvioDocumentazione(onlyInstance) {
          _classCallCheck(this, InvioDocumentazione);

          return _super19.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(InvioDocumentazione, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDTIPODOCUMENTAZIONE', 'FILE', 'DESCRIZIONE', 'TOKENUTENTE'];
            objDescriptor.className = 'InvioDocumentazione';
            objDescriptor.doRemote = false;
            objDescriptor.describeField = 'DESCRIZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            return objDescriptor;
          }
        }]);

        return InvioDocumentazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);

      var Documentazione = /*#__PURE__*/function (_library_models_iddoc20) {
        _inherits(Documentazione, _library_models_iddoc20);

        var _super20 = _createSuper(Documentazione);

        function Documentazione() {
          var onlyInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _classCallCheck(this, Documentazione);

          return _super20.call(this, onlyInstance);
        }

        _createClass(Documentazione, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDUTENTE', 'IDTIPODOCUMENTAZIONE', 'DESCRIZIONE', 'FILENAMEESTENSIONE', 'FILETYPE'];
            var arBoolean = ['CLIENTUPLOAD'];
            var arDate = ['VALIDOFINO'];
            var arDateTime = ['DATAORACARICAMENTO', 'DATAORAMODIFICA'];
            var arNumber = ['CLASSE'];
            objDescriptor.className = 'Documentazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'DOCUMENTAZIONE';
            objDescriptor.describeField = 'FILENAMEESTENSIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.setRelation('IDUTENTE', 'Utente');
            objDescriptor.setRelation('IDTIPODOCUMENTAZIONE', 'TipoDocumentazione');
            return objDescriptor;
          }
        }]);

        return Documentazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "R2Z1":
    /*!*******************************************************!*\
      !*** ./src/app/library/models/requestParams.model.ts ***!
      \*******************************************************/

    /*! exports provided: PostParams, RequestParams, RequestDecode, RequestForeign */

    /***/
    function R2Z1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostParams", function () {
        return PostParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestParams", function () {
        return RequestParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestDecode", function () {
        return RequestDecode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestForeign", function () {
        return RequestForeign;
      });
      /* harmony import */


      var _descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./descriptor.model */
      "Wz4r");
      /* harmony import */


      var _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./idlibrary.model */
      "rEUH"); //Classe con parametri Request POST


      var PostParams = /*#__PURE__*/function () {
        function PostParams() {
          _classCallCheck(this, PostParams);

          this.exportOnlyPropertyModified = false;
          this.exportOnlyDocModified = false;
        }
        /**
         * Controlla se il value contenuto è di tipo basico
         */


        _createClass(PostParams, [{
          key: "isBasicType",
          value: function isBasicType() {
            var basic = false;
            var typeVar;
            var arBasicType = [];
            typeVar = _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__["IDLibrary"].getValueType(this.value);
            arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            arBasicType.push(_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
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

        }, {
          key: "exportJSON",
          value: function exportJSON() {
            var jsonReturn = '';

            var jsonValue = _idlibrary_model__WEBPACK_IMPORTED_MODULE_1__["IDLibrary"].exportJSONValue(this.value, this.exportOnlyPropertyModified, this.exportOnlyDocModified);

            jsonReturn = "\"".concat(this.key, "\":") + jsonValue;
            return jsonReturn;
          }
          /**
           * Dato un oggetto PostParams o un ArrayPostParams controlla
           * che gli elementi siano di tipo basico
           */

        }], [{
          key: "getBasicTypeFrom",
          value: function getBasicTypeFrom(myParams) {
            var basic = false;

            if (myParams) {
              if (Array.isArray(myParams)) {
                basic = true;

                for (var index = 0; index < myParams.length; index++) {
                  var element = myParams[index];

                  if (element.isBasicType() == false) {
                    basic = false;
                    break;
                  }
                }
              } else {
                basic = myParams.isBasicType();
              }
            }

            return basic;
          }
          /**
           * Viene creato un oggetto JSON con gli elementi presenti in myParams
           * @param myParams Singolo oggetto PostParams o Array di PostParams
           */

        }, {
          key: "getJsonFrom",
          value: function getJsonFrom(myParams) {
            var jsonReturn = '';

            if (myParams) {
              if (Array.isArray(myParams)) {
                for (var index = 0; index < myParams.length; index++) {
                  var element = myParams[index];
                  var jsonSingle = element.exportJSON();

                  if (jsonReturn.length !== 0) {
                    jsonReturn += ', ';
                  }

                  jsonReturn += jsonSingle;
                }
              } else {
                jsonReturn = myParams.exportJSON();
              }
            }

            jsonReturn = '{' + jsonReturn + '}';
            return jsonReturn;
          }
        }]);

        return PostParams;
      }(); //Classe con parametri da impostare nelle Request di tipo Get


      var RequestParams = function RequestParams() {
        _classCallCheck(this, RequestParams);

        this.decode = new RequestDecode();
      };
      /**
       * Classe con la definizione dei parametri di decodifica se richiesta
       */


      var RequestDecode = /*#__PURE__*/function () {
        //Se non passato vengono decodificati tutti i campi di foreign key con le describeRowFiels,
        //altrimenti è possibile specificare le foreignKey da decodificare
        function RequestDecode() {
          _classCallCheck(this, RequestDecode);

          this.active = false;
          this.foreignFields = [];
        }
        /**
         * Aggiunge una ForeignKey tra quelle da decodificare
         * Ritorna l'oggetto RequestForeign
         * @param nameField Nome del campo di Foreign Key
         */


        _createClass(RequestDecode, [{
          key: "addForeignField",
          value: function addForeignField(nameField) {
            var docForeign;

            if (nameField && nameField.length !== 0) {
              docForeign = new RequestForeign(nameField);
              this.foreignFields.push(docForeign);
            }

            return docForeign;
          }
        }]);

        return RequestDecode;
      }();
      /**
       * Classe con le foreignKey usate per la decodifica, e se presenti i campi di describe da usare
       */


      var RequestForeign = /*#__PURE__*/function () {
        function RequestForeign(nameField) {
          _classCallCheck(this, RequestForeign);

          this.nameField = nameField;
          this.describeFields = [];
        }

        _createClass(RequestForeign, [{
          key: "addDescribeField",
          value: function addDescribeField(nameField) {
            if (nameField && nameField.length !== 0) {
              this.describeFields.push(nameField);
            }
          }
        }]);

        return RequestForeign;
      }();
      /***/

    },

    /***/
    "R5r1":
    /*!***************************************!*\
      !*** ./src/app/models/campo.model.ts ***!
      \***************************************/

    /*! exports provided: Campo */

    /***/
    function R5r1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Campo", function () {
        return Campo;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _camposport_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camposport.model */
      "sbYY");

      var Campo = /*#__PURE__*/function (_library_models_iddoc21) {
        _inherits(Campo, _library_models_iddoc21);

        var _super21 = _createSuper(Campo);

        function Campo(onlyInstance) {
          _classCallCheck(this, Campo);

          return _super21.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Campo, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREAOPERATIVA', 'IDLOCATION', 'IDSPORT', 'DENOMINAZIONE', 'DIMENSIONI'];
            var arNumber = ['TIPOLOGIA', 'STRUTTURA'];
            var arNumberDecimal = ['DURATAOREMINIMA'];
            var arBoolean = ['UTILIZZABILE'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['CAMPOSPORT'];
            objDescriptor.className = 'Campo';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CAMPO';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
            objDescriptor.setRelation('IDLOCATION', 'Location');
            objDescriptor.setRelation('IDSPORT', 'Sport');
            return objDescriptor;
          } // Sovrascrivo il metodo IDDocument

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo il metodo IDDocument
            _get(_getPrototypeOf(Campo.prototype), "setJSONProperty", this).call(this, data); //Chiamo il metodo per le collection


            this.setCollection(data);
            this.setOriginal();
          }
          /**
           * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
           * @param data JSON Received
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            // Riazzero e ricreo
            this.CAMPOSPORT = []; //Sistemazione Immagini Location

            if (data.CAMPOSPORT) {
              this.setCollectionCampoSport(data);
            }
          }
          /**
           * Inizializza la collection Apertura Location con oggetto tipizzati
           * @param data JSON Received
           */

        }, {
          key: "setCollectionCampoSport",
          value: function setCollectionCampoSport(data) {
            var _this86 = this;

            if (data.CAMPOSPORT) {
              data.CAMPOSPORT.forEach(function (elCampoSport) {
                var newCampoSport = new _camposport_model__WEBPACK_IMPORTED_MODULE_2__["CampoSport"]();
                newCampoSport.setJSONProperty(elCampoSport);

                _this86.CAMPOSPORT.push(newCampoSport);
              });
            }
          } //Aggiunge alla collection un campo Sport

        }, {
          key: "addCampoSport",
          value: function addCampoSport(docCampoSport) {
            if (!this.CAMPOSPORT) {
              this.CAMPOSPORT = [];
            }

            this.CAMPOSPORT.push(docCampoSport);
          }
        }]);

        return Campo;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
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
        if (!__webpack_require__.o(map, req)) {
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
      /***/
    },

    /***/
    "SCCg":
    /*!**************************************************!*\
      !*** ./src/app/models/utenteiscrizione.model.ts ***!
      \**************************************************/

    /*! exports provided: UtenteIscrizione */

    /***/
    function SCCg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtenteIscrizione", function () {
        return UtenteIscrizione;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");

      var UtenteIscrizione = /*#__PURE__*/function (_library_models_iddoc22) {
        _inherits(UtenteIscrizione, _library_models_iddoc22);

        var _super22 = _createSuper(UtenteIscrizione);

        function UtenteIscrizione(onlyInstance) {
          _classCallCheck(this, UtenteIscrizione);

          return _super22.call(this, onlyInstance);
        }
        /**
         * Ritorna il descrittore della Struttura Campi
         */


        _createClass(UtenteIscrizione, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDCORSO', 'IDAREAOPERATIVA', 'DENOMINAZIONECORSO', 'IDUTENTE', 'IDSPORT', 'DENOMINAZIONESPORT', 'ICONASPORT', 'IDLOCATION', 'DENOMINAZIONELOCATION', 'INDIRIZZOLOCATION', 'COMUNELOCATION', 'IDCAMPO', 'DENOMINAZIONECAMPO', 'IDTIPOPAGAMENTO', 'DESCRTIPOPAGAMENTO', 'CODICEALFA', 'GIORNIPREVISTI'];
            var arNumber = ['TIPOCORSO', 'ANNOISCRIZIONE', 'CODICEINT', 'STATOISCRIZIONE'];
            var arNumberDecimal = ['IMPORTO', 'VERSATO', 'RESIDUO', 'ORELEZIONE'];
            var arBoolean = [];
            var arDate = ['DATAINIZIO', 'DATAFINE', 'DATAISCRIZIONE'];
            var arDateTime = ['ORAINIZIO'];
            var arTime = [];
            objDescriptor.className = 'UtenteIscrizione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'UTENTEISCRIZIONE';
            objDescriptor.describeField = 'DENOMINAZIONECORSO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "getIcon",
          value: function getIcon() {
            var nameIcon = 'ribbon';

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

        }, {
          key: "amountPayment",
          get: function get() {
            var myAmount = 0;
            myAmount = this.RESIDUO;
            return myAmount;
          }
          /**
           * Stato del pagamento in formato testo
           * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
           */

        }, {
          key: "getCaptionStatePayment",
          value: function getCaptionStatePayment() {
            var showForPay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var caption = '';

            if (this.amountPayment != 0) {
              if (showForPay) {
                caption = 'Paga Ora';
              } else {
                caption = 'Corso da pagare';
              }
            } else {
              caption = 'Corso pagato';
            }

            return caption;
          }
          /**
           * Ritorna lo Stato del pagamento Iscrizione
           */

        }, {
          key: "getStatoPagamento",
          value: function getStatoPagamento() {
            var myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].daPagare;

            if (this.RESIDUO == 0) {
              myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].pagato;
            } else if (this.RESIDUO != 0 && this.RESIDUO != this.IMPORTO) {
              myStato = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoPagamento"].pagatoInParte;
            }

            return myStato;
          }
        }]);

        return UtenteIscrizione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "SHYz":
    /*!******************************************************!*\
      !*** ./src/app/services/utenteiscrizione.service.ts ***!
      \******************************************************/

    /*! exports provided: UtenteiscrizioneService */

    /***/
    function SHYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtenteiscrizioneService", function () {
        return UtenteiscrizioneService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/utenteiscrizione.model */
      "SCCg");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtenteiscrizioneService = /*#__PURE__*/function () {
        function UtenteiscrizioneService(apiService) {
          _classCallCheck(this, UtenteiscrizioneService);

          this.apiService = apiService;
          this._listUtenteIscrizione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(UtenteiscrizioneService, [{
          key: "listUtenteIscrizione",
          get: function get() {
            return this._listUtenteIscrizione.asObservable();
          }
          /**
          * Richiede l'elenco delle Iscrizioni Corsi
          * @param config Dati configurazione
          * @param idUtente Utente che effettua richiesta
          * @param maxRecord Max Record da recuperare
          */

        }, {
          key: "request",
          value: function request(config, idUtente) {
            var _this87 = this;

            var maxRecord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('order-by', 'desc'); //new HttpHeaders({'Content-type':'text/plain'});

              var doObject = 'UTENTEISCRIZIONE';

              var filterDateTime = _this87.getFilterDateTime();

              var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto l'area richiesta

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('IDUTENTE', idUtente);
              myParams = myParams.append('DATAISCRIZIONE', filterDateTime);
              myParams = myParams.append('$top', maxRecord + ''); //Elimino gli attuali

              _this87._listUtenteIscrizione.next([]);

              _this87.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                var arReturn = [];

                if (data.UTENTEISCRIZIONE) {
                  arReturn = data.UTENTEISCRIZIONE;
                }

                return arReturn;
              })).subscribe(function (resultData) {
                for (var index = 0; index < resultData.length; index++) {
                  var element = resultData[index];
                  var newUtenteIscrizione = new _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__["UtenteIscrizione"]();
                  newUtenteIscrizione.setJSONProperty(element);

                  _this87.addUtenteIscrizione(newUtenteIscrizione);
                }

                resolve(_this87._listUtenteIscrizione.getValue());
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
          *
          * @param config Dati configurazione
          * @param idIscrizione ID Iscrizione richiesta
          */

        }, {
          key: "requestById",
          value: function requestById(config, idIscrizione) {
            var _this88 = this;

            return new Promise(function (resolve, reject) {
              //let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('order-by', 'desc');
              var doObject = 'UTENTEISCRIZIONE';

              var filterDateTime = _this88.getFilterDateTime();

              var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto richiesta

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('ID', idIscrizione);

              _this88.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                return data.UTENTEISCRIZIONE;
              })).subscribe(function (arrData) {
                var docIscrizione = new _models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_1__["UtenteIscrizione"]();

                if (arrData) {
                  if (arrData[0]) {
                    docIscrizione.setJSONProperty(arrData[0]);
                    resolve(docIscrizione);
                  } else {
                    reject('iscrizione inesistente');
                  }
                } else {
                  reject('iscrizione inesistente');
                }
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Aggiunge all'elenco una prenotazione dell'utente
           * @param objUtenteIscrizione Prenotazione da aggiungere
           */

        }, {
          key: "addUtenteIscrizione",
          value: function addUtenteIscrizione(objUtenteIscrizione) {
            var _this89 = this;

            this.listUtenteIscrizione.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (collUtenteIscrizione) {
              var findElement = collUtenteIscrizione.find(function (element) {
                return element.ID == objUtenteIscrizione.ID;
              });

              if (!findElement) {
                _this89._listUtenteIscrizione.next(collUtenteIscrizione.concat(objUtenteIscrizione));
              }
            });
          }
          /**
          * Crea il Parametro Filtro per il campo
          */

        }, {
          key: "getFilterDateTime",
          value: function getFilterDateTime() {
            var adesso = new Date();
            var newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
            var startDate = new Date(adesso.getFullYear(), 0, 1);
            var strAdesso = '';

            if (adesso.getMonth() < 6) {
              startDate = new Date(adesso.getFullYear() - 1, 5, 1);
            }

            strAdesso = newDoc.formatDateTimeISO(startDate);
            strAdesso = '>' + strAdesso;
            return strAdesso;
          }
        }]);

        return UtenteiscrizioneService;
      }();

      UtenteiscrizioneService.ɵfac = function UtenteiscrizioneService_Factory(t) {
        return new (t || UtenteiscrizioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"]));
      };

      UtenteiscrizioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: UtenteiscrizioneService,
        factory: UtenteiscrizioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function AppComponent_ion_app_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, startService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.startService = startService;
          this.showSplash = true;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this90 = this;

            // this.splashScreen.hide(); // Nasconde l'immagine statica
            this.platform.ready().then(function () {
              // this.statusBar.styleDefault();
              _this90.listenAppReady = _this90.startService.appReady.subscribe(function (valueReady) {
                if (valueReady) {
                  //Ambiente pronto
                  //Termino lo Splash
                  _this90.showSplash = false; //Tolgo la sottoscrizione

                  if (_this90.listenAppReady) {
                    _this90.listenAppReady.unsubscribe();
                  }
                }
              }); //Mi Sottoscrivo per ricevere la configurazione

              _this90.listenStartConfig = _this90.startService.startConfig.subscribe(function (element) {
                //Memorizzo per la visualizzazione del Menu
                _this90.startConfig = element;
              }); // Richiedo l'autorizzazione
              //this.startService.requestStartAuthorization();

              _this90.startService.settingStartStepOne();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 2,
        consts: [["class", "splash", 4, "ngIf"], [4, "ngIf"], [1, "splash"], [1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ion_app_1_Template, 2, 0, "ion-app", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSplash);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSplash);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRouterOutlet"]],
        styles: [".titleicon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  margin: 0px 0px 0px 0px;\n  display: -webkit-flex;\n  width: 100%;\n  height: 150px;\n  text-align: center;\n}\n.titleicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 150px;\n}\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-back-splash);\n}\n.sk-cube-grid[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: 100px auto;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 33%;\n  background-color: var(--ion-color-primary);\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBSUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBREo7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNRLDBEQUFBO0FBRFo7QUFHRTtFQUNFLDZCQUFBO0VBQ1EscUJBQUE7QUFBWjtBQUNFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQUVaO0FBREU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBSVo7QUFIRTtFQUNFLDZCQUFBO0VBQ1EscUJBQUE7QUFNWjtBQUxFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQVFaO0FBUEU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBVVo7QUFURTtFQUNFLDJCQUFBO0VBQ1EsbUJBQUE7QUFZWjtBQVhFO0VBQ0UsNkJBQUE7RUFDUSxxQkFBQTtBQWNaO0FBYkU7RUFDRSw2QkFBQTtFQUNRLHFCQUFBO0FBZ0JaO0FBZEU7RUFDRTtJQUVVLDJCQUFBO0VBaUJaO0VBaEJJO0lBRVEsMkJBQUE7RUFrQlo7QUFDRjtBQWZFO0VBQ0U7SUFFVSwyQkFBQTtFQWlCWjtFQWhCSTtJQUVRLDJCQUFBO0VBa0JaO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXRsZWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zcGxhc2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2stc3BsYXNoKTtcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0OyBcclxuICB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxyXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICB9IDM1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "TH60":
    /*!*****************************************!*\
      !*** ./src/app/models/livello.model.ts ***!
      \*****************************************/

    /*! exports provided: Livello */

    /***/
    function TH60(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Livello", function () {
        return Livello;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var Livello = /*#__PURE__*/function (_library_models_iddoc23) {
        _inherits(Livello, _library_models_iddoc23);

        var _super23 = _createSuper(Livello);

        function Livello(onlyInstance) {
          _classCallCheck(this, Livello);

          return _super23.call(this, onlyInstance);
        }

        _createClass(Livello, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Livello.prototype), "setJSONProperty", this).call(this, data);
          }
          /**
          * Ritorna il descrittore della Struttura Campi
          */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDSPORT', 'DENOMINAZIONE'];
            var arNumber = ['PROGRESSIONE', 'ETAMINIMA', 'ETAMASSIMA'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'Livello';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'LIVELLO';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDSPORT', 'Sport');
            return objDescriptor;
          }
        }]);

        return Livello;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "TORv":
    /*!***********************************************!*\
      !*** ./src/app/models/imdb/slottime.model.ts ***!
      \***********************************************/

    /*! exports provided: SlotTime */

    /***/
    function TORv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotTime", function () {
        return SlotTime;
      });
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../valuelist.model */
      "W8X0");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../library/models/iddocument.model */
      "5usX");
      /**
       * Classe che identifica una linea oraria di una prenotazione (slot)
       */


      var SlotTime = /*#__PURE__*/function (_library_models_iddoc24) {
        _inherits(SlotTime, _library_models_iddoc24);

        var _super24 = _createSuper(SlotTime);

        function SlotTime(inizioTime, fineTime) {
          var _this91;

          _classCallCheck(this, SlotTime);

          _this91 = _super24.call(this);
          _this91.START = inizioTime;
          _this91.END = fineTime;
          _this91.STATO = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoSlot"].libero;
          return _this91;
        }
        /** Ritorna un array degli slot da impostare */


        _createClass(SlotTime, [{
          key: "changeDateInSlotTime",
          value:
          /**
           * Imposta a START e END l'orario presente ma sulla data passata
           * @param nuovaData Nuova data da applicare
           */
          function changeDateInSlotTime(nuovaData) {
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
        }], [{
          key: "getArrayStandardSlot",
          value: function getArrayStandardSlot(data, start, end, minuteSlot) {
            var arSlots = [];
            var startDate = new Date(data.anno, data.mese, data.giorno, start.ore, start.minuti, 0);
            var endDate = new Date(data.anno, data.mese, data.giorno, end.ore, end.minuti, 0);
            var countWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(startDate);
            var endWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(endDate);
            /** Mentre la data è inferiore o uguale */
            //while (countWrapper.isSameOrBefore(endWrapper)) {

            while (countWrapper.isBefore(endWrapper)) {
              //Al count aggiungo i minuti dello slot
              var endSlotWrapper = moment__WEBPACK_IMPORTED_MODULE_1__(countWrapper.toDate());
              endSlotWrapper.add(minuteSlot, 'm'); //Creo lo Slot

              var slotBlock = new SlotTime(countWrapper.toDate(), endSlotWrapper.toDate()); //Aggiungo all'array di ritorno

              arSlots.push(slotBlock); //Aumento il Count dei minuti di slot

              countWrapper.add(minuteSlot, 'm');
            }

            return arSlots;
          }
        }]);

        return SlotTime;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_3__["IDDocument"]);
      /***/

    },

    /***/
    "TP3D":
    /*!****************************************************!*\
      !*** ./src/app/models/utenteprenotazione.model.ts ***!
      \****************************************************/

    /*! exports provided: UtentePrenotazione */

    /***/
    function TP3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtentePrenotazione", function () {
        return UtentePrenotazione;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var UtentePrenotazione = /*#__PURE__*/function (_library_models_iddoc25) {
        _inherits(UtentePrenotazione, _library_models_iddoc25);

        var _super25 = _createSuper(UtentePrenotazione);

        function UtentePrenotazione(onlyInstance) {
          var _this92;

          _classCallCheck(this, UtentePrenotazione);

          _this92 = _super25.call(this, onlyInstance);

          if (!onlyInstance) {
            _this92.NUMPARTECIPANTI = 1;
          }

          return _this92;
        }

        _createClass(UtentePrenotazione, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(UtentePrenotazione.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
        }, {
          key: "setCollection",
          value: function setCollection(data) {}
          /**
           * Ritorna il descrittore della Struttura Campi
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDPRENOTAZIONE', 'IDAREAOPERATIVA', 'IDUTENTE', 'IDLOCATION', 'INDIRIZZOLOCATION', 'COMUNELOCATION', 'IDSPORT', 'DENOMINAZIONESPORT', 'IDCAMPO', 'DENOMINAZIONECAMPO'];
            var arNumber = ['NUMPARTECIPANTI'];
            var arNumberDecimal = ['DURATAORE'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
            var arTime = [];
            objDescriptor.className = 'UtentePrenotazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'UTENTEPRENOTAZIONE';
            objDescriptor.describeField = 'DATAORAINIZIO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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
        }]);

        return UtentePrenotazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "Ubxr":
    /*!***********************************************!*\
      !*** ./src/app/services/posizione.service.ts ***!
      \***********************************************/

    /*! exports provided: PosizioneService */

    /***/
    function Ubxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosizioneService", function () {
        return PosizioneService;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Geolocation;

      var PosizioneService = /*#__PURE__*/function () {
        function PosizioneService() {
          _classCallCheck(this, PosizioneService);
        }
        /**
         * La funzione restituisce una promise con la posizione attuale
         */


        _createClass(PosizioneService, [{
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return Geolocation.getCurrentPosition();
          }
          /**
          * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
          * @param listAree la lista delle aree tra cui cercare
          */

        }, {
          key: "getNearestArea",
          value: function getNearestArea(listAree) {
            var _this93 = this;

            return new Promise(function (resolve, reject) {
              var nearestArea; //Se ci sono delle aree

              if (listAree && listAree.length != 0) {
                //inizio a salvarmi la prima
                nearestArea = listAree[0]; //se è solo una ho finito

                if (listAree.length == 1) {
                  resolve(nearestArea);
                } else {
                  //se sono almeno due
                  //recupero la posizione attuale
                  _this93.getCurrentPosition().then(function (currentPosition) {
                    //se effettivamento ho la posizione, posso ciclare sull'array
                    for (var index = 1; index < listAree.length; index++) {
                      if (listAree[index].distanceFrom(currentPosition)) {
                        //se è possibile calcolare la distanza per quest'area (sono presenti lat e long)
                        if (listAree[index].distanceFrom(currentPosition) < nearestArea.distanceFrom(currentPosition)) {
                          //se l'area corrente è più vicina di quella memorizzata, la salvo
                          nearestArea = listAree[index];
                        }
                      }
                    } //ho finito, posso risolvere


                    resolve(nearestArea);
                  })["catch"](function (error) {
                    //errore, non ho recuperato la posizione
                    reject(error);
                  });
                }
              } else {
                //errore, non mi hanno passato le aree
                reject('Errore, lista aree vuota');
              }
            });
          }
        }]);

        return PosizioneService;
      }();

      PosizioneService.ɵfac = function PosizioneService_Factory(t) {
        return new (t || PosizioneService)();
      };

      PosizioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PosizioneService,
        factory: PosizioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "V6dt":
    /*!******************************************!*\
      !*** ./src/app/models/location.model.ts ***!
      \******************************************/

    /*! exports provided: Location */

    /***/
    function V6dt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Location", function () {
        return Location;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./locaton-image.model */
      "Lk4g");
      /* harmony import */


      var _campo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./campo.model */
      "R5r1");
      /* harmony import */


      var _aperturalocation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aperturalocation.model */
      "w5Je");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");

      var Location = /*#__PURE__*/function (_library_models_iddoc26) {
        _inherits(Location, _library_models_iddoc26);

        var _super26 = _createSuper(Location);

        function Location(onlyInstance) {
          var _this94;

          _classCallCheck(this, Location);

          _this94 = _super26.call(this, onlyInstance);
          _this94._LISTOCCUPAZIONI = [];
          _this94.LOCATIONIMAGE = [];
          _this94.CAMPO = [];
          _this94.APERTURALOCATION = [];

          if (!onlyInstance) {
            _this94.ENABLEPRENOTAZIONI = false;
            _this94.MINUTISLOTPRENOTAZIONE = 30;
            _this94.MINUTIPREAVVISOPRENOTAZIONE = 0; // Imposto una cover standard

            _this94.setStandardCover();
          }

          return _this94;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Location, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["Descriptor"]();
            var arString = ['IDAREAOPERATIVA', 'DENOMINAZIONE', 'INDIRIZZO', 'CAP', 'COMUNE', 'PROVINCIA', 'ISOSTATO', 'IMAGEURL', 'DESCRIZIONEMOB', 'TELEFONO', 'EMAIL', 'IDAZIENDACLIENTE'];
            var arNumber = ['MINUTISLOTPRENOTAZIONE', 'MINUTIPREAVVISOPRENOTAZIONE', 'APPVISIBILITY', 'MINUTIPREAVVISODELETEPRENOTAZIONE'];
            var arBoolean = ['FAVORITE', 'ENABLEPRENOTAZIONI', 'ENABLEDELETEPRENOTAZIONI'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['LOCATIONIMAGE', 'CAMPO', 'APERTURALOCATION'];
            objDescriptor.className = 'Location';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'LOCATION';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_4__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
            return objDescriptor;
          } // Sovrascrivo il metodo IDDocument

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo il metodo IDDocument
            _get(_getPrototypeOf(Location.prototype), "setJSONProperty", this).call(this, data); //Chiamo il metodo per le collection


            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Imposta una coverImage standard, eliminando le presenti
           */

        }, {
          key: "setStandardCover",
          value: function setStandardCover() {
            this.LOCATIONIMAGE = [];
            var standardImage = 'assets/img/cardhome_ge.png'; //Immagine Cover nell'oggetto

            this.IMAGEURL = standardImage; //Creo una immagine standard

            var newImage = new _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__["LocationImage"]();
            newImage.COVERIMAGE = true;
            newImage.IMAGEURL = standardImage; //Impostazione nell'Array

            this.LOCATIONIMAGE.push(newImage);
          }
          /** Ritorna il percorso da applicare al tag image */

        }, {
          key: "getUrlImage",
          value: function getUrlImage(tipoSocieta) {
            var returnImage = '';

            if (this.IMAGEURL) {
              returnImage = this.IMAGEURL;
            } else {
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
              } else {
                returnImage = 'assets/img/cardhome_ge.png';
              }
            }

            return returnImage;
          }
          /** Ritorna il numero di campi presenti nella Location */

        }, {
          key: "getNumCampi",
          value: function getNumCampi() {
            var numCampi = 0;

            if (this.CAMPO) {
              numCampi = this.CAMPO.length;
            }

            return numCampi;
          }
          /** Ritorna una copia dell'Array senza l'immagine di Cover */

        }, {
          key: "imageGallery",
          value: function imageGallery() {
            return _toConsumableArray(this.LOCATIONIMAGE.filter(function (element) {
              return !element.COVERIMAGE;
            }));
          } //#region COLLECTION SETTING

          /**
           * Imposta le collection dell'oggetto, con i reali oggetti tipizzati
           * @param data JSON Received
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            // Riazzero e ricreo le aperture
            this.APERTURALOCATION = []; //Sistemazione Immagini Location

            if (data.LOCATIONIMAGE) {
              this.setCollectionLocationImage(data);
            } //Sistemazione Aperture Location


            if (data.APERTURALOCATION) {
              this.setCollectionAperturaLocation(data);
            } //Sistenazione Campo


            if (data.CAMPO) {
              this.setCollectionCampo(data);
            }
          }
          /**
           * Inizializza la collection CAMPO con i dati ricevuti tipizzando gli oggetti
           * @param data JSON Received
           */

        }, {
          key: "setCollectionCampo",
          value: function setCollectionCampo(data) {
            var _this95 = this;

            if (data.CAMPO) {
              //Imposto gli elementi CAMPO in stato da eliminare
              //Utilizzando l'oggetto IDCollection
              _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"].setAllDeleting(this.CAMPO); // Ciclo sugli elementi arrivati


              data.CAMPO.forEach(function (elCampo) {
                // Cerco eventualmente il campo
                var docCampo = _this95.getCampoByID(elCampo.ID); //Campo non trovato


                if (!docCampo) {
                  docCampo = new _campo_model__WEBPACK_IMPORTED_MODULE_2__["Campo"]();
                  docCampo.setJSONProperty(elCampo);

                  _this95.CAMPO.push(docCampo);
                } else {
                  //Campo Trovato
                  docCampo.setJSONProperty(elCampo);
                  docCampo.do_deleted = false;
                }
              }); //Rimozione di tutti gli elementi non cancellati

              this.CAMPO = this.CAMPO.filter(function (element) {
                return !element.do_deleted;
              });
            }
          }
          /**
           * Inizializza la collection Apertura Location con oggetto tipizzati
           * @param data JSON Received
           */

        }, {
          key: "setCollectionAperturaLocation",
          value: function setCollectionAperturaLocation(data) {
            var _this96 = this;

            if (data.APERTURALOCATION) {
              data.APERTURALOCATION.forEach(function (elApertura) {
                var newDay = new _aperturalocation_model__WEBPACK_IMPORTED_MODULE_3__["AperturaLocation"]();
                newDay.setJSONProperty(elApertura);

                _this96.APERTURALOCATION.push(newDay);
              });
            }
          }
          /**
           * Imposta la collection delle LocationImage
           * @param data JSON Received
           */

        }, {
          key: "setCollectionLocationImage",
          value: function setCollectionLocationImage(data) {
            var _this97 = this;

            if (data.LOCATIONIMAGE) {
              if (data.LOCATIONIMAGE.length !== 0) {
                //Svuoto l'array
                this.LOCATIONIMAGE = []; //Ciclo sulle Location Image arrivate

                data.LOCATIONIMAGE.forEach(function (elImage) {
                  var newImage = new _locaton_image_model__WEBPACK_IMPORTED_MODULE_1__["LocationImage"]();
                  newImage.setJSONProperty(elImage);

                  _this97.LOCATIONIMAGE.push(newImage); // Se fosse l'immagine di Cover la imposto nell'oggetto


                  if (newImage.COVERIMAGE) {
                    _this97.IMAGEURL = newImage.IMAGEURL;
                  }
                });
              }
            }
          } //#endregion

        }, {
          key: "getCampoByID",
          value: function getCampoByID(id) {
            return this.CAMPO.find(function (element) {
              return element.ID == id;
            });
          }
          /**
           * Cicla su tutti i CAMPI presenti ed elimina
           * le informazioni CAMPOSPORT
           */

        }, {
          key: "emptyCampiSport",
          value: function emptyCampiSport() {
            this.CAMPO.forEach(function (elCampo) {
              elCampo.CAMPOSPORT = [];
            });
          }
          /**
           *
           * @param docCampoSport Campo Sport da aggiungere
           * @param idCampo IDCampo da prelevare
           */

        }, {
          key: "addCampoSport",
          value: function addCampoSport(docCampoSport, idCampo) {
            this.CAMPO.forEach(function (elCampo) {
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

        }, {
          key: "getNextCampo",
          value: function getNextCampo() {
            var idCampo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var myCampo;
            var isNext = false;

            if (this.CAMPO) {
              for (var index = 0; index < this.CAMPO.length; index++) {
                var elCampo = this.CAMPO[index]; //Senza idCampo il primo che trovo va bene

                if (!idCampo) {
                  myCampo = elCampo;
                  break;
                } else if (isNext) {
                  //Questo è quello che mi serve
                  myCampo = elCampo;
                  break;
                } else if (elCampo.ID == idCampo) {
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

        }, {
          key: "getCampoByIndex",
          value: function getCampoByIndex(indexZeroBase) {
            var myCampo;

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

        }, {
          key: "getAddressLocation",
          value: function getAddressLocation(shortVersion) {
            var value = '';

            if (shortVersion) {
              if (this.INDIRIZZO.length !== 0) {
                value = this.INDIRIZZO;
              } else if (this.COMUNE.length !== 0) {
                value = this.COMUNE;
              }
            } else {
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

        }, {
          key: "getAvalaibleFields",
          value: function getAvalaibleFields(idSport) {
            var arCampi = [];

            if (idSport) {
              if (this.CAMPO) {
                arCampi = this.CAMPO.filter(function (el) {
                  var trovato = false;

                  if (el.CAMPOSPORT) {
                    var _iterator = _createForOfIteratorHelper(el.CAMPOSPORT),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var iterator = _step.value;

                        if (iterator.IDSPORT == idSport) {
                          trovato = true;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  return trovato;
                });
              }
            }

            return arCampi;
          }
        }]);

        return Location;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "Vr4T":
    /*!***********************************************!*\
      !*** ./src/app/services/documento.service.ts ***!
      \***********************************************/

    /*! exports provided: DocumentoService */

    /***/
    function Vr4T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentoService", function () {
        return DocumentoService;
      });
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentoService = /*#__PURE__*/function () {
        function DocumentoService(apiCallService) {
          _classCallCheck(this, DocumentoService);

          this.apiCallService = apiCallService;
        }

        _createClass(DocumentoService, [{
          key: "request",
          value: function request(config, fileUrl) {
            var myHeaders; //Per ora non dichiaro un tipo (funziona lo stesso)
            //new HttpHeaders({'Content-type':'text/plain'});    

            var myUrl = config.urlFileServer + '/' + fileUrl;
            return this.apiCallService.httpGetFile(myUrl, myHeaders).toPromise();
          }
        }]);

        return DocumentoService;
      }();

      DocumentoService.ɵfac = function DocumentoService_Factory(t) {
        return new (t || DocumentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_0__["ApicallService"]));
      };

      DocumentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DocumentoService,
        factory: DocumentoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "W8X0":
    /*!*******************************************!*\
      !*** ./src/app/models/valuelist.model.ts ***!
      \*******************************************/

    /*! exports provided: TipoArea, SettoreAttivita, SettorePagamentiAttivita, TipoCampo, TipoCorso, StatoCorso, TipoSocieta, TipoSport, Mansione, Ruolo, TargetSesso, Sesso, Language, Giorni, StrutturaCampo, StatoSlot, TipoPrivateImage, StatoPrenotazione, AmbitoNews, PageType, TipoVerificaAccount, RequestPincodeUse, TipoArticolo, TipoPrezzo, TipoMasterDocumento, TipoChiusura, AttivitaChiusura, StatoPagamento, TipoRigoIncasso, PaymentChannel, PaymentEnvironment, PaymentMode, PaypalStatus, FileType, LocationAppVisibility, ModalitaFruizione, ValueList, Condition, RequestState, SegmentCorsi, StatoIscrizione, Mesi, TimeTrainerCourse, RangeSearch */

    /***/
    function W8X0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoArea", function () {
        return TipoArea;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettoreAttivita", function () {
        return SettoreAttivita;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettorePagamentiAttivita", function () {
        return SettorePagamentiAttivita;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCampo", function () {
        return TipoCampo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCorso", function () {
        return TipoCorso;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoCorso", function () {
        return StatoCorso;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoSocieta", function () {
        return TipoSocieta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoSport", function () {
        return TipoSport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mansione", function () {
        return Mansione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ruolo", function () {
        return Ruolo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TargetSesso", function () {
        return TargetSesso;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sesso", function () {
        return Sesso;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Language", function () {
        return Language;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Giorni", function () {
        return Giorni;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StrutturaCampo", function () {
        return StrutturaCampo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoSlot", function () {
        return StatoSlot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoPrivateImage", function () {
        return TipoPrivateImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoPrenotazione", function () {
        return StatoPrenotazione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmbitoNews", function () {
        return AmbitoNews;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageType", function () {
        return PageType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoVerificaAccount", function () {
        return TipoVerificaAccount;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestPincodeUse", function () {
        return RequestPincodeUse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoArticolo", function () {
        return TipoArticolo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoPrezzo", function () {
        return TipoPrezzo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoMasterDocumento", function () {
        return TipoMasterDocumento;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoChiusura", function () {
        return TipoChiusura;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttivitaChiusura", function () {
        return AttivitaChiusura;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoPagamento", function () {
        return StatoPagamento;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoRigoIncasso", function () {
        return TipoRigoIncasso;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentChannel", function () {
        return PaymentChannel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentEnvironment", function () {
        return PaymentEnvironment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentMode", function () {
        return PaymentMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalStatus", function () {
        return PaypalStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileType", function () {
        return FileType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationAppVisibility", function () {
        return LocationAppVisibility;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalitaFruizione", function () {
        return ModalitaFruizione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValueList", function () {
        return ValueList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Condition", function () {
        return Condition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestState", function () {
        return RequestState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegmentCorsi", function () {
        return SegmentCorsi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoIscrizione", function () {
        return StatoIscrizione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mesi", function () {
        return Mesi;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeTrainerCourse", function () {
        return TimeTrainerCourse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeSearch", function () {
        return RangeSearch;
      });

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
      })(PageType || (PageType = {})); //Questa lista non è presente in Inde ma memorizzata sul db nelle opzioni


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
      })(TipoRigoIncasso || (TipoRigoIncasso = {})); //Canali dove effettuare il pagamento, compreso onSite in contanti


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
      })(PaymentEnvironment || (PaymentEnvironment = {})); //Si puo' pagare in struttura, pagare subito, o con un bonifico


      var PaymentMode;

      (function (PaymentMode) {
        PaymentMode[PaymentMode["pagaStruttura"] = 10] = "pagaStruttura";
        PaymentMode[PaymentMode["pagaBonifico"] = 50] = "pagaBonifico";
        PaymentMode[PaymentMode["pagaAdesso"] = 200] = "pagaAdesso";
      })(PaymentMode || (PaymentMode = {})); //Stati possibili a seguito di una richiesta pagamento Paypal

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
      })(FileType || (FileType = {})); //Indica chi puo' visualizzare la location nell'app
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

      var ValueList = /*#__PURE__*/function () {
        /**
         *
         * @param valore Valore Elemento
         * @param descrizione Descrizione
         */
        function ValueList(valore, descrizione) {
          _classCallCheck(this, ValueList);

          this.value = valore;
          this.description = descrizione;
          this.selected = false;
        }
        /**
         * Decodifica un valore da una lista valori
         * @param objEnum Lista Valori da utilizzare
         * @param value Valore da decodificare
         */


        _createClass(ValueList, [{
          key: "esempioUso",
          value:
          /**
           * Esempio di utilizzo della decode
           */
          function esempioUso() {
            var label = '';
            label = ValueList.decode(SettoreAttivita, SettoreAttivita.settoreCorso);
          }
          /**
           * Preleva una etichetta senza Spazi ma in Camel Mode ed inserisce
           * uno spazio prima di ogni maiuscola
           * @param label Etichetta da convertira
           */

        }], [{
          key: "decode",
          value: function decode(objEnum, value) {
            var label = ''; // Proprietà presente

            if (objEnum.hasOwnProperty(value)) {
              // Ricavo l'identificativo dato all'Enum
              label = objEnum[value]; // Ora trasformo la label

              label = ValueList.convert(label);
            }

            return label;
          }
        }, {
          key: "convert",
          value: function convert(label) {
            var retLabel = '';
            var car = '';

            if (label) {
              for (var index = 0; index < label.length; index++) {
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

        }, {
          key: "getArray",
          value: function getArray(objEnum) {
            var retElements = [];
            Object.keys(objEnum).forEach(function (key) {
              if (ValueList.isNumber(key) == false) {
                var field = key;
                var value = objEnum[field];
                var decodifica = ValueList.decode(objEnum, value);
                var element = new ValueList(value, decodifica);
                retElements.push(element);
              }
            });
            return retElements;
          }
          /**
           * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
           * @param value Valore da controllare
           */

        }, {
          key: "isNumber",
          value: function isNumber(value) {
            return value != null && value !== '' && !isNaN(Number(value.toString()));
          }
        }]);

        return ValueList;
      }(); //#region LISTE VALORI INTERNE
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
      })(Mesi || (Mesi = {})); //Identifica un corso rispett ad oggi


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
      })(RangeSearch || (RangeSearch = {})); //#endregion

      /***/

    },

    /***/
    "WT0H":
    /*!****************************************!*\
      !*** ./src/app/models/valuta.model.ts ***!
      \****************************************/

    /*! exports provided: Valuta */

    /***/
    function WT0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Valuta", function () {
        return Valuta;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var Valuta = /*#__PURE__*/function (_library_models_iddoc27) {
        _inherits(Valuta, _library_models_iddoc27);

        var _super27 = _createSuper(Valuta);

        function Valuta() {
          _classCallCheck(this, Valuta);

          return _super27.apply(this, arguments);
        }

        _createClass(Valuta, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['DESCR', 'SIMBOLO', 'CODICEISO', 'ICONPREF'];
            var arNumber = ['NUMDECIMALI'];
            var arBoolean = ['PREDEFINITA'];
            var arDate = ['DATAOBSOLESCENZA'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'Valuta';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'VALUTA';
            objDescriptor.describeField = 'DESCR';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            return objDescriptor;
          }
        }]);

        return Valuta;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "WWZE":
    /*!********************************************!*\
      !*** ./src/app/services/utente.service.ts ***!
      \********************************************/

    /*! exports provided: UtenteService */

    /***/
    function WWZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtenteService", function () {
        return UtenteService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_utente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/utente.model */
      "AN5U");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/models/postResult.model */
      "uNYz");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_account_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../models/account.model */
      "KGuB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtenteService = /*#__PURE__*/function () {
        function UtenteService(apiService, docService) {
          _classCallCheck(this, UtenteService);

          this.apiService = apiService;
          this.docService = docService;
          this._utente = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]());
          this._utenteLoggato = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this._idAreaFAV = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](''); //Avvisa di cambiare l'Area Operativa

          this._userPicture = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        }

        _createClass(UtenteService, [{
          key: "utente",
          get: function get() {
            return this._utente.asObservable();
          }
        }, {
          key: "utenteLoggato",
          get: function get() {
            return this._utenteLoggato.asObservable();
          }
        }, {
          key: "actualLoggato",
          get: function get() {
            return this._utenteLoggato.getValue();
          }
        }, {
          key: "actualUtente",
          get: function get() {
            return this._utente.getValue();
          }
        }, {
          key: "userPicture",
          get: function get() {
            return this._userPicture.asObservable();
          }
          /**
           * Imposta la UserPicture
           * @param value DataUrl image
           */

        }, {
          key: "setUserPicture",
          value: function setUserPicture(dataUrl) {
            this._userPicture.next(dataUrl);
          }
          /**
           * Area Favorita dall'utente
           */

        }, {
          key: "idAreaFAV",
          get: function get() {
            return this._idAreaFAV.asObservable();
          }
          /**
           * Effettua la richiesta al Server con i dati dell'Utente
           * @param config Parametri di configurazione
           * @param username Username Utente
           * @param password Password Utente
           * @param forceIdArea Se impostata, l'area favorita dell'utente diventa questa
           */

        }, {
          key: "login",
          value: function login(username, password, myStartConfig, forceIdArea) {
            var _this98 = this;

            return new Promise(function (resolve, reject) {
              var myUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
              var jsonBody = '';
              var paramExp = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
              var myAccount = new _models_account_model__WEBPACK_IMPORTED_MODULE_8__["Account"]();
              var method = 'authLoginMob';
              var startConf; //Compilo un documento con login e password

              myUtente.WEBLOGIN = username;
              myUtente.INPUTPASSWORD = password; //Preparo esportazione

              paramExp.clearDOProperty = true;
              paramExp.clearPKProperty = true;
              paramExp.clearPrivateProperty = true;
              jsonBody = myUtente.exportToJSON(paramExp);
              jsonBody = "{\"docUtente\" : ".concat(jsonBody, "}"); //Disattivo il login utente

              _this98._utenteLoggato.next(false);

              _this98.docService.requestForFunction(myAccount, method, jsonBody).then(function (response) {
                var myUserAuthCode = ''; //Risposta ricevuta

                if (response.result) {
                  if (response.document) {
                    var docInResponse = response.document;
                    var docUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                    docUtente.setJSONProperty(docInResponse);
                    docUtente.WEBLOGIN = username;
                    docUtente.setOriginal(); //Imposto come tag authCode il codice di autorizzazione utente ricevuto

                    docUtente.setTagValue('authCode', response.code);
                    myUserAuthCode = response.code;
                    startConf = myStartConfig.getValue();
                    startConf.authorizationUserCode = response.code;
                    myStartConfig.next(startConf); //Emetto Utente

                    _this98._utente.next(docUtente); //Emetto il Boolean TRUE di avvenuto accesso


                    _this98._utenteLoggato.next(true); //Se devo forzare l'area preferita la imposto


                    if (forceIdArea && forceIdArea.length !== 0) {
                      docUtente.IDAREAOPERATIVA = forceIdArea;
                    } //Utente ha una area preferita


                    if (docUtente.IDAREAOPERATIVA) {
                      //Dovrei posizionarlo
                      _this98._idAreaFAV.next(docUtente.IDAREAOPERATIVA);
                    } //Emetto la risposta del server


                    resolve(response);
                  } else {
                    reject("User document not found");
                  }
                } else {
                  reject(response.message);
                } //Reimposto authorization code


                startConf = myStartConfig.getValue();
                startConf.authorizationUserCode = response.code;
                myStartConfig.next(startConf);
              })["catch"](function (error) {
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

        }, {
          key: "logoff",
          value: function logoff() {
            this._utenteLoggato.next(false);
          }
          /**
           * Richiede nuovamente al server i dati dell'utente (esattamente come al login); dopodichè il docutente viene riemesso aggiornato
           * @param authUserCode codice autorizzativo legato all'utente
           */

        }, {
          key: "updateClientData",
          value: function updateClientData() {
            var _this99 = this;

            return new Promise(function (resolve, reject) {
              var method = 'GetActiveUtente'; //Da decidere 

              var document = new _models_account_model__WEBPACK_IMPORTED_MODULE_8__["Account"](); //faccio la richiesta

              _this99.docService.requestForFunction(document, method).then(function (result) {
                if (result) {
                  var newUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                  newUtente.setJSONProperty(result);

                  _this99._utenteLoggato.next(true);

                  _this99._utente.next(newUtente);

                  resolve(newUtente);
                } else {
                  throw new Error('Nessuna risposta dal server');
                } //recupero l'utente
                //lo metto nella proprietà
                //riemetto il next della proprietà
                //risolvo

              })["catch"](function (error) {
                reject(error);
              });
            });
          }
          /**
           * Richiede al server l'aggiornamento dei dati Utente
           * @param config Dati di configurazione
           * @param docUtenteUpdate Documento Utente con dati modificati
           */

        }, {
          key: "requestUpdate",
          value: function requestUpdate(config, docUtenteUpdate) {
            var _this100 = this;

            return new Promise(function (resolve, reject) {
              var doObject = 'UTENTE';
              var metodo = 'updateUtente';
              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              var body = '';
              var myUrl = config.urlBase + '/' + doObject; //Body da inviare
              //Questi sono i parametri per l'esportazione

              var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = false;
              paramExport.clearPrivateProperty = true;
              paramExport.onlyPropertyModified = true;
              body = docUtenteUpdate.exportToJSON(paramExport);
              body = "{\"docUtente\": ".concat(body, "}"); //faccio la richiesta

              _this100.apiService.httpPost(myUrl, myHeaders, myParams, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (rawResponse) {
                return rawResponse.update;
              })).subscribe(function (response) {
                var myResponse = new _library_models_postResult_model__WEBPACK_IMPORTED_MODULE_5__["PostResponse"]();
                myResponse.result = response['result'];
                myResponse.message = response['message'];
                myResponse.document = response['document'];

                if (myResponse.result) {
                  var docUtente = new _models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"]();
                  var objDocument = myResponse.getDocument();

                  if (objDocument) {
                    //l'operazione è andata a buon fine, restituisco l'utente
                    docUtente.setJSONProperty(objDocument);

                    _this100._utente.next(docUtente);

                    resolve(docUtente);
                  } else {
                    reject('Errore ricezione dati server');
                  }
                } else {
                  //il server ha risposto, ma l'operazione non è andata a buon fine, restituisco il messaggio di errore
                  reject(response.message);
                }
              }, function (error) {
                //il server non ha risposto
                reject(error);
              });
            });
          }
        }, {
          key: "requestChangePassword",
          value: function requestChangePassword(config, oldPsw, newPsw) {
            var actualUtente = this._utente.getValue();

            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', 'CHANGEPWDMOB'); //  new HttpHeaders({'Content-type':'application/json',
            //                                    'X-HTTP-Method-Override':'CHANGEPWDMOB',
            //                                    'appid':config.appId
            //                                   });

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('GUIDUTENTE', actualUtente.ID).append('PWDATTUALE', oldPsw).append('PWDNUOVA', newPsw);
            var doObject = 'ACCOUNT';
            var myUrl = config.urlBase + '/' + doObject; // Ritorno la chiamata

            return this.apiService.httpGet(myUrl, myHeaders, myParams);
          } //#region FASI REGISTRAZIONE

          /**
           * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
           * @param config Dati di configurazione
           * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
           */

        }, {
          key: "registrationSendCodici",
          value: function registrationSendCodici(config, docRequestCode) {
            var _this101 = this;

            //Viene effettuata una chiamata al server per ottenere
            //l'invio di una mail e/o un SMS contenente codici PIN
            var metodo = 'registrationSendCodici';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docRequestCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyRequest = "{\"docRequest\" : ".concat(bodyRequest, "}"); //Faccio la chiamata POST

                _this101.apiService.httpPost(myUrl, myHeaders, myParams, bodyRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.activation;
                })).subscribe(function (response) {
                  if (response.result) {
                    resolve(response);
                  } else {
                    reject(response.message);
                  }
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          }
          /**
           * Invia al server una richiesta per verificare i pincode inseriti dall'utente
           * @param config Dati di configurazione
           * @param docVerifyCode Dati da verificare
           */

        }, {
          key: "registrationVerifyCodici",
          value: function registrationVerifyCodici(config, docVerifyCode) {
            var _this102 = this;

            var metodo = 'registrationVerifyCodici';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = "{\"docRequest\" : ".concat(bodyRequest, "}"); //Faccio la chiamata POST

                _this102.apiService.httpPost(myUrl, myHeaders, myParams, bodyRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.activation;
                })).subscribe(function (response) {
                  if (response.result) {
                    resolve(response);
                  } else {
                    reject(response.message);
                  }
                }, function (error) {
                  reject(error);
                });
              } else {
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

        }, {
          key: "registrationFinalize",
          value: function registrationFinalize(config, docUtente, docRequestCode) {
            var _this103 = this;

            //Viene inviato al server il documento per chiedere la registrazione utente
            var metodo = 'registrationFinalize';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var bodyUtente = '';
            var bodyFinal = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docRequestCode && docUtente) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyUtente = docUtente.exportToJSON(paramExport);
                bodyFinal = "{\"docRequest\" : ".concat(bodyRequest, ", \"docUtente\": ").concat(bodyUtente, "}"); //Faccio la chiamata POST

                _this103.apiService.httpPost(myUrl, myHeaders, myParams, bodyFinal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.activation;
                })).subscribe(function (response) {
                  if (response.result) {
                    resolve(response);
                  } else {
                    reject(response.message);
                  }
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          } //#endregion
          //#region  FASI RECUPERO PSW

          /**
           * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
           * @param config Dati di configurazione
           * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
           */

        }, {
          key: "recoverySendCodici",
          value: function recoverySendCodici(config, docRequestCode) {
            var _this104 = this;

            //Viene effettuata una chiamata al server per ottenere
            //l'invio di una mail e/o un SMS contenente codici PIN
            var metodo = 'recoverySendCodici';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docRequestCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramExport);
                bodyRequest = "{\"docRequest\" : ".concat(bodyRequest, "}"); //Faccio la chiamata POST

                _this104.apiService.httpPost(myUrl, myHeaders, myParams, bodyRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.recovery;
                })).subscribe(function (response) {
                  resolve(response);
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          }
          /**
            * Invia al server una richiesta per verificare i pincode inseriti dall'utente
            * @param config Dati di configurazione
            * @param docVerifyCode Dati da verificare
            */

        }, {
          key: "recoveryVerifyCodici",
          value: function recoveryVerifyCodici(config, docVerifyCode) {
            var _this105 = this;

            var metodo = 'recoveryVerifyCodici';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = "{\"docRequest\" : ".concat(bodyRequest, "}"); //Faccio la chiamata POST

                _this105.apiService.httpPost(myUrl, myHeaders, myParams, bodyRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.recovery;
                })).subscribe(function (response) {
                  resolve(response);
                }, function (error) {
                  reject(error);
                });
              } else {
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

        }, {
          key: "recoveryFinalize",
          value: function recoveryFinalize(config, docUtente, docRequestCode) {
            var _this106 = this;

            //Viene inviato al server il documento per chiedere la registrazione utente
            var metodo = 'recoveryFinalize';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var bodyUtente = '';
            var bodyFinal = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docRequestCode && docUtente) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;
                bodyRequest = docRequestCode.exportToJSON(paramReqExport); //Questi sono i parametri per l'esportazione

                var paramUteExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramUteExport.clearDOProperty = true;
                paramUteExport.clearPKProperty = false;
                paramUteExport.clearPrivateProperty = true;
                bodyUtente = docUtente.exportToJSON(paramUteExport);
                bodyFinal = "{\"docRequest\" : ".concat(bodyRequest, ", \"docUtente\": ").concat(bodyUtente, "}"); //Faccio la chiamata POST

                _this106.apiService.httpPost(myUrl, myHeaders, myParams, bodyFinal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.recovery;
                })).subscribe(function (response) {
                  resolve(response);
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          } //#endregion
          //#region VERIFICA CONTATTI

          /**
           * Invia al server la richiesta per inviare via Mail/SMS i codici per la procedura di verifica dei contatti
           * @param config Dati di configurazione
           * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
           */

        }, {
          key: "validationSendCodici",
          value: function validationSendCodici(config, docUtente, docRequestCode) {
            var _this107 = this;

            //Viene effettuata una chiamata al server per ottenere
            //l'invio di una mail e/o un SMS contenente codici PIN
            var metodo = 'validationSendCodici'; // const myHeaders = new HttpHeaders({'Content-type':'application/json',
            //                         'X-HTTP-Method-Override': metodo,
            //                         'appid':config.appId
            //                       });

            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var bodyUtente = '';
            var bodyFinal = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docRequestCode) {
                //Questi sono i parametri per l'esportazione
                var paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true; //Creo il body da inviare

                bodyRequest = docRequestCode.exportToJSON(paramReqExport); //Questi sono i parametri per l'esportazione

                var paramUteExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramUteExport.clearDOProperty = true;
                paramUteExport.clearPKProperty = false;
                paramUteExport.clearPrivateProperty = true;
                bodyUtente = docUtente.exportToJSON(paramUteExport);
                bodyFinal = "{\"docRequest\" : ".concat(bodyRequest, ", \"docUtente\": ").concat(bodyUtente, "}"); //Faccio la chiamata POST

                _this107.apiService.httpPost(myUrl, myHeaders, myParams, bodyFinal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.validation;
                })).subscribe(function (response) {
                  resolve(response);
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          }
          /**
          * Invia al server una richiesta per verificare i pincode inseriti dall'utente
          * @param config Dati di configurazione
          * @param docVerifyCode Dati da verificare
          */

        }, {
          key: "validationVerifyCodici",
          value: function validationVerifyCodici(config, docVerifyCode) {
            var _this108 = this;

            var metodo = 'validationVerifyCodici';
            var myHeaders = config.getHttpHeaders();
            myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var doObject = 'ACCOUNT';
            var bodyRequest = '';
            var myUrl = config.urlBase + '/' + doObject;
            return new Promise(function (resolve, reject) {
              if (docVerifyCode) {
                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                var paramReqExport = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramReqExport);
                bodyRequest = "{\"docRequest\" : ".concat(bodyRequest, "}"); //Faccio la chiamata POST

                _this108.apiService.httpPost(myUrl, myHeaders, myParams, bodyRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (received) {
                  return received.validation;
                })).subscribe(function (response) {
                  _this108.updateClientData().then(function () {
                    resolve(response);
                  })["catch"](function (error) {
                    reject(error);
                  });
                }, function (error) {
                  reject(error);
                });
              } else {
                reject('Dati mancanti per la richiesta');
              }
            });
          }
        }]);

        return UtenteService;
      }();

      UtenteService.ɵfac = function UtenteService_Factory(t) {
        return new (t || UtenteService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]));
      };

      UtenteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: UtenteService,
        factory: UtenteService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Wz4r":
    /*!****************************************************!*\
      !*** ./src/app/library/models/descriptor.model.ts ***!
      \****************************************************/

    /*! exports provided: TypeDefinition, TypeReflector, Descriptor */

    /***/
    function Wz4r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeDefinition", function () {
        return TypeDefinition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeReflector", function () {
        return TypeReflector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Descriptor", function () {
        return Descriptor;
      });

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


      var TypeReflector = /*#__PURE__*/function () {
        function TypeReflector(campoName, campoType, relDoc, relName) {
          _classCallCheck(this, TypeReflector);

          this._fieldName = campoName;
          this._fieldType = campoType;
          this._relFieldDoc = relDoc;
          this._relFieldName = relName; //Metto come chiave False, semmai la cambio dopo

          this._primaryKey = false; //Se fosse ID lo imposta come chiave primaria

          this._forceIfPrimaryKey();
        }

        _createClass(TypeReflector, [{
          key: "primaryKey",
          get: function get() {
            return this._primaryKey;
          },
          set: function set(value) {
            this._primaryKey = value;
          }
        }, {
          key: "fieldName",
          get: function get() {
            return this._fieldName;
          },
          set: function set(value) {
            this._fieldName = value; //Se fosse ID lo imposta come chiave primaria

            this._forceIfPrimaryKey();
          }
        }, {
          key: "fieldType",
          get: function get() {
            return this._fieldType;
          },
          set: function set(value) {
            this._fieldType = value;
          }
          /**
          * Forza impostando come primary Key un campo che si chiama ID
          */

        }, {
          key: "_forceIfPrimaryKey",
          value: function _forceIfPrimaryKey() {
            if (this._fieldName == 'ID') {
              this._primaryKey = true;
            }
          }
        }, {
          key: "relFieldDoc",
          get: function get() {
            return this._relFieldDoc;
          },
          set: function set(value) {
            this._relFieldDoc = value;
          }
        }, {
          key: "relFieldName",
          get: function get() {
            var strReturn = '';

            if (this._relFieldDoc && this._relFieldDoc.length !== 0) {
              if (this._relFieldName && this._relFieldName) {
                strReturn = this._relFieldName;
              } else {
                strReturn = 'ID';
              }
            }

            return strReturn;
          },
          set: function set(value) {
            this._relFieldName = value;
          }
          /**
           * Ritorna TRUE se il campo è parte di un servizio Documentale
           * ID, do_deleted etc...
           */

        }, {
          key: "serviceField",
          value: function serviceField() {
            var value = false;
            var arServizi = ['ID', 'do_updated', 'do_loaded', 'do_inserted', 'do_deleted'];

            if (arServizi.includes(this._fieldName)) {
              value = true;
            }

            return value;
          }
          /**
           * Ritorna TRUE se il campo è un campo presente anche sul server
           */

        }, {
          key: "nativeField",
          value: function nativeField() {
            var value = true;

            if (this._fieldName.substr(0, 1) == '_') {
              // I campi che iniziano con _ sono privati di solito di Lookup
              value = false;
            }

            return value;
          }
          /**
           * Controlla e indica se ha una relazione il campo
           */

        }, {
          key: "isForeignKey",
          get: function get() {
            var result = false;

            if (this._relFieldDoc) {
              result = true;
            }

            return result;
          }
        }]);

        return TypeReflector;
      }();
      /**
       * Classe per Tipizzare intere classi
       */


      var Descriptor = /*#__PURE__*/function () {
        function Descriptor() {
          _classCallCheck(this, Descriptor);

          this.fields = [];
          this._doRemote = false;
          this.add('ID', TypeDefinition["char"]);
          this.add('do_updated', TypeDefinition["boolean"]);
          this.add('do_loaded', TypeDefinition["boolean"]);
          this.add('do_inserted', TypeDefinition["boolean"]);
          this.add('do_deleted', TypeDefinition["boolean"]);
        }

        _createClass(Descriptor, [{
          key: "className",
          get: function get() {
            return this._className;
          },
          set: function set(value) {
            this._className = value;

            if (!this._classWebApiName || this._classWebApiName.length == 0) {
              this._classWebApiName = value;
            }
          }
        }, {
          key: "classWebApiName",
          get: function get() {
            return this._classWebApiName;
          },
          set: function set(value) {
            this._classWebApiName = value;
          }
        }, {
          key: "describeField",
          get: function get() {
            return this._describeField;
          },
          set: function set(value) {
            this._describeField = value;
          }
        }, {
          key: "doRemote",
          get: function get() {
            return this._doRemote;
          },
          set: function set(value) {
            this._doRemote = value;
          }
          /**
           * Ritorna un array con i campi foreignkey
           */

        }, {
          key: "foreignKeys",
          get: function get() {
            var arForeign = [];

            if (this.fields) {
              for (var index = 0; index < this.fields.length; index++) {
                var element = this.fields[index];
                var isForeign = element.isForeignKey;

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

        }, {
          key: "primaryKeyFieldName",
          get: function get() {
            var field;
            var fieldName = '';
            field = this.fields.find(function (elField) {
              return elField.primaryKey == true;
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

        }, {
          key: "add",
          value: function add(campoName, campoType, relDoc, relField) {
            var typeR = new TypeReflector(campoName, campoType, relDoc, relField); //Se non esiste lo aggiungo

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

        }, {
          key: "setRelation",
          value: function setRelation(fieldName, relDoc, relFieldName) {
            var findField = this.fields.find(function (el) {
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

        }, {
          key: "addMultiple",
          value: function addMultiple(arrayCampoName, campoType) {
            var _this109 = this;

            if (arrayCampoName) {
              arrayCampoName.forEach(function (element) {
                _this109.add(element, campoType);
              });
            }
          }
          /**
           * Aggiunge una collection alla struttura
           * @param collectionName Nome Collection
           * @param relDoc Riferimento ai documenti contenuti nella collection
           * @param relFieldName Nome campo nel documento di riferimento che crea il legame
           */

        }, {
          key: "addCollection",
          value: function addCollection(collectionName, relDoc, relFieldName) {
            var newField;

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

        }, {
          key: "getType",
          value: function getType(campoName) {
            var retType = TypeDefinition.undefined;
            var elType = this.fields.find(function (element) {
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

        }, {
          key: "getByFieldName",
          value: function getByFieldName(fieldName) {
            return this.fields.find(function (el) {
              return el.fieldName == fieldName;
            });
          }
          /**
           * Ritorna se presente una collection passata come parametro
           * @param collectionName Nome Collection
           */

        }, {
          key: "getByCollectionName",
          value: function getByCollectionName(collectionName) {
            var collFind;
            collFind = this.fields.find(function (elField) {
              return elField.fieldName == collectionName && elField.fieldType == TypeDefinition.collection;
            });
            return collFind;
          }
          /**
           * Controlla che la collection passata come parametro esista nel documento
           * @param collectionName Nome Collection
           */

        }, {
          key: "hasCollection",
          value: function hasCollection(collectionName) {
            var exist = false;
            var collFind;
            collFind = this.fields.find(function (elField) {
              return elField.fieldName == collectionName && elField.fieldType == TypeDefinition.collection;
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

        }, {
          key: "hasFieldName",
          value: function hasFieldName(fieldName) {
            var exist = false;
            var fieldFind;
            fieldFind = this.fields.find(function (elField) {
              return elField.fieldName == fieldName;
            });

            if (fieldFind) {
              exist = true;
            }

            return exist;
          }
        }]);

        return Descriptor;
      }();
      /***/

    },

    /***/
    "X/Aa":
    /*!******************************************!*\
      !*** ./src/app/models/ricevuta.model.ts ***!
      \******************************************/

    /*! exports provided: MasterDocumento */

    /***/
    function XAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterDocumento", function () {
        return MasterDocumento;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var MasterDocumento = /*#__PURE__*/function (_library_models_iddoc28) {
        _inherits(MasterDocumento, _library_models_iddoc28);

        var _super28 = _createSuper(MasterDocumento);

        function MasterDocumento() {
          var onlyInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _classCallCheck(this, MasterDocumento);

          return _super28.call(this, onlyInstance);
        }

        _createClass(MasterDocumento, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDANAGRAFICA', 'NOTESSTAMPA', 'IDVALUTA', 'SERIE', 'NUMEROSTAMPA'];
            var arBoolean = [];
            var arDate = ['DATADOCUMENTO'];
            var arDateTime = [];
            var arNumber = ['NUMERODOCUMENTO', 'TOTDOCUMENTO', 'TIPOLOGIA', 'ANNO'];
            objDescriptor.className = 'MasterDocumento';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'MASTERDOCUMENTO';
            objDescriptor.describeField = 'NOTESSTAMPA';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            return objDescriptor;
          }
        }]);

        return MasterDocumento;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "YbkB":
    /*!************************************************!*\
      !*** ./src/app/services/newseventi.service.ts ***!
      \************************************************/

    /*! exports provided: NewseventiService */

    /***/
    function YbkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewseventiService", function () {
        return NewseventiService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_newsevento_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/newsevento.model */
      "h27B");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewseventiService = /*#__PURE__*/function () {
        function NewseventiService(apiService) {
          _classCallCheck(this, NewseventiService);

          this.apiService = apiService;
          this._listNews = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(NewseventiService, [{
          key: "listNews",
          get: function get() {
            return this._listNews.asObservable();
          }
          /**
           * Aggiunge una news
           * @param objNews News da aggiungere
           */

        }, {
          key: "addNews",
          value: function addNews(objNews) {
            var _this110 = this;

            this.listNews.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collNews) {
              var findElement = collNews.find(function (element) {
                return element.ID == objNews.ID;
              });

              if (!findElement) {
                _this110._listNews.next(collNews.concat(objNews));
              }
            });
          }
          /**
           * Crea il Parametro Filtro per il campo PUBBLICATADAL
           */

        }, {
          key: "getFilterDateTime",
          value: function getFilterDateTime() {
            var adesso = new Date();
            var newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
            var strAdesso = newDoc.formatDateTimeISO(adesso);
            strAdesso = '<' + strAdesso;
            return strAdesso;
          }
          /** Recupera una News e la torna Observable,
           *
           * @param config Configurazione
           * @param idNews News ricercata
           * */

        }, {
          key: "getNewsById",
          value: function getNewsById(idNews) {
            var news = this._listNews.getValue().find(function (element) {
              return element.ID == idNews;
            });

            return news;
          }
          /**
           * Richiede al server la news
           * @param config Dati configurazione
           * @param idNews News da richiedere al server
           */

        }, {
          key: "_requestServerById",
          value: function _requestServerById(config, idNews) {
            var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

            var doObject = 'NEWSEVENTO';
            var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto l'area richiesta

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idNews);
            return this.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              var arReturn = [];

              if (data.NEWSEVENTO) {
                arReturn = data.NEWSEVENTO;
              }

              return arReturn;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
          }
          /**
           *
           * @param config Parametri di configurazione
           * @param guidArea GUID Area di riferimento
           * @param n Numero massimo di elementi
           * @returns Promise<NewsEvento[]>
           */

        }, {
          key: "request",
          value: function request(config, guidArea, n) {
            var _this111 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'NEWSEVENTO';
              myHeaders = myHeaders.append('X-HTTP-Method-Override', 'GETNEXTNEWS');
              var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto l'area richiesta

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('guidArea', guidArea);
              myParams = myParams.append('$top', n + '');

              _this111.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                var arReturn = [];

                if (data.NEWSEVENTO) {
                  arReturn = data.NEWSEVENTO;
                }

                return arReturn;
              })).subscribe(function (myListReceived) {
                var myListNews = [];

                for (var index = 0; index < myListReceived.length; index++) {
                  var objElement = myListReceived[index]; //Creo un nuovo oggetto

                  var newsEvento = new _models_newsevento_model__WEBPACK_IMPORTED_MODULE_4__["NewsEvento"](); //Copio le proprietà

                  newsEvento.setJSONProperty(objElement); //Inserisco nell'array

                  myListNews.push(newsEvento);
                } //La Promise ritorna l'elenco news


                resolve(myListNews);
              }, function (error) {
                reject(error);
              });
            });
          }
        }]);

        return NewseventiService;
      }();

      NewseventiService.ɵfac = function NewseventiService_Factory(t) {
        return new (t || NewseventiService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]));
      };

      NewseventiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: NewseventiService,
        factory: NewseventiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");
      /* harmony import */


      var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/locales/it */
      "1IWC");
      /* harmony import */


      var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu");
      /* harmony import */


      var _library_services_crypto_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./library/services/crypto.service */
      "1pu4");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default.a, 'it');

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
          useValue: 'it'
        }, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"], _library_services_crypto_service__WEBPACK_IMPORTED_MODULE_15__["CryptoService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"]]
        });
      })();
      /***/

    },

    /***/
    "b5Gy":
    /*!*****************************************************!*\
      !*** ./src/app/models/pianificazionecorso.model.ts ***!
      \*****************************************************/

    /*! exports provided: PianificazioneCorso */

    /***/
    function b5Gy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PianificazioneCorso", function () {
        return PianificazioneCorso;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _corsopresenze_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./corsopresenze.model */
      "vl3Y");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../library/models/mydatetime.model */
      "K4nM");

      var PianificazioneCorso = /*#__PURE__*/function (_library_models_iddoc29) {
        _inherits(PianificazioneCorso, _library_models_iddoc29);

        var _super29 = _createSuper(PianificazioneCorso);

        function PianificazioneCorso(onlyInstance) {
          var _this112;

          _classCallCheck(this, PianificazioneCorso);

          _this112 = _super29.call(this, onlyInstance);
          _this112.CORSOPRESENZE = [];
          return _this112;
        }
        /**
         * Imposta le proprietà nell'oggetto
         * @param data JSON Received
         */


        _createClass(PianificazioneCorso, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo IDDOcument
            _get(_getPrototypeOf(PianificazioneCorso.prototype), "setJSONProperty", this).call(this, data); //Imposto la collection


            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
          /**
           * Sistema le collection se presenti
           * @param data JSON Ricevuto
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            this.CORSOPRESENZE = [];

            if (data.CORSOPRESENZE) {
              this.setCollectionCorsoPresenze(data.CORSOPRESENZE);
            }
          }
          /**
           * Imposta la collection CorsoPresenze
           * @param arPresenze JSON Ricevuti
           */

        }, {
          key: "setCollectionCorsoPresenze",
          value: function setCollectionCorsoPresenze(arPresenze) {
            var _this113 = this;

            this.CORSOPRESENZE = [];

            if (arPresenze) {
              arPresenze.forEach(function (element) {
                // Ricerco se esiste già
                var newProgramma = new _corsopresenze_model__WEBPACK_IMPORTED_MODULE_3__["CorsoPresenze"]();
                newProgramma.setJSONProperty(element);

                _this113.CORSOPRESENZE.push(newProgramma);
              });
            }
          }
          /**
          * Ritorna il descrittore della Struttura Campi
          */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDCORSO', 'IDAREAOPERATIVA', 'IDLOCATION', 'IDCAMPO', 'NOTEADMIN', 'NOTETRAINER'];
            var arNumber = ['VALUEGIORNO', 'ORELEZIONE'];
            var arBoolean = ['MULTIPLA'];
            var arDate = ['DATA'];
            var arDateTime = ['DATAORAINIZIO', 'DATAORAFINE'];
            var arTime = ['ORAINIZIO'];
            objDescriptor.className = 'PianificazioneCorso';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'PIANIFICAZIONECORSO';
            objDescriptor.describeField = 'DATA';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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
        }, {
          key: "eventoPassato",
          value:
          /**
           * Ritorna TRUE, FALSE a seconda se
           * l'evento è passato o no
           */
          function eventoPassato() {
            return new Date() > this.DATAORAFINE;
          }
          /**
           * Ritorna un valore che indica se la pianificazioneCorso è aggiornabile nelle presenze.
           * @param gapOre Numero Positivo che indica quante ore di tempo di hanno dalla fine del corso per aggiornare le presenze
           */

        }, {
          key: "canUpdatePresenze",
          value: function canUpdatePresenze(gapOre) {
            var canUpdate = true;
            var now = new Date(); //Non è ancora iniziato

            if (now < this.DATAORAINIZIO) {
              canUpdate = false;
            } else {
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

        }, {
          key: "msgCanUpdatePresenze",
          value: function msgCanUpdatePresenze(gapOre) {
            var strReturn = '';
            var now = new Date(); //E' troppo presto

            if (now < this.DATAORAINIZIO) {
              strReturn = 'Non è ancora possibile modificare le presenze di questa lezione';
              strReturn = 'E\' possibile modificare le presenze dal ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatDate(this.DATAORAINIZIO, 'DD/MM/YYYY') + ' dalle ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatTime(this.DATAORAINIZIO, false);
            } else {
              //In teoria potrei aggiornare le presenze
              if (gapOre == 0) {
                strReturn = 'Clicca su ogni partecipante per impostare la presenza/assenza';
              } else {
                //Possiamo aggiornarle
                if (this.canUpdatePresenze(gapOre)) {
                  //recupero la data entro cui è possibile aggiornare
                  var scadenza = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].calcola(this.DATAORAFINE, gapOre, _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["TypePeriod"].hours); //la converto in stringa


                  var strScadenza = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_4__["MyDateTime"].formatDate(scadenza, 'DD/MM/YY');

                  strReturn = 'Clicca su ogni partecipante per impostare la presenza/assenza, presenze aggiornabili fino al ' + strScadenza;
                } else {
                  strReturn = 'Non è più possibile modificare le presenze di questa lezione';
                }
              }
            }

            return strReturn;
          }
        }], [{
          key: "getReqForeignKeys",
          value: function getReqForeignKeys() {
            var arRequest = [];
            var objForeign;
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
        }]);

        return PianificazioneCorso;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "ci2e":
    /*!****************************************************!*\
      !*** ./src/app/models/tipodocumentazione.model.ts ***!
      \****************************************************/

    /*! exports provided: TipoDocumentazione, ClasseDocumento, SorgenteFile */

    /***/
    function ci2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoDocumentazione", function () {
        return TipoDocumentazione;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClasseDocumento", function () {
        return ClasseDocumento;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorgenteFile", function () {
        return SorgenteFile;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var TipoDocumentazione = /*#__PURE__*/function (_library_models_iddoc30) {
        _inherits(TipoDocumentazione, _library_models_iddoc30);

        var _super30 = _createSuper(TipoDocumentazione);

        function TipoDocumentazione(onlyInstance) {
          _classCallCheck(this, TipoDocumentazione);

          return _super30.call(this, onlyInstance);
        }

        _createClass(TipoDocumentazione, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['DENOMINAZIONE', 'ZORDER'];
            var arNumber = ['CLASSE'];
            objDescriptor.className = 'TipoDocumentazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'TIPODOCUMENTAZIONE';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            return objDescriptor;
          }
        }]);

        return TipoDocumentazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);

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
      /***/

    },

    /***/
    "daHO":
    /*!*****************************************************!*\
      !*** ./src/app/services/coursescheduler.service.ts ***!
      \*****************************************************/

    /*! exports provided: CourseschedulerService */

    /***/
    function daHO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseschedulerService", function () {
        return CourseschedulerService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/pianificazionecorso.model */
      "b5Gy");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_log_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/log.model */
      "Ag5x");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CourseschedulerService = /*#__PURE__*/function () {
        function CourseschedulerService(apiService, docStructureService) {
          _classCallCheck(this, CourseschedulerService);

          this.apiService = apiService;
          this.docStructureService = docStructureService;
          this._calendarioCorso = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._listImpegniTrainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        }

        _createClass(CourseschedulerService, [{
          key: "calendarioCorso",
          get: function get() {
            return this._calendarioCorso.asObservable();
          }
          /**
          * recupero la lista degli impegni del trainer (observable)
          */

        }, {
          key: "listImpegniTrainer",
          get: function get() {
            return this._listImpegniTrainer.asObservable();
          }
          /**
          * Effettua una chiamata al server per il recupero dei corsi
          * Utilizzare il documento di Filtro per richiedere dati filtrati
          * @param config Parametri di configurazione
          * @param idCorso Corso Richiesto
          */

        }, {
          key: "requestCalendario",
          value: function requestCalendario(config, idCorso) {
            var _this114 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              var doObject = 'PIANIFICAZIONECORSO';
              var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto il corso richiesto

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDCORSO', idCorso); //Elimino le schedulazioni presenti

              _this114.emptyCalendario();

              _this114.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.PIANIFICAZIONECORSO;
              })).subscribe(function (resultData) {
                if (resultData) {
                  resultData.forEach(function (element) {
                    var newCorsoCalendario = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"]();
                    newCorsoCalendario.setJSONProperty(element);

                    _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogApp"].consoleLog(newCorsoCalendario);

                    _this114.addCorsoCalendario(newCorsoCalendario);

                    resolve();
                  }, function (error) {
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

        }, {
          key: "addCorsoCalendario",
          value: function addCorsoCalendario(objCorsoScheduler) {
            var _this115 = this;

            this.calendarioCorso.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collCalendario) {
              _this115._calendarioCorso.next(collCalendario.concat(objCorsoScheduler));
            });
          }
          /**
           * Aggiunge una pianificazione alla lista Trainer
           * @param docPianificazione Documento di Pianificazione
           */

        }, {
          key: "addImpegnotrainer",
          value: function addImpegnotrainer(docPianificazione) {
            var _this116 = this;

            this.listImpegniTrainer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collListImpegni) {
              _this116._listImpegniTrainer.next(collListImpegni.concat(docPianificazione));
            });
          }
          /**
           * Svuota il calendario presente
           */

        }, {
          key: "emptyCalendario",
          value: function emptyCalendario() {
            this._calendarioCorso.next([]);
          }
          /**
           * Svuotare la lista degli impegni del trainer
           */

        }, {
          key: "emptyListImpegniTrainer",
          value: function emptyListImpegniTrainer() {
            this._listImpegniTrainer.next([]);
          }
          /**
           * richiede al server gli impegni del trainer con id specificato. ritorna la lista tramite Promise. sulla lista vengono anche effettuate le decodifiche
           *
           * @param idRef l'id del trainer
           * @param dataInizio data di inizio
           * @param dataFine data di fine
           */

        }, {
          key: "requestImpegniTrainer",
          value: function requestImpegniTrainer(idRef, dataInizio, dataFine) {
            var _this117 = this;

            return new Promise(function (resolve, reject) {
              var methodName = 'getPianificazioniTrainer';
              var document = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"](true);

              if (!dataFine && !dataInizio) {
                dataInizio = new Date();
                dataFine = new Date();
              } else if (!dataInizio && dataFine) {
                dataInizio = dataFine;
              } else if (dataInizio && !dataFine) {
                dataFine = dataInizio;
              }

              var params = {
                'idRef': idRef,
                'dataInizio': _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__["MyDateTime"].formatDateISO(dataInizio),
                'dataFine': _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_7__["MyDateTime"].formatDateISO(dataFine)
              };

              _this117.docStructureService.requestForFunction(document, methodName, JSON.stringify(params)).then(function (response) {
                var requestDecode = false; //Svuotiamo la lista attuale

                _this117.emptyListImpegniTrainer();

                if (response.PIANIFICAZIONECORSO) {
                  if (Array.isArray(response.PIANIFICAZIONECORSO)) {
                    /* Ciclo sull'Array ricevuto */
                    for (var index = 0; index < response.PIANIFICAZIONECORSO.length; index++) {
                      requestDecode = true;
                      var element = response.PIANIFICAZIONECORSO[index];
                      var docPianificazioneCorso = new _models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"]();
                      docPianificazioneCorso.setJSONProperty(element); //qui reupero anche il documento livello e me lo salvo nel repository

                      var addToRepository = false; //Chiedo altri dati

                      _this117.docStructureService.getRelDoc(docPianificazioneCorso, ['IDCORSO', 'IDLIVELLOENTRATA'], 1, docPianificazioneCorso);

                      _this117.addImpegnotrainer(docPianificazioneCorso);
                    }

                    if (requestDecode) {
                      //Recupero la lista Impegni
                      var listPianificazioni = _this117._listImpegniTrainer.getValue(); //Chiamo la decodifica collection della lista


                      _this117.docStructureService.decodeCollection(listPianificazioni).then(function () {
                        //Riemetto Observable
                        _this117._listImpegniTrainer.next(listPianificazioni); //Riemetto la resolve


                        resolve(_this117._listImpegniTrainer.getValue());
                      })["catch"](function (error) {
                        console.log(error);
                        reject(error);
                      });
                    } else {
                      //Risolvere con la lista attuale (che sarà vuota)
                      resolve(_this117._listImpegniTrainer.getValue());
                    }
                  } else {
                    //Risolvere con la lista attuale (che sarà vuota)
                    resolve(_this117._listImpegniTrainer.getValue());
                  }
                } else {
                  //Risolvere con la lista attuale (che sarà vuota)
                  resolve(_this117._listImpegniTrainer.getValue());
                }
              })["catch"](function (error) {
                console.log(error);
                reject(error);
              });
            });
          }
          /**
           * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
           * @param idPianificazione l'id della pianificazione da recuperare
           */

        }, {
          key: "getPianificazioneTrainerById",
          value: function getPianificazioneTrainerById(idPianificazione) {
            var elem = this._listImpegniTrainer.getValue().find(function (elem) {
              return elem.ID == idPianificazione;
            });

            return elem;
          }
          /**
           * Richiede al server le presenze della pianificazione passata e le inserisce all'interno della stessa
           * @param docPianificazione IL documento in cui inserire le presenze
           */

        }, {
          key: "insertPresenze",
          value: function insertPresenze(docPianificazione) {
            var _this118 = this;

            return new Promise(function (resolve, reject) {
              var collName = 'CORSOPRESENZE';

              _this118.docStructureService.loadCollection(docPianificazione, collName).then(function () {
                resolve(docPianificazione);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "updatePresenze",
          value: function updatePresenze(docPianificazione) {
            var _this119 = this;

            return new Promise(function (res, rej) {
              var myPostParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["PostParams"]();
              myPostParams.key = 'docPianificazione';
              myPostParams.value = docPianificazione;
              myPostParams.exportOnlyPropertyModified = true;
              myPostParams.exportOnlyDocModified = true;

              _this119.docStructureService.requestForFunction(docPianificazione, 'updatePresenze', null, myPostParams).then(function (response) {
                res(response);
              })["catch"](function (error) {
                rej(error);
              });
            });
          }
        }]);

        return CourseschedulerService;
      }();

      CourseschedulerService.ɵfac = function CourseschedulerService_Factory(t) {
        return new (t || CourseschedulerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__["DocstructureService"]));
      };

      CourseschedulerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: CourseschedulerService,
        factory: CourseschedulerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "eF/0":
    /*!**********************************************!*\
      !*** ./src/app/models/datachiusura.model.ts ***!
      \**********************************************/

    /*! exports provided: DataChiusura */

    /***/
    function eF0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataChiusura", function () {
        return DataChiusura;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var DataChiusura = /*#__PURE__*/function (_library_models_iddoc31) {
        _inherits(DataChiusura, _library_models_iddoc31);

        var _super31 = _createSuper(DataChiusura);

        function DataChiusura() {
          var onlyInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          _classCallCheck(this, DataChiusura);

          return _super31.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(DataChiusura, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDAREA', 'IDLOCATION', 'IDCAMPO', 'NOTES', 'MOTIVAZIONE'];
            var arNumber = ['TIPOCHIUSURA', 'ATTIVITACHIUSURA'];
            var arBoolean = [];
            var arDate = ['DATADAL', 'DATAAL'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'DataChiusura';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'DATACHIUSURA';
            objDescriptor.describeField = 'MOTIVAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
            objDescriptor.setRelation('IDLOCATION', 'Location');
            objDescriptor.setRelation('IDCAMPO', 'Campo');
            return objDescriptor;
          }
        }]);

        return DataChiusura;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "eRJB":
    /*!*********************************************************!*\
      !*** ./src/app/models/corsovalutazionelivello.model.ts ***!
      \*********************************************************/

    /*! exports provided: CorsoValutazioneLivello */

    /***/
    function eRJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoValutazioneLivello", function () {
        return CorsoValutazioneLivello;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var CorsoValutazioneLivello = /*#__PURE__*/function (_library_models_iddoc32) {
        _inherits(CorsoValutazioneLivello, _library_models_iddoc32);

        var _super32 = _createSuper(CorsoValutazioneLivello);

        function CorsoValutazioneLivello(onlyInstance) {
          _classCallCheck(this, CorsoValutazioneLivello);

          return _super32.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(CorsoValutazioneLivello, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDCORSO', 'IDCORSOVALUTAZIONE', 'IDUTENTE', 'NOMINATIVO', 'IDSPORT', 'IDLIVELLOENTRATA', 'IDLIVELLOFINALE'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'CorsoValutazioneLivello';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CORSOVALUTAZIONELIVELLO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
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
        }]);

        return CorsoValutazioneLivello;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "h++G":
    /*!******************************************!*\
      !*** ./src/app/models/arealink.model.ts ***!
      \******************************************/

    /*! exports provided: AreaLink */

    /***/
    function hG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaLink", function () {
        return AreaLink;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var AreaLink = /*#__PURE__*/function (_library_models_iddoc33) {
        _inherits(AreaLink, _library_models_iddoc33);

        var _super33 = _createSuper(AreaLink);

        function AreaLink(onlyInstance) {
          _classCallCheck(this, AreaLink);

          return _super33.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(AreaLink, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREAOPERATIVA', 'REFERURL'];
            var arNumber = ['TIPOURL'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'AreaLink';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'AREALINK';
            objDescriptor.describeField = 'REFERURL';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection); //Aggiungo le relazioni

            objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
            return objDescriptor;
          }
          /**
           * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
           * @param data JSON Received
           */

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(AreaLink.prototype), "setJSONProperty", this).call(this, data);

            this.setOriginal();
          }
        }]);

        return AreaLink;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "h27B":
    /*!********************************************!*\
      !*** ./src/app/models/newsevento.model.ts ***!
      \********************************************/

    /*! exports provided: NewsEvento */

    /***/
    function h27B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsEvento", function () {
        return NewsEvento;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var NewsEvento = /*#__PURE__*/function (_library_models_iddoc34) {
        _inherits(NewsEvento, _library_models_iddoc34);

        var _super34 = _createSuper(NewsEvento);

        function NewsEvento(onlyInstance) {
          var _this120;

          _classCallCheck(this, NewsEvento);

          _this120 = _super34.call(this, onlyInstance);

          if (!onlyInstance) {
            _this120._NAMEICON = 'newspaper-outline';
            _this120._COLOR = 'secondary';
          }

          return _this120;
        }
        /**
         * Imposta le proprietà della classe
         * @param data JSON Data
         */


        _createClass(NewsEvento, [{
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(NewsEvento.prototype), "setJSONProperty", this).call(this, data);
          }
          /**
           * Ritorna il descrittore della Struttura Campi
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['TITLE', 'SUBTITLE', 'SHORTTEXT', 'LINKNEWS', 'LINKIMAGE', 'IDLOCATION', 'IDAREAOPERATIVA'];
            var arNumber = ['AMBITO'];
            var arNumberDecimal = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = ['PUBBLICATADAL'];
            var arTime = [];
            objDescriptor.className = 'NewsEvento';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'NEWSEVENTO';
            objDescriptor.describeField = 'TITLE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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

        }], [{
          key: "getNoNews",
          value: function getNoNews() {
            var objNews = new NewsEvento();
            objNews.TITLE = 'Nessun evento in programma';
            objNews.SUBTITLE = 'Torna a trovarci per scoprire le prossime novità';
            objNews.do_loaded = false;
            objNews.do_deleted = false;
            return objNews;
          }
        }]);

        return NewsEvento;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "hFUh":
    /*!******************************************************!*\
      !*** ./src/app/models/articolotagliemisura.model.ts ***!
      \******************************************************/

    /*! exports provided: ArticoloTaglieMisura */

    /***/
    function hFUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticoloTaglieMisura", function () {
        return ArticoloTaglieMisura;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var ArticoloTaglieMisura = /*#__PURE__*/function (_library_models_iddoc35) {
        _inherits(ArticoloTaglieMisura, _library_models_iddoc35);

        var _super35 = _createSuper(ArticoloTaglieMisura);

        function ArticoloTaglieMisura() {
          _classCallCheck(this, ArticoloTaglieMisura);

          return _super35.apply(this, arguments);
        }

        _createClass(ArticoloTaglieMisura, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDARTICOLO', 'DESCRIZIONE'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'ArticoloTaglieMisura';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'ARTICOLOTAGLIEMISURA';
            objDescriptor.describeField = 'DESCRIZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            objDescriptor.setRelation('IDARTICOLO', 'Articolo');
            return objDescriptor;
          }
        }]);

        return ArticoloTaglieMisura;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "hXF6":
    /*!**********************************************!*\
      !*** ./src/app/models/prenotazione.model.ts ***!
      \**********************************************/

    /*! exports provided: Prenotazione */

    /***/
    function hXF6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Prenotazione", function () {
        return Prenotazione;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prenotazionepianificazione.model */
      "FAI+");

      var Prenotazione = /*#__PURE__*/function (_library_models_iddoc36) {
        _inherits(Prenotazione, _library_models_iddoc36);

        var _super36 = _createSuper(Prenotazione);

        //si puo' procedere al pagamento finale
        function Prenotazione(onlyInstance) {
          var _this121;

          _classCallCheck(this, Prenotazione);

          _this121 = _super36.call(this, onlyInstance);

          if (!onlyInstance) {
            _this121.IMPORTO = 0;
            _this121.INCASSATO = 0;
            _this121.RESIDUO = 0;
            _this121.TOTALE = 0;
            _this121.IMPOSTA = 0;
            _this121.ISVALID = false;
            _this121.MSGINVALID = '';
            _this121.IDTRANSACTION = '';
            _this121.IDORDER = '';
          }

          _this121.PRENOTAZIONEPIANIFICAZIONE = [];
          return _this121;
        } //#region INIZIALIZZAZIONE NUOVA PRENOTAZIONE

        /**
         * Inizializza per una nuova prenotazione
         */


        _createClass(Prenotazione, [{
          key: "initNewPrenotazione",
          value: function initNewPrenotazione(idArea) {
            //Imposta i parametri nell'oggetto
            this.IDAREAOPERATIVA = idArea;
            this.DATA = new Date();
          }
          /**
           * UTILIZZATA
           * Imposta come oggetto di Pianificazione, quello passato
           * @param docPianificazione Nuovo oggetto di pianificazione
           */

        }, {
          key: "setPianificazioneSingola",
          value: function setPianificazioneSingola(docPianificazione) {
            if (docPianificazione) {
              if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
                this.PRENOTAZIONEPIANIFICAZIONE[0] = docPianificazione;
              } else {
                this.PRENOTAZIONEPIANIFICAZIONE.push(docPianificazione);
              }
            }
          }
          /**
           * Impostazione Area
           * @param idArea Area da applicare
           */

        }, {
          key: "SetArea",
          value: function SetArea(idArea) {
            this.IDAREAOPERATIVA = idArea;

            if (this.PRENOTAZIONEPIANIFICAZIONE) {
              this.PRENOTAZIONEPIANIFICAZIONE.forEach(function (element) {
                element.IDAREAOPERATIVA = idArea;
              });
            }
          }
          /**
           * Impostazione Utente
           * @param idUtente Utente che prenota
           */

        }, {
          key: "setUtente",
          value: function setUtente(idUtente, _nominativo) {
            this.IDUTENTE = idUtente;

            if (_nominativo) {
              this.NOMINATIVO = _nominativo;
            } else {
              this.NOMINATIVO = '';
            }
          }
          /**
           * ritorna il docPianificazione con id specificato; se id non è specificato, ritorna il primo documento di pianificazione presente
           */

        }, {
          key: "getPianificazione",
          value: function getPianificazione(idPianificazione) {
            var docPianificazione;
            var index;

            if (this.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
              if (idPianificazione && idPianificazione.length > 0) {
                index = this.getIndexPianificazione(idPianificazione);
              } else {
                index = 0;
              }

              docPianificazione = this.PRENOTAZIONEPIANIFICAZIONE[index];
            }

            return docPianificazione;
          } //#endregion

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Prenotazione.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data); //Imposto che il documento è originale

            this.setOriginal();
          }
        }, {
          key: "setCollection",
          value: function setCollection(data) {
            this.PRENOTAZIONEPIANIFICAZIONE = [];

            if (data.PRENOTAZIONEPIANIFICAZIONE) {
              this.setCollectionPianificazioni(data);
            }
          }
        }, {
          key: "setCollectionPianificazioni",
          value: function setCollectionPianificazioni(data) {
            var _this122 = this;

            data.PRENOTAZIONEPIANIFICAZIONE.forEach(function (element) {
              var newPianificazione = new _prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_2__["PrenotazionePianificazione"]();
              newPianificazione.setJSONProperty(element);

              _this122.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);
            });
          }
          /**
           * Ritorna il descrittore della Prenotazione
           */

        }, {
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREAOPERATIVA', 'IDUTENTE', 'NOMINATIVO', 'MOBILENUMBER', 'IDTIPOPAGAMENTO', 'MSGINVALID', 'IDTRANSACTION', 'IDORDER'];
            var arNumber = ['CHANNELPAYMENT'];
            var arNumberDecimal = ['IMPORTO', 'INCASSATO', 'RESIDUO', 'IMPOSTA', 'TOTALE'];
            var arBoolean = ['ISVALID'];
            var arDate = ['DATA'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'Prenotazione';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'PRENOTAZIONE';
            objDescriptor.describeField = 'NOMINATIVO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arNumberDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "getIndexPianificazione",
          value:
          /**
           * Ritorna l'indice dell'oggetto pianificazione con id specificato
           * @param id l'id dell'oggetto pianificazione
           */
          function getIndexPianificazione(id) {
            for (var index = 0; index < this.PRENOTAZIONEPIANIFICAZIONE.length; index++) {
              var element = this.PRENOTAZIONEPIANIFICAZIONE[index];

              if (element.ID == id) {
                return index;
              }
            }
          }
          /**
           * Ritorna il valore che è necessario pagare
           */

        }, {
          key: "amountPayment",
          get: function get() {
            var myAmount = 0;

            if (this.INCASSATO < this.IMPORTO) {
              myAmount = this.IMPORTO - this.INCASSATO;
            }

            return myAmount;
          }
          /**
           * Stato del pagamento in formato testo
           * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
           */

        }, {
          key: "getCaptionStatePayment",
          value: function getCaptionStatePayment() {
            var showForPay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var caption = '';

            if (this.amountPayment != 0) {
              if (showForPay) {
                caption = 'Paga Ora';
              } else {
                caption = 'Prenotazione da pagare';
              }
            } else {
              caption = 'Prenotazione pagata';
            }

            return caption;
          }
        }], [{
          key: "getPrenotazioneFromJson",
          value: function getPrenotazioneFromJson(JsonData) {
            var newPrenotazione = new Prenotazione();
            newPrenotazione.setJSONProperty(JsonData);
            return newPrenotazione;
          }
        }]);

        return Prenotazione;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kVR5":
    /*!*********************************************!*\
      !*** ./src/app/models/unitamisura.model.ts ***!
      \*********************************************/

    /*! exports provided: UnitaMisura */

    /***/
    function kVR5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitaMisura", function () {
        return UnitaMisura;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var UnitaMisura = /*#__PURE__*/function (_library_models_iddoc37) {
        _inherits(UnitaMisura, _library_models_iddoc37);

        var _super37 = _createSuper(UnitaMisura);

        function UnitaMisura() {
          _classCallCheck(this, UnitaMisura);

          return _super37.apply(this, arguments);
        }

        _createClass(UnitaMisura, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['CODICE', 'DESCR', 'PREDEFINITA', 'ICONPREF'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'UnitaMisura';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'UNITAMISURA';
            objDescriptor.describeField = 'DESCR';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            return objDescriptor;
          }
        }]);

        return UnitaMisura;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "l6l+":
    /*!********************************************************!*\
      !*** ./src/app/services/utenteprenotazione.service.ts ***!
      \********************************************************/

    /*! exports provided: UtenteprenotazioneService */

    /***/
    function l6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtenteprenotazioneService", function () {
        return UtenteprenotazioneService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/utenteprenotazione.model */
      "TP3D");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtenteprenotazioneService = /*#__PURE__*/function () {
        function UtenteprenotazioneService(apiService) {
          _classCallCheck(this, UtenteprenotazioneService);

          this.apiService = apiService;
          this._listUtentePrenotazione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        } //Ritorna la Lista delle prenotazioni di un utente


        _createClass(UtenteprenotazioneService, [{
          key: "listUtentePrenotazione",
          get: function get() {
            return this._listUtentePrenotazione.asObservable();
          }
          /**
           * Effettua la richiesta dell'elenco Prenotazioni di un utente
           * @param config Dati configurazione
           * @param idUtente Utente che effettua richiesta
           * @param maxRecord Max Record da recuperare
           */

        }, {
          key: "request",
          value: function request(config, idUtente) {
            var _this123 = this;

            var maxRecord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders();
              myHeaders = myHeaders.append('order-by', 'desc');
              var doObject = 'UTENTEPRENOTAZIONE';

              var filterDateTime = _this123.getFilterDateTime();

              var myUrl = config.urlBase + '/' + doObject; //Nei Parametri imposto l'area richiesta

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDUTENTE', idUtente);
              myParams = myParams.append('DATAORAINIZIO', filterDateTime);
              myParams = myParams.append('$top', maxRecord + ''); //Elimino gli attuali

              _this123._listUtentePrenotazione.next([]);

              _this123.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                var arReturn = [];

                if (data.UTENTEPRENOTAZIONE) {
                  arReturn = data.UTENTEPRENOTAZIONE;
                }

                return arReturn;
              })).subscribe(function (resultData) {
                resultData.forEach(function (element) {
                  var newUtentePrenotazione = new _models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_4__["UtentePrenotazione"]();
                  newUtentePrenotazione.setJSONProperty(element);

                  _this123.addUtentePrenotazione(newUtentePrenotazione);
                }); //Al termine ritorno la nuova lista

                resolve(_this123._listUtentePrenotazione);
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Aggiunge all'elenco una prenotazione dell'utente
           * @param objUtentePrenotazione Prenotazione da aggiungere
           */

        }, {
          key: "addUtentePrenotazione",
          value: function addUtentePrenotazione(objUtentePrenotazione) {
            var _this124 = this;

            this.listUtentePrenotazione.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collUtentePrenotazione) {
              var findElement = collUtentePrenotazione.find(function (element) {
                return element.ID == objUtentePrenotazione.ID;
              });

              if (!findElement) {
                _this124._listUtentePrenotazione.next(collUtentePrenotazione.concat(objUtentePrenotazione));
              }
            });
          }
          /**
          * Crea il Parametro Filtro per il campo
          */

        }, {
          key: "getFilterDateTime",
          value: function getFilterDateTime() {
            var adesso = new Date();
            var newDoc = new _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_5__["IDDocument"]();
            var startDate = new Date(adesso.getFullYear(), 0, 1);
            var strAdesso = '';

            if (adesso.getMonth() < 6) {
              startDate = new Date(adesso.getFullYear() - 1, 5, 1);
            }

            strAdesso = newDoc.formatDateTimeISO(startDate);
            strAdesso = '>' + strAdesso;
            return strAdesso;
          }
        }]);

        return UtenteprenotazioneService;
      }();

      UtenteprenotazioneService.ɵfac = function UtenteprenotazioneService_Factory(t) {
        return new (t || UtenteprenotazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"]));
      };

      UtenteprenotazioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: UtenteprenotazioneService,
        factory: UtenteprenotazioneService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pEHE":
    /*!***********************************************!*\
      !*** ./src/app/models/corsoallegato.model.ts ***!
      \***********************************************/

    /*! exports provided: CorsoAllegato */

    /***/
    function pEHE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoAllegato", function () {
        return CorsoAllegato;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");

      var CorsoAllegato = /*#__PURE__*/function (_library_models_iddoc38) {
        _inherits(CorsoAllegato, _library_models_iddoc38);

        var _super38 = _createSuper(CorsoAllegato);

        function CorsoAllegato() {
          _classCallCheck(this, CorsoAllegato);

          return _super38.apply(this, arguments);
        }

        _createClass(CorsoAllegato, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDCORSO', 'IDTIPODOCUMENTAZIONE', 'DESCRIZIONE', 'FILENAMEESTENSIONE', 'FILETYPE'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'CorsoAllegato';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CORSOALLEGATO';
            objDescriptor.describeField = 'DESCRIZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            objDescriptor.setRelation('IDTIPODOCUMENTAZIONE', 'TipoDocumentazione');
            objDescriptor.setRelation('IDCORSO', 'Corso');
            return objDescriptor;
          }
        }, {
          key: "fileTypeIconName",
          get: function get() {
            var iconName = '';

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
        }]);

        return CorsoAllegato;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "rEUH":
    /*!***************************************************!*\
      !*** ./src/app/library/models/idlibrary.model.ts ***!
      \***************************************************/

    /*! exports provided: IDLibrary */

    /***/
    function rEUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDLibrary", function () {
        return IDLibrary;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./descriptor.model */
      "Wz4r");
      /* harmony import */


      var _iddocument_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iddocument.model */
      "5usX");
      /* harmony import */


      var _mydatetime_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mydatetime.model */
      "K4nM");

      var IDLibrary = /*#__PURE__*/function () {
        function IDLibrary() {
          _classCallCheck(this, IDLibrary);
        }

        _createClass(IDLibrary, null, [{
          key: "exportJSONValue",
          value:
          /**
           * Converte e formatta un valore in stringa
           * Usato per scriverlo nei parametri di chiamata
           * @param tipo Tipo del dato
           * @param value Valore
           * @param onlyPropertyModified In caso di Valore documento, esporta solo i modificati o tutto
           */
          function exportJSONValue(value) {
            var onlyPropertyModified = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var onlyDocModified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var tipo;
            var strValue = '';
            tipo = this.getValueType(value);

            switch (tipo) {
              case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]:
                strValue = "\"".concat(value, "\"");
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

              case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]:
                if (value) {
                  strValue = '-1';
                } else {
                  strValue = '0';
                }

                break;

              case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number:
              case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal:
                strValue = value + '';
                break;

              case _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection:
                var arValues;
                arValues = value;
                strValue = '[';

                for (var index = 0; index < arValues.length; index++) {
                  var element = arValues[index];
                  var elStr = IDLibrary.exportJSONValue(element, onlyPropertyModified, onlyDocModified);

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
                var paramExport = new _iddocument_model__WEBPACK_IMPORTED_MODULE_2__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = false;
                paramExport.clearPrivateProperty = true;
                paramExport.onlyPropertyModified = onlyPropertyModified;
                paramExport.onlyDocModified = onlyDocModified;
                paramExport.numLivelli = 999;
                var document = value;
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

        }, {
          key: "getValueType",
          value: function getValueType(value) {
            var typeVar;

            switch (typeof value) {
              case "undefined":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                break;

              case "number":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number;
                break;

              case "string":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"];
                break;

              case "boolean":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"];
                break;

              case "bigint":
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number;
                break;

              case "object":
                try {
                  if (Object(moment__WEBPACK_IMPORTED_MODULE_0__["isDate"])(value)) {
                    typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime;
                  } else if (Array.isArray(value)) {
                    typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection;
                  } else {
                    typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].document;
                  }
                } catch (error) {
                  typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                }

                break;

              default:
                typeVar = _descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].undefined;
                break;
            }

            return typeVar;
          }
        }]);

        return IDLibrary;
      }();
      /***/

    },

    /***/
    "sTQd":
    /*!*****************************************************!*\
      !*** ./src/app/models/accountregistration.model.ts ***!
      \*****************************************************/

    /*! exports provided: AccountRequestCode, AccountVerifyCode, AccountOperationResponse */

    /***/
    function sTQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRequestCode", function () {
        return AccountRequestCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountVerifyCode", function () {
        return AccountVerifyCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountOperationResponse", function () {
        return AccountOperationResponse;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r"); //Documento inviato in POST nella fase di richiesta Codici


      var AccountRequestCode = /*#__PURE__*/function (_library_models_iddoc39) {
        _inherits(AccountRequestCode, _library_models_iddoc39);

        var _super39 = _createSuper(AccountRequestCode);

        function AccountRequestCode() {
          var _this125;

          _classCallCheck(this, AccountRequestCode);

          _this125 = _super39.call(this);
          _this125.REQUESTEMAILCODE = false;
          _this125.REQUESTSMSCODE = false;
          return _this125;
        }
        /**
         * Ritorna il descrittore della Struttura Campi
         */


        _createClass(AccountRequestCode, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREA', 'IDREFER', 'EMAIL', 'TELEPHONE', 'TOKEN'];
            var arNumber = ['USE'];
            var arBoolean = ['REQUESTEMAILCODE', 'REQUESTSMSCODE'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'AccountRequestCode';
            objDescriptor.doRemote = false;
            objDescriptor.classWebApiName = '';
            objDescriptor.describeField = '';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            return objDescriptor;
          }
        }]);

        return AccountRequestCode;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]); //Documento inviato in POST nella fase di Verifica codici


      var AccountVerifyCode = /*#__PURE__*/function (_library_models_iddoc40) {
        _inherits(AccountVerifyCode, _library_models_iddoc40);

        var _super40 = _createSuper(AccountVerifyCode);

        function AccountVerifyCode() {
          var _this126;

          _classCallCheck(this, AccountVerifyCode);

          _this126 = _super40.call(this);
          _this126.EMAILPINCODE = '';
          _this126.SMSPINCODE = '';
          return _this126;
        }
        /**
         * Ritorna il descrittore della Struttura Campi
         */


        _createClass(AccountVerifyCode, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDAREA', 'IDREFER', 'EMAILPINCODE', 'SMSPINCODE'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'AccountVerifyCode';
            objDescriptor.doRemote = false;
            objDescriptor.classWebApiName = '';
            objDescriptor.describeField = '';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            return objDescriptor;
          }
        }]);

        return AccountVerifyCode;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]); //Risposta ottenuta dal server 


      var AccountOperationResponse = function AccountOperationResponse() {
        _classCallCheck(this, AccountOperationResponse);
      };
      /***/

    },

    /***/
    "sbYY":
    /*!********************************************!*\
      !*** ./src/app/models/camposport.model.ts ***!
      \********************************************/

    /*! exports provided: CampoSport */

    /***/
    function sbYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampoSport", function () {
        return CampoSport;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var CampoSport = /*#__PURE__*/function (_library_models_iddoc41) {
        _inherits(CampoSport, _library_models_iddoc41);

        var _super41 = _createSuper(CampoSport);

        function CampoSport(onlyInstance) {
          var _this127;

          _classCallCheck(this, CampoSport);

          _this127 = _super41.call(this, onlyInstance);

          if (!onlyInstance) {
            _this127._DESCRSPORT = '';
          }

          return _this127;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(CampoSport, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDCAMPO', 'IDSPORT', '_DESCRSPORT'];
            var arNumber = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'CampoSport';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CAMPOSPORT';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDSPORT', 'Sport');
            objDescriptor.setRelation('IDCAMPO', 'Campo');
            return objDescriptor;
          }
        }]);

        return CampoSport;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "t3EU":
    /*!************************************************!*\
      !*** ./src/app/models/corsoprogramma.model.ts ***!
      \************************************************/

    /*! exports provided: CorsoProgramma */

    /***/
    function t3EU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoProgramma", function () {
        return CorsoProgramma;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var CorsoProgramma = /*#__PURE__*/function (_library_models_iddoc42) {
        _inherits(CorsoProgramma, _library_models_iddoc42);

        var _super42 = _createSuper(CorsoProgramma);

        function CorsoProgramma(onlyInstance) {
          _classCallCheck(this, CorsoProgramma);

          return _super42.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(CorsoProgramma, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['IDCORSO', 'TESTOHTML'];
            var arNumber = [];
            var arDecimal = [];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'CorsoProgramma';
            objDescriptor.classWebApiName = 'CORSOPROGRAMMA';
            objDescriptor.doRemote = true;
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            objDescriptor.setRelation('IDCORSO', 'Corso');
            return objDescriptor;
          }
        }]);

        return CorsoProgramma;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "uNYz":
    /*!****************************************************!*\
      !*** ./src/app/library/models/postResult.model.ts ***!
      \****************************************************/

    /*! exports provided: PostResponse */

    /***/
    function uNYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostResponse", function () {
        return PostResponse;
      });

      var PostResponse = /*#__PURE__*/function () {
        function PostResponse() {
          _classCallCheck(this, PostResponse);
        }

        _createClass(PostResponse, [{
          key: "document",
          get: function get() {
            return this._document;
          },
          set: function set(value) {
            this._document = value;
          }
        }, {
          key: "setFromResponse",
          value: function setFromResponse(response) {
            if (response) {
              this.result = response['result'];
              this.message = response['message'];
              this.code = response['code'];
            }
          }
        }, {
          key: "getDocument",
          value: function getDocument() {
            var doc;

            if (this._document && this._document.length != 0) {
              doc = JSON.parse(this._document);
            }

            return doc;
          }
        }]);

        return PostResponse;
      }();
      /***/

    },

    /***/
    "v/X4":
    /*!**************************************!*\
      !*** ./src/app/models/area.model.ts ***!
      \**************************************/

    /*! exports provided: Area */

    /***/
    function vX4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Area", function () {
        return Area;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _models_location_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/location.model */
      "V6dt");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _arealink_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./arealink.model */
      "h++G");
      /* harmony import */


      var _areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./areapaymentsetting.model */
      "MO7j");

      var Area = /*#__PURE__*/function (_library_models_iddoc43) {
        _inherits(Area, _library_models_iddoc43);

        var _super43 = _createSuper(Area);

        function Area(onlyInstance) {
          var _this128;

          _classCallCheck(this, Area);

          _this128 = _super43.call(this, onlyInstance);
          _this128.AREALINKS = [];
          _this128.LOCATIONS = [];
          _this128.AREAPAYMENTSETTINGS = []; //0 indica che è sempre possibile aggiornare le presenze (dal server non arriva nulla)

          if (!onlyInstance) {
            _this128.APPGAPOREPRESENZE = 0;
          }

          return _this128;
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(Area, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
            var arString = ['IDGRUPPOSPORTIVO', 'DENOMINAZIONE', 'INDIRIZZO', 'CAP', 'COMUNE', 'PROVINCIA', 'ISOSTATO', 'CONDVENDITACORSI', 'CONDVENDPRENOTAZIONI'];
            var arNumber = ['TIPOAREA', 'APPGAPOREPRESENZE', 'LATITUDINE', 'LONGITUDINE'];
            var arBoolean = ['APPSHOW', 'APPISCRIZIONI', 'APPPRENOTAZIONI'];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = ['LOCATIONS', 'AREALINKS', 'AREAPAYMENTSETTINGS'];
            objDescriptor.className = 'Area';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'AREAOPERATIVA';
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["boolean"]);
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

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(Area.prototype), "setJSONProperty", this).call(this, data);

            this.setCollection(data);
            this.setOriginal();
          }
          /**
           * Reimposta l'Array delle location creando veri oggetti di tipo Location
           * @param resultData Json Information
           */

        }, {
          key: "setCollection",
          value: function setCollection(data) {
            var _this129 = this;

            if (data) {
              if (data.LOCATION) {
                data.LOCATION.forEach(function (element) {
                  var objLocation = _this129.findLocationByID(element.ID);

                  if (!objLocation) {
                    //Nuova Location
                    objLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_1__["Location"](); //Aggiungo all'Array

                    _this129.LOCATIONS.push(objLocation);
                  }

                  objLocation.setJSONProperty(element);
                });
              }

              if (data.AREALINK) {
                data.AREALINK.forEach(function (element) {
                  var objAreaLink = _this129.findAreaLinkByID(element.ID);

                  if (!objAreaLink) {
                    //Nuova Area Link
                    objAreaLink = new _arealink_model__WEBPACK_IMPORTED_MODULE_3__["AreaLink"](); //Aggiungo all'Array

                    _this129.AREALINKS.push(objAreaLink);
                  }

                  objAreaLink.setJSONProperty(element);
                });
              } //se nell'oggetto any che mi arriva è presente il campo AREAPAYMENTSETTING[]


              if (data.AREAPAYMENTSETTING) {
                //ne scorro gli elementi
                data.AREAPAYMENTSETTING.forEach(function (element) {
                  //cerco se tra gli elementi che ho in memoria è già prsente l'elemento che mi è arrivato
                  var objPaymentSetting = _this129.findPaymentSettingById(element.ID); //se non è presente


                  if (!objPaymentSetting) {
                    //ne creo uno nuovo
                    objPaymentSetting = new _areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_4__["AreaPaymentSetting"](); //e lo inserisco nell'array

                    _this129.AREAPAYMENTSETTINGS.push(objPaymentSetting);
                  } //ora valorizzo il nuovo oggetto (che ci fosse già o no è indifferente) con le proprietà dell'oggetto che mi è arrivato


                  objPaymentSetting.setJSONProperty(element);
                });
              }
            }
          }
          /**
           * Cerca nell'array Location e torna la location se trovata
           * @param idLocation Location cercata
           */

        }, {
          key: "findLocationByID",
          value: function findLocationByID(idLocation) {
            return this.LOCATIONS.find(function (element) {
              return element.ID == idLocation;
            });
          }
          /**
           * Cerca nella colletion Area Link e ritorna il Link
           * @param idLink Link desiderato
           */

        }, {
          key: "findAreaLinkByID",
          value: function findAreaLinkByID(idLink) {
            return this.AREALINKS.find(function (element) {
              return element.ID == idLink;
            });
          }
          /**
          * Cerca nella colletion areapaymentsettings  e ritorna l'elemeto desiderato
          * @param id id dell'elemento eesiderato
          */

        }, {
          key: "findPaymentSettingById",
          value: function findPaymentSettingById(id) {
            return this.AREAPAYMENTSETTINGS.find(function (element) {
              return element.ID == id;
            });
          }
          /**
           * Cerca e ritorna un link con il tipo pagina passato
           * @param tipo Tipo pagina richiesto
           */

        }, {
          key: "findAreaLinkByPageType",
          value: function findAreaLinkByPageType(tipo) {
            return this.AREALINKS.find(function (element) {
              return element.TIPOURL == tipo;
            });
          }
        }, {
          key: "distanceFrom",
          value: function distanceFrom(position) {
            if (this.LATITUDINE && this.LONGITUDINE) {
              var lat = position.coords.latitude;
              var lon = position.coords.longitude;
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

        }, {
          key: "getPaymentFor",
          value: function getPaymentFor(settore) {
            var arSetting = [];

            if (this.AREAPAYMENTSETTINGS && this.AREAPAYMENTSETTINGS.length != 0) {
              //Ciclo sui modi di pagamento
              for (var index = 0; index < this.AREAPAYMENTSETTINGS.length; index++) {
                var elPaymentSetting = this.AREAPAYMENTSETTINGS[index];
                /* Se il pagamento è adatto al settore */

                if (elPaymentSetting && elPaymentSetting.isFor(settore)) {
                  arSetting.push(elPaymentSetting);
                }
              }
            }

            return arSetting;
          }
        }]);

        return Area;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "v3Yp":
    /*!***************************************************!*\
      !*** ./src/app/services/corsoallegato.service.ts ***!
      \***************************************************/

    /*! exports provided: CorsoallegatoService */

    /***/
    function v3Yp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoallegatoService", function () {
        return CorsoallegatoService;
      });
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/corsoallegato.model */
      "pEHE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CorsoallegatoService = /*#__PURE__*/function () {
        function CorsoallegatoService(docStructureService) {
          _classCallCheck(this, CorsoallegatoService);

          this.docStructureService = docStructureService;
        }

        _createClass(CorsoallegatoService, [{
          key: "requestByIdCorso",
          value: function requestByIdCorso(idCorso) {
            var _this130 = this;

            return new Promise(function (resolve, reject) {
              //filtro per la richiesta
              var myFilter = new _models_corsoallegato_model__WEBPACK_IMPORTED_MODULE_2__["CorsoAllegato"](true);
              myFilter.IDCORSO = idCorso; //Parametri per la richiesta

              var myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["RequestParams"]();
              myParams.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_0__["RequestDecode"]();
              myParams.decode.active = true;

              _this130.docStructureService.requestNew(myFilter, myParams).then(function (listAllegati) {
                resolve(listAllegati);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }]);

        return CorsoallegatoService;
      }();

      CorsoallegatoService.ɵfac = function CorsoallegatoService_Factory(t) {
        return new (t || CorsoallegatoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__["DocstructureService"]));
      };

      CorsoallegatoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CorsoallegatoService,
        factory: CorsoallegatoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [
      /* ORIGINALI*/
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
      // Ho provato a cambiare e mandare home al path vuoto (che carica la pagina Home)
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'historylist',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-history-historylist-historylist-module */
            "pages-history-historylist-historylist-module").then(__webpack_require__.bind(null,
            /*! ./pages/history/historylist/historylist.module */
            "mU/K")).then(function (m) {
              return m.HistorylistPageModule;
            });
          }
        }, {
          path: 'booking/:historyId',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-history-historybook-historybook-module */
            "pages-history-historybook-historybook-module").then(__webpack_require__.bind(null,
            /*! ./pages/history/historybook/historybook.module */
            "9eO6")).then(function (m) {
              return m.HistorybookPageModule;
            });
          }
        }, {
          path: 'course/:historyId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-history-historycourse-historycourse-module */
            [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-location-course-detailcourse-course-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-history-historycourse-historycourse-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/history/historycourse/historycourse.module */
            "BnKM")).then(function (m) {
              return m.HistorycoursePageModule;
            });
          }
        }]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-account-module */
          "pages-account-account-module").then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "4+IK")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: 'location/:locationId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-location-location-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-location-location-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/location/location.module */
          "lPJH")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'location',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'listcourses/:locationId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-location-course-listcourses-listcourses-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-listcourses-listcourses-module"), __webpack_require__.e("pages-location-course-listcourses-listcourses-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/location/course/listcourses/listcourses.module */
          "8GLh")).then(function (m) {
            return m.ListcoursesPageModule;
          });
        }
      }, {
        path: 'listcourses',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'detailcourse',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'detailcourse/:courseId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-location-course-detailcourse-course-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"), __webpack_require__.e("default~pages-history-historycourse-historycourse-module~pages-location-course-detailcourse-course-module"), __webpack_require__.e("pages-location-course-detailcourse-course-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/location/course/detailcourse/course.module */
          "FwVE")).then(function (m) {
            return m.CoursePageModule;
          });
        }
      }, {
        path: 'news/:newsId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-newsdetail-newsdetail-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./pages/newsdetail/newsdetail.module */
          "k52M")).then(function (m) {
            return m.NewsdetailPageModule;
          });
        }
      }, {
        path: 'news',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-news-news-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/news/news.module */
          "qUUn")).then(function (m) {
            return m.NewsPageModule;
          });
        }
      }, {
        path: 'verify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-verify-verify-module */
          "default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d").then(__webpack_require__.bind(null,
          /*! ./pages/auth/verify/verify.module */
          "fFCB")).then(function (m) {
            return m.VerifyPageModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-test-test-module */
          [__webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("pages-test-test-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/test/test.module */
          "ezsy")).then(function (m) {
            return m.TestPageModule;
          });
        }
      }, {
        path: 'agenda',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-agenda-agenda-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-agenda-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/agenda/agenda.module */
          "uB5f")).then(function (m) {
            return m.AgendaPageModule;
          });
        }
      }, {
        path: 'agenda-trainer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-agenda-trainer-agenda-trainer-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-trainer-agenda-trainer-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/agenda-trainer/agenda-trainer.module */
          "qqZR")).then(function (m) {
            return m.AgendaTrainerPageModule;
          });
        }
      }, {
        path: 'agenda-custode',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-agenda-custode-agenda-custode-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("pages-agenda-custode-agenda-custode-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/agenda-custode/agenda-custode.module */
          "URBP")).then(function (m) {
            return m.AgendaCustodePageModule;
          });
        }
      }, {
        // ** dovrebbe rappresentare tutti i percorsi che non vengono intercettati dalle rotte precedenti
        path: '**',
        redirectTo: ''
      } // {
      //   path: 'agenda-custode/:idImpegno',
      // },  
      //questo lo lascio commentato, perchè in teoria ci si arriva solo da modale
      // {
      //   path: 'psw-recovery',
      //   loadChildren: () => import('./pages/auth/psw-recovery/psw-recovery.module').then( m => m.PswRecoveryPageModule)
      // }
      ];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vl3Y":
    /*!***********************************************!*\
      !*** ./src/app/models/corsopresenze.model.ts ***!
      \***********************************************/

    /*! exports provided: CorsoPresenze */

    /***/
    function vl3Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorsoPresenze", function () {
        return CorsoPresenze;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var CorsoPresenze = /*#__PURE__*/function (_library_models_iddoc44) {
        _inherits(CorsoPresenze, _library_models_iddoc44);

        var _super44 = _createSuper(CorsoPresenze);

        function CorsoPresenze(onlyInstance) {
          _classCallCheck(this, CorsoPresenze);

          return _super44.call(this, onlyInstance);
        }
        /**
         * Ritorna il descrittore della Struttura Campi
         */


        _createClass(CorsoPresenze, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDPIANIFICAZIONECORSO', 'IDUTENTE', 'NOMINATIVO', 'NOTE', 'IDUSERSETTING'];
            var arNumber = ['STATOISCRIZIONE'];
            var arBoolean = ['PRESENTE'];
            var arDate = ['DATACERTIFICATOMEDICO'];
            var arDateTime = ['DATAORASETTING'];
            var arTime = [];
            objDescriptor.className = 'CorsoPresenze';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'CORSOPRESENZE';
            objDescriptor.describeField = 'NOMINATIVO';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            objDescriptor.setRelation('IDPIANIFICAZIONECORSO', 'PianificazioneCorso');
            objDescriptor.setRelation('IDUTENTE', 'Utente');
            objDescriptor.setRelation('IDUSERSETTING', 'Utente');
            return objDescriptor;
          }
        }]);

        return CorsoPresenze;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "w26W":
    /*!***************************************************!*\
      !*** ./src/app/services/codicefiscale.service.ts ***!
      \***************************************************/

    /*! exports provided: CodicefiscaleService */

    /***/
    function w26W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodicefiscaleService", function () {
        return CodicefiscaleService;
      });
      /* harmony import */


      var _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/codicefiscale.model */
      "ECYZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CodicefiscaleService = /*#__PURE__*/function () {
        //Per ottenere i dati del comune dal codice catastale
        //chiamare https://api.cavallinipietro.com/codicefiscale/api/comuni/codicecatastale/L872
        function CodicefiscaleService(apiService) {
          _classCallCheck(this, CodicefiscaleService);

          this.apiService = apiService;
        }
        /**
         * Effettua il controllo di un codice fiscale e torna TRUE se corretto o FALSE se non corretto
         * Nel caso fosse corretto puo' essere richiesta la decodifica del codice in Comune, Provincia, DataNascita etc.
         * @param docCF Documento Codice Fiscale
         * @param decode Decodifica il Codice Fiscale se corretto
         * @param userMsg I testi dei messaggi di errore sono rivolti all'utente finale
         */


        _createClass(CodicefiscaleService, [{
          key: "checkCodiceFiscale",
          value: function checkCodiceFiscale(codiceFiscale, decode) {
            var _this131 = this;

            var userMsg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return new Promise(function (resolve, reject) {
              var check = false;
              var resDecode = false;
              var docCF;

              if (codiceFiscale && codiceFiscale.length !== 0) {
                docCF = new _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__["CodiceFiscale"](codiceFiscale); //Valido il codice

                check = docCF.validate();
              } else {
                docCF = new _models_codicefiscale_model__WEBPACK_IMPORTED_MODULE_0__["CodiceFiscale"]('');
                docCF.msgValidate = 'Codice non specificato';
                docCF.checkValidate = false;
                check = false;
              } //Check passato correttamente


              if (check) {
                if (decode) {
                  //Effettuo la decodifica base
                  resDecode = docCF.basicDecode(); //Effettuo la chiamata per ottenere i dati del comune dal codice catastale

                  if (resDecode) {
                    //Con il codice del comune cerco di recuperare tutto
                    var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-type': 'text/plain'
                    }); //In Testata c'e' sempre l'AppId
                    //myHeaders = myHeaders.set('appid',config.appId);

                    var myUrl = 'https://api.cavallinipietro.com/codicefiscale/api/comuni/codicecatastale' + '/' + docCF.codiceCatastale;

                    _this131.apiService.httpGet(myUrl, myHeaders).subscribe(function (data) {
                      //In teoria mi ha risposto correttamente
                      if (data.hasOwnProperty('codiceCatastale')) {
                        //Nome comune
                        if (data.hasOwnProperty('nome')) {
                          docCF.comune = data['nome']; //se ho il comune, significa che il cf è italiano

                          docCF.stato = 'Italia';
                        } //Regione


                        if (data.hasOwnProperty('regione')) {
                          docCF.regione = data['regione'];
                        } //Provincia


                        if (data.hasOwnProperty('provincia')) {
                          docCF.provincia = data['provincia'];
                        } //CAP


                        if (data.hasOwnProperty('cap')) {
                          docCF.cap = data['cap'];
                        }

                        if (data.hasOwnProperty('stato')) {
                          docCF.stato = data['stato'];
                        }
                      }

                      resolve(docCF);
                    }, function (error) {
                      docCF.checkValidate = false;
                      docCF.msgValidate = error;
                      resolve(docCF);
                    });
                  } else {
                    resolve(docCF);
                  }
                } else {
                  resolve(docCF);
                }
              } else {
                //Check Codice Fiscale fallito
                //Se i messaggi sono per l'utente cambio con
                if (userMsg) {
                  docCF.msgValidate = 'Codice fiscale non valido';
                }

                reject(docCF);
              }
            });
          }
        }]);

        return CodicefiscaleService;
      }();

      CodicefiscaleService.ɵfac = function CodicefiscaleService_Factory(t) {
        return new (t || CodicefiscaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApicallService"]));
      };

      CodicefiscaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CodicefiscaleService,
        factory: CodicefiscaleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "w48H":
    /*!*******************************************!*\
      !*** ./src/app/models/settimana.model.ts ***!
      \*******************************************/

    /*! exports provided: Settimana */

    /***/
    function w48H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Settimana", function () {
        return Settimana;
      });
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0");

      var Settimana = /*#__PURE__*/function () {
        function Settimana(indexDay, language) {
          _classCallCheck(this, Settimana);

          this.index = indexDay;
          this.selected = false;
          this.color = 'primary';
          this.setAllLabel(language);
        }
        /**
         * Imposto tutte le etichette
         * @param language Lingua
         */


        _createClass(Settimana, [{
          key: "setAllLabel",
          value: function setAllLabel(language) {
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
            } //Ora costruisco le altre label


            this.smallLabel = this.label.substring(0, 3);
            this.xsLabel = this.label.substring(0, 1);
          }
          /**
           * Imposta le etichette dei giorni in italiano
           */

        }, {
          key: "setItalianLabel",
          value: function setItalianLabel() {
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

        }, {
          key: "setEnglishLabel",
          value: function setEnglishLabel() {
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
        }, {
          key: "setSpanishLabel",
          value: function setSpanishLabel() {
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

        }], [{
          key: "getArray",
          value: function getArray(startSunday, language) {
            var myWeek = [];
            var startIndex = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].lunedi;

            if (startSunday) {
              startIndex = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica;
            } // Ciclo dallo Start Index a 7


            for (var indice = startIndex; indice <= _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].sabato; indice++) {
              var newDay = new Settimana(indice, language);
              myWeek.push(newDay);
            } //Se ho iniziato al Lunedi, devo aggiungere in fondo la domenica


            if (startIndex == 1) {
              var _newDay = new Settimana(_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Giorni"].domenica, language);

              myWeek.push(_newDay);
            }

            return myWeek;
          }
          /**
           * Imposta a selected un determinato giorno della settimana presente nell'array
           * @param indexDay Indice del Giorno da selezionare
           * @param myWeek Array Settimanale
           */

        }, {
          key: "selectDayArray",
          value: function selectDayArray(indexDay, myWeek) {
            if (myWeek) {
              myWeek.forEach(function (element) {
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

        }, {
          key: "getLabel",
          value: function getLabel(indexDay, language) {
            var newDay = new Settimana(indexDay, language);
            return newDay.label;
          }
          /**
           * Ritorna in modalità rapida la smallLabel del Giorno
           * @param indexDay Numero del Giorno
           * @param language Lingua Opzionale
           */

        }, {
          key: "getsmallLabel",
          value: function getsmallLabel(indexDay, language) {
            var newDay = new Settimana(indexDay, language);
            return newDay.smallLabel;
          }
          /**
           * Ritorna in modalità rapida la xsLabel del Giorno
           * @param indexDay Numero del Giorno
           * @param language Lingua Opzionale
           */

        }, {
          key: "getXsLabel",
          value: function getXsLabel(indexDay, language) {
            var newDay = new Settimana(indexDay, language);
            return newDay.xsLabel;
          }
        }]);

        return Settimana;
      }();
      /***/

    },

    /***/
    "w5Je":
    /*!**************************************************!*\
      !*** ./src/app/models/aperturalocation.model.ts ***!
      \**************************************************/

    /*! exports provided: AperturaLocation */

    /***/
    function w5Je(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AperturaLocation", function () {
        return AperturaLocation;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _settimana_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settimana.model */
      "w48H");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var AperturaLocation = /*#__PURE__*/function (_library_models_iddoc45) {
        _inherits(AperturaLocation, _library_models_iddoc45);

        var _super45 = _createSuper(AperturaLocation);

        function AperturaLocation(onlyInstance) {
          _classCallCheck(this, AperturaLocation);

          return _super45.call(this, onlyInstance);
        }
        /**
         * Ritorna il descrittore della Struttura Campi
         */


        _createClass(AperturaLocation, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["Descriptor"]();
            var arString = [];
            var arNumber = ['GIORNO'];
            var arBoolean = ['APERTOCHIUSO'];
            var arDate = [];
            var arDateTime = [];
            var arTime = ['DALLE1', 'DALLE2', 'ALLE1', 'ALLE2'];
            objDescriptor.className = 'AperturaLocation';
            objDescriptor.doRemote = true;
            objDescriptor.classWebApiName = 'APERTURALOCATION';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_2__["TypeDefinition"].time);
            return objDescriptor;
          }
          /**
           * Sovrascrive metodo di IDDocument e lo amplia
           * @param data JSON Received
           */

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(AperturaLocation.prototype), "setJSONProperty", this).call(this, data); //Il Giorno che arriva base 1 lo sposto a base 0


            this.GIORNO = this.GIORNO - 1;
            this.setOriginal();
          }
        }, {
          key: "getDateFromTimeString",
          value: function getDateFromTimeString(timeString) {
            var splitTime = timeString.split(':');
            var ore = 0;
            var minuti = 0;
            var secondi = 0;
            var returnDate = new Date();

            for (var index = 0; index < splitTime.length; index++) {
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

        }, {
          key: "getLabel",
          value: function getLabel(language) {
            var label = _settimana_model__WEBPACK_IMPORTED_MODULE_1__["Settimana"].getLabel(this.GIORNO, language);

            return label;
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this.APERTOCHIUSO;
          }
        }, {
          key: "isAlwaysOpen",
          get: function get() {
            if (this.isOpen() && !this.DALLE1 && !this.DALLE2) {
              return true;
            } else {
              return false;
            }
          }
          /**
           * Ritorna l'orario impostato minore o maggiore di apertura o chiusura
           * UNDEFINED se non trovato oppure se la Location è chiusa
           * @param type min || max a seconda se su vuole l'orario inferiore o superiore
           */

        }, {
          key: "getOrario",
          value: function getOrario(type) {
            var value;

            if (this.APERTOCHIUSO) {
              if (type == 'min') {
                if (this.DALLE1) {
                  value = this.DALLE1;
                } else if (this.DALLE2) {
                  value = this.DALLE2;
                }
              } else if (type == 'max') {
                if (this.ALLE2) {
                  value = this.ALLE2;
                } else if (this.ALLE1) {
                  value = this.ALLE1;
                }
              } else if (type == 'middleMin') {
                if (this.ALLE1) {
                  value = this.ALLE1;
                }
              } else if (type == 'middleMax') {
                if (this.DALLE2) {
                  value = this.DALLE2;
                }
              }
            }

            return value;
          }
        }]);

        return AperturaLocation;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "wG3K":
    /*!**********************************************!*\
      !*** ./src/app/models/categoriaeta.model.ts ***!
      \**********************************************/

    /*! exports provided: CategoriaEta */

    /***/
    function wG3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaEta", function () {
        return CategoriaEta;
      });
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");

      var CategoriaEta = /*#__PURE__*/function (_library_models_iddoc46) {
        _inherits(CategoriaEta, _library_models_iddoc46);

        var _super46 = _createSuper(CategoriaEta);

        function CategoriaEta(onlyInstance) {
          _classCallCheck(this, CategoriaEta);

          return _super46.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(CategoriaEta, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["Descriptor"]();
            var arString = ['CODICE', 'DESCTOOLTIP'];
            var arNumber = ['ETAMINIMA', 'ETAMASSIMA'];
            var arBoolean = [];
            var arDate = [];
            var arDateTime = [];
            var arTime = [];
            var arCollection = [];
            objDescriptor.className = 'CategoriaEta';
            objDescriptor.classWebApiName = 'CATEGORIEETA';
            objDescriptor.doRemote = true;
            objDescriptor.describeField = 'DESCTOOLTIP';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].number);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].time);
            objDescriptor.addMultiple(arCollection, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_1__["TypeDefinition"].collection);
            return objDescriptor;
          }
        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            _get(_getPrototypeOf(CategoriaEta.prototype), "setJSONProperty", this).call(this, data);

            this.setOriginal();
          }
          /**
           * Verifica se l'eta rientra nel range
           * @param eta Eta da controllare
           */

        }, {
          key: "isValid",
          value: function isValid(eta) {
            var isValid = false;

            if (!this.ETAMINIMA && !this.ETAMASSIMA) {
              isValid = true;
            } else if (!this.ETAMASSIMA) {
              //Non c'e' eta massima solo la minima
              if (eta >= this.ETAMINIMA) {
                isValid = true;
              }
            } else if (!this.ETAMINIMA) {
              //Non c'e' eta minima solo la massima
              if (eta <= this.ETAMASSIMA) {
                isValid = true;
              }
            } else {
              //Ci sono entrambi le eta
              if (eta >= this.ETAMINIMA && eta <= this.ETAMASSIMA) {
                isValid = true;
              }
            }

            return isValid;
          }
        }]);

        return CategoriaEta;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_0__["IDDocument"]);
      /***/

    },

    /***/
    "xeLN":
    /*!***************************************************!*\
      !*** ./src/app/models/iscrizioneincasso.model.ts ***!
      \***************************************************/

    /*! exports provided: IscrizioneIncasso */

    /***/
    function xeLN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IscrizioneIncasso", function () {
        return IscrizioneIncasso;
      });
      /* harmony import */


      var _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../library/models/descriptor.model */
      "Wz4r");
      /* harmony import */


      var _library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../library/models/iddocument.model */
      "5usX");

      var IscrizioneIncasso = /*#__PURE__*/function (_library_models_iddoc47) {
        _inherits(IscrizioneIncasso, _library_models_iddoc47);

        var _super47 = _createSuper(IscrizioneIncasso);

        function IscrizioneIncasso(onlyInstance) {
          _classCallCheck(this, IscrizioneIncasso);

          return _super47.call(this, onlyInstance);
        }
        /**
        * Ritorna il descrittore della Struttura Campi
        */


        _createClass(IscrizioneIncasso, [{
          key: "getDescriptor",
          value: function getDescriptor() {
            var objDescriptor = new _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["Descriptor"]();
            var arString = ['IDISCRIZIONECORSO', 'NOTES', 'DICITURADOC', 'IDCONTO', 'IDTRANSACTION', 'IDORDER'];
            var arNumber = ['ZORDER', 'MODALITA', 'TIPORIGO', 'TIPOPREZZO'];
            var arDecimal = ['IMPORTO'];
            var arBoolean = [];
            var arDate = ['DATAOPERAZIONE'];
            var arDateTime = [];
            var arTime = [];
            objDescriptor.className = 'IscrizioneIncasso';
            objDescriptor.classWebApiName = 'ISCRIZIONEINCASSO';
            objDescriptor.doRemote = true;
            objDescriptor.describeField = 'DENOMINAZIONE';
            objDescriptor.addMultiple(arString, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["char"]);
            objDescriptor.addMultiple(arNumber, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].number);
            objDescriptor.addMultiple(arDecimal, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].numberDecimal);
            objDescriptor.addMultiple(arBoolean, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"]["boolean"]);
            objDescriptor.addMultiple(arDate, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].date);
            objDescriptor.addMultiple(arDateTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].dateTime);
            objDescriptor.addMultiple(arTime, _library_models_descriptor_model__WEBPACK_IMPORTED_MODULE_0__["TypeDefinition"].time);
            return objDescriptor;
          }
          /**
           * Imposta le proprietà nell'oggetto
           * @param data JSON Received
           */

        }, {
          key: "setJSONProperty",
          value: function setJSONProperty(data) {
            //Chiamo IDDOcument
            _get(_getPrototypeOf(IscrizioneIncasso.prototype), "setJSONProperty", this).call(this, data);

            this.setOriginal();
          }
        }]);

        return IscrizioneIncasso;
      }(_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_1__["IDDocument"]);
      /***/

    },

    /***/
    "yHma":
    /*!**********************************************!*\
      !*** ./src/app/services/location.service.ts ***!
      \**********************************************/

    /*! exports provided: LocationService */

    /***/
    function yHma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models_location_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/location.model */
      "V6dt");
      /* harmony import */


      var _apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./apicall.service */
      "+Dr4");
      /* harmony import */


      var _models_camposport_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/camposport.model */
      "sbYY");
      /* harmony import */


      var _models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/imdb/slotweek.model */
      "L1/s");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocationService = /*#__PURE__*/function () {
        function LocationService(apiService, loadingCtrl, docStructureService) {
          _classCallCheck(this, LocationService);

          this.apiService = apiService;
          this.loadingCtrl = loadingCtrl;
          this.docStructureService = docStructureService;
          this._listLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this._activeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]());
        } //VARIABILI PER PRENOTAZIONI


        _createClass(LocationService, [{
          key: "listLocation",
          get: function get() {
            return this._listLocation.asObservable();
          }
        }, {
          key: "decodeListSport",
          set: function set(value) {
            this._decodeListSport = value;
          }
        }, {
          key: "activeLocation",
          get: function get() {
            return this._activeLocation.asObservable();
          }
          /**
           * Recupero delle Location di un'area
           * @param config Parametri di configurazione
           * @param idArea Area di riferimento
           */

        }, {
          key: "requestByIdArea",
          value: function requestByIdArea(config, idArea) {
            var _this132 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

              var doObject = 'LOCATION';
              var locVisTutti = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__["LocationAppVisibility"].tutti; //Queste sono le location pubbliche
              // Nei parametri imposto l'Area Operativa

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDAREAOPERATIVA', idArea); //Chiedo solo le location Pubbliche (In teoria qui bisognerà gestire il caso di Location legate a una azienda a cui l'utente è collegato)

              myParams = myParams.append('APPVISIBILITY', locVisTutti + '');
              var myUrl = config.urlBase + '/' + doObject;

              _this132.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
                return fullData.LOCATION;
              })).subscribe(function (resultData) {
                //Cancello le Location
                _this132._listLocation.next([]); //Inserisco le location


                _this132._addMultipleLocation(resultData);

                resolve(resultData);
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Richiede un elenco di location con idArea passato, e lo risolve direttamente, senza passare da nessun'altra parte (usa il nuovo docstructure per fare la richiesta)
           * @param idArea l'id dell'area
           */

        }, {
          key: "newRequestByIdArea",
          value: function newRequestByIdArea(idArea) {
            var _this133 = this;

            return new Promise(function (resolve, reject) {
              var myFilter = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"](true);
              myFilter.IDAREAOPERATIVA = idArea;
              var myParams = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["RequestParams"]();
              myParams.decode = new _library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["RequestDecode"]();
              myParams.decode.active = true;

              _this133.docStructureService.requestNew(myFilter, myParams).then(function (listLocation) {
                resolve(listLocation);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
          /** Effettua la richiesta al server di una Location precisa
          * @param idLocation Location scelta
          *
          */

        }, {
          key: "requestLocationByID",
          value: function requestLocationByID(config, idLocation, _numLivelli) {
            var _this134 = this;

            return new Promise(function (resolve, reject) {
              var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

              var doObject = 'LOCATION';

              if (!_numLivelli) {
                _numLivelli = 3;
              }

              myHeaders = myHeaders.set('child-level', _numLivelli + ''); // Nei parametri imposto l'Area Operativa

              var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', idLocation);
              var myUrl = config.urlBase + '/' + doObject;

              _this134.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
                return fullData.LOCATION;
              })).subscribe(function (resultData) {
                var locReturn;

                if (resultData && resultData.length !== 0) {
                  locReturn = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]();
                  locReturn.setJSONProperty(resultData[0]); //Emetto evento di cambio

                  _this134._activeLocation.next(locReturn);

                  resolve(locReturn);
                } else {
                  reject('location non trovata');
                }
              }, function (error) {
                reject(error);
              });
            });
          }
          /**
           * Aggiunge un insieme di elementi all'array delle Location
           * @param dataJSON JSON Received
          */

        }, {
          key: "_addMultipleLocation",
          value: function _addMultipleLocation(dataJSON) {
            var _this135 = this;

            if (dataJSON) {
              dataJSON.forEach(function (element) {
                var newLocation = new _models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]();
                newLocation.setJSONProperty(element);

                _this135.listLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (collLocation) {
                  _this135._listLocation.next(collLocation.concat(newLocation));
                });
              });
            }
          } //#region SINCRONIZZAZIONE CON CAMPI SPORT

          /**
           * Richiede al Server le informazioni sulle tipologie dei Campi (e Attività Svolte)
           * @param config Parametri di configurazione
           * @param docLocation Location da Completare con i campi Sport
           */

        }, {
          key: "syncInfoCampi",
          value: function syncInfoCampi(config, docLocation) {
            var _this136 = this;

            //Elimino le informazioni precedenti dei Campi Sport
            docLocation.emptyCampiSport(); //Creo un Observable

            var myLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](docLocation);
            docLocation.CAMPO.forEach(function (elCampo) {
              _this136.syncInfoCampoSport(config, elCampo.ID).subscribe(function (resultData) {
                resultData.forEach(function (elCampoSport) {
                  var docCampoSport = new _models_camposport_model__WEBPACK_IMPORTED_MODULE_5__["CampoSport"]();
                  docCampoSport.setJSONProperty(elCampoSport);
                  docCampoSport.lookup('IDSPORT', _this136._decodeListSport, 'DENOMINAZIONE');
                  myLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (docLocation) {
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

        }, {
          key: "syncInfoCampoSport",
          value: function syncInfoCampoSport(config, idCampo) {
            var myHeaders = config.getHttpHeaders(); //new HttpHeaders({'Content-type':'text/plain'});

            var doObject = 'CAMPOSPORT'; // Nei parametri imposto il Campo

            var myParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('IDCAMPO', idCampo);
            var myUrl = config.urlBase + '/' + doObject;
            return this.apiService.httpGet(myUrl, myHeaders, myParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (fullData) {
              return fullData.CAMPOSPORT;
            }));
          }
          /**
           * Ritorna la Location presente in memoria
           * @param idLocation Location cercata
           */

        }, {
          key: "findLocationByID",
          value: function findLocationByID(idLocation) {
            var arLocation = this._listLocation.getValue();

            return arLocation.find(function (element) {
              return element.ID == idLocation;
            });
          } //#endregion
          //#region PRENOTAZIONE

          /**
           * Data la Location, ritorna il template settimanale con gli slot time da applicare
           * (Default Slot Time)
           * Andranno poi attualizzati ulteriormente
           * @param docLocation Location da utilizzare
           */

        }, {
          key: "getTemplateSlotWeek",
          value: function getTemplateSlotWeek(docLocation) {
            var weekTemplate = new _models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_6__["SlotWeek"]();
            weekTemplate.IDAREAOPERATIVA = docLocation.IDAREAOPERATIVA;
            weekTemplate.IDLOCATION = docLocation.ID;

            if (docLocation.MINUTISLOTPRENOTAZIONE) {
              weekTemplate.SLOTMINUTES = docLocation.MINUTISLOTPRENOTAZIONE;
            } //Inizializzo con i giorni


            weekTemplate.initDays(); //Ciclo sulle Aperture Location per poter impostare l'orario minimo e massimo per ogni giorno

            docLocation.APERTURALOCATION.forEach(function (elApertura) {
              var daySlot = weekTemplate.getSlotDay(elApertura.GIORNO);
              var minDateTime;
              var maxDateTime;
              var middleMinTime;
              var middleMaxTime; //APERTO

              if (elApertura.APERTOCHIUSO) {
                daySlot.APERTOCHIUSO = true; //Imposto orari standard di apertura

                daySlot.setStandardTime(); //Ora devo recuperare ora iniziale e finale definite 
                //sulla apertura location

                minDateTime = elApertura.getOrario('min');
                maxDateTime = elApertura.getOrario('max');
                middleMinTime = elApertura.getOrario('middleMin');
                middleMaxTime = elApertura.getOrario('middleMax'); //Imposto gli orari di inizio e fine se ci sono

                if (minDateTime && maxDateTime) {
                  daySlot.STARTTIME = minDateTime;
                  daySlot.ENDTIME = maxDateTime; //se ci sono gli orari intermedi, li imposto

                  if (middleMaxTime && middleMinTime) {
                    daySlot.setChiusuraIntermedia(middleMinTime, middleMaxTime);
                  }
                } else {
                  //Vuol dire che è aperto tutto il giorno
                  var adesso = new Date();
                  daySlot.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 0, 0, 0);
                  daySlot.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 23, 59, 59);
                }
              } else {
                daySlot.APERTOCHIUSO = false;
              }
            }); //Ora per tutti i giorni del template devo creare tutti gli slottime

            weekTemplate.createSlotTimeDays();
            return weekTemplate;
          }
        }]);

        return LocationService;
      }();

      LocationService.ɵfac = function LocationService_Factory(t) {
        return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_apicall_service__WEBPACK_IMPORTED_MODULE_4__["ApicallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__["DocstructureService"]));
      };

      LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
        token: LocationService,
        factory: LocationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "z5yz":
    /*!**********************************************************!*\
      !*** ./src/app/library/models/cachelistelement.model.ts ***!
      \**********************************************************/

    /*! exports provided: CacheListElement */

    /***/
    function z5yz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CacheListElement", function () {
        return CacheListElement;
      });

      var CacheListElement = /*#__PURE__*/function () {
        function CacheListElement(className) {
          _classCallCheck(this, CacheListElement);

          //Nome della classe
          this.className = className; //Lista elementi

          this.list = [];
        }
        /**
         * Elemento
         * @param element Elemento da aggiungere
         * @param updateExist Prima di aggiungere controlla se presente e in caso aggiorna
         */


        _createClass(CacheListElement, [{
          key: "addElement",
          value: function addElement(element) {
            var updateExist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var findEl;
            var actionAdd = false;

            if (element) {
              //Prima di aggiungerlo controllo se è presente
              if (updateExist) {
                findEl = this.findElementById(element['ID']);

                if (!findEl) {
                  actionAdd = true;
                } else {
                  //Aggiornare le proprietà
                  findEl = element;
                }
              } else {
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

        }, {
          key: "findElementById",
          value: function findElementById(id) {
            return this.list.find(function (el) {
              return el.ID == id;
            });
          }
          /**
           * Ricerca un elemento nella lista per nome campo <-> valore
           * @param fieldName Nome del campo
           * @param value Valore cercato
           */

        }, {
          key: "findElementByFieldName",
          value: function findElementByFieldName(fieldName, value) {
            return this.list.find(function (el) {
              return el[fieldName] == value;
            });
          }
        }]);

        return CacheListElement;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "2Zi2"); // Call the element loader after the platform has been bootstrapped


      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map