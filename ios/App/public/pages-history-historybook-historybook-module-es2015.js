(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-historybook-historybook-module"],{

/***/ "9eO6":
/*!*****************************************************************!*\
  !*** ./src/app/pages/history/historybook/historybook.module.ts ***!
  \*****************************************************************/
/*! exports provided: HistorybookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorybookPageModule", function() { return HistorybookPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historybook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historybook-routing.module */ "YODa");
/* harmony import */ var _historybook_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./historybook.page */ "xT0y");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HistorybookPageModule {
}
HistorybookPageModule.ɵfac = function HistorybookPageModule_Factory(t) { return new (t || HistorybookPageModule)(); };
HistorybookPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HistorybookPageModule });
HistorybookPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _historybook_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorybookPageRoutingModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HistorybookPageModule, { declarations: [_historybook_page__WEBPACK_IMPORTED_MODULE_4__["HistorybookPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _historybook_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorybookPageRoutingModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"]] }); })();


/***/ }),

/***/ "YODa":
/*!*************************************************************************!*\
  !*** ./src/app/pages/history/historybook/historybook-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HistorybookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorybookPageRoutingModule", function() { return HistorybookPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historybook_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historybook.page */ "xT0y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _historybook_page__WEBPACK_IMPORTED_MODULE_1__["HistorybookPage"]
    }
];
class HistorybookPageRoutingModule {
}
HistorybookPageRoutingModule.ɵfac = function HistorybookPageRoutingModule_Factory(t) { return new (t || HistorybookPageRoutingModule)(); };
HistorybookPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HistorybookPageRoutingModule });
HistorybookPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HistorybookPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xT0y":
/*!***************************************************************!*\
  !*** ./src/app/pages/history/historybook/historybook.page.ts ***!
  \***************************************************************/
/*! exports provided: HistorybookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorybookPage", function() { return HistorybookPage; });
/* harmony import */ var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/prenotazione.model */ "hXF6");
/* harmony import */ var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/library/services/docstructure.service */ "FYk8");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/library/models/requestParams.model */ "R2Z1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");





//per lo share mobile con immagini

//per lo share via browser












function HistorybookPage_ion_slide_9_ion_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const docPianificazione_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", "mailto:" + docPianificazione_r2["_EMAIL_Location"] + "?subject=Prenotazione numero " + docPianificazione_r2.PROGRESSIVO);
} }
function HistorybookPage_ion_slide_9_ion_item_16_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 29);
} }
function HistorybookPage_ion_slide_9_ion_item_16_ion_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 30);
} }
function HistorybookPage_ion_slide_9_ion_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HistorybookPage_ion_slide_9_ion_item_16_ion_icon_1_Template, 1, 0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HistorybookPage_ion_slide_9_ion_item_16_ion_icon_4_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r3 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("DATA ", i_r3 + 1, " DI ", ctx_r5.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r3 < ctx_r5.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length - 1);
} }
function HistorybookPage_ion_slide_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "qrcode", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Presenta il Qr-code o l'ID prenotazione all'ingresso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HistorybookPage_ion_slide_9_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const docPianificazione_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.onClickTrash(docPianificazione_r2.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HistorybookPage_ion_slide_9_ion_button_12_Template, 2, 1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HistorybookPage_ion_slide_9_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const docPianificazione_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.onShare(docPianificazione_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HistorybookPage_ion_slide_9_ion_item_16_Template, 5, 4, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-chip", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ion-chip", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-chip", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const docPianificazione_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("ID: ", docPianificazione_r2.PROGRESSIVO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("qrdata", docPianificazione_r2.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", docPianificazione_r2 && docPianificazione_r2["_EMAIL_Location"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](docPianificazione_r2["_DENOMINAZIONE_Sport"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r0.getIcon(docPianificazione_r2.IDSPORT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 15, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](29, 17, docPianificazione_r2.DATAORAINIZIO, "EEEE dd/LL/yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("dalle ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](32, 20, docPianificazione_r2.DATAORAINIZIO, "HH:mm"), " alle ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](33, 23, docPianificazione_r2.DATAORAFINE, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", docPianificazione_r2.DURATAORE, " ", docPianificazione_r2.DURATAORE == 1 ? "Ora" : "Ore", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](docPianificazione_r2["_DENOMINAZIONE_Campo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 26, docPianificazione_r2["_COMUNE_Location"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](45, 28, docPianificazione_r2["_INDIRIZZO_Location"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", docPianificazione_r2.NUMPARTECIPANTI, " ");
} }
function HistorybookPage_ion_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Pagato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 1, ctx_r1.myPrenotazione.INCASSATO, "EUR"), " ");
} }
const { Share } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
class HistorybookPage {
    constructor(router, navCtr, startService, toastCtr, socialSharing, docStructureService, loadingController, docstructrureService, alertController) {
        this.router = router;
        this.navCtr = navCtr;
        this.startService = startService;
        this.toastCtr = toastCtr;
        this.socialSharing = socialSharing;
        this.docStructureService = docStructureService;
        this.loadingController = loadingController;
        this.docstructrureService = docstructrureService;
        this.alertController = alertController;
        this.myPrenotazione = new src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_0__["Prenotazione"];
        //i metodi di pagamento possibili
        this.arPayments = [];
        this.sliderOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0
        };
    }
    //In paramMap leggo IDPrenotazione
    ngOnInit() {
        let result = true;
        this.loadingController.create({
            spinner: 'circular',
            message: 'Caricamento',
            backdropDismiss: true
        }).then(loading => {
            loading.present();
            this.subStartConfig = this.startService.startConfig.subscribe(config => {
                this.startConfig = config;
            });
            this.router.paramMap.subscribe(param => {
                if (param.has('historyId')) {
                    //HistoryID è formato da IDPrenotazione + '-' + IDPianificazione
                    this.historyId = param.get('historyId');
                    if (this.historyId.length !== 0) {
                        result = this.requestByHistoryId(this.historyId);
                    }
                    else {
                        result = false;
                    }
                }
                else {
                    result = false;
                }
                if (!result) {
                    this.loadingController.dismiss();
                    this.goBack();
                }
            });
        });
    }
    /**
     * Richiedo le informazioni con historyID
     * @param historyId HistoryId
     */
    requestByHistoryId(historyId) {
        let result = true;
        let idPren = '';
        let idPian = '';
        if (historyId.length !== 0) {
            idPren = historyId.substr(0, 36);
            idPian = historyId.substr(37, 36);
            if (idPren.length !== 36 || idPian.length !== 36) {
                result = false;
            }
            else {
                this.idPrenotazione = idPren;
                this.idPianificazione = idPian;
                //creo il filtro e richiedo la prenotazione
                let filterPrenotazione = new src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_0__["Prenotazione"](true);
                filterPrenotazione.ID = idPren;
                //Parametri richiesta
                let reqParams = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_9__["RequestParams"]();
                reqParams.child_level = 2;
                //Lancio la richiesta per la Prenotazione
                this.docStructureService.requestNew(filterPrenotazione, reqParams)
                    .then(data => {
                    //Recupero la Prenotazione
                    this.myPrenotazione = data[0];
                    //Voglio decodificare una collection di PRENOTAZIONEPIANIFICAZIONE e recuperare il doc Area
                    if (this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE && this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
                        //Mi faccio tornare i campi di foreing key e di describe che mi servono ora
                        let reqForeign = src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__["PrenotazionePianificazione"].getReqForeignKeys();
                        //Chiedo la decodifica della collection e successivamente chiedo il documento Area
                        this.docStructureService.decodeCollection(this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE, reqForeign)
                            .then(() => {
                            //CHIEDO L'AREA
                            //Chiedo il recupero del documento Area
                            this.docstructrureService.getRelDoc(this.myPrenotazione, ['IDAREAOPERATIVA'])
                                .then(docArea => {
                                this.myArea = docArea;
                                //Imposto i dati per i pagamenti
                                this.setPaymentFromArea();
                                //Qui è arrivato tutto esattamente
                                this.loadingController.dismiss();
                            })
                                .catch(err => {
                                //Dismetto il loading
                                this.loadingController.dismiss();
                                this.showMessage('Errore nel caricamento Area');
                                console.log(err);
                            });
                        })
                            .catch(err => {
                            //Dismetto il loading
                            this.loadingController.dismiss();
                            this.showMessage('Errore nel caricamento Elenco');
                            console.log(err);
                        });
                    }
                    else {
                        //SE NON PRENOTAZIONI PIANIFICAZIONE
                        //CHIEDO L'AREA
                        //Chiedo il recupero del documento Area
                        this.docstructrureService.getRelDoc(this.myPrenotazione, ['IDAREAOPERATIVA'], 3)
                            .then(docArea => {
                            this.myArea = docArea;
                            this.setPaymentFromArea();
                            //Qui è arrivato tutto esattamente
                            this.loadingController.dismiss();
                        })
                            .catch(err => {
                            //Dismetto il loading
                            this.loadingController.dismiss();
                            this.showMessage('Errore nel caricamento Area');
                            console.log(err);
                        });
                    }
                }).catch(error => {
                    this.loadingController.dismiss();
                    this.showMessage('Errore nel caricamento Prenotazione');
                    console.log(error);
                });
            }
        }
        else {
            result = false;
        }
        return result;
    }
    /**
     * Imposta i pagamenti a seconda dell'area
     */
    setPaymentFromArea() {
        //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
        //dal server l'Area perchè potrebbe essere diversa dall'attuale
    }
    ngOnDestroy() {
    }
    goBack() {
        this.showMessage('Informazioni prenotazioni errate');
        this.navCtr.navigateBack(['/', 'historylist']);
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
    getIcon(idSport) {
        return this.startService.getSportIcon(idSport);
    }
    onShare(docPianificazione) {
        let url;
        let messaggio;
        let logo;
        let oggetto;
        if (this.myPrenotazione && docPianificazione) {
            for (const iterator of this.myArea.AREALINKS) {
                if (iterator.TIPOURL == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_8__["PageType"].home) {
                    url = iterator.REFERURL;
                    break;
                }
            }
            if (!url) {
                url = '';
            }
            logo = this.startConfig.getUrlLogo();
            messaggio = this.myPrenotazione.NOMINATIVO + ' ha prenotato il ' + docPianificazione.DATAORAINIZIO.toLocaleDateString() + ' alle ' + docPianificazione.DATAORAINIZIO.toLocaleTimeString();
            if (this.startConfig.companyName) {
                messaggio += ' presso ' + this.startConfig.companyName;
            }
            if (docPianificazione['_INDIRIZZO_Location']) {
                messaggio += ' ' + docPianificazione['_INDIRIZZO_Location'];
            }
            if (docPianificazione['_DENOMINAZIONE_Campo']) {
                messaggio += ' (Campo: ' + docPianificazione['_DENOMINAZIONE_Campo'];
            }
            if (docPianificazione['_DENOMINAZIONE_Sport']) {
                messaggio += ', Attività: ' + docPianificazione['_DENOMINAZIONE_Sport'] + ')';
            }
            oggetto = 'Prenotazione ' + docPianificazione.PROGRESSIVO;
            if (this.startService.isDesktop) {
                //share via mail su desktop
                window.open('mailto:?subject=' + oggetto + '&body=' + messaggio);
            }
            else {
                //share su mobile
                this.socialSharing.share(messaggio, '', logo, url);
            }
        }
        else {
            this.showMessage('Errore nella condivisione');
        }
    }
    /**
     * Richiesta cancellazione prenotazione al server
     * @param idPianificazione Prenotazione Pianificazione
     */
    onClickTrash(idPianificazione) {
        this.alertController.create({
            header: "Sei sicuro?",
            message: "Continuando, cancellerai questa prenotazione",
            buttons: [
                {
                    text: 'Conferma',
                    handler: () => { this.deletePianificazione(idPianificazione); }
                },
                {
                    text: 'Annulla',
                    role: 'cancel'
                }
            ]
        })
            .then(alert => {
            alert.present();
        });
    }
    deletePianificazione(idPianificazione) {
        this.loadingController.create({
            message: 'Cancellazione...',
            spinner: 'circular',
            backdropDismiss: true
        })
            .then(loading => {
            return loading.present();
        })
            .then(() => {
            //faccio richiesta cancellazione 
            return this.startService.requestDeletePianificazione(idPianificazione);
        })
            .then(resp => {
            //Chiudo il Loading Controller
            this.loadingController.dismiss();
            //Visualizzo il messaggio
            this.showMessage(resp.message);
            //Se è andato tutto bene
            if (resp.result) {
                //è andato tutto bene
                this.navCtr.navigateBack('/historylist');
            }
        })
            .catch(resp => {
            this.loadingController.dismiss();
            this.showMessage(resp.message);
        });
        // this.alertController.create({
        //   header: 'Cancellazione',
        //   message: 'Contattaci direttamente per cancellare questa prenotazione',
        //   backdropDismiss: true,
        //   buttons: [
        //     {
        //       text: 'Ok',
        //       handler: ()=>{this.alertController.dismiss()}
        //     }
        //   ]
        // })
        // .then(elAlert => {
        //   elAlert.present();
        // })
    }
}
HistorybookPage.ɵfac = function HistorybookPage_Factory(t) { return new (t || HistorybookPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_7__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"])); };
HistorybookPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HistorybookPage, selectors: [["app-historybook"]], decls: 28, vars: 13, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/historylist"], [3, "options"], [4, "ngFor", "ngForOf"], ["color", "light"], ["lines", "full"], [2, "text-align", "right"], ["lines", "full", 4, "ngIf"], ["expand", "block", "color", "tertiary", 3, "disabled"], [2, "width", "100%"], ["mode", "md", 1, "ion-text-center", "div-qr"], [3, "qrdata"], ["name", "information-circle-outline", "color", "primary"], [1, "ion-text-center", "div-btns"], ["layout", "icon-top", "fill", "clear", "size", "large", 3, "click"], ["name", "trash-outline"], ["fill", "clear", "size", "large", 3, "href", 4, "ngIf"], ["fill", "clear", "size", "large", 3, "click"], ["name", "share-social-outline"], ["lines", "none"], [1, "icon-sport"], [3, "innerHTML"], ["name", "person"], ["fill", "clear", "size", "large", 3, "href"], ["name", "mail-outline"], ["color", "primary", "class", "no-margin-vertical", "slot", "start", "name", "chevron-back", 4, "ngIf"], [1, "no-margin-vertical"], ["color", "primary", "class", "no-margin-vertical", "slot", "end", "name", "chevron-forward", 4, "ngIf"], ["color", "primary", "slot", "start", "name", "chevron-back", 1, "no-margin-vertical"], ["color", "primary", "slot", "end", "name", "chevron-forward", 1, "no-margin-vertical"]], template: function HistorybookPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Prenotazione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-slides", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HistorybookPage_ion_slide_9_Template, 49, 30, "ion-slide", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " PAGAMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Importo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, HistorybookPage_ion_item_18_Template, 6, 4, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Residuo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.sliderOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](17, 7, ctx.myPrenotazione.TOTALE, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.myPrenotazione.TOTALE != ctx.myPrenotazione.INCASSATO);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](24, 10, ctx.myPrenotazione.RESIDUO, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.myPrenotazione.getCaptionStatePayment(false), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".div-qr[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n}\n.div-qr[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n  font-weight: 700;\n}\n.div-qr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0px;\n  margin-top: 8px;\n  color: #2b2b2b;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.div-btns[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n  border-bottom-color: #e4e4e4;\n  border-bottom-width: 1px;\n}\n.btn-pay[_ngcontent-%COMP%] {\n  margin-top: 4vh;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlzdG9yeWJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBZ0JJLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWRKO0FBRkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFGSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSVI7QUFLQTtFQUVJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUhKO0FBS0E7RUFFSSxlQUFBO0FBSEo7QUFLQTtFQUNJLGVBQUE7QUFGSiIsImZpbGUiOiJoaXN0b3J5Ym9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXFyXHJcbntcclxuICAgIGg2e1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgO1xyXG4gICAgcGFkZGluZy10b3A6M3ZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206M3ZoO1xyXG59XHJcbiAgICBcclxuXHJcblxyXG4uZGl2LWJ0bnNcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxufVxyXG4uYnRuLXBheVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOjR2aDtcclxufVxyXG5pe1xyXG4gICAgZm9udC1zaXplOiAzMHB4XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-history-historybook-historybook-module-es2015.js.map