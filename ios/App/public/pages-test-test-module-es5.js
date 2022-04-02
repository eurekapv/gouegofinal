(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"], {
    /***/
    "I1aY":
    /*!***************************************************!*\
      !*** ./src/app/pages/test/test-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TestPageRoutingModule */

    /***/
    function I1aY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function () {
        return TestPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test.page */
      "hwu9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_1__["TestPage"]
      }];

      var TestPageRoutingModule = function TestPageRoutingModule() {
        _classCallCheck(this, TestPageRoutingModule);
      };

      TestPageRoutingModule.ɵfac = function TestPageRoutingModule_Factory(t) {
        return new (t || TestPageRoutingModule)();
      };

      TestPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: TestPageRoutingModule
      });
      TestPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ezsy":
    /*!*******************************************!*\
      !*** ./src/app/pages/test/test.module.ts ***!
      \*******************************************/

    /*! exports provided: TestPageModule */

    /***/
    function ezsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
        return TestPageModule;
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


      var src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/auth/verify/verify.module */
      "fFCB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _test_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./test-routing.module */
      "I1aY");
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test.page */
      "hwu9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TestPageModule = function TestPageModule() {
        _classCallCheck(this, TestPageModule);
      };

      TestPageModule.ɵfac = function TestPageModule_Factory(t) {
        return new (t || TestPageModule)();
      };

      TestPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: TestPageModule
      });
      TestPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_4__["TestPageRoutingModule"], src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__["VerifyPageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TestPageModule, {
          declarations: [_test_page__WEBPACK_IMPORTED_MODULE_5__["TestPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_4__["TestPageRoutingModule"], src_app_pages_auth_verify_verify_module__WEBPACK_IMPORTED_MODULE_2__["VerifyPageModule"]]
        });
      })();
      /***/

    },

    /***/
    "hwu9":
    /*!*****************************************!*\
      !*** ./src/app/pages/test/test.page.ts ***!
      \*****************************************/

    /*! exports provided: TestPage */

    /***/
    function hwu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPage", function () {
        return TestPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var TestPage = /*#__PURE__*/function () {
        function TestPage() {
          _classCallCheck(this, TestPage);
        }

        _createClass(TestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestPage;
      }();

      TestPage.ɵfac = function TestPage_Factory(t) {
        return new (t || TestPage)();
      };

      TestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TestPage,
        selectors: [["app-test"]],
        decls: 7,
        vars: 0,
        consts: [["color", "primary"], ["slot", "start"]],
        template: function TestPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Testing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-test-test-module-es5.js.map