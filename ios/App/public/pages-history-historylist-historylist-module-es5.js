(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-historylist-historylist-module"], {
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
    "FLL2":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/history/historylist/historylist-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: HistorylistPageRoutingModule */

    /***/
    function FLL2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorylistPageRoutingModule", function () {
        return HistorylistPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _historylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./historylist.page */
      "p9tu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _historylist_page__WEBPACK_IMPORTED_MODULE_1__["HistorylistPage"]
      }];

      var HistorylistPageRoutingModule = function HistorylistPageRoutingModule() {
        _classCallCheck(this, HistorylistPageRoutingModule);
      };

      HistorylistPageRoutingModule.ɵfac = function HistorylistPageRoutingModule_Factory(t) {
        return new (t || HistorylistPageRoutingModule)();
      };

      HistorylistPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HistorylistPageRoutingModule
      });
      HistorylistPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HistorylistPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
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
    "mU/K":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/history/historylist/historylist.module.ts ***!
      \*****************************************************************/

    /*! exports provided: HistorylistPageModule */

    /***/
    function mUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorylistPageModule", function () {
        return HistorylistPageModule;
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


      var _historylist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historylist-routing.module */
      "FLL2");
      /* harmony import */


      var _historylist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./historylist.page */
      "p9tu");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HistorylistPageModule = function HistorylistPageModule() {
        _classCallCheck(this, HistorylistPageModule);
      };

      HistorylistPageModule.ɵfac = function HistorylistPageModule_Factory(t) {
        return new (t || HistorylistPageModule)();
      };

      HistorylistPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: HistorylistPageModule
      });
      HistorylistPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _historylist_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorylistPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HistorylistPageModule, {
          declarations: [_historylist_page__WEBPACK_IMPORTED_MODULE_4__["HistorylistPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _historylist_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorylistPageRoutingModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
        });
      })();
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
    "p9tu":
    /*!***************************************************************!*\
      !*** ./src/app/pages/history/historylist/historylist.page.ts ***!
      \***************************************************************/

    /*! exports provided: HistorylistPage */

    /***/
    function p9tu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorylistPage", function () {
        return HistorylistPage;
      });
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/utenteprenotazione.model */
      "TP3D");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/utenteiscrizione.model */
      "SCCg");
      /* harmony import */


      var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/library/services/docstructure.service */
      "FYk8");
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
      /* harmony import */


      var _shared_pipes_giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/pipes/giorni-previsti.pipe */
      "uxXW");

      function HistorylistPage_ion_toolbar_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-toolbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-segment", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HistorylistPage_ion_toolbar_9_Template_ion_segment_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r3.selectedView = $event;
          })("ionChange", function HistorylistPage_ion_toolbar_9_Template_ion_segment_ionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.onChangeSegment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-segment-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Prenotazioni");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-segment-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Corsi");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.selectedView);
        }
      }

      function HistorylistPage_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nessuna Iscrizione Corso");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "trovata");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function HistorylistPage_div_13_ion_list_2_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HistorylistPage_div_13_ion_list_2_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var corso_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r10.onClickCorso(corso_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "giorniPrevisti");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-chip", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var corso_r9 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", corso_r9.DATAFINE > ctx_r8.today && corso_r9.DATAINIZIO < ctx_r8.today ? "success" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 10, corso_r9.DATAINIZIO, "EEEE dd/MM/yyyy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 15, corso_r9.DATAFINE, "EEEE dd/MM/yyyy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", corso_r9.DENOMINAZIONESPORT, " in ", corso_r9.DENOMINAZIONELOCATION, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 20, corso_r9.GIORNIPREVISTI, ctx_r8.lingua)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", corso_r9.DATAFINE > ctx_r8.today && corso_r9.DATAINIZIO < ctx_r8.today ? "success" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 23, corso_r9.ORAINIZIO, "HH:mm"), " ");
        }
      }

      function HistorylistPage_div_13_ion_list_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HistorylistPage_div_13_ion_list_2_ion_item_1_Template, 21, 26, "ion-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.listUtenteCorsi);
        }
      }

      function HistorylistPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HistorylistPage_div_13_div_1_Template, 5, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HistorylistPage_div_13_ion_list_2_Template, 2, 1, "ion-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listUtenteCorsi.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listUtenteCorsi.length !== 0);
        }
      }

      function HistorylistPage_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nessuna Prenotazione Campi");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "trovata");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function HistorylistPage_div_14_ion_list_2_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HistorylistPage_div_14_ion_list_2_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var prenotazione_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r16.onClickPrenotazione(prenotazione_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-chip", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prenotazione_r15 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", prenotazione_r15.DATAORAFINE < ctx_r14.today ? "danger" : "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 10, prenotazione_r15.DATAORAINIZIO, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 15, prenotazione_r15.DATAORAINIZIO, "EEEE")), " ore ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 18, prenotazione_r15.DATAORAINIZIO, "HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 21, prenotazione_r15.COMUNELOCATION), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](prenotazione_r15.COMUNELOCATION && prenotazione_r15.INDIRIZZOLOCATION ? ", " : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 23, prenotazione_r15.INDIRIZZOLOCATION));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", prenotazione_r15.DATAORAFINE < ctx_r14.today ? "danger" : "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", prenotazione_r15.DURATAORE > 1 ? prenotazione_r15.DURATAORE : prenotazione_r15.DURATAORE * 60, " ", prenotazione_r15.DURATAORE > 1 ? "Ore" : "Min.", " ");
        }
      }

      function HistorylistPage_div_14_ion_list_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HistorylistPage_div_14_ion_list_2_ion_item_1_Template, 21, 25, "ion-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.listUtentePrenotazione);
        }
      }

      function HistorylistPage_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HistorylistPage_div_14_div_1_Template, 5, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HistorylistPage_div_14_ion_list_2_Template, 2, 1, "ion-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listUtentePrenotazione.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listUtentePrenotazione.length !== 0);
        }
      }

      var HistorylistPage = /*#__PURE__*/function () {
        function HistorylistPage(navCtrl, startService, loadingCtrl, toastCtrl, docstructureService, gestureCtrl) {
          _classCallCheck(this, HistorylistPage);

          this.navCtrl = navCtrl;
          this.startService = startService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.docstructureService = docstructureService;
          this.gestureCtrl = gestureCtrl;
          this.lingua = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["Language"].italiano;
          this.selectedView = 'prenotazioni';
          this.showTabs = true;
          this.today = new Date();
        }

        _createClass(HistorylistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Mi sottoscrivo alla ricezione Prenotazioni e Iscrizioni Corsi
            //Verranno richiesti successivamente
            this.sottoscrizionePrenotazioni();
            this.sottoscrizioneIscrizioni(); // //Richiesta utente attuale
            // this.subDocUtente = this.startService.utente
            //                       .subscribe  (elDocUtente => {
            //                           this.docUtente = elDocUtente;
            //                           //Utente arrivato
            //                           if (this.docUtente) {
            //                             this.requestPrenotazioni();
            //                           }
            //                       });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            //Richiesta utente attuale
            this.subDocUtente = this.startService.utente.subscribe(function (elDocUtente) {
              _this.docUtente = elDocUtente; //Utente arrivato

              if (_this.docUtente) {
                _this.requestPrenotazioni();
              }
            });
          }
          /**
           * Richiede al server le Prenotazioni
           */

        }, {
          key: "requestPrenotazioni",
          value: function requestPrenotazioni() {
            var _this2 = this;

            if (this.docUtente) {
              if (this.docUtente.ID) {
                this.loadingCtrl.create({
                  spinner: 'circular',
                  message: 'Caricamento',
                  backdropDismiss: true
                }).then(function (loading) {
                  loading.present(); //Creo il documento di filtro

                  var filterUtentePrenotazioni = new src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_2__["UtentePrenotazione"](true);
                  filterUtentePrenotazioni.IDUTENTE = _this2.docUtente.ID;

                  _this2.docstructureService.requestNew(filterUtentePrenotazioni).then(function (list) {
                    //Copia della lista
                    _this2.listUtentePrenotazione = list; //Dismetto il loading

                    loading.dismiss();
                  })["catch"](function (error) {
                    //Dismetto il loading 
                    loading.dismiss();
                    console.log(error);

                    _this2.showMessage('Errore nel caricamento');
                  });
                });
              }
            }
          }
          /**
          * Richiede al server le Iscrizioni Corso
          */

        }, {
          key: "requestIscrizioni",
          value: function requestIscrizioni() {
            var _this3 = this;

            if (this.docUtente) {
              if (this.docUtente.ID) {
                this.loadingCtrl.create({
                  spinner: 'circular',
                  message: 'Caricamento',
                  backdropDismiss: true
                }).then(function (loading) {
                  loading.present(); //creo il documento di filtro

                  var filterUtenteIscrizioni = new src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_4__["UtenteIscrizione"](true);
                  filterUtenteIscrizioni.IDUTENTE = _this3.docUtente.ID;

                  _this3.docstructureService.requestNew(filterUtenteIscrizioni).then(function (list) {
                    _this3.listUtenteCorsi = list;
                    console.log(_this3.listUtenteCorsi);
                    loading.dismiss();
                  })["catch"](function (error) {
                    loading.dismiss();
                    console.log(error);

                    _this3.showMessage('Errore nel caricamento');
                  });
                });
              }
            }
          }
          /**
           * Esegue la sottoscrizione ai dati Prenotazioni
           * @param idUtente Utente richiesta
           */

        }, {
          key: "sottoscrizionePrenotazioni",
          value: function sottoscrizionePrenotazioni() {
            var _this4 = this;

            this.subListUtentePrenotazioni = this.startService.listUtentePrenotazioni.subscribe(function (collPrenotazioni) {
              _this4.listUtentePrenotazione = collPrenotazioni;
            }, function (error) {});
          }
          /**
          * Esegue la sottoscrizione ai dati Prenotazioni
          * @param idUtente Utente richiesta
          */

        }, {
          key: "sottoscrizioneIscrizioni",
          value: function sottoscrizioneIscrizioni() {
            var _this5 = this;

            this.subListUtenteIscrizioni = this.startService.listUtenteIscrizioni.subscribe(function (collIscrizioni) {
              _this5.listUtenteCorsi = collIscrizioni;
            }, function (error) {});
          }
          /**
           *
           * @param value Cambio Visualizzazione
           */

        }, {
          key: "onChangeSegment",
          value: function onChangeSegment(value) {
            switch (this.selectedView) {
              case 'prenotazioni':
                this.requestPrenotazioni();
                break;

              case 'corsi':
                this.requestIscrizioni();
                break;

              default:
                break;
            }
          }
          /**
           * E' stato cliccato un corso e si vuole visualizzare i dati di Iscrizione
           * @param selectedCorso Corso Selezionato
           */

        }, {
          key: "onClickCorso",
          value: function onClickCorso(selectedCorso) {
            this.navCtrl.navigateForward(['/', 'historylist', 'course', selectedCorso.ID]);
          }
          /**
           * E' stata selezionata una prenotazione e si vuole la scheda di conferma
           * @param selectedPrenotazione Prenotazione
           */

        }, {
          key: "onClickPrenotazione",
          value: function onClickPrenotazione(selectedPrenotazione) {
            //Concateno IDPrenotazione con IDPianificazione
            var historyId = selectedPrenotazione.IDPRENOTAZIONE + '-' + selectedPrenotazione.ID;
            this.navCtrl.navigateForward(['/', 'historylist', 'booking', historyId]);
          } //Richiesta di Refresh

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this6 = this;

            if (this.docUtente && this.docUtente.ID) switch (this.selectedView) {
              case 'prenotazioni':
                var filterUtentePrenotazioni = new src_app_models_utenteprenotazione_model__WEBPACK_IMPORTED_MODULE_2__["UtentePrenotazione"](true);
                filterUtentePrenotazioni.IDUTENTE = this.docUtente.ID;
                this.docstructureService.requestNew(filterUtentePrenotazioni).then(function (list) {
                  _this6.listUtentePrenotazione = list; //Sparisce il pullToRefresh Image

                  event.target.complete();
                })["catch"](function (error) {
                  //Sparisce il pullToRefresh Image
                  event.target.complete();
                  console.log(error);

                  _this6.showMessage('Errore nel caricamento');
                });
                break;

              case 'corsi':
                //Richiedo le Iscrizioni
                var filterUtenteIscrizioni = new src_app_models_utenteiscrizione_model__WEBPACK_IMPORTED_MODULE_4__["UtenteIscrizione"](true);
                filterUtenteIscrizioni.IDUTENTE = this.docUtente.ID;
                this.docstructureService.requestNew(filterUtenteIscrizioni).then(function (list) {
                  _this6.listUtenteCorsi = list; //Sparisce il pullToRefresh Image

                  event.target.complete();
                })["catch"](function (error) {
                  //Sparisce il pullToRefresh Image
                  event.target.complete();
                  console.log(error);

                  _this6.showMessage('Errore nel caricamento');
                });

              default:
                break;
            }
          }
          /**
           * Mostra un messaggio con ToastController
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
        }, {
          key: "onClickSettings",
          value: function onClickSettings() {
            this.navCtrl.navigateForward('/account');
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
        }]);

        return HistorylistPage;
      }();

      HistorylistPage.ɵfac = function HistorylistPage_Factory(t) {
        return new (t || HistorylistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_5__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["GestureController"]));
      };

      HistorylistPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: HistorylistPage,
        selectors: [["app-historylist"]],
        decls: 16,
        vars: 3,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["slot", "primary"], [3, "click"], ["name", "person-circle-outline"], ["mode", "md", 4, "ngIf"], ["id", "content", "scrollEvents", "", 3, "ionScroll"], ["slot", "fixed", 3, "ionRefresh"], ["class", "contentExpand", 4, "ngIf"], ["mode", "md"], ["value", "prenotazioni", 3, "ngModel", "ngModelChange", "ionChange"], ["value", "prenotazioni"], ["name", "calendar-outline"], ["value", "corsi"], ["name", "school-outline"], [1, "contentExpand"], ["class", "nofind-cnt", 4, "ngIf"], [4, "ngIf"], [1, "nofind-cnt"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["name", "school", "slot", "start", 1, "icon-school", 3, "color"], [1, "ion-text-wrap"], [3, "color"], ["name", "time-outline"], ["name", "calendar", "slot", "start", 1, "icon-prenotazioni", 3, "color"]],
        template: function HistorylistPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Attivit\xE0");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HistorylistPage_Template_ion_button_click_7_listener() {
              return ctx.onClickSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, HistorylistPage_ion_toolbar_9_Template, 10, 1, "ion-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionScroll", function HistorylistPage_Template_ion_content_ionScroll_10_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-refresher", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionRefresh", function HistorylistPage_Template_ion_refresher_ionRefresh_11_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, HistorylistPage_div_13_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, HistorylistPage_div_14_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ion-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showTabs);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedView == "corsi");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedView == "prenotazioni");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonChip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _shared_pipes_giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.icon-school[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.icon-prenotazioni[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 0px;\n  margin-bottom: 2px;\n  font-weight: 600;\n}\n\n.icon-text.article[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.contentExpand[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGlzdG9yeWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVBO0VBSUksZUFBQTtBQVZKOztBQWFBO0VBQ0ksZUFBQTtBQVZKOztBQWNBO0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBY0k7RUFDSSxlQUFBO0FBWlI7O0FBaUJBO0VBQ0ksWUFBQTtBQWRKIiwiZmlsZSI6Imhpc3RvcnlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1zZWdtZW50LWJ1dHRvbj5pb24taWNvblxyXG4vLyB7XHJcbi8vICAgICBtYXJnaW46NXB4O1xyXG4vLyB9XHJcblxyXG5oMVxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oMlxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5oM1xyXG57XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaWNvbi1zY2hvb2xcclxue1xyXG4gICAgLy8gbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmljb24tcHJlbm90YXppb25pIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuXHJcbi5pY29uLXRleHRcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAmLmFydGljbGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRlbnRFeHBhbmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
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
//# sourceMappingURL=pages-history-historylist-historylist-module-es5.js.map