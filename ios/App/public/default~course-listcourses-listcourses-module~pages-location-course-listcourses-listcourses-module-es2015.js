(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~course-listcourses-listcourses-module~pages-location-course-listcourses-listcourses-module"],{

/***/ "8GLh":
/*!*************************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/listcourses.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListcoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcoursesPageModule", function() { return ListcoursesPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listcourses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcourses-routing.module */ "SpQX");
/* harmony import */ var _listcourses_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listcourses.page */ "8InX");
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter.module */ "f1uP");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bookcourse/bookcourse.module */ "F+nL");
/* harmony import */ var src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.module */ "S8DX");
/* harmony import */ var src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.module */ "fFCB");
/* harmony import */ var src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.page */ "uVj7");
/* harmony import */ var src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.page */ "9F3y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class ListcoursesPageModule {
}
ListcoursesPageModule.ɵfac = function ListcoursesPageModule_Factory(t) { return new (t || ListcoursesPageModule)(); };
ListcoursesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ListcoursesPageModule });
ListcoursesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _listcourses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListcoursesPageRoutingModule"],
            _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_7__["BookcoursePageModule"],
            _filter_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
            src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__["NewLoginPageModule"],
            src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_9__["VerifyPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ListcoursesPageModule, { declarations: [_listcourses_page__WEBPACK_IMPORTED_MODULE_4__["ListcoursesPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _listcourses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListcoursesPageRoutingModule"],
        _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_7__["BookcoursePageModule"],
        _filter_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
        src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__["NewLoginPageModule"],
        src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_9__["VerifyPageModule"]], exports: [src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_10__["NewLoginPage"], src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_11__["VerifyPage"]] }); })();


/***/ }),

/***/ "8InX":
/*!***********************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/listcourses.page.ts ***!
  \***********************************************************************/
/*! exports provided: ListcoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcoursesPage", function() { return ListcoursesPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_corso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/corso.model */ "F/re");
/* harmony import */ var _services_start_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/start.service */ "EXUU");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter.page */ "BLZV");
/* harmony import */ var _detailcourse_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detailcourse/calendar/calendar.page */ "YrHa");
/* harmony import */ var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/library/services/docstructure.service */ "FYk8");
/* harmony import */ var src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/library/models/requestParams.model */ "R2Z1");
/* harmony import */ var src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/library/models/iddocument.model */ "5usX");
/* harmony import */ var src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.page */ "uVj7");
/* harmony import */ var src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.page */ "9F3y");
/* harmony import */ var _bookcourse_bookcourse_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bookcourse/bookcourse.page */ "KznV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_card_course_card_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/card-course/card-course.component */ "badR");





















function ListcoursesPage_ion_toolbar_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-toolbar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-segment", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function ListcoursesPage_ion_toolbar_9_Template_ion_segment_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r5.onChangeSegmentCorsi($event); })("ngModelChange", function ListcoursesPage_ion_toolbar_9_Template_ion_segment_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r7.statoPagina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Mio Livello");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Tutti");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r0.statoPagina);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r0.PageState.MIEI);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r0.PageState.TUTTI);
} }
function ListcoursesPage_div_13_ion_col_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-card-course", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickDetail", function ListcoursesPage_div_13_ion_col_3_Template_app_card_course_clickDetail_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r10.onClickCardDetail($event); })("clickIscrizione", function ListcoursesPage_div_13_ion_col_3_Template_app_card_course_clickIscrizione_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r12.onClickIscrizione($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const corso_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("myCorso", corso_r9)("useIscrizioniColor", ctx_r8.enableIscrizioni);
} }
function ListcoursesPage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ListcoursesPage_div_13_ion_col_3_Template, 2, 2, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.listCorsi);
} }
function ListcoursesPage_div_14_ion_col_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-card-course", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickDetail", function ListcoursesPage_div_14_ion_col_3_Template_app_card_course_clickDetail_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r15.onClickCardDetail($event); })("clickIscrizione", function ListcoursesPage_div_14_ion_col_3_Template_app_card_course_clickIscrizione_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r17.onClickIscrizione($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const corso_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("myCorso", corso_r14)("useIscrizioniColor", ctx_r13.enableIscrizioni);
} }
function ListcoursesPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ListcoursesPage_div_14_ion_col_3_Template, 2, 2, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.listCorsiMioLivello);
} }
function ListcoursesPage_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Nessun corso disponibile");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Modifica i parametri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "di Ricerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ListcoursesPage_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Nessun corso disponibile");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Modifica i parametri");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "di Ricerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
var PageState;
(function (PageState) {
    PageState[PageState["TUTTI"] = 10] = "TUTTI";
    PageState[PageState["MIEI"] = 20] = "MIEI";
})(PageState || (PageState = {}));
class ListcoursesPage {
    constructor(router, startService, mdlController, navController, loadingCtrl, toastCtrl, docStructureService, gestureCtrl) {
        this.router = router;
        this.startService = startService;
        this.mdlController = mdlController;
        this.navController = navController;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.docStructureService = docStructureService;
        this.gestureCtrl = gestureCtrl;
        this.PageState = PageState;
        this.idLocation = '';
        this.listCorsi = [];
        this.listCorsiMioLivello = [];
        this.filtroCorsi = new _models_corso_model__WEBPACK_IMPORTED_MODULE_1__["Corso"](true);
        this.userLogged = false;
        this.statoPagina = PageState.TUTTI;
        this.showTabs = true;
        this.enableIscrizioni = false;
        //Mostro tutti i corsi
        this.preferList = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__["SegmentCorsi"].tutti;
        //Ascolto le modifiche Utente
        this.onListenUser();
        //inserisco nel filtro la condizione di "corsi non ancora finiti"
        this.filtroCorsi.DATAFINE = new Date();
        this.filtroCorsi.addFilterCondition(src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_9__["OperatorCondition"].maggiore, 'DATAFINE');
        //Ascolto le modifiche dell'area selezionata
        this.onListenSelectedArea();
    }
    /**
     * In ascolto dell'area selezionata, per capire se solo abilitate le iscrizioni
     */
    onListenSelectedArea() {
        this.listenSelectedArea = this.startService.areaSelected
            .subscribe(elArea => {
            this.selectedArea = elArea;
            //Controllo se nell'area sono abilitate le iscrizioni
            if (this.selectedArea.APPISCRIZIONI == true) {
                this.enableIscrizioni = true;
            }
            else {
                this.enableIscrizioni = false;
            }
        }, error => {
            this.enableIscrizioni = false;
        });
    }
    /**
     * In ascolto al cambiamento utente
     */
    onListenUser() {
        //Richiedo lo User
        this.listenDocUser = this.startService.utente.subscribe(element => {
            this.docUser = element;
        });
        this.listenUserLogged = this.startService.utenteLogged.subscribe(flagLogged => {
            this.userLogged = flagLogged;
            /** Utente Loggato mi sposto su Mio Livello */
            if (this.userLogged == true) {
                this.statoPagina = PageState.MIEI;
            }
        });
    }
    ngOnInit() {
        // Leggo idLocation 
        this.router.paramMap.subscribe(param => {
            if (param.has('locationId')) {
                //Recupero del Location ID
                this.idLocation = param.get('locationId');
                //inserisco nel filtro l'id della location
                this.filtroCorsi.IDLOCATION = this.idLocation;
                //Effettuo la richiesta dei corsi
                this.requestCorsi();
            }
        });
    }
    ngOnDestroy() {
        if (this.listenSelectedArea) {
            this.listenSelectedArea.unsubscribe();
        }
        if (this.listenUserLogged) {
            this.listenUserLogged.unsubscribe();
        }
    }
    // ionViewDidEnter(){
    //   const gesture: Gesture = this.gestureCtrl.create({
    //     el: document.getElementById('content'),
    //     threshold: 15,
    //     gestureName: 'my-gesture',
    //     direction: 'x',
    //     maxAngle: 90,
    //     onMove: ev => this.onSwipe(ev),
    //   }, true);
    //   gesture.enable(true);
    // }
    // onSwipe(detail){
    //   console.log(detail);
    //   //scroll verso sinistra
    //   if (detail.deltaY > -50 && detail.deltaY < 50){
    //     if (this.statoPagina == PageState.TUTTI && (detail.velocityX < 0) ){
    //       this.statoPagina = PageState.MIEI;
    //     }
    //     //scroll verso destra
    //     else if (this.statoPagina == PageState.MIEI && (detail.velocityX > 0)){
    //       this.statoPagina = PageState.TUTTI;
    //     }
    //   }
    // }
    /**
     * Richiesta dei corsi
     */
    requestCorsi() {
        //quando faccio una richiesta di corsi, l'id location è sempre presente
        this.loadingCtrl.create({
            spinner: 'circular',
            message: 'Caricamento',
            backdropDismiss: true
        }).then(loading => {
            loading.present();
            //Richiesta di decodifica
            let params = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_8__["RequestParams"]();
            params.decode.active = true;
            //Eseguo la richiesta al server
            this.docStructureService.requestNew(this.filtroCorsi, params)
                .then(data => {
                //Chiudo il loading
                loading.dismiss();
                //recupero la lista dei corsi
                this.listCorsi = data;
                //Preparo i dati per il mio livello (se utente loggato)
                this.prepareForMioLivello();
            })
                .catch(error => {
                //Chiudo il loading
                loading.dismiss();
                this.showMessage('Errore di connessione');
                console.log(error);
            });
        });
    }
    /**
     * Preparo i dati per il mio livello
     */
    prepareForMioLivello() {
        this.listCorsiMioLivello = [];
        if (this.docUser) {
            //filtro subito recuperando solo i corsi per me
            this.listCorsiMioLivello = this.listCorsi.filter(elCorso => {
                //Corso per l'utente
                let isForUser = true;
                if (elCorso.IDLIVELLOENTRATA && elCorso.IDLIVELLOENTRATA != '') {
                    //Controlliamo se l'utente può partecipare allo sport con il livello passato
                    isForUser = this.docUser.isForLevelSport(elCorso.IDLIVELLOENTRATA, elCorso.IDSPORT);
                }
                //Controllo TARGETSESSO
                if (isForUser && elCorso.TARGETSESSO) {
                    isForUser = this.docUser.isForTargetSesso(elCorso.TARGETSESSO);
                }
                //Controllo CategoriaEta
                if (isForUser && elCorso.IDCATEGORIEETA && elCorso.IDCATEGORIEETA.length != 0) {
                    if (this.docUser.NATOIL) {
                        let eta = this.docUser.eta;
                        isForUser = this.startService.isValidCategorieEta(elCorso.IDCATEGORIEETA, eta);
                    }
                }
                return isForUser;
            });
        }
    }
    /**
     * Modifica del Segment per la scelta dei corsi
     */
    onChangeSegmentCorsi(event) {
        if (this.userLogged) {
            this.statoPagina = event.target.value;
        }
    }
    goToFilter() {
        this.mdlController
            .create({
            component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_5__["FilterPage"],
            componentProps: {
                'myFilter': this.filtroCorsi
            }
        })
            .then(formModal => {
            formModal.present();
            formModal.onWillDismiss().then((objReceived) => {
                if (objReceived.data.dismissFilter) {
                    //Mi è arrivato un filtro da applicare
                    this.onModalNewFilter(objReceived.data.dismissFilter);
                }
            });
        });
    }
    /**
     * Arrivo di nuovi filtri dalla modale
     * @param filter Filtri impostati nella modale
     */
    onModalNewFilter(filter) {
        this.filtroCorsi = filter;
        this.requestCorsi();
    }
    /* ****** CALENDAR ******** */
    onClickCardCalendar(corso) {
        /* Apro in modale il calendario */
        this.mdlController
            .create({
            component: _detailcourse_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"],
            componentProps: {
                'myCorso': corso
            }
        })
            .then(formModal => {
            formModal.present();
        });
    }
    /**
     * Visualizza un messaggio
     * @param message Messaggio
     */
    showMessage(message) {
        //Creo un messaggio
        this.toastCtrl.create({
            message: message,
            duration: 3000
        })
            .then(tstMsg => {
            tstMsg.present();
        });
    }
    doRefresh(event) {
        this.requestCorsi();
        event.target.complete();
    }
    /**
     * Passa alla pagina Dettaglio del corso
     * @param myCorso Corso Richiesto
     */
    onClickCardDetail(myCorso) {
        this.navController.navigateForward(['/', 'detailcourse', myCorso.ID]);
    }
    /**
    * Evento Click sul pulsante di Iscrizione
    */
    onClickIscrizione(selectedCorso) {
        if (selectedCorso) {
            //Posso proseguire verso l'iscrizione
            if (this.enableIscrizioni && selectedCorso.flagIscrizioniAperte()) {
                //Verifico di essere loggato, ed eventualmente di avere tutte le informazioni
                //di verifica richieste
                //Non solo loggato, devo loggarmi
                if (!this.userLogged) {
                    //Prima di aprire la pagina di login
                    //impostare nel servizio Start forceIdArea = 
                    this.startService.setIdAreaForcedForLogin();
                    //Ora preparo e creo la pagina di Login
                    this.mdlController.create({
                        component: src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_10__["NewLoginPage"]
                    })
                        .then(modal => {
                        modal.present();
                    });
                }
                else {
                    let paramsVerifica;
                    if (this.docUser) {
                        //Recupero i parametri di verifica
                        paramsVerifica = this.docUser.getParamsVerifica(this.startService.actualStartConfig.gruppo);
                        if (paramsVerifica) {
                            //se ci sono parametri, significa che devo chiamare la pagina di verifica
                            this.mdlController.create({
                                component: src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_11__["VerifyPage"],
                                componentProps: {
                                    params: paramsVerifica
                                }
                            })
                                .then(elModal => {
                                elModal.present();
                            });
                        }
                        else {
                            //Posso procedere con la pagina di prenotazione
                            this.mdlController.create({
                                component: _bookcourse_bookcourse_page__WEBPACK_IMPORTED_MODULE_12__["BookcoursePage"],
                                componentProps: {
                                    params: selectedCorso
                                }
                            })
                                .then(elModal => {
                                elModal.present();
                            });
                        }
                    }
                }
            }
        }
    }
    onScroll(event) {
        if (event.detail.currentY < 5) {
            this.showTabs = true;
        }
        else {
            if (event['detail']['deltaY'] > 20) {
                this.showTabs = false;
            }
            else if (event['detail']['deltaY'] < -20) {
                this.showTabs = true;
            }
        }
    }
}
ListcoursesPage.ɵfac = function ListcoursesPage_Factory(t) { return new (t || ListcoursesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_start_service__WEBPACK_IMPORTED_MODULE_2__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["GestureController"])); };
ListcoursesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ListcoursesPage, selectors: [["app-listcourses"]], decls: 18, vars: 5, consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["slot", "primary"], [3, "click"], ["name", "search"], ["mode", "md", 4, "ngIf"], ["id", "content", "scrollEvents", "", 3, "ionScroll"], ["slot", "fixed", 3, "ionRefresh"], ["id", "crs-lista", 4, "ngIf"], ["class", "nofind-cnt", 4, "ngIf"], ["mode", "md"], ["color", "primary", "id", "crs:button", 3, "ngModel", "ionChange", "ngModelChange"], [3, "value"], ["name", "bar-chart-outline"], ["name", "school-outline"], ["id", "crs-lista"], ["sizeXs", "12", "sizeSm", "8", "offsetSm", "2", "sizeMd", "6", "offsetMd", "0", "sizeLg", "5", "offsetLg", "0.5", "sizeXl", "4", "offsetXl", "0", 4, "ngFor", "ngForOf"], ["sizeXs", "12", "sizeSm", "8", "offsetSm", "2", "sizeMd", "6", "offsetMd", "0", "sizeLg", "5", "offsetLg", "0.5", "sizeXl", "4", "offsetXl", "0"], [3, "myCorso", "useIscrizioniColor", "clickDetail", "clickIscrizione"], [1, "nofind-cnt"]], template: function ListcoursesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Corsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ListcoursesPage_Template_ion_button_click_7_listener() { return ctx.goToFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ListcoursesPage_ion_toolbar_9_Template, 10, 3, "ion-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionScroll", function ListcoursesPage_Template_ion_content_ionScroll_10_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-refresher", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function ListcoursesPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, ListcoursesPage_div_13_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ListcoursesPage_div_14_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ListcoursesPage_div_15_Template, 7, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ListcoursesPage_div_16_Template, 7, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "ion-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showTabs && ctx.userLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listCorsi.length !== 0 && ctx.statoPagina == ctx.PageState.TUTTI);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listCorsiMioLivello.length !== 0 && ctx.statoPagina == ctx.PageState.MIEI);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listCorsi.length === 0 && ctx.statoPagina == ctx.PageState.TUTTI);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listCorsiMioLivello.length === 0 && ctx.statoPagina == ctx.PageState.MIEI);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shared_components_card_course_card_course_component__WEBPACK_IMPORTED_MODULE_16__["CardCourseComponent"]], styles: ["#crs-nofind-cnt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: -webkit-flex;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxpc3Rjb3Vyc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUlBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtBQUNKIiwiZmlsZSI6Imxpc3Rjb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjcnMtbm9maW5kLWNudCAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "BLZV":
/*!*************************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/filter/filter.page.ts ***!
  \*************************************************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/corso.model */ "F/re");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FilterPage_ion_select_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemTarget_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", itemTarget_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemTarget_r4.description, " ");
} }
function FilterPage_ion_select_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catEta_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", catEta_r5.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", catEta_r5.DESCTOOLTIP, " ");
} }
function FilterPage_ion_select_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemSport_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", itemSport_r6.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemSport_r6.DENOMINAZIONE, " ");
} }
function FilterPage_ion_select_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemTipo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", itemTipo_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", itemTipo_r7.description, " ");
} }
class FilterPage {
    constructor(startService, mdlController) {
        this.startService = startService;
        this.mdlController = mdlController;
        this.listTargetSesso = [];
        this.listTipoCorso = [];
        this.dataFine = new Date;
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1 === o2 : o1 === o2;
        };
        this.compareWithSelect = this.compareWithFn;
        this.listenSport = this.startService.listSport.subscribe(listElements => {
            this.listSport = listElements;
        });
        this.listenCatEta = this.startService.listCategoriaEta.subscribe(listElements => {
            this.listCatEta = listElements;
        });
        this.listTargetSesso = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TargetSesso"]);
        this.listTipoCorso = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["TipoCorso"]);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.listenSport) {
            this.listenSport.unsubscribe();
        }
        if (this.listenCatEta) {
            this.listenCatEta.unsubscribe();
        }
    }
    /**
     * Chiudo la videata Annullando tutto
     */
    closeFilter() {
        this.mdlController.dismiss({
            'dismissFilter': undefined
        });
    }
    /**
     * Chiudo la videata applicando i filtri impostati
     */
    applyFilter() {
        this.myFilter.DATAFINE = new Date(this.dataFine);
        this.mdlController.dismiss({
            'dismissFilter': this.myFilter
        });
    }
    /**
     * Svuota tutti i filtri, tranne la location
     */
    emptyFilter() {
        this.myFilter.TARGETSESSO = null;
        this.myFilter.TIPO = null;
        this.myFilter.IDSPORT = null;
        this.myFilter.IDCATEGORIEETA = null;
        this.myFilter.DATAFINE = new Date();
    }
}
FilterPage.ɵfac = function FilterPage_Factory(t) { return new (t || FilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
FilterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FilterPage, selectors: [["app-filter"]], inputs: { myFilter: "myFilter" }, decls: 40, vars: 13, consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "end"], [3, "click"], ["name", "close"], ["position", "floating"], ["interface", "popover", "placeHolder", "tutti", 3, "compareWith", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["interface", "popover", "placeHolder", "tutte", 3, "compareWith", "ngModel", "ngModelChange"], ["displayFormat", "DD/MM/YYYY", "placeHolder", "oggi", 3, "ngModel", "ngModelChange"], ["color", "danger", "fill", "outline", "expand", "block", "size", "small", 1, "ion-margin-top", "ion-margin-horizontal", 3, "click"], ["color", "primary", "fill", "solid", "expand", "block", 3, "click"], [3, "value"]], template: function FilterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Filtri");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterPage_Template_ion_button_click_5_listener() { return ctx.closeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Ricerca corsi per ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_select_ngModelChange_14_listener($event) { return ctx.myFilter.TARGETSESSO = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FilterPage_ion_select_option_15_Template, 2, 2, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Et\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_select_ngModelChange_19_listener($event) { return ctx.myFilter.IDCATEGORIEETA = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, FilterPage_ion_select_option_20_Template, 2, 2, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Attivit\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_select_ngModelChange_24_listener($event) { return ctx.myFilter.IDSPORT = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FilterPage_ion_select_option_25_Template, 2, 2, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Tipologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_select_ngModelChange_29_listener($event) { return ctx.myFilter.TIPO = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, FilterPage_ion_select_option_30_Template, 2, 2, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Disponibili da");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-datetime", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FilterPage_Template_ion_datetime_ngModelChange_34_listener($event) { return ctx.dataFine = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterPage_Template_ion_button_click_35_listener() { return ctx.emptyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Svuota Filtri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterPage_Template_ion_button_click_38_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Applica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx.compareWithSelect)("ngModel", ctx.myFilter.TARGETSESSO);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listTargetSesso);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx.compareWithSelect)("ngModel", ctx.myFilter.IDCATEGORIEETA);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listCatEta);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx.compareWithSelect)("ngModel", ctx.myFilter.IDSPORT);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listSport);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compareWith", ctx.compareWithSelect)("ngModel", ctx.myFilter.TIPO);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listTipoCorso);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.dataFine);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXIucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ "SpQX":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/listcourses-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListcoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcoursesPageRoutingModule", function() { return ListcoursesPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listcourses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listcourses.page */ "8InX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _listcourses_page__WEBPACK_IMPORTED_MODULE_1__["ListcoursesPage"]
    },
    {
        path: 'filter',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./filter/filter.module */ "f1uP")).then(m => m.FilterPageModule)
    }
];
class ListcoursesPageRoutingModule {
}
ListcoursesPageRoutingModule.ɵfac = function ListcoursesPageRoutingModule_Factory(t) { return new (t || ListcoursesPageRoutingModule)(); };
ListcoursesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ListcoursesPageRoutingModule });
ListcoursesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ListcoursesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f1uP":
/*!***************************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/filter/filter.module.ts ***!
  \***************************************************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-routing.module */ "kJTT");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.page */ "BLZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class FilterPageModule {
}
FilterPageModule.ɵfac = function FilterPageModule_Factory(t) { return new (t || FilterPageModule)(); };
FilterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FilterPageModule });
FilterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FilterPageModule, { declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _filter_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterPageRoutingModule"]], exports: [_filter_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]] }); })();


/***/ }),

/***/ "kJTT":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/location/course/listcourses/filter/filter-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ "BLZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_1__["FilterPage"]
    }
];
class FilterPageRoutingModule {
}
FilterPageRoutingModule.ɵfac = function FilterPageRoutingModule_Factory(t) { return new (t || FilterPageRoutingModule)(); };
FilterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FilterPageRoutingModule });
FilterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FilterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=default~course-listcourses-listcourses-module~pages-location-course-listcourses-listcourses-module-es2015.js.map