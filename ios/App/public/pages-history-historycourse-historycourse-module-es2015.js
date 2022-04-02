(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-historycourse-historycourse-module"],{

/***/ "BnKM":
/*!*********************************************************************!*\
  !*** ./src/app/pages/history/historycourse/historycourse.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistorycoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorycoursePageModule", function() { return HistorycoursePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historycourse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historycourse-routing.module */ "cFkA");
/* harmony import */ var _historycourse_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./historycourse.page */ "EdfV");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_pages_location_course_detailcourse_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/location/course/detailcourse/calendar/calendar.module */ "KoG1");
/* harmony import */ var src_app_pages_history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/history/historycourse/allegatilist/allegatilist.module */ "QKPD");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class HistorycoursePageModule {
}
HistorycoursePageModule.ɵfac = function HistorycoursePageModule_Factory(t) { return new (t || HistorycoursePageModule)(); };
HistorycoursePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HistorycoursePageModule });
HistorycoursePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _historycourse_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorycoursePageRoutingModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            src_app_pages_location_course_detailcourse_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__["CalendarPageModule"],
            src_app_pages_history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_7__["AllegatilistPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HistorycoursePageModule, { declarations: [_historycourse_page__WEBPACK_IMPORTED_MODULE_4__["HistorycoursePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _historycourse_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorycoursePageRoutingModule"],
        src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        src_app_pages_location_course_detailcourse_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__["CalendarPageModule"],
        src_app_pages_history_historycourse_allegatilist_allegatilist_module__WEBPACK_IMPORTED_MODULE_7__["AllegatilistPageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"]] }); })();


/***/ }),

/***/ "EdfV":
/*!*******************************************************************!*\
  !*** ./src/app/pages/history/historycourse/historycourse.page.ts ***!
  \*******************************************************************/
/*! exports provided: HistorycoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorycoursePage", function() { return HistorycoursePage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/corso.model */ "F/re");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/location.model */ "V6dt");
/* harmony import */ var src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/utenteiscrizione.model */ "SCCg");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_pages_location_course_detailcourse_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/location/course/detailcourse/calendar/calendar.page */ "YrHa");
/* harmony import */ var _allegatilist_allegatilist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allegatilist/allegatilist.page */ "DpLK");
/* harmony import */ var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/library/services/docstructure.service */ "FYk8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/settimana-block/settimana-block.component */ "GYAn");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _shared_pipes_tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/pipes/tipo-corso.pipe */ "KU5w");
/* harmony import */ var _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/pipes/target-sesso.pipe */ "ukHt");




















function HistorycoursePage_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-progress-bar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HistorycoursePage_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "qrcode", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Presenta il Qr-code o l'ID iscrizione all'ingresso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("ID: ", ctx_r4.myIscrizione.CODICEALFA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("qrdata", ctx_r4.myIscrizione.CODICEALFA)("allowEmptyString", true);
} }
function HistorycoursePage_div_9_ion_item_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HistorycoursePage_div_9_ion_item_22_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r8.onClickExpandCorsoProgramma(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r5.getClassLabelProgramma());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r5.myCorso.getFullProgrammaHTML(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function HistorycoursePage_div_9_ion_chip_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-chip", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.myLocation.TELEFONO, " ");
} }
function HistorycoursePage_div_9_ion_item_group_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item-divider", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Rivolto a");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "targetSesso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.myCorso._DESCRLIVELLOENTRATA ? ctx_r7.myCorso._DESCRLIVELLOENTRATA : "Tutti i Livelli");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.myCorso._DESCRCATEGORIEETA ? ctx_r7.myCorso._DESCRCATEGORIEETA : "Per tutte le et\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 3, ctx_r7.myCorso.TARGETSESSO));
} }
function HistorycoursePage_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HistorycoursePage_div_9_div_2_Template, 7, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HistorycoursePage_div_9_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.onClickCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Calendario");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HistorycoursePage_div_9_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.onClickAllegati(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Allegati");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-chip", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HistorycoursePage_div_9_ion_item_22_Template, 3, 2, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "app-settimana-block", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "inizio corso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ion-chip", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "fine corso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](56, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, HistorycoursePage_div_9_ion_chip_57_Template, 3, 1, "ion-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, HistorycoursePage_div_9_ion_item_group_58_Template, 18, 5, "ion-item-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.myIscrizione.CODICEALFA);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.myCorso.DENOMINAZIONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.myCorso["_DENOMINAZIONE_Sport"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r1.getIcon(ctx_r1.myCorso), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.myCorso == null ? null : ctx_r1.myCorso.existProgrammaCorso());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("listDays", ctx_r1.myCorso._SETTIMANA);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](29, 20, ctx_r1.myCorso.DATAINIZIO, "EEEE dd/LL/yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("alle ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](32, 23, ctx_r1.myCorso.ORAINIZIO, "HH:mm"), " per ", ctx_r1.myCorso.ORELEZIONE, " ", ctx_r1.myCorso.ORELEZIONE > 1 ? "Ore" : "Ora", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.myCorso.NUMEROLEZIONI, "\u00A0", ctx_r1.myCorso.NUMEROLEZIONI > 1 ? "Incontri " : "Incontro ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](43, 28, ctx_r1.myCorso.DATAFINE, "EEEE dd/LL/yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](50, 31, ctx_r1.myLocation.DENOMINAZIONE));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](53, 33, ctx_r1.myLocation == null ? null : ctx_r1.myLocation.COMUNE));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](56, 35, ctx_r1.myLocation == null ? null : ctx_r1.myLocation.INDIRIZZO));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.myLocation.TELEFONO);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.myCorso);
} }
function HistorycoursePage_ion_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Confermata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Iscrizione il ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 1, ctx_r2.myIscrizione.DATAISCRIZIONE, "dd/MM/yy"), " ");
} }
function HistorycoursePage_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-badge", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " In prova ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Iscrizione il ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 1, ctx_r3.myIscrizione.DATAISCRIZIONE, "dd/MM/yy"), " ");
} }
class HistorycoursePage {
    constructor(activatedRoute, startService, loadingController, toastController, navCtr, modalController, docstructrureService) {
        this.activatedRoute = activatedRoute;
        this.startService = startService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navCtr = navCtr;
        this.modalController = modalController;
        this.docstructrureService = docstructrureService;
        this.StatoPagamento = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoPagamento"];
        this.myIscrizione = new src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_5__["UtenteIscrizione"](); //il documento iscrizione NON OBSERVABLE
        this.myCorso = new src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_2__["Corso"]();
        this.myLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__["Location"]();
        this.selectedLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__["Location"](); //il documento location NON OBSERVABLE 
        this.arPayments = [];
        //La Label contenente il programma po' essere ristretta o allargata
        this.expandProgramma = false;
    }
    ngOnInit() {
        this.isDesktop = this.startService.isDesktop;
        //creo lo spinner e lo presento
        this.loadingController.create({
            message: 'Caricamento',
            spinner: 'circular',
            backdropDismiss: true
        }).then(loading => {
            //Mostro il loading
            loading.present();
            //recupero l'id dell'iscrizione
            this.activatedRoute.paramMap.subscribe(route => {
                if (route.has('historyId')) {
                    //se ho l'id dell'iscrizione, faccio la richiesta al server
                    let idIscrizione = route.get('historyId');
                    //Chiedo il documento della Iscrizione
                    this.requestIscrizione(idIscrizione)
                        .then(docIscrizione => {
                        //quando arriva la risposta, valorizzo la proprietà
                        this.myIscrizione = docIscrizione;
                        //Chiedo lo scaricamento del documento corso e location
                        if (this.myIscrizione) {
                            //Richiedo la Location (senza controllare se arriva)
                            this.requestLocation(this.myIscrizione);
                            //Richiedo anche Corso e Corso Programma verificando l'arrivo
                            this.requestCorso(this.myIscrizione)
                                .then(docCorso => {
                                //Chiudo il loading Controller
                                this.loadingController.dismiss();
                                //Corso caricato
                                if (docCorso) {
                                    //Corso caricato con la collction CORSOPROGRAMMA
                                    this.myCorso = docCorso;
                                }
                                else {
                                    //Corso nullo
                                    this.showAlert('Corso non trovato');
                                    this.goBack();
                                }
                            })
                                .catch(error => {
                                //Corso non recuperato
                                this.showAlert(error);
                                this.goBack();
                            });
                        }
                        else {
                            //Documento Iscrizione non recuperato
                            //Chiudo il loading
                            this.loadingController.dismiss();
                            //Documento nullo
                            this.showAlert('Iscrizione non trovata');
                            //Torno alla pagina di Lista
                            this.goBack();
                        }
                    })
                        .catch(error => {
                        //Errore recupero Iscrizione
                        //Chiudo il loading
                        this.loadingController.dismiss();
                        this.showAlert(error);
                        //Torno alla pagina di Lista
                        this.goBack();
                    });
                }
                else {
                    //Non trovo idIscrizione
                    //Chiudo il loading
                    loading.dismiss();
                    //Mostro un messaggio
                    this.showAlert('Nessuna Iscrizione trovata');
                    //Torno alla lista
                    this.goBack();
                }
            });
        });
    }
    /**
     * Richiede al server una Iscrizione per ID
     * @param myIdIscrizione idIscrizione richiesta
     * @returns Promise<UtenteIscrizione>
     */
    requestIscrizione(myIdIscrizione) {
        return new Promise((resolve, reject) => {
            if (myIdIscrizione && myIdIscrizione.length != 0) {
                this.startService.requestIscrizioneById(myIdIscrizione)
                    .then(docIscrizione => {
                    resolve(docIscrizione);
                })
                    .catch(error => {
                    reject(error);
                });
            }
            else {
                reject('Iscrizione non trovata');
            }
        });
    }
    /**
     * Richiede un documento correlato del Corso e la collection CORSOPROGRAMMA
     * @param docIscrizione documento della Iscrizione Corso
     */
    requestCorso(docIscrizione) {
        return new Promise((resolve, reject) => {
            this.docstructrureService.getRelDoc(docIscrizione, ['IDCORSO'], 1)
                .then(docCorso => {
                if (docCorso) {
                    //Scarico la collection CORSO PROGRAMMA
                    this.docstructrureService.loadCollection(docCorso, 'CORSOPROGRAMMA')
                        .then(() => {
                        resolve(docCorso);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
                else {
                    reject('Corso non trovato');
                }
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    /**
     * Richiede un documento correlato della Location ed imposto this.myLocation
     * @param docIscrizione documento della Iscrizione Corso
     */
    requestLocation(docIscrizione) {
        this.docstructrureService.getRelDoc(docIscrizione, ['IDLOCATION'], 1)
            .then(docLocation => {
            this.myLocation = docLocation;
        })
            .catch(error => {
            console.log(error);
        });
    }
    /**
     * chiama il servizio passandogli l'id dell'oggetto corso, e restituisce la stringa dell'icona
     * @param corso l'oggetto corso per cui si richiede l'icona
     */
    getIcon(corso) {
        let myIdSport = '';
        if (corso) {
            myIdSport = corso.IDSPORT;
        }
        return this.startService.getSportIcon(myIdSport);
    }
    getClassLabelProgramma() {
        let myClass = '';
        if (this.expandProgramma) {
            myClass = 'ion-text-wrap';
        }
        return myClass;
    }
    /**
     * Ritorna alla pagina della lista
     */
    goBack() {
        this.navCtr.navigateBack(['/', 'historylist']);
    }
    /**
     * Apertura del Calendario Corso in Modale
     */
    onClickCalendar() {
        /* Apro in modale il calendario */
        this.modalController
            .create({
            component: src_app_pages_location_course_detailcourse_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_7__["CalendarPage"],
            componentProps: {
                'myCorso': this.myCorso
            }
        })
            .then(formModal => {
            formModal.present();
        });
    }
    onClickAllegati() {
        this.modalController.create({
            component: _allegatilist_allegatilist_page__WEBPACK_IMPORTED_MODULE_8__["AllegatilistPage"],
            componentProps: {
                'myCorso': this.myCorso
            }
        })
            .then(elModal => {
            elModal.present();
        });
    }
    /**
     * Click sull'item contenente il Programma di corso
     */
    onClickExpandCorsoProgramma() {
        this.expandProgramma = !this.expandProgramma;
    }
    /**
     * Visualizza un Toast con il mssaggio
     * @param messaggio Messaggio
     */
    showAlert(messaggio) {
        this.toastController.create({
            message: messaggio,
            duration: 2000
        }).then(loading => {
            loading.present();
        });
    }
    iscrizioneConfermata() {
        return this.myIscrizione.STATOISCRIZIONE == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["StatoIscrizione"].confermata ? true : false;
    }
    onClickPaga() {
    }
    //funzione che recupera i metodi di pagamento e li inserisce in un array
    setPaymentFromArea() {
        //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
        //dal server l'Area perchè potrebbe essere diversa dall'attuale
    }
}
HistorycoursePage.ɵfac = function HistorycoursePage_Factory(t) { return new (t || HistorycoursePage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_9__["DocstructureService"])); };
HistorycoursePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HistorycoursePage, selectors: [["app-historycourse"]], decls: 15, vars: 9, consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/historylist"], ["id", "crs-spinner", 4, "ngIf"], [4, "ngIf"], ["lines", "full", 4, "ngIf"], ["color", "primary", "expand", "block", 3, "disabled"], ["id", "crs-spinner"], ["type", "indeterminate"], [2, "width", "100%"], ["class", "ion-text-center div-qr", "mode", "md", 4, "ngIf"], [1, "ion-text-center", "div-btns"], ["layout", "icon-top", "fill", "clear", 3, "click"], ["slot", "start", "name", "calendar-outline"], ["fill", "clear", 3, "click"], ["slot", "start", "name", "document-attach-outline"], ["lines", "none"], [1, "ion-text-wrap"], [1, "icon-sport"], [3, "innerHTML"], [3, "click", 4, "ngIf"], [3, "listDays"], ["color", "primary", 4, "ngIf"], ["mode", "md", 1, "ion-text-center", "div-qr"], [3, "qrdata", "allowEmptyString"], ["name", "information-circle-outline", "color", "primary"], [3, "click"], [3, "ngClass"], [2, "font-size", "small", 3, "innerHTML"], ["name", "call-outline"], ["color", "light"], ["name", "stats-chart-outline", "slot", "end", "color", "primary"], ["name", "bookmark-outline", "slot", "end", "color", "primary"], ["name", "transgender-outline", "slot", "end", "color", "primary"], ["lines", "full"], ["slot", "start", "name", "clipboard-outline", "color", "primary"], ["slot", "end", "color", "primary"], ["name", "thumbs-up"], ["slot", "end", "color", "light"], ["name", "help"]], template: function HistorycoursePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "tipoCorso");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HistorycoursePage_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HistorycoursePage_div_9_Template, 59, 37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, HistorycoursePage_ion_item_11_Template, 8, 4, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HistorycoursePage_ion_item_12_Template, 8, 4, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 7, ctx.myCorso.TIPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.myIscrizione || !ctx.myCorso);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.myIscrizione && ctx.myCorso);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.iscrizioneConfermata());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.iscrizioneConfermata());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.myIscrizione.getCaptionStatePayment(), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonChip"], _shared_components_settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_12__["SettimanaBlockComponent"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]], pipes: [_shared_pipes_tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_14__["TipoCorsoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_15__["TargetSessoPipe"]], styles: [".div-qr[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n}\n.div-qr[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n  font-weight: 700;\n}\n.div-qr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0px;\n  margin-top: 8px;\n  color: #2b2b2b;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.div-btns[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n  border-bottom-color: #e4e4e4;\n  border-bottom-width: 1px;\n}\n.num-lezioni[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  color: var(--ion-color-dark);\n  padding-right: 15px;\n  font-style: oblique;\n}\n.icon-sport[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.title[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\nion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]    > ion-label[_ngcontent-%COMP%] {\n  font-style: oblique;\n  font-size: 14px;\n}\nion-footer[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.links[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlzdG9yeWNvdXJzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFnQkksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFGSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUZJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJUjtBQUdBO0VBRUksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBREo7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtBQURKO0FBSUE7RUFDSSxvQ0FBQTtBQURKO0FBS0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUlJO0VBQ0ksaUJBQUE7QUFGUjtBQU9JO0VBQ0ksZ0JBQUE7QUFKUiIsImZpbGUiOiJoaXN0b3J5Y291cnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtcXJcclxue1xyXG4gICAgaDZ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA7XHJcbiAgICBwYWRkaW5nLXRvcDozdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozdmg7XHJcbn1cclxuXHJcbi5kaXYtYnRuc1xyXG57XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xyXG59XHJcblxyXG4ubnVtLWxlemlvbmkge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbi5pY29uLXNwb3J0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgICBpb24taXRlbT5pb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmtze1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "cFkA":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/history/historycourse/historycourse-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistorycoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorycoursePageRoutingModule", function() { return HistorycoursePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _historycourse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historycourse.page */ "EdfV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _historycourse_page__WEBPACK_IMPORTED_MODULE_1__["HistorycoursePage"]
    }
];
class HistorycoursePageRoutingModule {
}
HistorycoursePageRoutingModule.ɵfac = function HistorycoursePageRoutingModule_Factory(t) { return new (t || HistorycoursePageRoutingModule)(); };
HistorycoursePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HistorycoursePageRoutingModule });
HistorycoursePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HistorycoursePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-history-historycourse-historycourse-module-es2015.js.map