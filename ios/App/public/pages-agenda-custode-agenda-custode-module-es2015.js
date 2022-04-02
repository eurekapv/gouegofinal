(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agenda-custode-agenda-custode-module"],{

/***/ "9n5/":
/*!***********************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AgendaCustodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodePageRoutingModule", function() { return AgendaCustodePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agenda_custode_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda-custode.page */ "U69E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _agenda_custode_page__WEBPACK_IMPORTED_MODULE_1__["AgendaCustodePage"]
    },
    // {
    //   path: 'filter-custode',
    //   loadChildren: () => import('./filter-custode/filter-custode.module').then( m => m.FilterCustodePageModule)
    // },
    {
        path: ':idPianificazione',
        loadChildren: () => __webpack_require__.e(/*! import() | agenda-custode-details-agenda-custode-details-module */ "agenda-custode-details-agenda-custode-details-module").then(__webpack_require__.bind(null, /*! ./agenda-custode-details/agenda-custode-details.module */ "8GcV")).then(m => m.AgendaCustodeDetailsPageModule)
    }
];
class AgendaCustodePageRoutingModule {
}
AgendaCustodePageRoutingModule.ɵfac = function AgendaCustodePageRoutingModule_Factory(t) { return new (t || AgendaCustodePageRoutingModule)(); };
AgendaCustodePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AgendaCustodePageRoutingModule });
AgendaCustodePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaCustodePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "U69E":
/*!*************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode.page.ts ***!
  \*************************************************************/
/*! exports provided: AgendaCustodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodePage", function() { return AgendaCustodePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/itemCalendario.model */ "IidP");
/* harmony import */ var src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/occupazionecampi.model */ "0ALl");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _filter_custode_filter_custode_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-custode/filter-custode.page */ "gcxk");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/item-calendario/item-calendario.component */ "2BDZ");














function AgendaCustodePage_div_22_app_item_calendario_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-item-calendario", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaCustodePage_div_22_app_item_calendario_2_Template_app_item_calendario_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const occupazione_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r4.onClickOccupazione(occupazione_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occupazione_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", ctx_r2.getItemCalendario(occupazione_r3));
} }
function AgendaCustodePage_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AgendaCustodePage_div_22_app_item_calendario_2_Template, 1, 1, "app-item-calendario", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.listOccupazioni);
} }
function AgendaCustodePage_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nessuna occupazione prevista");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class AgendaCustodePage {
    constructor(barcodeScanner, loadingController, startService, toastController, alertController, actionSheeetController, modalController, navController) {
        this.barcodeScanner = barcodeScanner;
        this.loadingController = loadingController;
        this.startService = startService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.actionSheeetController = actionSheeetController;
        this.modalController = modalController;
        this.navController = navController;
        this.listOccupazioni = [];
        this.settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        this.listLocations = [];
        //Filtro iniziale
        this.filter = new src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_2__["OccupazioneCampi"](true);
        this.filter.IDAREA = this.startService.areaSelectedValue.ID;
        this.filter.DATAINIZIO = new Date();
        this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();
        this.myIsDesktop = this.startService.isDesktop;
        //Ascolto i cambiamenti dell'area
        this.onListenAreaChange();
    }
    ngOnInit() {
        this.requestOccupazioni();
    }
    ngOnDestroy() {
        if (this.listenAreaSelected) {
            this.listenAreaSelected.unsubscribe();
        }
    }
    /**
     * Recupero Area
     */
    onListenAreaChange() {
        //Recupero le informazioni sull'area
        this.listenAreaSelected = this.startService.areaSelected.subscribe(elArea => {
            if (elArea) {
                this.labelAllLocations = "Locations di " + elArea.DENOMINAZIONE;
            }
            else {
                this.labelAllLocations = "Tutte le Locations";
            }
            //Preparo la lista location
            this.requestListLocation(elArea.ID);
        });
    }
    /**
     * Imposta la label per Item Location
     */
    setLabelLocation() {
        let myLocation;
        if (this.filter && this.filter.IDLOCATION && this.filter.IDLOCATION.length != 0) {
            myLocation = this.listLocations.find(elLocation => {
                return elLocation.ID == this.filter.IDLOCATION;
            });
        }
        if (myLocation) {
            this.labelLocation = myLocation.DENOMINAZIONE;
        }
        else {
            this.labelLocation = this.labelAllLocations;
        }
    }
    /**
     * Evento per la scelta di una nuova location
     * @param idLocation Nuova Location selezionata
     */
    onChangeLocation(idLocation) {
        if (this.filter) {
            this.filter.IDLOCATION = idLocation;
            this.setLabelLocation();
            this.requestOccupazioni();
        }
    }
    /**
     * Recupero elenco locations
     * @param idArea idArea riferimento
     */
    requestListLocation(idArea) {
        this.startService.newRequestLocation(idArea)
            .then(collLocation => {
            //Location recuperate
            this.listLocations = collLocation;
            //Preparo la labelLocation
            this.setLabelLocation();
        });
    }
    /**
     * Richiedo nuovamente le occupazioni campi sulla base del filtro
     * @param event evento che ha scatenato la richiesta (usato per dismettere il refresher se presente)
     */
    requestOccupazioni(event) {
        this.loadingController.create({
            message: 'Caricamento...',
            spinner: 'circular'
        })
            .then((elLoading) => {
            if (!event) {
                elLoading.present();
            }
            return this.startService.requestOccupazioniByFilter(this.filter);
        })
            .then(listOccupazioni => {
            this.listOccupazioni = listOccupazioni;
            this.loadingController.dismiss();
            if (event) {
                event.target.complete();
            }
        })
            .catch(error => {
            this.loadingController.dismiss();
            if (event) {
                event.target.complete();
            }
            console.log(error);
            this.showMessage('Errore di connessione');
        });
    }
    /**
   * Nella pagina Impegni è stato modificata il filtro Data
   * per la ricerca
   */
    onChangeFilterDateImpegni() {
        this.filter.DATAINIZIO = (new Date(this.selectedIsoDate));
        this.requestOccupazioni();
    }
    /**
       * Visualizza un messaggio
       */
    showMessage(messaggio, type) {
        if (type == 'alert') {
            let alertOptions = {
                message: messaggio,
                buttons: ['OK']
            };
            this.alertController.create(alertOptions)
                .then(elAlert => {
                elAlert.present();
            });
        }
        else {
            this.toastController.create({
                message: messaggio,
                duration: 3000
            })
                .then(elToast => {
                elToast.present();
            });
        }
    }
    onClickOccupazione(elOccupazione) {
        this.goToReservationDetail(null, elOccupazione);
    }
    getItemCalendario(elOccupazione) {
        return src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_1__["ItemCalendario"].getParamsOccupazioneCampo(elOccupazione);
    }
    showFilter() {
        this.modalController.create({
            component: _filter_custode_filter_custode_page__WEBPACK_IMPORTED_MODULE_4__["FilterCustodePage"],
            componentProps: {
                filter: this.filter
            }
        })
            .then(elModal => {
            //modale creata
            elModal.present();
            return elModal.onDidDismiss();
        })
            .then(params => {
            //modale dismessa
            let newFilter = params.data;
            if (newFilter) {
                this.filter = newFilter;
                this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();
                this.requestOccupazioni();
                this.setLabelLocation();
            }
            else {
                console.log('Non ci sono dati');
            }
        });
    }
    scanQr() {
        if (!this.startService.isDesktop) {
            this.barcodeScanner
                .scan()
                .then(data => {
                let myId = data.text;
                console.log('dati: ');
                console.log(data);
                this.goToReservationDetail(myId);
            })
                .catch(error => {
                console.log(error);
                this.showMessage('Errore nella lettura del codice');
            });
        }
    }
    // startScan = async () => {
    //   const { BarcodeScanner } = Plugins;
    //   BarcodeScanner.hideBackground(); // make background of WebView transparent
    //   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    //   // if the result has content
    //   if (result.hasContent) {
    //     console.log(result.content); // log the raw scanned content
    //   }
    // };
    // newScanQr(){
    //   console.log('ci provo');
    //   if(!this.startService.isDesktop){
    //     console.log('sono su mobile');
    //     const {BarcodeScanner} = Plugins;
    //     console.log(BarcodeScanner);
    //     BarcodeScanner.hideBackground();
    //     BarcodeScanner.startScan()
    //     .then(result => {
    //       console.log('scannerizzato');
    //       if(result && result.hasContent){
    //         console.log('risultato:');
    //         console.log(result.content);
    //       }
    //     })
    //   }
    // }
    // scanQr(){
    //   console.log('ci provo');
    //   //TODO Da testare se funziona; in alternativa, barcode scanner dovrebbe funzionare
    //   if(!this.startService.isDesktop){
    //     console.log('non sono su desktop');
    //     this.qrScanner.prepare()
    //     .then((status: QRScannerStatus) => {
    //       console.log('preparato');
    //       if(status.authorized){
    //       console.log('autorizzato');
    //         let qrSubscription = this.qrScanner.scan()
    //         .subscribe((text: string) => {
    //           console.log('scannerizzato');
    //           console.log(text);
    //           this.qrScanner.hide;
    //           qrSubscription.unsubscribe();
    //           this.goToReservationDetail(text);
    //         });
    //       }
    //       else{
    //         throw new Error('Permessi fotocamera non concessi');
    //       }
    //     })
    //     .catch(error => {
    //       this.showMessage('Errore nella scansione del Qr-Code');
    //       console.log(error);
    //     })
    //   }
    //   else{
    //     console.warn('Attenzione, Scanner Qr non disponibile su desktop');
    //   }
    // }
    /**
     * Naviga alla pagina di dettaglio dell'occupazione specificata (SOLO PER PRENOTAZIONI)
     * @param idOccupazione id del docOccupazione
     * @param docOccupazione
     */
    goToReservationDetail(idOccupazione = undefined, docOccupazione = undefined) {
        //se mi passano il doc, basta controllare il tipo e posso passare direttamente
        if (docOccupazione) {
            if (docOccupazione.TIPO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["SettoreAttivita"].settorePrenotazione) {
                this.navController.navigateForward(`/agenda-custode/${docOccupazione.ID}`);
            }
            else {
                this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni');
            }
        }
        //se mi danno solo l'id, devo recuperare l'occupazione, controllare il tipo, e solo a quel punto posso spostarmi
        else if (idOccupazione && idOccupazione.length > 0) {
            this.startService.requestOccupazioneById(idOccupazione)
                .then(elOccupazione => {
                if (elOccupazione) {
                    //ho trovato un'occupazione, l'id era valido
                    if (elOccupazione.TIPO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["SettoreAttivita"].settorePrenotazione) {
                        //è una prenotazione, procedo
                        this.navController.navigateForward(`/agenda-custode/${elOccupazione.ID}`);
                    }
                    else {
                        //non è una prenotazione, non la mostro
                        this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni');
                    }
                }
                else {
                    //non ho trovato nessuna occupazione, il codice non era valido
                    this.showMessage('Codice non valido');
                }
            })
                .catch(error => {
                this.showMessage('Errore di connessione');
                console.log(error);
            });
        }
    }
    //#region ACTION SHEET CAMBIO LOCATION 
    /**
     * Crea un Action Sheet con l'elenco delle location
     */
    onChooseLocation() {
        let params;
        params = this.getActionSheetLocationParams();
        this.actionSheeetController.create(params)
            .then(elActionSheet => {
            elActionSheet.present();
        });
    }
    /**
     *
     * @returns Parametri per ActionSheet
     */
    getActionSheetLocationParams() {
        let arButtons = [];
        //bottone "tutte le locations"
        let button = {
            text: this.labelAllLocations,
            handler: () => {
                this.onChangeLocation(null);
            }
        };
        arButtons.push(button);
        //bottoni locations
        this.listLocations.forEach(elLocation => {
            let buttonLoc = {
                text: elLocation.DENOMINAZIONE,
                handler: () => {
                    this.onChangeLocation(elLocation.ID);
                }
            };
            arButtons.push(buttonLoc);
        });
        //bottone "annulla"
        let buttonCancel = {
            text: 'Annulla',
            role: 'cancel',
            icon: 'close'
        };
        arButtons.push(buttonCancel);
        let params = {
            header: 'Scegli la location',
            buttons: arButtons,
        };
        return params;
    }
}
AgendaCustodePage.ɵfac = function AgendaCustodePage_Factory(t) { return new (t || AgendaCustodePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"])); };
AgendaCustodePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AgendaCustodePage, selectors: [["app-agenda-custode"]], decls: 28, vars: 6, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/home"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "filter"], ["scrollEvents", ""], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-no-padding"], ["detail", "true", 3, "click"], ["slot", "start", "name", "location-outline"], ["slot", "start", "name", "calendar-outline", "color", "primary"], ["displayFormat", "DDDD - DD/MM/YYYY", 3, "dayNames", "ngModel", "ngModelChange"], ["name", "chevron-down-outline", "color", "primary", "slot", "end"], ["class", "ion-no-padding", 4, "ngIf"], ["class", "nofind-cnt", 4, "ngIf"], ["color", "primary", "expand", "block", 3, "disabled", "click"], ["slot", "start", "name", "qr-code-outline"], [1, "ion-padding-vertical"], [3, "params", "click", 4, "ngFor", "ngForOf"], [3, "params", "click"], [1, "nofind-cnt"]], template: function AgendaCustodePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Occupazioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaCustodePage_Template_ion_button_click_7_listener() { return ctx.showFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-refresher", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionRefresh", function AgendaCustodePage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.requestOccupazioni($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaCustodePage_Template_ion_item_click_13_listener() { return ctx.onChooseLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-datetime", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AgendaCustodePage_Template_ion_datetime_ngModelChange_20_listener($event) { return ctx.selectedIsoDate = $event; })("ngModelChange", function AgendaCustodePage_Template_ion_datetime_ngModelChange_20_listener() { return ctx.onChangeFilterDateImpegni(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AgendaCustodePage_div_22_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AgendaCustodePage_div_23_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaCustodePage_Template_ion_button_click_25_listener() { return ctx.scanQr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Qr-Code Prenotazione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.labelLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dayNames", ctx.settimana)("ngModel", ctx.selectedIsoDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.listOccupazioni && ctx.listOccupazioni.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.listOccupazioni || ctx.listOccupazioni.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.myIsDesktop);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_10__["ItemCalendarioComponent"]], styles: ["ion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZ2VuZGEtY3VzdG9kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6ImFnZW5kYS1jdXN0b2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICB9Il19 */"] });


/***/ }),

/***/ "URBP":
/*!***************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode.module.ts ***!
  \***************************************************************/
/*! exports provided: AgendaCustodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodePageModule", function() { return AgendaCustodePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agenda_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda-custode-routing.module */ "9n5/");
/* harmony import */ var _agenda_custode_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agenda-custode.page */ "U69E");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _filter_custode_filter_custode_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-custode/filter-custode.module */ "rwTC");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AgendaCustodePageModule {
}
AgendaCustodePageModule.ɵfac = function AgendaCustodePageModule_Factory(t) { return new (t || AgendaCustodePageModule)(); };
AgendaCustodePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AgendaCustodePageModule });
AgendaCustodePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _agenda_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaCustodePageRoutingModule"],
            _filter_custode_filter_custode_module__WEBPACK_IMPORTED_MODULE_6__["FilterCustodePageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AgendaCustodePageModule, { declarations: [_agenda_custode_page__WEBPACK_IMPORTED_MODULE_4__["AgendaCustodePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        _agenda_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaCustodePageRoutingModule"],
        _filter_custode_filter_custode_module__WEBPACK_IMPORTED_MODULE_6__["FilterCustodePageModule"]] }); })();


/***/ }),

/***/ "WdVq":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js ***!
  \******************************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var BarcodeScanner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
BarcodeScanner.ɵfac = function BarcodeScanner_Factory(t) { return ɵBarcodeScanner_BaseFactory(t || BarcodeScanner); };
BarcodeScanner.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BarcodeScanner, factory: function (t) { return BarcodeScanner.ɵfac(t); } });
var ɵBarcodeScanner_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BarcodeScanner);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarcodeScanner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtJQTZHb0Msa0NBQWlCOzs7UUFDbkQsWUFBTSxHQUtGO1lBQ0YsU0FBUyxFQUFFLFdBQVc7WUFDdEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQzs7O0lBVUYsNkJBQUksYUFBQyxPQUErQjtJQVlwQywrQkFBTSxhQUFDLElBQVksRUFBRSxJQUFTOzs7Ozt5RkFJb1Y7a0RBdENuWCxVQUFVOzs7OzswQkFDTDt5QkEvR047RUErR29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5uZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFByZWZlciBmcm9udCBjYW1lcmEuIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBwcmVmZXJGcm9udENhbWVyYT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgZmxpcCBjYW1lcmEgYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd0ZsaXBDYW1lcmFCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93IHRvcmNoIGJ1dHRvbi4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHNob3dUb3JjaEJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW5pbWF0aW9ucy4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZUFuaW1hdGlvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHN1Y2Nlc3MgYmVlcC4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZVN1Y2Nlc3NCZWVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvbXB0IHRleHQuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGZvcm1hdHMgZXhjZXB0IGBQREZfNDE3YCBhbmQgYFJTU19FWFBBTkRFRGAuXG4gICAqL1xuICBmb3JtYXRzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcmllbnRhdGlvbi4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS4gQ2FuIGJlIHNldCB0byBgcG9ydHJhaXRgIG9yIGBsYW5kc2NhcGVgLiBEZWZhdWx0cyB0byBub25lIHNvIHRoZSB1c2VyIGNhbiByb3RhdGUgdGhlIHBob25lIGFuZCBwaWNrIGFuIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHRvcmNoT24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gICAgfCAnUVJfQ09ERSdcbiAgICB8ICdEQVRBX01BVFJJWCdcbiAgICB8ICdVUENfRSdcbiAgICB8ICdVUENfQSdcbiAgICB8ICdFQU5fOCdcbiAgICB8ICdFQU5fMTMnXG4gICAgfCAnQ09ERV8xMjgnXG4gICAgfCAnQ09ERV8zOSdcbiAgICB8ICdDT0RFXzkzJ1xuICAgIHwgJ0NPREFCQVInXG4gICAgfCAnSVRGJ1xuICAgIHwgJ1JTUzE0J1xuICAgIHwgJ1JTU19FWFBBTkRFRCdcbiAgICB8ICdQREZfNDE3J1xuICAgIHwgJ0FaVEVDJ1xuICAgIHwgJ01TSSc7XG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oYmFyY29kZURhdGEgPT4ge1xuICogIGNvbnNvbGUubG9nKCdCYXJjb2RlIGRhdGEnLCBiYXJjb2RlRGF0YSk7XG4gKiB9KS5jYXRjaChlcnIgPT4ge1xuICogXHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcbiAqIEJhcmNvZGVTY2FuUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFyY29kZVNjYW5uZXInLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFyY29kZVNjYW5uZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRW5jb2RlOiB7XG4gICAgVEVYVF9UWVBFOiBzdHJpbmc7XG4gICAgRU1BSUxfVFlQRTogc3RyaW5nO1xuICAgIFBIT05FX1RZUEU6IHN0cmluZztcbiAgICBTTVNfVFlQRTogc3RyaW5nO1xuICB9ID0ge1xuICAgIFRFWFRfVFlQRTogJ1RFWFRfVFlQRScsXG4gICAgRU1BSUxfVFlQRTogJ0VNQUlMX1RZUEUnLFxuICAgIFBIT05FX1RZUEU6ICdQSE9ORV9UWVBFJyxcbiAgICBTTVNfVFlQRTogJ1NNU19UWVBFJyxcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuKG9wdGlvbnM/OiBCYXJjb2RlU2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPEJhcmNvZGVTY2FuUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgZGF0YSBpbnRvIGEgYmFyY29kZS5cbiAgICogTk9URTogbm90IHdlbGwgc3VwcG9ydGVkIG9uIEFuZHJvaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBvZiBlbmNvZGluZ1xuICAgKiBAcGFyYW0ge2FueX0gZGF0YSBEYXRhIHRvIGVuY29kZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmNvZGUodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "gcxk":
/*!****************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/filter-custode/filter-custode.page.ts ***!
  \****************************************************************************/
/*! exports provided: FilterCustodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustodePage", function() { return FilterCustodePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_occupazionecampi_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/occupazionecampi.model */ "0ALl");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class FilterCustodePage {
    constructor(modalController, loadingController, actionSheetController, toastController, startService) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.startService = startService;
        this.selectedLocation = undefined;
        this.listLocations = [];
        this.today = new Date();
        this.dayNames = [];
        src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["Giorni"]).forEach(elGiorno => {
            this.dayNames.push(elGiorno.description);
        });
    }
    ngOnInit() {
        this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();
        //recupero le locations
        this.requestLocations();
    }
    requestLocations() {
        this.loadingController.create({
            message: 'Caricamento',
            spinner: 'circular',
            backdropDismiss: true
        })
            .then(elLoading => {
            elLoading.present();
            return this.startService.newRequestLocation(this.filter.IDAREA);
        })
            .then(listLocations => {
            this.loadingController.dismiss();
            this.listLocations = listLocations;
        })
            .catch(error => {
            this.loadingController.dismiss();
            this.showMessage('Errore di connessione');
            console.log(error);
            this.dismiss();
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
    submit() {
        if (this.canSubmit) {
            this.filter.DATAINIZIO = new Date(this.selectedIsoDate);
            this.modalController.dismiss(this.filter);
            if (this.selectedLocation && this.selectedLocation.DENOMINAZIONE && this.selectedLocation.DENOMINAZIONE.length > 0) {
                this.filter.IDLOCATION = this.selectedLocation.ID;
            }
            else {
                this.filter.IDLOCATION = undefined;
            }
        }
    }
    get canSubmit() {
        let newDate = new Date(this.selectedIsoDate);
        if (newDate) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
  * Visualizza un messaggio
  */
    showMessage(messaggio) {
        this.toastController.create({
            message: messaggio,
            duration: 3000
        })
            .then(elToast => {
            elToast.present();
        });
    }
    presentActionSheet() {
        this.actionSheetController.create(this.getActionSheetLocationParams())
            .then(elActionSheet => {
            elActionSheet.present();
        });
    }
    getActionSheetLocationParams() {
        let arButtons = [];
        //bottone "tutte le locations"
        let button = new Object();
        button['text'] = 'Tutte';
        button['handler'] = () => { this.selectedLocation = undefined; };
        button['icon'] = 'location-outline';
        arButtons.push(button);
        //bottoni locations
        this.listLocations.forEach(elLocation => {
            button = new Object;
            button['text'] = elLocation.DENOMINAZIONE;
            button['handler'] = () => { this.selectedLocation = elLocation; };
            button['icon'] = 'location-outline';
            arButtons.push(button);
        });
        //bottone "annulla"
        button = new Object();
        button['text'] = 'Annulla';
        button['role'] = 'cancel';
        button['icon'] = 'close';
        arButtons.push(button);
        let params = {
            header: 'Scegli la location',
            buttons: arButtons,
        };
        return params;
    }
    get labelSelectedLocation() {
        let label = '';
        if (this.selectedLocation && this.selectedLocation.DENOMINAZIONE && this.selectedLocation.DENOMINAZIONE.length > 0) {
            label = this.selectedLocation.DENOMINAZIONE;
        }
        else {
            label = 'Tutte le locations';
        }
        return label;
    }
}
FilterCustodePage.ɵfac = function FilterCustodePage_Factory(t) { return new (t || FilterCustodePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"])); };
FilterCustodePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FilterCustodePage, selectors: [["app-filter-custode"]], inputs: { filter: "filter" }, decls: 27, vars: 5, consts: [["color", "primary"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close"], ["lines", "full"], ["color", "light"], ["slot", "start", "name", "calendar-outline", "color", "primary"], ["displayFormat", "DDDD - DD/MM/YYYY", "required", "", 3, "ngModel", "dayNames", "ngModelChange"], ["position", "floating"], [3, "ngModel", "ngModelChange"], ["slot", "start", "name", "location-outline", "color", "primary"], ["button", "", 3, "click"], ["color", "primary", "expand", "block", 3, "disabled", "click"]], template: function FilterCustodePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Filtra occupazioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterCustodePage_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Quando: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-datetime", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterCustodePage_Template_ion_datetime_ngModelChange_13_listener($event) { return ctx.selectedIsoDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterCustodePage_Template_ion_input_ngModelChange_16_listener($event) { return ctx.selectedIsoDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Dove: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterCustodePage_Template_ion_item_click_21_listener() { return ctx.presentActionSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterCustodePage_Template_ion_button_click_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Conferma");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedIsoDate)("dayNames", ctx.dayNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedIsoDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.labelSelectedLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.canSubmit);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY3VzdG9kZS5wYWdlLnNjc3MifQ== */"] });


/***/ }),

/***/ "rwTC":
/*!******************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/filter-custode/filter-custode.module.ts ***!
  \******************************************************************************/
/*! exports provided: FilterCustodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustodePageModule", function() { return FilterCustodePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _filter_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-custode-routing.module */ "xAaC");
/* harmony import */ var _filter_custode_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-custode.page */ "gcxk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class FilterCustodePageModule {
}
FilterCustodePageModule.ɵfac = function FilterCustodePageModule_Factory(t) { return new (t || FilterCustodePageModule)(); };
FilterCustodePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FilterCustodePageModule });
FilterCustodePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _filter_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterCustodePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FilterCustodePageModule, { declarations: [_filter_custode_page__WEBPACK_IMPORTED_MODULE_4__["FilterCustodePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _filter_custode_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterCustodePageRoutingModule"]] }); })();


/***/ }),

/***/ "xAaC":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/filter-custode/filter-custode-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FilterCustodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustodePageRoutingModule", function() { return FilterCustodePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filter_custode_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-custode.page */ "gcxk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _filter_custode_page__WEBPACK_IMPORTED_MODULE_1__["FilterCustodePage"]
    }
];
class FilterCustodePageRoutingModule {
}
FilterCustodePageRoutingModule.ɵfac = function FilterCustodePageRoutingModule_Factory(t) { return new (t || FilterCustodePageRoutingModule)(); };
FilterCustodePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FilterCustodePageRoutingModule });
FilterCustodePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FilterCustodePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-agenda-custode-agenda-custode-module-es2015.js.map