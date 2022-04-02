(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"], {
    /***/
    "2DcM":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/invoices/invoices.page.ts ***!
      \*********************************************************/

    /*! exports provided: InvoicesPage */

    /***/
    function DcM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesPage", function () {
        return InvoicesPage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_pipes_tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/pipes/tipomasterdocumento.pipe */
      "xVAv");

      function InvoicesPage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nessuna ricevuta");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function InvoicesPage_div_15_ion_item_2_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ricevuta_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ricevuta_r3.NOTESSTAMPA);
        }
      }

      function InvoicesPage_div_15_ion_item_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InvoicesPage_div_15_ion_item_2_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            var ricevuta_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r6.onClickElement(ricevuta_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "tipomasterdocumento");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InvoicesPage_div_15_ion_item_2_p_9_Template, 2, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ricevuta_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, ricevuta_r3.TIPOLOGIA), " num. ", ricevuta_r3.NUMEROSTAMPA, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Emessa il: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 7, ricevuta_r3.DATADOCUMENTO, "dd/LL/yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ricevuta_r3.NOTESSTAMPA && ricevuta_r3.NOTESSTAMPA.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 10, ricevuta_r3.TOTDOCUMENTO, "EUR"));
        }
      }

      function InvoicesPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InvoicesPage_div_15_ion_item_2_Template, 13, 13, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.listRicevute);
        }
      }

      var InvoicesPage = /*#__PURE__*/function () {
        function InvoicesPage(loadingController, startService, file, fileOpener, toastController, navController) {
          _classCallCheck(this, InvoicesPage);

          this.loadingController = loadingController;
          this.startService = startService;
          this.file = file;
          this.fileOpener = fileOpener;
          this.toastController = toastController;
          this.navController = navController;
          this.actualUtente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_4__["Utente"]();
          this.listRicevute = [];
          this.selectedYear = new Date().toISOString();
        }

        _createClass(InvoicesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //recupero l'utente
            this.actualUtente = this.startService.actualUtente; //se non ho l'utente devo uscire

            if (!this.actualUtente) {
              this.navController.navigateRoot('/home');
            } else {
              //posso recuperare l'elenco delle ricevute 
              this.requestRicevute();
            }
          }
          /**
           * richiede al servizio l'utente con le ricevute, e lo inserisce in actualUtente'
           * @param event Evento opzionale da completare dopo aver eseguito l'aggiornamento (usato per il refresher)
           */

        }, {
          key: "requestRicevute",
          value: function requestRicevute(event) {
            var _this = this;

            //prima di tutto calcolo l'anno
            var myDate = new Date(this.selectedYear);
            var anno = myDate.getFullYear();

            if (event) {
              //La funzione è stata chiamata dal refresher
              this.startService.requestInvoices(this.actualUtente, anno).then(function (listRicevute) {
                _this.listRicevute = listRicevute;
                event.target.complete();
              })["catch"](function (error) {
                console.log(error);

                _this.showMessage('Errore di connessione');

                event.target.complete();
              });
            } else {
              //la funzione non è stata chiamata dal refresher
              this.loadingController.create().then(function (elLoading) {
                elLoading.present();

                _this.startService.requestInvoices(_this.actualUtente, anno).then(function (listRicevute) {
                  _this.listRicevute = listRicevute;
                  elLoading.dismiss();
                })["catch"](function (error) {
                  console.log(error);

                  _this.showMessage('Errore di connessione');

                  elLoading.dismiss();
                });
              });
            }
          }
        }, {
          key: "onClickElement",
          value: function onClickElement(elemento) {
            var _this2 = this;

            //creo il loading e lo presento
            this.loadingController.create({
              message: 'Caricamento',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (elLoading) {
              elLoading.present(); //ora faccio la get del file

              _this2.startService.downloadInvoice(elemento).then(function (response) {
                //risposta ricevuta
                elLoading.dismiss();

                if (response.result) {
                  // è andato tutto bene, converto il base64 in blob
                  _this2.startService.base64toBlob(response.code).then(function (blob) {
                    //ora che ho il blob, lo posso aprire
                    if (_this2.startService.isDesktop) {
                      //apertura per desktop
                      _this2.openDesktop(blob);
                    } else {
                      //apertura per mobile
                      _this2.openMobile(blob);
                    }
                  });
                } else {
                  //la richiesta non è andata a buon fine
                  _this2.showMessage(response.message);
                }
              })["catch"](function (error) {
                //errore di connessione
                elLoading.dismiss();
                console.log(error);

                _this2.showMessage('Errore di connessione');
              });
            });
          }
        }, {
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
            var _this3 = this;

            var fileName = 'Documento';
            var filePath = this.file.cacheDirectory;
            this.file.writeFile(filePath, fileName, blob, {
              replace: true
            }).then(function (fileEntry) {
              _this3.fileOpener.open(fileEntry.toURL(), blob.type).then(function () {
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

        return InvoicesPage;
      }();

      InvoicesPage.ɵfac = function InvoicesPage_Factory(t) {
        return new (t || InvoicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]));
      };

      InvoicesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: InvoicesPage,
        selectors: [["app-invoices"]],
        decls: 16,
        vars: 3,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/account"], ["lines", "none", "color", ""], ["displayFormat", "YYYY", "placeholder", "Periodo attuale", "min", "2000", 3, "ngModel", "ngModelChange"], ["name", "chevron-down-outline", "color", "primary", "slot", "end"], ["slot", "fixed", 3, "ionRefresh"], ["class", "nofind-cnt", 4, "ngIf"], [4, "ngIf"], [1, "nofind-cnt"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["slot", "start", "color", "", "name", "document-text-outline", 1, "icon-left"], ["color", "primary", "slot", "end"]],
        template: function InvoicesPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Le tue ricevute");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Periodo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-datetime", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InvoicesPage_Template_ion_datetime_ngModelChange_9_listener($event) {
              return ctx.selectedYear = $event;
            })("ngModelChange", function InvoicesPage_Template_ion_datetime_ngModelChange_9_listener() {
              return ctx.requestRicevute();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-refresher", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function InvoicesPage_Template_ion_refresher_ionRefresh_12_listener($event) {
              return ctx.requestRicevute($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, InvoicesPage_div_14_Template, 5, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, InvoicesPage_div_15_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.listRicevute.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.listRicevute.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"]],
        pipes: [_shared_pipes_tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_8__["TipomasterdocumentoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlcy5wYWdlLnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "9Xeq":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/pipes.module.ts ***!
      \**********************************************/

    /*! exports provided: PipesModule */

    /***/
    function Xeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./label-giorno.pipe */
      "Tgan");
      /* harmony import */


      var _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./struttura-campo.pipe */
      "OOC/");
      /* harmony import */


      var _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tipo-campo.pipe */
      "Hx3r");
      /* harmony import */


      var _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settore-attivita.pipe */
      "ozjt");
      /* harmony import */


      var _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tipo-corso.pipe */
      "KU5w");
      /* harmony import */


      var _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./target-sesso.pipe */
      "ukHt");
      /* harmony import */


      var _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stato-slot.pipe */
      "s17d");
      /* harmony import */


      var _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stato-prenotazione.pipe */
      "YH3n");
      /* harmony import */


      var _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ambito-news.pipe */
      "UfKR");
      /* harmony import */


      var _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./giorni-previsti.pipe */
      "uxXW");
      /* harmony import */


      var _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./classe-documento.pipe */
      "YFTx");
      /* harmony import */


      var _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tipomasterdocumento.pipe */
      "xVAv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵfac = function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PipesModule, {
          declarations: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"], _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"], _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"], _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"], _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"], _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"], _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"], _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"], _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"], _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"], _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"], _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]],
          exports: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"], _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"], _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"], _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"], _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"], _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"], _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"], _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"], _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"], _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"], _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"], _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]]
        });
      })();
      /***/

    },

    /***/
    "Hx3r":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/tipo-campo.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TipoCampoPipe */

    /***/
    function Hx3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCampoPipe", function () {
        return TipoCampoPipe;
      });
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipoCampoPipe = /*#__PURE__*/function () {
        function TipoCampoPipe() {
          _classCallCheck(this, TipoCampoPipe);
        }

        _createClass(TipoCampoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCampo"], value);
            return label;
          }
        }]);

        return TipoCampoPipe;
      }();

      TipoCampoPipe.ɵfac = function TipoCampoPipe_Factory(t) {
        return new (t || TipoCampoPipe)();
      };

      TipoCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipoCampo",
        type: TipoCampoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "KU5w":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/tipo-corso.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TipoCorsoPipe */

    /***/
    function KU5w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCorsoPipe", function () {
        return TipoCorsoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipoCorsoPipe = /*#__PURE__*/function () {
        function TipoCorsoPipe() {
          _classCallCheck(this, TipoCorsoPipe);
        }

        _createClass(TipoCorsoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCorso"], value);
            return label;
          }
        }]);

        return TipoCorsoPipe;
      }();

      TipoCorsoPipe.ɵfac = function TipoCorsoPipe_Factory(t) {
        return new (t || TipoCorsoPipe)();
      };

      TipoCorsoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipoCorso",
        type: TipoCorsoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "OOC/":
    /*!******************************************************!*\
      !*** ./src/app/shared/pipes/struttura-campo.pipe.ts ***!
      \******************************************************/

    /*! exports provided: StrutturaCampoPipe */

    /***/
    function OOC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StrutturaCampoPipe", function () {
        return StrutturaCampoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StrutturaCampoPipe = /*#__PURE__*/function () {
        function StrutturaCampoPipe() {
          _classCallCheck(this, StrutturaCampoPipe);
        }

        _createClass(StrutturaCampoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StrutturaCampo"], value);
            return label;
          }
        }]);

        return StrutturaCampoPipe;
      }();

      StrutturaCampoPipe.ɵfac = function StrutturaCampoPipe_Factory(t) {
        return new (t || StrutturaCampoPipe)();
      };

      StrutturaCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "strutturaCampo",
        type: StrutturaCampoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "SAL4":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/account/invoices/invoices-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InvoicesPageRoutingModule */

    /***/
    function SAL4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesPageRoutingModule", function () {
        return InvoicesPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _invoices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoices.page */
      "2DcM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _invoices_page__WEBPACK_IMPORTED_MODULE_1__["InvoicesPage"]
      }];

      var InvoicesPageRoutingModule = function InvoicesPageRoutingModule() {
        _classCallCheck(this, InvoicesPageRoutingModule);
      };

      InvoicesPageRoutingModule.ɵfac = function InvoicesPageRoutingModule_Factory(t) {
        return new (t || InvoicesPageRoutingModule)();
      };

      InvoicesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: InvoicesPageRoutingModule
      });
      InvoicesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InvoicesPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Tgan":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/label-giorno.pipe.ts ***!
      \***************************************************/

    /*! exports provided: LabelGiornoPipe */

    /***/
    function Tgan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabelGiornoPipe", function () {
        return LabelGiornoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LabelGiornoPipe = /*#__PURE__*/function () {
        function LabelGiornoPipe() {
          _classCallCheck(this, LabelGiornoPipe);
        }

        _createClass(LabelGiornoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';

            switch (value) {
              case 1:
                label = 'domenica';
                break;

              case 2:
                label = 'lunedi\'';
                break;

              case 3:
                label = 'martedi\'';
                break;

              case 4:
                label = 'mercoledi\'';
                break;

              case 5:
                label = 'giovedi\'';
                break;

              case 6:
                label = 'venerdi\'';
                break;

              case 7:
                label = 'sabato';
                break;
            }

            return label;
          }
        }]);

        return LabelGiornoPipe;
      }();

      LabelGiornoPipe.ɵfac = function LabelGiornoPipe_Factory(t) {
        return new (t || LabelGiornoPipe)();
      };

      LabelGiornoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "labelGiorno",
        type: LabelGiornoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "UfKR":
    /*!**************************************************!*\
      !*** ./src/app/shared/pipes/ambito-news.pipe.ts ***!
      \**************************************************/

    /*! exports provided: AmbitoNewsPipe */

    /***/
    function UfKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmbitoNewsPipe", function () {
        return AmbitoNewsPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AmbitoNewsPipe = /*#__PURE__*/function () {
        function AmbitoNewsPipe() {
          _classCallCheck(this, AmbitoNewsPipe);
        }

        _createClass(AmbitoNewsPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["AmbitoNews"], value);
            return label;
          }
        }]);

        return AmbitoNewsPipe;
      }();

      AmbitoNewsPipe.ɵfac = function AmbitoNewsPipe_Factory(t) {
        return new (t || AmbitoNewsPipe)();
      };

      AmbitoNewsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "ambitoNews",
        type: AmbitoNewsPipe,
        pure: true
      });
      /***/
    },

    /***/
    "Xv1p":
    /*!***********************************************************!*\
      !*** ./src/app/pages/account/invoices/invoices.module.ts ***!
      \***********************************************************/

    /*! exports provided: InvoicesPageModule */

    /***/
    function Xv1p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function () {
        return InvoicesPageModule;
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


      var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoices-routing.module */
      "SAL4");
      /* harmony import */


      var _invoices_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./invoices.page */
      "2DcM");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InvoicesPageModule = function InvoicesPageModule() {
        _classCallCheck(this, InvoicesPageModule);
      };

      InvoicesPageModule.ɵfac = function InvoicesPageModule_Factory(t) {
        return new (t || InvoicesPageModule)();
      };

      InvoicesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: InvoicesPageModule
      });
      InvoicesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _invoices_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoicesPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](InvoicesPageModule, {
          declarations: [_invoices_page__WEBPACK_IMPORTED_MODULE_4__["InvoicesPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _invoices_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoicesPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
        });
      })();
      /***/

    },

    /***/
    "YFTx":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/classe-documento.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: ClasseDocumentoPipe */

    /***/
    function YFTx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClasseDocumentoPipe", function () {
        return ClasseDocumentoPipe;
      });
      /* harmony import */


      var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/tipodocumentazione.model */
      "ci2e");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClasseDocumentoPipe = /*#__PURE__*/function () {
        function ClasseDocumentoPipe() {
          _classCallCheck(this, ClasseDocumentoPipe);
        }

        _createClass(ClasseDocumentoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].decode(src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["ClasseDocumento"], value);
            return label;
          }
        }]);

        return ClasseDocumentoPipe;
      }();

      ClasseDocumentoPipe.ɵfac = function ClasseDocumentoPipe_Factory(t) {
        return new (t || ClasseDocumentoPipe)();
      };

      ClasseDocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "classeDocumento",
        type: ClasseDocumentoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "YH3n":
    /*!*********************************************************!*\
      !*** ./src/app/shared/pipes/stato-prenotazione.pipe.ts ***!
      \*********************************************************/

    /*! exports provided: StatoPrenotazionePipe */

    /***/
    function YH3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoPrenotazionePipe", function () {
        return StatoPrenotazionePipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatoPrenotazionePipe = /*#__PURE__*/function () {
        function StatoPrenotazionePipe() {
          _classCallCheck(this, StatoPrenotazionePipe);
        }

        _createClass(StatoPrenotazionePipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoPrenotazione"], value);
            return label;
          }
        }]);

        return StatoPrenotazionePipe;
      }();

      StatoPrenotazionePipe.ɵfac = function StatoPrenotazionePipe_Factory(t) {
        return new (t || StatoPrenotazionePipe)();
      };

      StatoPrenotazionePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "statoPrenotazione",
        type: StatoPrenotazionePipe,
        pure: true
      });
      /***/
    },

    /***/
    "ozjt":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/settore-attivita.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: SettoreAttivitaPipe */

    /***/
    function ozjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettoreAttivitaPipe", function () {
        return SettoreAttivitaPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettoreAttivitaPipe = /*#__PURE__*/function () {
        function SettoreAttivitaPipe() {
          _classCallCheck(this, SettoreAttivitaPipe);
        }

        _createClass(SettoreAttivitaPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"], value);
            return label;
          }
        }]);

        return SettoreAttivitaPipe;
      }();

      SettoreAttivitaPipe.ɵfac = function SettoreAttivitaPipe_Factory(t) {
        return new (t || SettoreAttivitaPipe)();
      };

      SettoreAttivitaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "settoreAttivita",
        type: SettoreAttivitaPipe,
        pure: true
      });
      /***/
    },

    /***/
    "s17d":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/stato-slot.pipe.ts ***!
      \*************************************************/

    /*! exports provided: StatoSlotPipe */

    /***/
    function s17d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoSlotPipe", function () {
        return StatoSlotPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatoSlotPipe = /*#__PURE__*/function () {
        function StatoSlotPipe() {
          _classCallCheck(this, StatoSlotPipe);
        }

        _createClass(StatoSlotPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoSlot"], value);
            return label;
          }
        }]);

        return StatoSlotPipe;
      }();

      StatoSlotPipe.ɵfac = function StatoSlotPipe_Factory(t) {
        return new (t || StatoSlotPipe)();
      };

      StatoSlotPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "statoSlot",
        type: StatoSlotPipe,
        pure: true
      });
      /***/
    },

    /***/
    "ukHt":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/target-sesso.pipe.ts ***!
      \***************************************************/

    /*! exports provided: TargetSessoPipe */

    /***/
    function ukHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TargetSessoPipe", function () {
        return TargetSessoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TargetSessoPipe = /*#__PURE__*/function () {
        function TargetSessoPipe() {
          _classCallCheck(this, TargetSessoPipe);
        }

        _createClass(TargetSessoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TargetSesso"], value);
            return label;
          }
        }]);

        return TargetSessoPipe;
      }();

      TargetSessoPipe.ɵfac = function TargetSessoPipe_Factory(t) {
        return new (t || TargetSessoPipe)();
      };

      TargetSessoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "targetSesso",
        type: TargetSessoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "uxXW":
    /*!******************************************************!*\
      !*** ./src/app/shared/pipes/giorni-previsti.pipe.ts ***!
      \******************************************************/

    /*! exports provided: GiorniPrevistiPipe */

    /***/
    function uxXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiorniPrevistiPipe", function () {
        return GiorniPrevistiPipe;
      });
      /* harmony import */


      var src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/settimana.model */
      "w48H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GiorniPrevistiPipe = /*#__PURE__*/function () {
        function GiorniPrevistiPipe() {
          _classCallCheck(this, GiorniPrevistiPipe);
        }

        _createClass(GiorniPrevistiPipe, [{
          key: "transform",
          value: //Il Pipe serve a trasformare una sequenza di numeri che rappresentano giorni
          //ad esempio 2;3;4 nel rispettivo stringa Martedi, Mercoledi, Giovedi
          //I giorni previsti sono in versione C# 1 = Dom, 2 Lun, etc
          //Qui li passo in versione JS che sono zero-base
          function transform(value, language) {
            var strDay = '';
            var arGiorni = [];
            var valueReturn = '';
            var smallVersion = false;
            var indexDay = 0;

            if (value !== undefined) {
              if (value.length !== 0) {
                arGiorni = value.split(';');
              }
            }

            if (arGiorni.length !== 0) {
              //Se ho più di 3 giorni chiedo la versione short
              if (arGiorni.length > 3) {
                smallVersion = true;
              } //Ciclo sui giorni e li decodifico


              arGiorni.forEach(function (element) {
                try {
                  indexDay = parseInt(element);
                  indexDay--;

                  if (smallVersion) {
                    strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getsmallLabel(indexDay, language);
                  } else {
                    strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getLabel(indexDay, language);
                  }

                  if (valueReturn.length !== 0) {
                    valueReturn += ', ';
                  }

                  valueReturn += strDay;
                } catch (error) {
                  console.log('Error Parse');
                }
              });
            }

            return valueReturn;
          }
        }]);

        return GiorniPrevistiPipe;
      }();

      GiorniPrevistiPipe.ɵfac = function GiorniPrevistiPipe_Factory(t) {
        return new (t || GiorniPrevistiPipe)();
      };

      GiorniPrevistiPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "giorniPrevisti",
        type: GiorniPrevistiPipe,
        pure: true
      });
      /***/
    },

    /***/
    "xVAv":
    /*!**********************************************************!*\
      !*** ./src/app/shared/pipes/tipomasterdocumento.pipe.ts ***!
      \**********************************************************/

    /*! exports provided: TipomasterdocumentoPipe */

    /***/
    function xVAv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipomasterdocumentoPipe", function () {
        return TipomasterdocumentoPipe;
      });
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipomasterdocumentoPipe = /*#__PURE__*/function () {
        function TipomasterdocumentoPipe() {
          _classCallCheck(this, TipomasterdocumentoPipe);
        }

        _createClass(TipomasterdocumentoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoMasterDocumento"], value);
            return label;
          }
        }]);

        return TipomasterdocumentoPipe;
      }();

      TipomasterdocumentoPipe.ɵfac = function TipomasterdocumentoPipe_Factory(t) {
        return new (t || TipomasterdocumentoPipe)();
      };

      TipomasterdocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipomasterdocumento",
        type: TipomasterdocumentoPipe,
        pure: true
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=invoices-invoices-module-es5.js.map