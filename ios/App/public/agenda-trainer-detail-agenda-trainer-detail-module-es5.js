(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-trainer-detail-agenda-trainer-detail-module"], {
    /***/
    "00EI":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer-detail/agenda-trainer-detail-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AgendaTrainerDetailPageRoutingModule */

    /***/
    function EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerDetailPageRoutingModule", function () {
        return AgendaTrainerDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agenda_trainer_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agenda-trainer-detail.page */
      "AbB1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _agenda_trainer_detail_page__WEBPACK_IMPORTED_MODULE_1__["AgendaTrainerDetailPage"]
      }];

      var AgendaTrainerDetailPageRoutingModule = function AgendaTrainerDetailPageRoutingModule() {
        _classCallCheck(this, AgendaTrainerDetailPageRoutingModule);
      };

      AgendaTrainerDetailPageRoutingModule.ɵfac = function AgendaTrainerDetailPageRoutingModule_Factory(t) {
        return new (t || AgendaTrainerDetailPageRoutingModule)();
      };

      AgendaTrainerDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AgendaTrainerDetailPageRoutingModule
      });
      AgendaTrainerDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaTrainerDetailPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AbB1":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer-detail/agenda-trainer-detail.page.ts ***!
      \******************************************************************************************/

    /*! exports provided: AgendaTrainerDetailPage */

    /***/
    function AbB1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerDetailPage", function () {
        return AgendaTrainerDetailPage;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/pianificazionecorso.model */
      "b5Gy");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function AgendaTrainerDetailPage_ion_toolbar_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-toolbar", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-segment", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AgendaTrainerDetailPage_ion_toolbar_7_Template_ion_segment_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.selectedSegment = $event;
          })("ionChange", function AgendaTrainerDetailPage_ion_toolbar_7_Template_ion_segment_ionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.onChangeSegment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-segment-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Tutti presenti");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-segment-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Tutti assenti");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.selectedPianificazione.canUpdatePresenze(ctx_r0.gapAggiornamentoPresenze))("ngModel", ctx_r0.selectedSegment);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 32);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 33);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 34);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_h4_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Certificato medico: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-badge", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r12.getColoreCertificato(presenza_r8));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", presenza_r8.DATACERTIFICATOMEDICO ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 2, presenza_r8.DATACERTIFICATOMEDICO, "dd/MM/yyyy") : "Non consegnato", " ");
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_badge_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", presenza_r8.PRESENTE ? "primary" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", presenza_r8.PRESENTE ? "Presente" : "Assente", " ");
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var presenza_r8 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r16.selectedPianificazione.canUpdatePresenze(ctx_r16.gapAggiornamentoPresenze) ? ctx_r16.onClickElement(presenza_r8) : {};
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_1_Template, 1, 0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_2_Template, 1, 0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_icon_3_Template, 1, 0, "ion-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_h4_7_Template, 5, 5, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_ion_badge_8_Template, 2, 2, "ion-badge", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("button", ctx_r7.selectedPianificazione.canUpdatePresenze(ctx_r7.gapAggiornamentoPresenze));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r8.PRESENTE == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r8.PRESENTE == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r8.PRESENTE != true && presenza_r8.PRESENTE != false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](presenza_r8.NOMINATIVO);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.tipoSocieta == ctx_r7.TipoSocieta.sportiva);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r8.PRESENTE != null && presenza_r8.PRESENTE != undefined && ctx_r7.isDesktop);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-item-divider", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Partecipanti ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AgendaTrainerDetailPage_ion_item_group_32_ion_item_4_Template, 9, 7, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.listPresenzeConfermate);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 32);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 33);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 34);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_h4_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Certificato medico: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-badge", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r23.getColoreCertificato(presenza_r19));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", presenza_r19.DATACERTIFICATOMEDICO ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 2, presenza_r19.DATACERTIFICATOMEDICO, "dd/MM/yyyy") : "Non consegnato", " ");
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_badge_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", presenza_r19.PRESENTE ? "primary" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", presenza_r19.PRESENTE ? "Presente" : "Assente", " ");
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);

            var presenza_r19 = ctx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r27.selectedPianificazione.canUpdatePresenze(ctx_r27.gapAggiornamentoPresenze) ? ctx_r27.onClickElement(presenza_r19) : {};
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_1_Template, 1, 0, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_2_Template, 1, 0, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_icon_3_Template, 1, 0, "ion-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_h4_7_Template, 5, 5, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_ion_badge_8_Template, 2, 2, "ion-badge", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var presenza_r19 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("button", ctx_r18.selectedPianificazione.canUpdatePresenze(ctx_r18.gapAggiornamentoPresenze));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r19.PRESENTE == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r19.PRESENTE == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r19.PRESENTE != true && presenza_r19.PRESENTE != false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](presenza_r19.NOMINATIVO);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.tipoSocieta == ctx_r18.TipoSocieta.sportiva);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", presenza_r19.PRESENTE != null && presenza_r19.PRESENTE != undefined && ctx_r18.isDesktop);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-item-divider", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " In Prova ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AgendaTrainerDetailPage_ion_item_group_33_ion_item_4_Template, 9, 7, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.listPresenzeInProva);
        }
      }

      function AgendaTrainerDetailPage_ion_item_group_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-item-divider", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Note dalla segreteria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedPianificazione.NOTEADMIN, " ");
        }
      }

      var AgendaTrainerDetailPage = /*#__PURE__*/function () {
        function AgendaTrainerDetailPage(activatedRoute, navController, startService, toastController, loadingController, alertController) {
          _classCallCheck(this, AgendaTrainerDetailPage);

          this.activatedRoute = activatedRoute;
          this.navController = navController;
          this.startService = startService;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.listPresenze = [];
          this.listPresenzeConfermate = [];
          this.listPresenzeInProva = [];
          this.selectedPianificazione = new src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_3__["PianificazioneCorso"]();
          this.TipoSocieta = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["TipoSocieta"];
          this.showTabs = true;
          this.selectedSegment = null; //recupero il tipo di società

          this.tipoSocieta = this.startService.actualStartConfig.gruppo.TIPOGRUPPO; //capisco se sono su desktop

          this.isDesktop = startService.isDesktop;
          this.gapAggiornamentoPresenze = startService.areaSelectedValue.APPGAPOREPRESENZE;
        }

        _createClass(AgendaTrainerDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //recupero l'id del corso
            this.activatedRoute.paramMap.subscribe(function (params) {
              //recupero id della pianificazione
              _this.idPianificazione = params['params']['pianificazioneCorsoId'];

              if (_this.startService.getPianificazioneTrainerById(_this.idPianificazione)) {
                //se c'è la pianificazione, la recupero tramite l'id
                _this.selectedPianificazione = _this.startService.getPianificazioneTrainerById(_this.idPianificazione);
              } else {
                _this.navController.navigateRoot('/home');
              } //Posso andare avanti
              //recupero l'id del corso


              _this.idCorso = _this.selectedPianificazione.IDCORSO; //richiedo la lista degli allievi (inserendola nel documento pianificazione) 

              _this.startService.insertPresenzeIntoPianificazione(_this.selectedPianificazione).then(function () {
                //ora ho il documento pianificazione con anche le presenze, posso metterle anche in "listpresenze"
                _this.listPresenze = _this.selectedPianificazione.CORSOPRESENZE;

                _this.dividiIscrizioni();
              });
            });
          }
        }, {
          key: "onClickElement",
          value: function onClickElement(elem) {
            if (elem.PRESENTE == null || elem.PRESENTE == undefined) {
              elem.PRESENTE = true;
            } else {
              elem.PRESENTE = !elem.PRESENTE;
            }

            if (this.tuttiPresenti) {
              this.selectedSegment = 'presente';
            } else if (this.tuttiAssenti) {
              this.selectedSegment = 'assente';
            } else {
              this.selectedSegment = null;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            if (this.selectedPianificazione.isModified(2)) {
              this.loadingController.create({
                message: 'Caricamento',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                elLoading.present();

                _this2.startService.requestUpdatePresenze(_this2.selectedPianificazione).then(function (response) {
                  elLoading.dismiss();

                  if (response.result) {
                    //è andato tutto bene
                    _this2.showMessage('Presenze aggiornate');

                    _this2.goBack();
                  } else {
                    //errore dal server
                    console.log(response);

                    _this2.showMessage(response.message);
                  }
                })["catch"](function (error) {
                  elLoading.dismiss();
                  console.log(error);

                  _this2.showMessage('Errore di connessione');
                });
              });
            } else {
              this.goBack();
            }
          }
        }, {
          key: "getColoreCertificato",
          value: function getColoreCertificato(presenza) {
            var today = moment__WEBPACK_IMPORTED_MODULE_2__(new Date());
            var color;

            if (presenza.DATACERTIFICATOMEDICO) {
              var scadenza = moment__WEBPACK_IMPORTED_MODULE_2__(presenza.DATACERTIFICATOMEDICO);

              if (scadenza < today) {
                color = 'danger';
              } else if (scadenza < today.add(7, 'days')) {
                color = 'warning';
              } else {
                color = 'primary';
              }
            } else {
              color = 'danger';
            }

            return color;
          } //separa le iscrizioni in due liste (confermate e in prova)

        }, {
          key: "dividiIscrizioni",
          value: function dividiIscrizioni() {
            this.listPresenzeConfermate = this.listPresenze.filter(function (element) {
              return element.STATOISCRIZIONE == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["StatoIscrizione"].confermata;
            });
            this.listPresenzeInProva = this.listPresenze.filter(function (element) {
              return element.STATOISCRIZIONE == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["StatoIscrizione"].inProva;
            });
          }
          /**
           * Visualizza un messaggio
           */

        }, {
          key: "showMessage",
          value: function showMessage(messaggio) {
            this.toastController.create({
              message: messaggio,
              duration: 3000
            }).then(function (elToast) {
              elToast.present();
            });
          }
        }, {
          key: "onGoBack",
          value: function onGoBack() {
            var _this3 = this;

            if (this.selectedPianificazione.isModified(2)) {
              this.alertController.create({
                header: 'Vuoi davvero uscire?',
                message: 'Se esci senza confermare, le presenze non verranno salvate',
                buttons: [{
                  text: 'Esci',
                  handler: function handler() {
                    _this3.goBack();
                  }
                }, {
                  text: 'Rimani',
                  role: 'cancel'
                }]
              }).then(function (elAlert) {
                elAlert.present();
              });
            } else {
              this.goBack();
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            var _this4 = this;

            this.navController.pop()["catch"](function () {
              _this4.navController.navigateRoot('/home');
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (event.detail.currentY < 5) {
              this.showTabs = true;
            } else {
              if (event['detail']['deltaY'] > 20) {
                this.showTabs = false;
              } else if (event['detail']['deltaY'] < -20) {
                this.showTabs = true;
              }
            }
          }
        }, {
          key: "setAll",
          value: function setAll(presente) {
            this.listPresenze.forEach(function (elem) {
              elem.PRESENTE = presente;
            });
          }
        }, {
          key: "onChangeSegment",
          value: function onChangeSegment(event) {
            if (event['detail']['value'] == 'presente') {
              this.setAll(true);
            } else if (event['detail']['value'] == 'assente') {
              this.setAll(false);
            }
          }
        }, {
          key: "tuttiPresenti",
          get: function get() {
            var tuttiPresenti = true;
            this.listPresenze.forEach(function (elem) {
              if (!elem.PRESENTE) {
                tuttiPresenti = false;
              }
            });
            return tuttiPresenti;
          }
        }, {
          key: "tuttiAssenti",
          get: function get() {
            var tuttiAssenti = true;
            this.listPresenze.forEach(function (elem) {
              if (elem.PRESENTE) {
                tuttiAssenti = false;
              }
            });
            return tuttiAssenti;
          }
        }]);

        return AgendaTrainerDetailPage;
      }();

      AgendaTrainerDetailPage.ɵfac = function AgendaTrainerDetailPage_Factory(t) {
        return new (t || AgendaTrainerDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_5__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]));
      };

      AgendaTrainerDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AgendaTrainerDetailPage,
        selectors: [["app-agenda-trainer-detail"]],
        decls: 45,
        vars: 26,
        consts: [["color", "primary"], ["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back"], ["mode", "md", 4, "ngIf"], ["scrolleEvents", "", 3, "ionScroll"], [2, "height", "1vh"], [1, "ion-no-padding", "div-header"], ["lines", "none", "color", "light"], ["slot", "start", "name", "school-outline", "color", "primary"], [1, "ion-text-wrap"], [1, "ion-padding-horizontal", "info"], ["name", "information-circle-outline", "color", "primary"], [4, "ngIf"], [1, "notes"], ["color", "light"], ["slot", "start", "name", "pencil-outline"], ["placeholder", "Inserisci una nota", "maxlength", "200", 3, "disabled", "ngModel", "ngModelChange"], ["class", "notes", 4, "ngIf"], ["color", "primary", "expand", "block", 3, "disabled", "click"], ["mode", "md"], ["id", "segment", "color", "primary", 3, "disabled", "ngModel", "ngModelChange", "ionChange"], ["value", "presente", "fill", "outline", "layout", "icon-start"], ["color", "primary", "name", "thumbs-up"], ["value", "assente", "layout", "icon-start"], ["color", "primary", "name", "thumbs-down"], [3, "button", "click", 4, "ngFor", "ngForOf"], [3, "button", "click"], ["slot", "start", "name", "thumbs-up-outline", "color", "primary", 4, "ngIf"], ["slot", "start", "name", "thumbs-down-outline", "color", "danger", 4, "ngIf"], ["slot", "start", "color", "", "name", "person-circle-outline", 4, "ngIf"], ["slot", "end", 3, "color", 4, "ngIf"], ["slot", "start", "name", "thumbs-up-outline", "color", "primary"], ["slot", "start", "name", "thumbs-down-outline", "color", "danger"], ["slot", "start", "color", "", "name", "person-circle-outline"], [1, "custom-badge", 3, "color"], ["slot", "end", 3, "color"]],
        template: function AgendaTrainerDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgendaTrainerDetailPage_Template_ion_button_click_3_listener() {
              return ctx.onGoBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Presenze");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AgendaTrainerDetailPage_ion_toolbar_7_Template, 10, 2, "ion-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionScroll", function AgendaTrainerDetailPage_Template_ion_content_ionScroll_8_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AgendaTrainerDetailPage_ion_item_group_32_Template, 5, 1, "ion-item-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AgendaTrainerDetailPage_ion_item_group_33_Template, 5, 1, "ion-item-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-item-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "ion-item-divider", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Note per la segreteria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "ion-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AgendaTrainerDetailPage_Template_ion_textarea_ngModelChange_40_listener($event) {
              return ctx.selectedPianificazione.NOTETRAINER = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, AgendaTrainerDetailPage_ion_item_group_41_Template, 9, 1, "ion-item-group", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "ion-button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AgendaTrainerDetailPage_Template_ion_button_click_43_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " Conferma ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showTabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 13, ctx.selectedPianificazione.DATAORAINIZIO, "EEEE dd/MM/yyyy "));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 16, ctx.selectedPianificazione.DATAORAINIZIO, "H.mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](20, 19, ctx.selectedPianificazione.DATAORAFINE, "H.mm"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.selectedPianificazione["_DENOMINAZIONE_Corso"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 22, ctx.selectedPianificazione["_DENOMINAZIONE_Location"]) + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 24, ctx.selectedPianificazione["_DENOMINAZIONE_Campo"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.selectedPianificazione.msgCanUpdatePresenze(ctx.gapAggiornamentoPresenze), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listPresenzeConfermate.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listPresenzeInProva.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedPianificazione.canUpdatePresenze(ctx.gapAggiornamentoPresenze))("ngModel", ctx.selectedPianificazione.NOTETRAINER);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedPianificazione.NOTEADMIN && ctx.selectedPianificazione.NOTEADMIN.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedPianificazione.canUpdatePresenze(ctx.gapAggiornamentoPresenze));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegmentButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]],
        styles: ["div.div-header[_ngcontent-%COMP%]    > ion-item[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  font-size: 50px;\n}\n\nion-badge.custom-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px;\n  display: ruby-base;\n  margin-left: 8px;\n}\n\nion-item-group[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\ndiv.info[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n  margin-bottom: 0px;\n  font-style: italic;\n}\n\n.notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-style: italic !important;\n  color: grey !important;\n}\n\nion-item-group[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWdlbmRhLXRyYWluZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtBQUZaOztBQVFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0FBTEo7O0FBU0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFZSTtFQUNJLGtCQUFBO0FBVFI7O0FBV0k7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0FBVFI7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBVkoiLCJmaWxlIjoiYWdlbmRhLXRyYWluZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kaXYtaGVhZGVye1xyXG4gICAgPmlvbi1pdGVte1xyXG4gICAgICAgID5pb24taWNvbntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWJhZGdlLmN1c3RvbS1iYWRnZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtLWdyb3Vwe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuZGl2LmluZm97XHJcbiAgICA+cHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3Rlc3tcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWF7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWl0ZW0tZ3JvdXB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Nj9d":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer-detail/agenda-trainer-detail.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: AgendaTrainerDetailPageModule */

    /***/
    function Nj9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerDetailPageModule", function () {
        return AgendaTrainerDetailPageModule;
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


      var _agenda_trainer_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agenda-trainer-detail-routing.module */
      "00EI");
      /* harmony import */


      var _agenda_trainer_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agenda-trainer-detail.page */
      "AbB1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgendaTrainerDetailPageModule = function AgendaTrainerDetailPageModule() {
        _classCallCheck(this, AgendaTrainerDetailPageModule);
      };

      AgendaTrainerDetailPageModule.ɵfac = function AgendaTrainerDetailPageModule_Factory(t) {
        return new (t || AgendaTrainerDetailPageModule)();
      };

      AgendaTrainerDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AgendaTrainerDetailPageModule
      });
      AgendaTrainerDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_trainer_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaTrainerDetailPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AgendaTrainerDetailPageModule, {
          declarations: [_agenda_trainer_detail_page__WEBPACK_IMPORTED_MODULE_4__["AgendaTrainerDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_trainer_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaTrainerDetailPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=agenda-trainer-detail-agenda-trainer-detail-module-es5.js.map