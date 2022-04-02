(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agenda-agenda-module"], {
    /***/
    "8GQC":
    /*!*********************************************!*\
      !*** ./src/app/pages/agenda/agenda.page.ts ***!
      \*********************************************/

    /*! exports provided: AgendaPage */

    /***/
    function GQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaPage", function () {
        return AgendaPage;
      });
      /* harmony import */


      var src_app_models_area_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/area.model */
      "v/X4");
      /* harmony import */


      var src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/buttoncard.model */
      "07+x");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/components/button-card/button-card.component */
      "Hm2W");

      function AgendaPage_ion_grid_5_ion_col_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-button-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var btn_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("smallVersion", false)("myButtonCard", btn_r2);
        }
      }

      function AgendaPage_ion_grid_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AgendaPage_ion_grid_5_ion_col_2_Template, 2, 2, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.agendaCards);
        }
      }

      var AgendaPage = /*#__PURE__*/function () {
        function AgendaPage(startService) {
          _classCallCheck(this, AgendaPage);

          this.startService = startService;
          this.selectedArea = new src_app_models_area_model__WEBPACK_IMPORTED_MODULE_0__["Area"]();
          this.agendaCards = [];
        }

        _createClass(AgendaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedArea = this.startService.areaSelectedValue;
            this.createCards();
          }
        }, {
          key: "createCards",
          value: function createCards() {
            var _this = this;

            this.startService.requestOccupazioni(this.selectedArea.ID).then(function (listOccupazioni) {
              _this.agendaCards = src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_1__["ButtonCard"].getButtonAgendaFromOccupazioni(listOccupazioni);
            });
          }
        }]);

        return AgendaPage;
      }();

      AgendaPage.ɵfac = function AgendaPage_Factory(t) {
        return new (t || AgendaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__["StartService"]));
      };

      AgendaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AgendaPage,
        selectors: [["app-agenda"]],
        decls: 6,
        vars: 1,
        consts: [["color", "primary"], ["class", "grid-agenda", 4, "ngIf"], [1, "grid-agenda"], [4, "ngFor", "ngForOf"], [1, "small-button-card", 3, "smallVersion", "myButtonCard"]],
        template: function AgendaPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Agenda struttura");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AgendaPage_ion_grid_5_Template, 3, 1, "ion-grid", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.agendaCards.length != 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_6__["ButtonCardComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuZGEucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Q2f5":
    /*!*******************************************************!*\
      !*** ./src/app/pages/agenda/agenda-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AgendaPageRoutingModule */

    /***/
    function Q2f5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaPageRoutingModule", function () {
        return AgendaPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agenda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agenda.page */
      "8GQC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _agenda_page__WEBPACK_IMPORTED_MODULE_1__["AgendaPage"]
      }, {
        path: 'agenda-detail/:prenotazioneID',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | agenda-detail-agenda-detail-module */
          "agenda-detail-agenda-detail-module").then(__webpack_require__.bind(null,
          /*! ./agenda-detail/agenda-detail.module */
          "X32G")).then(function (m) {
            return m.AgendaDetailPageModule;
          });
        }
      }];

      var AgendaPageRoutingModule = function AgendaPageRoutingModule() {
        _classCallCheck(this, AgendaPageRoutingModule);
      };

      AgendaPageRoutingModule.ɵfac = function AgendaPageRoutingModule_Factory(t) {
        return new (t || AgendaPageRoutingModule)();
      };

      AgendaPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AgendaPageRoutingModule
      });
      AgendaPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uB5f":
    /*!***********************************************!*\
      !*** ./src/app/pages/agenda/agenda.module.ts ***!
      \***********************************************/

    /*! exports provided: AgendaPageModule */

    /***/
    function uB5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function () {
        return AgendaPageModule;
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


      var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agenda-routing.module */
      "Q2f5");
      /* harmony import */


      var _agenda_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agenda.page */
      "8GQC");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgendaPageModule = function AgendaPageModule() {
        _classCallCheck(this, AgendaPageModule);
      };

      AgendaPageModule.ɵfac = function AgendaPageModule_Factory(t) {
        return new (t || AgendaPageModule)();
      };

      AgendaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AgendaPageModule
      });
      AgendaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AgendaPageModule, {
          declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_4__["AgendaPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaPageRoutingModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-agenda-agenda-module-es5.js.map