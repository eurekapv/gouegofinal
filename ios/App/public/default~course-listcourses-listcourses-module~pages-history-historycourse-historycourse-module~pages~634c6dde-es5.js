(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde"], {
    /***/
    "YrHa":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/location/course/detailcourse/calendar/calendar.page.ts ***!
      \******************************************************************************/

    /*! exports provided: CalendarPage */

    /***/
    function YrHa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarPage", function () {
        return CalendarPage;
      });
      /* harmony import */


      var src_app_models_corso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/corso.model */
      "F/re");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/pianificazionecorso.model */
      "b5Gy");
      /* harmony import */


      var src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/library/services/docstructure.service */
      "FYk8");
      /* harmony import */


      var src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/library/models/requestParams.model */
      "R2Z1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CalendarPage_ion_list_12_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-card-content", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-badge", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var giornata_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 12, giornata_r3.DATA, "EEEE")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 15, giornata_r3.DATA, "d"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 20, giornata_r3.DATA, "MMM")), " '", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 23, giornata_r3.DATA, "yy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", giornata_r3["_DENOMINAZIONE_Campo"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r2.colorItem(giornata_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 26, giornata_r3.DATAORAINIZIO, "HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 29, giornata_r3.DATAORAFINE, "HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r2.colorItem(giornata_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", giornata_r3.ORELEZIONE, " h");
        }
      }

      function CalendarPage_ion_list_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CalendarPage_ion_list_12_ion_item_1_Template, 31, 32, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.calendarCorso);
        }
      }

      function CalendarPage_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Programmazione");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "non disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var CalendarPage = /*#__PURE__*/function () {
        function CalendarPage(mdlController, docStructureService, loadingController, toastController) {
          _classCallCheck(this, CalendarPage);

          this.mdlController = mdlController;
          this.docStructureService = docStructureService;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.calendarCorso = [];
          this.ricevuti = false; //Indica se gli orari sono stati ricevuti
        }

        _createClass(CalendarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Sottoscrivo alla ricezione
            // this.listenCalendarCorso = this.startService.calendarioCorso.subscribe(listCalendar => {
            //   this.calendarCorso = listCalendar;
            //   this.ricevuti = true;
            //})
            //Richiedo il corso
            //this.startService.requestCalendarioCorso(this.myCorso.ID);
            //creo il filtro per la richiesta
            var filter = new src_app_models_pianificazionecorso_model__WEBPACK_IMPORTED_MODULE_2__["PianificazioneCorso"](true);
            filter.IDCORSO = this.myCorso.ID; //creo i parametri per la richiesta

            var params = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_4__["RequestParams"]();
            params.decode = new src_app_library_models_requestParams_model__WEBPACK_IMPORTED_MODULE_4__["RequestDecode"]();
            params.decode.active = true; //creo il loading 

            this.loadingController.create({
              message: 'Caricamento...',
              spinner: "circular",
              backdropDismiss: true
            }).then(function (elLoading) {
              elLoading.present(); //richiedo il calendario

              _this.docStructureService.requestNew(filter, params).then(function (listCalendar) {
                //dismetto il loading e salvo il calendario
                elLoading.dismiss();
                _this.calendarCorso = listCalendar;
              })["catch"](function (error) {
                //dismetto il loading e mostro l'errore
                elLoading.dismiss();

                _this.showMessage('Errore di connessione');

                console.log(error);
              });
            });
          } //Chiudo il calendario

        }, {
          key: "closeCalendar",
          value: function closeCalendar() {
            this.mdlController.dismiss();
          }
        }, {
          key: "colorItem",
          value: function colorItem(itemCalendarCorso) {
            var color = 'success';

            if (itemCalendarCorso.eventoPassato()) {
              color = 'danger';
            }

            return color;
          }
        }, {
          key: "showMessage",
          value: function showMessage(messaggio) {
            this.toastController.create({
              message: messaggio,
              duration: 3000
            }).then(function (elModal) {
              elModal.present();
            });
          }
        }]);

        return CalendarPage;
      }();

      CalendarPage.ɵfac = function CalendarPage_Factory(t) {
        return new (t || CalendarPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_library_services_docstructure_service__WEBPACK_IMPORTED_MODULE_3__["DocstructureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]));
      };

      CalendarPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: CalendarPage,
        selectors: [["app-calendar"]],
        inputs: {
          myCorso: "myCorso"
        },
        decls: 14,
        vars: 5,
        consts: [[1, "ion-no-border"], ["color", "primary"], ["slot", "start"], ["name", "calendar"], ["slot", "end"], [3, "click"], ["name", "close"], ["class", "ion-no-padding", "id", "cal-find", 4, "ngIf"], ["class", "nofind-cnt", 4, "ngIf"], ["id", "cal-find", 1, "ion-no-padding"], ["class", "ion-no-padding ion-no-margin", "color", "light", 4, "ngFor", "ngForOf"], ["color", "light", 1, "ion-no-padding", "ion-no-margin"], ["size", "4", 1, "colGiorno"], [1, "contentGiorno", "ion-no-padding"], ["size", "8", 1, "colOrario"], ["mode", "ios", 1, "ion-no-margin", "ion-no-padding"], [1, "ion-no-margin", "ion-no-padding"], [1, "ion-no-margin"], ["lines", "none", 3, "color"], ["name", "play", "slot", "start"], ["lines", "none"], ["name", "pause", "slot", "start"], ["slot", "end", 3, "color"], [1, "nofind-cnt"]],
        template: function CalendarPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarPage_Template_ion_button_click_9_listener() {
              return ctx.closeCalendar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CalendarPage_ion_list_12_Template, 2, 1, "ion-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CalendarPage_div_13_Template, 5, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx.myCorso.DENOMINAZIONE));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calendarCorso.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ricevuti && ctx.calendarCorso.length === 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
        styles: ["h5[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.colGiorno[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.colOrario[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  \n  background-color: var(--ion-color-light);\n}\n\n.contentGiorno[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--ion-color-light);\n  align-items: center;\n}\n\n.contentGiorno[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  margin: 0px;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.contentGiorno[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  margin: 0px;\n}\n\n.contentGiorno[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.contentOrari[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--ion-color-light);\n  align-items: flex-start;\n}\n\n.contentOrari[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .contentOrari[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .contentOrari[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  padding: 0px 0px 0px 0px;\n  margin: 0px 0px 0px 0px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary-contrast);\n}\n\ncol-content[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYWxlbmRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksd0NBQUE7QUFFSjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0Esd0NBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBSTtFQUNJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUNJO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBR0k7RUFDSSxXQUFBO0FBRFI7O0FBS0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0k7RUFDSSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFIUjs7QUFTQTtFQUNJLG1EQUFBO0FBTko7O0FBVUE7RUFDSSx3Q0FBQTtBQVBKOztBQTJCQTtFQUNJLHFDQUFBO0FBeEJKIiwiZmlsZSI6ImNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLmNvbEdpb3JubyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uY29sT3JhcmlvLCBpb24taXRlbSB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmMjU0NTQ2MTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLmNvbnRlbnRHaW9ybm8ge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGg0e1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGg2IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnRPcmFyaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIFxyXG4gICAgaDIsaDUsaDMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpOyAgICBcclxufVxyXG5cclxuXHJcbmNvbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi8vICNjYWwtbm9maW5kLWNudCAge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuLy8gICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuLy8gICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbi8vIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpXHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~course-listcourses-listcourses-module~pages-history-historycourse-historycourse-module~pages~634c6dde-es5.js.map