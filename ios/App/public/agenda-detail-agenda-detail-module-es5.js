(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-detail-agenda-detail-module"], {
    /***/
    "78jz":
    /*!******************************************************************!*\
      !*** ./src/app/pages/agenda/agenda-detail/agenda-detail.page.ts ***!
      \******************************************************************/

    /*! exports provided: AgendaDetailPage */

    /***/
    function jz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaDetailPage", function () {
        return AgendaDetailPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AgendaDetailPage = /*#__PURE__*/function () {
        function AgendaDetailPage() {
          _classCallCheck(this, AgendaDetailPage);
        }

        _createClass(AgendaDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AgendaDetailPage;
      }();

      AgendaDetailPage.ɵfac = function AgendaDetailPage_Factory(t) {
        return new (t || AgendaDetailPage)();
      };

      AgendaDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AgendaDetailPage,
        selectors: [["app-agenda-detail"]],
        decls: 5,
        vars: 0,
        template: function AgendaDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "agenda-detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuZGEtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "X32G":
    /*!********************************************************************!*\
      !*** ./src/app/pages/agenda/agenda-detail/agenda-detail.module.ts ***!
      \********************************************************************/

    /*! exports provided: AgendaDetailPageModule */

    /***/
    function X32G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaDetailPageModule", function () {
        return AgendaDetailPageModule;
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


      var _agenda_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agenda-detail-routing.module */
      "pQNf");
      /* harmony import */


      var _agenda_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agenda-detail.page */
      "78jz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgendaDetailPageModule = function AgendaDetailPageModule() {
        _classCallCheck(this, AgendaDetailPageModule);
      };

      AgendaDetailPageModule.ɵfac = function AgendaDetailPageModule_Factory(t) {
        return new (t || AgendaDetailPageModule)();
      };

      AgendaDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AgendaDetailPageModule
      });
      AgendaDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaDetailPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AgendaDetailPageModule, {
          declarations: [_agenda_detail_page__WEBPACK_IMPORTED_MODULE_4__["AgendaDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _agenda_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgendaDetailPageRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "pQNf":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/agenda/agenda-detail/agenda-detail-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AgendaDetailPageRoutingModule */

    /***/
    function pQNf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaDetailPageRoutingModule", function () {
        return AgendaDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agenda_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agenda-detail.page */
      "78jz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _agenda_detail_page__WEBPACK_IMPORTED_MODULE_1__["AgendaDetailPage"]
      }];

      var AgendaDetailPageRoutingModule = function AgendaDetailPageRoutingModule() {
        _classCallCheck(this, AgendaDetailPageRoutingModule);
      };

      AgendaDetailPageRoutingModule.ɵfac = function AgendaDetailPageRoutingModule_Factory(t) {
        return new (t || AgendaDetailPageRoutingModule)();
      };

      AgendaDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AgendaDetailPageRoutingModule
      });
      AgendaDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaDetailPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=agenda-detail-agenda-detail-module-es5.js.map