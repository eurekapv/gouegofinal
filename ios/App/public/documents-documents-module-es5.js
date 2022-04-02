(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"], {
    /***/
    "EZvh":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/account/documents/documents-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DocumentsPageRoutingModule */

    /***/
    function EZvh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function () {
        return DocumentsPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _documents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./documents.page */
      "r9WI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_1__["DocumentsPage"]
      }];

      var DocumentsPageRoutingModule = function DocumentsPageRoutingModule() {
        _classCallCheck(this, DocumentsPageRoutingModule);
      };

      DocumentsPageRoutingModule.ɵfac = function DocumentsPageRoutingModule_Factory(t) {
        return new (t || DocumentsPageRoutingModule)();
      };

      DocumentsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: DocumentsPageRoutingModule
      });
      DocumentsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "FbXr":
    /*!*************************************************************!*\
      !*** ./src/app/pages/account/documents/documents.module.ts ***!
      \*************************************************************/

    /*! exports provided: DocumentsPageModule */

    /***/
    function FbXr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function () {
        return DocumentsPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/chooser/ngx */
      "UWV4");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./documents-routing.module */
      "EZvh");
      /* harmony import */


      var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./documents.page */
      "r9WI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentsPageModule = function DocumentsPageModule() {
        _classCallCheck(this, DocumentsPageModule);
      };

      DocumentsPageModule.ɵfac = function DocumentsPageModule_Factory(t) {
        return new (t || DocumentsPageModule)();
      };

      DocumentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: DocumentsPageModule
      });
      DocumentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [_ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["Chooser"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DocumentsPageModule, {
          declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "cpn4":
    /*!******************************************!*\
      !*** ./src/app/services/file.service.ts ***!
      \******************************************/

    /*! exports provided: FileService */

    /***/
    function cpn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
      });
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileService = /*#__PURE__*/function () {
        function FileService(file, fileOpener, platform) {
          _classCallCheck(this, FileService);

          this.file = file;
          this.fileOpener = fileOpener;
          this.platform = platform;
        }

        _createClass(FileService, [{
          key: "openDesktop",
          value: function openDesktop(blob) {
            //per scaricare il file creo via javascript un link fittizio agganciando il percorso del blob, e ne scateno l'evento click
            var name = 'File';
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.download = name;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }, {
          key: "openMobile",
          value: function openMobile(blob) {
            var _this = this;

            var fileName = 'Documento';
            var filePath = this.file.cacheDirectory;
            console.log('percorso: ' + filePath);
            this.file.writeFile(filePath, fileName, blob, {
              replace: true
            }).then(function (fileEntry) {
              console.log("File created!");

              _this.fileOpener.open(fileEntry.toURL(), blob.type).then(function () {
                return console.log('File is opened');
              })["catch"](function (err) {
                return console.error('Error openening file: ' + err);
              });
            })["catch"](function (err) {
              console.error("Error creating file: ");
              console.log(err);
              throw err;
            });
          }
          /**
           * scarica e visualizza un blob da mobile o desktop
           */

        }, {
          key: "open",
          value: function open(blob) {
            if (blob) {
              if (this.platform.is("hybrid")) {
                this.openMobile(blob);
              } else {
                this.openDesktop(blob);
              }
            } else {
              console.log('Blob inesistente');
              throw new Error();
            }
          }
        }]);

        return FileService;
      }();

      FileService.ɵfac = function FileService_Factory(t) {
        return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FileService,
        factory: FileService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "r9WI":
    /*!***********************************************************!*\
      !*** ./src/app/pages/account/documents/documents.page.ts ***!
      \***********************************************************/

    /*! exports provided: DocumentsPage */

    /***/
    function r9WI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPage", function () {
        return DocumentsPage;
      });
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/chooser/ngx */
      "UWV4");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/upload/upload.component */
      "omi/");
      /* harmony import */


      var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/tipodocumentazione.model */
      "ci2e");
      /* harmony import */


      var src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/library/models/iddocument.model */
      "5usX");
      /* harmony import */


      var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var src_app_library_models_postResult_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/library/models/postResult.model */
      "uNYz");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/file.service */
      "cpn4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DocumentsPage_ion_buttons_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-buttons", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DocumentsPage_ion_buttons_6_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

            return ctx_r3.onAddDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function DocumentsPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Nessun documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
      }

      function DocumentsPage_div_11_ion_item_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DocumentsPage_div_11_ion_item_2_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);

            var documento_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);

            return ctx_r7.onClickElement(documento_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var documento_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](documento_r6["_DENOMINAZIONE_TipoDocumentazione"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Ultima modifica: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 2, documento_r6.DATAORAMODIFICA, "dd/LL/yyyy"), "");
        }
      }

      function DocumentsPage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, DocumentsPage_div_11_ion_item_2_Template, 9, 5, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.listDocumenti);
        }
      }

      var DocumentsPage = /*#__PURE__*/function () {
        function DocumentsPage(startService, chooser, toastController, modalController, docStructureService, loadingController, platform, file, fileOpener, fileService) {
          _classCallCheck(this, DocumentsPage);

          this.startService = startService;
          this.chooser = chooser;
          this.toastController = toastController;
          this.modalController = modalController;
          this.docStructureService = docStructureService;
          this.loadingController = loadingController;
          this.platform = platform;
          this.file = file;
          this.fileOpener = fileOpener;
          this.fileService = fileService;
          /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */

          this.listDocumenti = [];
          this.inRichiesta = true;
          this.listaTipiDocumento = [];
        }

        _createClass(DocumentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inRichiesta = false;
            this.requestTipiDocumento();
            this.requestListaDocumenti();
          }
          /**
           * Richiedo la lista dei documenti relativa all'utente
           * @param event usato per chiudere il refresher (se la funzione è stata chiamata da esso)
           */

        }, {
          key: "requestListaDocumenti",
          value: function requestListaDocumenti(event) {
            var _this2 = this;

            var reqParams = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_5__["RequestParams"]();
            reqParams.decode.active = true;
            reqParams.decode.addForeignField('IDTIPODOCUMENTAZIONE');

            if (this.startService.actualUtente) {
              this.loadingController.create({
                message: 'Caricamento',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                if (!event) {
                  //se la funzione non è stata chiamata dal refresher, mostro il loading
                  elLoading.present();
                } //Chiedo all'utente di caricare la collection dei documenti


                _this2.docStructureService.loadCollection(_this2.startService.actualUtente, 'DOCUMENTAZIONI', reqParams).then(function (objUtente) {
                  if (!event) {
                    //se la funzione non è stata chiamata dal refresher, chiudo il loadingcontroller
                    elLoading.dismiss();
                  } else {
                    //se la funzione è stata chiamata dal refresher, lo chiudo
                    event.target.complete();
                  } //Recupero la lista dei documenti


                  _this2.listDocumenti = objUtente['DOCUMENTAZIONI']; // console.log(this.listDocumenti);
                })["catch"](function (error) {
                  if (!event) {
                    //se la funzione non è stata chiamata dal refresher, chiudo il loadingcontroller
                    elLoading.dismiss();
                  } else {
                    //se la funzione è stata chiamata dal refresher, lo chiudo
                    event.target.complete();
                  }

                  console.log(error);

                  _this2.showMessage('Errore di connessione'); //Azzero la lista documenti


                  _this2.listDocumenti = [];
                });
              });
            } else {
              this.listDocumenti = [];
            }
          }
          /**
           * Richiedo al server quali tipi documenti
           * sono previsti da caricare
           */

        }, {
          key: "requestTipiDocumento",
          value: function requestTipiDocumento() {
            var _this3 = this;

            //creo il documento di filtro
            var filter = new src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_4__["TipoDocumentazione"](true);
            filter.ZORDER = 0;
            filter.addFilterCondition(src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["OperatorCondition"].maggiore, 'ZORDER'); //Faccio la richiesta

            this.docStructureService.requestNew(filter).then(function (listaTipiDocumento) {
              _this3.listaTipiDocumento = listaTipiDocumento;
            });
          }
          /**
           * Richiesta di aggiungere un nuovo documento
           * Viene aperto in modale il componente, indicando se siamo su desktop o no, e la lista dei tipi documenti accettati
           */

        }, {
          key: "onAddDocument",
          value: function onAddDocument() {
            var _this4 = this;

            this.modalController.create({
              component: src_app_shared_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"],
              componentProps: {
                'isDesktop': this.startService.isDesktop,
                'docTypeList': this.listaTipiDocumento
              }
            }).then(function (elModal) {
              //Mostro la videata per il caricamento
              elModal.present(); //#region GESTIONE CHIUSURA MODALE

              elModal.onWillDismiss().then(function (data) {
                //Controlliamo se l'utente ha inserito dati
                var docUploadDocumentazione = data['data']; //Passo il controllo per inviare i dati al server

                _this4.requestUploadToServer(docUploadDocumentazione);
              }); //#endregion
            });
          }
          /**
           * Invia al server il documento passato nei parametri
           * Se l'invio ha esito positivo, viene eseguito un refresh dati
           */

        }, {
          key: "requestUploadToServer",
          value: function requestUploadToServer(docUploadDocumentazione) {
            var _this5 = this;

            //Informazioni da inviare al server presenti
            if (docUploadDocumentazione) {
              this.loadingController.create({
                message: 'Caricamento',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                elLoading.present(); //creo un utente fittizio da passare alla post

                var fakeUtente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_8__["Utente"](); //Imposto il token utente

                docUploadDocumentazione.TOKENUTENTE = _this5.startService.actualUtente.ID; //creo il body json
                //Questi sono i parametri per l'esportazione

                var paramExport = new src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_6__["ParamsExport"]();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                paramExport.onlyPropertyModified = false;
                paramExport.onlyDocModified = false; //Qui Creo il JSON

                var myJson = docUploadDocumentazione.exportToJSON(paramExport); //ora che ho tutto, faccio la post

                _this5.docStructureService.requestForFunction(fakeUtente, 'uploadDocumentazione', myJson).then(function (rawResponse) {
                  elLoading.dismiss(); //Risposta ricevuta

                  var myResponse = new src_app_library_models_postResult_model__WEBPACK_IMPORTED_MODULE_9__["PostResponse"]();
                  myResponse = rawResponse.response;

                  if (myResponse) {
                    if (myResponse.result) {
                      //sappiamo che tutto è andato bene
                      _this5.showMessage('Caricamento completato'); //Richiedo ancora la lista dei documenti


                      _this5.requestListaDocumenti();
                    } else {
                      //qualcosa è andato storto sul server
                      if (myResponse.message && myResponse.message.length !== 0) {
                        _this5.showMessage(myResponse.message);
                      } else {
                        _this5.showMessage('Errore caricamento');
                      }
                    }
                  } else {
                    //non ho la risposta, c'è stato un errore
                    _this5.showMessage('Errore di connessione');
                  }
                })["catch"](function (error) {
                  elLoading.dismiss(); //errore di comunicazione col server

                  console.log(error);

                  _this5.showMessage('Errore di connnessione');
                });
              });
            }
          }
          /**
           * Eseguito un click per lo scaricamento
           */

        }, {
          key: "onClickElement",
          value: function onClickElement(elemento) {
            var _this6 = this;

            //creo il loading e lo presento
            if (elemento && elemento.FILENAMEESTENSIONE && elemento.FILENAMEESTENSIONE.length > 0) {
              this.loadingController.create({
                message: 'Caricamento',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                elLoading.present(); //ora faccio la get del file

                _this6.startService.requestDocumento(elemento.FILENAMEESTENSIONE).then(function (blob) {
                  //E' andato tutto bene, ho il blob
                  elLoading.dismiss();

                  if (blob) {
                    //Effettuo l'apertura del file ricevuto
                    _this6.fileService.open(blob);
                  } else {
                    _this6.showMessage('File non visualizzabile');
                  }
                })["catch"](function (error) {
                  elLoading.dismiss(); //qualcosa non ha funzionato

                  console.log(error);

                  _this6.showMessage('Impossibile scaricare il file');
                });
              });
            } else {
              this.showMessage('Errore, file non presente in archivio');
            }
          }
          /**
           * Visualizza un messaggio
           */

        }, {
          key: "showMessage",
          value: function showMessage(messaggio) {
            this.toastController.create({
              message: messaggio,
              duration: 3000
            }).then(function (elToast) {
              elToast.present();
            });
          }
        }]);

        return DocumentsPage;
      }();

      DocumentsPage.ɵfac = function DocumentsPage_Factory(t) {
        return new (t || DocumentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__["Chooser"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"]));
      };

      DocumentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: DocumentsPage,
        selectors: [["app-documents"]],
        decls: 12,
        vars: 3,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/account"], ["slot", "end", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["class", "nofind-cnt", 4, "ngIf"], [4, "ngIf"], ["slot", "end"], [3, "click"], ["name", "add"], [1, "nofind-cnt"], [3, "click", 4, "ngFor", "ngForOf"], ["slot", "start", "color", "", "name", "document-text-outline", 1, "icon-left"], ["slot", "end", "color", "primary", "name", "cloud-download-outline"]],
        template: function DocumentsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "I tuoi documenti");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, DocumentsPage_ion_buttons_6_Template, 3, 0, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-refresher", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function DocumentsPage_Template_ion_refresher_ionRefresh_8_listener($event) {
              return ctx.requestListaDocumenti($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, DocumentsPage_div_10_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, DocumentsPage_div_11_Template, 3, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx.listaTipiDocumento == null ? null : ctx.listaTipiDocumento.length) != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listDocumenti.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listDocumenti.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        styles: ["#doc-nofind-cnt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: -webkit-flex;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-warning);\n}\n\n.icon-left[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jdW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUlBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZG9jLW5vZmluZC1jbnQgIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uaWNvbi1sZWZ0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=documents-documents-module-es5.js.map