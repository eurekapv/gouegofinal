(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316"], {
    /***/
    "DpLK":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/history/historycourse/allegatilist/allegatilist.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: AllegatilistPage */

    /***/
    function DpLK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllegatilistPage", function () {
        return AllegatilistPage;
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


      var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/file.service */
      "cpn4");
      /* harmony import */


      var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/start.service */
      "EXUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AllegatilistPage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nessun allegato");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AllegatilistPage_ion_list_11_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllegatilistPage_ion_list_11_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var allegato_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r4.downloadAllegato(allegato_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var allegato_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", allegato_r3.fileTypeIconName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](allegato_r3.DESCRIZIONE);
        }
      }

      function AllegatilistPage_ion_list_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AllegatilistPage_ion_list_11_ion_item_1_Template, 6, 2, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listAllegati);
        }
      }

      var AllegatilistPage = /*#__PURE__*/function () {
        function AllegatilistPage(loadingController, modalController, toastController, startService, fileService) {
          _classCallCheck(this, AllegatilistPage);

          this.loadingController = loadingController;
          this.modalController = modalController;
          this.toastController = toastController;
          this.startService = startService;
          this.fileService = fileService;
          this.listAllegati = [];
        }

        _createClass(AllegatilistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.requestListAllegati();
          }
        }, {
          key: "requestListAllegati",
          value: function requestListAllegati(event) {
            var _this = this;

            this.loadingController.create({
              message: 'Caricamento...',
              spinner: "circular",
              backdropDismiss: true
            }).then(function (elLoading) {
              //il loading è pronto
              if (!event) {
                elLoading.present();
              }

              return _this.startService.requestListAllegatiByIdCorso(_this.myCorso.ID);
            }).then(function (listAllegati) {
              //i dati sono arrivati
              if (event) {
                event.target.complete();
              } else {
                _this.loadingController.dismiss();
              }

              _this.listAllegati = listAllegati;
            })["catch"](function (error) {
              //i dati non sono arrivati
              if (event) {
                event.target.complete();
              } else {
                _this.loadingController.dismiss();
              }

              _this.showMessage('Errore di connessione');

              console.error(error);
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.modalController.dismiss();
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
        }, {
          key: "downloadAllegato",
          value: function downloadAllegato(elemento) {
            var _this2 = this;

            if (elemento && elemento.FILENAMEESTENSIONE && elemento.FILENAMEESTENSIONE.length > 0) {
              //ho il percorso per scaricare il file
              this.loadingController.create({
                message: 'Caricamento',
                spinner: 'circular',
                backdropDismiss: true
              }).then(function (elLoading) {
                elLoading.present();
                return _this2.startService.requestDocumento(elemento.FILENAMEESTENSIONE);
              }).then(function (elBlob) {
                _this2.loadingController.dismiss();

                console.log(elBlob);

                if (elBlob) {
                  _this2.fileService.open(elBlob);
                } else {
                  throw new Error();
                }
              })["catch"](function (error) {
                console.log(error);

                _this2.showMessage('Impossibile scaricare il file');
              });
            }
          }
        }]);

        return AllegatilistPage;
      }();

      AllegatilistPage.ɵfac = function AllegatilistPage_Factory(t) {
        return new (t || AllegatilistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]));
      };

      AllegatilistPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AllegatilistPage,
        selectors: [["app-allegatilist"]],
        inputs: {
          myCorso: "myCorso"
        },
        decls: 12,
        vars: 2,
        consts: [["color", "primary"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close"], ["slot", "fixed", 3, "ionRefresh"], ["class", "nofind-cnt", 4, "ngIf"], [4, "ngIf"], [1, "nofind-cnt"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["slot", "start", "color", "", 1, "", 3, "name"], ["slot", "end", "color", "primary", "name", "cloud-download-outline"]],
        template: function AllegatilistPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Materiale Allegato");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllegatilistPage_Template_ion_button_click_5_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-refresher", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function AllegatilistPage_Template_ion_refresher_ionRefresh_8_listener($event) {
              return ctx.requestListAllegati($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-refresher-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AllegatilistPage_div_10_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AllegatilistPage_ion_list_11_Template, 2, 1, "ion-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listAllegati.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listAllegati.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxlZ2F0aWxpc3QucGFnZS5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "cpn4":
    /*!******************************************!*\
      !*** ./src/app/services/file.service.ts ***!
      \******************************************/

    /*! exports provided: FileService */

    /***/
    function cpn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
      });
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "te5A");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileService = /*#__PURE__*/function () {
        function FileService(file, fileOpener, platform) {
          _classCallCheck(this, FileService);

          this.file = file;
          this.fileOpener = fileOpener;
          this.platform = platform;
        }

        _createClass(FileService, [{
          key: "openDesktop",
          value: function openDesktop(blob) {
            //per scaricare il file creo via javascript un link fittizio agganciando il percorso del blob, e ne scateno l'evento click
            var name = 'File';
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.download = name;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }, {
          key: "openMobile",
          value: function openMobile(blob) {
            var _this3 = this;

            var fileName = 'Documento';
            var filePath = this.file.cacheDirectory;
            console.log('percorso: ' + filePath);
            this.file.writeFile(filePath, fileName, blob, {
              replace: true
            }).then(function (fileEntry) {
              console.log("File created!");

              _this3.fileOpener.open(fileEntry.toURL(), blob.type).then(function () {
                return console.log('File is opened');
              })["catch"](function (err) {
                return console.error('Error openening file: ' + err);
              });
            })["catch"](function (err) {
              console.error("Error creating file: ");
              console.log(err);
              throw err;
            });
          }
          /**
           * scarica e visualizza un blob da mobile o desktop
           */

        }, {
          key: "open",
          value: function open(blob) {
            if (blob) {
              if (this.platform.is("hybrid")) {
                this.openMobile(blob);
              } else {
                this.openDesktop(blob);
              }
            } else {
              console.log('Blob inesistente');
              throw new Error();
            }
          }
        }]);

        return FileService;
      }();

      FileService.ɵfac = function FileService_Factory(t) {
        return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_0__["FileOpener"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FileService,
        factory: FileService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-history-historycourse-historycourse-module~pages-home-home-module~pages-location-cours~979ea316-es5.js.map