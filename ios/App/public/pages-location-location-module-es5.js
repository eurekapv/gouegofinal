(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-location-module"], {
    /***/
    "2FmR":
    /*!********************************************************!*\
      !*** ./src/app/pages/location/gallery/gallery.page.ts ***!
      \********************************************************/

    /*! exports provided: GalleryPage */

    /***/
    function FmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
        return GalleryPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-pinch-zoom */
      "bznP");

      var _c0 = ["slider"];

      function GalleryPage_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryPage_ion_item_1_Template_ion_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.close($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GalleryPage = /*#__PURE__*/function () {
        function GalleryPage(navParams, modalCtrl, startService) {
          _classCallCheck(this, GalleryPage);

          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.startService = startService;
          this.sliderOpts = {
            zoom: {
              maxRatio: 3
            }
          };

          if (this.startService.isDesktop) {
            this.showButtons = true;
          } else {
            this.showButtons = false;
          }
        }

        _createClass(GalleryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imgLocation = this.navParams.get('imgLocation');
            window.screen.orientation.unlock();
          }
        }, {
          key: "zoom",
          value: function zoom(zoomIn) {
            var zoom = this.slider.nativeElement.swiper.zoom;

            if (zoomIn) {
              zoom["in"]();
            } else {
              zoom.out();
            }
          }
        }, {
          key: "close",
          value: function close(params) {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "onTap",
          value: function onTap() {
            if (!this.startService.isDesktop) {
              this.showButtons = !this.showButtons;
            }
          }
        }]);

        return GalleryPage;
      }();

      GalleryPage.ɵfac = function GalleryPage_Factory(t) {
        return new (t || GalleryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_2__["StartService"]));
      };

      GalleryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryPage,
        selectors: [["app-gallery"]],
        viewQuery: function GalleryPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
          }
        },
        decls: 5,
        vars: 2,
        consts: [["fullscreen", "", 3, "click"], ["class", "close-fake ion-text-center", "lines", "none", 4, "ngIf"], [1, "custom-div"], [1, "swiper-zoom-container"], [3, "src"], ["lines", "none", 1, "close-fake", "ion-text-center"], ["fill", "outline", "color", "light", 3, "click"], ["name", "close", "slot", "start"]],
        template: function GalleryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryPage_Template_ion_content_click_0_listener() {
              return ctx.onTap();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryPage_ion_item_1_Template, 4, 0, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pinch-zoom", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgLocation.IMAGEURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__["PinchZoomComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
        styles: [".close-fake[_ngcontent-%COMP%] {\n  --background: trasparent;\n  margin-top: 40px;\n}\n.close-fake[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: rgba(44,39,45,0.84);\n}\ndiv.custom-div[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 0px !important;\n  height: 100%;\n  width: 100%;\n  align-content: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUlBLGdCQUFBO0FBRko7QUFESTtFQUNJLGVBQUE7QUFHUjtBQUVBO0VBQ0ksaUNBQUE7QUFDSjtBQUdBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoiZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtZmFrZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYXNwYXJlbnQ7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ0LDM5LDQ1LDAuODQpO1xyXG59XHJcblxyXG5cclxuZGl2LmN1c3RvbS1kaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "32uD":
    /*!******************************************************************!*\
      !*** ./src/app/pages/location/gallery/gallery-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: GalleryPageRoutingModule */

    /***/
    function uD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
        return GalleryPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gallery.page */
      "2FmR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_1__["GalleryPage"]
      }];

      var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
        _classCallCheck(this, GalleryPageRoutingModule);
      };

      GalleryPageRoutingModule.ɵfac = function GalleryPageRoutingModule_Factory(t) {
        return new (t || GalleryPageRoutingModule)();
      };

      GalleryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: GalleryPageRoutingModule
      });
      GalleryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GalleryPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

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
    "A/7y":
    /*!***********************************************************!*\
      !*** ./src/app/pages/location/location-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function A7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./location.page */
      "N4Pa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_1__["LocationPage"]
      }, {
        path: 'booking',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | booking-booking-module */
          [__webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("booking-booking-module")]).then(__webpack_require__.bind(null,
          /*! ./booking/booking.module */
          "WMyO")).then(function (m) {
            return m.BookingPageModule;
          });
        }
      }, {
        path: 'listcourses',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | course-listcourses-listcourses-module */
          [__webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-home-home-module~pages-lo~2c13cfd4"), __webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~pages-location-course-detailcou~64ab92cc"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-detailcourse-course-module~pages~246d8758"), __webpack_require__.e("default~course-listcourses-listcourses-module~pages-location-course-listcourses-listcourses-module")]).then(__webpack_require__.bind(null,
          /*! ./course/listcourses/listcourses.module */
          "8GLh")).then(function (m) {
            return m.ListcoursesPageModule;
          });
        }
      }, {
        path: 'gallery',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./gallery/gallery.module */
          "J9i8")).then(function (m) {
            return m.GalleryPageModule;
          });
        }
      }, {
        path: 'campi-new',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./campi-new/campi-new.module */
          "XuUw")).then(function (m) {
            return m.CampiNewPageModule;
          });
        }
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule.ɵfac = function LocationPageRoutingModule_Factory(t) {
        return new (t || LocationPageRoutingModule)();
      };

      LocationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: LocationPageRoutingModule
      });
      LocationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LocationPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AIqq":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/location/campi-new/campi-new-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: CampiNewPageRoutingModule */

    /***/
    function AIqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampiNewPageRoutingModule", function () {
        return CampiNewPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _campi_new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./campi-new.page */
      "jxq3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _campi_new_page__WEBPACK_IMPORTED_MODULE_1__["CampiNewPage"]
      }];

      var CampiNewPageRoutingModule = function CampiNewPageRoutingModule() {
        _classCallCheck(this, CampiNewPageRoutingModule);
      };

      CampiNewPageRoutingModule.ɵfac = function CampiNewPageRoutingModule_Factory(t) {
        return new (t || CampiNewPageRoutingModule)();
      };

      CampiNewPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: CampiNewPageRoutingModule
      });
      CampiNewPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CampiNewPageRoutingModule, {
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
    "J9i8":
    /*!**********************************************************!*\
      !*** ./src/app/pages/location/gallery/gallery.module.ts ***!
      \**********************************************************/

    /*! exports provided: GalleryPageModule */

    /***/
    function J9i8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
        return GalleryPageModule;
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


      var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gallery-routing.module */
      "32uD");
      /* harmony import */


      var _gallery_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gallery.page */
      "2FmR");
      /* harmony import */


      var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-pinch-zoom */
      "bznP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GalleryPageModule = function GalleryPageModule() {
        _classCallCheck(this, GalleryPageModule);
      };

      GalleryPageModule.ɵfac = function GalleryPageModule_Factory(t) {
        return new (t || GalleryPageModule)();
      };

      GalleryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: GalleryPageModule
      });
      GalleryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleryPageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__["PinchZoomModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GalleryPageModule, {
          declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_4__["GalleryPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleryPageRoutingModule"], ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_5__["PinchZoomModule"]],
          exports: [_gallery_page__WEBPACK_IMPORTED_MODULE_4__["GalleryPage"]]
        });
      })();
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
    "N4Pa":
    /*!*************************************************!*\
      !*** ./src/app/pages/location/location.page.ts ***!
      \*************************************************/

    /*! exports provided: LocationPage */

    /***/
    function N4Pa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
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


      var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/location.model */
      "V6dt");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./gallery/gallery.page */
      "2FmR");
      /* harmony import */


      var _campi_new_campi_new_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./campi-new/campi-new.page */
      "jxq3");
      /* harmony import */


      var src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/buttoncard.model */
      "07+x");
      /* harmony import */


      var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/valuelist.model */
      "W8X0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/components/button-card/button-card.component */
      "Hm2W");
      /* harmony import */


      var _shared_components_aperture_aperture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/components/aperture/aperture.component */
      "0Xnq");

      function LocationPage_ion_slide_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationPage_ion_slide_10_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);

            var img_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r9.openPreview(img_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", img_r8.IMAGEURL, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        }
      }

      function LocationPage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-button-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickElement", function LocationPage_div_12_Template_app_button_card_clickElement_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r12.onClickButtonCard($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var btn_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("smallVersion", false)("myButtonCard", btn_r11);
        }
      }

      function LocationPage_ion_item_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.selectedLocation.DESCRIZIONEMOB);
        }
      }

      function LocationPage_ion_item_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationPage_ion_item_20_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r14.onClickOpenCampi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-badge", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.getLabelCampiDisponibili());

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.selectedLocation.getNumCampi());
        }
      }

      function LocationPage_ion_item_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r4.selectedLocation.COMUNE);
        }
      }

      function LocationPage_ion_item_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedLocation.INDIRIZZO, " ");
        }
      }

      function LocationPage_ion_item_group_23_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "tel:" + ctx_r16.selectedLocation.TELEFONO);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.selectedLocation.TELEFONO);
        }
      }

      function LocationPage_ion_item_group_23_ion_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "mailto:" + ctx_r17.selectedLocation.EMAIL);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r17.selectedLocation.EMAIL);
        }
      }

      function LocationPage_ion_item_group_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-item-divider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Contatti");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LocationPage_ion_item_group_23_ion_item_5_Template, 4, 2, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LocationPage_ion_item_group_23_ion_item_6_Template, 4, 2, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.selectedLocation.TELEFONO);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.selectedLocation.EMAIL);
        }
      }

      function LocationPage_ion_item_group_24_app_aperture_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-aperture", 29);
        }

        if (rf & 2) {
          var apertura_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("myApertura", apertura_r19);
        }
      }

      function LocationPage_ion_item_group_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item-group", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-item-divider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Orari Centro");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LocationPage_ion_item_group_24_app_aperture_5_Template, 1, 1, "app-aperture", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7.selectedLocation.APERTURALOCATION);
        }
      }

      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(router, startService, modalCtrl, navCtrl) {
          var _this = this;

          _classCallCheck(this, LocationPage);

          this.router = router;
          this.startService = startService;
          this.modalCtrl = modalCtrl;
          this.navCtrl = navCtrl;
          this.selectedLocation = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_2__["Location"]();
          this.aperture = [];
          this.listButtonCard = []; // Lista dei Bottoni

          this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            //centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 20
          }; //Imposto i bottoni da mostrare 

          this.setButtonCard(); //Recupero il documento di start config

          this.startService.startConfig.subscribe(function (elData) {
            _this.myStartConfig = elData;
          });
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var idLocation = '';
            this.router.paramMap.subscribe(function (param) {
              if (param.has('locationId')) {
                idLocation = param.get('locationId'); //Chiedo al Server le informazioni Location

                _this2.startService.requestLocationByID(idLocation); //Ricevo le info della Location


                _this2.subSelectedLocation = _this2.startService.activeLocation.subscribe(function (element) {
                  _this2.selectedLocation = element;

                  if (!_this2.selectedLocation.do_inserted) {
                    /** Imposto i Bottoni Card */
                    _this2.setButtonCard();
                  }
                });
              } else {
                _this2.navCtrl.navigateForward(['/']);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subSelectedLocation) {
              this.subSelectedLocation.unsubscribe();
            }
          }
        }, {
          key: "setButtonCard",
          value: function setButtonCard() {
            var tipoSocieta; //Recupero il tipo di società

            if (this.myStartConfig && this.myStartConfig.gruppo) {
              tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
            } // Recupero i Bottoni che devo mostrare in videata
            // A seconda se posso Prenotare nella location oppure no


            this.listButtonCard = src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_6__["ButtonCard"].getButtonActionLocation(this.selectedLocation.ENABLEPRENOTAZIONI, tipoSocieta);
          }
          /** Apre il Preview di una immagine */

        }, {
          key: "openPreview",
          value: function openPreview(img) {
            this.modalCtrl.create({
              component: _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_4__["GalleryPage"],
              componentProps: {
                imgLocation: img
              }
            }).then(function (modal) {
              modal.present();
              modal.onWillDismiss().then(function () {
                //quando la modale si chiude, riblocco lo schermo in verticale
                window.screen.orientation.lock("portrait");
              });
            });
          }
          /**
           * Click sul bottone
           * @param btn Bottone utilizzato
           */

        }, {
          key: "onClickButtonCard",
          value: function onClickButtonCard(btn) {
            switch (btn.functionCod) {
              case 'book':
                //Prenotazioni
                this.navCtrl.navigateForward(['/', 'location', this.selectedLocation.ID, 'booking']);
                break;

              case 'course':
                // Corsi
                this.navCtrl.navigateForward(['/', 'listcourses', this.selectedLocation.ID]);
                break;

              default:
                break;
            }
          }
          /** Apertura modale dei campi */

        }, {
          key: "onClickOpenCampi",
          value: function onClickOpenCampi() {
            //Apertura modale della pagina dei campi
            this.modalCtrl.create({
              component: _campi_new_campi_new_page__WEBPACK_IMPORTED_MODULE_5__["CampiNewPage"],
              componentProps: {
                myLocation: this.selectedLocation
              }
            }).then(function (modal) {
              return modal.present();
            });
          }
          /**
           * Ritorna l'etichetta da mostrare nell'item Aule/Campi
           */

        }, {
          key: "getLabelCampiDisponibili",
          value: function getLabelCampiDisponibili() {
            var text = 'Struttura';
            var singolare = true;

            if (this.selectedLocation.getNumCampi() > 1) {
              singolare = false;
            }

            if (this.myStartConfig && this.myStartConfig.gruppo) {
              switch (this.myStartConfig.gruppo.TIPOGRUPPO) {
                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_7__["TipoSocieta"].formazione:
                  text = singolare ? 'Aula disponibile' : 'Aule disponibili';
                  break;

                case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_7__["TipoSocieta"].sportiva:
                  text = singolare ? 'Campo disponibile' : 'Campi disponibili';
                  break;

                default:
                  break;
              }
            }

            return text;
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ɵfac = function LocationPage_Factory(t) {
        return new (t || LocationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]));
      };

      LocationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: LocationPage,
        selectors: [["app-location"]],
        decls: 25,
        vars: 11,
        consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-no-margin", "ion-no-padding", "backcolorcard"], ["pager", ""], [4, "ngFor", "ngForOf"], [1, "backcolorcard", "ion-list-margin-bottom", "ion-no-margin", "ion-no-padding"], ["class", "ion-no-margin ion-no-padding", 4, "ngFor", "ngForOf"], [1, "ion-list-margin-bottom"], ["color", "tertiary"], [4, "ngIf"], ["button", "", 3, "click", 4, "ngIf"], ["id", "loc-orari", 4, "ngIf"], ["tappable", "", 3, "src", "click"], [1, "ion-no-margin", "ion-no-padding"], [3, "smallVersion", "myButtonCard", "clickElement"], ["name", "information-circle-outline", "slot", "start", "color", "primary"], [1, "ion-text-wrap"], ["button", "", 3, "click"], ["name", "medical", "slot", "start", "color", "primary"], ["name", "home", "slot", "start", "color", "primary"], ["name", "navigate", "slot", "start", "color", "primary"], ["button", "", 3, "href", 4, "ngIf"], ["button", "", 3, "href"], ["name", "call", "slot", "start", "color", "primary"], ["name", "mail", "slot", "start", "color", "primary"], ["id", "loc-orari"], [3, "myApertura", 4, "ngFor", "ngForOf"], [3, "myApertura"]],
        template: function LocationPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-slides", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, LocationPage_ion_slide_10_Template, 2, 1, "ion-slide", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, LocationPage_div_12_Template, 2, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-item-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-item-divider", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Info Centro");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, LocationPage_ion_item_19_Template, 5, 1, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, LocationPage_ion_item_20_Template, 6, 2, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, LocationPage_ion_item_21_Template, 4, 1, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, LocationPage_ion_item_22_Template, 4, 1, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, LocationPage_ion_item_group_23_Template, 7, 2, "ion-item-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, LocationPage_ion_item_group_24_Template, 6, 1, "ion-item-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 9, ctx.selectedLocation.DENOMINAZIONE), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.selectedLocation.LOCATIONIMAGE);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.listButtonCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.DESCRIZIONEMOB);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.getNumCampi() !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.COMUNE);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.INDIRIZZO);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.TELEFONO || ctx.selectedLocation.EMAIL);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedLocation.APERTURALOCATION.length !== 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _shared_components_button_card_button_card_component__WEBPACK_IMPORTED_MODULE_10__["ButtonCardComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _shared_components_aperture_aperture_component__WEBPACK_IMPORTED_MODULE_11__["ApertureComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\nion-slides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media screen and (max-width: 600px) {\n  ion-slides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.ion-list-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 2vmax;\n}\n\n.backcolorcard[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0FBQUo7O0FBS0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGUjs7QUFLSTtFQUNJO0lBQ0ksV0FBQTtFQUhWO0FBQ0Y7O0FBUUE7RUFDSSxvQkFBQTtBQUxKOztBQVFBO0VBQ0ksNkNBQUE7QUFMSiIsImZpbGUiOiJsb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuXHJcbntcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmlvbi1saXN0LW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZtYXg7XHJcbn1cclxuXHJcbi5iYWNrY29sb3JjYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
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
    "XuUw":
    /*!**************************************************************!*\
      !*** ./src/app/pages/location/campi-new/campi-new.module.ts ***!
      \**************************************************************/

    /*! exports provided: CampiNewPageModule */

    /***/
    function XuUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampiNewPageModule", function () {
        return CampiNewPageModule;
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


      var _campi_new_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./campi-new-routing.module */
      "AIqq");
      /* harmony import */


      var _campi_new_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./campi-new.page */
      "jxq3");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CampiNewPageModule = function CampiNewPageModule() {
        _classCallCheck(this, CampiNewPageModule);
      };

      CampiNewPageModule.ɵfac = function CampiNewPageModule_Factory(t) {
        return new (t || CampiNewPageModule)();
      };

      CampiNewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: CampiNewPageModule
      });
      CampiNewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _campi_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampiNewPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CampiNewPageModule, {
          declarations: [_campi_new_page__WEBPACK_IMPORTED_MODULE_4__["CampiNewPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _campi_new_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampiNewPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
        });
      })();
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
    "bznP":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js ***!
      \*****************************************************************************/

    /*! exports provided: PinchZoomComponent, PinchZoomModule */

    /***/
    function bznP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PinchZoomComponent", function () {
        return PinchZoomComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function () {
        return PinchZoomModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PinchZoomComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PinchZoomComponent_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.toggleZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-zoom-button-out", ctx_r0.isZoomedIn);
        }
      }

      var _c0 = ["*"];
      var defaultProperties = {
        transitionDuration: 200,
        doubleTap: true,
        doubleTapScale: 2,
        limitZoom: "original image size",
        autoZoomOut: false,
        disabled: false,
        overflow: "hidden",
        zoomControlScale: 1,
        backgroundColor: "rgba(0,0,0,0.85)",
        minScale: 0,
        minPanScale: 1.0001,
        disableZoomControl: "auto",
        listeners: "mouse and touch",
        wheel: true,
        wheelZoomFactor: 0.2,
        draggableImage: false
      };
      var backwardCompatibilityProperties = {
        "transition-duration": "transitionDuration",
        "double-tap": "doubleTap",
        "double-tap-scale": "doubleTapScale",
        "zoom-button": "zoomButton",
        "auto-zoom-out": "autoZoomOut",
        "limit-zoom": "limitZoom"
      };

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this3 = this;

          _classCallCheck(this, Touches);

          this.eventType = undefined;
          this.handlers = {};
          this.startX = 0;
          this.startY = 0;
          this.lastTap = 0;
          this.doubleTapMinTimeout = 300;
          this.tapMinTimeout = 200;
          this.touchstartTime = 0;
          this.i = 0;
          this.isMousedown = false;
          this.touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
          };
          this.mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
          };
          this.otherListeners = {
            "resize": "handleResize"
          };
          /*
           * Listeners
           */

          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this3.elementPosition = _this3.getElementPosition();
            _this3.touchstartTime = new Date().getTime();

            if (_this3.eventType === undefined) {
              _this3.getTouchstartPosition(event);
            }

            _this3.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this3.detectPan(touches)) {
              _this3.runHandler("pan", event);
            } // Pinch


            if (_this3.detectPinch(event)) {
              _this3.runHandler("pinch", event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this3.detectDoubleTap()) {
              _this3.runHandler("double-tap", event);
            } // Tap


            _this3.detectTap();

            _this3.runHandler("touchend", event);

            _this3.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this3.eventType = undefined;
              _this3.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this3.isMousedown = true;
            _this3.elementPosition = _this3.getElementPosition();
            _this3.touchstartTime = new Date().getTime();

            if (_this3.eventType === undefined) {
              _this3.getMousedownPosition(event);
            }

            _this3.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this3.isMousedown) {
              return;
            } // Pan


            _this3.runHandler("pan", event); // Linear swipe


            switch (_this3.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this3.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this3.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this3.detectLinearSwipe(event) || _this3.eventType === 'horizontal-swipe' || _this3.eventType === 'vertical-swipe') {
              _this3.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this3.detectTap();

            _this3.isMousedown = false;

            _this3.runHandler("mouseup", event);

            _this3.eventType = undefined;
            _this3.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this3.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this3.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
            //event.preventDefault();
            this.i++;

            if (this.i > 3) {
              this.eventType = this.getLinearSwipeType(event);
            }

            if (this.eventType === 'horizontal-swipe') {
              this.runHandler('horizontal-swipe', event);
            }

            if (this.eventType === 'vertical-swipe') {
              this.runHandler('vertical-swipe', event);
            }
          }
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this4 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this4.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", {});
              } else {
                this.runHandler("longtap", {});
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var IvyPinchDefaultProperties = {
        doubleTap: true,
        doubleTapScale: 2,
        transitionDuration: 200,
        limitZoom: "original image size",
        minScale: 0,
        minPanScale: 1.0001,
        wheel: true,
        wheelZoomFactor: 0.2,
        draggableImage: true,
        listeners: 'auto',
        zoomControlScale: 2
      };

      var IvyPinch = /*#__PURE__*/function () {
        function IvyPinch(properties) {
          var _this5 = this;

          _classCallCheck(this, IvyPinch);

          this.i = 0;
          this.scale = 1;
          this.initialScale = 1;
          this.startX = 0;
          this.startY = 0;
          this.moveX = 0;
          this.moveY = 0;
          this.initialMoveX = 0;
          this.initialMoveY = 0;
          this.moveXC = 0;
          this.moveYC = 0;
          this.lastTap = 0;
          this.draggingMode = false;
          this.distance = 0;
          this.doubleTapTimeout = 0;
          this.initialDistance = 0;
          this.events = {};
          this.maxHtmlContentScale = 3;
          this.maxScale = 3;
          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this5.getElementPosition();

            if (_this5.eventType === undefined) {
              _this5.getTouchstartPosition(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            /* touchend */
            if (event.type === "touchend") {
              _this5.i = 0;
              _this5.draggingMode = false;
              var touches = event.touches; // Min scale

              if (_this5.scale < 1) {
                _this5.scale = 1;
              } // Auto Zoom Out


              if (_this5.properties.autoZoomOut && _this5.eventType === 'pinch') {
                _this5.scale = 1;
              } // Align image


              if (_this5.eventType === 'pinch' || _this5.eventType === 'pan' && _this5.scale > _this5.properties.minPanScale) {
                _this5.alignImage();
              } // Update initial values


              if (_this5.eventType === 'pinch' || _this5.eventType === 'pan' || _this5.eventType === 'horizontal-swipe' || _this5.eventType === 'vertical-swipe') {
                _this5.updateInitialValues();
              }

              _this5.eventType = 'touchend';

              if (touches && touches.length === 0) {
                _this5.eventType = undefined;
              }
            }
            /* mouseup */


            if (event.type === "mouseup") {
              _this5.draggingMode = false;

              _this5.updateInitialValues();

              _this5.eventType = undefined;
            }
          };
          /*
           * Handlers
           */


          this.handlePan = function (event) {
            if (_this5.scale < _this5.properties.minPanScale || _this5.properties.disablePan) {
              return;
            }

            event.preventDefault();

            var _this5$getClientPosit = _this5.getClientPosition(event),
                clientX = _this5$getClientPosit.clientX,
                clientY = _this5$getClientPosit.clientY;

            if (!_this5.eventType) {
              _this5.startX = clientX - _this5.elementPosition.left;
              _this5.startY = clientY - _this5.elementPosition.top;
            }

            _this5.eventType = 'pan';
            _this5.moveX = _this5.initialMoveX + (_this5.moveLeft(event, 0) - _this5.startX);
            _this5.moveY = _this5.initialMoveY + (_this5.moveTop(event, 0) - _this5.startY);

            if (_this5.properties.limitPan) {
              _this5.limitPanY();

              _this5.limitPanX();
            }
            /* mousemove */


            if (event.type === "mousemove" && _this5.scale > _this5.properties.minPanScale) {
              _this5.centeringImage();
            }

            _this5.transformElement(0);
          };

          this.handleDoubleTap = function (event) {
            _this5.toggleZoom(event);

            return;
          };

          this.handlePinch = function (event) {
            event.preventDefault();

            if (_this5.eventType === undefined || _this5.eventType === 'pinch') {
              var touches = event.touches;

              if (!_this5.eventType) {
                _this5.initialDistance = _this5.getDistance(touches);

                var moveLeft0 = _this5.moveLeft(event, 0);

                var moveLeft1 = _this5.moveLeft(event, 1);

                var moveTop0 = _this5.moveTop(event, 0);

                var moveTop1 = _this5.moveTop(event, 1);

                _this5.moveXC = (moveLeft0 + moveLeft1) / 2 - _this5.initialMoveX;
                _this5.moveYC = (moveTop0 + moveTop1) / 2 - _this5.initialMoveY;
              }

              _this5.eventType = 'pinch';
              _this5.distance = _this5.getDistance(touches);
              _this5.scale = _this5.initialScale * (_this5.distance / _this5.initialDistance);
              _this5.moveX = _this5.initialMoveX - (_this5.distance / _this5.initialDistance * _this5.moveXC - _this5.moveXC);
              _this5.moveY = _this5.initialMoveY - (_this5.distance / _this5.initialDistance * _this5.moveYC - _this5.moveYC);

              _this5.handleLimitZoom();

              if (_this5.properties.limitPan) {
                _this5.limitPanY();

                _this5.limitPanX();
              }

              _this5.transformElement(0);
            }
          };

          this.handleWheel = function (event) {
            event.preventDefault();
            var wheelZoomFactor = _this5.properties.wheelZoomFactor || 0;
            var zoomFactor = event.deltaY < 0 ? wheelZoomFactor : -wheelZoomFactor;
            var newScale = _this5.initialScale + zoomFactor;
            /* Round value */

            if (newScale < 1 + wheelZoomFactor) {
              newScale = 1;
            } else if (newScale < _this5.maxScale && newScale > _this5.maxScale - wheelZoomFactor) {
              newScale = _this5.maxScale;
            }

            if (newScale < 1 || newScale > _this5.maxScale) {
              return;
            }

            if (newScale === _this5.scale) {
              return;
            }

            _this5.getElementPosition();

            _this5.scale = newScale;
            /* Get cursor position over image */

            var xCenter = event.clientX - _this5.elementPosition.left - _this5.initialMoveX;
            var yCenter = event.clientY - _this5.elementPosition.top - _this5.initialMoveY;

            _this5.setZoom({
              scale: newScale,
              center: [xCenter, yCenter]
            });
          };

          this.handleResize = function (_event) {
            _this5.setAutoHeight();
          };

          this.element = properties.element;
          this.elementTarget = this.element.querySelector('*').tagName;
          this.parentElement = this.element.parentElement;
          this.properties = Object.assign({}, IvyPinchDefaultProperties, properties);
          this.pollLimitZoom();
          this.touches = new Touches({
            element: properties.element,
            listeners: this.properties.listeners,
            resize: this.properties.autoHeight
          });
          /* Init */

          this.setBasicStyles();
          /*
           * Listeners
           */

          this.touches.on('touchstart', this.handleTouchstart);
          this.touches.on('touchend', this.handleTouchend);
          this.touches.on('mousedown', this.handleTouchstart);
          this.touches.on('mouseup', this.handleTouchend);
          this.touches.on('pan', this.handlePan);
          this.touches.on('mousemove', this.handlePan);
          this.touches.on('pinch', this.handlePinch);

          if (this.properties.wheel) {
            this.touches.on('wheel', this.handleWheel);
          }

          if (this.properties.doubleTap) {
            this.touches.on('double-tap', this.handleDoubleTap);
          }

          if (this.properties.autoHeight) {
            this.touches.on('resize', this.handleResize);
          }
        }

        _createClass(IvyPinch, [{
          key: "handleLimitZoom",
          value: function handleLimitZoom() {
            var limitZoom = this.maxScale;
            var minScale = this.properties.minScale || 0;

            if (this.scale > limitZoom || this.scale <= minScale) {
              var imageWidth = this.getImageWidth();
              var imageHeight = this.getImageHeight();
              var enlargedImageWidth = imageWidth * this.scale;
              var enlargedImageHeight = imageHeight * this.scale;
              var moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
              var moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);

              if (this.scale > limitZoom) {
                this.scale = limitZoom;
              }

              if (this.scale <= minScale) {
                this.scale = minScale;
              }

              var newImageWidth = imageWidth * this.scale;
              var newImageHeight = imageHeight * this.scale;
              this.moveX = -Math.abs(moveXRatio * (newImageWidth - imageWidth));
              this.moveY = -Math.abs(-moveYRatio * (newImageHeight - imageHeight));
            }
          }
        }, {
          key: "getLimitZoom",
          value: function getLimitZoom() {
            if (this.properties.limitZoom === "original image size") {
              if (this.elementTarget === "IMG") {
                var img = this.element.getElementsByTagName("img")[0];

                if (img.naturalWidth && img.offsetWidth) {
                  this.maxScale = img.naturalWidth / img.offsetWidth;
                  return this.maxScale;
                }
              } else {
                this.maxScale = this.maxHtmlContentScale;
                return this.maxScale;
              }
            } else {
              this.maxScale = this.properties.limitZoom || 0;
              return this.maxScale;
            }
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientX = this.getClientPosition(event, index).clientX;
            return clientX - this.elementPosition.left;
          }
        }, {
          key: "moveTop",
          value: function moveTop(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientY = this.getClientPosition(event, index).clientY;
            return clientY - this.elementPosition.top;
          }
          /*
           * Detection
           */

        }, {
          key: "centeringImage",
          value: function centeringImage() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            var initialMoveX = this.moveX;
            var initialMoveY = this.moveY;

            if (this.moveY > 0) {
              this.moveY = 0;
            }

            if (this.moveX > 0) {
              this.moveX = 0;
            }

            if (img) {
              this.limitPanY();
              this.limitPanX();
            }

            if (img && this.scale < 1) {
              if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
              }
            }

            return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
          }
        }, {
          key: "limitPanY",
          value: function limitPanY() {
            var imgHeight = this.getImageHeight();
            var scaledImgHeight = imgHeight * this.scale;
            var parentHeight = this.parentElement.offsetHeight;
            var elementHeight = this.element.offsetHeight;

            if (scaledImgHeight < parentHeight) {
              this.moveY = (parentHeight - elementHeight * this.scale) / 2;
            } else {
              var imgOffsetTop = (imgHeight - elementHeight) * this.scale / 2;

              if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
              } else if (scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight + this.moveY < 0) {
                this.moveY = -(scaledImgHeight + Math.abs(imgOffsetTop) - parentHeight);
              }
            }
          }
        }, {
          key: "limitPanX",
          value: function limitPanX() {
            var imgWidth = this.getImageWidth();
            var scaledImgWidth = imgWidth * this.scale;
            var parentWidth = this.parentElement.offsetWidth;
            var elementWidth = this.element.offsetWidth;

            if (scaledImgWidth < parentWidth) {
              this.moveX = (parentWidth - elementWidth * this.scale) / 2;
            } else {
              var imgOffsetLeft = (imgWidth - elementWidth) * this.scale / 2;

              if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
              } else if (scaledImgWidth + Math.abs(imgOffsetLeft) - parentWidth + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - parentWidth);
              }
            }
          }
        }, {
          key: "setBasicStyles",
          value: function setBasicStyles() {
            this.element.style.display = 'flex';
            this.element.style.alignItems = 'center';
            this.element.style.justifyContent = 'center';
            this.element.style.transformOrigin = '0 0';
            this.setImageSize();
            this.setDraggableImage();
          }
        }, {
          key: "removeBasicStyles",
          value: function removeBasicStyles() {
            this.element.style.display = '';
            this.element.style.alignItems = '';
            this.element.style.justifyContent = '';
            this.element.style.transformOrigin = '';
            this.removeImageSize();
            this.removeDraggableImage();
          }
        }, {
          key: "setDraggableImage",
          value: function setDraggableImage() {
            var imgElement = this.getImageElement();

            if (imgElement) {
              imgElement.draggable = this.properties.draggableImage;
            }
          }
        }, {
          key: "removeDraggableImage",
          value: function removeDraggableImage() {
            var imgElement = this.getImageElement();

            if (imgElement) {
              imgElement.draggable = true;
            }
          }
        }, {
          key: "setImageSize",
          value: function setImageSize() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              imgElement[0].style.maxWidth = '100%';
              imgElement[0].style.maxHeight = '100%';
              this.setAutoHeight();
            }
          }
        }, {
          key: "setAutoHeight",
          value: function setAutoHeight() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (!this.properties.autoHeight || !imgElement.length) {
              return;
            }

            var imgNaturalWidth = imgElement[0].getAttribute("width");
            var imgNaturalHeight = imgElement[0].getAttribute("height");
            var sizeRatio = imgNaturalWidth / imgNaturalHeight;
            var parentWidth = this.parentElement.offsetWidth;
            imgElement[0].style.maxHeight = parentWidth / sizeRatio + "px";
          }
        }, {
          key: "removeImageSize",
          value: function removeImageSize() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              imgElement[0].style.maxWidth = '';
              imgElement[0].style.maxHeight = '';
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            this.elementPosition = this.element.parentElement.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            var _this$getClientPositi = this.getClientPosition(event),
                clientX = _this$getClientPositi.clientX,
                clientY = _this$getClientPositi.clientY;

            this.startX = clientX - this.elementPosition.left;
            this.startY = clientY - this.elementPosition.top;
          }
        }, {
          key: "getClientPosition",
          value: function getClientPosition(event) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var clientX;
            var clientY;

            if (event.type === "touchstart" || event.type === "touchmove") {
              clientX = event.touches[index].clientX;
              clientY = event.touches[index].clientY;
            }

            if (event.type === "mousedown" || event.type === "mousemove") {
              clientX = event.clientX;
              clientY = event.clientY;
            }

            return {
              clientX: clientX,
              clientY: clientY
            };
          }
        }, {
          key: "resetScale",
          value: function resetScale() {
            this.scale = 1;
            this.moveX = 0;
            this.moveY = 0;
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
          }
        }, {
          key: "updateInitialValues",
          value: function updateInitialValues() {
            this.initialScale = this.scale;
            this.initialMoveX = this.moveX;
            this.initialMoveY = this.moveY;
          }
        }, {
          key: "getDistance",
          value: function getDistance(touches) {
            return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
          }
        }, {
          key: "getImageHeight",
          value: function getImageHeight() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            return img.offsetHeight;
          }
        }, {
          key: "getImageWidth",
          value: function getImageWidth() {
            var img = this.element.getElementsByTagName(this.elementTarget)[0];
            return img.offsetWidth;
          }
        }, {
          key: "transformElement",
          value: function transformElement(duration) {
            this.element.style.transition = "all " + duration + "ms";
            this.element.style.transform = "matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
          }
        }, {
          key: "isTouchScreen",
          value: function isTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return this.getMatchMedia(query);
          }
        }, {
          key: "getMatchMedia",
          value: function getMatchMedia(query) {
            return window.matchMedia(query).matches;
          }
        }, {
          key: "isDragging",
          value: function isDragging() {
            if (this.properties.disablePan) {
              return false;
            }

            var imgHeight = this.getImageHeight();
            var imgWidth = this.getImageWidth();

            if (this.scale > 1) {
              return imgHeight * this.scale > this.parentElement.offsetHeight || imgWidth * this.scale > this.parentElement.offsetWidth;
            }

            if (this.scale === 1) {
              return imgHeight > this.parentElement.offsetHeight || imgWidth > this.parentElement.offsetWidth;
            }
          }
        }, {
          key: "pollLimitZoom",
          value: function pollLimitZoom() {
            var _this6 = this;

            var poll = setInterval(function () {
              if (_this6.getLimitZoom()) {
                clearInterval(poll);
              }
            }, 10);
          }
        }, {
          key: "getImageElement",
          value: function getImageElement() {
            var imgElement = this.element.getElementsByTagName(this.elementTarget);

            if (imgElement.length) {
              return imgElement[0];
            }
          }
        }, {
          key: "toggleZoom",
          value: function toggleZoom() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.initialScale === 1) {
              if (event && event.changedTouches) {
                if (this.properties.doubleTapScale === undefined) {
                  return;
                }

                var changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.properties.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX - this.elementPosition.left) * (this.properties.doubleTapScale - 1);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY - this.elementPosition.top) * (this.properties.doubleTapScale - 1);
              } else {
                var zoomControlScale = this.properties.zoomControlScale || 0;
                this.scale = this.initialScale * (zoomControlScale + 1);
                this.moveX = this.initialMoveX - this.element.offsetWidth * (this.scale - 1) / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight * (this.scale - 1) / 2;
              }

              this.centeringImage();
              this.updateInitialValues();
              this.transformElement(this.properties.transitionDuration);
            } else {
              this.resetScale();
            }
          }
        }, {
          key: "setZoom",
          value: function setZoom(properties) {
            this.scale = properties.scale;
            var xCenter;
            var yCenter;
            var visibleAreaWidth = this.element.offsetWidth;
            var visibleAreaHeight = this.element.offsetHeight;
            var scalingPercent = visibleAreaWidth * this.scale / (visibleAreaWidth * this.initialScale);

            if (properties.center) {
              xCenter = properties.center[0];
              yCenter = properties.center[1];
            } else {
              xCenter = visibleAreaWidth / 2 - this.initialMoveX;
              yCenter = visibleAreaHeight / 2 - this.initialMoveY;
            }

            this.moveX = this.initialMoveX - (scalingPercent * xCenter - xCenter);
            this.moveY = this.initialMoveY - (scalingPercent * yCenter - yCenter);
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.properties.transitionDuration);
          }
        }, {
          key: "alignImage",
          value: function alignImage() {
            var isMoveChanged = this.centeringImage();

            if (isMoveChanged) {
              this.updateInitialValues();
              this.transformElement(this.properties.transitionDuration);
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.removeBasicStyles();
            this.touches.destroy();
          }
        }]);

        return IvyPinch;
      }();

      var PinchZoomComponent = /*#__PURE__*/function () {
        function PinchZoomComponent(elementRef) {
          _classCallCheck(this, PinchZoomComponent);

          this.elementRef = elementRef;
          this.transitionDuration = 200;
          this.doubleTap = true;
          this.doubleTapScale = 2;
          this.autoZoomOut = false;
          this.disabled = false;
          this.zoomControlScale = 1;
          this.backgroundColor = "rgba(0,0,0,0.85)";
          this.minPanScale = 1.0001;
          this.minScale = 0;
          this.listeners = 'mouse and touch';
          this.wheel = true;
          this.autoHeight = false;
          this.wheelZoomFactor = 0.2;
          this.draggableImage = false;
          this.applyOptionsDefault(defaultProperties, {});
        }

        _createClass(PinchZoomComponent, [{
          key: "properties",
          get: function get() {
            return this._properties;
          },
          set: function set(value) {
            if (value) {
              this._properties = value;
            }
          }
        }, {
          key: "hostOverflow",
          get: function get() {
            return this.properties['overflow'];
          }
        }, {
          key: "hostBackgroundColor",
          get: function get() {
            return this.properties['backgroundColor'];
          }
        }, {
          key: "isTouchScreen",
          get: function get() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
        }, {
          key: "isDragging",
          get: function get() {
            return this.pinchZoom.isDragging();
          }
        }, {
          key: "isDisabled",
          get: function get() {
            return this.properties['disabled'];
          }
        }, {
          key: "scale",
          get: function get() {
            return this.pinchZoom.scale;
          }
        }, {
          key: "isZoomedIn",
          get: function get() {
            return this.scale > 1;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initPinchZoom();
            /* Calls the method until the image size is available */

            this.pollLimitZoom();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var changedOptions = this.getProperties(changes);
            changedOptions = this.renameProperties(changedOptions);
            this.applyOptionsDefault(defaultProperties, changedOptions);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy();
          }
        }, {
          key: "initPinchZoom",
          value: function initPinchZoom() {
            if (this.properties['disabled']) {
              return;
            }

            this.properties['element'] = this.elementRef.nativeElement.querySelector('.pinch-zoom-content');
            this.pinchZoom = new IvyPinch(this.properties);
          }
        }, {
          key: "getProperties",
          value: function getProperties(changes) {
            var properties = {};

            for (var prop in changes) {
              if (prop !== 'properties') {
                properties[prop] = changes[prop].currentValue;
              }

              if (prop === 'properties') {
                properties = changes[prop].currentValue;
              }
            }

            return properties;
          }
        }, {
          key: "renameProperties",
          value: function renameProperties(options) {
            for (var prop in options) {
              if (backwardCompatibilityProperties[prop]) {
                options[backwardCompatibilityProperties[prop]] = options[prop];
                delete options[prop];
              }
            }

            return options;
          }
        }, {
          key: "applyOptionsDefault",
          value: function applyOptionsDefault(defaultOptions, options) {
            this.properties = Object.assign({}, defaultOptions, options);
          }
        }, {
          key: "toggleZoom",
          value: function toggleZoom() {
            this.pinchZoom.toggleZoom();
          }
        }, {
          key: "isControl",
          value: function isControl() {
            if (this.isDisabled) {
              return false;
            }

            if (this.properties['disableZoomControl'] === "disable") {
              return false;
            }

            if (this.isTouchScreen && this.properties['disableZoomControl'] === "auto") {
              return false;
            }

            return true;
          }
        }, {
          key: "pollLimitZoom",
          value: function pollLimitZoom() {
            this.pinchZoom.pollLimitZoom();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.pinchZoom.destroy();
          }
        }]);

        return PinchZoomComponent;
      }();

      PinchZoomComponent.ɵfac = function PinchZoomComponent_Factory(t) {
        return new (t || PinchZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      PinchZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PinchZoomComponent,
        selectors: [["pinch-zoom"], ["", "pinch-zoom", ""]],
        hostVars: 4,
        hostBindings: function PinchZoomComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", ctx.hostOverflow)("background-color", ctx.hostBackgroundColor);
          }
        },
        inputs: {
          transitionDuration: ["transition-duration", "transitionDuration"],
          doubleTap: ["double-tap", "doubleTap"],
          doubleTapScale: ["double-tap-scale", "doubleTapScale"],
          autoZoomOut: ["auto-zoom-out", "autoZoomOut"],
          disabled: "disabled",
          zoomControlScale: "zoomControlScale",
          backgroundColor: "backgroundColor",
          minPanScale: "minPanScale",
          minScale: "minScale",
          listeners: "listeners",
          wheel: "wheel",
          autoHeight: "autoHeight",
          wheelZoomFactor: "wheelZoomFactor",
          draggableImage: "draggableImage",
          properties: "properties",
          limitZoom: ["limit-zoom", "limitZoom"],
          disablePan: "disablePan",
          overflow: "overflow",
          disableZoomControl: "disableZoomControl",
          limitPan: "limitPan"
        },
        exportAs: ["pinchZoom"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 3,
        consts: [[1, "pinch-zoom-content"], ["class", "pz-zoom-button pz-zoom-control-position-bottom", 3, "pz-zoom-button-out", "click", 4, "ngIf"], [1, "pz-zoom-button", "pz-zoom-control-position-bottom", 3, "click"]],
        template: function PinchZoomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PinchZoomComponent_div_2_Template, 1, 2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pz-dragging", ctx.isDragging);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControl());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display:block;overflow:hidden;position:relative}.pinch-zoom-content[_ngcontent-%COMP%]{height:inherit}.pz-dragging[_ngcontent-%COMP%]{cursor:all-scroll}.pz-zoom-button[_ngcontent-%COMP%]{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out[_ngcontent-%COMP%]{background-position:-1000px,50%}.pz-zoom-button[_ngcontent-%COMP%]:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right[_ngcontent-%COMP%]{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom[_ngcontent-%COMP%]{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom[_ngcontent-%COMP%]{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-out[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in[_ngcontent-%COMP%]:hover, .pz-zoom-out[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-in[_ngcontent-%COMP%], .pz-zoom-control-position-bottom[_ngcontent-%COMP%]   .pz-zoom-out[_ngcontent-%COMP%]{float:right}.pz-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}.pz-disabled[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
      });

      PinchZoomComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      PinchZoomComponent.propDecorators = {
        properties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['properties']
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['transition-duration']
        }],
        doubleTap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['double-tap']
        }],
        doubleTapScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['double-tap-scale']
        }],
        autoZoomOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['auto-zoom-out']
        }],
        limitZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['limit-zoom']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        disablePan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        overflow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoomControlScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableZoomControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        limitPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minPanScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wheelZoomFactor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        draggableImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hostOverflow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.overflow']
        }],
        hostBackgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.background-color']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pinch-zoom, [pinch-zoom]',
            exportAs: 'pinchZoom',
            template: "<div class=\"pinch-zoom-content\" [class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<!-- Control: one button -->\n<div class=\"pz-zoom-button pz-zoom-control-position-bottom\" \n\t[class.pz-zoom-button-out]=\"isZoomedIn\" \n\t*ngIf=\"isControl()\" \n\t(click)=\"toggleZoom()\"></div>",
            styles: [":host{display:block;overflow:hidden;position:relative}.pinch-zoom-content{height:inherit}.pz-dragging{cursor:all-scroll}.pz-zoom-button{-webkit-user-select:none;background-color:rgba(0,0,0,.8);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBpZD0ic3ZnXzEiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjxwYXRoIGQ9Ik0xMiAxMGgtMnYySDl2LTJIN1Y5aDJWN2gxdjJoMnYxeiIgaWQ9InN2Z18zIiBjbGFzcz0iIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9zdmc+),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6TTcgOWg1djFIN3oiIGlkPSJzdmdfMiIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==);background-position:50%,-1000px;background-repeat:no-repeat,no-repeat;background-size:40px;border-radius:4px;color:#fff;cursor:pointer;height:56px;opacity:.5;position:absolute;transition:opacity .1s;user-select:none;width:56px;z-index:1000}.pz-zoom-button-out{background-position:-1000px,50%}.pz-zoom-button:hover{opacity:.7}.pz-zoom-button.pz-zoom-control-position-right{margin-top:-28px;right:16px;top:50%}.pz-zoom-button.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-button.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-28px}.pz-zoom-control{background-color:rgba(0,0,0,.8);border-radius:4px;overflow:hidden;position:absolute}.pz-zoom-control.pz-zoom-control-position-right{margin-top:-48px;right:16px;top:50%}.pz-zoom-control.pz-zoom-control-position-right-bottom{bottom:32px;right:16px}.pz-zoom-control.pz-zoom-control-position-bottom{bottom:16px;left:50%;margin-left:-48px}.pz-zoom-in,.pz-zoom-out{background-position:50%;background-repeat:no-repeat;cursor:pointer;height:48px;opacity:1;width:48px}.pz-zoom-in:hover,.pz-zoom-out:hover{background-color:hsla(0,0%,100%,.2)}.pz-zoom-control-position-bottom .pz-zoom-in,.pz-zoom-control-position-bottom .pz-zoom-out{float:right}.pz-disabled{cursor:default;opacity:.5}.pz-disabled:hover{background-color:hsla(0,0%,100%,0)}.pz-zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgc3R5bGU9IiI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz48cGF0aCBkPSJNLTE1LjgzNjczNDQyMDQ2MTY1Myw0NC41MzU0MDkzMDY3MTAxOCBoNTguMjA0MDgwODI3NTkzMDkgdi02LjU3NjIyNjcyMzM2OTIyMTUgSC0xNS44MzY3MzQ0MjA0NjE2NTMgeiIgZmlsbD0ibm9uZSIgaWQ9InN2Z18yIiBjbGFzcz0iIiBzdHJva2U9Im5vbmUiLz48L2c+PC9zdmc+)}.pz-zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==)}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['transition-duration']
          }],
          doubleTap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap']
          }],
          doubleTapScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['double-tap-scale']
          }],
          autoZoomOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['auto-zoom-out']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          zoomControlScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minPanScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minScale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          wheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          wheelZoomFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          draggableImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['properties']
          }],
          hostOverflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.overflow']
          }],
          hostBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
          }],
          limitZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['limit-zoom']
          }],
          disablePan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableZoomControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          limitPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var PinchZoomModule = function PinchZoomModule() {
        _classCallCheck(this, PinchZoomModule);
      };

      PinchZoomModule.ɵfac = function PinchZoomModule_Factory(t) {
        return new (t || PinchZoomModule)();
      };

      PinchZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PinchZoomModule
      });
      PinchZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinchZoomModule, {
          declarations: function declarations() {
            return [PinchZoomComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PinchZoomComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchZoomModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [PinchZoomComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [PinchZoomComponent],
            providers: [],
            bootstrap: [],
            entryComponents: [PinchZoomComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-pinch-zoom
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-pinch-zoom.js.map

      /***/

    },

    /***/
    "jxq3":
    /*!************************************************************!*\
      !*** ./src/app/pages/location/campi-new/campi-new.page.ts ***!
      \************************************************************/

    /*! exports provided: CampiNewPage */

    /***/
    function jxq3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampiNewPage", function () {
        return CampiNewPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_pipes_tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/pipes/tipo-campo.pipe */
      "Hx3r");
      /* harmony import */


      var _shared_pipes_struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/pipes/struttura-campo.pipe */
      "OOC/");

      function CampiNewPage_div_9_ion_col_3_ion_slide_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sport_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.getIconSport(sport_r5), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sport_r5._DESCRSPORT, " ");
        }
      }

      function CampiNewPage_div_9_ion_col_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-slides", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CampiNewPage_div_9_ion_col_3_ion_slide_3_Template, 7, 2, "ion-slide", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-card-header", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "tipoCampo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "strutturaCampo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var campo_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.getSliderOpts(campo_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", campo_r3.CAMPOSPORT);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", campo_r3.DENOMINAZIONE, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, campo_r3.TIPOLOGIA), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 7, campo_r3.STRUTTURA), " ");
        }
      }

      function CampiNewPage_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CampiNewPage_div_9_ion_col_3_Template, 11, 9, "ion-col", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.myLocation.CAMPO);
        }
      }

      function CampiNewPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Caratteristiche Struttura");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "non disponibili");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var CampiNewPage = /*#__PURE__*/function () {
        function CampiNewPage(startService, mdlController) {
          _classCallCheck(this, CampiNewPage);

          this.startService = startService;
          this.mdlController = mdlController;
          this.listSport = [];
        } //opzioni dello slider


        _createClass(CampiNewPage, [{
          key: "getSliderOpts",
          value: function getSliderOpts(campo) {
            var _sliderOpts = {
              slidesPerView: 2.3
            };

            if (campo) {
              if (campo.CAMPOSPORT) {
                if (campo.CAMPOSPORT.length <= 2) {
                  _sliderOpts.slidesPerView = campo.CAMPOSPORT.length;
                }
              }
            }

            return _sliderOpts;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            //Sottoscrivo a ricevere le infomazioni aggiuntive
            this.listenLocation = this.startService.requestLocationCampiSport(this.myLocation).subscribe(function (filledLocation) {
              _this7.myLocation = filledLocation;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.listenLocation) {
              this.listenLocation.unsubscribe();
            }
          }
          /**
           * Chiude la videata
           */

        }, {
          key: "close",
          value: function close() {
            this.mdlController.dismiss();
          }
          /**
           * Cambia l'espansione del campo
           */

        }, {
          key: "switchExpansion",
          value: function switchExpansion(campo) {
            campo.selected = !campo.selected;
          }
          /**
           * Dato un oggetto campo, chiama il servizio e ritorna l'icona
           * @param campoSport L'oggetto campo
           */

        }, {
          key: "getIconSport",
          value: function getIconSport(campoSport) {
            if (campoSport) {
              return this.startService.getSportIcon(campoSport.IDSPORT);
            }
          }
        }]);

        return CampiNewPage;
      }();

      CampiNewPage.ɵfac = function CampiNewPage_Factory(t) {
        return new (t || CampiNewPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      CampiNewPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CampiNewPage,
        selectors: [["app-campi-new"]],
        decls: 11,
        vars: 5,
        consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "end"], [3, "click"], ["name", "close"], ["class", "cnt", 4, "ngIf"], ["class", "nofind-cnt", "id", "cam-nofind-cnt", 4, "ngIf"], [1, "cnt"], ["sizeXs", "10", "offsetXs", "1", "sizeMd", "6", "offsetMd", "0", 4, "ngFor", "ngForOf"], ["sizeXs", "10", "offsetXs", "1", "sizeMd", "6", "offsetMd", "0"], ["mode", "ios", 1, "card-campo"], [3, "options"], [4, "ngFor", "ngForOf"], ["color", "tertiary"], [1, "card-sport"], ["slot", "start", 1, "icon-sport"], [3, "innerHTML"], ["id", "cam-nofind-cnt", 1, "nofind-cnt"]],
        template: function CampiNewPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CampiNewPage_Template_ion_button_click_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CampiNewPage_div_9_Template, 4, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CampiNewPage_div_10_Template, 5, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx.myLocation.DENOMINAZIONE));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myLocation.CAMPO.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myLocation.CAMPO.length === 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _shared_pipes_tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCampoPipe"], _shared_pipes_struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_5__["StrutturaCampoPipe"]],
        styles: [".cnt[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n  min-height: 100%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  color: var(--ion-color-light);\n}\n\nion-card.card-sport[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\nion-card.card-sport[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 110px;\n}\n\nion-card.card-sport[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nion-card.card-campo[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nion-card.card-campo[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FtcGktbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBS0E7RUFVSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVhKOztBQUFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFRQTtFQUNJLGVBQUE7QUFMSjs7QUFRQTtFQU1HLFdBQUE7QUFWSDs7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFKUiIsImZpbGUiOiJjYW1waS1uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNudHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5pb24tY2FyZC5jYXJkLXNwb3J0e1xyXG4gICAgXHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG59XHJcblxyXG5pe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC5jYXJkLWNhbXBve1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "lPJH":
    /*!***************************************************!*\
      !*** ./src/app/pages/location/location.module.ts ***!
      \***************************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function lPJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location-routing.module */
      "A/7y");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./location.page */
      "N4Pa");
      /* harmony import */


      var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gallery/gallery.module */
      "J9i8");
      /* harmony import */


      var _campi_new_campi_new_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./campi-new/campi-new.module */
      "XuUw");
      /* harmony import */


      var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule.ɵfac = function LocationPageModule_Factory(t) {
        return new (t || LocationPageModule)();
      };

      LocationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: LocationPageModule
      });
      LocationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_3__["LocationPageRoutingModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageModule"], _campi_new_campi_new_module__WEBPACK_IMPORTED_MODULE_6__["CampiNewPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LocationPageModule, {
          declarations: [_location_page__WEBPACK_IMPORTED_MODULE_4__["LocationPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_3__["LocationPageRoutingModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageModule"], _campi_new_campi_new_module__WEBPACK_IMPORTED_MODULE_6__["CampiNewPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]]
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
//# sourceMappingURL=pages-location-location-module-es5.js.map