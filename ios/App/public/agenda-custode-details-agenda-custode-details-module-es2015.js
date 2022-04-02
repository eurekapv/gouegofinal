(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-custode-details-agenda-custode-details-module"],{

/***/ "8GcV":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode-details/agenda-custode-details.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AgendaCustodeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodeDetailsPageModule", function() { return AgendaCustodeDetailsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agenda_custode_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda-custode-details-routing.module */ "N6sY");
/* harmony import */ var _agenda_custode_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agenda-custode-details.page */ "Abau");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AgendaCustodeDetailsPageModule {
}
AgendaCustodeDetailsPageModule.ɵfac = function AgendaCustodeDetailsPageModule_Factory(t) { return new (t || AgendaCustodeDetailsPageModule)(); };
AgendaCustodeDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AgendaCustodeDetailsPageModule });
AgendaCustodeDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _agenda_custode_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaCustodeDetailsPageRoutingModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AgendaCustodeDetailsPageModule, { declarations: [_agenda_custode_details_page__WEBPACK_IMPORTED_MODULE_4__["AgendaCustodeDetailsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _agenda_custode_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaCustodeDetailsPageRoutingModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]] }); })();


/***/ }),

/***/ "Abau":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode-details/agenda-custode-details.page.ts ***!
  \********************************************************************************************/
/*! exports provided: AgendaCustodeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodeDetailsPage", function() { return AgendaCustodeDetailsPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/prenotazione.model */ "hXF6");
/* harmony import */ var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_player_number_player_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/player-number/player-number.component */ "JI/N");
/* harmony import */ var _shared_components_alert_input_prezzo_alert_input_prezzo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/alert-input-prezzo/alert-input-prezzo.component */ "31Zp");












function AgendaCustodeDetailsPage_app_alert_input_prezzo_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-alert-input-prezzo", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onDismiss", function AgendaCustodeDetailsPage_app_alert_input_prezzo_0_Template_app_alert_input_prezzo_onDismiss_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.dismissInputPrezzo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r0.myPianificazione._INCASSOCUSTODE);
} }
function AgendaCustodeDetailsPage_ion_chip_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.myPrenotazione == null ? null : ctx_r1.myPrenotazione.MOBILENUMBER);
} }
class AgendaCustodeDetailsPage {
    constructor(activatedRoute, navController, startService, loadingController, toastController, alertController) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.startService = startService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this._showInputPrezzo = false;
        this.myToday = new Date();
        this.myPianificazione = new src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_3__["PrenotazionePianificazione"]();
        this.myPrenotazione = new src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_2__["Prenotazione"]();
    }
    ngOnInit() {
        this.subParaMap = this.activatedRoute.paramMap.subscribe(route => {
            if (route.has('idPianificazione')) {
                this.selectedIdPianificazione = route.get('idPianificazione');
                this.updateOccupazione(this.selectedIdPianificazione);
            }
            else {
                this.navController.pop();
            }
        });
    }
    updateOccupazione(id) {
        this.loadingController.create({
            message: 'Caricamento',
            spinner: 'circular',
            backdropDismiss: true
        })
            .then(elLoading => {
            return elLoading.present();
        })
            .then(() => {
            return this.startService.requestOccupazioneById(id, true);
        })
            .then(elOccupazione => {
            this.loadingController.dismiss();
            this.myOccupazione = elOccupazione;
            //@ts-ignore
            this.myPrenotazione = elOccupazione.getDocInRepository(elOccupazione.IDREF);
            this.myPianificazione = this.myPrenotazione.getPianificazione(this.myOccupazione.ID);
            this.myPianificazione._INCASSOCUSTODE = this.myPianificazione.RESIDUO;
            console.log(this.myOccupazione);
            console.log(this.myPrenotazione);
            console.log(this.myPianificazione);
        })
            .catch(error => {
            this.loadingController.dismiss();
            console.log(error);
            this.navController.pop();
        });
    }
    onClickConferma() {
        let alertOptions = {
            header: 'Sei sicuro',
            message: 'Una volta confermato l\'importo, non potrai più modificarlo',
            buttons: [
                {
                    text: 'Conferma',
                    handler: () => { this.onSubmit(); }
                },
                {
                    text: 'Annulla',
                    role: 'cancel'
                }
            ]
        };
        this.alertController.create(alertOptions)
            .then(elAlert => {
            elAlert.present();
        });
    }
    onSubmit() {
        if (this.canEditData()) {
            //TODO inviare il docpianificazione a gouego
            console.log(this.myPianificazione);
            this.navController.pop();
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subParaMap.unsubscribe();
    }
    getIcon(idSport) {
        return this.startService.getSportIcon(idSport);
    }
    onChangedNumPlayer(nPlayer) {
        //Memorizzo il numero Partecipanti
        this.myPianificazione.NUMPARTECIPANTI = nPlayer;
        // this.calcolaTotale();
    }
    showInputPrezzo() {
        this._showInputPrezzo = true;
    }
    dismissInputPrezzo(value) {
        if (value) {
            this.myPianificazione._INCASSOCUSTODE = value;
        }
        this._showInputPrezzo = false;
    }
    canEditData() {
        if (this.myPrenotazione.DATA <= this.myToday) {
            return true;
        }
        else {
            return false;
        }
    }
}
AgendaCustodeDetailsPage.ɵfac = function AgendaCustodeDetailsPage_Factory(t) { return new (t || AgendaCustodeDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_4__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"])); };
AgendaCustodeDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AgendaCustodeDetailsPage, selectors: [["app-agenda-custode-details"]], decls: 90, vars: 53, consts: [["description", "Inserisci l'importo incassato per questa prenotazione", 3, "placeholder", "onDismiss", 4, "ngIf"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/home"], [1, "info-list"], ["color", "light"], ["button", "", 1, "item-nominativo", 3, "href"], ["color", "primary", 4, "ngIf"], [1, "item-sport"], [1, "icon-sport"], [3, "innerHTML"], [1, "item-data"], [1, "checkout-grid"], [1, "row-persone"], [3, "numPlayer", "changeNumPlayer"], [1, "row-importi-1"], ["button", "", "disabled", ""], [1, "label-info"], [1, "label-importo"], [1, "row-importi-2"], ["button", "", 3, "click"], [3, "color"], ["color", "primary", "expand", "block", 3, "disabled", "click"], ["slot", "start", "name", "checkmark-circle-outline"], ["description", "Inserisci l'importo incassato per questa prenotazione", 3, "placeholder", "onDismiss"], ["name", "call"]], template: function AgendaCustodeDetailsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AgendaCustodeDetailsPage_app_alert_input_prezzo_0_Template, 1, 1, "app-alert-input-prezzo", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "INFO PRENOTAZIONE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AgendaCustodeDetailsPage_ion_chip_15_Template, 4, 1, "ion-chip", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "CHECKOUT:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "app-player-number", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeNumPlayer", function AgendaCustodeDetailsPage_Template_app_player_number_changeNumPlayer_50_listener($event) { return ctx.onChangedNumPlayer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Totale prenotazione: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](59, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Incassato precedentemente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "ion-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Residuo da incassare:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ion-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AgendaCustodeDetailsPage_Template_ion_card_click_78_listener() { return ctx.showInputPrezzo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Incassato: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ion-text", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "ion-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AgendaCustodeDetailsPage_Template_ion_button_click_87_listener() { return ctx.onClickConferma(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " Conferma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx._showInputPrezzo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Prenotazione ", ctx.myPianificazione.PROGRESSIVO, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.myPrenotazione.MOBILENUMBER ? "tel:" + ctx.myPrenotazione.MOBILENUMBER : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 22, ctx.myPrenotazione == null ? null : ctx.myPrenotazione.NOMINATIVO));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.myPrenotazione.MOBILENUMBER);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 24, ctx.myPianificazione["_DENOMINAZIONE_Sport"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.getIcon(ctx.myPianificazione == null ? null : ctx.myPianificazione.IDSPORT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 26, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 28, ctx.myPianificazione == null ? null : ctx.myPianificazione.DATAORAINIZIO, "EEEE dd/LL/yyyy")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("dalle ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 31, ctx.myPianificazione == null ? null : ctx.myPianificazione.DATAORAINIZIO, "HH:mm"), " alle ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](32, 34, ctx.myPianificazione == null ? null : ctx.myPianificazione.DATAORAFINE, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.myPianificazione == null ? null : ctx.myPianificazione.DURATAORE, " ", (ctx.myPianificazione == null ? null : ctx.myPianificazione.DURATAORE) == 1 ? "Ora" : "Ore", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.myPianificazione["_DENOMINAZIONE_Campo"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 37, ctx.myPianificazione["_COMUNE_Location"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 39, ctx.myPianificazione["_INDIRIZZO_Location"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("numPlayer", ctx.myPianificazione.NUMPARTECIPANTI);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](59, 41, ctx.myPianificazione.TOTALE, "EUR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](67, 44, ctx.myPianificazione.INCASSATO, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](76, 47, ctx.myPianificazione.RESIDUO, "EUR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx.myPianificazione.RESIDUO == ctx.myPianificazione._INCASSOCUSTODE ? "success" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](85, 50, ctx.myPianificazione._INCASSOCUSTODE, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.canEditData());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _shared_components_player_number_player_number_component__WEBPACK_IMPORTED_MODULE_7__["PlayerNumberComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _shared_components_alert_input_prezzo_alert_input_prezzo_component__WEBPACK_IMPORTED_MODULE_8__["AlertInputPrezzoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".info-list[_ngcontent-%COMP%]   .item-nominativo[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%], .info-list[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.info-list[_ngcontent-%COMP%]   .item-sport[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-persone[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-1[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 8px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-1[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label.label-importo[_ngcontent-%COMP%] {\n  margin: auto;\n  display: table;\n  font-size: 22px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-1[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label.label-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 12px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-2[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-2[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label.label-importo[_ngcontent-%COMP%] {\n  margin: auto;\n  display: table;\n  font-size: 38px;\n}\n.checkout-grid[_ngcontent-%COMP%]   .row-importi-2[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label.label-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWdlbmRhLWN1c3RvZGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxnQkFBQTtBQUZaO0FBT1E7RUFDSSxlQUFBO0FBTFo7QUFnQlE7RUFDSSxZQUFBO0FBZFo7QUFvQlE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7QUFuQlo7QUFxQlk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFuQmhCO0FBc0JZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFwQmhCO0FBMEJRO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUF4Qlo7QUEwQlk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF4QmhCO0FBMkJZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXpCaEIiLCJmaWxlIjoiYWdlbmRhLWN1c3RvZGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1saXN0e1xyXG5cclxuICAgIC5pdGVtLW5vbWluYXRpdm97XHJcbiAgICAgICAgaW9uLWNoaXB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLXNwb3J0e1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tZGF0YXtcclxuICAgICAgICBAZXh0ZW5kIC5pdGVtLW5vbWluYXRpdm87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGVja291dC1ncmlke1xyXG4gICAgLnJvdy1wZXJzb25le1xyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLnJvdy1pbXBvcnRpLTF7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwubGFiZWwtaW1wb3J0b3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwubGFiZWwtaW5mb3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1pbXBvcnRpLTJ7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwubGFiZWwtaW1wb3J0b3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwubGFiZWwtaW5mb3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5pbnB1dC1wcmV6em97XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB3aWR0aDoxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gICAgIGlvbi1jYXJke1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuLy8gICAgICAgdG9wOiA1MCU7XHJcbi8vICAgICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi8vICAgICAgIHotaW5kZXg6IDMwO1xyXG4vLyAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgIFxyXG4vLyAgICAgICBpb24taW5wdXR7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgaW9uLWJhY2tkcm9we1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IC4zO1xyXG4vLyAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4vLyAgICAgfVxyXG4vLyB9Il19 */"] });


/***/ }),

/***/ "N6sY":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/agenda-custode/agenda-custode-details/agenda-custode-details-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AgendaCustodeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCustodeDetailsPageRoutingModule", function() { return AgendaCustodeDetailsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agenda_custode_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda-custode-details.page */ "Abau");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _agenda_custode_details_page__WEBPACK_IMPORTED_MODULE_1__["AgendaCustodeDetailsPage"]
    }
];
class AgendaCustodeDetailsPageRoutingModule {
}
AgendaCustodeDetailsPageRoutingModule.ɵfac = function AgendaCustodeDetailsPageRoutingModule_Factory(t) { return new (t || AgendaCustodeDetailsPageRoutingModule)(); };
AgendaCustodeDetailsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AgendaCustodeDetailsPageRoutingModule });
AgendaCustodeDetailsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaCustodeDetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=agenda-custode-details-agenda-custode-details-module-es2015.js.map