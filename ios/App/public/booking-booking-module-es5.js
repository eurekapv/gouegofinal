(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"], {
    /***/
    "SbcD":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/location/booking/bookingsummary/bookingsummary.module.ts ***!
      \********************************************************************************/

    /*! exports provided: BookingsummaryPageModule */

    /***/
    function SbcD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsummaryPageModule", function () {
        return BookingsummaryPageModule;
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


      var _bookingsummary_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookingsummary-routing.module */
      "XU6S");
      /* harmony import */


      var _bookingsummary_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bookingsummary.page */
      "jcEc");
      /* harmony import */


      var _payment_payment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../payment/payment.module */
      "mDHw");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookingsummaryPageModule = function BookingsummaryPageModule() {
        _classCallCheck(this, BookingsummaryPageModule);
      };

      BookingsummaryPageModule.ɵfac = function BookingsummaryPageModule_Factory(t) {
        return new (t || BookingsummaryPageModule)();
      };

      BookingsummaryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: BookingsummaryPageModule
      });
      BookingsummaryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bookingsummary_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingsummaryPageRoutingModule"], _payment_payment_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BookingsummaryPageModule, {
          declarations: [_bookingsummary_page__WEBPACK_IMPORTED_MODULE_4__["BookingsummaryPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bookingsummary_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookingsummaryPageRoutingModule"], _payment_payment_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
          exports: [_bookingsummary_page__WEBPACK_IMPORTED_MODULE_4__["BookingsummaryPage"]]
        });
      })();
      /***/

    },

    /***/
    "WMyO":
    /*!**********************************************************!*\
      !*** ./src/app/pages/location/booking/booking.module.ts ***!
      \**********************************************************/

    /*! exports provided: BookingPageModule */

    /***/
    function WMyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPageModule", function () {
        return BookingPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _booking_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booking-routing.module */
      "zyO+");
      /* harmony import */


      var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking.page */
      "ibaT");
      /* harmony import */


      var _bookingsummary_bookingsummary_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bookingsummary/bookingsummary.module */
      "SbcD");
      /* harmony import */


      var src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/auth/verify/verify.module */
      "fFCB");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../auth/new-login/new-login.module */
      "S8DX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookingPageModule = function BookingPageModule() {
        _classCallCheck(this, BookingPageModule);
      };

      BookingPageModule.ɵfac = function BookingPageModule_Factory(t) {
        return new (t || BookingPageModule)();
      };

      BookingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: BookingPageModule
      });
      BookingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_2__["BookingPageRoutingModule"], _bookingsummary_bookingsummary_module__WEBPACK_IMPORTED_MODULE_4__["BookingsummaryPageModule"], src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_7__["NewLoginPageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BookingPageModule, {
          declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_2__["BookingPageRoutingModule"], _bookingsummary_bookingsummary_module__WEBPACK_IMPORTED_MODULE_4__["BookingsummaryPageModule"], src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _auth_new_login_new_login_module__WEBPACK_IMPORTED_MODULE_7__["NewLoginPageModule"]]
        });
      })();
      /***/

    },

    /***/
    "XU6S":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/location/booking/bookingsummary/bookingsummary-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: BookingsummaryPageRoutingModule */

    /***/
    function XU6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsummaryPageRoutingModule", function () {
        return BookingsummaryPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bookingsummary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookingsummary.page */
      "jcEc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _bookingsummary_page__WEBPACK_IMPORTED_MODULE_1__["BookingsummaryPage"]
      }];

      var BookingsummaryPageRoutingModule = function BookingsummaryPageRoutingModule() {
        _classCallCheck(this, BookingsummaryPageRoutingModule);
      };

      BookingsummaryPageRoutingModule.ɵfac = function BookingsummaryPageRoutingModule_Factory(t) {
        return new (t || BookingsummaryPageRoutingModule)();
      };

      BookingsummaryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BookingsummaryPageRoutingModule
      });
      BookingsummaryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookingsummaryPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "das9":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/payment-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PaypalPageRoutingModule */

    /***/
    function das9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalPageRoutingModule", function () {
        return PaypalPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment.page */
      "uV3x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_1__["PaymentPage"]
      }];

      var PaypalPageRoutingModule = function PaypalPageRoutingModule() {
        _classCallCheck(this, PaypalPageRoutingModule);
      };

      PaypalPageRoutingModule.ɵfac = function PaypalPageRoutingModule_Factory(t) {
        return new (t || PaypalPageRoutingModule)();
      };

      PaypalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PaypalPageRoutingModule
      });
      PaypalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaypalPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ibaT":
    /*!********************************************************!*\
      !*** ./src/app/pages/location/booking/booking.page.ts ***!
      \********************************************************/

    /*! exports provided: BookingPage */

    /***/
    function ibaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPage", function () {
        return BookingPage;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/imdb/slotweek.model */
      "L1/s");
      /* harmony import */


      var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/prenotazionepianificazione.model */
      "FAI+");
      /* harmony import */


      var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/prenotazione.model */
      "hXF6");
      /* harmony import */


      var _bookingsummary_bookingsummary_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bookingsummary/bookingsummary.page */
      "jcEc");
      /* harmony import */


      var src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/pages/auth/new-login/new-login.page */
      "uVj7");
      /* harmony import */


      var _auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../auth/verify/verify.page */
      "9F3y");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_sport_scroll_sport_scroll_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/components/sport-scroll/sport-scroll.component */
      "/tcz");
      /* harmony import */


      var _shared_components_campi_scroll_campi_scroll_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/components/campi-scroll/campi-scroll.component */
      "TOtl");
      /* harmony import */


      var _shared_components_calendarscroll_calendarscroll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../shared/components/calendarscroll/calendarscroll.component */
      "3U+j");
      /* harmony import */


      var _shared_components_slottime_slottime_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../shared/components/slottime/slottime.component */
      "xaSw");
      /* harmony import */


      var _shared_components_footbooked_footbooked_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../shared/components/footbooked/footbooked.component */
      "bmv8");

      var _c0 = ["sliderCampi"];

      function BookingPage_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-sport-scroll", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sportChanged", function BookingPage_div_7_Template_app_sport_scroll_sportChanged_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r4.onChangeSport($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "app-campi-scroll", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("campoChanged", function BookingPage_div_7_Template_app_campi_scroll_campoChanged_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r6.onChangeCampo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedSport", ctx_r1.selectedSport)("sportList", ctx_r1.listLocationSport);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedCampo", ctx_r1.selectedCampo)("campiList", ctx_r1.availableFields)("canChoose", ctx_r1.ricevuti && ctx_r1.bookable)("selectedLocation", ctx_r1.selectedLocation);
        }
      }

      function BookingPage_div_9_div_2_div_1_ion_spinner_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-spinner", 16);
        }
      }

      function BookingPage_div_9_div_2_div_1_ion_col_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-slottime", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clickSlot", function BookingPage_div_9_div_2_div_1_ion_col_7_Template_app_slottime_clickSlot_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);

            return ctx_r14.myClickSlot($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mySlot", slot_r13)("readOnly", ctx_r12.actualSlotDay._TEMPLATELOCK);
        }
      }

      function BookingPage_div_9_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "SCEGLI L'ORARIO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BookingPage_div_9_div_2_div_1_ion_spinner_4_Template, 1, 0, "ion-spinner", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ion-row", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BookingPage_div_9_div_2_div_1_ion_col_7_Template, 2, 2, "ion-col", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.actualSlotDay._TEMPLATELOCK);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r9.actualSlotDay.SLOTTIMES);
        }
      }

      function BookingPage_div_9_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Prenotazione non effettuabile");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Cercare slot liberi modificando");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "data, attivit\xE0 o struttura");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function BookingPage_div_9_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BookingPage_div_9_div_2_div_1_Template, 8, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BookingPage_div_9_div_2_div_2_Template, 10, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.actualSlotDay.APERTOCHIUSO);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.actualSlotDay.APERTOCHIUSO);
        }
      }

      function BookingPage_div_9_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Prenotazione");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "non disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function BookingPage_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-calendarscroll", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChangeActiveDay", function BookingPage_div_9_Template_app_calendarscroll_onChangeActiveDay_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r16.onChangeBookDay($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BookingPage_div_9_div_2_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BookingPage_div_9_div_3_Template, 5, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("activeDay", ctx_r2.actualBookDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.ricevuti && ctx_r2.bookable);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r2.bookable);
        }
      }

      function BookingPage_ion_footer_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-footbooked", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clickPrenota", function BookingPage_ion_footer_10_Template_app_footbooked_clickPrenota_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r18.myClickPrenota($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("myPrenotaPianifica", ctx_r3.actualPlanning);
        }
      }

      var BookingPage = /*#__PURE__*/function () {
        function BookingPage(router, startService, navController, loadingController, toastCtrl, modalCtrl, actionSheetController, alertController) {
          _classCallCheck(this, BookingPage);

          this.router = router;
          this.startService = startService;
          this.navController = navController;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.actionSheetController = actionSheetController;
          this.alertController = alertController;
          this.idLocation = '';
          this.versionBooking = 'manual'; //Versione di Booking (Automatico, Manuale)

          this.listLocationSport = []; //Lista Sport presenti sulla Location

          this.bookable = false; //Ho ricevuto dei campi, quindi potrei effettuare prenotazioni

          this.templateWeekSlot = new src_app_models_imdb_slotweek_model__WEBPACK_IMPORTED_MODULE_5__["SlotWeek"](); //Template con gli slotTime settimanali relativi alla location

          this.actualBookDay = new Date(); //Giorno di Pianificazione

          this.actualCaptionButtonSelected = ''; //E' il testo visualizato sul bottone selezionato
          //Singola Data Pianificata

          this.actualPlanning = new src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__["PrenotazionePianificazione"](); //E' la pianificazione attuale che l'utente vorrebbe prenotare

          this.availableFields = []; //un array dei soli campi per lo sport selezionato

          this.indexCount = 0;
          this.showExtraToolbar = true;
          this.isOnAppleSystem = false; //Sta girando su sistemi IOS (Introdotto per animare diversamente la toolbar Hide)
          //Creo un documento di Pianificazione

          this.actualPlanning = new src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__["PrenotazionePianificazione"]();
          this.myDebug('Constructor Booking Page');
          this.myDebug(this.actualPlanning); //Ricavo la piattaforma di esecuzione
          //in HTML sul content viene usata una direttiva per una animazione diversa della toolbar in Ios

          this.isOnAppleSystem = this.startService.isOnAppleSystem;
        } // Problematica dell'animazione toolbar
        //https://github.com/ionic-team/ionic-framework/issues/17728
        //https://github.com/ionic-team/ionic-framework/pull/17224

        /**
         *
         * @param element Element
         */


        _createClass(BookingPage, [{
          key: "myDebug",
          value: function myDebug(element) {
            var actDebug = false;

            if (actDebug) {
              console.log(element);
            }
          }
          /**
           * Crea l'array con i soli Campi dove è possibile effettuare l'attività selezionata
           */

        }, {
          key: "updateAvailableFields",
          value: function updateAvailableFields() {
            var _this = this;

            if (this.selectedLocation) {
              if (this.selectedLocation.CAMPO) {
                this.availableFields = this.selectedLocation.CAMPO.filter(function (el) {
                  var trovato = false;

                  if (_this.selectedSport) {
                    var _iterator = _createForOfIteratorHelper(el.CAMPOSPORT),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var iterator = _step.value;

                        if (iterator.IDSPORT == _this.selectedSport.ID) {
                          trovato = true;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  return trovato;
                });
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loadingController.create({
              message: 'Caricamento',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (loading) {
              _this2.myDebug('Presentazione Loading');

              loading.present();
              _this2.ricevuti = false;
              _this2.bookable = false; //Controllo dei parametri del router

              _this2.router.paramMap.subscribe(function (param) {
                _this2.myDebug('Controllo Routing locationId');

                if (param.has('locationId')) {
                  _this2.myDebug('locationId trovata'); //Location sulla barra


                  _this2.idLocation = param.get('locationId');

                  if (_this2.idLocation) {
                    _this2.myDebug('locationId: ' + _this2.idLocation); //Chiedo al server gli Sport praticati nella location


                    _this2.myDebug('Richiesta al server Sport Praticati nella location ');

                    _this2.startService.requestLocationSport(_this2.idLocation); //Mi sottoscrivo alla ricezione degli Sport


                    _this2.sottoscrizioneListaSport(); // Chiedo al server Location, Campi e CampiSport (3 Livelli)


                    _this2.myDebug('Richiesta al server Location, Campi e CampiSport ');

                    _this2.startService.requestLocationByID(_this2.idLocation, 3).then(function () {
                      _this2.ricevuti = true;
                      loading.dismiss();
                    }, function () {
                      loading.dismiss();

                      _this2.showMessage('Errore di connessione');
                    }); //Mi sottoscrivo alla ricezione


                    _this2.sottoscrizioneLocationCampi(); //Controllo dell'utente loggato


                    _this2.subUserLogged = _this2.startService.utenteLogged.subscribe(function (element) {
                      _this2.userLogged = element;
                    }); //Richiedo lo User

                    _this2.subDocUtente = _this2.startService.utente.subscribe(function (element) {
                      _this2.docUtente = element;
                    }); // Mi metto in ascolto di variazioni di Slot attuale

                    _this2.subActualSlotDay = _this2.startService.docOccupazione.subscribe(function (elActualDay) {
                      _this2.myDebug('Variazione Slot Day');

                      _this2.actualSlotDay = elActualDay;

                      _this2.myDebug(elActualDay);
                    }); //Ascolto documento di Prenotazione
                    //Sia la prima volta che entra nel OnInit
                    //Esegue tutte le volte che la prenotazione cambia

                    _this2.subActivePrenotazione = _this2.startService.activePrenotazione.subscribe(function (elPrenotazione) {
                      _this2.activePrenotazione = elPrenotazione;
                    });
                  } else {
                    // Dico che non posso prenotare
                    _this2.bookable = false;
                    _this2.ricevuti = true;
                  }
                } else {
                  //Rimando alla HOME
                  _this2.navController.navigateForward(['/']);
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subSelectedLocation) {
              this.subSelectedLocation.unsubscribe();
            }

            if (this.subUserLogged) {
              this.subUserLogged.unsubscribe();
            }

            if (this.subDocUtente) {
              this.subDocUtente.unsubscribe();
            }

            if (this.subActualSlotDay) {
              this.subActualSlotDay.unsubscribe();
            }

            if (this.subActivePrenotazione) {
              this.subActivePrenotazione.unsubscribe();
            }

            if (this.subListLocationSport) {
              this.subListLocationSport.unsubscribe();
            }
          }
          /*
          Sottoscrivo alla ricezione di Location e Campi
          */

        }, {
          key: "sottoscrizioneLocationCampi",
          value: function sottoscrizioneLocationCampi() {
            var _this3 = this;

            this.myDebug('Sottoscrizione Location, Campi e CampiSport ');
            this.subSelectedLocation = this.startService.activeLocation.subscribe(function (dataLocation) {
              // Chiedo la Location
              _this3.selectedLocation = dataLocation;
              /* Se ho la location */

              if (_this3.selectedLocation && !_this3.selectedLocation.do_inserted && _this3.selectedLocation.CAMPO.length !== 0) {
                _this3.myDebug('Ricezione Location, Campi e CampiSport '); //RECUPERO IL TEMPLATE WEEK SLOT TIME


                _this3.getTemplateWeek(_this3.selectedLocation); //Recupero Campi, e Occupazioni


                _this3.onRefresh();
              } else {
                if (_this3.selectedLocation && _this3.selectedLocation.CAMPO) {
                  _this3.myDebug('Location');

                  _this3.myDebug(_this3.selectedLocation);

                  _this3.myDebug(_this3.selectedLocation.CAMPO);
                } else {
                  _this3.myDebug('Non ho la location oppure i campi ');
                }
              }
            });
          }
          /**
           * Chiamata per sottoscriversi alla ricezione degli Sport praticati nella location
           */

        }, {
          key: "sottoscrizioneListaSport",
          value: function sottoscrizioneListaSport() {
            var _this4 = this;

            //Mi sottoscrivo alla ricezione degli Sport praticati
            this.subListLocationSport = this.startService.listLocationSport.subscribe(function (resultData) {
              //Popolo Lista degli Sport
              _this4.listLocationSport = resultData; //Prendo il primo e lo seleziono

              if (_this4.listLocationSport) {
                if (_this4.listLocationSport.length !== 0) {
                  _this4.selectedSport = _this4.listLocationSport[0];
                } else {
                  _this4.selectedSport = undefined;
                }
              } else {
                _this4.selectedSport = undefined;
              } //Chiedo di eseguire il refresh dell'Interfaccia, dove recupero i campi legati allo sport e le occupazioni


              _this4.onRefresh();
            });
          }
          /**
           * Manual o Auto
           * @param value Modifica della versione
           */

        }, {
          key: "onChangeVersion",
          value: function onChangeVersion(value) {
            this.versionBooking = value;
          }
          /**
           * Evento che occorre quando cambia lo Sport Selezionato
           * 1) Attribuzione di una nuova collection di Campi
           * 2) this.selectedCampo viene impostato al 1 Campo disponibile
           * 3) Rielaborazione degli Slot e di tutto il resto
           */

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            if (this.selectedSport) {
              //this.selectedLocation è la Location, che contiene la Collection dei Campi, con dentro i CampiSport
              this.availableFields = this.selectedLocation.getAvalaibleFields(this.selectedSport.ID); //Seleziono come Campo il primo disponibile

              if (this.availableFields.length !== 0) {
                this.selectedCampo = this.availableFields[0];
              }

              if (this.selectedCampo) {
                this.myDebug('Richiesto Refresh success, getOccupazioni');
                this.bookable = this.selectedCampo ? true : false; //Richiesta delle nuove occupazioni e impostazione nuova Pianificazione

                this.getOccupazioni();
              } else {
                this.myDebug('Richiesto Refresh failed NO SELECTED CAMPO');
              }
            } else {
              this.myDebug('Richiesto Refresh failed NO SELECTED SPORT');
            }
          }
          /**
           * E' stato richiesta la modifica del campo Selezionato
           * @param newCampo nuovo Campo
           */

        }, {
          key: "onChangeCampo",
          value: function onChangeCampo(newCampo) {
            this.selectedCampo = newCampo; //Richiedo le occupazioni

            this.getOccupazioni();
          }
          /**
           * Ha cambiato il campo nello Slide
           */

        }, {
          key: "onDidChangeCampo",
          value: function onDidChangeCampo(e) {
            var _this5 = this;

            //Indice Slide è Zero Base
            this.sliderCampi.getActiveIndex().then(function (index) {
              //Ricavo il campo selezionato
              if (index <= _this5.availableFields.length) {
                _this5.selectedCampo = _this5.availableFields[index]; //Richiedo le occupazioni

                _this5.getOccupazioni();
              }
            });
          }
          /**
           * E' stata selezionata un'altra data
           * @param newDate Nuova Data
           */

        }, {
          key: "onChangeBookDay",
          value: function onChangeBookDay(newDate) {
            this.actualBookDay = newDate; //Richiedo le occupazioni

            this.getOccupazioni();
          }
          /**
           * Al cambio dello Sport devo rieseguire un Refresh della UI
           * @param newSport Oggetto del Nuovo Sport
           */

        }, {
          key: "onChangeSport",
          value: function onChangeSport(newSport) {
            if (newSport) {
              this.selectedSport = newSport;
              this.onRefresh();
            }
          }
          /**
           * Recupera il template Week Slot Time per la generazione degli slot di prenotazioni
           * @param docLocation Location prenotazione
           */

        }, {
          key: "getTemplateWeek",
          value: function getTemplateWeek(docLocation) {
            this.templateWeekSlot = this.startService.getTemplateSlotWeek(docLocation);
          }
          /**
           * Recupero le occupazioni quando
           * 1) CAMBIA IL CAMPO
           * 2) CAMBIA IL GIORNO
           *
           * Procedura:
           * a) Viene cercato nel templateWeek lo SlotDay e viene applicata una copia a actualSlotDay
           * b) Viene chiamato il servizio passando actualSlotDay
           * c) il servizio chiama il server, e mi ritorna actualSlotDay come Observable
           *
           */

        }, {
          key: "getOccupazioni",
          value: function getOccupazioni() {
            var _this6 = this;

            //Step a) Chiedo al TemplateWeek una copia del Template di una Giornata (TRUE-> Chiedo di aggiornare la data su tutti i record figli SLOTTIME)
            this.actualSlotDay = this.templateWeekSlot.getCopySlotDay(this.actualBookDay, true);
            this.myDebug('Richiesta Slot Occupazioni'); //Step b) Chiamo il servizio

            this.startService.requestSlotOccupazioni(this.actualSlotDay, this.selectedLocation, this.selectedCampo, this.actualBookDay).then(function () {
              //Per gli orario del centro saremmo aperti (come giornata)
              if (_this6.actualSlotDay.APERTOCHIUSO == true) {
                //Controlliamo se per caso è un giorno FESTIVO o di chiusura generale
                //this.actualBookDay è il giorno
                var isFestivita = _this6.startService.isFestivita(_this6.actualBookDay, _this6.selectedLocation.IDAREAOPERATIVA, _this6.selectedLocation.ID, _this6.selectedCampo.ID);

                if (isFestivita) {
                  _this6.actualSlotDay.APERTOCHIUSO = false;
                } else {
                  _this6.actualSlotDay.APERTOCHIUSO = true;
                }
              }
            }); //Step c) Creo un nuovo oggetto di prenotazione

            this.actualPlanning = new src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_6__["PrenotazionePianificazione"](); //Ora tutto avviene in modalità asincrona
          }
          /**
           * E' stato cliccato uno slot tempo
           * @param slotClicked SlotTime Cliccato
           */

        }, {
          key: "myClickSlot",
          value: function myClickSlot(slotClicked) {
            if (slotClicked) {
              if (slotClicked.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_11__["StatoSlot"].contattare) {
                //Mostro un alert per telefonare alla struttura
                this.showAlertContattaStruttura();
              } else {
                //Cambio il Planning attuale visualizzato
                this.actualPlanning = this.actualSlotDay.changeSelectionSlotTime(slotClicked);
              }
            }
          }
          /**
           * Mostra un alert per contattare la struttura
           */

        }, {
          key: "showAlertContattaStruttura",
          value: function showAlertContattaStruttura() {
            var _this7 = this;

            var myButton = [];
            var myMessage = '';
            myMessage = 'Per la prenotazione dello slot è necessario contattare la struttura telefonicamente';
            myButton = [{
              text: 'OK',
              role: 'cancel'
            }];

            if (this.selectedLocation.TELEFONO && this.selectedLocation.TELEFONO.length > 0) {
              myMessage = myMessage + ' al ' + this.selectedLocation.TELEFONO;

              if (!this.startService.isDesktop) {
                myButton = [{
                  text: 'OK',
                  role: 'cancel'
                }, {
                  text: 'Chiama',
                  handler: function handler() {
                    var number = _this7.selectedLocation.TELEFONO;
                    var link = document.createElement('a');
                    link.setAttribute('href', "tel:".concat(number));
                    link.click();
                  }
                }];
              }
            }

            this.alertController.create({
              header: 'Contattare la struttura',
              subHeader: 'per richiedere informazioni',
              message: myMessage,
              buttons: myButton
            }).then(function (elAlert) {
              elAlert.present();
            });
          }
          /**
           * il Footer contiene la prenotazione attiva che uno sta implementando
           * Viene visualizzato solo se c'e' una prenotazione attiva
           * cioè se sono presenti le DATAORAINIZIO e DATAORAFINE
           */

        }, {
          key: "visibleFooter",
          value: function visibleFooter() {
            var visible = false;

            if (this.actualPlanning) {
              if (this.actualPlanning.DATAORAINIZIO && this.actualPlanning.DATAORAFINE) {
                visible = true;
              }
            }

            return visible;
          }
          /**
           * Evento Click sul pulsante di prenotazione presente nel footer
           */

        }, {
          key: "myClickPrenota",
          value: function myClickPrenota(docPianificazione) {
            //Non solo loggato, devo loggarmi
            if (!this.userLogged) {
              //Prima di aprire la pagina di login
              //impostare nel servizio Start forceIdArea = 
              console.log('Forzo l\'Area');
              this.startService.setIdAreaForcedForLogin(); //Ora preparo e creo la pagina di Login

              this.modalCtrl.create({
                component: src_app_pages_auth_new_login_new_login_page__WEBPACK_IMPORTED_MODULE_9__["NewLoginPage"]
              }).then(function (modal) {
                modal.present();
              });
            } else {
              var paramsVerifica;
              paramsVerifica = this.docUtente.getParamsVerifica(this.startService.actualStartConfig.gruppo);

              if (paramsVerifica) {
                //se ci sono parametri, significa che devo chiamare la pagina di verifica
                this.modalCtrl.create({
                  component: _auth_verify_verify_page__WEBPACK_IMPORTED_MODULE_10__["VerifyPage"],
                  componentProps: {
                    params: paramsVerifica
                  }
                }).then(function (elModal) {
                  elModal.present();
                });
              } else {
                //sono loggato e l'account è completo; posso prenotare
                this.execPrenotazione(docPianificazione);
              }
            }
          }
        }, {
          key: "execPrenotazione",
          value: function execPrenotazione(docPianificazione) {
            //Inizializzo con i dati di Prenotazione
            this.startService.initActivePrenotazione(this.selectedLocation.IDAREAOPERATIVA);
            this.startService.setIDUtenteActivePrenotazione(this.docUtente); //Impostiamo Location e Campo

            docPianificazione.IDAREAOPERATIVA = this.selectedLocation.IDAREAOPERATIVA;
            docPianificazione.IDLOCATION = this.selectedLocation.ID;
            docPianificazione.IDCAMPO = this.selectedCampo.ID;
            docPianificazione.IDSPORT = this.selectedSport.ID;
            docPianificazione._DESCRCAMPO = this.selectedCampo.DENOMINAZIONE;
            docPianificazione._DESCRSPORT = this.selectedSport.DENOMINAZIONE; //Indico al servizio di memorizzarsi la Pianificazione per poterla passare alle altre pagine

            this.startService.setPianificazioneSingola(docPianificazione); //Indico al servizio di mantenere (non Observable) le info del campo selezionato

            this.startService.setSelectedCampoPrenotazione(this.selectedCampo); //Chiedo al server il calcolo del totale

            this.calcolaTotale();
          }
          /**
          * Richiede al server il calcolo degli importi della prenotazione
          */

        }, {
          key: "calcolaTotale",
          value: function calcolaTotale() {
            var _this8 = this;

            this.loadingController.create({
              message: 'Verifica Prenotazione...',
              spinner: 'circular'
            }).then(function (elLoading) {
              //Mostro il loading
              elLoading.present(); //Chiedo al server di calcolare l'importo

              _this8.startService.requestImportoPrenotazione().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(_this8.handleError)).subscribe(function (resultData) {
                //Chiudo il loading
                elLoading.dismiss(); //Converto il documento ricevuto

                var newPrenotazione = src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_7__["Prenotazione"].getPrenotazioneFromJson(resultData); // Risposta corretta del server

                if (newPrenotazione.ISVALID === true) {
                  var myPianificazione = newPrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];
                  myPianificazione._DESCRCAMPO = _this8.selectedCampo.DENOMINAZIONE;
                  myPianificazione._DESCRSPORT = _this8.selectedSport.DENOMINAZIONE; //Invio al servizio il documento

                  _this8.startService.setActivePrenotazione(newPrenotazione); //Procedo al passaggio di finalizzazione


                  _this8.goToFinalizza();
                } else {
                  var msg = newPrenotazione.MSGINVALID ? newPrenotazione.MSGINVALID : 'Errore comunicazione imprevisto';

                  _this8.showMessage(msg);
                }
              }, function (error) {
                //Chiudo il loading
                elLoading.dismiss();

                _this8.showMessage(error);
              });
            });
          }
          /**
           * E' tutto a posto e posso spostarmi alla pagina di Finalizza Prenotazione
           */

        }, {
          key: "goToFinalizza",
          value: function goToFinalizza() {
            /* VERSIONE MODALE */
            this.modalCtrl.create({
              component: _bookingsummary_bookingsummary_page__WEBPACK_IMPORTED_MODULE_8__["BookingsummaryPage"],
              componentProps: {
                bookId: this.activePrenotazione.ID,
                locationId: this.selectedLocation.ID
              }
            }).then(function (modal) {
              return modal.present();
            });
            /* VERSIONE PAGINA FULLSCREEN
            this.navController.navigateForward(['/','location',
                                                      this.selectedLocation.ID,
                                                    'booking','bookingsummary',
                                                    this.activePrenotazione.ID]);
            */
          }
          /**
           * Visualizza un messaggio come Toast
           * @param message Messaggio da mostrare
           */

        }, {
          key: "showMessage",
          value: function showMessage(message) {
            //Creo un messaggio
            this.toastCtrl.create({
              message: message,
              duration: 3000
            }).then(function (tstMsg) {
              tstMsg.present();
            });
          }
          /**
           * Gestore errori http
           * @param error Errore http rilevato
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('Errore di chiamata:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Errore Backend Codice ".concat(error.status, ", ") + "Body: ".concat(error.error));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Si sono verificati errori. Riprovare AHIME.');
          }
        }, {
          key: "onClickChangeCampo",
          value: function onClickChangeCampo() {
            var _this9 = this;

            //creo i bottoni
            var buttons = [];
            this.availableFields.forEach(function (element) {
              var btn = {
                text: element.DENOMINAZIONE,
                icon: 'location',
                handler: function handler() {
                  _this9.selectedCampo = element;

                  _this9.getOccupazioni();

                  var newPosition = _this9.availableFields.findIndex(function (el) {
                    return el.ID == _this9.selectedCampo.ID;
                  });

                  _this9.sliderCampi.slideTo(newPosition);
                }
              };
              buttons.push(btn);
            }); //ora che ho i bottoni, creo l'actionsheet e lo presento

            this.actionSheetController.create({
              header: 'Scegli il campo',
              buttons: buttons
            }).then(function (elActionSheet) {
              elActionSheet.present();
            });
          }
        }]);

        return BookingPage;
      }();

      BookingPage.ɵfac = function BookingPage_Factory(t) {
        return new (t || BookingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
      };

      BookingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: BookingPage,
        selectors: [["app-booking"]],
        viewQuery: function BookingPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sliderCampi = _t.first);
          }
        },
        decls: 11,
        vars: 3,
        consts: [["headBook", ""], ["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["class", "custom-toolbar", 4, "ngIf"], [4, "ngIf"], [1, "custom-toolbar"], [3, "selectedSport", "sportList", "sportChanged"], [3, "selectedCampo", "campiList", "canChoose", "selectedLocation", "campoChanged"], [3, "activeDay", "onChangeActiveDay"], ["class", "nofind-cnt", 4, "ngIf"], [1, "item-transparent"], [1, "ion-padding-horizontal"], ["name", "circular", "color", "primary", 4, "ngIf"], [1, "ion-no-margin", "ion-no-padding"], ["class", "ion-no-margin ion-no-padding", "size", "6", "sizeXl", "3", "sizeLg", "4", "sizeMd", "6", "sizeSm", "12", "sizeXs", "12", 4, "ngFor", "ngForOf"], ["name", "circular", "color", "primary"], ["size", "6", "sizeXl", "3", "sizeLg", "4", "sizeMd", "6", "sizeSm", "12", "sizeXs", "12", 1, "ion-no-margin", "ion-no-padding"], [3, "mySlot", "readOnly", "clickSlot"], [1, "nofind-cnt"], [3, "myPrenotaPianifica", "clickPrenota"]],
        template: function BookingPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Prenota");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BookingPage_div_7_Template, 3, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BookingPage_div_9_Template, 4, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BookingPage_ion_footer_10_Template, 2, 1, "ion-footer", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.ricevuti);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.ricevuti);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.visibleFooter());
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _shared_components_sport_scroll_sport_scroll_component__WEBPACK_IMPORTED_MODULE_14__["SportScrollComponent"], _shared_components_campi_scroll_campi_scroll_component__WEBPACK_IMPORTED_MODULE_15__["CampiScrollComponent"], _shared_components_calendarscroll_calendarscroll_component__WEBPACK_IMPORTED_MODULE_16__["CalendarscrollComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _shared_components_slottime_slottime_component__WEBPACK_IMPORTED_MODULE_17__["SlottimeComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _shared_components_footbooked_footbooked_component__WEBPACK_IMPORTED_MODULE_18__["FootbookedComponent"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light-tint);\n}\n\nion-segment[_ngcontent-%COMP%] {\n  --background: white;\n}\n\n.item-campo[_ngcontent-%COMP%], .item-transparent[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light-tint);\n}\n\n.item-campo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .item-transparent[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\nion-slide[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.label-header[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\napp-sport-scroll[_ngcontent-%COMP%] {\n  --background: white;\n}\n\n.nofind-cnt[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  border-top: var(--ion-color-tertiary) solid 2px;\n}\n\n.custom-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0FBQ0o7O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBSUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0NBQUE7QUFGRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEYiLCJmaWxlIjoiYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICB9XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0tY2FtcG8sIC5pdGVtLXRyYW5zcGFyZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuXHJcbiAgaDYge1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4ubGFiZWwtaGVhZGVyXHJcbntcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5hcHAtc3BvcnQtc2Nyb2xsIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubm9maW5kLWNudHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSBzb2xpZCAycHg7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "jcEc":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/location/booking/bookingsummary/bookingsummary.page.ts ***!
      \******************************************************************************/

    /*! exports provided: BookingsummaryPage */

    /***/
    function jcEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsummaryPage", function () {
        return BookingsummaryPage;
      });
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/prenotazione.model */
      "hXF6");
      /* harmony import */


      var src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/payment-process.model */
      "plgS");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_app_pages_payment_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/payment/payment.page */
      "uV3x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_player_number_player_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/components/player-number/player-number.component */
      "JI/N");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/components/payment-mode/payment-mode.component */
      "wyWT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Browser;

      var BookingsummaryPage = /*#__PURE__*/function () {
        function BookingsummaryPage(startService, navCtrl, loadingController, toastCtrl, navParams, modalCtrl, platform, alertCtrl) {
          _classCallCheck(this, BookingsummaryPage);

          this.startService = startService;
          this.navCtrl = navCtrl;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.platform = platform;
          this.alertCtrl = alertCtrl;
          this.idPrenotazione = '';
          this.idLocation = ''; //Viene effettuato il controllo tra Id Prenotazione e Id del bookId

          this.checkBookId = true; //accettazione delle condizioni di vendita

          this.disclaimer = false; //Recupero dell'area selezionata

          this.docArea = this.startService.areaSelectedValue; //Impostazione tipologie pagamento

          this.setListPayment();
        }

        _createClass(BookingsummaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.disclaimer = false;
            var result = true;
            var errMessage = ''; //#region MODALE

            /* VERSIONE MODALE*/

            this.idLocation = this.navParams.get('locationId');

            if (this.idLocation.length !== 0) {
              // Chiedo Location
              this.selectedLocation = this.startService.findLocationByID(this.idLocation);

              if (!this.selectedLocation) {
                result = false;
                errMessage = 'Location null';
              }
            } else {
              result = false;
              errMessage = 'idLocation Empty';
            }

            if (result) {
              this.idPrenotazione = this.navParams.get('bookId'); //IDPrenotazione presente

              if (this.idPrenotazione) {
                //Recupero la prenotazione 
                this.recuperaPrenotazione();
              } else {
                result = false;
              }
            }

            if (result) {
              //Controllo dell'utente loggato
              this.subUserLogged = this.startService.utenteLogged.subscribe(function (element) {
                _this10.userLogged = element;
              }); //Richiedo lo User

              this.subDocUtente = this.startService.utente.subscribe(function (element) {
                _this10.docUtente = element;
              }); //Recupero il campo selezionato

              this.selectedCampo = this.startService.getSelectedCampoPrenotazione();
            } //Si sono verificati errori


            if (!result) {
              errMessage = 'ngOnInit Failed ' + errMessage;
              console.error(errMessage);
              this.onBookIdWrong();
            } //#endregion

          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subUserLogged) {
              this.subUserLogged.unsubscribe();
            }

            if (this.subActivePrenotazione) {
              this.subActivePrenotazione.unsubscribe();
            }

            if (this.subDocUtente) {
              this.subDocUtente.unsubscribe();
            }

            if (this.subPaymentResult) {
              this.subPaymentResult.unsubscribe();
            }
          } //Mi sottoscrivo alla ricezione della Prenotazione

        }, {
          key: "recuperaPrenotazione",
          value: function recuperaPrenotazione() {
            var _this11 = this;

            this.subActivePrenotazione = this.startService.activePrenotazione.subscribe(function (elPrenotazione) {
              //Recupero la prenotazione
              _this11.activePrenotazione = elPrenotazione; //Recupero la Pianificazione dentro alla Prenotazione

              _this11.docPianificazione = _this11.activePrenotazione.getPianificazione(); //Probabilmente è la prima richiesta e devo controllare l'entrata
              //tramite la congruenza del BookId e IDPrenotazione

              if (_this11.checkBookId) {
                //Spegno il controllo
                _this11.checkBookId = false; //Id Book è diverso da quello in arrivo dalla prenotazione

                if (_this11.activePrenotazione == null) {
                  console.error('activePrenotazione null');

                  _this11.onBookIdWrong();
                } else if (_this11.idPrenotazione != _this11.activePrenotazione.ID) {
                  console.error('idPrenotazione <> activePrenotazione.ID');
                  console.error("idPrenotazione: ".concat(_this11.idPrenotazione, " - activePrenotazione ").concat(_this11.activePrenotazione.ID));

                  _this11.onBookIdWrong();
                } else if (_this11.docPianificazione == null) {
                  console.error('docPianificazione null');

                  _this11.onBookIdWrong();
                }
              }
            });
          }
          /**
           * Book ID Errato devo uscire
           */

        }, {
          key: "onBookIdWrong",
          value: function onBookIdWrong() {
            this.showMessage('Errore dati prenotazione');
            this.closeModal();
          }
          /**
           * Chiude questa videata modale
           */

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          } //E' cambiato il numero dei giocatori

        }, {
          key: "onChangedNumPlayer",
          value: function onChangedNumPlayer(nPlayer) {
            //Memorizzo il numero Partecipanti
            this.docPianificazione.NUMPARTECIPANTI = nPlayer;
            this.calcolaTotale();
          } //Effettua le operazioni per il calcolo del totale

        }, {
          key: "calcolaTotale",
          value: function calcolaTotale() {
            var _this12 = this;

            this.loadingController.create({
              message: 'Ricalcolo importo...',
              spinner: 'circular'
            }).then(function (elLoading) {
              //Mostro il loading
              elLoading.present(); //Contatto il server 

              _this12.startService.requestImportoPrenotazione().subscribe(function (resultData) {
                //Chiudo il loading
                elLoading.dismiss(); //Converto il documento ricevuto

                var newPrenotazione = src_app_models_prenotazione_model__WEBPACK_IMPORTED_MODULE_2__["Prenotazione"].getPrenotazioneFromJson(resultData); //Invio al servizio il documento

                _this12.startService.setActivePrenotazione(newPrenotazione); //Se non è valida visualizzo un messsaggio


                if (!newPrenotazione.ISVALID) {
                  _this12.showMessage(newPrenotazione.MSGINVALID);
                }
              }, function (error) {
                //Chiudo il loading
                elLoading.dismiss();

                _this12.showMessage(error);
              });
            });
          } //Ritorna un indirizzo Location da mostrare

        }, {
          key: "getAddressLocation",
          value: function getAddressLocation() {
            var value = '';

            if (this.selectedLocation) {
              if (this.selectedLocation.INDIRIZZO && this.selectedLocation.INDIRIZZO.length !== 0) {
                value = this.selectedLocation.INDIRIZZO;
              } else if (this.selectedLocation.COMUNE && this.selectedLocation.COMUNE.length !== 0) {
                value = this.selectedLocation.COMUNE;
              }
            }

            return value;
          }
          /**
           * Pressione del pulsante in interfaccia di conferma
           */

        }, {
          key: "onConfirm",
          value: function onConfirm() {
            //Vado al pagamento
            this.onExecPayment();
          }
          /**
           * Prenotazione salvata nel sistema posso andare via
           */

        }, {
          key: "onAfterSavePrenotazione",
          value: function onAfterSavePrenotazione() {
            this.showMessage('Prenotazione confermata'); //1) Chiudere la modale

            this.closeModal(); //2) Andare alla History sulla scheda

            this.navCtrl.navigateRoot(['historylist/booking', this.activePrenotazione.ID + '-' + this.docPianificazione.ID]);
          } //#region METODI GESTIONE PAGAMENTO

          /**
           * Recupera i metodi di pagamento sulla base dell'Area e popola
           * l'array myListPayment e l'elemento mySelectedPayament
           */

        }, {
          key: "setListPayment",
          value: function setListPayment() {
            //Svuota l'array
            this.myListPayment = []; //Ho il documento dell'Area

            if (this.docArea) {
              this.myListPayment = this.docArea.getPaymentFor(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["SettorePagamentiAttivita"].settorePagamentoPrenotazione);

              if (this.myListPayment && this.myListPayment.length != 0) {
                this.mySelectedPayment = this.myListPayment[0];
              } else {
                this.mySelectedPayment = null;
              }
            }
          }
          /**
           * Ricezione pagamento da utilizzare
           * @param value Valore Pagamento
           */

        }, {
          key: "onPaymentSelected",
          value: function onPaymentSelected(value) {
            this.mySelectedPayment = value;
          }
          /**
           * Cambiato il modo di pagamento
           * @param valPaymentMode Modo di pagamento
           */

        }, {
          key: "onPaymentModeSelected",
          value: function onPaymentModeSelected(valPaymentMode) {
            this.myPaymentMode = valPaymentMode;
          }
          /**
           * Richiesta di esecuzione del pagamento di qualsiasi tipologia
           * 1) Se onSite conclude subito dicendo che va bene
           * 2) Per altre tipologie viene aperta la pagina del pagamento
           *
           */

        }, {
          key: "onExecPayment",
          value: function onExecPayment() {
            var _this13 = this;

            var arModes = [src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PaymentMode"].pagaAdesso, src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PaymentMode"].pagaBonifico, src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PaymentMode"].pagaStruttura]; //Presente un totale da pagare

            if (this.activePrenotazione.TOTALE != 0) {
              //L'utente ha selezionato come pagare
              if (arModes.includes(this.myPaymentMode)) {
                //Pagamento non dentro all'App
                if (this.myPaymentMode == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PaymentMode"].pagaBonifico || this.myPaymentMode == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PaymentMode"].pagaStruttura) {
                  //Creo il risultato del pagamento, passando la modalità
                  var docPaymentResult = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_3__["PaymentProcess"](this.myPaymentMode); // Essendo una modalita che non prevede interazioni app
                  // viene impostato automaticamento il channelPayment 
                  // e il processResult = TRUE
                  //Passo subito al Success

                  this.onPaymentSuccess(docPaymentResult);
                } else {
                  //Qui invece bisogna gestire il pagamento
                  //Preparo un oggetto per processare il pagamento
                  var myCheckoutPayment = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_3__["PaymentProcess"](this.myPaymentMode);
                  myCheckoutPayment.amount = this.activePrenotazione.RESIDUO;
                  myCheckoutPayment.description = 'Pagamento Prenotazione';
                  myCheckoutPayment.currency = 'EUR'; //il channelPayment viene impostato nel componente
                  //esterno che si preoccupa del pagamento
                  //Passo alla modale in paymentData = myCheckoutPayment

                  this.modalCtrl.create({
                    component: src_app_pages_payment_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"],
                    componentProps: {
                      paymentData: myCheckoutPayment,
                      listAreaPaymentSettings: this.myListPayment
                    }
                  }).then(function (elModal) {
                    elModal.present();
                    return elModal.onDidDismiss();
                  }).then(function (returnData) {
                    //recupero il risultato del pagamento
                    var myPaymentResult = returnData['data'];

                    if (myPaymentResult) {
                      //Il Risultato del processo di pagamento è TRUE, posso proseguire
                      if (myPaymentResult.processResult) {
                        //Pagamento avvenuto correttamente
                        _this13.onPaymentSuccess(myPaymentResult);
                      } else {
                        //Pagamento Fallito
                        _this13.onPaymentFailed(myPaymentResult);
                      }
                    } else {
                      //Stranamente non mi ha tornato nulla, quindi il pagamento è fallito
                      myPaymentResult = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_3__["PaymentProcess"](_this13.myPaymentMode);
                      myPaymentResult.processResult = false;
                      myPaymentResult.messageResult = 'Pagamento fallito'; //Pagamento Fallito

                      _this13.onPaymentFailed(myPaymentResult);
                    }
                  });
                }
              } else {
                //Pagamento non selezionato
                this.showMessage('E\' necessario selezionare un pagamento');
              }
            } else {
              this.showMessage('Contattare la struttura. Prenotazioni gratuite concluse');
            }
          }
          /**
           * Pagamento andato a buon fine
           * @param resultPayment Risultato del pagamento
           */

        }, {
          key: "onPaymentSuccess",
          value: function onPaymentSuccess(resultPayment) {
            var _this14 = this;

            //Pagamento corretto
            if (resultPayment && resultPayment.processResult) {
              //Nessuna transazione sembra avvenuta
              if (resultPayment.idElectronicResult.length == 0) {
                this.activePrenotazione.IDTRANSACTION = '';
                this.activePrenotazione.IDORDER = '';
                this.activePrenotazione.CHANNELPAYMENT = resultPayment.channelPayment; //Imposto nella prenotazione che il residuo è il totale

                this.activePrenotazione.RESIDUO = this.activePrenotazione.TOTALE; //e che non ho incassato nulla

                this.activePrenotazione.INCASSATO = 0;
              } else {
                this.activePrenotazione.RESIDUO = 0;
                this.activePrenotazione.INCASSATO = this.activePrenotazione.TOTALE; //Non riesco ad ottenere idTransaction e quindi non lo mando

                this.activePrenotazione.IDTRANSACTION = ''; //Dovrebbe essere idOrder

                this.activePrenotazione.IDORDER = resultPayment.idElectronicResult;
                this.activePrenotazione.CHANNELPAYMENT = resultPayment.channelPayment;
              } //Pagamento avvenuto correttamente
              //Posso salvare la prenotazione e poi scappare
              //Visualizzo il loading controller


              this.loadingController.create({
                message: 'Salvataggio Prenotazione',
                spinner: 'circular'
              }).then(function (elLoading) {
                //Creo il loading
                elLoading.present(); //Effettuo il salvataggio

                _this14.startService.requestSavePrenotazione().then(function (docPrenotazione) {
                  //Salvataggio avvenuto correttamente
                  //Chiudo il loading
                  elLoading.dismiss(); //Ecco il documento ricevuto

                  _this14.activePrenotazione = docPrenotazione; //Se non è valida visualizzo un messsaggio

                  if (!docPrenotazione.ISVALID) {
                    _this14.showMessage(docPrenotazione.MSGINVALID);
                  } else {
                    //Imposto anche la pianificazione
                    _this14.docPianificazione = _this14.activePrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];
                  } //Eseguo operazioni successive al salvataggio


                  _this14.onAfterSavePrenotazione();
                })["catch"](function (errMessage) {
                  //Chiudo il loader
                  elLoading.dismiss();

                  _this14.showMessage(errMessage);
                });
              });
            }
          }
          /**
           * Si sono verificati errori nel pagamento
           * @param resultPayment Risultato Pagamento Fallito
           */

        }, {
          key: "onPaymentFailed",
          value: function onPaymentFailed(resultPayment) {
            var message = 'Si sono verificati errori nel pagamento';
            var title = 'Pagamento Fallito';

            if (resultPayment) {
              if (resultPayment.messageResult) {
                message = resultPayment.messageResult;
              }
            } //Visualizzo il messaggio


            this.showAlert(message, title);
          } //#endregion

          /**
          * Visualizza un messaggio come Toast
          * @param message Messaggio da mostrare
          */

        }, {
          key: "showMessage",
          value: function showMessage(message) {
            //Creo un messaggio
            this.toastCtrl.create({
              message: message,
              duration: 3000
            }).then(function (tstMsg) {
              tstMsg.present();
            });
          }
          /**
           * Visualizza un alert con un pulsante Ok se !buttons, oppure con i bottoni dell'array
           * @param messaggio Messaggio
           * @param titolo Titolo
           */

        }, {
          key: "showAlert",
          value: function showAlert(messaggio, titolo, bottoni) {
            if (!bottoni || bottoni.length == 0) {
              bottoni = [];
              bottoni.push('Ok');
            } //Mostro l'alert richiesto


            this.alertCtrl.create({
              header: titolo ? titolo : 'Attenzione',
              message: messaggio,
              buttons: bottoni
            }).then(function (elAlert) {
              elAlert.present();
            });
          }
        }, {
          key: "openLink",
          value: function openLink(url) {
            Browser.open({
              url: url
            });
          }
          /**
          * Recupera il link per le condizioni di vendita Prenotazioni e apre il browser
          */

        }, {
          key: "onClickCondizioniVendita",
          value: function onClickCondizioniVendita() {
            var link;

            if (this.docArea) {
              link = this.docArea.findAreaLinkByPageType(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["PageType"].condizioniVenditaPrenotazioni);

              if (link && link.REFERURL) {
                //Apro il link
                this.openLink(link.REFERURL);
              }
            }
          }
        }]);

        return BookingsummaryPage;
      }();

      BookingsummaryPage.ɵfac = function BookingsummaryPage_Factory(t) {
        return new (t || BookingsummaryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]));
      };

      BookingsummaryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: BookingsummaryPage,
        selectors: [["app-bookingsummary"]],
        decls: 79,
        vars: 41,
        consts: [["color", "primary"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "ios", "close", "md", "close"], [2, "background-color", "#EFF1F8"], [1, "griglia-principale"], ["color", "danger", "expand", "block", 1, "full-buttons", 3, "click"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-center", "left-col"], [1, "ion-no-margin"], [1, "ion-no-margin", 2, "margin-top", "0px", "margin-bottom", "0px"], ["size", "9"], [3, "numPlayer", "changeNumPlayer"], ["button", "", "lines", "full", 3, "click"], ["slot", "start", 3, "ngModel", "ngModelChange", "click"], [1, "ion-text-wrap"], [3, "arPayment", "onPaymentModeChoosed"], ["lines", "none", "id", "item-totale"], ["slot", "start"], [2, "text-align", "right"], ["color", "tertiary", "expand", "block", 1, "full-buttons", 3, "disabled", "click"]],
        template: function BookingsummaryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsummaryPage_Template_ion_button_click_3_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Finalizza");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-grid", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsummaryPage_Template_ion_button_click_12_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Aspetta, voglio modificare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-col", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "ion-col", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "app-player-number", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeNumPlayer", function BookingsummaryPage_Template_app_player_number_changeNumPlayer_57_listener($event) {
              return ctx.onChangedNumPlayer($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsummaryPage_Template_ion_item_click_61_listener() {
              return ctx.disclaimer = !ctx.disclaimer;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "ion-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function BookingsummaryPage_Template_ion_checkbox_ngModelChange_62_listener($event) {
              return ctx.disclaimer = $event;
            })("click", function BookingsummaryPage_Template_ion_checkbox_click_62_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Lette e approvate le ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsummaryPage_Template_a_click_66_listener($event) {
              $event.stopPropagation();
              return ctx.onClickCondizioniVendita();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "condizioni di vendita");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "app-payment-mode", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPaymentModeChoosed", function BookingsummaryPage_Template_app_payment_mode_onPaymentModeChoosed_68_listener($event) {
              return ctx.onPaymentModeSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "ion-label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Totale");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "ion-label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](74, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "ion-button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsummaryPage_Template_ion_button_click_77_listener() {
              return ctx.onConfirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " Conferma Prenotazione ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](23, 17, ctx.docPianificazione == null ? null : ctx.docPianificazione.DATAORAINIZIO, "EEE")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 20, ctx.docPianificazione == null ? null : ctx.docPianificazione.DATAORAINIZIO, "dd"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](30, 25, ctx.docPianificazione == null ? null : ctx.docPianificazione.DATAORAINIZIO, "MMMM")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.docPianificazione == null ? null : ctx.docPianificazione._DESCRSPORT);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.selectedCampo == null ? null : ctx.selectedCampo.DENOMINAZIONE);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 28, ctx.getAddressLocation()));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 30, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](48, 32, ctx.docPianificazione == null ? null : ctx.docPianificazione.DATAORAINIZIO, "HH:mm")));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](51, 35, ctx.docPianificazione == null ? null : ctx.docPianificazione.DATAORAFINE, "HH:mm"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.docPianificazione == null ? null : ctx.docPianificazione.DURATAORE, " ", (ctx.docPianificazione == null ? null : ctx.docPianificazione.DURATAORE) != 1 ? "Ore" : "Ora", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("numPlayer", ctx.docPianificazione == null ? null : ctx.docPianificazione.NUMPARTECIPANTI);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.disclaimer);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("arPayment", ctx.myListPayment);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](74, 38, ctx.activePrenotazione == null ? null : ctx.activePrenotazione.TOTALE, "EUR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.disclaimer || !(ctx.activePrenotazione == null ? null : ctx.activePrenotazione.ISVALID) || !ctx.mySelectedPayment);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _shared_components_player_number_player_number_component__WEBPACK_IMPORTED_MODULE_8__["PlayerNumberComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _shared_components_payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_10__["PaymentModeComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]],
        styles: [".griglia-principale[_ngcontent-%COMP%]    > ion-row[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 4px;\n  font-size: 15px;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n\n.left-col[_ngcontent-%COMP%] {\n  border-right-style: solid;\n  border-width: thin;\n  border-color: #eff1f8;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\nion-button.full-buttons[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n#item-totale[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tpbmdzdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFlBQUE7QUFEWjs7QUFPQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBVUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFZQTtFQUNJLGVBQUE7QUFUSjs7QUFlQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFpQkk7RUFDSSxlQUFBO0FBZFIiLCJmaWxlIjoiYm9va2luZ3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWdsaWEtcHJpbmNpcGFsZXtcclxuICAgID5pb24tcm93e1xyXG4gICAgICAgID5pb24tY29se1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5oNlxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmg0XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG4ubGVmdC1jb2xcclxue1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogI2VmZjFmODtcclxufVxyXG5cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5pb24tYnV0dG9uLmZ1bGwtYnV0dG9uc3tcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuXHJcbn1cclxuXHJcbiNpdGVtLXRvdGFsZSB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "mDHw":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment/payment.module.ts ***!
      \*************************************************/

    /*! exports provided: PaypalPageModule */

    /***/
    function mDHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function () {
        return PaypalPageModule;
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


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-routing.module */
      "das9");
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payment.page */
      "uV3x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaypalPageModule = function PaypalPageModule() {
        _classCallCheck(this, PaypalPageModule);
      };

      PaypalPageModule.ɵfac = function PaypalPageModule_Factory(t) {
        return new (t || PaypalPageModule)();
      };

      PaypalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: PaypalPageModule
      });
      PaypalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaypalPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PaypalPageModule, {
          declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_4__["PaymentPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaypalPageRoutingModule"]],
          exports: [_payment_page__WEBPACK_IMPORTED_MODULE_4__["PaymentPage"]]
        });
      })();
      /***/

    },

    /***/
    "zyO+":
    /*!******************************************************************!*\
      !*** ./src/app/pages/location/booking/booking-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: BookingPageRoutingModule */

    /***/
    function zyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function () {
        return BookingPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./booking.page */
      "ibaT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_1__["BookingPage"]
      }, {
        path: 'bookingsummary/:bookId',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./bookingsummary/bookingsummary.module */
          "SbcD")).then(function (m) {
            return m.BookingsummaryPageModule;
          });
        }
      }];

      var BookingPageRoutingModule = function BookingPageRoutingModule() {
        _classCallCheck(this, BookingPageRoutingModule);
      };

      BookingPageRoutingModule.ɵfac = function BookingPageRoutingModule_Factory(t) {
        return new (t || BookingPageRoutingModule)();
      };

      BookingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BookingPageRoutingModule
      });
      BookingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookingPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=booking-booking-module-es5.js.map