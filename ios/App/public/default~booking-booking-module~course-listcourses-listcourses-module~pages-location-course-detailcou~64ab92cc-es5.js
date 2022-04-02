(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"], {
    /***/
    "plgS":
    /*!*************************************************!*\
      !*** ./src/app/models/payment-process.model.ts ***!
      \*************************************************/

    /*! exports provided: PaymentProcess */

    /***/
    function plgS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentProcess", function () {
        return PaymentProcess;
      });
      /* harmony import */


      var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./valuelist.model */
      "W8X0"); //Documento per la gestione del processo di pagamento


      var PaymentProcess = function PaymentProcess(myModePayment) {
        _classCallCheck(this, PaymentProcess);

        this.idElectronicResult = ''; //Impostare la modalita di pagamento

        this.modePayment = myModePayment; //In caso di pagaStruttura o Bonifico viene subito impostato il canale

        if (myModePayment == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMode"].pagaStruttura) {
          this.channelPayment = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["PaymentChannel"].onSite; //Processo di pagamento concluso

          this.processResult = true;
        } else if (myModePayment == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMode"].pagaBonifico) {
          this.channelPayment = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["PaymentChannel"].bonifico; //Processo di pagamento concluso

          this.processResult = true;
        }
      };
      /***/

    },

    /***/
    "uV3x":
    /*!***********************************************!*\
      !*** ./src/app/pages/payment/payment.page.ts ***!
      \***********************************************/

    /*! exports provided: PaymentPage */

    /***/
    function uV3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
        return PaymentPage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/payment-process.model */
      "plgS");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PaymentPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Connessione con servizi di pagamento...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-progress-bar", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function PaymentPage_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(modalController, toastController) {
          _classCallCheck(this, PaymentPage);

          this.modalController = modalController;
          this.toastController = toastController;
          this.urlPayPalScriptCheckOut = 'https://www.paypalobjects.com/api/checkout.js';
          this.urlPayPalScriptSmart = 'https://www.paypal.com/sdk/js?client-id=';
          this.urlPaypal = '';
          this.paypalVersion = 'checkout'; //checkout o smart
          //Proprietà per la visualizzazione delle porzioni di pagamento

          this.showPaypal = false;
          this.showStripe = false;
          this.showApplePay = false;
          this.showGPay = false; //Nessuna modalità di pagamento è stata trovata

          this.noPayment = false;
          this.showProgressBar = true; //Uso la nuova modalità SmartButton di Paypal

          this.paypalVersion = 'smart';
        }

        _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initPaymentMethods();
          }
          /**
           * Inizializzo i metodi di pagamento che riesco a gestire
           */

        }, {
          key: "initPaymentMethods",
          value: function initPaymentMethods() {
            var _this2 = this;

            //devo scorrere tutti i pagamenti possibili e gestirli
            this.noPayment = true;

            if (this.listAreaPaymentSettings && this.listAreaPaymentSettings.length != 0) {
              var _loop = function _loop(index) {
                var elSettingPayment = _this2.listAreaPaymentSettings[index];

                if (elSettingPayment.paymentInApp) {
                  switch (elSettingPayment.TIPOPAYMENT) {
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal:
                      //Flag noPayment spento
                      _this2.noPayment = false; //Pagamento Paypal

                      _this2.showPaypal = true; //Determino URL SCRIPT da caricare

                      if (_this2.paypalVersion == 'checkout') {
                        _this2.urlPaypal = _this2.urlPayPalScriptCheckOut;
                      } else if (_this2.paypalVersion == 'smart') {
                        //Nella modalità SMART alla fine dell'URL c'e' il ClientID da  utilizzare
                        switch (elSettingPayment.PPENVIRONMENT) {
                          case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentEnvironment"].production:
                            _this2.urlPaypal = _this2.urlPayPalScriptSmart + elSettingPayment.PPCLIENTIDPRODUCTION;
                            break;

                          case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentEnvironment"].test:
                            _this2.urlPaypal = _this2.urlPayPalScriptSmart + elSettingPayment.PPCLIENTIDSANDBOX;
                            break;

                          default:
                            break;
                        }

                        _this2.urlPaypal += '&currency=EUR';
                      } //Lo script Paypal è già presente nell'header


                      if (_this2.scriptOnHead(_this2.urlPaypal)) {
                        setTimeout(function () {
                          //Renderizzo il bottone
                          _this2.renderPayPalBtn(elSettingPayment);
                        }, 500);
                      } else {
                        //Lo Script devo prima caricarlo e poi renderizzarli
                        //gestione paypal
                        _this2.loadDinamicScript(_this2.urlPaypal).then(function () {
                          setTimeout(function () {
                            //Renderizzo il bottone
                            _this2.renderPayPalBtn(elSettingPayment);
                          }, 500);
                        })["catch"](function () {
                          //Non sono riuscito a caricare lo script di pagamento, probabilmente le credenziali di paypal sono state impostate male lato server
                          _this2.showMessage("Errore nelle impostazioni di PayPal; contatta la struttura");

                          _this2.onCancelPayment();
                        });
                      }

                      break;

                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].stripe:
                      //Flag noPayment spento
                      _this2.noPayment = false; //Pagamento Stripe

                      _this2.showStripe = true;
                      break;

                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].applePay:
                      //Flag noPayment spento
                      _this2.noPayment = false; //Pagamento Apple Pay

                      _this2.showApplePay = true;
                      break;

                    default:
                      break;
                  }
                }
              };

              for (var index = 0; index < this.listAreaPaymentSettings.length; index++) {
                _loop(index);
              }
            } else {
              //Non ci sono pagamenti elettronici attivabili
              this.noPayment = true;
            }
          }
          /**
           * Metodo da richiamare quando si vuole annullare il pagamento
           * e chiudere la modale
           */

        }, {
          key: "onCancelPayment",
          value: function onCancelPayment() {
            //Segno il fallimento del processo di pagamento
            this.paymentData.processResult = false;
            this.paymentData.messageResult = 'Pagamento annullato'; //Chiudo la modale inviando il documento

            this.modalController.dismiss(this.paymentData);
          }
          /**
           * Metodo da richiamare quando si vuole concludere il pagamento
           * positivamente
           * @param channel Canale utilizzato (Paypal, Stripe etc)
           * @param idTransaction Transazione
           */

        }, {
          key: "onSuccessPayment",
          value: function onSuccessPayment(channel, idTransaction) {
            //Imposto il canale del pagamento utilizzato    
            this.paymentData.channelPayment = channel; //Segno il valore idTransaction

            this.paymentData.idElectronicResult = idTransaction; //Pagamento completato

            this.paymentData.processResult = true;
            this.paymentData.messageResult = 'Transazione completata con successo'; //Chiudo la modale inviando il documento

            this.modalController.dismiss(this.paymentData);
          }
          /**
           * Metodo da richiamare dentro agli eventi Paypal
           * per segnalare il buon fine del pagamento
           *
           */

        }, {
          key: "OnSuccessPaypal",
          value: function OnSuccessPaypal(details) {
            //Pagamento avvenuto con successo su Paypal
            var idTransaction;
            var namePayer;
            var status;

            if (details) {
              switch (this.paypalVersion) {
                case 'smart':
                  //La Transaction puo' essere intercettata tramite
                  //https://developer.paypal.com/docs/checkout/reference/server-integration/capture-transaction/
                  namePayer = details.payer.name.given_name;
                  idTransaction = details.id;
                  status = details.status;
                  console.log(details);
                  break;

                case 'checkout':
                  namePayer = details.payer.name.given_name;
                  idTransaction = details.id;
                  status = details.status;
                  break;

                default:
                  break;
              } //Per ora invio solo idTransaction non so se mi serve anche altro


              this.onSuccessPayment(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentChannel"].paypal, idTransaction);
            }
          } //carico dinamicamente lo script nella pagina

        }, {
          key: "loadDinamicScript",
          value: function loadDinamicScript(urlScript) {
            return new Promise(function (resolve, reject) {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = urlScript;
              document.getElementsByTagName('head')[0].appendChild(script);

              script.onload = function () {
                console.log('Script correctly loaded');
                resolve();
              };

              script.onerror = function (err) {
                console.log(err);
                reject();
              };
            });
          } // Cambiare con la modalita nuova
          // https://developer.paypal.com/docs/checkout/integrate/

        }, {
          key: "renderPayPalBtn",
          value: function renderPayPalBtn(payPalSettings) {
            var _this = this;

            if (this.paypalVersion == 'checkout') {
              this.showProgressBar = false;
              paypal.Button.render({
                // Configure environment
                //TODO environment va decodificato con "production" o "sandbox"
                env: payPalSettings.PPENVIRONMENT == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentEnvironment"].production ? 'production' : 'sandbox',
                client: {
                  sandbox: payPalSettings.PPCLIENTIDSANDBOX,
                  production: payPalSettings.PPCLIENTIDPRODUCTION
                },
                // Customize button (optional)
                locale: 'it_IT',
                style: {
                  size: 'responsive',
                  color: 'gold',
                  shape: 'pill',
                  label: 'pay',
                  fundingicons: true
                },
                // Enable Pay Now checkout flow (optional)
                commit: true,
                // Set up a payment
                payment: function payment(data, actions) {
                  return actions.payment.create({
                    transactions: [{
                      amount: {
                        total: _this.paymentData.amount + '',
                        currency: _this.paymentData.currency
                      },
                      description: _this.paymentData.description
                    }],
                    note_to_payer: 'Contatta la struttura per ogni problematica sul pagamento.'
                  });
                },
                // Execute the payment
                onAuthorize: function onAuthorize(data, actions) {
                  return actions.payment.execute().then(function (details) {
                    //######## Handler pagamento effettuato con successo ###########
                    console.log('Pagamento confermato!'); //Chiamo la funzione Paypal di Conferma

                    _this.OnSuccessPaypal(details);
                  });
                }
              }, '#customBtnPaypal');
            } else if (this.paypalVersion == 'smart') {
              this.showProgressBar = false;
              paypal.Buttons({
                createOrder: function createOrder(data, action) {
                  //Funzione con i dati della transazione
                  return action.order.create({
                    purchase_units: [{
                      amount: {
                        value: _this.paymentData.amount + '',
                        description: _this.paymentData.description
                      }
                    }]
                  });
                },
                onApprove: function onApprove(data, actions) {
                  return actions.order.capture().then(function (details) {
                    //Transazione avvenuta con successo
                    //Chiamo la funzione Paypal di Conferma
                    _this.OnSuccessPaypal(details);
                  });
                }
              }).render('#customBtnPaypal');
            }
          }
          /**
           * Verifica se un file è già presente nell'header come script caricato
           *
           * @param source File da controllare
           */

        }, {
          key: "scriptOnHead",
          value: function scriptOnHead(source) {
            var scripts = document.getElementsByTagName("script");
            var onHead = false;

            for (var i = 0; i < scripts.length; i++) {
              if (scripts[i].getAttribute('src') == source) {
                onHead = true;
                break;
              }
            }

            return onHead;
          }
        }, {
          key: "showMessage",
          value: function showMessage(message) {
            //Creo un messaggio
            this.toastController.create({
              message: message,
              duration: 3000
            }).then(function (tstMsg) {
              tstMsg.present();
            });
          }
        }]);

        return PaymentPage;
      }();

      PaymentPage.ɵfac = function PaymentPage_Factory(t) {
        return new (t || PaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]));
      };

      PaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: PaymentPage,
        selectors: [["app-payment"]],
        inputs: {
          paymentData: "paymentData",
          listAreaPaymentSettings: "listAreaPaymentSettings"
        },
        decls: 19,
        vars: 7,
        consts: [["color", "primary"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "ios", "close", "md", "close"], ["color", "danger", "expand", "block", 1, "full-buttons", 3, "click"], [4, "ngIf"], [1, "cart-total"], ["lines", "none"], ["slot", "end", 1, "ion-text-right"], ["class", "cart-items", 4, "ngIf"], ["mode", "ios"], ["type", "indeterminate"], [1, "cart-items"], ["id", "customBtnPaypal"]],
        template: function PaymentPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_button_click_3_listener() {
              return ctx.onCancelPayment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Pagamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_button_click_8_listener() {
              return ctx.onCancelPayment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Aspetta, voglio modificare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PaymentPage_div_10_Template, 6, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PaymentPage_div_18_Template, 4, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showProgressBar);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.paymentData.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 4, ctx.paymentData.amount, ctx.paymentData.currency));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPaypal);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonProgressBar"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: [".welcome-card[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 90vw;\n}\n.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.welcome-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.welcome-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nion-button.full-buttons[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #434343;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  color: #434343;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  color: #919191;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .qty-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .qty-selector[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .qty-selector[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #565656 !important;\n  font-size: 16px;\n}\n.cart-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   #customBtnPaypal[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.address[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n.address[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\nhr[_ngcontent-%COMP%] {\n  background: #97979713;\n}\n.cart-total[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.cart-total[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.cart-total[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:nth-child(1) {\n  color: #919191;\n}\n.cart-total[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:nth-child(2) {\n  color: #434343;\n}\nion-footer[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-footer[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUFJO0VBQ0UsWUFBQTtBQUVOO0FBQUk7RUFDRSxZQUFBO0FBRU47QUFHQSxtQkFBQTtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURGO0FBS0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUZGO0FBTUU7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSE47QUFLTTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUhWO0FBS1U7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhkO0FBS2M7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtBQUhsQjtBQVFjO0VBQ0ksZUFBQTtBQU5sQjtBQVNjO0VBQ0ksY0FBQTtBQVBsQjtBQVNjO0VBQ0ksY0FBQTtBQVBsQjtBQVNjO0VBQ0ksK0JBQUE7QUFQbEI7QUFVYztFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUmxCO0FBVWtCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJ0QjtBQVdrQjtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQVR0QjtBQWNVO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBWlo7QUFtQkU7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBaEJOO0FBa0JNO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFoQlY7QUFxQkE7RUFDRSxxQkFBQTtBQWxCRjtBQXNCRTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFuQk47QUFxQk07RUFDSSxlQUFBO0FBbkJWO0FBc0JNO0VBQ0ksY0FBQTtBQXBCVjtBQXVCTTtFQUNJLGNBQUE7QUFyQlY7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBeUJFO0VBQ0ksMkJBQUE7QUF2Qk4iLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4vKiBhZ2dpdW50IHBpZXRybyAqL1xyXG5cclxuaW9uLWJ1dHRvbi5mdWxsLWJ1dHRvbnN7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogIzQzNDM0MztcclxufVxyXG5cclxuLmNhcnQtaXRlbXMge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAuaXRlbS1pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtLWluZm8ge1xyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucXR5LXNlbGVjdG9yIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogIzU2NTY1NjtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2N1c3RvbUJ0blBheXBhbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzQzNDM0MztcclxuXHJcbiAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICBiYWNrZ3JvdW5kOiAjOTc5Nzk3MTM7XHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFsIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1sYWJlbDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAubWFpbi1idXR0b246OmFmdGVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc-es5.js.map