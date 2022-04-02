(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-course-detailcourse-course-module"],{

/***/ "FwVE":
/*!*********************************************************************!*\
  !*** ./src/app/pages/location/course/detailcourse/course.module.ts ***!
  \*********************************************************************/
/*! exports provided: CoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageModule", function() { return CoursePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-routing.module */ "mVnF");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course.page */ "MIHS");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.module */ "KoG1");
/* harmony import */ var src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.module */ "fFCB");
/* harmony import */ var src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.module */ "S8DX");
/* harmony import */ var _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bookcourse/bookcourse.module */ "F+nL");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class CoursePageModule {
}
CoursePageModule.ɵfac = function CoursePageModule_Factory(t) { return new (t || CoursePageModule)(); };
CoursePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CoursePageModule });
CoursePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoursePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__["CalendarPageModule"],
            src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__["NewLoginPageModule"],
            src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_7__["VerifyPageModule"],
            _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_9__["BookcoursePageModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CoursePageModule, { declarations: [_course_page__WEBPACK_IMPORTED_MODULE_4__["CoursePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoursePageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__["CalendarPageModule"],
        src_app_pages_auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_8__["NewLoginPageModule"],
        src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_7__["VerifyPageModule"],
        _bookcourse_bookcourse_module__WEBPACK_IMPORTED_MODULE_9__["BookcoursePageModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"]] }); })();


/***/ }),

/***/ "MIHS":
/*!*******************************************************************!*\
  !*** ./src/app/pages/location/course/detailcourse/course.page.ts ***!
  \*******************************************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/corso.model */ "F/re");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/location.model */ "V6dt");
/* harmony import */ var _calendar_calendar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.page */ "YrHa");
/* harmony import */ var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/library/services/docstructure.service */ "FYk8");
/* harmony import */ var src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/auth/new-login/new-login.page */ "uVj7");
/* harmony import */ var src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/auth/verify/verify.page */ "9F3y");
/* harmony import */ var _bookcourse_bookcourse_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bookcourse/bookcourse.page */ "KznV");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_pages_history_historycourse_allegatilist_allegatilist_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/history/historycourse/allegatilist/allegatilist.page */ "DpLK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/settimana-block/settimana-block.component */ "GYAn");
/* harmony import */ var _shared_pipes_tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipes/tipo-corso.pipe */ "KU5w");
/* harmony import */ var _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/pipes/target-sesso.pipe */ "ukHt");





















function CoursePage_ion_fab_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-fab", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-fab-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Prova");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CoursePage_ion_card_content_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-card-content", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx_r1.myCorso.getFullProgrammaHTML(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
} }
function CoursePage_ion_label_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r2.myCorso.NUMEROLEZIONI, " ", ctx_r2.myCorso.NUMEROLEZIONI > 1 ? "Incontri " : "Incontro ", " ");
} }
function CoursePage_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" da ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 2, ctx_r3.myCorso.DATAINIZIO, "EEEE dd/MM/yyyy"), " a ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 5, ctx_r3.myCorso.DATAFINE, "EEEE dd/MM/yyyy"), " ");
} }
function CoursePage_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Termina ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r4.myCorso.DATAFINE, "EEEE dd/MM/yyyy"), " ");
} }
function CoursePage_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Concluso ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r5.myCorso.DATAFINE, "EEEE dd/MM/yyyy"), " ");
} }
function CoursePage_ion_item_group_57_ion_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-text", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Iscrizione aperte da");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r13.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 2, ctx_r13.myCorso.ISCRIZIONEDAL, "EEEE dd/MM/yyyy hh:mm"));
} }
function CoursePage_ion_item_group_57_ion_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-text", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ion-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Chiusura Iscrizioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r14.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 2, ctx_r14.myCorso.ISCRIZIONEAL, "EEEE dd/MM/yyyy hh:mm"));
} }
function CoursePage_ion_item_group_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item-divider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Iscrizioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CoursePage_ion_item_group_57_ion_item_5_Template, 10, 5, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, CoursePage_ion_item_group_57_ion_item_6_Template, 10, 5, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.myCorso == null ? null : ctx_r6.myCorso.ISCRIZIONEDAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.myCorso == null ? null : ctx_r6.myCorso.ISCRIZIONEAL);
} }
function CoursePage_ion_item_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "targetSesso");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r7.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, ctx_r7.myCorso.TARGETSESSO));
} }
function CoursePage_ion_item_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r8.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r8.myLocation == null ? null : ctx_r8.myLocation.COMUNE);
} }
function CoursePage_ion_item_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r9.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r9.myLocation == null ? null : ctx_r9.myLocation.INDIRIZZO, " ");
} }
function CoursePage_ion_item_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx_r10.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r10.myLocation == null ? null : ctx_r10.myLocation.TELEFONO);
} }
function CoursePage_ion_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CoursePage_ion_button_81_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r15.onClickIscrizione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Iscriviti adesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CoursePage_ion_text_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Contatta la struttura per iscriverti al corso");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class CoursePage {
    constructor(startService, actRouter, navCtrl, mdlController, docStructureService, loadingController, toastController) {
        this.startService = startService;
        this.actRouter = actRouter;
        this.navCtrl = navCtrl;
        this.mdlController = mdlController;
        this.docStructureService = docStructureService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.myCorso = new src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_0__["Corso"]();
        this.myLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__["Location"]();
        this.iconColor = 'primary';
        this.userLogged = false;
        this.enableIscrizioni = false;
        //Ascolto cambiamenti dell'Area per l'abilitazione delle iscrizioni
        this.onListenSelectedArea();
        //Ascolto cambiamento Utente
        this.onListenSelectedUser();
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
     * Controllo cambio Utente
     */
    onListenSelectedUser() {
        //Controllo se l'utente è loggato
        this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
            this.userLogged = element;
        });
        //Recupero il documento utente
        this.subUser = this.startService.utente.subscribe(elUser => {
            this.docUser = elUser;
        });
    }
    ngOnInit() {
        //SEMBRA NON FUNZIONARE CORRETTAMENTE
        this.isDesktop = this.startService.isDesktop;
        //IMPOSTO DESKTOP FALSE
        this.isDesktop = false;
        let idCorso = '';
        this.actRouter.paramMap.subscribe(param => {
            if (param.has('courseId')) {
                //ID Corso
                idCorso = param.get('courseId');
                //creo il loading
                this.loadingController.create({
                    spinner: "circular",
                    message: 'Caricamento',
                    backdropDismiss: true
                })
                    .then(elLoading => {
                    elLoading.present();
                    //faccio la richiesta
                    this.startService.newRequestCorsoById(idCorso)
                        .then((corso) => {
                        if (corso) {
                            //se ho trovato un corso, lo prendo
                            this.myCorso = corso;
                            //ora richiedo la location
                            this.requestLocationById(this.myCorso.IDLOCATION);
                        }
                        else {
                            elLoading.dismiss();
                            this.showMessage('Non ho trovato nessun corso');
                        }
                    })
                        .catch(error => {
                        elLoading.dismiss();
                        this.showMessage('Errore di connessione');
                        console.log(error);
                    });
                });
            }
            else {
                this.navCtrl.navigateRoot(['/']);
            }
        });
    }
    ngOnDestroy() {
        if (this.subMyCorso) {
            this.subMyCorso.unsubscribe();
        }
        if (this.subUserLogged) {
            this.subUserLogged.unsubscribe();
        }
        if (this.listenSelectedArea) {
            this.listenSelectedArea.unsubscribe();
        }
    }
    requestLocationById(idLocation) {
        //preparo il filtro
        let filterLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_4__["Location"](true);
        filterLocation.ID = idLocation;
        //faccio la richiesta
        this.docStructureService.requestNew(filterLocation).then(elLocation => {
            this.loadingController.dismiss();
            if (elLocation && elLocation != []) {
                //se ho trovato una location me la salvo
                this.myLocation = elLocation[0];
            }
            else {
                this.showMessage('Non ho trovato la location');
            }
        }).catch(error => {
            this.loadingController.dismiss();
            this.showMessage('Errore di connessione');
        });
    }
    /* ****** CALENDAR ******** */
    onClickCardCalendar() {
        /* Apro in modale il calendario */
        this.mdlController
            .create({
            component: _calendar_calendar_page__WEBPACK_IMPORTED_MODULE_5__["CalendarPage"],
            componentProps: {
                'myCorso': this.myCorso
            }
        })
            .then(formModal => {
            formModal.present();
        });
    }
    /**
     * Click sul pulsante Allegati
     */
    onClickAllegati() {
        this.mdlController.create({
            component: src_app_pages_history_historycourse_allegatilist_allegatilist_page__WEBPACK_IMPORTED_MODULE_11__["AllegatilistPage"],
            componentProps: {
                'myCorso': this.myCorso
            }
        })
            .then(elModal => {
            elModal.present();
        });
    }
    /**
    * Evento Click sul pulsante di Iscrizione
    */
    onClickIscrizione() {
        if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
            //Non solo loggato, devo loggarmi
            if (!this.userLogged) {
                //Prima di aprire la pagina di login
                //impostare nel servizio Start forceIdArea = 
                this.startService.setIdAreaForcedForLogin();
                //Ora preparo e creo la pagina di Login
                this.mdlController.create({
                    component: src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_7__["NewLoginPage"]
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
                            component: src_app_pages_auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
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
                            component: _bookcourse_bookcourse_page__WEBPACK_IMPORTED_MODULE_9__["BookcoursePage"],
                            componentProps: {
                                params: this.myCorso
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
    /**
     * Chiama il servizio passandogli l'id dell'oggetto corso,
     * e restituisce la stringa dell'icona
     * @param corso l'oggetto corso per cui si richiede l'icona
     */
    getIcon(corso) {
        return this.startService.getSportIcon(corso.IDSPORT);
    }
    /**
     * Indica se mostrare o no il Bollino Prova
     * @returns TRUE/FALSE
     */
    showFabProva() {
        let show = false;
        if (this.myCorso && this.myCorso.TIPO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_10__["TipoCorso"].prova) {
            show = true;
        }
        return show;
    }
    /**
    * Torna l'eventuale classe speciale da applicare
    */
    getClassHeader() {
        let myClass = 'title';
        if (this.myCorso) {
            if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
                myClass = 'special';
            }
        }
        return myClass;
    }
    /**
     * Colore dipendente dall'iscrizione
     * @returns Colore da applicare all'item che forma la testata
     */
    getColorHeader() {
        let myClass = 'light';
        if (this.myCorso) {
            if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
                myClass = 'success';
            }
        }
        return myClass;
    }
    /**
     * Indica se mostrare il pulsante delle Iscrizioni
     */
    showIscrizioniButton() {
        let show = false;
        if (this.myCorso) {
            if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
                show = true;
            }
        }
        return show;
    }
    /**
     * Mostra un messaggio a video
     * @param messaggio Messaggio
     */
    showMessage(messaggio) {
        this.toastController.create({
            message: messaggio,
            duration: 3000
        });
    }
}
CoursePage.ɵfac = function CoursePage_Factory(t) { return new (t || CoursePage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_6__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"])); };
CoursePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: CoursePage, selectors: [["app-course"]], decls: 83, vars: 33, consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["slot", "end"], [1, "ion-no-padding"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], ["button", "false", "lines", "none", 3, "color"], ["slot", "start", 1, "icon-sport"], [3, "innerHTML"], [1, "ion-text-wrap"], ["class", "ion-padding-horizontal", "style", "display: flex", 4, "ngIf"], [1, "links"], ["expand", "block", "fill", "solid", "color", "light", 3, "click"], ["name", "calendar", "slot", "start"], ["slot", "start", "name", "document-attach-outline"], ["color", "light"], ["slot", "end", 4, "ngIf"], ["button", "false", "lines", "none"], [4, "ngIf"], ["size", "6", "size-sm", "6"], ["size", "small", "color", "primary", "expand", "block", "fill", "outline"], ["name", "time", "slot", "start"], ["name", "infinite", "slot", "start"], [3, "listDays"], ["name", "stats-chart-outline", "slot", "start", 3, "color"], ["name", "bookmark-outline", "slot", "start", 3, "color"], ["lines", "none", 4, "ngIf"], ["color", "success", "fill", "solid", "expand", "block", 3, "click", 4, "ngIf"], ["color", "danger", "class", "ion-text-center", 4, "ngIf"], ["vertical", "top", "horizontal", "end"], ["color", "danger"], [1, "ion-padding-horizontal", 2, "display", "flex"], [1, "num-lezioni"], ["slot", "start", "name", "timer-outline", 3, "color"], ["color", "secondary"], ["slot", "start", "name", "stopwatch-outline", 3, "color"], ["lines", "none"], ["name", "transgender-outline", "slot", "start", 3, "color"], ["name", "home-outline", "slot", "start", 3, "color"], ["name", "navigate-outline", "slot", "start", 3, "color"], ["name", "call-outline", "slot", "start", 3, "color"], ["color", "success", "fill", "solid", "expand", "block", 3, "click"], ["color", "danger", 1, "ion-text-center"]], template: function CoursePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "tipoCorso");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-card-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, CoursePage_ion_fab_13_Template, 3, 0, "ion-fab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, CoursePage_ion_card_content_22_Template, 3, 1, "ion-card-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CoursePage_Template_ion_button_click_26_listener() { return ctx.onClickCardCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " Calendario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CoursePage_Template_ion_button_click_30_listener() { return ctx.onClickAllegati(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, " Allegati ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "ion-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "ion-item-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "Quando");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, CoursePage_ion_label_39_Template, 3, 2, "ion-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "ion-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, CoursePage_p_42_Template, 4, 8, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, CoursePage_p_43_Template, 3, 4, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, CoursePage_p_44_Template, 3, 4, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "ion-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "ion-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](56, "app-settimana-block", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, CoursePage_ion_item_group_57_Template, 7, 2, "ion-item-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "ion-item-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "Rivolto a");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](64, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, CoursePage_ion_item_71_Template, 5, 4, "ion-item", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "ion-item-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, "Dove");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, CoursePage_ion_item_77_Template, 4, 2, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](78, CoursePage_ion_item_78_Template, 4, 2, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, CoursePage_ion_item_79_Template, 4, 2, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, CoursePage_ion_button_81_Template, 2, 0, "ion-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](82, CoursePage_ion_text_82_Template, 3, 0, "ion-text", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 28, ctx.myCorso.TIPO));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.getClassHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showFabProva());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx.getColorHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx.getIcon(ctx.myCorso), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.myCorso.DENOMINAZIONE);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.myCorso["_DENOMINAZIONE_Sport"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso == null ? null : ctx.myCorso.existProgrammaCorso());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso.NUMEROLEZIONI);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "during");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](51, 30, ctx.myCorso.ORAINIZIO, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx.myCorso.ORELEZIONE, " ", ctx.myCorso.ORELEZIONE > 1 ? "Ore" : "Ora", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("listDays", ctx.myCorso._SETTIMANA);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.myCorso == null ? null : ctx.myCorso.ISCRIZIONEDAL) || (ctx.myCorso == null ? null : ctx.myCorso.ISCRIZIONEAL));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.myCorso["_DENOMINAZIONE_Livello"] ? ctx.myCorso["_DENOMINAZIONE_Livello"] : "Tutti i Livelli");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.myCorso["_DESCTOOLTIP_CategoriaEta"] ? ctx.myCorso["_DESCTOOLTIP_CategoriaEta"] : "Per tutte le et\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myCorso.TARGETSESSO);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myLocation == null ? null : ctx.myLocation.COMUNE);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myLocation == null ? null : ctx.myLocation.INDIRIZZO);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.myLocation == null ? null : ctx.myLocation.TELEFONO);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showIscrizioniButton());
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.showIscrizioniButton());
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemDivider"], _shared_components_settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_14__["SettimanaBlockComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"]], pipes: [_shared_pipes_tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_15__["TipoCorsoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_16__["TargetSessoPipe"]], styles: [".num-lezioni[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  color: var(--ion-color-dark);\n  padding-right: 15px;\n  font-style: oblique;\n}\n\n.icon-sport[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\nion-card.title[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n  margin-bottom: 0px;\n}\n\nion-card.title[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nion-card.special[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success);\n  margin-bottom: 0px;\n}\n\nion-card.special[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.links[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvdXJzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0k7RUFDSSxrQkFBQTtBQURSOztBQUtBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtJO0VBQ0ksa0JBQUE7QUFIUjs7QUFRSTtFQUNJLGdCQUFBO0FBTFIiLCJmaWxlIjoiY291cnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW0tbGV6aW9uaSB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5cclxuLmljb24tc3BvcnR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi8vY2FyZCB0aXRvbG9cclxuaW9uLWNhcmQudGl0bGV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgLy9kZXNjcml6aW9uZSBjb3Jzb1xyXG4gICAgaW9uLWNhcmQtY29udGVudCBzcGFue1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQuc3BlY2lhbHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuICAgIC8vZGVzY3JpemlvbmUgY29yc29cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQgc3BhbntcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5rc3tcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "mVnF":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/location/course/detailcourse/course-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageRoutingModule", function() { return CoursePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.page */ "MIHS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _course_page__WEBPACK_IMPORTED_MODULE_1__["CoursePage"]
    },
];
class CoursePageRoutingModule {
}
CoursePageRoutingModule.ɵfac = function CoursePageRoutingModule_Factory(t) { return new (t || CoursePageRoutingModule)(); };
CoursePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoursePageRoutingModule });
CoursePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoursePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-location-course-detailcourse-course-module-es2015.js.map