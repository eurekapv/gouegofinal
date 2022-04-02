(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-course-listcourses-listcourses-module"], {
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
//# sourceMappingURL=pages-location-course-listcourses-listcourses-module-es5.js.map