(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"], {
    /***/
    "9F3y":
    /*!**************************************************!*\
      !*** ./src/app/pages/auth/verify/verify.page.ts ***!
      \**************************************************/

    /*! exports provided: VerifyPage */

    /***/
    function F3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
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


      var src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/library/models/mydatetime.model */
      "K4nM");
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

      function VerifyPage_ion_buttons_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-buttons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_ion_buttons_2_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r9.backStepRegistration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_ion_title_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Verifica informazioni");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_ion_title_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Aggiorna i tuoi dati");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_div_11_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_div_11_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_div_11_ion_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_11_ion_button_5_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r17.openPolicyLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " condizioni di trattamento dei dati ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_div_11_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 25);

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

      function VerifyPage_div_11_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 25);

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

      function VerifyPage_div_11_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 25);

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

      function VerifyPage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerifyPage_div_11_ion_item_3_Template, 3, 0, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerifyPage_div_11_ion_item_4_Template, 3, 0, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, VerifyPage_div_11_ion_button_5_Template, 2, 0, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, VerifyPage_div_11_div_6_Template, 12, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, VerifyPage_div_11_div_7_Template, 10, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, VerifyPage_div_11_div_8_Template, 12, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r3.formContact);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.emailVerifyNeeded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.smsVerifyNeeded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.isPolicyLink());

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.emailVerifyNeeded && !ctx_r3.smsVerifyNeeded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.emailVerifyNeeded && ctx_r3.smsVerifyNeeded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.smsVerifyNeeded && !ctx_r3.emailVerifyNeeded);
        }
      }

      function VerifyPage_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_12_div_1_Template_ion_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r26.onClickReinviaCodice(ctx_r26.tipoVerifica.verificaemail);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Inserisci il pincode ricevuto tramite email");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_1_Template_ion_input_ionInput_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r28.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_1_Template_ion_input_ionInput_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r29.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_1_Template_ion_input_ionInput_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r30.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_1_Template_ion_input_ionInput_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r31.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_1_Template_ion_input_ionInput_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r32.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r19.formVerifyMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r19.isDesktop ? "form-verifica desktop" : "form-verifica");
        }
      }

      function VerifyPage_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_12_div_2_Template_ion_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r38.onClickReinviaCodice(ctx_r38.tipoVerifica.verificasms);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Inserisci il pincode ricevuto tramite SMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-input", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_2_Template_ion_input_ionInput_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r40.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-input", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_2_Template_ion_input_ionInput_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r41.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-input", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_2_Template_ion_input_ionInput_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r42.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_2_Template_ion_input_ionInput_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r43.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function VerifyPage_div_12_div_2_Template_ion_input_ionInput_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r44.changeFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r20.formVerifyTel);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r20.isDesktop ? "form-verifica desktop" : "form-verifica");
        }
      }

      function VerifyPage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VerifyPage_div_12_div_1_Template, 19, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerifyPage_div_12_div_2_Template, 19, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.emailVerifyNeeded);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.smsVerifyNeeded);
        }
      }

      function VerifyPage_div_13_ion_select_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sesso_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", sesso_r47.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", sesso_r47.description, " ");
        }
      }

      function VerifyPage_div_13_ion_item_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function VerifyPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-item-divider", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Come ti chiami ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Cognome");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "ion-input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Sesso");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, VerifyPage_div_13_ion_select_option_20_Template, 2, 2, "ion-select-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Codice fiscale");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionBlur", function VerifyPage_div_13_Template_ion_input_ionBlur_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r48.onCfChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "ion-item-divider", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "ion-icon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Dove vivi ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Indirizzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "ion-input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Comune");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "ion-input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Cap");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "ion-input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Provincia");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "ion-input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Stato");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "ion-input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "ion-item-divider", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "ion-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Quando sei nato ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "ion-datetime", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Comune");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "ion-input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, VerifyPage_div_13_ion_item_63_Template, 4, 0, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Provincia");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "ion-input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Stato");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "ion-input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, " Dobbiamo richiederti alcune informazioni personali per l'eventuale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " emissione di documenti fiscali ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "ion-text", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "(ad esempio in caso di iscrizioni a corsi o prenotazioni della struttura)");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.listSesso);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("max", ctx_r5.today);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.showInputCapNascita);
        }
      }

      function VerifyPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_15_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r50.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Avanti");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r6.formContact.valid);
        }
      }

      function VerifyPage_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_16_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r52.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Verifica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r7.isEnableAvantiOnVerify());
        }
      }

      function VerifyPage_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_div_17_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r54.onClickFooterAvanti();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Aggiorna ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r8.formRegister.valid);
        }
      }

      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Browser;

      var VerifyPage = /*#__PURE__*/function () {
        //#endregion
        function VerifyPage(modalCtrl, startService, loadingController, toastCtrl, alertCtrl, cryptoService, navParams) {
          _classCallCheck(this, VerifyPage);

          this.modalCtrl = modalCtrl;
          this.startService = startService;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.cryptoService = cryptoService;
          this.navParams = navParams; //se mostrare l'input cap nascita

          this.showInputCapNascita = false; //l'oggetto ricevuto come parametro all'apertura della videata in modale

          this.params = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_4__["ParamsVerifica"](); //per utilizzare l'enum nell'html

          this.pageState = PageState;
          this.tipoVerifica = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"]; //Array con gli step possibili in registrazione

          this.stepRegistration = [];
          this.indexStepRegistration = 0; //Documento per la richiesta invio codici al server

          this.docRichiestaCodici = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_7__["AccountRequestCode"](); //lista delle decodifiche del sesso

          this.listSesso = []; //per il momento, imposto che non devo verificare niente

          this.emailVerifyNeeded = false;
          this.smsVerifyNeeded = false; //Stato Pagina registrazione

          this.indexStepRegistration = 0; //Posizionato sulla pagina di login

          this.actualStatePage = PageState.REGISTRATION; //Richiedo lo startConfig

          this.startConfig = startService.actualStartConfig;

          if (this.startConfig && this.startConfig.gruppo) {
            //Memorizzo il Gruppo con le sue Opzioni
            this.docGruppo = this.startConfig.gruppo;
          } //Prelevo l'area selezionata 


          this.docArea = this.startService.areaSelectedValue; //recupero l'utente

          this.docUtente = this.startService.actualUtente; //recupero il parametro

          this.params = this.navParams.get('params');

          if (this.params == null || this.params == undefined) {
            //se non ho i parametri, esco
            this.showMessage("Errore");
            this.closeModal();
          } //recupero le decodifiche della lista sesso


          this.listSesso = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["Sesso"]); //il giorno attuale per filtrare la data di nascita in input

          this.today = this.today = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_9__["MyDateTime"].formatDateISO(new Date());
        }

        _createClass(VerifyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createArrayStepRegistration(this.docGruppo);
            this.createRegisterForm();
            this.createVerifyForm();
            this.createContactForm();
            this.isDesktop = this.startService.isDesktop;
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

            switch (this.params.tipoVerifica) {
              //se mi passano "verificaemail", devo verificare solo la mail
              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemail:
                this.emailVerifyNeeded = true;
                this.smsVerifyNeeded = false;
                break;
              //se mi passano "verificasms", devo verificare solo l'sms

              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificasms:
                this.emailVerifyNeeded = false;
                this.smsVerifyNeeded = true;
                break;
              //se mi passano verificaemailsms, devo verificare entrambi

              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["TipoVerificaAccount"].verificaemailsms:
                this.emailVerifyNeeded = true;
                this.smsVerifyNeeded = true;
                break;
              //in tutti gli altri casi, non devo verificare niente

              default:
                this.smsVerifyNeeded = false;
                this.emailVerifyNeeded = false;
                break;
            } //se devo verificare email, sms, o entrambi, aggiungo pagina contact e verify all'array di pagine


            if (this.emailVerifyNeeded || this.smsVerifyNeeded) {
              this.stepRegistration.push(PageState.CONTACT);
              this.stepRegistration.push(PageState.VERIFY);
            } //se mi è stato detto di fare anche l'aggiornamento dell'anagrafica, aggiungo lo step necessario


            if (this.params.updateDocUtente) {
              this.stepRegistration.push(this.pageState.REGISTRATION);
            } //Mi posiziono sul primo step


            if (this.stepRegistration[0]) {
              this.actualStatePage = this.stepRegistration[0];
            }
          }
          /**
           * Effettua l'avanzamento di pagina nello Step Registrazione
           */

        }, {
          key: "nextStepRegistration",
          value: function nextStepRegistration() {
            if (this.indexStepRegistration + 1 < this.stepRegistration.length) {
              this.indexStepRegistration++;
              this.actualStatePage = this.stepRegistration[this.indexStepRegistration];
            } else {
              this.closeModal();
            }
          }
          /**
           * Torna indietro negli Step di Registrazione
           */

        }, {
          key: "backStepRegistration",
          value: function backStepRegistration() {
            if (this.indexStepRegistration - 1 >= 0) {
              this.indexStepRegistration--;
              this.actualStatePage = this.stepRegistration[this.indexStepRegistration];
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
                this.onClickAggiornaDati();

              default:
                break;
            }
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
            if (this.formContact.valid) {
              //azzero il documento di richiesta
              this.docRichiestaCodici = new src_app_models_accountregistration_model__WEBPACK_IMPORTED_MODULE_7__["AccountRequestCode"]();
              this.docRichiestaCodici.REQUESTEMAILCODE = false;
              this.docRichiestaCodici.REQUESTSMSCODE = false; //inserisco i dati generali 

              this.docRichiestaCodici.IDAREA = this.docArea.ID;
              this.docRichiestaCodici.USE = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_6__["RequestPincodeUse"].forValidation; //se devo verificare la mail, inserisco i dati nel documento

              if (this.emailVerifyNeeded) {
                this.docRichiestaCodici.REQUESTEMAILCODE = true;
                this.docRichiestaCodici.EMAIL = this.formContact.value.email;
              } //se devo verificare il tel, inserisco i dati nel documento


              if (this.smsVerifyNeeded) {
                this.docRichiestaCodici.REQUESTSMSCODE = true;
                this.docRichiestaCodici.TELEPHONE = this.formContact.value.telephone;
              } //ora posso fare la richiesta al server


              this.sendServerRichiestaCodici(true);
            } //se il form non è valido, non faccio niente
            else {
                return;
              }
          }
          /**
           * Chiede al server di inviare i codici pin necessari
           * Se tutto va a buon fine si sposta nella pagina di verifica, altrimenti segnala l'errore
           * @param onSuccessChangePage Se l'operazione ha successo passa alla pagina successiva
           * @param customSuccessMessage Se presente viene mostrato in caso di richiesta a buon fine
           */

        }, {
          key: "sendServerRichiestaCodici",
          value: function sendServerRichiestaCodici() {
            var _this = this;

            var onSuccessChangePage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var customSuccessMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Codice inviato con successo!';
            var customErrorMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Errore nell\'invio del codice, riprova';
            this.loadingController.create({
              message: 'Invio Codici in corso...'
            }).then(function (element) {
              //Creo il loading
              element.present(); //Ora chiedo al server di inviare i codici
              //Chiamo il servizio

              _this.startService.validationSendCodici(_this.docRichiestaCodici, _this.docUtente).then(function (responseServer) {
                //Chiudo il Loading Controller
                element.dismiss();

                if (responseServer.result) {
                  //Qui in teoria i codici sono stati inviati
                  //Memorizzo IDREFER per le chiamate successive
                  _this.docRichiestaCodici.IDREFER = responseServer.idRefer; //Azzero i flag che servono a richiedere i codici

                  _this.docRichiestaCodici.REQUESTSMSCODE = false;
                  _this.docRichiestaCodici.REQUESTEMAILCODE = false;

                  _this.showMessage(customSuccessMessage); //Mi sposto alla pagina successiva (di verifica)


                  if (onSuccessChangePage) {
                    //Cancello gli input code presenti nelle formTel e Mail
                    _this.clearInputPinCode(); //Devo spostarmi alla pagina di verifica


                    _this.nextStepRegistration();
                  }
                } else {
                  //se il server ha risposto, ma non è riuscito ad inviare
                  _this.showMessage(customErrorMessage);
                }
              })["catch"](function (err) {
                //Chiudo il Loading Controller
                element.dismiss(); //Visualizzo il messaggio

                console.log(err);

                _this.showMessage("Errore di connessione");
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
            var _this2 = this;

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
                    _this2.docRichiestaCodici.REQUESTEMAILCODE = askEmail;
                    _this2.docRichiestaCodici.REQUESTSMSCODE = askTel;
                    var msg = 'Codice reinviato con successo'; //Faccio la richiesta al server e indico di non cambiare
                    //pagina al termine della richiesta

                    _this2.sendServerRichiestaCodici(false, msg);
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
            var altMessage = '';
            var docVerify;

            if (!this.isEnableAvantiOnVerify()) {
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
                  altMessage = 'Errore: Richiedere il reinvio';
                }
              } else {
                altMessage = 'Errore: Richiedere il reinvio';
              }
            } //Nel caso mostro un messaggio di errore


            if (altMessage.length != 0) {
              this.showMessage(altMessage);
            }
          }
          /**
           * Invio al server i pincode inseriti dall'utente
           * Se tutto va a buon fine, le informazioni saranno rese VERIFICATE
           * @param docVerifica Documento per la verifica dei codici
           */

        }, {
          key: "sendServerVerificaCodici",
          value: function sendServerVerificaCodici(docVerifica) {
            var _this3 = this;

            if (docVerifica) {
              this.loadingController.create({
                message: 'Verifica Codici...'
              }).then(function (elLoading) {
                //Creo il loading
                elLoading.present(); //Faccio la richiesta al server

                _this3.startService.validationVerifyCodici(docVerifica).then(function (response) {
                  //Chiudo il Loading 
                  elLoading.dismiss(); //Verifica codici passata

                  if (response.result) {
                    //se nella richiesta (andata a buon fine), ho verificato la mail, lo segno nel docutente
                    if (_this3.docRichiestaCodici.REQUESTEMAILCODE) {
                      _this3.docUtente.VERIFICATAMAIL = true;
                      _this3.docUtente.EMAIL = _this3.docRichiestaCodici.EMAIL;
                    } //se nella richiesta (andata a buon fine), ho verificato il cell, lo segno nel docutente


                    if (_this3.docRichiestaCodici.REQUESTSMSCODE) {
                      _this3.docUtente.VERIFICATAMOBILE = true;
                      _this3.docUtente.MOBILENUMBER = _this3.docRichiestaCodici.TELEPHONE;
                    }

                    _this3.showMessage("Verifica completata con successo"); //Posso spostarmi alla pagina successiva


                    _this3.nextStepRegistration();
                  } else {
                    //Il server ha risposto, ma la verifica non è andata a buon fine (presumo codice errato)
                    _this3.showMessage(response.message);
                  }
                })["catch"](function (err) {
                  //Qui qualcosa è andato storto
                  //Chiudo il Loading
                  elLoading.dismiss(); //Mostro il messaggio

                  _this3.showMessage("Errore di connessione");
                });
              });
            } else {
              this.showMessage('Errore, richiedere un nuovo codice');
            }
          } //#endregion

          /**
           * evento scatenato quando l'utente clicca "aggiorna"
           * sulla pagina di inserimento dati
           */

        }, {
          key: "onClickAggiornaDati",
          value: function onClickAggiornaDati() {
            this.execAggiornaDati();
          }
          /**
           * Invia al server i dati di registrazione
           */

        }, {
          key: "execAggiornaDati",
          value: function execAggiornaDati() {
            var _this4 = this;

            //recupero tutti i dati dal form
            if (this.formRegister.valid) {
              this.docUtente.NOMINATIVO = '';
              this.docUtente.NOME = this.formRegister.value.nome;
              this.docUtente.COGNOME = this.formRegister.value.cognome;
              this.docUtente.SESSO = this.formRegister.value.sesso;
              this.docUtente.CODICEFISCALE = this.formRegister.value.cf;
              this.docUtente.INDIRIZZO = this.formRegister.value.indResidenza;
              this.docUtente.COMUNE = this.formRegister.value.comResidenza;
              this.docUtente.CAP = this.formRegister.value.capResidenza;
              this.docUtente.PROVINCIA = this.formRegister.value.provResidenza;
              this.docUtente.ISOSTATO = this.formRegister.value.statoResidenza;

              if (this.formRegister.value.nascita) {
                this.docUtente.NATOIL = new Date(this.formRegister.value.nascita);
              }

              this.docUtente.NATOA = this.formRegister.value.comNascita;
              this.docUtente.NATOCAP = this.formRegister.value.capNascita;
              this.docUtente.NATOPROV = this.formRegister.value.provNascita;
              this.docUtente.NATOISOSTATO = this.formRegister.value.statoNascita; //EMAIL E NUMERO DI TELEFONO NON LI MODIFICO MAI
              //USO IL LOADING CONTROLLER 

              this.loadingController.create({
                message: 'Aggiornamento dati...',
                spinner: 'circular'
              }).then(function (elLoading) {
                // Mostro il loading
                elLoading.present(); //richiesta di aggiornamento al server

                _this4.startService.updateUtente(_this4.docUtente).then(function (result) {
                  //visto che siamo nel then, l'operazione è sicuramente andata a buon fine
                  elLoading.dismiss();

                  _this4.showMessage('Info Aggiornate');

                  _this4.closeModal();
                })["catch"](function (error) {
                  elLoading.dismiss();

                  _this4.showMessage(error);

                  console.log(error);
                });
              });
            }
          }
          /**
           * Al termine della registrazione se tutto va a buon fine, procedo con il login automatico
           */

        }, {
          key: "loginAfterRegister",
          value: function loginAfterRegister(username, password) {
            var _this5 = this;

            if (username && password) {
              // Chiamo il Servizio per eseguire l'autorizzazione
              this.startService.userLogin(username, password).then(function (dataResult) {
                // E' Arrivata una risposta NEGATIVA
                if (!dataResult.result) {
                  _this5.showMessage(dataResult.message);
                } else {
                  //LOGIN ACCETTATO
                  // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                  _this5.startService.saveStorageUtente(username, password);
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
          } //#region CREAZIONI FORM

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
                validators: [this.emailVerifyNeeded ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
              }),
              telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'change',
                validators: [this.smsVerifyNeeded ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(pattTelefono)]
              })
            });
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            var patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}'; //form di registrazione

            this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NOME, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              cognome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.COGNOME, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              sesso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.SESSO, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              nascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NATOIL ? this.docUtente.NATOIL.toISOString() : this.docUtente.NATOIL, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              provNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NATOPROV, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              comNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NATOA, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              statoNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NATOISOSTATO, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              capNascita: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.NATOCAP, {
                updateOn: 'change',
                validators: []
              }),
              provResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.PROVINCIA, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              comResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.COMUNE, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              indResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.INDIRIZZO, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              capResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.CAP, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              statoResidenza: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.ISOSTATO, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              cf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.docUtente.CODICEFISCALE, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(patternCodice)]
              })
            });
          }
        }, {
          key: "onCfChange",
          value: function onCfChange() {
            var _this6 = this;

            //se il cf cambia, quando l'utente esce dalla casella, provo a validarlo e riempire gli altri campi
            var codFiscString = this.formRegister.value.cf;

            if (codFiscString != null && codFiscString != undefined) {
              if (codFiscString.length != 0) {
                //chiamo il servizio per decodificare il codice fiscale
                this.startService.checkCodiceFiscale(codFiscString, true).then(function (codFiscObj) {
                  //inserisco tutto quello che ho decodificato nel docutente
                  _this6.docUtente.NATOISOSTATO = 'Italia';
                  _this6.docUtente.NATOA = codFiscObj.comune;
                  _this6.docUtente.NATOPROV = codFiscObj.provincia;
                  _this6.docUtente.NATOIL = codFiscObj.dataNascita;
                  _this6.docUtente.SESSO = codFiscObj.sesso;
                  _this6.docUtente.NATOCAP = codFiscObj.cap; //aggiorno i campi del form

                  _this6.formRegister.get('comNascita').setValue(_this6.docUtente.NATOA);

                  _this6.formRegister.get('provNascita').setValue(_this6.docUtente.NATOPROV);

                  _this6.formRegister.get('nascita').setValue(_this6.docUtente.NATOIL.toISOString());

                  _this6.formRegister.get('sesso').setValue(_this6.docUtente.SESSO);

                  _this6.formRegister.get('statoNascita').setValue(_this6.docUtente.NATOISOSTATO);

                  _this6.formRegister.get('capNascita').setValue(_this6.docUtente.NATOCAP); //setto il campo cf come valido


                  _this6.formRegister.controls['cf'].setErrors(null);
                })["catch"](function (err) {
                  //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
                  _this6.formRegister.controls['cf'].setErrors({
                    'incorrect': true
                  });

                  console.log(err);
                });
              }
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
           * Cancella i valori nelle caselle di input del form
           * formVerifyMail e formVerifyTel
           */

        }, {
          key: "clearInputPinCode",
          value: function clearInputPinCode() {
            for (var index = 1; index <= 5; index++) {
              this.formVerifyMail.get('c' + index).setValue("");
            }

            for (var _index = 6; _index <= 10; _index++) {
              this.formVerifyTel.get('c' + _index).setValue("");
            }
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
                switch (this.params.tipoVerifica) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
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
        }]);

        return VerifyPage;
      }();

      VerifyPage.ɵfac = function VerifyPage_Factory(t) {
        return new (t || VerifyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_library_services_crypto_service__WEBPACK_IMPORTED_MODULE_8__["CryptoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]));
      };

      VerifyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: VerifyPage,
        selectors: [["app-verify"]],
        viewQuery: function VerifyPage_Query(rf, ctx) {
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
        decls: 18,
        vars: 11,
        consts: [["color", "primary"], ["slot", "start", 4, "ngIf"], [4, "ngIf"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close"], [1, "ion-padding"], [3, "ngClass"], [3, "src"], ["class", "ion-padding-horizontal", 4, "ngIf"], ["id", "footer-contact", 4, "ngIf"], ["id", "footer-verify", 4, "ngIf"], ["id", "footer-registration", 4, "ngIf"], ["slot", "start"], ["name", "arrow-back"], [1, "ion-padding-horizontal"], [3, "formGroup"], ["fill", "outline", "size", "small", "expand", "block", 3, "click", 4, "ngIf"], ["class", "ion-no-padding div-message", 4, "ngIf"], ["name", "at-outline", "slot", "start", "color", "primary"], ["type", "email", "placeholder", "E-Mail", "formControlName", "email"], ["name", "call-outline", "slot", "start", "color", "primary"], ["type", "tel", "inputmode", "tel", "placeholder", "+39 Cellulare", "formControlName", "telephone"], ["fill", "outline", "size", "small", "expand", "block", 3, "click"], [1, "ion-no-padding", "div-message"], ["name", "information-circle-outline"], ["lines", "none"], ["slot", "start", "fill", "clear", "color", "danger", 3, "click"], ["name", "refresh-outline"], ["color", "default"], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c1", "id", "1", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c1", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c2", "id", "2", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c2", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c3", "id", "3", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c3", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c4", "id", "4", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c4", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c5", "id", "5", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c5", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c6", "id", "6", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c6", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c7", "id", "7", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c7", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c8", "id", "8", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c8", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c9", "id", "9", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c9", ""], ["clearOnEdit", "", "type", "tel", "inputmode", "numeric", "minlength", "1", "maxlength", "1", "formControlName", "c10", "id", "10", 1, "ion-no-padding", "ion-align-self-center", 3, "ionInput"], ["c10", ""], ["color", "light"], ["name", "person-outline", "slot", "start", "color", "primary"], ["position", "floating"], ["formControlName", "nome"], ["formControlName", "cognome"], ["formControlName", "sesso", "interface", "popover"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "cf", 3, "ionBlur"], ["name", "home-outline", "slot", "start", "color", "primary"], ["formControlName", "indResidenza"], ["formControlName", "comResidenza"], ["type", "tel", "inputmode", "tel", "maxlength", "5", "formControlName", "capResidenza"], ["formControlName", "provResidenza"], ["formControlName", "statoResidenza"], ["name", "logo-reddit", "slot", "start", "color", "primary"], ["formControlName", "nascita", "displayFormat", "DD-MM-YYYY", 3, "max"], ["formControlName", "comNascita"], ["formControlName", "provNascita"], ["formControlName", "statoNascita"], [3, "value"], ["formControlName", "capNascita"], ["id", "footer-contact"], ["color", "primary", "expand", "block", 1, "btn-confirm", 3, "disabled", "click"], ["id", "footer-verify"], ["id", "footer-registration"]],
        template: function VerifyPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, VerifyPage_ion_buttons_2_Template, 3, 0, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, VerifyPage_ion_title_3_Template, 2, 0, "ion-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, VerifyPage_ion_title_4_Template, 2, 0, "ion-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerifyPage_Template_ion_button_click_6_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, VerifyPage_div_11_Template, 9, 7, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, VerifyPage_div_12_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, VerifyPage_div_13_Template, 84, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, VerifyPage_div_15_Template, 3, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, VerifyPage_div_16_Template, 3, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, VerifyPage_div_17_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage != ctx.pageState.REGISTRATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isDesktop ? "ion-text-center div-logo desktop" : "ion-text-center div-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.startConfig.getUrlLogo(), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.CONTACT);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.CONTACT);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.VERIFY);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.actualStatePage == ctx.pageState.REGISTRATION);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"]],
        styles: ["div.div-logo[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 3vh;\n  padding-bottom: 3vh;\n  margin-bottom: 3vh;\n}\ndiv.div-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 15vh;\n}\ndiv.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-medium);\n}\ndiv.div-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv.div-logo.desktop[_ngcontent-%COMP%] {\n  padding-top: 1vh;\n  padding-bottom: 0vh;\n  margin-bottom: 0vh;\n}\ndiv.form-verifica[_ngcontent-%COMP%] {\n  width: 320px;\n  margin: auto;\n  margin-bottom: 8vh;\n  text-align: center;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  background: white;\n}\ndiv.form-verifica[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  display: inline;\n  border-radius: 15px;\n  margin: 2px;\n  border: 3px solid var(--ion-color-primary);\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: var(--ion-color-primary);\n  font-size: 40px;\n}\ndiv.form-verifica.desktop[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: small;\n}\na[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\nspan.link[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQU1JO0VBQ0kseUNBQUE7QUFIUjtBQVFJO0VBQ0ksa0JBQUE7QUFMUjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFZQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRKO0FBVUk7RUFDSSxpQkFBQTtBQVJSO0FBU1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBUFo7QUFZQTtFQUNJLGtCQUFBO0FBVEo7QUFjQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBWEo7QUFjQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBWEoiLCJmaWxlIjoidmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kaXYtbG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5kaXYuY29udGVudCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuZGl2LW1lc3NhZ2Uge1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmRpdi5kaXYtbG9nby5kZXNrdG9we1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOjB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxufVxyXG5cclxuXHJcbmRpdi5mb3JtLXZlcmlmaWNhe1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDh2aDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaW9uLXNlZ21lbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjoycHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjozcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5mb3JtLXZlcmlmaWNhLmRlc2t0b3B7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbn1cclxuXHJcblxyXG4vL2luc2VyaXNjaSBpIGNvZGljaVxyXG5oNntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNwYW4ubGlua3tcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      var PageState;

      (function (PageState) {
        PageState[PageState["CONTACT"] = 210] = "CONTACT";
        PageState[PageState["REGISTRATION"] = 220] = "REGISTRATION";
        PageState[PageState["VERIFY"] = 230] = "VERIFY";
        PageState[PageState["WELCOME"] = 300] = "WELCOME";
      })(PageState || (PageState = {}));
      /***/

    },

    /***/
    "fFCB":
    /*!****************************************************!*\
      !*** ./src/app/pages/auth/verify/verify.module.ts ***!
      \****************************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function fFCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
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


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify-routing.module */
      "pwHA");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./verify.page */
      "9F3y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule.ɵfac = function VerifyPageModule_Factory(t) {
        return new (t || VerifyPageModule)();
      };

      VerifyPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: VerifyPageModule
      });
      VerifyPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_3__["VerifyPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](VerifyPageModule, {
          declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_4__["VerifyPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_3__["VerifyPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_verify_page__WEBPACK_IMPORTED_MODULE_4__["VerifyPage"]]
        });
      })();
      /***/

    },

    /***/
    "pwHA":
    /*!************************************************************!*\
      !*** ./src/app/pages/auth/verify/verify-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function pwHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./verify.page */
      "9F3y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_1__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule.ɵfac = function VerifyPageRoutingModule_Factory(t) {
        return new (t || VerifyPageRoutingModule)();
      };

      VerifyPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: VerifyPageRoutingModule
      });
      VerifyPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VerifyPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d-es5.js.map