(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/new-login/new-login.module */ "S8DX");
/* harmony import */ var _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newsdetail/newsdetail.module */ "k52M");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _auth_psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/psw-recovery/psw-recovery.module */ "Fdjd");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../history/historycourse/allegatilist/allegatilist.module */ "QKPD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_4__["NewsdetailPageModule"],
            _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_3__["NewLoginPageModule"],
            _auth_psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_6__["PswRecoveryPageModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_8__["AllegatilistPageModule"]
            // RouterModule.forChild([
            //   {
            //     path: '',
            //     component: HomePage
            //   }
            // ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
        _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_4__["NewsdetailPageModule"],
        _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_3__["NewLoginPageModule"],
        _auth_psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_6__["PswRecoveryPageModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        _history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_8__["AllegatilistPageModule"]
        // RouterModule.forChild([
        //   {
        //     path: '',
        //     component: HomePage
        //   }
        // ]),
    ] }); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"]
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/impegno.model */ "M0fm");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/buttoncard.model */ "07+x");
/* harmony import */ var src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/newsevento.model */ "h27B");
/* harmony import */ var src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.page */ "uVj7");
/* harmony import */ var src_app_pages_newsdetail_newsdetail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/newsdetail/newsdetail.page */ "FYlm");
/* harmony import */ var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/library/services/docstructure.service */ "FYk8");
/* harmony import */ var src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/library/models/requestParams.model */ "R2Z1");
/* harmony import */ var src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/library/models/iddocument.model */ "5usX");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/button-card/button-card.component */ "Hm2W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_centri_centri_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/centri/centri.component */ "Nzk7");
/* harmony import */ var _shared_components_news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/components/news-eventi/news-eventi.component */ "nqF+");






















function HomePage_ion_grid_8_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-button-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickElement", function HomePage_ion_grid_8_ion_slide_2_Template_app_button_card_clickElement_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r11.onClickButtonCardImpegni($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("smallVersion", true)("myButtonCard", btn_r10);
} }
function HomePage_ion_grid_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-slides", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomePage_ion_grid_8_ion_slide_2_Template, 2, 2, "ion-slide", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.listButtonImpegni);
} }
function HomePage_ion_grid_9_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-button-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickElement", function HomePage_ion_grid_9_ion_slide_2_Template_app_button_card_clickElement_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r15.onClickButtonCardImpegni($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("smallVersion", true)("myButtonCard", btn_r14);
} }
function HomePage_ion_grid_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-slides", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomePage_ion_grid_9_ion_slide_2_Template, 2, 2, "ion-slide", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r1.sliderOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.listButtonImpegni);
} }
function HomePage_div_10_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Occupazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " Elenco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomePage_div_10_ion_slide_3_ion_row_8_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomePage_div_10_ion_slide_3_ion_row_8_ion_col_1_Template_ion_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25); const occupazione_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4); return ctx_r24.goToPianificazioneDetail(occupazione_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occupazione_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", occupazione_r23.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](occupazione_r23["_DENOMINAZIONE_Campo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 4, occupazione_r23.DATAORAINIZIO, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 7, occupazione_r23.DATAORAFINE, "HH:mm"), "");
} }
function HomePage_div_10_ion_slide_3_ion_row_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomePage_div_10_ion_slide_3_ion_row_8_ion_col_1_Template, 9, 10, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", location_r19._LISTOCCUPAZIONI);
} }
function HomePage_div_10_ion_slide_3_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-button-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("smallVersion", true)("homeCustodeVersion", true)("myButtonCard", ctx_r21.getButtonEmptyOccupazione());
} }
function HomePage_div_10_ion_slide_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomePage_div_10_ion_slide_3_ion_row_8_Template, 2, 1, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomePage_div_10_ion_slide_3_ion_row_9_Template, 3, 3, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 3, location_r19.DENOMINAZIONE));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", location_r19 && location_r19._LISTOCCUPAZIONI && location_r19._LISTOCCUPAZIONI.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !location_r19 || !location_r19._LISTOCCUPAZIONI || location_r19._LISTOCCUPAZIONI.length <= 0);
} }
function HomePage_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomePage_div_10_ion_item_1_Template, 8, 0, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-slides", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, HomePage_div_10_ion_slide_3_Template, 10, 5, "ion-slide", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showCustode);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.listLocation);
} }
function HomePage_div_11_ion_slides_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slides", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-button-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("smallVersion", true)("myButtonCard", ctx_r27.getButtonCardTrainer());
} }
function HomePage_div_11_ion_slides_10_ion_slide_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-button-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomePage_div_11_ion_slides_10_ion_slide_1_Template_app_button_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const impegno_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r31.onClickImpegnoTrainer(impegno_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const impegno_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("smallVersion", true)("myButtonCard", ctx_r29.getButtonCardTrainer(impegno_r30));
} }
function HomePage_div_11_ion_slides_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-slides", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomePage_div_11_ion_slides_10_ion_slide_1_Template, 2, 2, "ion-slide", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r28.myListImpegniTrainer);
} }
function HomePage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Agenda Impegni");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Elenco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomePage_div_11_ion_slides_9_Template, 3, 2, "ion-slides", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, HomePage_div_11_ion_slides_10_Template, 2, 1, "ion-slides", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.myListImpegniTrainer || ctx_r3.myListImpegniTrainer.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.myListImpegniTrainer && ctx_r3.myListImpegniTrainer.length > 0);
} }
function HomePage_ion_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomePage_ion_button_18_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r33.showSceltaCentro($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Cambia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomePage_ion_grid_20_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-centri", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickPrenota", function HomePage_ion_grid_20_Template_app_centri_clickPrenota_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r35.onClickPrenota($event); })("clickLocation", function HomePage_ion_grid_20_Template_app_centri_clickLocation_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r37.onClickLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("location", ctx_r5.listLocation[0])("myStartConfig", ctx_r5.startConfig);
} }
function HomePage_div_21_app_centri_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-centri", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickPrenota", function HomePage_div_21_app_centri_1_Template_app_centri_clickPrenota_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r40.onClickPrenota($event); })("clickLocation", function HomePage_div_21_app_centri_1_Template_app_centri_clickLocation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r42.onClickLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const locationItem_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("location", locationItem_r39)("myStartConfig", ctx_r38.startConfig);
} }
function HomePage_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomePage_div_21_app_centri_1_Template, 1, 2, "app-centri", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r6.listLocation);
} }
function HomePage_ion_grid_30_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-news-eventi", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("clickNews", function HomePage_ion_grid_30_ion_col_2_Template_app_news_eventi_clickNews_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46); const news_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r45.onClickNews(news_r44, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("myNews", news_r44);
} }
function HomePage_ion_grid_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomePage_ion_grid_30_ion_col_2_Template, 2, 1, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r7.listNews);
} }
function HomePage_ion_grid_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-news-eventi", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("myNews", ctx_r8.noNewsCard);
} }
const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"];
class HomePage {
    constructor(startService, actionSheetController, navController, modalController, docStructureService, toastController) {
        this.startService = startService;
        this.actionSheetController = actionSheetController;
        this.navController = navController;
        this.modalController = modalController;
        this.docStructureService = docStructureService;
        this.toastController = toastController;
        // Elenco delle Aree
        this.listAree = [];
        // Elenco delle Location da mostrare
        this.listLocation = [];
        //Elenco delle prossime attività
        this.myListImpegni = [];
        this.myListImpegniTrainer = [];
        this.listButtonImpegni = []; //Bottoni da mostrare nell'area impegni
        this.listNews = [];
        //Bottoni da mostrare nella porzione Agenda
        this.agendaCards = [];
        this.listOccupazioni = []; //array di array di occupazioni, divise per locations
        //Mostra o nasconde Area Agenda
        this.showAgenda = false;
        //Guarda qui
        //https://swiperjs.com/demos/#responsive_breakpoints
        this.sliderOpts = {
            slidesPerView: 1.2,
            spaceBetween: 0,
            initialSlide: 0,
            // Dovrei farla variabile
            // Responsive breakpoints   
            breakpoints: {
                // when window width is <= 320px     
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                // when window width is <= 480px     
                480: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                // when window width is <= 640px     
                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 1
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 1
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 1
                }
            }
        };
        //Recupero la card che dice che non ci sono news
        this.noNewsCard = src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_6__["NewsEvento"].getNoNews();
        // Parametri di Configurazione Iniziale Applicazione
        this.startConfigListen = this.startService.startConfig
            .subscribe(element => {
            this.startConfig = element;
        });
        // Sottoscrivo alla ricezione delle Aree
        this.listAreeListen = this.startService.listAree
            .subscribe(aree => {
            this.listAree = aree.filter(objArea => {
                return objArea.APPSHOW;
            });
            //quando le aree sono arrivate, se non sono loggato seleziono la più vicina
            if (!this.userLogged) {
                this.startService.getNearestArea(this.listAree)
                    .then(nearestArea => {
                    //trovata l'area, posso passarne l'id al metodo selectarea
                    this.startService.selectAreaByID(nearestArea.ID);
                });
            }
        });
        //QUESTO E' IMPORTANTE, QUI POSSO AGGANCIARE EVENTI A SEGUITO DEL CAMBIO DI AREA
        //Mi sottoscrivo alla ricezione della Area Selezionata
        this.selectedAreaListen = this.startService.areaSelected
            .subscribe(areaSel => {
            //controllo se nell'array di aree è presente quella selezionata
            if (this.listAree.includes(areaSel)) {
                //Cambio Area Selezionata
                this.selectedArea = areaSel;
            }
            //altrimenti setto come area selezionata la prima disponibile
            else {
                this.selectedArea = this.listAree[0];
            }
            //richiedo le location sulla base della nuova area selezionata
            startService.requestLocation(this.selectedArea.ID);
            //Richiesta nuove News
            this.requestNews();
            //Aggiorno l'agenda
            this.updateAgenda();
            // this.richiediAgendaOccupazione();
        });
        // QUI POSSO AGGANCIARE EVENTI ALL'ARRIVO DELLE LOCATIONS
        // Sottoscrivo alla ricezione delle Locations
        this.listLocationListen = this.startService.listLocation
            .subscribe(locations => {
            this.listLocation = locations;
            if (this.listLocation && this.listLocation.length > 0) {
                this.richiediAgendaOccupazione();
            }
        });
        //Sottoscrivo all'ascolto di un utente loggato
        this.userLoggedListen = this.startService.utenteLogged.subscribe(element => {
            //Recupero l'utente
            this.userLogged = element;
            //Aggiorno lista impegni e cerco di visualizzare le card superiori
            this.updateListImpegni();
            //Aggiorno l'agenda
            // this.updateAgenda();
            // this.richiediAgendaOccupazione();
        });
        //Sottoscrivo all'ascolto dell'Account
        this.docUtenteListen = this.startService.utente.subscribe(element => {
            this.docUtente = element;
            //Aggiorno lista impegni e cerco di visualizzare le card superiori
            this.updateListImpegni();
            //Aggiorno l'agenda
            // this.updateAgenda(); 
            // this.richiediAgendaOccupazione();
        });
        //Impostazione Iniziale dei Bottoni relativi gli impegni
        this.createButtonCardImpegni();
    }
    get showTrainer() {
        return (this.userLogged && (this.docUtente.isAssistenteTrainer || this.docUtente.isTrainer));
    }
    get showCustode() {
        return (this.userLogged && this.docUtente.isCustode);
    }
    /**
     * Effettua la richiesta delle News
     */
    requestNews() {
        if (this.selectedArea) {
            //Chiedo al servizio le News
            this.startService.requestNews(this.selectedArea.ID, 3).then(listNews => {
                this.listNews = listNews;
            });
        }
    }
    ionViewDidEnter() {
        //Aggiorniamo gli impegni
        this.updateListImpegni();
        this.requestNews();
    }
    //#region IMPEGNI
    /**
     * Crea l'array dei BottoniCard degli impegni, a seconda dell'utente loggato e la lista impegni
     */
    createButtonCardImpegni() {
        let params = new src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__["ButtonHomeParams"]();
        //Preparo i parametri
        params.utenteLoggato = this.userLogged;
        params.listImpegni = this.myListImpegni;
        params.registrazioneInApp = false;
        if (this.startConfig && this.startConfig.gruppo) {
            params.registrazioneInApp = this.startConfig.gruppo.APPFLAGREGISTRAZIONE;
        }
        //Recupero i bottoni da mostrare, a seconda sia loggato o no
        this.listButtonImpegni = src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__["ButtonCard"].getButtonHomeImpegni(params);
    }
    /**
     * Evento click su bottone della card
     * @param btn Bottone cliccato
     */
    onClickButtonCardImpegni(btn) {
        if (btn) {
            switch (btn.functionCod) {
                case 'register':
                    // Apro il Login
                    this.openLogin();
                    break;
                case 'login':
                    // Apro il Login
                    this.openLogin();
                    break;
                case 'show':
                    this.redirectFromButtonCard(btn);
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * Apre la pagina relativa dal Bottone passato
     * @param btn Bottone
     */
    redirectFromButtonCard(btn) {
        if (btn.id && btn.id.length !== 0) {
            switch (btn.settore) {
                case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settoreCorso:
                    this.navController.navigateForward(['/', 'historylist', 'course', btn.id]);
                    break;
                case _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settorePrenotazione:
                    this.navController.navigateForward(['/', 'historylist', 'booking', btn.id]);
                    break;
                default:
                    break;
            }
        }
    }
    //#endregion
    //#region NEWS ED EVENTI AZIENDA
    onClickShowAllNews() {
        this.navController.navigateForward(['/', 'news']);
    }
    /**
     * Apre in modalità modale la news
     * @param news News da leggere
     */
    onClickNews(news, event) {
        this.modalController.create({
            component: src_app_pages_newsdetail_newsdetail_page__WEBPACK_IMPORTED_MODULE_8__["NewsdetailPage"],
            componentProps: { myNews: news }
        }).then(modal => {
            modal.present();
        });
    }
    //#endregion
    //#region TRAINER
    // updateTrainer(){
    //   if (this.docUtente.isTrainer){
    //     this.showTrainer = true;
    //     //creo il filtro e recupero tutti i corsi dell'istruttore loggato
    //     let filterCorso : Corso = new Corso;
    //   }
    //   else{
    //     this.showTrainer = false;
    //   }
    // }
    //#endregion
    ngOnInit() {
        //prova localizzazione
        // Geolocation.getCurrentPosition().then(posizione => {
        //   console.log (posizione);
        // })
    }
    ngOnDestroy() {
        if (this.startConfigListen) {
            this.startConfigListen.unsubscribe();
        }
        if (this.listAreeListen) {
            this.listAreeListen.unsubscribe();
        }
        if (this.listLocation) {
            this.listLocationListen.unsubscribe();
        }
        if (this.selectedAreaListen) {
            this.selectedAreaListen.unsubscribe();
        }
        if (this.userLoggedListen) {
            this.userLoggedListen.unsubscribe();
        }
        if (this.docUtenteListen) {
            this.docUtenteListen.unsubscribe();
        }
    }
    /** Gestisce il Click del pulsante di footer */
    onClickfooterButton() {
        if (this.userLogged) {
            // Apro lo Storico
            this.openHistory();
        }
        else {
            // Apro il Login
            this.openLogin();
        }
    }
    /**
     * Prenotazione
     * @param location Location Selezionata
     */
    onClickPrenota(location) {
        this.navController.navigateForward(['/', 'location', location.ID, 'booking']);
    }
    /**
     * Scheda Location
     * @param location Location selezionata
     */
    onClickLocation(location) {
        this.navController.navigateForward(['/', 'location', location.ID]);
    }
    /** Apertura Videata Login */
    openLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //**Apro in versione moale la NewLogin
            const modal = yield this.modalController.create({
                component: src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_7__["NewLoginPage"]
            });
            modal.present();
        });
    }
    /**
     * Apre la pagina di History
     */
    openHistory() {
        this.navController.navigateForward(['/', 'historylist']);
    }
    /**
     * Visualizza le form per la scelta del centro
     */
    showSceltaCentro(ev) {
        //Per ora faccio uguale, vediamo poi se vale la pena 
        //cambiare per il desktop
        if (this.startService.isDesktop) {
            this.presentActionSheet();
        }
        else {
            this.presentActionSheet();
        }
    }
    /** funzione per mostrare il popup di scelta campo */
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let buttonsArray = [];
            let singleButton;
            //popolo l'array di bottoni con i nomi delle aree operative
            for (const iterator of this.listAree) {
                singleButton = {
                    text: iterator.DENOMINAZIONE,
                    icon: 'location-outline',
                    handler: () => {
                        //Chiedo al servizio di cambiare l'Area Selezionata
                        this.startService.selectAreaByID(iterator.ID);
                    }
                };
                buttonsArray.push(singleButton);
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Scegli la Sede',
                buttons: buttonsArray
            });
            yield actionSheet.present();
        });
    }
    //#region GESTIONE INTERFACCIA
    /** Ritorna il color a seconda dello stato di Login */
    // btnFooterColor() {
    //   let color = 'primary';
    //   if (this.userLogged) {
    //     color = 'warning'
    //   }
    //   else {
    //     color = 'primary'
    //   }
    //   return color;
    // }
    btnFooterCaption() {
        let retCaption = '';
        const captionAccedi = 'Accedi';
        retCaption = captionAccedi;
        //Utente Loggato
        if (this.userLogged) {
            // Account Presente
            if (this.docUtente) {
                retCaption = this.docUtente.NOMINATIVO ? this.docUtente.NOMINATIVO : captionAccedi;
            }
        }
        return retCaption;
    }
    btnFooterIcon() {
        let retIcon = '';
        const iconAccedi = 'log-in-outline';
        retIcon = iconAccedi;
        //Utente Loggato
        if (this.userLogged) {
            // Account Presente
            if (this.docUtente) {
                retIcon = this.docUtente.NOMINATIVO ? 'person-circle-outline' : iconAccedi;
            }
        }
        return retIcon;
    }
    //#endregion
    /**
     * Richiede gli impegni dell'utente
     * e successivamente prepara la listButtonImpegni
     */
    updateListImpegni() {
        let reqParam = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_10__["RequestParams"]();
        reqParam.top = 10;
        reqParam.child_level = 1;
        reqParam.decode.active = true;
        reqParam.orderBy = 'asc';
        reqParam.decode.foreignFields = src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_3__["Impegno"].getReqForeignKeys();
        if (this.userLogged) {
            if (this.docUtente) {
                //Devo richiedere gli impegni
                //Imposto nel filtro l'Utente
                let filterImpegno = new src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_3__["Impegno"](true);
                filterImpegno.IDUTENTE = this.docUtente.ID;
                filterImpegno.DATAORAINIZIO = new Date();
                //Applico una condizione per la dataorainizio
                filterImpegno.addFilterCondition(src_app_library_models_iddocument_model__WEBPACK_IMPORTED_MODULE_11__["OperatorCondition"].maggiore, 'DATAORAINIZIO');
                this.docStructureService.requestNew(filterImpegno, reqParam)
                    .then(listImpegni => {
                    this.myListImpegni = listImpegni;
                    //Reimposto l'area impegni
                    this.createButtonCardImpegni();
                })
                    .catch(error => {
                    this.myListImpegni = [];
                    console.log(error);
                });
            }
            else {
                this.myListImpegni = [];
                //Reimposto l'area impegni
                this.createButtonCardImpegni();
            }
        }
        else {
            this.myListImpegni = [];
            //Reimposto l'area impegni
            this.createButtonCardImpegni();
        }
    }
    //#region AGENDA
    /**
     * Passa alla pagina dell'agenda
     */
    onClickShowAgenda() {
        this.navController.navigateForward('/agenda');
    }
    /**
     * Aggiornamento dell'agenda
     * Utente non loggato, utente Cliente -> NESSUNA AGENDA VISUALIZZATA
     */
    updateAgenda() {
        let richiediOccupazioni = false;
        let richiediMieiCorsi = false;
        if (this.selectedArea && this.selectedArea.ID) {
            //Utente Loggato
            if (this.userLogged) {
                // Account Presente
                if (this.docUtente) {
                    if (this.docUtente.RUOLO == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["Ruolo"].admin || this.docUtente.RUOLO == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["Ruolo"].super) {
                        richiediOccupazioni = true;
                    }
                    if (this.docUtente.isTrainer || this.docUtente.isAssistenteTrainer) {
                        richiediMieiCorsi = true;
                    }
                    // else if (this.docUtente.RUOLO == Ruolo.collaboratore ) {
                    //   switch(this.docUtente.MANSIONE) {
                    //     case Mansione.assistenteTrainer:
                    //       richiediMieiCorsi = true;
                    //       break;
                    //     case Mansione.trainer:
                    //       richiediMieiCorsi = true;
                    //       break;
                    //     case Mansione.custode:
                    //       richiediOccupazioni = true;
                    //       break;
                    //   }
                    // }
                }
            }
            if (richiediMieiCorsi) {
                this.richiediAgendaTrainer();
            }
            else if (richiediOccupazioni) {
                // this.richiediAgendaOccupazione();
            }
            else {
                //Nascono l'agenda che non serve
                this.showAgenda = false;
                //Elimino l'agenda
                this.agendaCards = [];
            }
        }
    }
    /**
     * Richiesta Agenda Occupazioni
     */
    richiediAgendaOccupazione() {
        if (this.listLocation && this.listLocation.length > 0) {
            let idArea = this.selectedArea.ID;
            // this.showAgenda = true;
            this.listLocation.forEach(elLocation => {
                this.startService.requestOccupazioni(idArea, elLocation.ID, 4, undefined, new Date())
                    .then(listOccupazioni => {
                    elLocation._LISTOCCUPAZIONI = listOccupazioni;
                })
                    .catch(error => {
                    console.log(error);
                });
            });
        }
    }
    richiediAgendaTrainer() {
        //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"
        this.startService.requestImpegniTrainer(this.docUtente.ID, new Date())
            .then(result => {
            this.myListImpegniTrainer = result;
        })
            .catch(error => {
            console.log(error);
        });
    }
    //#endregion
    getButtonCardTrainer(pianificazioneElem) {
        if (pianificazioneElem) {
            return src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__["ButtonCard"].getButtonAgendaFromPianificazioneCorso(pianificazioneElem);
        }
        else {
            let btnCard = new src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__["ButtonCard"]();
            btnCard.title = 'Nessun corso previsto per oggi';
            btnCard.nameicon = 'school-outline';
            btnCard.sloticon = "start";
            btnCard.color = "primary";
            btnCard.disabled = true;
            return btnCard;
        }
    }
    getButtonEmptyOccupazione() {
        let btnCard = new src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_5__["ButtonCard"]();
        btnCard.title = 'Nessun evento presente oggi nella struttura';
        btnCard.subtitle = 'controlla domani';
        btnCard.nameicon = 'calendar-outline';
        btnCard.sloticon = 'start';
        btnCard.color = 'primary';
        btnCard.disabled = true;
        return btnCard;
    }
    onClickImpegnoTrainer(pianificazioneElem) {
        this.navController.navigateForward('/agenda-trainer/' + pianificazioneElem.ID);
    }
    /**
     * se viene dato un valore a "componente", apre in modale quel componente, altrimenti apre la pagina di test
     */
    onTest() {
        const componente = undefined;
        const componentProps = undefined;
        let idArea = this.startService.areaSelectedValue.ID;
        const path = '/agenda-custode/' + idArea;
        if (componente) {
            this.modalController.create({
                component: componente,
                componentProps: componentProps
            })
                .then(elModal => {
                elModal.present();
            });
        }
        else if (path) {
            this.navController.navigateForward(path);
        }
        else {
            this.navController.navigateForward('/test');
        }
    }
    goToPianificazioneDetail(docOccupazione) {
        if (docOccupazione && docOccupazione.TIPO == _models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettoreAttivita"].settorePrenotazione) {
            this.navController.navigateForward(`/agenda-custode/${docOccupazione.ID}`);
        }
        else {
            this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni');
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
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"])); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 36, vars: 18, consts: [["color", "primary", "mode", "md"], [1, "title-image"], [1, "logo", 3, "src"], [4, "ngIf"], ["class", "ion-no-padding", 4, "ngIf"], ["type", "header", "lines", "none", "color", "tertiary"], ["slot", "start", "name", "location-outline"], [1, "ion-text-nowrap"], ["slot", "end", "color", "light", "fill", "solid", "size", "default", 3, "click", 4, "ngIf"], ["id", "div-content"], ["scrollX", "true", 4, "ngIf"], ["type", "header", "lines", "none", "color", "medium"], ["slot", "start", "name", "newspaper-outline"], ["slot", "end", "color", "light", "fill", "solid", "size", "default", 3, "click"], ["slot", "start", "color", "primary", "name", "layers-outline"], ["color", "tertiary", "expand", "block", "size", "large", 3, "click"], ["slot", "start", "color", "primary", 3, "name"], [1, "ion-no-padding", "ion-no-margin"], ["class", "ion-no-padding ion-no-margin", 4, "ngFor", "ngForOf"], [1, "small-button-card", 3, "smallVersion", "myButtonCard", "clickElement"], [1, "ion-no-padding", "ion-no-margin", 3, "options"], ["type", "header", "lines", "none", "color", "medium", 4, "ngIf"], ["scrollbar", "", 1, "reservations-grid"], [4, "ngFor", "ngForOf"], ["slot", "start", "name", "calendar-outline"], ["slot", "end", "color", "light", "fill", "solid", "size", "default", "routerLink", "/agenda-custode"], [1, "ion-no-padding"], ["color", "primary"], [1, "ion-no-margin", "ion-text-center"], ["sizeXs", "6", "sizeSm", "3", 4, "ngFor", "ngForOf"], ["sizeXs", "6", "sizeSm", "3"], ["button", "", 3, "click"], [3, "name"], [1, "", 3, "smallVersion", "homeCustodeVersion", "myButtonCard"], ["type", "header", "lines", "none", 1, "title-agenda-impegni"], ["slot", "start", "name", "school-outline"], ["slot", "end", "color", "light", "fill", "solid", "size", "default", "routerLink", "/agenda-trainer"], ["class", "ion-no-padding ion-no-margin", 4, "ngIf"], [1, "small-button-card", "card-corsi-vuoti", 3, "smallVersion", "myButtonCard"], [1, "small-button-card", 3, "smallVersion", "myButtonCard", "click"], ["slot", "start", "color", "primary", "name", "trail-sign-outline"], ["sizeXs", "12", "sizeSm", "6", "offsetSm", "3", "sizeLg", "4", "offsetLg", "4"], [3, "location", "myStartConfig", "clickPrenota", "clickLocation"], ["scrollX", "true"], [3, "location", "myStartConfig", "clickPrenota", "clickLocation", 4, "ngFor", "ngForOf"], ["size", "12", 4, "ngFor", "ngForOf"], ["size", "12"], [3, "myNews", "clickNews"], ["size", "12", 3, "myNews"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomePage_ion_grid_8_Template, 3, 1, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomePage_ion_grid_9_Template, 3, 2, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, HomePage_div_10_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, HomePage_div_11_Template, 11, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, HomePage_ion_button_18_Template, 3, 0, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, HomePage_ion_grid_20_Template, 4, 2, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, HomePage_div_21_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_27_listener() { return ctx.onClickShowAllNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, " Elenco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, HomePage_ion_grid_30_Template, 3, 1, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, HomePage_ion_grid_31_Template, 4, 1, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_33_listener() { return ctx.onClickfooterButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx.startConfig.getUrlIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 14, ctx.startConfig == null ? null : ctx.startConfig.companyName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listButtonImpegni.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listButtonImpegni.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showCustode);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showTrainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 16, ctx.selectedArea.DENOMINAZIONE));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listAree.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listLocation.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listLocation.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listNews.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.listNews.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("name", ctx.btnFooterIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.btnFooterCaption(), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_15__["ButtonCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _shared_components_centri_centri_component__WEBPACK_IMPORTED_MODULE_17__["CentriComponent"], _shared_components_news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_18__["NewsEventiComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".card-no-events[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-title.title-image[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n}\n\nion-title.title-image[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-right: 1vw;\n  max-height: 50px;\n  max-height: 50px;\n  margin-right: 20px;\n}\n\n.grid-agenda[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light-tint);\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n}\n\n.reservations-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 4px;\n  padding-bottom: 6px;\n  max-width: 160px;\n}\n\n.reservations-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--ion-color-primary);\n}\n\n.reservations-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n\n.reservations-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 300;\n  font-size: 15px;\n}\n\n.card-corsi-vuoti[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  margin-right: 9px;\n}\n\n.white[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\nion-item.title-agenda-impegni[_ngcontent-%COMP%] {\n  --background:#9fd18b;\n  --color: #000000;\n}\n\nion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUFESjs7QUFLQTtFQUNJLG9DQUFBO0FBRko7O0FBV0k7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0FBUlI7O0FBU1k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBYUE7RUFDSSw2Q0FBQTtBQVZKOztBQWFBO0VBQ0ksa0NBQUE7QUFWSjs7QUFjSTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWlI7O0FBa0JRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBaEJaOztBQW1CUTtFQUNJLFdBQUE7QUFqQlo7O0FBd0JJO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUF2QlI7O0FBMkJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxZQUFBO0FBeEJKOztBQTRCSTtFQUNJLGdCQUFBO0FBekJSOztBQTJCSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUF6QlI7O0FBNkJBO0VBQ0ksZUFBQTtBQTFCSjs7QUE2QkE7RUFDSSxlQUFBO0FBMUJKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZC1uby1ldmVudHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlvbi10aXRsZS50aXRsZS1pbWFnZXtcclxuICAgIFxyXG4gICAgPmRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICA+aW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxdnc7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmdyaWQtYWdlbmRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi5yZXNlcnZhdGlvbnMtZ3JpZHtcclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuXHJcbiAgICAgICAgLy8gLmlvbi1jb2x7XHJcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvcnNpLXZ1b3Rpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcblxyXG4ud2hpdGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgICYudGl0bGUtYWdlbmRhLWltcGVnbmkge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojOWZkMThiO1xyXG4gICAgICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1idXR0b257XHJcbiAgICBmb250LXNpemU6IDEycHggO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map