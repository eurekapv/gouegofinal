(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agenda-trainer-agenda-trainer-module"], {
    /***/
    "9Xeq":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/pipes.module.ts ***!
      \**********************************************/

    /*! exports provided: PipesModule */

    /***/
    function Xeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./label-giorno.pipe */
      "Tgan");
      /* harmony import */


      var _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./struttura-campo.pipe */
      "OOC/");
      /* harmony import */


      var _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tipo-campo.pipe */
      "Hx3r");
      /* harmony import */


      var _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settore-attivita.pipe */
      "ozjt");
      /* harmony import */


      var _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tipo-corso.pipe */
      "KU5w");
      /* harmony import */


      var _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./target-sesso.pipe */
      "ukHt");
      /* harmony import */


      var _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stato-slot.pipe */
      "s17d");
      /* harmony import */


      var _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stato-prenotazione.pipe */
      "YH3n");
      /* harmony import */


      var _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ambito-news.pipe */
      "UfKR");
      /* harmony import */


      var _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./giorni-previsti.pipe */
      "uxXW");
      /* harmony import */


      var _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./classe-documento.pipe */
      "YFTx");
      /* harmony import */


      var _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tipomasterdocumento.pipe */
      "xVAv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵfac = function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PipesModule, {
          declarations: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"], _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"], _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"], _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"], _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"], _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"], _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"], _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"], _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"], _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"], _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"], _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]],
          exports: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"], _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"], _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"], _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"], _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"], _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"], _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"], _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"], _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"], _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"], _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"], _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]]
        });
      })();
      /***/

    },

    /***/
    "Hx3r":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/tipo-campo.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TipoCampoPipe */

    /***/
    function Hx3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCampoPipe", function () {
        return TipoCampoPipe;
      });
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipoCampoPipe = /*#__PURE__*/function () {
        function TipoCampoPipe() {
          _classCallCheck(this, TipoCampoPipe);
        }

        _createClass(TipoCampoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCampo"], value);
            return label;
          }
        }]);

        return TipoCampoPipe;
      }();

      TipoCampoPipe.ɵfac = function TipoCampoPipe_Factory(t) {
        return new (t || TipoCampoPipe)();
      };

      TipoCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipoCampo",
        type: TipoCampoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "J8jY":
    /*!*************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer.page.ts ***!
      \*************************************************************/

    /*! exports provided: ViewTrainerCourse, AgendaTrainerPage */

    /***/
    function J8jY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewTrainerCourse", function () {
        return ViewTrainerCourse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerPage", function () {
        return AgendaTrainerPage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/library/models/mydatetime.model */
      "K4nM");
      /* harmony import */


      var src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/itemCalendario.model */
      "IidP");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _valutazione_trainer_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./valutazione-trainer/valutazione-trainer.page */
      "c5HV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/components/item-calendario/item-calendario.component */
      "2BDZ");
      /* harmony import */


      var _shared_pipes_giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/pipes/giorni-previsti.pipe */
      "uxXW");

      function AgendaTrainerPage_div_19_ion_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "E' possibile ottenere l'elenco degli impegni giornalieri, settimanali o mensili");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AgendaTrainerPage_div_19_ion_item_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Ricerca Impegni");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function AgendaTrainerPage_div_19_ion_item_9_Template_ion_select_ionChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r6.onChangePageRangeSearch($event);
          })("ngModelChange", function AgendaTrainerPage_div_19_ion_item_9_Template_ion_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r8.rangeSearchPianificazioni = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Giornalieri");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Settimanali");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Mensili");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.rangeSearchPianificazioni);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.PageRangeSearch.giorno);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.PageRangeSearch.settimana);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.PageRangeSearch.mese);
        }
      }

      function AgendaTrainerPage_div_19_div_14_app_item_calendario_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-item-calendario", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaTrainerPage_div_19_div_14_app_item_calendario_2_Template_app_item_calendario_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);

            var pianificazione_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

            return ctx_r11.onClickImpegno(pianificazione_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pianificazione_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", ctx_r9.getItemParamsFromPianificazione(pianificazione_r10))("showDate", ctx_r9.rangeSearchPianificazioni != ctx_r9.PageRangeSearch.giorno);
        }
      }

      function AgendaTrainerPage_div_19_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-list", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AgendaTrainerPage_div_19_div_14_app_item_calendario_2_Template, 1, 2, "app-item-calendario", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.myListPianificazioni);
        }
      }

      function AgendaTrainerPage_div_19_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nessun corso trovato");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AgendaTrainerPage_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-item-divider", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaTrainerPage_div_19_Template_ion_item_divider_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r13.onChangeCollapseFilterPianificazioni();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AgendaTrainerPage_div_19_ion_item_8_Template, 5, 0, "ion-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AgendaTrainerPage_div_19_ion_item_9_Template, 11, 4, "ion-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-datetime", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AgendaTrainerPage_div_19_Template_ion_datetime_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.selectedIsoDate = $event;
          })("ngModelChange", function AgendaTrainerPage_div_19_Template_ion_datetime_ngModelChange_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r16.onChangeFilterDateImpegni();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AgendaTrainerPage_div_19_div_14_Template, 3, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, AgendaTrainerPage_div_19_div_15_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r0.collapsedFilterPianificazioni ? "chevron-down-outline" : "chevron-up-outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getLabelFilterImpegni());

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.collapsedFilterPianificazioni);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.collapsedFilterPianificazioni);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dayNames", ctx_r0.settimana)("ngModel", ctx_r0.selectedIsoDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.myListPianificazioni && ctx_r0.myListPianificazioni.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.myListPianificazioni || ctx_r0.myListPianificazioni.length == 0);
        }
      }

      function AgendaTrainerPage_div_20_ion_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Elenco dei corsi svolti, in esecuzione o da eseguire prossimamente come trainer o assistente. Al termine del corso potrai dare una valutazione finale dei partecipanti, assegnando eventualmente un nuovo livello raggiunto");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AgendaTrainerPage_div_20_div_19_ion_list_1_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaTrainerPage_div_20_div_19_ion_list_1_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

            var corso_r22 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

            return ctx_r23.onClickCorso(corso_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "giorniPrevisti");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var corso_r22 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r21.getColorIconCorso(corso_r22));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 10, corso_r22.DATAINIZIO, "EEEE dd/MM/yyyy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 15, corso_r22.DATAFINE, "EEEE dd/MM/yyyy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", corso_r22["_DENOMINAZIONE_Sport"], " in ", corso_r22["_DENOMINAZIONE_Location"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](16, 20, corso_r22.GIORNIPREVISTI, ctx_r21.lingua)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", corso_r22.DATAFINE > ctx_r21.today && corso_r22.DATAINIZIO < ctx_r21.today ? "success" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](19, 23, corso_r22.ORAINIZIO, "HH:mm"), " ");
        }
      }

      function AgendaTrainerPage_div_20_div_19_ion_list_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AgendaTrainerPage_div_20_div_19_ion_list_1_ion_item_1_Template, 21, 26, "ion-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.myListCorsi);
        }
      }

      function AgendaTrainerPage_div_20_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AgendaTrainerPage_div_20_div_19_ion_list_1_Template, 2, 1, "ion-list", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r18.myListCorsi.length !== 0);
        }
      }

      function AgendaTrainerPage_div_20_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Nessun corso trovato");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AgendaTrainerPage_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-item-divider", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AgendaTrainerPage_div_20_Template_ion_item_divider_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.onChangeCollapseFilterCorsi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Corsi che risultano");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AgendaTrainerPage_div_20_ion_item_8_Template, 5, 0, "ion-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function AgendaTrainerPage_div_20_Template_ion_select_ionChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r27.onChangeTimeState($event);
          })("ngModelChange", function AgendaTrainerPage_div_20_Template_ion_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r28.selectedTimeState = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Conclusi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " In Esecuzione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-select-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Futuri ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AgendaTrainerPage_div_20_div_19_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, AgendaTrainerPage_div_20_div_20_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r1.collapsedFilterCorsi ? "chevron-down-outline" : "chevron-up-outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.collapsedFilterCorsi);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.selectedTimeState);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.TimeStateCourse.passati);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.TimeStateCourse.attivi);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.TimeStateCourse.futuri);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.myListCorsi && ctx_r1.myListCorsi.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.myListCorsi || ctx_r1.myListCorsi.length == 0);
        }
      }

      var ViewTrainerCourse;

      (function (ViewTrainerCourse) {
        ViewTrainerCourse["impegni"] = "impegni";
        ViewTrainerCourse["corsi"] = "corsi";
      })(ViewTrainerCourse || (ViewTrainerCourse = {}));

      var AgendaTrainerPage = /*#__PURE__*/function () {
        function AgendaTrainerPage(startService, navController, loadingController, toastController, alertController, modalController) {
          _classCallCheck(this, AgendaTrainerPage);

          this.startService = startService;
          this.navController = navController;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.alertController = alertController;
          this.modalController = modalController;
          this.lingua = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["Language"].italiano;
          this.utente = new src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_3__["Utente"](); //Impegni

          this.myListPianificazioni = [];
          this.selectedDate = new Date();
          this.selectedIsoDate = this.selectedDate.toISOString(); //Criteri ricerca delle pianificazioni

          this.rangeSearchPianificazioni = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].giorno;
          this.PageRangeSearch = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"]; //Il Gruppo con i Filtri degli impegni puo' essere collassato o aperto

          this.collapsedFilterPianificazioni = true; //Il Gruppo con i Filtri degli impegni puo' essere collassato o aperto

          this.collapsedFilterCorsi = true; //Elenco Corsi

          this.myListCorsi = [];
          this.showFilter = true; //FIXME: C'e' gia un enum con i giorni della settimana

          this.settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']; //Viste della pagina

          this.PageView = ViewTrainerCourse;
          this.selectedView = ViewTrainerCourse.impegni; //Stati di un corso con la data odierna

          this.TimeStateCourse = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["TimeTrainerCourse"];
          this.selectedTimeState = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["TimeTrainerCourse"].attivi;
          this.today = new Date(); //Ascolto i cambiamenti per la Lista Corsi

          this.listenChangeListCorsi();
        }

        _createClass(AgendaTrainerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //recupero l'utente
            this.utente = this.startService.actualUtente; //se sono un trainer

            if (this.utente.isTrainer || this.utente.isAssistenteTrainer) {
              this.requestImpegni();
            } else {
              this.navController.navigateRoot('/home');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subListenCorsi) {
              this.subListenCorsi.unsubscribe();
            }
          }
          /**
           * Calcola le Date Inizio e Fine per effettuare la richiesta Impegni
           * @returns IRangeDate con inizio e fine
           */

        }, {
          key: "prepareDateForSearchImpegni",
          value: function prepareDateForSearchImpegni() {
            var dataInizio;
            var dataFine;
            var range;

            if (this.rangeSearchPianificazioni == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].giorno) {
              dataInizio = this.selectedDate;
              dataFine = this.selectedDate;
            } else if (this.rangeSearchPianificazioni == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].settimana) {
              //Imposto da Domenica a Domenica
              dataInizio = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].getStartEndDate(this.selectedDate, 'week', 'start');
              dataFine = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].getStartEndDate(this.selectedDate, 'week', 'end');
            } else if (this.rangeSearchPianificazioni == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].mese) {
              //Dal 1 a fine Mese
              dataInizio = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].getStartEndDate(this.selectedDate, 'month', 'start');
              dataFine = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].getStartEndDate(this.selectedDate, 'month', 'end');
            } //Preparo il range e lo ritorno


            range = {
              startDate: dataInizio,
              endDate: dataFine
            };
            return range;
          }
          /**
           * Richiedo al server le date pianificate dei corsi
           */

        }, {
          key: "requestImpegni",
          value: function requestImpegni(event) {
            var _this = this;

            var rangeDate; //creo il loading

            this.loadingController.create({
              message: 'Caricamento...',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (elLoading) {
              elLoading.present(); //Preparo le date da utilizzare per la ricerca

              rangeDate = _this.prepareDateForSearchImpegni(); //Chiudo il collapsed

              _this.collapsedFilterPianificazioni = true; //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"

              _this.startService.requestImpegniTrainer(_this.utente.ID, rangeDate.startDate, rangeDate.endDate).then(function (result) {
                _this.myListPianificazioni = result;
                elLoading.dismiss();

                if (event && event.target) {
                  event.target.complete();
                }
              })["catch"](function (error) {
                if (event && event.target) {
                  event.target.complete();
                }

                elLoading.dismiss();
                console.log(error);

                _this.showMessage('Errore di connessione');
              });
            });
          }
          /**
           * Richiedo al server i Corsi
           * @param event
           */

        }, {
          key: "requestTimeCorsi",
          value: function requestTimeCorsi(event) {
            var _this2 = this;

            //creo il loading
            this.loadingController.create({
              message: 'Caricamento...',
              spinner: 'circular',
              backdropDismiss: true
            }).then(function (elLoading) {
              if (event && event.target) {
                event.target.complete();
              } //Mostro il loading


              _this2.myLoadingForCorsi = elLoading;

              _this2.myLoadingForCorsi.present(); //Devo effettuare la richiesta per i nuovi corsi
              //Sono Observable e quindi verranno popolati in autonomia


              _this2.startService.requestTimeTrainerCourse(_this2.utente.ID, _this2.selectedTimeState); //Il Dismiss ci pensera la funzione dell'Observable a spegnerlo

            });
          }
          /**
           * Click su un elemento della Lista Impegni
           * @param elImpegno Elemento selezionato
           */

        }, {
          key: "onClickImpegno",
          value: function onClickImpegno(elImpegno) {
            this.navController.navigateForward('/agenda-trainer/' + elImpegno.ID); // this.navController.navigateForward('/agenda-trainer/' + elem.ID+'-'+elem.IDCORSO);
          }
          /**
           * Quando viene scelto un corso, si vuole accedere alla Scheda di Valutazione
           * E' necessario chiedere informazioni al server
           * @param elCorso
           *
           */

        }, {
          key: "onClickCorso",
          value: function onClickCorso(elCorso) {
            var _this3 = this;

            if (elCorso) {
              this.loadingController.create({
                message: 'Caricamento...',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                elLoading.present(); //Effettuo la richiesta al server

                _this3.startService.requestSchedaValutazioneCorso(elCorso.ID).then(function (docScheda) {
                  //Chiedo al server i livelli per lo sport
                  _this3.startService.requestLivelliForSport(elCorso.IDSPORT).then(function (collLivelli) {
                    //Chiudo il loading
                    elLoading.dismiss(); //Devo aprire la videata in modale passando 
                    //a) Scheda di Valutazione
                    //b) Corso di riferimento
                    //c) Livelli Sportivi

                    _this3.openModaleSchedaValutazione(docScheda, elCorso, collLivelli);
                  });
                })["catch"](function (error) {
                  elLoading.dismiss(); //Mostro un messaggio

                  _this3.showMessage(error, 'alert');
                });
              });
            }
          }
          /**
           * Apre in modale la videata ValutazioneTrainer
           * passando la scheda da mostrare
           * @param docScheda Scheda di Valutazione
           * @param docCorso Corso di riferimento
           */

        }, {
          key: "openModaleSchedaValutazione",
          value: function openModaleSchedaValutazione(docScheda, docCorso, collLivelli) {
            //Scheda di Valutazione e Corso presente
            if (docScheda && docCorso) {
              this.modalController.create({
                component: _valutazione_trainer_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_6__["ValutazioneTrainerPage"],
                componentProps: {
                  'docCorsoValutazione': docScheda,
                  'docCorso': docCorso,
                  'collLivelli': collLivelli
                }
              }).then(function (elModal) {
                elModal.present();
              });
            }
          }
          /**
           * Visualizza un messaggio
           */

        }, {
          key: "showMessage",
          value: function showMessage(messaggio, type) {
            if (type == 'alert') {
              var alertOptions = {
                message: messaggio,
                buttons: ['OK']
              };
              this.alertController.create(alertOptions).then(function (elAlert) {
                elAlert.present();
              });
            } else {
              this.toastController.create({
                message: messaggio,
                duration: 3000
              }).then(function (elToast) {
                elToast.present();
              });
            }
          }
          /**
           * Nella pagina Impegni è stato modificata il filtro Data
           * per la ricerca
           */

        }, {
          key: "onChangeFilterDateImpegni",
          value: function onChangeFilterDateImpegni() {
            this.selectedDate = new Date(this.selectedIsoDate);
            this.requestImpegni();
          }
          /**
           * Nella pagina Impegni è stato premuto Item-Divider-Group
           * per cambiare il collassamento dei dati
           */

        }, {
          key: "onChangeCollapseFilterPianificazioni",
          value: function onChangeCollapseFilterPianificazioni() {
            if (this.collapsedFilterPianificazioni) {
              this.collapsedFilterPianificazioni = false;
            } else {
              this.collapsedFilterPianificazioni = true;
            }
          }
          /**
           * Nella pagina Corsi è stato premuto Item-Divider-Group
           * per cambiare il collassamento dei dati
           */

        }, {
          key: "onChangeCollapseFilterCorsi",
          value: function onChangeCollapseFilterCorsi() {
            if (this.collapsedFilterCorsi) {
              this.collapsedFilterCorsi = false;
            } else {
              this.collapsedFilterCorsi = true;
            }
          }
          /**
           * Pagina Impegni, è stato modificato il PageRangeSearch
           * per recuperare gli impegni con un range giornaliero, settimanale, mensile
           * @param event
           */

        }, {
          key: "onChangePageRangeSearch",
          value: function onChangePageRangeSearch(event) {
            //Devo effettuare nuovamente la ricerca degli impegni
            //Recupero nuovamente gli Impegni
            this.requestImpegni();
          }
        }, {
          key: "getItemParamsFromPianificazione",
          value: function getItemParamsFromPianificazione(pianificazioneElem) {
            return src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_2__["ItemCalendario"].getParamsPianificazioneCorso(pianificazioneElem);
          }
          /**
           *
           * @param idSport idSport
           * @returns Ritorna l'icona sport da usare
           */

        }, {
          key: "getIconSport",
          value: function getIconSport(idSport) {
            return this.startService.getSportIcon(idSport);
          }
          /**
           * Ritorna il colore da applicare alla riga della Lista Corsi
           * @param elCorso
           */

        }, {
          key: "getColorIconCorso",
          value: function getColorIconCorso(elCorso) {
            var color = 'primary';
            var today = new Date(src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateISO(new Date()));

            if (elCorso) {
              if (elCorso.DATAFINE < today) {
                //Già concluso
                color = 'danger';
              } else if (elCorso.DATAINIZIO > today) {
                //Futuri
                color = 'warning';
              } else {
                //Attuali
                color = 'success';
              }
            }

            return color;
          }
          /**
           * Etichetta da mostrare nella Barra di ricerca
           * Pagina Impegni
           * Il valore dipende dalla variabile rangeSearchPianificazioni
           */

        }, {
          key: "getLabelFilterImpegni",
          value: function getLabelFilterImpegni() {
            var label;

            switch (this.rangeSearchPianificazioni) {
              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].giorno:
                label = 'Impegni giornalieri';
                break;

              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].settimana:
                label = 'Impegni settimanali';
                break;

              case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["RangeSearch"].mese:
                label = 'Impegni mensili';
                break;

              default:
                break;
            }

            return label;
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (event.detail.currentY < 5) {
              this.showFilter = true;
            } else {
              if (event['detail']['deltaY'] > 20) {
                this.showFilter = false;
              } else if (event['detail']['deltaY'] < -20) {
                this.showFilter = true;
              }
            }
          }
          /**
           * Utente ha richiesto un refresh dei dati
           * @param event
           */

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            if (this.selectedView == this.PageView.impegni) {
              this.requestImpegni(event);
            } else if (this.selectedView == this.PageView.corsi) {
              this.requestTimeCorsi(event);
            }
          }
          /**
           * L'utente ha scelto un altra pagina
           * @param value Cambio Visualizzazione del Segment
           */

        }, {
          key: "onChangeSegment",
          value: function onChangeSegment(value) {
            //ngModel su HTML modifica la prorpieta, qui 
            //nel caso debba effettuare operazioni al cambio
            switch (this.selectedView) {
              case ViewTrainerCourse.corsi:
                //Scelta Corsi
                this.requestTimeCorsi();
                break;

              case ViewTrainerCourse.impegni:
                //Scelta Pianificazioni
                this.requestImpegni();
                break;

              default:
                break;
            }
          }
          /**
          * Cambio del valore di ricerca per l'elenco corsi
          * @param value Valore selezionato
          */

        }, {
          key: "onChangeTimeState",
          value: function onChangeTimeState(value) {
            //Devo effettuare la richiesta per i nuovi corsi
            this.requestTimeCorsi();
          }
          /**
          * Sottoscrizione all'ascolto della lista dei corsi Trainer (Passati, presenti, futuri)
          */

        }, {
          key: "listenChangeListCorsi",
          value: function listenChangeListCorsi() {
            var _this4 = this;

            this.subListenCorsi = this.startService.listCorsiTrainer.subscribe(function (listElement) {
              _this4.myListCorsi = listElement;

              if (_this4.myLoadingForCorsi) {
                _this4.myLoadingForCorsi.dismiss();
              }
            }, function (error) {
              _this4.myListCorsi = [];

              if (_this4.myLoadingForCorsi) {
                _this4.myLoadingForCorsi.dismiss();
              }
            });
          }
        }]);

        return AgendaTrainerPage;
      }();

      AgendaTrainerPage.ɵfac = function AgendaTrainerPage_Factory(t) {
        return new (t || AgendaTrainerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_5__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]));
      };

      AgendaTrainerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: AgendaTrainerPage,
        selectors: [["app-agenda-trainer"]],
        decls: 21,
        vars: 5,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/home"], ["mode", "md"], [3, "ngModel", "ngModelChange", "ionChange"], [3, "value"], ["name", "today-outline"], ["name", "bar-chart-outline"], ["scrollEvents", "", 3, "ionScroll"], ["slot", "fixed", 3, "ionRefresh"], ["class", "contentExpand", 4, "ngIf"], [1, "contentExpand"], ["color", "light", 1, "ion-padding-vertical", 3, "click"], ["slot", "start", 3, "name"], ["lines", "none", "color", "", 4, "ngIf"], ["lines", "none", "color", ""], ["slot", "start", "name", "calendar-outline", "color", "primary"], ["displayFormat", "DDDD - DD/MM/YYYY", 3, "dayNames", "ngModel", "ngModelChange"], ["name", "chevron-down-outline", "color", "primary", "slot", "end"], ["class", "ion-no-padding", 4, "ngIf"], ["class", "nofind-cnt", 4, "ngIf"], [1, "ion-text-wrap"], ["slot", "start", "name", "information-circle-outline"], ["slot", "start", "name", "search-circle-outline"], ["mode", "ios", "interface", "action-sheet", "okText", "Conferma", "cancelText", "Annulla", 3, "ngModel", "ionChange", "ngModelChange"], [1, "ion-no-padding"], [1, "ion-padding-vertical"], [3, "params", "showDate", "click", 4, "ngFor", "ngForOf"], [3, "params", "showDate", "click"], [1, "nofind-cnt"], ["slot", "start", "name", "hourglass-outline", "color", "primary"], ["mode", "ios", "interface", "action-sheet", 3, "ngModel", "ionChange", "ngModelChange"], [4, "ngIf"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["name", "school", "slot", "start", 1, "icon-school", 3, "color"], [3, "color"], ["name", "time-outline"]],
        template: function AgendaTrainerPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Agenda Impegni");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-segment", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AgendaTrainerPage_Template_ion_segment_ngModelChange_7_listener($event) {
              return ctx.selectedView = $event;
            })("ionChange", function AgendaTrainerPage_Template_ion_segment_ionChange_7_listener($event) {
              return ctx.onChangeSegment($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-segment-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Impegni");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-segment-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Valutazioni");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionScroll", function AgendaTrainerPage_Template_ion_content_ionScroll_16_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-refresher", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionRefresh", function AgendaTrainerPage_Template_ion_refresher_ionRefresh_17_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AgendaTrainerPage_div_19_Template, 16, 8, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, AgendaTrainerPage_div_20_Template, 21, 8, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedView);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.PageView.impegni);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.PageView.corsi);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedView == ctx.PageView.impegni);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedView == ctx.PageView.corsi);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSelectOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_10__["ItemCalendarioComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _shared_pipes_giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_11__["GiorniPrevistiPipe"]],
        styles: [".contentExpand[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZ2VuZGEtdHJhaW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6ImFnZW5kYS10cmFpbmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50RXhwYW5kIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "KU5w":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/tipo-corso.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TipoCorsoPipe */

    /***/
    function KU5w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoCorsoPipe", function () {
        return TipoCorsoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipoCorsoPipe = /*#__PURE__*/function () {
        function TipoCorsoPipe() {
          _classCallCheck(this, TipoCorsoPipe);
        }

        _createClass(TipoCorsoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCorso"], value);
            return label;
          }
        }]);

        return TipoCorsoPipe;
      }();

      TipoCorsoPipe.ɵfac = function TipoCorsoPipe_Factory(t) {
        return new (t || TipoCorsoPipe)();
      };

      TipoCorsoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipoCorso",
        type: TipoCorsoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "Kyl5":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AgendaTrainerPageRoutingModule */

    /***/
    function Kyl5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerPageRoutingModule", function () {
        return AgendaTrainerPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agenda_trainer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agenda-trainer.page */
      "J8jY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _agenda_trainer_page__WEBPACK_IMPORTED_MODULE_1__["AgendaTrainerPage"]
      }, {
        path: ':pianificazioneCorsoId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | agenda-trainer-detail-agenda-trainer-detail-module */
          "agenda-trainer-detail-agenda-trainer-detail-module").then(__webpack_require__.bind(null,
          /*! ./agenda-trainer-detail/agenda-trainer-detail.module */
          "Nj9d")).then(function (m) {
            return m.AgendaTrainerDetailPageModule;
          });
        }
      }];

      var AgendaTrainerPageRoutingModule = function AgendaTrainerPageRoutingModule() {
        _classCallCheck(this, AgendaTrainerPageRoutingModule);
      };

      AgendaTrainerPageRoutingModule.ɵfac = function AgendaTrainerPageRoutingModule_Factory(t) {
        return new (t || AgendaTrainerPageRoutingModule)();
      };

      AgendaTrainerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AgendaTrainerPageRoutingModule
      });
      AgendaTrainerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaTrainerPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "OOC/":
    /*!******************************************************!*\
      !*** ./src/app/shared/pipes/struttura-campo.pipe.ts ***!
      \******************************************************/

    /*! exports provided: StrutturaCampoPipe */

    /***/
    function OOC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StrutturaCampoPipe", function () {
        return StrutturaCampoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StrutturaCampoPipe = /*#__PURE__*/function () {
        function StrutturaCampoPipe() {
          _classCallCheck(this, StrutturaCampoPipe);
        }

        _createClass(StrutturaCampoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StrutturaCampo"], value);
            return label;
          }
        }]);

        return StrutturaCampoPipe;
      }();

      StrutturaCampoPipe.ɵfac = function StrutturaCampoPipe_Factory(t) {
        return new (t || StrutturaCampoPipe)();
      };

      StrutturaCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "strutturaCampo",
        type: StrutturaCampoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "TdLn":
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/valutazione-trainer/valutazione-trainer-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: ValutazioneTrainerPageRoutingModule */

    /***/
    function TdLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValutazioneTrainerPageRoutingModule", function () {
        return ValutazioneTrainerPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./valutazione-trainer.page */
      "c5HV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_1__["ValutazioneTrainerPage"]
      }];

      var ValutazioneTrainerPageRoutingModule = function ValutazioneTrainerPageRoutingModule() {
        _classCallCheck(this, ValutazioneTrainerPageRoutingModule);
      };

      ValutazioneTrainerPageRoutingModule.ɵfac = function ValutazioneTrainerPageRoutingModule_Factory(t) {
        return new (t || ValutazioneTrainerPageRoutingModule)();
      };

      ValutazioneTrainerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ValutazioneTrainerPageRoutingModule
      });
      ValutazioneTrainerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ValutazioneTrainerPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Tgan":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/label-giorno.pipe.ts ***!
      \***************************************************/

    /*! exports provided: LabelGiornoPipe */

    /***/
    function Tgan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabelGiornoPipe", function () {
        return LabelGiornoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LabelGiornoPipe = /*#__PURE__*/function () {
        function LabelGiornoPipe() {
          _classCallCheck(this, LabelGiornoPipe);
        }

        _createClass(LabelGiornoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';

            switch (value) {
              case 1:
                label = 'domenica';
                break;

              case 2:
                label = 'lunedi\'';
                break;

              case 3:
                label = 'martedi\'';
                break;

              case 4:
                label = 'mercoledi\'';
                break;

              case 5:
                label = 'giovedi\'';
                break;

              case 6:
                label = 'venerdi\'';
                break;

              case 7:
                label = 'sabato';
                break;
            }

            return label;
          }
        }]);

        return LabelGiornoPipe;
      }();

      LabelGiornoPipe.ɵfac = function LabelGiornoPipe_Factory(t) {
        return new (t || LabelGiornoPipe)();
      };

      LabelGiornoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "labelGiorno",
        type: LabelGiornoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "UfKR":
    /*!**************************************************!*\
      !*** ./src/app/shared/pipes/ambito-news.pipe.ts ***!
      \**************************************************/

    /*! exports provided: AmbitoNewsPipe */

    /***/
    function UfKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmbitoNewsPipe", function () {
        return AmbitoNewsPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AmbitoNewsPipe = /*#__PURE__*/function () {
        function AmbitoNewsPipe() {
          _classCallCheck(this, AmbitoNewsPipe);
        }

        _createClass(AmbitoNewsPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["AmbitoNews"], value);
            return label;
          }
        }]);

        return AmbitoNewsPipe;
      }();

      AmbitoNewsPipe.ɵfac = function AmbitoNewsPipe_Factory(t) {
        return new (t || AmbitoNewsPipe)();
      };

      AmbitoNewsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "ambitoNews",
        type: AmbitoNewsPipe,
        pure: true
      });
      /***/
    },

    /***/
    "YFTx":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/classe-documento.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: ClasseDocumentoPipe */

    /***/
    function YFTx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClasseDocumentoPipe", function () {
        return ClasseDocumentoPipe;
      });
      /* harmony import */


      var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/tipodocumentazione.model */
      "ci2e");
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClasseDocumentoPipe = /*#__PURE__*/function () {
        function ClasseDocumentoPipe() {
          _classCallCheck(this, ClasseDocumentoPipe);
        }

        _createClass(ClasseDocumentoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].decode(src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["ClasseDocumento"], value);
            return label;
          }
        }]);

        return ClasseDocumentoPipe;
      }();

      ClasseDocumentoPipe.ɵfac = function ClasseDocumentoPipe_Factory(t) {
        return new (t || ClasseDocumentoPipe)();
      };

      ClasseDocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "classeDocumento",
        type: ClasseDocumentoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "YH3n":
    /*!*********************************************************!*\
      !*** ./src/app/shared/pipes/stato-prenotazione.pipe.ts ***!
      \*********************************************************/

    /*! exports provided: StatoPrenotazionePipe */

    /***/
    function YH3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoPrenotazionePipe", function () {
        return StatoPrenotazionePipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatoPrenotazionePipe = /*#__PURE__*/function () {
        function StatoPrenotazionePipe() {
          _classCallCheck(this, StatoPrenotazionePipe);
        }

        _createClass(StatoPrenotazionePipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoPrenotazione"], value);
            return label;
          }
        }]);

        return StatoPrenotazionePipe;
      }();

      StatoPrenotazionePipe.ɵfac = function StatoPrenotazionePipe_Factory(t) {
        return new (t || StatoPrenotazionePipe)();
      };

      StatoPrenotazionePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "statoPrenotazione",
        type: StatoPrenotazionePipe,
        pure: true
      });
      /***/
    },

    /***/
    "aNjl":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/valutazione-trainer/valutazione-trainer.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: ValutazioneTrainerPageModule */

    /***/
    function aNjl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValutazioneTrainerPageModule", function () {
        return ValutazioneTrainerPageModule;
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


      var _valutazione_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./valutazione-trainer-routing.module */
      "TdLn");
      /* harmony import */


      var _valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./valutazione-trainer.page */
      "c5HV");
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

      var ValutazioneTrainerPageModule = function ValutazioneTrainerPageModule() {
        _classCallCheck(this, ValutazioneTrainerPageModule);
      };

      ValutazioneTrainerPageModule.ɵfac = function ValutazioneTrainerPageModule_Factory(t) {
        return new (t || ValutazioneTrainerPageModule)();
      };

      ValutazioneTrainerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: ValutazioneTrainerPageModule
      });
      ValutazioneTrainerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _valutazione_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ValutazioneTrainerPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ValutazioneTrainerPageModule, {
          declarations: [_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_4__["ValutazioneTrainerPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _valutazione_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ValutazioneTrainerPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
          exports: [_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_4__["ValutazioneTrainerPage"]]
        });
      })();
      /***/

    },

    /***/
    "c5HV":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/valutazione-trainer/valutazione-trainer.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: ValutazioneTrainerPage */

    /***/
    function c5HV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValutazioneTrainerPage", function () {
        return ValutazioneTrainerPage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/corso.model */
      "F/re");
      /* harmony import */


      var src_app_models_corsovalutazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/corsovalutazione.model */
      "IGb/");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_level_setter_level_setter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/level-setter/level-setter.component */
      "1hMp");
      /* harmony import */


      var _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/pipes/target-sesso.pipe */
      "ukHt");

      function ValutazioneTrainerPage_ion_segment_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-segment", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ValutazioneTrainerPage_ion_segment_8_Template_ion_segment_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.selectedView = $event;
          })("ionChange", function ValutazioneTrainerPage_ion_segment_8_Template_ion_segment_ionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.onChangeSegment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-segment-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Valutazione");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-segment-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Livelli");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.selectedView);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 2);
        }
      }

      function ValutazioneTrainerPage_ion_fab_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-fab", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-fab-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Prova");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ValutazioneTrainerPage_ion_item_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 1, ctx_r2.myCorso.ORAINIZIO, "HH:mm"), " ");
        }
      }

      function ValutazioneTrainerPage_ion_item_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r3.myCorso["_DENOMINAZIONE_Livello"] ? ctx_r3.myCorso["_DENOMINAZIONE_Livello"] : "Tutti i Livelli", " ");
        }
      }

      function ValutazioneTrainerPage_ion_item_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r4.myCorso["_DESCTOOLTIP_CategoriaEta"] ? ctx_r4.myCorso["_DESCTOOLTIP_CategoriaEta"] : "Per tutte le et\xE0", " ");
        }
      }

      function ValutazioneTrainerPage_ion_item_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "targetSesso");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, ctx_r5.myCorso.TARGETSESSO));
        }
      }

      function ValutazioneTrainerPage_ion_item_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Scheda Bloccata. Contattare Segreteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ValutazioneTrainerPage_div_47_ion_col_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ValutazioneTrainerPage_div_47_ion_col_5_Template_ion_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

            var i_r15 = ctx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r16.setStars(i_r15 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", element_r14 ? "star" : "star-outline");
        }
      }

      function ValutazioneTrainerPage_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Soddisfazione Corso");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ValutazioneTrainerPage_div_47_ion_col_5_Template, 2, 1, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Considerazioni finali");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-textarea", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ValutazioneTrainerPage_div_47_Template_ion_textarea_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18.myCorsoValutazione.TESTOVALUTAZIONE = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.collStars);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.canUpdate)("readonly", !ctx_r7.canUpdate)("ngModel", ctx_r7.myCorsoValutazione.TESTOVALUTAZIONE);
        }
      }

      function ValutazioneTrainerPage_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nessun iscritto al corso");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ValutazioneTrainerPage_div_48_div_2_app_level_setter_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-level-setter", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChoose", function ValutazioneTrainerPage_div_48_div_2_app_level_setter_9_Template_app_level_setter_onChoose_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r24.onChangeLivello($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iscrittoVal_r23 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", !ctx_r22.canUpdate)("listLivelli", ctx_r22.myListLivelli)("valutazione", iscrittoVal_r23);
        }
      }

      function ValutazioneTrainerPage_div_48_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Partecipanti");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-chip", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ValutazioneTrainerPage_div_48_div_2_Template_ion_chip_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r26.chooseLivelloFinale();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ValutazioneTrainerPage_div_48_div_2_app_level_setter_9_Template, 1, 3, "app-level-setter", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r21.myListValutazioni.length, "\xA0", ctx_r21.myListValutazioni.length != 1 ? "Iscritti al corso" : "Iscritto al corso", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r21.myListValutazioni);
        }
      }

      function ValutazioneTrainerPage_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ValutazioneTrainerPage_div_48_div_1_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ValutazioneTrainerPage_div_48_div_2_Template, 10, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.showAlertNoIscritti);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.showListIscritti);
        }
      }

      function ValutazioneTrainerPage_ion_footer_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ValutazioneTrainerPage_ion_footer_49_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r28.onConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Conferma Valutazione ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var ValutazioneTrainerPage = /*#__PURE__*/function () {
        function ValutazioneTrainerPage(modalCtrl, startService, actSheetController, toastController, alertController) {
          _classCallCheck(this, ValutazioneTrainerPage);

          this.modalCtrl = modalCtrl;
          this.startService = startService;
          this.actSheetController = actSheetController;
          this.toastController = toastController;
          this.alertController = alertController;
          this.canUpdate = false;
          this.cardCollapsed = true;
          this.myListLivelli = [];
          this.myListValutazioni = []; //Segmento visualizzato

          this.selectedView = 1; //Flag per la visualizzazione de Segment Button (Valutazione / Livello)
          //Se non arrivano Livelli non ha senso mostrare

          this.showSegmentButton = true; //Mostra un Alert quando non ci sono iscritti al corso

          this.showAlertNoIscritti = false; //Mostra la lista Iscritti con i livelli

          this.showListIscritti = false; //Stelle Valutazione

          this.collStars = [];
          this.starIndex = 0; //Numero massime di star

          this.maxNumberStars = 5; //Imposto 0 Stelle forzando

          this.setStars(0, true);
        }

        _createClass(ValutazioneTrainerPage, [{
          key: "docCorsoValutazione",
          set: function set(value) {
            this.myCorsoValutazione = value;
            this.canUpdate = false;

            if (value) {
              /* ESSENDO UNA BOZZA POSSO MODIFICARE */
              if (value.FLAGBOZZA) {
                this.canUpdate = true;
              }

              if (value.VOTAZIONEFINALE != undefined) {
                this.starIndex = value.VOTAZIONEFINALE;
              }

              if (value.CORSOVALUTAZIONELIVELLO) {
                if (value.CORSOVALUTAZIONELIVELLO.length != 0) {
                  //Questo è l'elenco delle valutazioni
                  this.myListValutazioni = value.CORSOVALUTAZIONELIVELLO;
                } else {
                  this.myListValutazioni = [];
                }
              } else {
                this.myListValutazioni = [];
              } //Decido se devo mostrare la lista Iscritti


              this.setShowListaIscritti();
            } //Imposto l'array per la valutazione


            this.setStars(this.starIndex, true);
          }
        }, {
          key: "docCorso",
          set: function set(value) {
            this.myCorso = value;
          }
          /**
           * Senza un elenco di Livelli non mostro nulla
           */

        }, {
          key: "collLivelli",
          set: function set(value) {
            this.myListLivelli = value;

            if (value.length == 0) {
              //Il Segment Button che crea la vista è disattivato
              this.showSegmentButton = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Imposta il boolean per mostrare la Lista Iscritti
           */

        }, {
          key: "setShowListaIscritti",
          value: function setShowListaIscritti() {
            var value = false;

            if (this.myListValutazioni) {
              if (this.myListValutazioni.length != 0) {
                value = true;
              }
            }

            this.showListIscritti = value;
            this.showAlertNoIscritti = !value;
          }
          /**
           * Imposta l'array per la valutazione del corso
           * @param chooseValue Valore
           * @param force L'impostazione viene effettuata anche se la scheda è bloccata
           */

        }, {
          key: "setStars",
          value: function setStars(chooseValue) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.canUpdate || force) {
              //Valore Massimo Valutazione 
              if (this.collStars.length == 0) {
                //Devo creare l'array
                for (var index = 0; index < this.maxNumberStars; index++) {
                  if (index + 1 <= chooseValue) {
                    this.collStars.push(true);
                  } else {
                    this.collStars.push(false);
                  }
                }
              } else {
                for (var _index = 0; _index < this.collStars.length; _index++) {
                  if (_index + 1 <= chooseValue) {
                    this.collStars[_index] = true;
                  } else {
                    this.collStars[_index] = false;
                  }
                }
              } //Valore delle stelle 


              this.starIndex = chooseValue;
            }
          }
          /**
           * L'utente vuole applicare lo stesso Livello Finale a tutti
           */

        }, {
          key: "chooseLivelloFinale",
          value: function chooseLivelloFinale() {
            var _this5 = this;

            var buttonsArray = [];
            var singleButton;

            if (this.canUpdate) {
              if (this.myListLivelli && this.myListLivelli.length != 0) {
                //Popolo i Bottoni
                var _iterator = _createForOfIteratorHelper(this.myListLivelli),
                    _step;

                try {
                  var _loop = function _loop() {
                    var iterator = _step.value;
                    singleButton = {
                      text: iterator.DENOMINAZIONE,
                      handler: function handler() {
                        //Applico lo stesso livello a tutti
                        _this5.applyLivelloFinaleForAll(iterator);
                      }
                    };
                    buttonsArray.push(singleButton);
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _loop();
                  } //Pulsante Annulla

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                singleButton = {
                  text: 'Annulla',
                  icon: 'arrow-undo-sharp',
                  role: 'cancel'
                };
                buttonsArray.push(singleButton);
                this.actSheetController.create({
                  header: 'Quale livello applichi a tutti i partecipanti ?',
                  buttons: buttonsArray
                }).then(function (elAction) {
                  elAction.present();
                });
              }
            }
          }
          /**
           * Applica a tutti i partecipanti lo stesso livello finale
           * @param idLivello
           */

        }, {
          key: "applyLivelloFinaleForAll",
          value: function applyLivelloFinaleForAll(myLivello) {
            if (myLivello && this.myListValutazioni) {
              this.myListValutazioni.forEach(function (element) {
                element.IDLIVELLOFINALE = myLivello.ID;
              });
            }
          }
          /**
           * Click per effettuare l'Accordion
           */

        }, {
          key: "onClickCollapsed",
          value: function onClickCollapsed() {
            if (this.cardCollapsed) {
              this.cardCollapsed = false;
            } else {
              this.cardCollapsed = true;
            }
          }
          /**
           * Modificato il livello in una persona
           * @param event
           */

        }, {
          key: "onChangeLivello",
          value: function onChangeLivello(event) {
            //Non ho bisogno di aggiornare nulla credo
            console.log(this.myCorsoValutazione);
          }
          /**
           * Conferma e salvataggio Modifiche
           */

        }, {
          key: "onConfirm",
          value: function onConfirm() {
            var _this6 = this;

            var buttonsArray = [];
            var singleButton; //Posso aggiornare 

            if (this.canUpdate) {
              //Bottone Bozza
              singleButton = {
                text: 'Per modificarla in seguito',
                icon: 'save-outline',
                handler: function handler() {
                  _this6.confirmSavingAs(true);
                }
              };
              buttonsArray.push(singleButton); //Bottone Definitivo

              singleButton = {
                text: 'In modo definitivo',
                icon: 'document-lock-outline',
                handler: function handler() {
                  _this6.confirmSavingAs(false);
                }
              };
              buttonsArray.push(singleButton); //Pulsante Annulla

              singleButton = {
                text: 'Annulla',
                icon: 'arrow-undo-sharp',
                role: 'cancel'
              };
              buttonsArray.push(singleButton);
              this.actSheetController.create({
                header: 'Come stai salvando la Scheda di Valutazione',
                buttons: buttonsArray
              }).then(function (elAction) {
                elAction.present();
              });
            } else {
              //Chiudo la videata normalmente
              this.modalCtrl.dismiss();
            }
          }
          /**
           *
           * @param flagBozza Salva il modalità Bozza o definitiva
           */

        }, {
          key: "confirmSavingAs",
          value: function confirmSavingAs(flagBozza) {
            var _this7 = this;

            //Handler di conferma salvataggio
            if (flagBozza) {
              this.myCorsoValutazione.FLAGBOZZA = true;
            } else {
              this.myCorsoValutazione.FLAGBOZZA = false;
            }

            this.myCorsoValutazione.IDUTENTE = this.startService.actualUtente.ID;
            this.myCorsoValutazione.NOMINATIVO = this.startService.actualUtente.NOMINATIVO;
            this.myCorsoValutazione.VOTAZIONEFINALE = this.starIndex;
            this.startService.requestForSaveSchedaValutazioneCorso(this.myCorsoValutazione).then(function (risposta) {
              if (risposta.result) {
                _this7.showMessage('Scheda salvata correttamente', 'toast');

                _this7.modalCtrl.dismiss();
              } else {
                //Mostro un messaggio di errore
                _this7.showMessage(risposta.message);
              }
            })["catch"](function (error) {
              _this7.showMessage(error);
            });
          }
          /**
           * Evento scatenato al cambio di Segmento
           * Il valore selectedView è legato con ngModel
           * @param $event
           */

        }, {
          key: "onChangeSegment",
          value: function onChangeSegment($event) {}
          /**
           * Chiusura Modale
           */

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
          /**
           * Indica se mostrare o no il Bollino Prova
           * @returns TRUE/FALSE
           */

        }, {
          key: "showFabProva",
          value: function showFabProva() {
            var show = false;

            if (this.myCorso && this.myCorso.TIPO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__["TipoCorso"].prova) {
              show = true;
            }

            return show;
          }
          /**
           * Visualizza un messaggio
           */

        }, {
          key: "showMessage",
          value: function showMessage(messaggio, type) {
            if (type == 'alert') {
              var alertOptions = {
                message: messaggio,
                buttons: ['OK']
              };
              this.alertController.create(alertOptions).then(function (elAlert) {
                elAlert.present();
              });
            } else {
              this.toastController.create({
                message: messaggio,
                duration: 3000
              }).then(function (elToast) {
                elToast.present();
              });
            }
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
        }]);

        return ValutazioneTrainerPage;
      }();

      ValutazioneTrainerPage.ɵfac = function ValutazioneTrainerPage_Factory(t) {
        return new (t || ValutazioneTrainerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_4__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"]));
      };

      ValutazioneTrainerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ValutazioneTrainerPage,
        selectors: [["app-valutazione-trainer"]],
        inputs: {
          docCorsoValutazione: "docCorsoValutazione",
          docCorso: "docCorso",
          collLivelli: "collLivelli"
        },
        decls: 50,
        vars: 26,
        consts: [["color", "primary"], ["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back"], ["mode", "md"], [3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], [1, "ion-no-padding"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], ["button", "false", "lines", "none"], ["slot", "start", 1, "icon-sport"], [3, "innerHTML"], [1, "ion-text-wrap"], ["color", "primary", 1, "ion-text-wrap"], [2, "font-weight", "bold"], ["color", "light", 3, "click"], ["slot", "start", 3, "name"], [4, "ngIf"], ["lines", "none", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["class", "contentExpand", 4, "ngIf"], [3, "ngModel", "ngModelChange", "ionChange"], [3, "value"], ["name", "star-outline"], ["name", "bar-chart-outline"], ["vertical", "top", "horizontal", "end"], ["color", "danger"], ["name", "time-outline", "slot", "start"], ["name", "stats-chart-outline", "slot", "start"], ["name", "bookmark-outline", "slot", "start"], ["lines", "none"], ["name", "transgender-outline", "slot", "start"], [1, "contentExpand"], ["position", "stacked"], [4, "ngFor", "ngForOf"], ["autoGrow", "true", 1, "back-medium", 3, "disabled", "readonly", "ngModel", "ngModelChange"], ["size", "large", 3, "name", "click"], ["class", "nofind-cnt", 4, "ngIf"], [1, "nofind-cnt"], ["color", "warning", "slot", "end", 3, "click"], ["name", "people-circle-outline"], [3, "readOnly", "listLivelli", "valutazione", "onChoose", 4, "ngFor", "ngForOf"], [3, "readOnly", "listLivelli", "valutazione", "onChoose"], ["color", "tertiary", "expand", "block", 3, "click"]],
        template: function ValutazioneTrainerPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ValutazioneTrainerPage_Template_ion_button_click_3_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Valutazione");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ValutazioneTrainerPage_ion_segment_8_Template, 9, 3, "ion-segment", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-card-header", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ValutazioneTrainerPage_ion_fab_12_Template, 3, 0, "ion-fab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " da\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-text", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " a\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-text", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-item-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-item-divider", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ValutazioneTrainerPage_Template_ion_item_divider_click_37_listener() {
              return ctx.onClickCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Altre informazioni");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ValutazioneTrainerPage_ion_item_42_Template, 5, 4, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ValutazioneTrainerPage_ion_item_43_Template, 4, 1, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ValutazioneTrainerPage_ion_item_44_Template, 4, 1, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ValutazioneTrainerPage_ion_item_45_Template, 5, 3, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ValutazioneTrainerPage_ion_item_46_Template, 3, 0, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ValutazioneTrainerPage_div_47_Template, 10, 4, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ValutazioneTrainerPage_div_48_Template, 3, 2, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ValutazioneTrainerPage_ion_footer_49_Template, 3, 0, "ion-footer", 16);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSegmentButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFabProva());

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.getIcon(ctx.myCorso), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.myCorso.DENOMINAZIONE);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.myCorso["_DENOMINAZIONE_Sport"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 18, ctx.myCorso.DATAINIZIO, "EEE dd/MM/yyyy")), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](33, 23, ctx.myCorso.DATAFINE, "EEE dd/MM/yyyy")), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx.cardCollapsed ? "chevron-down-outline" : "chevron-up-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.cardCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.cardCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.cardCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.myCorso.TARGETSESSO && !ctx.cardCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.canUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedView == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedView == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canUpdate);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"], _shared_components_level_setter_level_setter_component__WEBPACK_IMPORTED_MODULE_8__["LevelSetterComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _shared_pipes_target_sesso_pipe__WEBPACK_IMPORTED_MODULE_9__["TargetSessoPipe"]],
        styles: [".back-medium[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light, #f4f5f8);\n}\n\n.contentExpand[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFsdXRhemlvbmUtdHJhaW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InZhbHV0YXppb25lLXRyYWluZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stbWVkaXVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KTtcclxufVxyXG5cclxuLmNvbnRlbnRFeHBhbmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "ozjt":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/settore-attivita.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: SettoreAttivitaPipe */

    /***/
    function ozjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettoreAttivitaPipe", function () {
        return SettoreAttivitaPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SettoreAttivitaPipe = /*#__PURE__*/function () {
        function SettoreAttivitaPipe() {
          _classCallCheck(this, SettoreAttivitaPipe);
        }

        _createClass(SettoreAttivitaPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"], value);
            return label;
          }
        }]);

        return SettoreAttivitaPipe;
      }();

      SettoreAttivitaPipe.ɵfac = function SettoreAttivitaPipe_Factory(t) {
        return new (t || SettoreAttivitaPipe)();
      };

      SettoreAttivitaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "settoreAttivita",
        type: SettoreAttivitaPipe,
        pure: true
      });
      /***/
    },

    /***/
    "qqZR":
    /*!***************************************************************!*\
      !*** ./src/app/pages/agenda-trainer/agenda-trainer.module.ts ***!
      \***************************************************************/

    /*! exports provided: AgendaTrainerPageModule */

    /***/
    function qqZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaTrainerPageModule", function () {
        return AgendaTrainerPageModule;
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


      var _agenda_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agenda-trainer-routing.module */
      "Kyl5");
      /* harmony import */


      var _agenda_trainer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agenda-trainer.page */
      "J8jY");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _valutazione_trainer_valutazione_trainer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./valutazione-trainer/valutazione-trainer.module */
      "aNjl");
      /* harmony import */


      var _valutazione_trainer_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./valutazione-trainer/valutazione-trainer.page */
      "c5HV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgendaTrainerPageModule = function AgendaTrainerPageModule() {
        _classCallCheck(this, AgendaTrainerPageModule);
      };

      AgendaTrainerPageModule.ɵfac = function AgendaTrainerPageModule_Factory(t) {
        return new (t || AgendaTrainerPageModule)();
      };

      AgendaTrainerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AgendaTrainerPageModule
      });
      AgendaTrainerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaTrainerPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _valutazione_trainer_valutazione_trainer_module__WEBPACK_IMPORTED_MODULE_7__["ValutazioneTrainerPageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AgendaTrainerPageModule, {
          declarations: [_agenda_trainer_page__WEBPACK_IMPORTED_MODULE_4__["AgendaTrainerPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_trainer_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaTrainerPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _valutazione_trainer_valutazione_trainer_module__WEBPACK_IMPORTED_MODULE_7__["ValutazioneTrainerPageModule"]],
          exports: [_valutazione_trainer_valutazione_trainer_page__WEBPACK_IMPORTED_MODULE_8__["ValutazioneTrainerPage"]]
        });
      })();
      /***/

    },

    /***/
    "s17d":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/stato-slot.pipe.ts ***!
      \*************************************************/

    /*! exports provided: StatoSlotPipe */

    /***/
    function s17d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatoSlotPipe", function () {
        return StatoSlotPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatoSlotPipe = /*#__PURE__*/function () {
        function StatoSlotPipe() {
          _classCallCheck(this, StatoSlotPipe);
        }

        _createClass(StatoSlotPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoSlot"], value);
            return label;
          }
        }]);

        return StatoSlotPipe;
      }();

      StatoSlotPipe.ɵfac = function StatoSlotPipe_Factory(t) {
        return new (t || StatoSlotPipe)();
      };

      StatoSlotPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "statoSlot",
        type: StatoSlotPipe,
        pure: true
      });
      /***/
    },

    /***/
    "ukHt":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/target-sesso.pipe.ts ***!
      \***************************************************/

    /*! exports provided: TargetSessoPipe */

    /***/
    function ukHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TargetSessoPipe", function () {
        return TargetSessoPipe;
      });
      /* harmony import */


      var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TargetSessoPipe = /*#__PURE__*/function () {
        function TargetSessoPipe() {
          _classCallCheck(this, TargetSessoPipe);
        }

        _createClass(TargetSessoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TargetSesso"], value);
            return label;
          }
        }]);

        return TargetSessoPipe;
      }();

      TargetSessoPipe.ɵfac = function TargetSessoPipe_Factory(t) {
        return new (t || TargetSessoPipe)();
      };

      TargetSessoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "targetSesso",
        type: TargetSessoPipe,
        pure: true
      });
      /***/
    },

    /***/
    "uxXW":
    /*!******************************************************!*\
      !*** ./src/app/shared/pipes/giorni-previsti.pipe.ts ***!
      \******************************************************/

    /*! exports provided: GiorniPrevistiPipe */

    /***/
    function uxXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiorniPrevistiPipe", function () {
        return GiorniPrevistiPipe;
      });
      /* harmony import */


      var src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/settimana.model */
      "w48H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GiorniPrevistiPipe = /*#__PURE__*/function () {
        function GiorniPrevistiPipe() {
          _classCallCheck(this, GiorniPrevistiPipe);
        }

        _createClass(GiorniPrevistiPipe, [{
          key: "transform",
          value: //Il Pipe serve a trasformare una sequenza di numeri che rappresentano giorni
          //ad esempio 2;3;4 nel rispettivo stringa Martedi, Mercoledi, Giovedi
          //I giorni previsti sono in versione C# 1 = Dom, 2 Lun, etc
          //Qui li passo in versione JS che sono zero-base
          function transform(value, language) {
            var strDay = '';
            var arGiorni = [];
            var valueReturn = '';
            var smallVersion = false;
            var indexDay = 0;

            if (value !== undefined) {
              if (value.length !== 0) {
                arGiorni = value.split(';');
              }
            }

            if (arGiorni.length !== 0) {
              //Se ho più di 3 giorni chiedo la versione short
              if (arGiorni.length > 3) {
                smallVersion = true;
              } //Ciclo sui giorni e li decodifico


              arGiorni.forEach(function (element) {
                try {
                  indexDay = parseInt(element);
                  indexDay--;

                  if (smallVersion) {
                    strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getsmallLabel(indexDay, language);
                  } else {
                    strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getLabel(indexDay, language);
                  }

                  if (valueReturn.length !== 0) {
                    valueReturn += ', ';
                  }

                  valueReturn += strDay;
                } catch (error) {
                  console.log('Error Parse');
                }
              });
            }

            return valueReturn;
          }
        }]);

        return GiorniPrevistiPipe;
      }();

      GiorniPrevistiPipe.ɵfac = function GiorniPrevistiPipe_Factory(t) {
        return new (t || GiorniPrevistiPipe)();
      };

      GiorniPrevistiPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "giorniPrevisti",
        type: GiorniPrevistiPipe,
        pure: true
      });
      /***/
    },

    /***/
    "xVAv":
    /*!**********************************************************!*\
      !*** ./src/app/shared/pipes/tipomasterdocumento.pipe.ts ***!
      \**********************************************************/

    /*! exports provided: TipomasterdocumentoPipe */

    /***/
    function xVAv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipomasterdocumentoPipe", function () {
        return TipomasterdocumentoPipe;
      });
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TipomasterdocumentoPipe = /*#__PURE__*/function () {
        function TipomasterdocumentoPipe() {
          _classCallCheck(this, TipomasterdocumentoPipe);
        }

        _createClass(TipomasterdocumentoPipe, [{
          key: "transform",
          value: function transform(value) {
            var label = '';
            label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoMasterDocumento"], value);
            return label;
          }
        }]);

        return TipomasterdocumentoPipe;
      }();

      TipomasterdocumentoPipe.ɵfac = function TipomasterdocumentoPipe_Factory(t) {
        return new (t || TipomasterdocumentoPipe)();
      };

      TipomasterdocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "tipomasterdocumento",
        type: TipomasterdocumentoPipe,
        pure: true
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-agenda-trainer-agenda-trainer-module-es5.js.map