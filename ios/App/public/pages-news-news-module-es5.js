(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"], {
    /***/
    "Bp3h":
    /*!*****************************************!*\
      !*** ./src/app/pages/news/news.page.ts ***!
      \*****************************************/

    /*! exports provided: NewsPage */

    /***/
    function Bp3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
        return NewsPage;
      });
      /* harmony import */


      var src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/newsevento.model */
      "h27B");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_pages_newsdetail_newsdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/pages/newsdetail/newsdetail.page */
      "FYlm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/components/news-eventi/news-eventi.component */
      "nqF+");

      function NewsPage_ion_grid_9_ion_col_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-news-eventi", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickNews", function NewsPage_ion_grid_9_ion_col_2_Template_app_news_eventi_clickNews_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var news_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r4.onClickNews(news_r3, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var news_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("myNews", news_r3);
        }
      }

      function NewsPage_ion_grid_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NewsPage_ion_grid_9_ion_col_2_Template, 2, 1, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.listNews);
        }
      }

      function NewsPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nessun evento in programma");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Torna a trovarci per scoprire i prossimi eventi");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var NewsPage = /*#__PURE__*/function () {
        function NewsPage(startService, navController, loadingController, toastController, modalController) {
          _classCallCheck(this, NewsPage);

          this.startService = startService;
          this.navController = navController;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.modalController = modalController;
          this.listNews = [];
          this.maxRecord = 20; //Numero massimo di News richieste al server
          //Recupero la card che dice che non ci sono eventi

          this.noNewsCard = src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_0__["NewsEvento"].getNoNews();
          this.requestNews();
        }
        /**
         * Richiede al server le news
         */


        _createClass(NewsPage, [{
          key: "requestNews",
          value: function requestNews() {
            var _this = this;

            this.loadingController.create({
              spinner: 'circular',
              message: 'Caricamento',
              backdropDismiss: true
            }).then(function (loading) {
              loading.present(); // Recupero subito l'area non Observable

              _this.areaSelected = _this.startService.areaSelectedValue;

              _this.startService.requestNews(_this.areaSelected.ID, _this.maxRecord).then(function (data) {
                _this.listNews = data;
                loading.dismiss();
              })["catch"](function (error) {
                console.log(error);
                loading.dismiss();

                _this.showMessage("Errore nel caricamento");
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subAreaSelected) {
              this.subAreaSelected.unsubscribe();
            }
          }
          /** Eseguo un refresh delle news */

        }, {
          key: "doRefresh",
          value: function doRefresh(evento) {
            var _this2 = this;

            this.startService.requestNews(this.areaSelected.ID, this.maxRecord).then(function (data) {
              _this2.listNews = data;
              evento.target.complete();
            })["catch"](function (error) {
              console.log(error);
              evento.target.complete();

              _this2.showMessage("Errore nel caricamento");
            });
          }
          /**
           * Apre in modalità modale la news
           * @param news News da leggere
           */

        }, {
          key: "onClickNews",
          value: function onClickNews(news, event) {
            // Le news Inserted sono finte, non posso aprirle
            //this.navController.navigateForward(['/','news',news.ID]);
            this.modalController.create({
              component: src_app_pages_newsdetail_newsdetail_page__WEBPACK_IMPORTED_MODULE_3__["NewsdetailPage"],
              componentProps: {
                myNews: news
              }
            }).then(function (modal) {
              modal.present();
            });
          }
        }, {
          key: "showMessage",
          value: function showMessage(messaggio) {
            this.toastController.create({
              message: messaggio
            }).then(function (toast) {
              toast.present();
            });
          }
        }]);

        return NewsPage;
      }();

      NewsPage.ɵfac = function NewsPage_Factory(t) {
        return new (t || NewsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_1__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
      };

      NewsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NewsPage,
        selectors: [["app-news"]],
        decls: 11,
        vars: 2,
        consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["slot", "fixed", "s", "", 3, "ionRefresh"], [4, "ngIf"], ["class", "nofind-cnt ion-padding", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "myNews", "clickNews"], [1, "nofind-cnt", "ion-padding"], [1, "ion-padding-horizontal"]],
        template: function NewsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " News ed Eventi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-refresher", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function NewsPage_Template_ion_refresher_ionRefresh_7_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NewsPage_ion_grid_9_Template, 3, 1, "ion-grid", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NewsPage_div_10_Template, 5, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listNews.length != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listNews.length === 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _shared_components_news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_6__["NewsEventiComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\ndiv.nofind-cnt[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBSUk7RUFDSSxlQUFBO0FBRFIiLCJmaWxlIjoibmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuZGl2Lm5vZmluZC1jbnR7XHJcblxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "XkMT":
    /*!***************************************************!*\
      !*** ./src/app/pages/news/news-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: NewsPageRoutingModule */

    /***/
    function XkMT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function () {
        return NewsPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./news.page */
      "Bp3h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_1__["NewsPage"]
      }];

      var NewsPageRoutingModule = function NewsPageRoutingModule() {
        _classCallCheck(this, NewsPageRoutingModule);
      };

      NewsPageRoutingModule.ɵfac = function NewsPageRoutingModule_Factory(t) {
        return new (t || NewsPageRoutingModule)();
      };

      NewsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NewsPageRoutingModule
      });
      NewsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "qUUn":
    /*!*******************************************!*\
      !*** ./src/app/pages/news/news.module.ts ***!
      \*******************************************/

    /*! exports provided: NewsPageModule */

    /***/
    function qUUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
        return NewsPageModule;
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


      var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news-routing.module */
      "XkMT");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./news.page */
      "Bp3h");
      /* harmony import */


      var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../newsdetail/newsdetail.module */
      "k52M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewsPageModule = function NewsPageModule() {
        _classCallCheck(this, NewsPageModule);
      };

      NewsPageModule.ɵfac = function NewsPageModule_Factory(t) {
        return new (t || NewsPageModule)();
      };

      NewsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: NewsPageModule
      });
      NewsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsPageRoutingModule"], _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_6__["NewsdetailPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NewsPageModule, {
          declarations: [_news_page__WEBPACK_IMPORTED_MODULE_4__["NewsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsPageRoutingModule"], _newsdetail_newsdetail_module__WEBPACK_IMPORTED_MODULE_6__["NewsdetailPageModule"], src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-news-news-module-es5.js.map