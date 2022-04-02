(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"], {
    /***/
    "F+nL":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/location/course/bookcourse/bookcourse.module.ts ***!
      \***********************************************************************/

    /*! exports provided: BookcoursePageModule */

    /***/
    function FNL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookcoursePageModule", function () {
        return BookcoursePageModule;
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


      var _bookcourse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookcourse-routing.module */
      "pMMG");
      /* harmony import */


      var _bookcourse_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bookcourse.page */
      "KznV");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookcoursePageModule = function BookcoursePageModule() {
        _classCallCheck(this, BookcoursePageModule);
      };

      BookcoursePageModule.ɵfac = function BookcoursePageModule_Factory(t) {
        return new (t || BookcoursePageModule)();
      };

      BookcoursePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: BookcoursePageModule
      });
      BookcoursePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bookcourse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookcoursePageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BookcoursePageModule, {
          declarations: [_bookcourse_page__WEBPACK_IMPORTED_MODULE_4__["BookcoursePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _bookcourse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BookcoursePageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
          exports: [_bookcourse_page__WEBPACK_IMPORTED_MODULE_4__["BookcoursePage"]]
        });
      })();
      /***/

    },

    /***/
    "KznV":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/location/course/bookcourse/bookcourse.page.ts ***!
      \*********************************************************************/

    /*! exports provided: BookcoursePage */

    /***/
    function KznV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookcoursePage", function () {
        return BookcoursePage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/corso.model */
      "F/re");
      /* harmony import */


      var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/location.model */
      "V6dt");
      /* harmony import */


      var src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/payment-process.model */
      "plgS");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_pages_payment_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/payment/payment.page */
      "uV3x");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_app_models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models/iscrizionecorso.model */
      "9PZ8");
      /* harmony import */


      var src_app_models_iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/iscrizioneincasso.model */
      "xeLN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/components/payment-mode/payment-mode.component */
      "wyWT");
      /* harmony import */


      var _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/pipes/target-sesso.pipe */
      "ukHt");

      function BookcoursePage_ion_text_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate4"](" \xA0per un totale di\xA0", ctx_r0.myCorso.NUMEROLEZIONI, "\xA0", ctx_r0.myCorso.NUMEROLEZIONI > 1 ? "Incontri " : "Incontro ", " della durata di\xA0", ctx_r0.myCorso.ORELEZIONE, " ", ctx_r0.myCorso.ORELEZIONE > 1 ? "Ore" : "Ora", " ");
        }
      }

      function BookcoursePage_ion_item_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Il corso \xE8 pianificato 1 volta a settimana al \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-text", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 1, ctx_r1.onlyDaysCorso[0].label));
        }
      }

      function BookcoursePage_ion_item_58_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-text", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var giorno_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, giorno_r9.label));
        }
      }

      function BookcoursePage_ion_item_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, BookcoursePage_ion_item_58_p_4_Template, 4, 3, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Il corso \xE8 pianificato ", ctx_r2.onlyDaysCorso == null ? null : ctx_r2.onlyDaysCorso.length, " volte a settimana");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.onlyDaysCorso);
        }
      }

      function BookcoursePage_ion_item_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "targetSesso");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx_r3.iconColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, ctx_r3.myCorso.TARGETSESSO));
        }
      }

      function BookcoursePage_ion_card_79_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx_r10.iconColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r10.myLocation == null ? null : ctx_r10.myLocation.COMUNE);
        }
      }

      function BookcoursePage_ion_card_79_ion_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx_r11.iconColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r11.myLocation == null ? null : ctx_r11.myLocation.INDIRIZZO, " ");
        }
      }

      function BookcoursePage_ion_card_79_ion_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx_r12.iconColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r12.myLocation == null ? null : ctx_r12.myLocation.TELEFONO);
        }
      }

      function BookcoursePage_ion_card_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Dove");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, BookcoursePage_ion_card_79_ion_item_5_Template, 4, 2, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, BookcoursePage_ion_card_79_ion_item_6_Template, 4, 2, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, BookcoursePage_ion_card_79_ion_item_7_Template, 4, 2, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.myLocation == null ? null : ctx_r4.myLocation.COMUNE);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.myLocation == null ? null : ctx_r4.myLocation.INDIRIZZO);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.myLocation == null ? null : ctx_r4.myLocation.TELEFONO);
        }
      }

      function BookcoursePage_ion_list_82_app_payment_mode_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-payment-mode", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPaymentModeChoosed", function BookcoursePage_ion_list_82_app_payment_mode_8_Template_app_payment_mode_onPaymentModeChoosed_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r15.onPaymentModeSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("arPayment", ctx_r13.myListPayment);
        }
      }

      function BookcoursePage_ion_list_82_ion_item_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-chip", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Iscrizione Gratuita");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
      }

      function BookcoursePage_ion_list_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BookcoursePage_ion_list_82_Template_ion_item_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r17.disclaimer = !ctx_r17.disclaimer;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-checkbox", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BookcoursePage_ion_list_82_Template_ion_checkbox_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r19.disclaimer = $event;
          })("click", function BookcoursePage_ion_list_82_Template_ion_checkbox_click_2_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Lette e approvate le ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BookcoursePage_ion_list_82_Template_a_click_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            $event.stopPropagation();
            return ctx_r21.onClickCondizioniVendita();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "condizioni di vendita");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, BookcoursePage_ion_list_82_app_payment_mode_8_Template, 1, 1, "app-payment-mode", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, BookcoursePage_ion_list_82_ion_item_9_Template, 3, 0, "ion-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Totale");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r5.disclaimer);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.myCorso == null ? null : ctx_r5.myCorso.isAPagamento());

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx_r5.myCorso == null ? null : ctx_r5.myCorso.isAPagamento()));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 4, ctx_r5.myCorso == null ? null : ctx_r5.myCorso.PREZZOLORDO, "EUR"), " ");
        }
      }

      function BookcoursePage_ion_list_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Prezzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-text", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Contatta la struttura per maggiori informazioni");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 1, ctx_r6.myCorso == null ? null : ctx_r6.myCorso.PREZZOLORDO, "EUR"), " ");
        }
      }

      function BookcoursePage_ion_row_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BookcoursePage_ion_row_84_Template_ion_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r22.onConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Conferma Iscrizione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r7.enableButtonIscrizione());
        }
      }

      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Browser;

      var BookcoursePage = /*#__PURE__*/function () {
        function BookcoursePage(startService, navParams, modalCtrl, docStructureService, loadingController, toastCtrl, alertCtrl, navCtrl) {
          _classCallCheck(this, BookcoursePage);

          this.startService = startService;
          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.docStructureService = docStructureService;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.myCorso = new src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_2__["Corso"]();
          this.myLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"]();
          this.iconColor = 'primary';
          this.userLogged = false;
          this.enableIscrizioni = false; //accettazione delle condizioni di vendita

          this.disclaimer = false;
          this.onlyDaysCorso = []; //Contiene i soli giorni di corso
          //Controllo Posti Disponibili

          this.flagPostiDisponibili = false;
          this.txtPostiDisponibili = ''; //Ascolto cambiamenti dell'Area per l'abilitazione delle iscrizioni

          this.onListenSelectedArea(); //Ascolto cambiamento dell'utente

          this.onListenSelectedUser();
        }
        /**
         * In ascolto dell'area selezionata, per capire se solo abilitate le iscrizioni
         */


        _createClass(BookcoursePage, [{
          key: "onListenSelectedArea",
          value: function onListenSelectedArea() {
            var _this = this;

            this.listenSelectedArea = this.startService.areaSelected.subscribe(function (elArea) {
              //Imposto l'area di riferimento
              _this.selectedArea = elArea; //Impostazione tipologie pagamento

              _this.setListPayment(); //Controllo se nell'area sono abilitate le iscrizioni


              if (_this.selectedArea.APPISCRIZIONI == true) {
                _this.enableIscrizioni = true;
              } else {
                _this.enableIscrizioni = false;
              }
            }, function (error) {
              _this.enableIscrizioni = false;
            });
          }
          /**
           * Ascolto il cambiamento dell'utente
           */

        }, {
          key: "onListenSelectedUser",
          value: function onListenSelectedUser() {
            var _this2 = this;

            //Controllo se l'utente è loggato
            this.subUserLogged = this.startService.utenteLogged.subscribe(function (element) {
              _this2.userLogged = element;
            }); //Sottoscrivo al documento Utente

            this.subUser = this.startService.utente.subscribe(function (elUser) {
              _this2.docUser = elUser;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            //this.isDesktop = this.startService.isDesktop;
            //Sembra che l'istruzione sopra non funzioni correttamente
            this.isDesktop = false; //Recupero i parametri di chiamata

            this.myCorso = this.navParams.get('params');

            if (this.myCorso == null || this.myCorso == undefined) {
              //se non ho i parametri, esco
              this.showToastMessage("Corso non trovato"); //Chiudo la modale

              this.closeModal();
            } else {
              //Recupero le giornate di corso
              this.onlyDaysCorso = this.myCorso.getArrayGiorniCorso(); //Richiedo i Posti Disponibili per l'iscrizione

              this.requestPostiDisponibili(this.myCorso.ID); //Richiedo la Location
              //Imposto il loading

              this.loadingController.create({
                spinner: "circular",
                message: 'Caricamento',
                backdropDismiss: true
              }).then(function (elLoading) {
                //Mostro il loading
                elLoading.present(); //ora richiedo la location

                _this3.requestLocationById(_this3.myCorso.IDLOCATION).then(function () {
                  //Posso rimanere nella pagina
                  elLoading.dismiss();
                })["catch"](function (error) {
                  elLoading.dismiss();

                  _this3.showToastMessage('Spiacenti, errori nel recupero del corso');

                  _this3.closeModal();
                });
              });
            }
          }
          /**
           * Contatta il server per sapere se ci sono posti per l'iscrizione
           * Valorizza due proprieta
           * posti Disponibili: Boolean
           * txtPostiDisponibili: Messaggio da visualizzare
           *
           * @param idCorso idCorso richiesto
           */

        }, {
          key: "requestPostiDisponibili",
          value: function requestPostiDisponibili(idCorso) {
            var _this4 = this;

            this.startService.getPostiDisponibiliCorso(idCorso).then(function (elResponse) {
              if (elResponse.result) {
                _this4.flagPostiDisponibili = true;
              } else {
                _this4.flagPostiDisponibili = false;
              }

              _this4.txtPostiDisponibili = elResponse.message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
          /**
           * Richiedo la location
           * @param idLocation idLocation
           */

        }, {
          key: "requestLocationById",
          value: function requestLocationById(idLocation) {
            var _this5 = this;

            //preparo il filtro
            var filterLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_3__["Location"](true);
            return new Promise(function (resolve, reject) {
              filterLocation.ID = idLocation; //faccio la richiesta

              _this5.docStructureService.requestNew(filterLocation).then(function (elLocation) {
                if (elLocation && elLocation.length != 0) {
                  //Imposto la location
                  _this5.myLocation = elLocation[0];
                  resolve();
                } else {
                  reject('Location not found');
                }
              })["catch"](function (error) {
                reject('Connection error' + error);
              });
            });
          }
          /**
           * Chiama il servizio passandogli l'id dell'oggetto corso,
           * e restituisce la stringa dell'icona
           * @param corso l'oggetto corso per cui si richiede l'icona
           */

        }, {
          key: "getIcon",
          value: function getIcon(corso) {
            return this.startService.getSportIcon(corso.IDSPORT);
          }
          /**
          * Recupera il link per le condizioni di vendita Corso e apre il browser
          */

        }, {
          key: "onClickCondizioniVendita",
          value: function onClickCondizioniVendita() {
            var link;

            if (this.selectedArea) {
              link = this.selectedArea.findAreaLinkByPageType(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PageType"].condizioniVenditaIscrizioni);

              if (link && link.REFERURL) {
                //Apro il link
                this.openLink(link.REFERURL);
              }
            }
          }
          /**
           * Click sul bottone di Header
           */

        }, {
          key: "onClickButtonHeader",
          value: function onClickButtonHeader() {
            if (!this.flagPostiDisponibili) {
              //Se non ci sono posti, uso il pulsante per chiudere
              this.closeModal();
            }
          }
          /**
           * Ritorna TRUE se il pulsante
           * Conferma Iscrizione è utilizzabile
           */

        }, {
          key: "enableButtonIscrizione",
          value: function enableButtonIscrizione() {
            var flagEnable;

            if (this.disclaimer && this.flagPostiDisponibili) {
              //Corso a pagamento (Deve scegliere il pagamento)
              if (this.myCorso.isAPagamento()) {
                if (this.mySelectedPayment) {
                  flagEnable = true;
                }
              } else {
                //Non deve pagare niente
                flagEnable = true;
              }
            }

            return flagEnable;
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

            if (this.selectedArea) {
              this.myListPayment = this.selectedArea.getPaymentFor(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["SettorePagamentiAttivita"].settorePagamentoCorso);

              if (this.myListPayment && this.myListPayment.length != 0) {
                this.mySelectedPayment = this.myListPayment[0];
                console.log(this.myListPayment);
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
            console.log(this.myPaymentMode);
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
           * Richiesta di esecuzione del pagamento di qualsiasi tipologia
           * 1) Se onSite conclude subito dicendo che va bene
           * 2) Per altre tipologie viene aperta la pagina del pagamento
           *
           */

        }, {
          key: "onExecPayment",
          value: function onExecPayment() {
            var _this6 = this;

            var arModes = [src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaAdesso, src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaBonifico, src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaStruttura]; //Presente un totale da pagare

            if (this.myCorso.isAPagamento()) {
              //L'utente ha selezionato come pagare
              if (arModes.includes(this.myPaymentMode)) {
                //Pagamento non dentro all'App
                if (this.myPaymentMode == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaBonifico || this.myPaymentMode == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaStruttura) {
                  //Creo il risultato del pagamento, passando la modalità
                  var docPaymentResult = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_4__["PaymentProcess"](this.myPaymentMode); // Essendo una modalita che non prevede interazioni app
                  // viene impostato automaticamento il channelPayment 
                  // e il processResult = TRUE
                  //Passo subito al Success

                  this.onPaymentSuccess(docPaymentResult);
                } else {
                  //Qui invece bisogna gestire il pagamento
                  //Preparo un oggetto per processare il pagamento
                  var myCheckoutPayment = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_4__["PaymentProcess"](this.myPaymentMode);
                  myCheckoutPayment.amount = this.myCorso.PREZZOLORDO;
                  myCheckoutPayment.description = 'Pagamento Iscrizione Corso ' + this.myCorso.DENOMINAZIONE;
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
                        _this6.onPaymentSuccess(myPaymentResult);
                      } else {
                        //Pagamento Fallito
                        _this6.onPaymentFailed(myPaymentResult);
                      }
                    } else {
                      //Stranamente non mi ha tornato nulla, quindi il pagamento è fallito
                      myPaymentResult = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_4__["PaymentProcess"](_this6.myPaymentMode);
                      myPaymentResult.processResult = false;
                      myPaymentResult.messageResult = 'Pagamento fallito'; //Pagamento Fallito

                      _this6.onPaymentFailed(myPaymentResult);
                    }
                  });
                }
              } else {
                //Pagamento non selezionato
                this.showToastMessage('E\' necessario selezionare un pagamento');
              }
            } else {
              //E' un corso gratuito ?
              //Creo il risultato del pagamento, passando la modalità
              var _docPaymentResult = new src_app_models_payment_process_model__WEBPACK_IMPORTED_MODULE_4__["PaymentProcess"](src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMode"].pagaStruttura); // Essendo una modalita che non prevede interazioni app
              // viene impostato automaticamento il channelPayment 
              // e il processResult = TRUE
              //Passo subito al Success


              this.onPaymentSuccess(_docPaymentResult);
            }
          }
          /**
           * Pagamento andato a buon fine
           * @param resultPayment Risultato del pagamento
           */

        }, {
          key: "onPaymentSuccess",
          value: function onPaymentSuccess(resultPayment) {
            var _this7 = this;

            var myDocIscrizione;
            var myDocRata; //Preparo i dati dell'iscrizione

            myDocIscrizione = this.prepareDocIscrizione(); //Preparo i dati della Rata di Pagamento

            myDocRata = new src_app_models_iscrizioneincasso_model__WEBPACK_IMPORTED_MODULE_10__["IscrizioneIncasso"](); //Step del pagamento Effettuato (Potrebbe avere effettivamente pagato, oppure non pagato e rimandato in struttura)

            if (resultPayment && resultPayment.processResult) {
              //Se non è avvenuta nessuna transazione Elettronica 
              //vuol dire che ha scelto di pagare successivamente
              if (resultPayment.idElectronicResult.length == 0) {
                //Se il corso è a pagamento, dovrà effettivamente pagare
                if (this.myCorso.isAPagamento()) {
                  //E' a pagamento, in qualche modo dovrà pagare
                  //Creo una scadenza
                  myDocRata.IDTRANSACTION = '';
                  myDocRata.IDORDER = '';
                  myDocRata.MODALITA = resultPayment.channelPayment;
                  myDocRata.TIPORIGO = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoRigoIncasso"].scadenza; //Data operazione non viene valorizzata ma solo DataScadenza

                  myDocRata.DATASCADENZA = this.myCorso.DATAINIZIO;
                  myDocRata.IMPORTO = this.myCorso.PREZZOLORDO;
                } else {
                  //E' un corso gratuito, non c'e' nulla da pagare
                  myDocRata.IDTRANSACTION = '';
                  myDocRata.IDORDER = '';
                  myDocRata.MODALITA = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["PaymentChannel"].onSite;
                  myDocRata.TIPORIGO = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoRigoIncasso"].incassato;
                  myDocRata.DATAOPERAZIONE = myDocIscrizione.DATAISCRIZIONE; //Non c'e' nessuna scadenza

                  myDocRata.IMPORTO = 0;
                }
              } else {
                //Transazione avvenuta
                myDocRata.IDTRANSACTION = '';
                myDocRata.IDORDER = resultPayment.idElectronicResult;
                myDocRata.MODALITA = resultPayment.channelPayment;
                myDocRata.TIPORIGO = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_5__["TipoRigoIncasso"].incassato;
                myDocRata.DATAOPERAZIONE = myDocIscrizione.DATAISCRIZIONE; //Non c'e' nessuna scadenza      

                myDocRata.IMPORTO = this.myCorso.PREZZOLORDO;
              } //Aggiungo le informaioni del pagamento


              myDocIscrizione.ISCRIZIONEINCASSO.push(myDocRata);
              console.log(myDocRata); //Contatto il server per salvare il tutto

              this.loadingController.create({
                message: 'Richiesta Iscrizione',
                spinner: 'circular'
              }).then(function (elLoading) {
                //Creo il loading
                elLoading.present(); //Procedo con il salvataggio Iscrizione

                _this7.startService.requestSaveIscrizione(myDocIscrizione).then(function (response) {
                  elLoading.dismiss(); //Iscrizione salvata correttamente

                  if (response.result && response.code && response.code.length != 0) {
                    //Mi dirigo alla scheda dell'Iscrizione Corso e concludo la modale
                    _this7.onAfterSaveIscrizione(response.code);
                  } else {
                    //Si sono verificati problemi
                    _this7.showAlert(response.message, 'Iscrizione Fallita');
                  }
                })["catch"](function (error) {
                  elLoading.dismiss(); //Si sono verificati problemi

                  _this7.showAlert(error.message, 'Iscrizione Fallita');
                });
              });
            }
          }
          /**
           * Iscrizione salvata nel sistema posso andare via
           */

        }, {
          key: "onAfterSaveIscrizione",
          value: function onAfterSaveIscrizione(idIscrizione) {
            this.showToastMessage('Iscrizione confermata'); //1) Chiudere la modale

            this.closeModal(); //2) Andare alla History sulla scheda

            this.navCtrl.navigateRoot(['historylist/course', idIscrizione]);
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
          //#region PREPARAZIONE DOCUMENTO ISCRIZIONE

        }, {
          key: "prepareDocIscrizione",
          value: function prepareDocIscrizione() {
            var myDoc = new src_app_models_iscrizionecorso_model__WEBPACK_IMPORTED_MODULE_9__["IscrizioneCorso"]();

            if (this.myCorso && this.docUser) {
              myDoc.IDCORSO = this.myCorso.ID;
              myDoc.IDUTENTE = this.docUser.ID;
              myDoc.DATAISCRIZIONE = new Date();
            }

            return myDoc;
          } //#endregion

          /**
           * Mostra un messaggio a video
           * @param messaggio Messaggio
           */

        }, {
          key: "showToastMessage",
          value: function showToastMessage(messaggio) {
            this.toastCtrl.create({
              message: messaggio,
              duration: 3000
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
          /**
          * Chiusura della videata
          */

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
          /**
           * Apre una videata con la pagina richiesta
           * @param url Url da visualizzare
           */

        }, {
          key: "openLink",
          value: function openLink(url) {
            Browser.open({
              url: url
            });
          }
        }]);

        return BookcoursePage;
      }();

      BookcoursePage.ɵfac = function BookcoursePage_Factory(t) {
        return new (t || BookcoursePage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_7__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_1__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]));
      };

      BookcoursePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: BookcoursePage,
        selectors: [["app-bookcourse"]],
        decls: 85,
        vars: 42,
        consts: [["color", "primary"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "ios", "close", "md", "close"], [2, "background-color", "#EFF1F8"], [1, "griglia-principale"], ["expand", "block", 1, "full-buttons", 3, "color", "click"], ["slot", "end", 3, "name"], [1, "ion-text-wrap"], ["button", "false", "lines", "none", 1, "ion-no-padding"], ["slot", "start", 1, "icon-sport"], [3, "innerHTML"], [1, "ion-no-padding"], ["lines", "none"], [2, "font-weight", "bold"], [4, "ngIf"], ["lines", "none", 4, "ngIf"], ["name", "stats-chart-outline", "slot", "start", 3, "color"], ["name", "bookmark-outline", "slot", "start", 3, "color"], ["color", "danger"], [4, "ngFor", "ngForOf"], ["name", "transgender-outline", "slot", "start", 3, "color"], ["name", "home-outline", "slot", "start", 3, "color"], ["name", "navigate-outline", "slot", "start", 3, "color"], ["name", "call-outline", "slot", "start", 3, "color"], ["button", "", "lines", "full", 3, "click"], ["slot", "start", 3, "ngModel", "ngModelChange", "click"], [3, "arPayment", "onPaymentModeChoosed", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["lines", "none", "id", "item-totale"], ["slot", "start"], [2, "text-align", "right"], [3, "arPayment", "onPaymentModeChoosed"], [1, "ion-text-center"], ["color", "danger", 1, "wide"], [1, "ion-text-wrap", "ion-text-center"], ["color", "tertiary", "expand", "block", 1, "full-buttons", 3, "disabled", "click"]],
        template: function BookcoursePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BookcoursePage_Template_ion_button_click_3_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Iscrizione");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-grid", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BookcoursePage_Template_ion_button_click_12_listener() {
              return ctx.onClickButtonHeader();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Iscrizione al corso");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "ion-card-content", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "ion-text");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Il corso inizia\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "ion-text", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-text", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-text");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "\xA0alle ore\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "ion-text", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](46, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "ion-text");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "\xA0e si conclude\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "ion-text", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](51, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-text", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](55, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, BookcoursePage_ion_text_56_Template, 2, 4, "ion-text", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, BookcoursePage_ion_item_57_Template, 7, 3, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, BookcoursePage_ion_item_58_Template, 5, 2, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "ion-text");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, " Si consiglia di controllare il calendario dettagliato per conoscere i giorni e gli orari precisi del corso. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "Rivolto a");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](75, "ion-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, BookcoursePage_ion_item_78_Template, 5, 4, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, BookcoursePage_ion_card_79_Template, 8, 3, "ion-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](82, BookcoursePage_ion_list_82_Template, 16, 7, "ion-list", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](83, BookcoursePage_ion_list_83_Template, 11, 4, "ion-list", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, BookcoursePage_ion_row_84_Template, 4, 1, "ion-row", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx.flagPostiDisponibili ? "success" : "danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", ctx.flagPostiDisponibili ? "thumbs-up-outline" : "ban-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.txtPostiDisponibili);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.myCorso.DENOMINAZIONE);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", ctx.getIcon(ctx.myCorso), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.myCorso["_DENOMINAZIONE_Sport"], " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](37, 23, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](38, 25, ctx.myCorso.DATAINIZIO, "EEEE")), "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](41, 28, ctx.myCorso.DATAINIZIO, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](46, 31, ctx.myCorso.ORAINIZIO, "HH:mm"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](51, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](52, 36, ctx.myCorso.DATAFINE, "EEEE")), "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](55, 39, ctx.myCorso.DATAFINE, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.myCorso.NUMEROLEZIONI);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.onlyDaysCorso == null ? null : ctx.onlyDaysCorso.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.onlyDaysCorso == null ? null : ctx.onlyDaysCorso.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx.iconColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.myCorso["_DENOMINAZIONE_Livello"] ? ctx.myCorso["_DENOMINAZIONE_Livello"] : "Tutti i Livelli", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("color", ctx.iconColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.myCorso["_DESCTOOLTIP_CategoriaEta"] ? ctx.myCorso["_DESCTOOLTIP_CategoriaEta"] : "Per tutte le et\xE0");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.myCorso.TARGETSESSO);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.myLocation == null ? null : ctx.myLocation.COMUNE) || (ctx.myLocation == null ? null : ctx.myLocation.INDIRIZZO) || (ctx.myLocation == null ? null : ctx.myLocation.TELEFONO));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.flagPostiDisponibili);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.flagPostiDisponibili);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.flagPostiDisponibili);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _shared_components_payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_14__["PaymentModeComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_15__["TargetSessoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]],
        styles: [".griglia-principale[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 4px;\n  font-size: 15px;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n\n.left-col[_ngcontent-%COMP%] {\n  border-right-style: solid;\n  border-width: thin;\n  border-color: #eff1f8;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\nion-button.full-buttons[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n#item-totale[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nion-chip.wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2tjb3Vyc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBRUksWUFBQTtBQUhaOztBQVNBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVVBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFZQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVZKOztBQWNBO0VBQ0ksZUFBQTtBQVhKOztBQWlCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFtQkk7RUFDSSxlQUFBO0FBaEJSOztBQXFCQTtFQUNJLFdBQUE7RUFFQSx1QkFBQTtBQW5CSiIsImZpbGUiOiJib29rY291cnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlnbGlhLXByaW5jaXBhbGV7XHJcbiAgICBpb24tcm93e1xyXG5cclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaDZcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5oNFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLmxlZnQtY29sXHJcbntcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItY29sb3I6ICNlZmYxZjg7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW9uLWJ1dHRvbi5mdWxsLWJ1dHRvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcblxyXG59XHJcblxyXG4jaXRlbS10b3RhbGUge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24tY2hpcC53aWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "pMMG":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/location/course/bookcourse/bookcourse-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: BookcoursePageRoutingModule */

    /***/
    function pMMG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookcoursePageRoutingModule", function () {
        return BookcoursePageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bookcourse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookcourse.page */
      "KznV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _bookcourse_page__WEBPACK_IMPORTED_MODULE_1__["BookcoursePage"]
      }];

      var BookcoursePageRoutingModule = function BookcoursePageRoutingModule() {
        _classCallCheck(this, BookcoursePageRoutingModule);
      };

      BookcoursePageRoutingModule.ɵfac = function BookcoursePageRoutingModule_Factory(t) {
        return new (t || BookcoursePageRoutingModule)();
      };

      BookcoursePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BookcoursePageRoutingModule
      });
      BookcoursePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookcoursePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758-es5.js.map