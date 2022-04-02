(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-account-edit-account-module"],{

/***/ "Yf+V":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPage", function() { return EditAccountPage; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/utente.model */ "AN5U");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/library/models/mydatetime.model */ "K4nM");
/* harmony import */ var src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.page */ "9F3y");
/* harmony import */ var src_app_models_gruppo_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/gruppo.model */ "8jQ+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");














function EditAccountPage_ion_select_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sesso_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", sesso_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", sesso_r6.description, " ");
} }
function EditAccountPage_ion_item_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditAccountPage_ion_item_87_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditAccountPage_ion_item_87_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.validateTel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.utente.MOBILENUMBER ? ctx_r2.utente.MOBILENUMBER : "Non definito");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.utente.getLabelVerificaMobile());
} }
function EditAccountPage_ion_item_88_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditAccountPage_ion_item_88_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.validateEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.utente.EMAIL ? ctx_r3.utente.EMAIL : "Non definita");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.utente.getLabelVerificaMail());
} }
function EditAccountPage_ion_item_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cellulare");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditAccountPage_ion_item_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class EditAccountPage {
    constructor(startService, navCtr, toastCtr, loadingController, modalController) {
        this.startService = startService;
        this.navCtr = navCtr;
        this.toastCtr = toastCtr;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.utente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_1__["Utente"];
        this.listSesso = [];
        this.docGruppo = new src_app_models_gruppo_model__WEBPACK_IMPORTED_MODULE_7__["Gruppo"]();
        this.showCapNascita = false; //Nasconde il cap di nascita
        //Chiedo al servizio i dati dell'utente
        this.utenteListen = this.startService.utente.subscribe(data => {
            //Recupero l'utente
            this.utente = data;
            if (this.utente.MOBILENUMBER == null) {
                this.utente.MOBILENUMBER = '';
            }
            this.createForm();
        });
        //Preparo un Array con le decodifiche del Sesso
        this.listSesso = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["Sesso"]);
    }
    ngOnInit() {
        this.today = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_5__["MyDateTime"].formatDateISO(new Date);
        this.docGruppo = this.startService.actualStartConfig.gruppo;
        //this.createForm();
    }
    ngOnDestroy() {
        if (this.utenteListen) {
            this.utenteListen.unsubscribe();
        }
    }
    createForm() {
        let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.NOME, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            cognome: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.COGNOME, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            sesso: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.SESSO, {
                updateOn: 'change',
                validators: []
            }),
            nascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((this.utente.NATOIL ? this.utente.NATOIL.toISOString() : this.utente.NATOIL), {
                updateOn: 'change',
                validators: []
            }),
            provNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.NATOPROV, {
                updateOn: 'change',
                validators: []
            }),
            comNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.NATOA, {
                updateOn: 'change',
                validators: []
            }),
            statoNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.NATOISOSTATO, {
                updateOn: 'change',
                validators: []
            }),
            capNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.NATOCAP, {
                updateOn: 'change',
                validators: []
            }),
            provResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.PROVINCIA, {
                updateOn: 'change',
                validators: []
            }),
            comResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.COMUNE, {
                updateOn: 'change',
                validators: []
            }),
            indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.INDIRIZZO, {
                updateOn: 'change',
                validators: []
            }),
            capResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.CAP, {
                updateOn: 'change',
                validators: []
            }),
            statoResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.ISOSTATO, {
                updateOn: 'change',
                validators: []
            }),
            cf: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.CODICEFISCALE, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(patternCodice)]
            })
        });
        if (!this.docGruppo.needMobileVerify) {
            //devo creare il campo mail
            let mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.MOBILENUMBER, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]*$')]
            });
            this.form.addControl('mobile', mobile);
        }
        if (!this.docGruppo.needEmailVerify) {
            //devo creare il campo tel
            let email = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.utente.EMAIL, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]
            });
            this.form.addControl('email', email);
        }
    }
    onSubmit() {
        if (this.form.valid) {
            this.utente.NOME = this.form.value.nome;
            this.utente.COGNOME = this.form.value.cognome;
            this.utente.SESSO = this.form.value.sesso;
            this.utente.CODICEFISCALE = this.form.value.cf;
            this.utente.INDIRIZZO = this.form.value.indResidenza;
            this.utente.COMUNE = this.form.value.comResidenza;
            this.utente.CAP = this.form.value.capResidenza;
            this.utente.PROVINCIA = this.form.value.provResidenza;
            this.utente.ISOSTATO = this.form.value.statoResidenza;
            if (this.form.value.nascita) {
                this.utente.NATOIL = new Date(this.form.value.nascita);
            }
            this.utente.NATOA = this.form.value.comNascita;
            this.utente.NATOCAP = this.form.value.capNascita;
            this.utente.NATOPROV = this.form.value.provNascita;
            this.utente.NATOISOSTATO = this.form.value.statoNascita;
            //EMAIL E NUMERO DI TELEFONO LI MODIFICO SOLO SE NON DEVONO ESSERE VERIFICATI, ALTRIMENTI VERRA' CHIAMATA LA VIDEATA APPOSITA
            if (!this.docGruppo.needEmailVerify) {
                this.utente.EMAIL = this.form.value.email;
            }
            if (!this.docGruppo.needMobileVerify) {
                this.utente.MOBILENUMBER = this.form.value.mobile;
            }
            console.log('mando');
            console.log(this.utente);
            //USO IL LOADING CONTROLLER 
            this.loadingController
                .create({
                message: 'Aggiornamento dati...',
                spinner: 'circular'
            })
                .then(elLoading => {
                // Mostro il loading
                elLoading.present();
                //richiesta di aggiornamento al server
                this.startService
                    .updateUtente(this.utente)
                    .then(result => {
                    // Operazione effettuata
                    elLoading.dismiss();
                    //Aggiornamento corretto
                    this.showMessage('Info Aggiornate');
                    this.closePage();
                }, error => {
                    elLoading.dismiss();
                    this.showMessage('Errore  di connessione');
                    console.log(error);
                });
            });
        }
    }
    onCfChange() {
        //se il cf cambia, quando l'utente esce dalla casella, provo a validarlo e riempire gli altri campi
        let codFiscString = this.form.value.cf;
        if (codFiscString != null && codFiscString != undefined) {
            if (codFiscString.length != 0) {
                //chiamo il servizio per decodificare il codice fiscale
                this.startService.checkCodiceFiscale(codFiscString, true).then(codFiscObj => {
                    //inserisco tutto quello che ho decodificato nel utente
                    this.utente.NATOISOSTATO = 'Italia';
                    this.utente.NATOA = codFiscObj.comune;
                    this.utente.NATOPROV = codFiscObj.provincia;
                    this.utente.NATOIL = codFiscObj.dataNascita;
                    this.utente.SESSO = codFiscObj.sesso;
                    this.utente.NATOCAP = codFiscObj.cap;
                    //aggiorno i campi del form
                    this.form.get('comNascita').setValue(this.utente.NATOA);
                    this.form.get('provNascita').setValue(this.utente.NATOPROV);
                    this.form.get('nascita').setValue(this.utente.NATOIL.toISOString());
                    this.form.get('sesso').setValue(this.utente.SESSO);
                    this.form.get('statoNascita').setValue(this.utente.NATOISOSTATO);
                    this.form.get('capNascita').setValue(this.utente.NATOCAP);
                    //setto il campo cf come valido
                    this.form.controls['cf'].setErrors(null);
                }).catch(err => {
                    //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
                    this.form.controls['cf'].setErrors({ 'incorrect': true });
                    console.log(err);
                });
            }
        }
    }
    /**
     * Chiudo e torno alla pagina Account
     */
    closePage() {
        this.navCtr.navigateBack(['/', 'account']);
    }
    /**
     * Visualizza un messaggio come Toast
     * @param message Messaggio da mostrare
     */
    showMessage(message) {
        //Creo un messaggio
        this.toastCtr.create({
            message: message,
            duration: 3000
        })
            .then(tstMsg => {
            tstMsg.present();
        });
    }
    validateTel() {
        this.modalController.create({
            component: src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"],
            componentProps: {
                params: {
                    tipoVerifica: src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoVerificaAccount"].verificasms,
                    updateDocUtente: false
                }
            }
        })
            .then(elModal => {
            elModal.present();
        });
    }
    validateEmail() {
        this.modalController.create({
            component: src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"],
            componentProps: {
                params: {
                    tipoVerifica: src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoVerificaAccount"].verificaemail,
                    updateDocUtente: false
                }
            }
        })
            .then(elModal => {
            elModal.present();
        });
    }
}
EditAccountPage.ɵfac = function EditAccountPage_Factory(t) { return new (t || EditAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"])); };
EditAccountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EditAccountPage, selectors: [["app-edit-account"]], decls: 94, vars: 10, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/account"], ["slot", "primary"], ["fill", "clear", 3, "disabled", "click"], ["name", "checkmark"], [3, "formGroup"], ["color", "light"], ["name", "person-outline", "slot", "start", "color", "primary"], ["position", "floating"], ["formControlName", "nome"], ["formControlName", "cognome"], ["formControlName", "sesso", "interface", "popover"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "cf", 3, "ionBlur"], ["name", "home-outline", "slot", "start", "color", "primary"], ["formControlName", "indResidenza"], ["formControlName", "comResidenza"], ["type", "tel", "inputmode", "tel", "maxlength", "5", "formControlName", "capResidenza"], ["formControlName", "provResidenza"], ["formControlName", "statoResidenza"], ["name", "logo-reddit", "slot", "start", "color", "primary"], ["formControlName", "nascita", "displayFormat", "DD-MM-YYYY", 3, "max"], ["formControlName", "comNascita"], [4, "ngIf"], ["size", "4", 1, "ion-no-padding"], ["formControlName", "provNascita"], ["formControlName", "statoNascita"], ["name", "call-outline", "slot", "start", "color", "primary"], ["button", "", 3, "click", 4, "ngIf"], ["color", "tertiary", "expand", "block", 3, "disabled", "click"], [3, "value"], ["formControlName", "capNascita", "type", "tel", "inputmode", "tel", "maxlength", "5"], ["button", "", 3, "click"], ["color", "success"], ["formControlName", "mobile"], ["formControlName", "email"]], template: function EditAccountPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditAccountPage_Template_ion_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Qualcosa su di te");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-item-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Come ti chiami ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "ion-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Sesso");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ion-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, EditAccountPage_ion_select_option_29_Template, 2, 2, "ion-select-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Codice fiscale");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionBlur", function EditAccountPage_Template_ion_input_ionBlur_33_listener() { return ctx.onCfChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "ion-item-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Dove vivi ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Indirizzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "ion-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Comune");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "ion-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Cap");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "ion-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Provincia");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "ion-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Stato");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "ion-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "ion-item-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Quando sei nato ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "ion-datetime", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Comune");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "ion-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, EditAccountPage_ion_item_72_Template, 4, 0, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Provincia");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "ion-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Stato");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "ion-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "ion-item-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Cellulare e Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, EditAccountPage_ion_item_87_Template, 5, 2, "ion-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, EditAccountPage_ion_item_88_Template, 5, 2, "ion-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](89, EditAccountPage_ion_item_89_Template, 4, 0, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, EditAccountPage_ion_item_90_Template, 4, 0, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "ion-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditAccountPage_Template_ion_button_click_92_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, " Conferma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.listSesso);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showCapNascita);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.docGruppo.needMobileVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.docGruppo.needEmailVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.docGruppo.needMobileVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.docGruppo.needEmailVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFjY291bnQucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ "ePbb":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageModule", function() { return EditAccountPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.module */ "fFCB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-account-routing.module */ "ee1P");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-account.page */ "Yf+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class EditAccountPageModule {
}
EditAccountPageModule.ɵfac = function EditAccountPageModule_Factory(t) { return new (t || EditAccountPageModule)(); };
EditAccountPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EditAccountPageModule });
EditAccountPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAccountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__["VerifyPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EditAccountPageModule, { declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_5__["EditAccountPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAccountPageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__["VerifyPageModule"]] }); })();


/***/ }),

/***/ "ee1P":
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageRoutingModule", function() { return EditAccountPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.page */ "Yf+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _edit_account_page__WEBPACK_IMPORTED_MODULE_1__["EditAccountPage"]
    }
];
class EditAccountPageRoutingModule {
}
EditAccountPageRoutingModule.ɵfac = function EditAccountPageRoutingModule_Factory(t) { return new (t || EditAccountPageRoutingModule)(); };
EditAccountPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EditAccountPageRoutingModule });
EditAccountPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditAccountPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=edit-account-edit-account-module-es2015.js.map