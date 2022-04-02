(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"], {
    /***/
    "Fdjd":
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/psw-recovery/psw-recovery.module.ts ***!
      \****************************************************************/

    /*! exports provided: PswRecoveryPageModule */

    /***/
    function Fdjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PswRecoveryPageModule", function () {
        return PswRecoveryPageModule;
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


      var _psw_recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./psw-recovery-routing.module */
      "ctpV");
      /* harmony import */


      var _psw_recovery_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./psw-recovery.page */
      "ZcnS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PswRecoveryPageModule = function PswRecoveryPageModule() {
        _classCallCheck(this, PswRecoveryPageModule);
      };

      PswRecoveryPageModule.ɵfac = function PswRecoveryPageModule_Factory(t) {
        return new (t || PswRecoveryPageModule)();
      };

      PswRecoveryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: PswRecoveryPageModule
      });
      PswRecoveryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _psw_recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["PswRecoveryPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PswRecoveryPageModule, {
          declarations: [_psw_recovery_page__WEBPACK_IMPORTED_MODULE_4__["PswRecoveryPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _psw_recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["PswRecoveryPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_psw_recovery_page__WEBPACK_IMPORTED_MODULE_4__["PswRecoveryPage"]]
        });
      })();
      /***/

    },

    /***/
    "S8DX":
    /*!**********************************************************!*\
      !*** ./src/app/pages/auth/new-login/new-login.module.ts ***!
      \**********************************************************/

    /*! exports provided: NewLoginPageModule */

    /***/
    function S8DX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewLoginPageModule", function () {
        return NewLoginPageModule;
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


      var _new_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-login-routing.module */
      "vaGj");
      /* harmony import */


      var _new_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new-login.page */
      "uVj7");
      /* harmony import */


      var _psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../psw-recovery/psw-recovery.module */
      "Fdjd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewLoginPageModule = function NewLoginPageModule() {
        _classCallCheck(this, NewLoginPageModule);
      };

      NewLoginPageModule.ɵfac = function NewLoginPageModule_Factory(t) {
        return new (t || NewLoginPageModule)();
      };

      NewLoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: NewLoginPageModule
      });
      NewLoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _new_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewLoginPageRoutingModule"], _psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_5__["PswRecoveryPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NewLoginPageModule, {
          declarations: [_new_login_page__WEBPACK_IMPORTED_MODULE_4__["NewLoginPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _new_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewLoginPageRoutingModule"], _psw_recovery_psw_recovery_module__WEBPACK_IMPORTED_MODULE_5__["PswRecoveryPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_new_login_page__WEBPACK_IMPORTED_MODULE_4__["NewLoginPage"]]
        });
      })();
      /***/

    },

    /***/
    "ZcnS":
    /*!**************************************************************!*\
      !*** ./src/app/pages/auth/psw-recovery/psw-recovery.page.ts ***!
      \**************************************************************/

    /*! exports provided: PswRecoveryPage */

    /***/
    function ZcnS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PswRecoveryPage", function () {
        return PswRecoveryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/accountregistration.model */
      "sTQd");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var src_app_library_services_crypto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/library/services/crypto.service */
      "1pu4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["c1"];
      var _c1 = ["c2"];
      var _c2 = ["c3"];
      var _c3 = ["c4"];
      var _c4 = ["c5"];

      function PswRecoveryPage_div_10_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Indica una email o un numero cellulare utilizzato nella registrazione account, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " e ti invieremo un pincode di recovery password");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function PswRecoveryPage_div_10_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Indica una email utilizzata nella registrazione account, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " e ti invieremo un pincode di recovery password");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function PswRecoveryPage_div_10_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Indica un numero cellulare utilizzato nella registrazione account, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " e ti invieremo un pincode di recovery password");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function PswRecoveryPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PswRecoveryPage_div_10_Template_ion_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r12.onClickInviaCodice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Invia Codice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, PswRecoveryPage_div_10_span_13_Template, 4, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, PswRecoveryPage_div_10_span_14_Template, 4, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, PswRecoveryPage_div_10_span_15_Template, 4, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-text", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "(contatta la struttura se non ricordi queste informazioni)");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function PswRecoveryPage_div_10_Template_ion_input_ionInput_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r14.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function PswRecoveryPage_div_10_Template_ion_input_ionInput_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r15.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ion-input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function PswRecoveryPage_div_10_Template_ion_input_ionInput_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r16.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ion-input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function PswRecoveryPage_div_10_Template_ion_input_ionInput_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r17.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "ion-input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function PswRecoveryPage_div_10_Template_ion_input_ionInput_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r18.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.formContact);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", ctx_r0.getPlaceHolder());

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.formContact.valid)("ngClass", ctx_r0.isDesktop ? "btn-send-code desktop" : "btn-send-code");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.canUseMail && ctx_r0.canUseMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.canUseMail && !ctx_r0.canUseMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.canUseMail && ctx_r0.canUseMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.formVerify);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.isDesktop ? "form-verifica desktop" : "form-verifica");
        }
      }

      function PswRecoveryPage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Inserisci la nuova password per l'account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.descrUtente, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.formPsw);
        }
      }

      function PswRecoveryPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PswRecoveryPage_div_13_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r19.onClickVerifica();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Verifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r2.formVerify.valid);
        }
      }

      function PswRecoveryPage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PswRecoveryPage_div_14_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r21.onClickCambia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cambia Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r3.formPsw.valid);
        }
      }

      var PswRecoveryPage = /*#__PURE__*/function () {
        //#endregion
        function PswRecoveryPage(modalController, startService, loadingController, toastController, cryptoService) {
          _classCallCheck(this, PswRecoveryPage);

          this.modalController = modalController;
          this.startService = startService;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.cryptoService = cryptoService;
          this.canUseMail = false;
          this.canUseMobile = false; //questo è per usare l'enum PageState nell'html

          this.PageState = PageState; //Lo stato della pagina (inizialmente Richiesta codice)

          this.stato = PageState.richiestaCodice; //oggetti per richiedere e verificare i codici

          this.docRichiestaCodici = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_4__["AccountRequestCode"]();
          this.docVerifica = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_4__["AccountVerifyCode"](); //l'id dell'utente che vuole cambiare la psw

          this.idUtente = ''; //la weblogin dell'utente

          this.descrUtente = '';
        }

        _createClass(PswRecoveryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //recupero la startconfig
            this.startConfig = this.startService.actualStartConfig;
            this.canUseMail = this.startConfig.gruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoVerificaAccount"].noverifica || this.startConfig.gruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoVerificaAccount"].verificaemail || this.startConfig.gruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoVerificaAccount"].verificaemailsms;
            this.canUseMobile = this.startConfig.gruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoVerificaAccount"].verificaemailsms || this.startConfig.gruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoVerificaAccount"].verificasms; //SETUP INIZIALE      
            //creo i formGroups

            this.createVerifyForm();
            this.createContactForm();
            this.createPswForm();
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          } //ritorna true se siamo su Browser desktop

        }, {
          key: "isDesktop",
          get: function get() {
            return this.startService.isDesktop;
          }
          /**
           * Crea un placeHolder per ion-input
           */

        }, {
          key: "getPlaceHolder",
          value: function getPlaceHolder() {
            var placeH = '';

            if (this.canUseMail && this.canUseMobile) {
              placeH = 'Email o Cellulare';
            } else if (this.canUseMail && !this.canUseMobile) {
              placeH = 'Email';
            } else if (!this.canUseMail && this.canUseMobile) {
              placeH = 'Cellulare';
            }

            return placeH;
          } //creazione del ReactiveForm di inserimento del codice

        }, {
          key: "createVerifyForm",
          value: function createVerifyForm() {
            this.formVerify = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              c1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
              }),
              c2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
              }),
              c3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
              }),
              c4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
              }),
              c5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
              })
            });
          } //creazione del ReactiveForm di inserimento del telefono/mail

        }, {
          key: "createContactForm",
          value: function createContactForm() {
            var myValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]; //posso usare sia mail che mobile

            if (this.canUseMail && this.canUseMobile) {//non serve alcun validator extra
            } //posso usare solo mail
            else if (this.canUseMail) {
                myValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email);
              } //posso usare solo mobile
              else if (this.canUseMobile) {
                  myValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/));
                }

            this.formContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              contatto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: myValidators
              })
            });
          } //creazione del form di inserimento nuova psw

        }, {
          key: "createPswForm",
          value: function createPswForm() {
            this.formPsw = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              psw: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
              }),
              confirmPsw: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
              })
            }, this.pswValidator);
          }
          /**
           * funzione di controllo uguaglianza delle psw, per la validazione del PswFormGroup
           * @param c
           */

        }, {
          key: "pswValidator",
          value: function pswValidator(c) {
            if (c.get('confirmPsw').value == c.get('psw').value) {
              return;
            } else {
              return {
                invalid: true
              };
            }
          }
          /**
           * procedura che sposta il focus sulla casella di input successiva
           * @param evento parametri $event dell'eveno "ion-input", necessari a identificare
           * in quale casella c'è stato l'input
           */

        }, {
          key: "changeFocus",
          value: function changeFocus(evento) {
            var id = evento['target']['id'];

            switch (id) {
              case '1':
                this.c2.setFocus();
                break;

              case '2':
                this.c3.setFocus();
                break;

              case '3':
                this.c4.setFocus();
                break;

              case '4':
                this.c5.setFocus();
                break;

              default:
                break;
            }
          }
          /**
           * Evento click per la richiesta da effettuare al server dei codici
           */

        }, {
          key: "onClickInviaCodice",
          value: function onClickInviaCodice() {
            this.sendServerRichiestaCodici();
          }
          /**
           * evento che si attiva quando l'utente clicca "verifica" dopo aver inserito il codice
           * Preparo il documento docVerifica che sarà usato nell'invio dei codici
           */

        }, {
          key: "onClickVerifica",
          value: function onClickVerifica() {
            var prosegui = true;
            var message = ""; //Per poter proseguire devo avere il documento di Richiesta codice con IDREFER popolato

            if (this.docRichiestaCodici && this.docRichiestaCodici.IDREFER) {
              if (this.docRichiestaCodici.IDREFER.length != 0) {
                //Preparo il documento di Verifica da inviare al server
                this.docVerifica = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_4__["AccountVerifyCode"]();
                this.docVerifica.IDREFER = this.docRichiestaCodici.IDREFER;
                this.docVerifica.IDAREA = this.docRichiestaCodici.IDAREA; //Invio il pincode ricevuto in mail

                if (this.docRichiestaCodici.REQUESTEMAILCODE) {
                  //mi ha richiesto il codice tramite mail
                  this.docVerifica.EMAILPINCODE = this.getInputPin();
                } else if (this.docRichiestaCodici.REQUESTSMSCODE) {
                  //mi ha richiesto il codice via sms
                  this.docVerifica.SMSPINCODE = this.getInputPin();
                } else {
                  //ci sono stati casini
                  prosegui = false;
                  message = "C'è stato un problema, richiedi un nuovo codice";
                }
              } else {
                //ci sono stati casini
                prosegui = false;
                message = "C'è stato un problema, richiedi un nuovo codice";
              }
            } else {
              //ci sono stati casini
              prosegui = false;
              message = "C'è stato un problema, richiedi un nuovo codice";
            } //Sembra corretto, invio il pincode al server


            if (prosegui) {
              //faccio la richiesta al server
              //il metodo invia il documento docVerifica
              this.sendServerVerificaCodici();
            } else {
              //Ci sono errori
              this.showMessage(message);
            }
          }
          /**
           * evento attivato quando l'utente conferma il cambiamento della password
           */

        }, {
          key: "onClickCambia",
          value: function onClickCambia() {
            //ora, devo crearmi il documento utente, e inserire il token nel documento docrichiesta
            var sendDocRichiestaCodici = this.docRichiestaCodici;
            var sendDocUtente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_6__["Utente"](); //variabili necessarie per il giochino delle psw

            var pwd = '';
            var pwdToSend = '';
            var splitPwd = [];
            var useCrypter = false; //per ora, useCrypter non va, quindi è false
            //Metto nell'ID l'utente

            sendDocUtente.ID = this.idUtente; //recupero la psw

            pwd = this.formPsw.value.psw;

            if (useCrypter) {
              pwdToSend = this.cryptoService.getBCrypt(pwd);
            } else {
              pwdToSend = pwd;
            } //ora splitto la psw in due


            splitPwd = this.cryptoService.mySplitPassword(pwdToSend);

            if (splitPwd) {
              //la prima parte va nel token
              sendDocRichiestaCodici.TOKEN = splitPwd[0];

              if (useCrypter) {
                //La seconda parte dentro a SHAPASSWORD
                //nel caso di criptata
                sendDocUtente.SHAPASSWORD = splitPwd[1];
                sendDocUtente.INPUTPASSWORD = '';
              } else {
                sendDocUtente.INPUTPASSWORD = splitPwd[1];
                sendDocUtente.SHAPASSWORD = '';
              } //ora che è tutto pronto, posso fare la richiesta di cambio psw al server


              this.sendServerFinalize(sendDocUtente, sendDocRichiestaCodici);
            } else {
              this.showMessage('Password non utilizzabile');
            }
          }
          /**
           * qui richiedo al server l'invio di un codice di verifica
           */

        }, {
          key: "sendServerRichiestaCodici",
          value: function sendServerRichiestaCodici() {
            var _this = this;

            //creo il loading
            this.loadingController.create({
              message: 'Invio codice in corso...',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (elLoading) {
              elLoading.present();
              var contatto; //recupero il contatto inserito dall'utente

              contatto = _this.formContact.value.contatto; //devo capire se l'utente ha inserito una mail o un telefono (se è presente @, presumo sia una mail) e valorizzare
              //l'oggetto "docRichiestaCodici" di conseguenza

              if (contatto.includes('@')) {
                //è una mail
                _this.docRichiestaCodici.EMAIL = contatto;
                _this.docRichiestaCodici.TELEPHONE = "";
                _this.docRichiestaCodici.REQUESTEMAILCODE = true;
                _this.docRichiestaCodici.REQUESTSMSCODE = false;
              } else {
                //è un telefono
                _this.docRichiestaCodici.TELEPHONE = contatto;
                _this.docRichiestaCodici.EMAIL = "";
                _this.docRichiestaCodici.REQUESTSMSCODE = true;
                _this.docRichiestaCodici.REQUESTEMAILCODE = false;
              } //inserisco nell'oggetto le altre info necessarie


              _this.docRichiestaCodici.USE = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["RequestPincodeUse"].forRecovery;
              _this.docRichiestaCodici.IDAREA = _this.startService.areaSelectedValue.ID; //ora che l'oggetto è pronto, faccio la richiesta

              _this.startService.recoverySendCodici(_this.docRichiestaCodici).then(function (risposta) {
                //quando arriva la risposta chiudo il loading
                elLoading.dismiss();

                if (risposta.result) {
                  //se è andato tutto bene
                  _this.showMessage(risposta.message); //Imposto IDRefer che devo reinviare quando chiedo di verificare il codice


                  _this.docRichiestaCodici.IDREFER = risposta.idRefer;
                } else {
                  //se la richiesta è andata a buon fine, ma il server non è riuscito ad inviare il messaggio, presumo che 
                  //l'utente non esista
                  _this.showMessage(risposta.message);

                  _this.docRichiestaCodici.IDREFER = "";
                  console.log(risposta.message);
                }
              })["catch"](function (error) {
                //Se la richiesta non è andata a buon fine, dismetto il loading, lo stampo in console e scrivo all'utente "errore di connessione"
                elLoading.dismiss();
                console.log(error);

                _this.showMessage("Errore di connessione");

                _this.docRichiestaCodici.IDREFER = "";
              });
            });
          }
          /**
           * qui richiedo al server la verifica del codice (in risposta, riceverò l'id utente)
           *     //alla fine, se tutto è andato bene, passo alla pagina successiva
            //this.stato=PageState.cambioPsw;
           */

        }, {
          key: "sendServerVerificaCodici",
          value: function sendServerVerificaCodici() {
            var _this2 = this;

            if (this.docVerifica) {
              //mostro il loading
              this.loadingController.create({
                message: "Verifica in corso...",
                spinner: "circular",
                backdropDismiss: true
              }).then(function (elLoading) {
                //Mostro il loding
                elLoading.present(); //ora faccio la richiesta

                _this2.startService.recoveryVerifyCodici(_this2.docVerifica).then(function (risposta) {
                  //Il server ha risposto, nascondo il loading
                  elLoading.dismiss();

                  if (risposta.result) {
                    //La verifica è andata a buon fine, recupero l'utente su cui bisogna cambiare la psw, poi posso procedere
                    _this2.idUtente = risposta.idRefer;
                    _this2.descrUtente = risposta.descrRefer; //Cambio lo stato della pagina

                    _this2.stato = PageState.cambioPsw;

                    _this2.showMessage('Codice di verifica valido');
                  } else {
                    //Nessun utente è stato trovato
                    _this2.idUtente = ''; //Altrimenti, se il server ha risposto, ma ha risposto negativamente, presumo che il codice sia errato

                    _this2.showMessage('Codice di verifica non valido');
                  }
                })["catch"](function (error) {
                  //se la richiesta non è andata a buon fine
                  //Nascondo il loading
                  elLoading.dismiss(); //Nessun utente è stato trovato

                  _this2.idUtente = '';
                  console.log(error);

                  _this2.showMessage('Errore di connessione');
                });
              });
            }
          }
          /**
           * qui faccio la richiesta effettiva di cambio password
           */

        }, {
          key: "sendServerFinalize",
          value: function sendServerFinalize(docUtente, docRichiestaCodici) {
            var _this3 = this;

            //creo il loading
            this.loadingController.create({
              message: 'Cambio password',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (elLoading) {
              //Mostro il loading
              elLoading.present(); //ora faccio la richiesta

              _this3.startService.recoveryFinalize(docUtente, docRichiestaCodici).then(function (risposta) {
                //Chiudo il loading
                elLoading.dismiss();

                if (risposta.result) {
                  //la modifica della psw è andata a buon fine, posso dire ok, e chiudere la videata
                  _this3.showMessage("Modifica della password confermata"); //Chiudo la videata modale


                  _this3.modalController.dismiss();
                } else {
                  //la richiesta non è andata in errore, ma la modifica non è riuscita... stampo un errore generico
                  _this3.showMessage(risposta.message);

                  console.log(risposta.message);
                }
              })["catch"](function (error) {
                //la richiesta è andata in errore
                //Chiudo il loading
                elLoading.dismiss();
                console.log(error);

                _this3.showMessage('Errore di connessione');
              });
            });
          }
          /**
          * Procedura che visualizza un toast con il messaggio passato
          * @param myMessage Il messaggio da visualizzare
          */

        }, {
          key: "showMessage",
          value: function showMessage(myMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: myMessage,
                        duration: 3000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * restituisce il pin inserito nella form
           */

        }, {
          key: "getInputPin",
          value: function getInputPin() {
            return this.formVerify.value.c1 + this.formVerify.value.c2 + this.formVerify.value.c3 + this.formVerify.value.c4 + this.formVerify.value.c5;
          }
        }]);

        return PswRecoveryPage;
      }();

      PswRecoveryPage.ɵfac = function PswRecoveryPage_Factory(t) {
        return new (t || PswRecoveryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_library_services_crypto_service__WEBPACK_IMPORTED_MODULE_7__["CryptoService"]));
      };

      PswRecoveryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: PswRecoveryPage,
        selectors: [["app-psw-recovery"]],
        viewQuery: function PswRecoveryPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.c1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.c2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.c3 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.c4 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.c5 = _t.first);
          }
        },
        decls: 15,
        vars: 6,
        consts: [["color", "primary"], ["slot", "end"], [3, "click"], ["name", "close"], [3, "ngClass"], [3, "src"], ["class", "ion-padding-horizontal ion-text-center", 4, "ngIf"], ["class", "ion-padding div-psw", 4, "ngIf"], [4, "ngIf"], [1, "ion-padding-horizontal", "ion-text-center"], [3, "formGroup"], ["slot", "start", "name", "at-outline"], ["type", "text", "formControlName", "contatto", 3, "placeholder"], ["color", "primary", 3, "disabled", "ngClass", "click"], [1, "ion-no-padding", "div-message"], ["name", "information-circle-outline"], ["color", "danger"], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c1", "id", "1", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c1", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c2", "id", "2", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c2", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c3", "id", "3", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c3", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c4", "id", "4", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c4", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c5", "id", "5", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c5", ""], [1, "ion-padding", "div-psw"], ["color", "primary", "name", "information-circle-outline"], ["slot", "start", "name", "lock-closed-outline"], ["placeholder", "Nuova password", "type", "password", "inputmode", "password", "formControlName", "psw"], ["placeholder", "Conferma Password", "type", "password", "inputmode", "password", "formControlName", "confirmPsw"], ["color", "primary", "expand", "block", 3, "disabled", "click"]],
        template: function PswRecoveryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Recupero password");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PswRecoveryPage_Template_ion_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, PswRecoveryPage_div_10_Template, 34, 9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, PswRecoveryPage_div_11_Template, 15, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, PswRecoveryPage_div_13_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, PswRecoveryPage_div_14_Template, 3, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.isDesktop ? "ion-text-center div-logo desktop" : "ion-text-center div-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.startConfig.getUrlLogo(), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stato == ctx.PageState.richiestaCodice);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stato == ctx.PageState.cambioPsw);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stato == ctx.PageState.richiestaCodice);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stato == ctx.PageState.cambioPsw);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"]],
        styles: ["div.div-logo[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n  margin-bottom: 3vh;\n}\ndiv.div-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 15vh;\n}\ndiv.div-logo.desktop[_ngcontent-%COMP%] {\n  margin-bottom: 0vh;\n}\ndiv.div-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.div-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\ndiv.form-verifica[_ngcontent-%COMP%] {\n  width: 320px;\n  margin: auto;\n  margin-bottom: 8vh;\n  text-align: center;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  background: white;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  display: inline;\n  border-radius: 15px;\n  margin: 2px;\n  border: 3px solid var(--ion-color-primary);\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--ion-color-medium);\n  font-size: 40px;\n}\ndiv.form-verifica.desktop[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\nion-button.btn-send-code[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n}\nion-button.btn-send-code.desktop[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 1vh;\n}\ndiv.ion-padding[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\ndiv.div-psw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHN3LXJlY292ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQU9JO0VBQ0ksa0JBQUE7QUFKUjtBQU1RO0VBQ0ksZUFBQTtBQUpaO0FBU0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQU9JO0VBQ0ksaUJBQUE7QUFMUjtBQU1RO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUpaO0FBU0E7RUFDSSxrQkFBQTtBQU5KO0FBU0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTQTtFQUNJLGVBQUE7QUFOSjtBQVVJO0VBQ0ksa0JBQUE7QUFQUiIsImZpbGUiOiJwc3ctcmVjb3ZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmRpdi1sb2dve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDN2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTV2aDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5kaXYuZGl2LWxvZ28uZGVza3RvcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuXHJcbn1cclxuXHJcbmRpdi5kaXYtbWVzc2FnZSB7XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuZm9ybS12ZXJpZmljYXtcclxuICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGlvbi1zZWdtZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6M3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5mb3JtLXZlcmlmaWNhLmRlc2t0b3B7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYnRuLXNlbmQtY29kZXtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5idG4tc2VuZC1jb2RlLmRlc2t0b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjF2aDtcclxufVxyXG5cclxuZGl2Lmlvbi1wYWRkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDo1dmg7XHJcbn1cclxuXHJcbmRpdi5kaXYtcHN3e1xyXG4gICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      var PageState;

      (function (PageState) {
        PageState[PageState["richiestaCodice"] = 10] = "richiestaCodice";
        PageState[PageState["cambioPsw"] = 20] = "cambioPsw";
      })(PageState || (PageState = {}));
      /***/

    },

    /***/
    "ctpV":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/psw-recovery/psw-recovery-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: PswRecoveryPageRoutingModule */

    /***/
    function ctpV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PswRecoveryPageRoutingModule", function () {
        return PswRecoveryPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _psw_recovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./psw-recovery.page */
      "ZcnS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _psw_recovery_page__WEBPACK_IMPORTED_MODULE_1__["PswRecoveryPage"]
      }];

      var PswRecoveryPageRoutingModule = function PswRecoveryPageRoutingModule() {
        _classCallCheck(this, PswRecoveryPageRoutingModule);
      };

      PswRecoveryPageRoutingModule.ɵfac = function PswRecoveryPageRoutingModule_Factory(t) {
        return new (t || PswRecoveryPageRoutingModule)();
      };

      PswRecoveryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PswRecoveryPageRoutingModule
      });
      PswRecoveryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PswRecoveryPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uVj7":
    /*!********************************************************!*\
      !*** ./src/app/pages/auth/new-login/new-login.page.ts ***!
      \********************************************************/

    /*! exports provided: NewLoginPage */

    /***/
    function uVj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewLoginPage", function () {
        return NewLoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/accountregistration.model */
      "sTQd");
      /* harmony import */


      var src_app_library_services_crypto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/library/services/crypto.service */
      "1pu4");
      /* harmony import */


      var _psw_recovery_psw_recovery_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../psw-recovery/psw-recovery.page */
      "ZcnS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["c1"];
      var _c1 = ["c2"];
      var _c2 = ["c3"];
      var _c3 = ["c4"];
      var _c4 = ["c5"];
      var _c5 = ["c6"];
      var _c6 = ["c7"];
      var _c7 = ["c8"];
      var _c8 = ["c9"];
      var _c9 = ["c10"];

      function NewLoginPage_ion_buttons_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-buttons", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_ion_buttons_2_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r12.backStepRegistration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_11_ion_segment_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-segment-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Registrati ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r14.pageState.REGISTRATION);
        }
      }

      function NewLoginPage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-segment", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function NewLoginPage_div_11_Template_ion_segment_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r15.actualStateSegment = $event;
          })("ionChange", function NewLoginPage_div_11_Template_ion_segment_ionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r17.onSegmentChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-segment-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Accedi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, NewLoginPage_div_11_ion_segment_button_4_Template, 2, 1, "ion-segment-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.actualStateSegment);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r1.pageState.LOGIN);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.registrationInApp);
        }
      }

      function NewLoginPage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_12_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r18.onClickReimpostaPsw();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Aiuto, non ricordo la password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r2.formLogin);
        }
      }

      function NewLoginPage_div_13_ion_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_13_ion_button_9_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r25.openPolicyLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " condizioni di registrazione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_13_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Indica una email valida dove sar\xE0 possibile inviarti le ricevute di prenotazioni, attestati dei corsi ed altri documenti fiscali. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "(in seguito potrai abilitare l'email anche per la ricezione di altro materiale informativo)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_13_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Indica una email valida dove sar\xE0 possibile inviarti le ricevute di prenotazioni, attestati dei corsi ed altri documenti fiscali. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Per effettuare la verifica ti inviamo una email contenente un pincode da inserire nei passaggi succesivi di registrazione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "(in seguito potrai abilitare l'email anche per la ricezione di altro materiale informativo)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_13_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Indica una email valida dove sar\xE0 possibile inviarti i documenti fiscali ed un numero di cellulare per contattarti in caso di problemi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Per effettuare la verifica ti inviamo 2 pincode (email/SMS) da inserire nei passaggi succesivi di registrazione");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_13_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Indica un numero di cellulare dove contattarti in caso di problematiche legate alle prenotazioni della struttura. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Per effettuare la verifica ti inviamo un SMS con un pincode da inserire nei passaggi succesivi di registrazione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "(non sarai mai contattato per promozioni o marketing)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, NewLoginPage_div_13_ion_button_9_Template, 2, 0, "ion-button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, NewLoginPage_div_13_div_10_Template, 10, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, NewLoginPage_div_13_div_11_Template, 12, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, NewLoginPage_div_13_div_12_Template, 10, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NewLoginPage_div_13_div_13_Template, 12, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r3.formContact);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.isPolicyLink());

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.docGruppo.APPTIPOVERIFICA == ctx_r3.tipoVerifica.noverifica);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.docGruppo.APPTIPOVERIFICA == ctx_r3.tipoVerifica.verificaemail);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.docGruppo.APPTIPOVERIFICA == ctx_r3.tipoVerifica.verificaemailsms);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.docGruppo.APPTIPOVERIFICA == ctx_r3.tipoVerifica.verificasms);
        }
      }

      function NewLoginPage_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_14_div_1_Template_ion_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r34.onClickReinviaCodice(ctx_r34.tipoVerifica.verificaemail);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Inserisci il pincode ricevuto tramite email");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-input", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_1_Template_ion_input_ionInput_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r36.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-input", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_1_Template_ion_input_ionInput_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r37.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_1_Template_ion_input_ionInput_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r38.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_1_Template_ion_input_ionInput_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r39.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_1_Template_ion_input_ionInput_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r40.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r27.formVerifyMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r27.isDesktop ? "form-verifica desktop" : "form-verifica");
        }
      }

      function NewLoginPage_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_14_div_2_Template_ion_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r46.onClickReinviaCodice(ctx_r46.tipoVerifica.verificasms);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Inserisci il pincode ricevuto tramite SMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-input", 52, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_2_Template_ion_input_ionInput_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r48.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-input", 54, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_2_Template_ion_input_ionInput_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r49.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-input", 56, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_2_Template_ion_input_ionInput_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r50.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-input", 58, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_2_Template_ion_input_ionInput_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r51.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-input", 60, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function NewLoginPage_div_14_div_2_Template_ion_input_ionInput_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r52.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r28.formVerifyTel);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r28.isDesktop ? "form-verifica desktop" : "form-verifica");
        }
      }

      function NewLoginPage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NewLoginPage_div_14_div_1_Template, 19, 2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NewLoginPage_div_14_div_2_Template, 19, 2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.docGruppo.APPTIPOVERIFICA == ctx_r4.tipoVerifica.verificaemail || ctx_r4.docGruppo.APPTIPOVERIFICA == ctx_r4.tipoVerifica.verificaemailsms);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.docGruppo.APPTIPOVERIFICA == ctx_r4.tipoVerifica.verificasms || ctx_r4.docGruppo.APPTIPOVERIFICA == ctx_r4.tipoVerifica.verificaemailsms);
        }
      }

      function NewLoginPage_div_15_ion_item_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Accetto la ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_15_ion_item_18_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r54.openPolicyLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-checkbox", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ion-icon", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ion-input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "ion-icon", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "ion-input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, NewLoginPage_div_15_ion_item_18_Template, 6, 0, "ion-item", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Voglio ricevere la Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "ion-checkbox", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Dobbiamo richiederti alcune informazioni personali per l'eventuale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " emissione di documenti fiscali ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "(ad esempio in caso di iscrizioni a corsi o prenotazioni della struttura)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r5.formRegister);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.isPolicyLink());
        }
      }

      function NewLoginPage_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h1", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Benvenuto");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h3", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "sei uno dei nostri!");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function NewLoginPage_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_19_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r56.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " ACCEDI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r7.colorButton)("disabled", !ctx_r7.formLogin.valid);
        }
      }

      function NewLoginPage_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_20_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r58.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Avanti");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r8.colorButton)("disabled", !ctx_r8.formContact.valid);
        }
      }

      function NewLoginPage_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_21_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r60.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Verifica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r9.colorButton)("disabled", !ctx_r9.isEnableAvantiOnVerify());
        }
      }

      function NewLoginPage_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_22_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r62.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Registrati ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r10.colorButton)("disabled", !ctx_r10.formRegister.valid);
        }
      }

      function NewLoginPage_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_div_23_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r64.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Inizia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r11.colorButton);
        }
      }

      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Browser;

      var NewLoginPage = /*#__PURE__*/function () {
        //#endregion
        function NewLoginPage(modalCtrl, startService, loadingCtrl, toastCtrl, alertCtrl, cryptoService) {
          var _this4 = this;

          _classCallCheck(this, NewLoginPage);

          this.modalCtrl = modalCtrl;
          this.startService = startService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.cryptoService = cryptoService; //per utilizzare l'enum nell'html

          this.pageState = PageState;
          this.tipoVerifica = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"]; //variabile che indica lo stato della pagina
          //Se posizionato su Login, Register, Verifiy o Welcome

          this.actualStatePage = PageState.LOGIN; //Situazione del Segment (Login o Register)

          this.actualStateSegment = PageState.LOGIN; //Array con gli step possibili in registrazione

          this.stepRegistration = [];
          this.indexStepRegistration = 0; //Documento per la richiesta invio codici al server

          this.docRichiestaCodici = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_7__["AccountRequestCode"](); //Registrazione possibile in app

          this.registrationInApp = false; //Utente

          this.docUtente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_4__["Utente"](); //Verifiche

          this.emailVerificationYES = false;
          this.smsVerificationYES = false;
          this.emailVerificata = ''; //Email verificata

          this.telVerificato = ''; //Numero telefono Verificato

          this.colorButton = 'tertiary'; //Colore dei bottoni di login
          //Stato Pagina registrazione

          this.indexStepRegistration = 0; //Posizionato sulla pagina di login

          this.actualStatePage = PageState.LOGIN; //Segment Option puo' essere solo Login/Registration

          this.actualStateSegment = PageState.LOGIN; //Richiedo lo startConfig

          this.startListen = startService.startConfig.subscribe(function (data) {
            //Memorizzo lo StartConfig
            _this4.startConfig = data; //Nel gruppo è specificato se è possibile effettuare 
            //registrazioni con l'app

            if (_this4.startConfig && _this4.startConfig.gruppo) {
              //Memorizzo il Gruppo con le sue Opzioni
              _this4.docGruppo = _this4.startConfig.gruppo; //Abilitazione / Disabilitazione registrazione in App

              _this4.registrationInApp = _this4.startConfig.gruppo.APPFLAGREGISTRAZIONE; //Creo un Array con gli step di registrazione

              _this4.createArrayStepRegistration(_this4.docGruppo);
            }
          }); //Prelevo l'area selezionata 

          this.docArea = this.startService.areaSelectedValue;
        }

        _createClass(NewLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createLoginForm();
            this.createRegisterForm();
            this.createVerifyForm();
            this.createContactForm();
            this.isDesktop = this.startService.isDesktop;
          }
          /**
           * Titolo da applicare alla videata
           */

        }, {
          key: "getCaptionTitle",
          value: function getCaptionTitle() {
            var strTitle;

            if (this.actualStateSegment == PageState.LOGIN) {
              strTitle = 'Login';
            } else {
              strTitle = 'Nuovo Account';
            }

            return strTitle;
          }
          /**
           * Modifica dello stato del segment
           */

        }, {
          key: "onSegmentChanged",
          value: function onSegmentChanged(ev) {
            //Vuole tornare al login
            if (ev.detail.value == PageState.LOGIN) {
              this.actualStatePage = PageState.LOGIN;
            } else {
              //Lo stato della pagina
              this.actualStatePage = this.stepRegistration[this.indexStepRegistration];
            }
          }
          /**
           * Crea un array con i passaggi disponibili in registrazione
           * a seconda delle richieste del gruppo
           * Se il gruppo non vuole verifiche, si passa subito ai dati
           */

        }, {
          key: "createArrayStepRegistration",
          value: function createArrayStepRegistration(docGruppo) {
            this.stepRegistration = [];

            if (docGruppo.APPFLAGREGISTRAZIONE == true) {
              //Pagina dei contatti Email/SMS
              this.stepRegistration.push(PageState.CONTACT);

              if (docGruppo.APPTIPOVERIFICA !== src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].noverifica) {
                //La pagina di Verifica è necessaria alla registrazione
                this.stepRegistration.push(PageState.VERIFY);
              } //Dati di registrazione


              this.stepRegistration.push(PageState.REGISTRATION); //Fase Finale

              this.stepRegistration.push(PageState.WELCOME);
            }
          }
          /**
           * Effettua l'avanzamento di pagina nello Step Registrazione
           * @param skipVerifica Nel caso fosse la pagina di verifica salta a quella successiva
           */

        }, {
          key: "nextStepRegistration",
          value: function nextStepRegistration() {
            var skipVerifica = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.indexStepRegistration + 1 < this.stepRegistration.length) {
              for (var index = this.indexStepRegistration + 1; index < this.stepRegistration.length; index++) {
                var find = true;
                var element = this.stepRegistration[index];

                if (skipVerifica && element == PageState.VERIFY) {
                  //Fingo di non aver trovato cosi sto dentro
                  find = false;
                }

                if (find) {
                  this.indexStepRegistration = index;
                  this.actualStatePage = element;
                  break;
                }
              }
            }
          }
          /**
           * Torna indietro negli Step di Registrazione
           */

        }, {
          key: "backStepRegistration",
          value: function backStepRegistration() {
            if (this.indexStepRegistration - 1 >= 0) {
              for (var index = this.indexStepRegistration - 1; index >= 0; index--) {
                var element = this.stepRegistration[index];
                this.indexStepRegistration = index;
                this.actualStatePage = element;
                break;
              }
            }
          }
          /**
           * Chiusura della videata
           */

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
          /**
           * Pulsante Avanti o Acced presente nel footer
           */

        }, {
          key: "onClickFooterAvanti",
          value: function onClickFooterAvanti() {
            switch (this.actualStatePage) {
              case PageState.LOGIN:
                //Siamo sul Login e quindi gestisco la fase di login
                this.onClickLogin();
                break;

              case PageState.CONTACT:
                //Siamo sulla pagina dei Contatti e dobbiamo gestirne la fase
                this.onClickAvantiContact();
                break;

              case PageState.VERIFY:
                //Siamo sulla pagina di inserimento codici da verificare
                this.onClickAvantiVerifica();
                break;

              case PageState.REGISTRATION:
                //Siamo nella parte finale della registrazione con i dati 
                //e l'invio dei dati al server
                this.onClickRegistrati();

              default:
                break;
            }
          }
          /**
           * Evento scatenato al click del login
           */

        }, {
          key: "onClickLogin",
          value: function onClickLogin() {
            var _this5 = this;

            if (!this.formLogin.valid) {
              return;
            } else {
              //Apro il loading Controller per verificare
              this.loadingCtrl.create({
                message: 'Controllo credenziali'
              }).then(function (element) {
                //Creo il loading
                element.present(); // Chiamo il Servizio per eseguire l'autorizzazione

                _this5.startService.userLogin(_this5.formLogin.value.username, _this5.formLogin.value.password).then(function (dataResult) {
                  //Chiudo lo Spinner
                  element.dismiss(); // E' Arrivata una risposta NEGATIVA

                  if (!dataResult.result) {
                    _this5.showMessage(dataResult.message);
                  } else {
                    //LOGIN ACCETTATO
                    // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                    _this5.startService.saveStorageUtente(_this5.formLogin.value.username, _this5.formLogin.value.password); //Resetto la form


                    _this5.formLogin.reset(); //Chiudo la modale


                    _this5.closeModal();
                  }
                })["catch"](function (error) {
                  //login non andato a buon fine
                  element.dismiss();
                  console.log(error);

                  _this5.showMessage(error);
                });
              });
            }
          }
          /**
           * evento scatenato quando l'utente clicca su "reimposta password"
           */

        }, {
          key: "onClickReimpostaPsw",
          value: function onClickReimpostaPsw() {
            var _this6 = this;

            this.modalCtrl.create({
              component: _psw_recovery_psw_recovery_page__WEBPACK_IMPORTED_MODULE_9__["PswRecoveryPage"]
            }).then(function (elModal) {
              elModal.present();

              _this6.modalCtrl.dismiss();
            });
          } //#region GESTIONE PAGINA CONTATTI E CODICI

          /*
          L'intera fase di registrazione è gestita con un array this.stepRegistration
          Dentro ci sono i passaggi richiesti (che sono variabili a seconda delle verifiche richieste)
              this.indexStepRegistration è l'indice dell'array su cui siamo posizionati
          this.actualStatePage è lo Stato Attuale (recuperato dall'array)
              */

          /**
           * Click di Avanti sulla pagina con i contatti
           */

        }, {
          key: "onClickAvantiContact",
          value: function onClickAvantiContact() {
            //Ci sono diversi stati da gestire per andare avanti da questa pagina
            //La variabile docGruppo.APPTIPOVERIFICA indica le verifiche richieste
            var inpEmail = this.formContact.value.email;
            var inpTel = this.formContact.value.telephone;
            var needPageVerify = true;
            var prosegui = false;
            var message = ''; //Le due variabili
            //this.smsVerificationYES
            //this.emailVerificationYES
            //indicano cosa bisogna ancora verificare
            //Stato 1: Le verifiche sono già effettuate e 
            //nessun campo è stato modificato dopo la verifica
            //Stato 2: Non sono richieste verifiche
            //Nessuna verifica da apportare

            if (this.docGruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].noverifica) {
              //Imposto email e sms verificati
              this.emailVerificationYES = true;
              this.smsVerificationYES = true; //Non serve la pagina di verifica

              needPageVerify = false;
              prosegui = true; //Nessuna richiesta codici da effettuare

              this.docRichiestaCodici.REQUESTSMSCODE = false;
              this.docRichiestaCodici.REQUESTEMAILCODE = false;
            } else {
              //Bisogna verificare qualcosa
              switch (this.docGruppo.APPTIPOVERIFICA) {
                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail:
                  if (this.emailVerificationYES && this.emailVerificata == inpEmail) {
                    //Tutto rimasto invariato, email è verificata si puo' bypassare la verifica
                    //Non serve la pagina di verifica
                    needPageVerify = false;
                    prosegui = true; //non serve richiedere ancora il codice email

                    this.docRichiestaCodici.REQUESTEMAILCODE = false;
                  } else {
                    //Email non verificata, oppure modificata
                    //devo verificare
                    //Serve la pagina di verifica
                    needPageVerify = true;
                    prosegui = true; //Bisogna richiedere ancora il codice email

                    this.docRichiestaCodici.REQUESTEMAILCODE = true;
                    this.docRichiestaCodici.EMAIL = inpEmail;
                  }

                  break;

                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemailsms:
                  if (this.emailVerificationYES && this.emailVerificata == inpEmail && this.smsVerificationYES && this.telVerificato == inpTel) {
                    //Tutto rimasto invariato, email e Telefono verificati si puo' bypassare la verifica
                    //Non serve la pagina di verifica
                    needPageVerify = false;
                    prosegui = true; //Nessuna richiesta ulteriore da effettuare

                    this.docRichiestaCodici.REQUESTEMAILCODE = false;
                    this.docRichiestaCodici.REQUESTSMSCODE = false;
                  } else {
                    //Email o Telefono non verificato, oppure modificato
                    //devo verificare
                    //Serve la pagina di verifica
                    needPageVerify = true;
                    prosegui = true;

                    if (this.emailVerificationYES == false || this.emailVerificata !== inpEmail) {
                      //Ha cambiato la mail dopo la verifica oppure non l ha mai verificato
                      //Bisogna richiedere ancora il codice email
                      this.docRichiestaCodici.REQUESTEMAILCODE = true;
                      this.docRichiestaCodici.EMAIL = inpEmail;
                    }

                    if (this.smsVerificationYES == false || this.telVerificato !== inpTel) {
                      //Ha cambiato il telefono dopo la verifica oppure non l ha mai verificato
                      //Bisogna richiedere ancora il codice SMS
                      this.docRichiestaCodici.REQUESTSMSCODE = true;
                      this.docRichiestaCodici.TELEPHONE = inpTel;
                    }
                  }

                  break;

                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms:
                  if (this.smsVerificationYES && this.telVerificato == inpTel) {
                    //Tutto rimasto invariato, Telefono è verificato si puo' bypassare la verifica
                    //Non serve la pagina di verifica
                    needPageVerify = false;
                    prosegui = true; //Nessuna richiesta SMS da effettuare

                    this.docRichiestaCodici.REQUESTSMSCODE = false;
                  } else {
                    //Telefono non verificato, oppure modificato
                    //devo verificare
                    //Serve la pagina di verifica
                    needPageVerify = true;
                    prosegui = true; //Bisogna richiedere ancora il codice SMS

                    this.docRichiestaCodici.REQUESTSMSCODE = true;
                    this.docRichiestaCodici.TELEPHONE = inpTel;
                  }

                  break;

                default:
                  prosegui = false;
                  message = 'Ops..qualcosa è andato storto';
                  break;
              }

              if (prosegui) {
                //Serve la pagina di verifica
                //Allora devo chiamare il server per inviare i codici
                if (needPageVerify) {
                  //Chiamo il server, e se tutto va a buon fine andro alla verifica
                  this.sendServerRichiestaCodici();
                } else {
                  //Devo andare alla pagina successiva alla verifica
                  var skipPageVerifica = true;
                  this.nextStepRegistration(skipPageVerifica);
                }
              } else {
                //Visualizzo il messaggio
                this.showMessage(message);
              }
            }
          }
          /**
           * Chiede al server di inviare i codici pin necessari
           * Se tutto va a buon fine si sposta nella pagina di verifica, altrimenti segnala l'errore
           * @param onSuccessChangePage Se l'operazione ha successo passa alla pagina successiva
           * @param customMessage Se presente viene mostrato in caso di richiesta a buon fine
           */

        }, {
          key: "sendServerRichiestaCodici",
          value: function sendServerRichiestaCodici() {
            var _this7 = this;

            var onSuccessChangePage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var customMessage = arguments.length > 1 ? arguments[1] : undefined;
            this.loadingCtrl.create({
              message: 'Invio Codici in corso...'
            }).then(function (element) {
              //Creo il loading
              element.present(); //Ora chiedo al server di inviare i codici
              //Il documento contiene le informazioni necessarie
              //Aggiungo l'area nel caso non ci fosse

              _this7.docRichiestaCodici.IDAREA = _this7.docArea.ID;
              _this7.docRichiestaCodici.USE = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["RequestPincodeUse"].forRegistration; //Chiamo il servizio

              _this7.startService.registrationSendCodici(_this7.docRichiestaCodici).then(function (responseServer) {
                //Chiudo il Loading Controller
                element.dismiss(); //Qui in teoria i codici sono stati inviati
                //Memorizzo IDREFER per le chiamate successive

                _this7.docRichiestaCodici.IDREFER = responseServer.idRefer; //Azzero i flag che servono a richiedere i codici

                _this7.docRichiestaCodici.REQUESTSMSCODE = false;
                _this7.docRichiestaCodici.REQUESTEMAILCODE = false; //Mi sposto alla pagina successiva (di verifica)

                if (onSuccessChangePage) {
                  //Devo spostarmi alla pagina di verifica
                  var skipPageVerifica = false;

                  _this7.nextStepRegistration(skipPageVerifica);
                } //Se ho un messaggio da visualizzare lo mostro


                if (customMessage && customMessage.length !== 0) {
                  _this7.showMessage(customMessage);
                }
              })["catch"](function (err) {
                //Chiudo il Loading Controller
                element.dismiss(); //Visualizzo il messaggio

                _this7.showMessage(err);
              });
            });
          } //#endregion
          //#region GESTIONE PAGINA VERIFICA

          /**
           * evento scatenato quando l'utente tappa su "reinvia codice"
           * Eì possibile richiedere il reinvio di 1 solo codice alla volta
           * @param tipo Reinvio Codice Email oppure Sms
           */

        }, {
          key: "onClickReinviaCodice",
          value: function onClickReinviaCodice(tipo) {
            var _this8 = this;

            var askMessage = '';
            var askEmail = false;
            var askTel = false;

            if (this.docRichiestaCodici) {
              askMessage = 'Verrà inviato un nuovo codice a ';

              switch (tipo) {
                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail:
                  askMessage += this.docRichiestaCodici.EMAIL; //Uso le variabili temporanee per indicare che vorrebbe il codice in email

                  askEmail = true;
                  break;

                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms:
                  askMessage += this.docRichiestaCodici.TELEPHONE; //Uso le variabili temporanee per indicare che vorrebbe il codice su telefono

                  askTel = true;
                  break;

                default:
                  break;
              } //Faccio la richiesta se desidera un reinvio codici


              this.alertCtrl.create({
                header: 'Reinvio pincode',
                message: askMessage,
                buttons: [{
                  text: 'Annulla',
                  role: 'cancel'
                }, {
                  text: 'Reinvia',
                  handler: function handler() {
                    //Reimposto il documenti di Richiesta con quello che vuole
                    _this8.docRichiestaCodici.REQUESTEMAILCODE = askEmail;
                    _this8.docRichiestaCodici.REQUESTSMSCODE = askTel;
                    var msg = 'Codice reinviato con successo'; //Faccio la richiesta al server e indico di non cambiare
                    //pagina al termine della richiesta

                    _this8.sendServerRichiestaCodici(false, msg);
                  }
                }]
              }).then(function (element) {
                element.present();
              });
            }
          }
          /**
          * evento scatenato quando l'utente clicca sul pulsante conferma della videata di verifica
          * dei recapiti
          */

        }, {
          key: "onClickAvantiVerifica",
          value: function onClickAvantiVerifica() {
            //Devo inviare al server i dati inseriti dall'utente
            var enable = this.isEnableAvantiOnVerify();
            var altMessage = '';
            var docVerify;

            if (!enable) {
              altMessage = 'Controllare i dati inseriti';
            } else {
              //I codici sono stati richiesti e dovrei avere l'IDREFER
              if (this.docRichiestaCodici && this.docRichiestaCodici.IDREFER) {
                if (this.docRichiestaCodici.IDREFER.length !== 0) {
                  //Posso preparare il documento per la verifica
                  docVerify = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_7__["AccountVerifyCode"]();
                  docVerify.IDAREA = this.docRichiestaCodici.IDAREA;
                  docVerify.IDREFER = this.docRichiestaCodici.IDREFER; //Devo passare il pincode Email

                  if (this.docGruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail || this.docGruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemailsms) {
                    docVerify.EMAILPINCODE = this.getInputVerifyCode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail);
                  } //Devo passare il pincode SMS


                  if (this.docGruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms || this.docGruppo.APPTIPOVERIFICA == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemailsms) {
                    docVerify.SMSPINCODE = this.getInputVerifyCode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms);
                  } //Tutto pronto per effettuare la richiesta di verifica pincode


                  this.sendServerVerificaCodici(docVerify);
                } else {
                  enable = false;
                  altMessage = 'Errore: Richiedere il reinvio';
                }
              } else {
                enable = false;
                altMessage = 'Errore: Richiedere il reinvio';
              }
            } //Nel caso mostro un messaggio di errore


            if (!enable) {
              this.showMessage(altMessage);
            }
          }
          /**
           * Richiedo al server se i dati sono corretti
           * @param docVerifica Documento per la verifica dei codici
           */

        }, {
          key: "sendServerVerificaCodici",
          value: function sendServerVerificaCodici(docVerifica) {
            var _this9 = this;

            if (docVerifica) {
              this.loadingCtrl.create({
                message: 'Verifica Codici'
              }).then(function (elLoading) {
                //Creo il loading
                elLoading.present(); //Faccio la richiesta al server

                _this9.startService.registrationVerifyCodici(docVerifica).then(function (response) {
                  //Chiudo il Loading 
                  elLoading.dismiss(); //Verifica codici passata

                  if (response.result) {
                    //Memorizzo nelle variabili che la verifica ha avuto esito positivo
                    _this9.emailVerificationYES = true;
                    _this9.emailVerificata = _this9.docRichiestaCodici.EMAIL;
                    _this9.smsVerificationYES = true;
                    _this9.telVerificato = _this9.docRichiestaCodici.TELEPHONE; //Posso spostarmi alla pagina successiva

                    _this9.nextStepRegistration();
                  } else {
                    //Segno che ha fallito tutto 
                    _this9.emailVerificationYES = false;
                    _this9.emailVerificata = '';
                    _this9.smsVerificationYES = false;
                    _this9.telVerificato = '';
                  }
                })["catch"](function (err) {
                  //Qui qualcosa è andato storto
                  //Chiudo il Loading
                  elLoading.dismiss(); //Mostro il messaggio

                  _this9.showMessage(err);
                });
              });
            }
          } //#endregion

          /**
           * evento scatenato quando l'utente clicca "registrati"
           * sulla pagina di inserimento dati
           */

        }, {
          key: "onClickRegistrati",
          value: function onClickRegistrati() {
            var _this10 = this;

            var codfisc;

            if (!this.formRegister.valid) {
              return;
            } else {
              //Prima vediamo il codice fiscale
              codfisc = this.formRegister.value.codFisc;
              codfisc = codfisc.toUpperCase();
              this.loadingCtrl.create({
                message: 'Check Codice Fiscale'
              }).then(function (elLoading) {
                elLoading.present(); //Chiamo il servizio del codice fiscale

                _this10.startService.checkCodiceFiscale(codfisc, true, true).then(function (elCodFisc) {
                  //Dovrei ottenere il codice fiscale con i dati
                  elLoading.dismiss();

                  if (!elCodFisc.checkValidate) {
                    _this10.showMessage(elCodFisc.msgValidate);
                  } else {
                    //Passo alla registrazione reale
                    _this10.execRegistrati(elCodFisc);
                  }
                })["catch"](function (objError) {
                  elLoading.dismiss();

                  _this10.showMessage(objError.msgValidate);
                });
              });
            }
          }
          /**
           * Invia al server i dati di registrazione
           */

        }, {
          key: "execRegistrati",
          value: function execRegistrati(myCodiceFiscale) {
            var _this11 = this;

            var pwd = '';
            var pwdToSend = '';
            var splitPwd = [];
            var useCrypter = false; //Imposto il nome e cognome

            this.docUtente.NOME = this.formRegister.value.name;
            this.docUtente.COGNOME = this.formRegister.value.surname; //Sarebbe meglio criptare la password con BCrypt ma per ora confidiamo nel https
            //e quindi non la cripto

            useCrypter = false;
            pwd = this.formRegister.value.psw;

            if (useCrypter) {
              pwdToSend = this.cryptoService.getBCrypt(pwd);
            } else {
              pwdToSend = pwd;
            } //Splitto la stringa in 2 stringhe che verrà ricostruita dal server


            splitPwd = this.cryptoService.mySplitPassword(pwdToSend);

            if (splitPwd) {
              //Metto la prima parte della password dentro al docRichiesta
              this.docRichiestaCodici.TOKEN = splitPwd[0];

              if (useCrypter) {
                //La seconda parte dentro a SHAPASSWORD
                //nel caso di criptata
                this.docUtente.SHAPASSWORD = splitPwd[1];
                this.docUtente.INPUTPASSWORD = '';
              } else {
                this.docUtente.INPUTPASSWORD = splitPwd[1];
                this.docUtente.SHAPASSWORD = '';
              } //Inserisco il codice fiscale


              this.docUtente.CODICEFISCALE = myCodiceFiscale.codiceFiscale;
              this.docUtente.SESSO = myCodiceFiscale.sesso;
              this.docUtente.NATOIL = myCodiceFiscale.dataNascita;
              this.docUtente.NATOA = myCodiceFiscale.comune;
              this.docUtente.NATOCAP = myCodiceFiscale.cap;
              this.docUtente.NATOPROV = myCodiceFiscale.provincia;
              this.docUtente.NATOISOSTATO = myCodiceFiscale.stato;
              this.docUtente.WEBLOGIN = this.formContact.value.email;
              this.docUtente.EMAIL = this.formContact.value.email;
              this.docUtente.MOBILENUMBER = this.formContact.value.telephone;

              if (this.formRegister.value.chkNewsletter == true) {
                this.docUtente.NEWSLETTER = true;
              } else {
                this.docUtente.NEWSLETTER = false;
              } //Attivo il loading e invio i dati al server


              this.loadingCtrl.create({
                message: 'Registrazione'
              }).then(function (elLoading) {
                //Creo il loading
                elLoading.present();

                _this11.startService.registrationFinalize(_this11.docUtente, _this11.docRichiestaCodici).then(function (response) {
                  //Chiudo il Loading
                  elLoading.dismiss(); //Wow registrazione conclusa
                  //Posso spostarmi alla pagina successiva

                  _this11.nextStepRegistration(); //Dentro a IDREFER c'e' il GUID dell'Utente
                  //Faccio un accesso automatico dell'utente


                  _this11.loginAfterRegister(_this11.docUtente.WEBLOGIN, pwd);
                })["catch"](function (error) {
                  //Chiudo il Loading
                  elLoading.dismiss(); //Mostro il messaggio

                  _this11.showMessage(error);
                });
              });
            } else {
              this.showMessage('Dati non corretti');
            }
          }
          /**
           * Al termine della registrazione se tutto va a buon fine, procedo con il login automatico
           */

        }, {
          key: "loginAfterRegister",
          value: function loginAfterRegister(username, password) {
            var _this12 = this;

            if (username && password) {
              // Chiamo il Servizio per eseguire l'autorizzazione
              this.startService.userLogin(username, password).then(function (dataResult) {
                // E' Arrivata una risposta NEGATIVA
                if (!dataResult.result) {
                  _this12.showMessage(dataResult.message);
                } else {
                  //LOGIN ACCETTATO
                  // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                  _this12.startService.saveStorageUtente(username, password);
                }
              });
            }
          }
          /**
           * procedura che sposta il focus sulla casella di input successiva
           * @param evento parametri $event dell'eveno "ion-input", necessari a identificare
           * in quale casella c'è stato l'input
           */

        }, {
          key: "changeFocus",
          value: function changeFocus(evento) {
            var id = evento['target']['id'];

            switch (id) {
              case '1':
                this.c2.setFocus();
                break;

              case '2':
                this.c3.setFocus();
                break;

              case '3':
                this.c4.setFocus();
                break;

              case '4':
                this.c5.setFocus();
                break;

              case '6':
                this.c7.setFocus();
                break;

              case '7':
                this.c8.setFocus();
                break;

              case '8':
                this.c9.setFocus();
                break;

              case '9':
                this.c10.setFocus();
                break;

              default:
                break;
            }
          }
          /**
           * evento scatenato quando l'utente clicca su "verifica in seguito"
           */

          /**
           * evento scatenato quando l'utente clicca su inizia
           */

        }, {
          key: "onClickInizia",
          value: function onClickInizia() {
            //Chiudo la modale
            this.modalCtrl.dismiss();
          } //#region CREAZIONI FORM

          /**
           * Funzione di creazione della Form di Login
           */

        }, {
          key: "createLoginForm",
          value: function createLoginForm() {
            this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              })
            });
          }
          /**
           * Funzione di creazione della Form Contatti, usata come prima pagina
           * nello StepRegistrazione
           */

        }, {
          key: "createContactForm",
          value: function createContactForm() {
            var pattTelefono = '^[+]*[0-9]*'; //Spiegazione pattern 
            //Per altre spiegazioni guardare qui https://regexr.com/3c53v
            // ^ Il match parte dall'inizio della stringa
            // [+] Qualsiasi elemento contenuto nelle quadre (quindi il +)
            // * la regola precedente è opzionale
            // [0-9] Qualsiasi elemento delle quadre
            // * la regola precedente è opzionale
            //form dei contatti (mail e telefono)

            this.formContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
              }),
              telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(pattTelefono)]
              })
            });
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            var patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}'; //form di registrazione

            this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              psw: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              verifyPsw: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              codFisc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(patternCodice)]
              }),
              chkPrivacy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, {
                updateOn: 'change',
                validators: [this.isPolicyLink() ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue : _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]
              }),
              chkNewsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, {
                updateOn: 'change',
                validators: []
              })
            }, [this.pswValidator]);
          }
        }, {
          key: "pswValidator",
          value: function pswValidator(c) {
            if (c.get('verifyPsw').value == c.get('psw').value) {
              return;
            } else {
              return {
                invalid: true
              };
            }
          }
          /**
           * Funzione per la creazione del FORM relativo alla Verifica Pincode Email e SMS
           */

        }, {
          key: "createVerifyForm",
          value: function createVerifyForm() {
            this.formVerifyMail = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              c1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c5: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              })
            });
            this.formVerifyTel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              c6: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c7: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c8: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c9: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              }),
              c10: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]
              })
            });
          }
          /**
           *
           * @param tipo Tipo del codice richiesto
           */

        }, {
          key: "getInputVerifyCode",
          value: function getInputVerifyCode(tipo) {
            var strReturn = '';

            if (tipo == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail) {
              strReturn = this.formVerifyMail.value.c1 + this.formVerifyMail.value.c2 + this.formVerifyMail.value.c3 + this.formVerifyMail.value.c4 + this.formVerifyMail.value.c5;
            } else if (tipo == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms) {
              strReturn = this.formVerifyTel.value.c6 + this.formVerifyTel.value.c7 + this.formVerifyTel.value.c8 + this.formVerifyTel.value.c9 + this.formVerifyTel.value.c10;
            }

            return strReturn;
          }
          /**
           * Il pulsante Avanti previsto nella form di Verifica
           * deve tenere conto
           * 1) Quanti sono i pincode da inserire
           * 2) Quali ha inserito
           */

        }, {
          key: "isEnableAvantiOnVerify",
          value: function isEnableAvantiOnVerify() {
            var enable = true;

            if (this.docGruppo) {
              if (this.docGruppo.APPTIPOVERIFICA !== src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].noverifica) {
                switch (this.docGruppo.APPTIPOVERIFICA) {
                  case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail:
                    enable = this.formVerifyMail.valid;
                    break;

                  case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms:
                    enable = this.formVerifyTel.valid;
                    break;

                  case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemailsms:
                    enable = this.formVerifyTel.valid && this.formVerifyMail.valid;
                    break;

                  default:
                    break;
                }
              }
            } else {
              enable = false;
            }

            return enable;
          } //#endregion
          //#region LINK ESTERNI

          /**
           * Controlla che nell'area ci sia il link della policy
           */

        }, {
          key: "isPolicyLink",
          value: function isPolicyLink() {
            var link;
            var ready = false;

            if (this.docArea) {
              link = this.docArea.findAreaLinkByPageType(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["PageType"].policyPrivacy);

              if (link && link.REFERURL) {
                ready = true;
              }
            }

            return ready;
          } //Apre il link delle Policy se presente

        }, {
          key: "openPolicyLink",
          value: function openPolicyLink() {
            var link;

            if (this.docArea) {
              link = this.docArea.findAreaLinkByPageType(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["PageType"].policyPrivacy);

              if (link && link.REFERURL) {
                this.openLink(link.REFERURL);
              }
            }
          } //Apre un link in un'altra pagina

        }, {
          key: "openLink",
          value: function openLink(url) {
            Browser.open({
              url: url
            });
          } //#endregion

          /**
          * Procedura che visualizza un toast con il messaggio passato
          * @param myMessage Il messaggio da visualizzare
          */

        }, {
          key: "showMessage",
          value: function showMessage(myMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastCtrl.create({
                        message: myMessage,
                        duration: 3000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return NewLoginPage;
      }();

      NewLoginPage.ɵfac = function NewLoginPage_Factory(t) {
        return new (t || NewLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_library_services_crypto_service__WEBPACK_IMPORTED_MODULE_8__["CryptoService"]));
      };

      NewLoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: NewLoginPage,
        selectors: [["app-new-login"]],
        viewQuery: function NewLoginPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c5, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c6, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c8, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c9, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c3 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c4 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c5 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c6 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c7 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c8 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c9 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.c10 = _t.first);
          }
        },
        decls: 24,
        vars: 15,
        consts: [["color", "primary"], ["slot", "start", 4, "ngIf"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close"], [3, "ngClass"], [3, "src"], ["class", "ion-padding", 4, "ngIf"], ["class", "ion-padding-horizontal", 4, "ngIf"], [4, "ngIf"], ["id", "footer-login", 4, "ngIf"], ["id", "footer-contact", 4, "ngIf"], ["id", "footer-verify", 4, "ngIf"], ["id", "footer-registration", 4, "ngIf"], ["id", "footer-welcome", 4, "ngIf"], ["slot", "start"], ["name", "arrow-back"], [1, "ion-padding"], ["color", "primary", "mode", "md", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value"], [3, "value", 4, "ngIf"], [3, "formGroup"], ["slot", "start", "name", "person-outline", "color", "primary"], ["inputmode", "email", "type", "email", "placeholder", "Email", "formControlName", "username", "autocomplete", "on"], ["slot", "start", "name", "key-outline", "color", "primary"], ["inputmode", "text", "type", "password", "placeholder", "Password", "formControlName", "password", "autocomplete", "current-password"], [1, "ion-text-center", "ion-padding-vertical"], [3, "click"], [1, "ion-padding-horizontal"], ["name", "at-outline", "slot", "start", "color", "primary"], ["type", "email", "placeholder", "E-Mail", "formControlName", "email"], ["name", "call-outline", "slot", "start", "color", "primary"], ["type", "tel", "inputmode", "tel", "placeholder", "+39 Cellulare", "formControlName", "telephone"], ["fill", "outline", "size", "small", "expand", "block", 3, "click", 4, "ngIf"], ["class", "ion-no-padding div-message", 4, "ngIf"], ["fill", "outline", "size", "small", "expand", "block", 3, "click"], [1, "ion-no-padding", "div-message"], ["name", "information-circle-outline"], ["lines", "none"], ["slot", "start", "fill", "clear", "color", "danger", 3, "click"], ["name", "refresh-outline"], ["color", "default"], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c1", "id", "1", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c1", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c2", "id", "2", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c2", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c3", "id", "3", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c3", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c4", "id", "4", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c4", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c5", "id", "5", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c5", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c6", "id", "6", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c6", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c7", "id", "7", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c7", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c8", "id", "8", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c8", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c9", "id", "9", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c9", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c10", "id", "10", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c10", ""], ["name", "person-outline", "slot", "start", "color", "primary"], ["type", "text", "placeholder", "Nome", "formControlName", "name"], ["type", "text", "placeholder", "Cognome", "formControlName", "surname"], ["name", "key-outline", "slot", "start", "color", "primary"], ["type", "password", "placeholder", "Password", "formControlName", "psw"], ["type", "password", "placeholder", "Verifica password", "formControlName", "verifyPsw"], ["name", "card-outline", "slot", "start", "color", "primary"], ["type", "text", "placeholder", "Codice Fiscale", "formControlName", "codFisc"], ["lines", "none", 4, "ngIf"], ["slot", "start", "color", "primary", "formControlName", "chkNewsletter"], ["slot", "start", "color", "primary", "formControlName", "chkPrivacy"], [1, "ion-text-center"], ["src", "assets/img/handshake_b.gif"], ["id", "footer-login"], ["expand", "block", 1, "btn-confirm", 3, "color", "disabled", "click"], ["id", "footer-contact"], ["id", "footer-verify"], ["id", "footer-registration"], ["id", "footer-welcome"], ["expand", "block", 1, "btn-confirm", 3, "color", "click"]],
        template: function NewLoginPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NewLoginPage_ion_buttons_2_Template, 3, 0, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewLoginPage_Template_ion_button_click_6_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, NewLoginPage_div_11_Template, 5, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, NewLoginPage_div_12_Template, 12, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NewLoginPage_div_13_Template, 14, 6, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, NewLoginPage_div_14_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, NewLoginPage_div_15_Template, 35, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, NewLoginPage_div_16_Template, 7, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, NewLoginPage_div_19_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, NewLoginPage_div_20_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, NewLoginPage_div_21_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, NewLoginPage_div_22_Template, 3, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, NewLoginPage_div_23_Template, 3, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION || ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.getCaptionTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isDesktop ? "ion-text-center div-logo desktop" : "ion-text-center div-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.startConfig.getUrlLogo(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage !== ctx.pageState.WELCOME);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.LOGIN);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.CONTACT);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.WELCOME);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.LOGIN);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.CONTACT);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.WELCOME);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"]],
        styles: ["div.div-logo[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n  margin-bottom: 3vh;\n}\ndiv.div-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 15vh;\n}\ndiv.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-medium);\n}\ndiv.div-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.div-logo.desktop[_ngcontent-%COMP%] {\n  padding-top: 1vh;\n  padding-bottom: 0vh;\n  margin-bottom: 0vh;\n}\ndiv.form-verifica[_ngcontent-%COMP%] {\n  width: 320px;\n  margin: auto;\n  margin-bottom: 8vh;\n  text-align: center;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  background: white;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  display: inline;\n  border-radius: 15px;\n  margin: 2px;\n  border: 3px solid var(--ion-color-primary);\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--ion-color-medium);\n  font-size: 40px;\n}\ndiv.form-verifica.desktop[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: small;\n}\na[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\nspan.link[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmV3LWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQU1JO0VBQ0kseUNBQUE7QUFIUjtBQVFJO0VBQ0ksa0JBQUE7QUFMUjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFZQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRKO0FBVUk7RUFDSSxpQkFBQTtBQVJSO0FBU1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBUFo7QUFZQTtFQUNJLGtCQUFBO0FBVEo7QUFjQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBWEo7QUFjQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBWEoiLCJmaWxlIjoibmV3LWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kaXYtbG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5kaXYuY29udGVudCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuZGl2LW1lc3NhZ2Uge1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmRpdi5kaXYtbG9nby5kZXNrdG9we1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOjB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxufVxyXG5cclxuXHJcbmRpdi5mb3JtLXZlcmlmaWNhe1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaW9uLXNlZ21lbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjoycHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjozcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZGl2LmZvcm0tdmVyaWZpY2EuZGVza3RvcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuXHJcbi8vaW5zZXJpc2NpIGkgY29kaWNpXHJcbmg2e1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc3Bhbi5saW5re1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      var PageState;

      (function (PageState) {
        PageState[PageState["LOGIN"] = 100] = "LOGIN";
        PageState[PageState["CONTACT"] = 210] = "CONTACT";
        PageState[PageState["REGISTRATION"] = 220] = "REGISTRATION";
        PageState[PageState["VERIFY"] = 230] = "VERIFY";
        PageState[PageState["WELCOME"] = 300] = "WELCOME";
      })(PageState || (PageState = {}));
      /***/

    },

    /***/
    "vaGj":
    /*!******************************************************************!*\
      !*** ./src/app/pages/auth/new-login/new-login-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: NewLoginPageRoutingModule */

    /***/
    function vaGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewLoginPageRoutingModule", function () {
        return NewLoginPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _new_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-login.page */
      "uVj7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _new_login_page__WEBPACK_IMPORTED_MODULE_1__["NewLoginPage"]
      }];

      var NewLoginPageRoutingModule = function NewLoginPageRoutingModule() {
        _classCallCheck(this, NewLoginPageRoutingModule);
      };

      NewLoginPageRoutingModule.ɵfac = function NewLoginPageRoutingModule_Factory(t) {
        return new (t || NewLoginPageRoutingModule)();
      };

      NewLoginPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NewLoginPageRoutingModule
      });
      NewLoginPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewLoginPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4-es5.js.map