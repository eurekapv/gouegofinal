(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
    /***/
    "3Bst":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/account-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function Bst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_1__["AccountPage"]
      }, {
        path: 'documents',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | documents-documents-module */
          [__webpack_require__.e("default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"), __webpack_require__.e("documents-documents-module")]).then(__webpack_require__.bind(null,
          /*! ./documents/documents.module */
          "FbXr")).then(function (m) {
            return m.DocumentsPageModule;
          });
        }
      }, {
        path: 'sportlevels',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sportlevels-sportlevels-module */
          "sportlevels-sportlevels-module").then(__webpack_require__.bind(null,
          /*! ./sportlevels/sportlevels.module */
          "mA1B")).then(function (m) {
            return m.SportlevelsPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "OaGo")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'edit-account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-account-edit-account-module */
          [__webpack_require__.e("default~booking-booking-module~course-listcourses-listcourses-module~edit-account-edit-account-modul~1d6af89d"), __webpack_require__.e("edit-account-edit-account-module")]).then(__webpack_require__.bind(null,
          /*! ./edit-account/edit-account.module */
          "ePbb")).then(function (m) {
            return m.EditAccountPageModule;
          });
        }
      }, {
        path: 'edit-login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./edit-login/edit-login.module */
          "gTC4")).then(function (m) {
            return m.EditLoginPageModule;
          });
        }
      }, {
        path: 'invoices',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invoices-invoices-module */
          "invoices-invoices-module").then(__webpack_require__.bind(null,
          /*! ./invoices/invoices.module */
          "Xv1p")).then(function (m) {
            return m.InvoicesPageModule;
          });
        }
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule.ɵfac = function AccountPageRoutingModule_Factory(t) {
        return new (t || AccountPageRoutingModule)();
      };

      AccountPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AccountPageRoutingModule
      });
      AccountPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "4+IK":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function IK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-routing.module */
      "3Bst");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");
      /* harmony import */


      var _edit_login_edit_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-login/edit-login.module */
      "gTC4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule.ɵfac = function AccountPageModule_Factory(t) {
        return new (t || AccountPageModule)();
      };

      AccountPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AccountPageModule
      });
      AccountPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _edit_login_edit_login_module__WEBPACK_IMPORTED_MODULE_5__["EditLoginPageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountPageModule, {
          declarations: [_account_page__WEBPACK_IMPORTED_MODULE_4__["AccountPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _edit_login_edit_login_module__WEBPACK_IMPORTED_MODULE_5__["EditLoginPageModule"]]
        });
      })();
      /***/

    },

    /***/
    "4YXz":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/account/edit-login/edit-login-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: EditLoginPageRoutingModule */

    /***/
    function YXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLoginPageRoutingModule", function () {
        return EditLoginPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _edit_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-login.page */
      "IL2n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _edit_login_page__WEBPACK_IMPORTED_MODULE_1__["EditLoginPage"]
      }];

      var EditLoginPageRoutingModule = function EditLoginPageRoutingModule() {
        _classCallCheck(this, EditLoginPageRoutingModule);
      };

      EditLoginPageRoutingModule.ɵfac = function EditLoginPageRoutingModule_Factory(t) {
        return new (t || EditLoginPageRoutingModule)();
      };

      EditLoginPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: EditLoginPageRoutingModule
      });
      EditLoginPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditLoginPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "IL2n":
    /*!*************************************************************!*\
      !*** ./src/app/pages/account/edit-login/edit-login.page.ts ***!
      \*************************************************************/

    /*! exports provided: EditLoginPage */

    /***/
    function IL2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLoginPage", function () {
        return EditLoginPage;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_utente_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/utente.model */
      "AN5U");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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

      function EditLoginPage_ion_item_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.invalidMessage());
        }
      }

      var EditLoginPage = /*#__PURE__*/function () {
        function EditLoginPage(modalController, startService, loadingController, toastCtrl) {
          _classCallCheck(this, EditLoginPage);

          this.modalController = modalController;
          this.startService = startService;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.showActual = false;
          this.showNew = false;
          this.showNewRetype = false;
        }

        _createClass(EditLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormGroup();
          }
          /**
           * Chiusura Videata senza Conferma
           */

        }, {
          key: "onCancel",
          value: function onCancel() {
            this.modalController.dismiss({
              action: 'none'
            });
          }
        }, {
          key: "createFormGroup",
          value: function createFormGroup() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              oldPsw: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              newPsw1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              newPsw2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              })
            }, this.pswValidator);
          }
        }, {
          key: "pswValidator",
          value: function pswValidator(c) {
            if (c.get('newPsw1').value == c.get('newPsw2').value) {
              return;
            } else {
              return {
                invalid: true
              };
            }
          }
        }, {
          key: "invalidMessage",
          value: function invalidMessage() {
            var message = '';

            if (this.form.value.newPsw1 && this.form.value.newPsw2) {
              if (this.form.value.newPsw1 !== this.form.value.newPsw2) {
                message = 'Nuova password non coincide';
              }
            }

            return message;
          }
        }, {
          key: "showHideInput",
          value: function showHideInput(idElement, elementDOM) {
            switch (idElement) {
              case 'oldpsw':
                this.showActual = !this.showActual;
                elementDOM.type = this.showActual ? 'text' : 'password';
                break;

              case 'newpsw1':
                this.showNew = !this.showNew;
                elementDOM.type = this.showNew ? 'text' : 'password';
                break;

              case 'newpsw2':
                this.showNewRetype = !this.showNewRetype;
                elementDOM.type = this.showNewRetype ? 'text' : 'password';
                break;

              default:
                break;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var newPsw = '';
            var oldPsw = '';

            if (this.form.valid) {
              newPsw = this.form.value.newPsw1;
              oldPsw = this.form.value.oldPsw;
              this.loadingController.create({
                message: 'Aggiornamento in corso'
              }).then(function (elLoading) {
                //Visualizzo il loading
                elLoading.present(); //Ora faccio la richiesta al server

                _this.startService.requestChangePassword(oldPsw, newPsw).subscribe(function (elResult) {
                  var myMessage = 'Errore aggiornamento';

                  if (elResult.MESSAGE) {
                    myMessage = elResult.MESSAGE;
                  } //Termino il loading


                  elLoading.dismiss(); //Mi preparo un Toast Controller

                  _this.toastCtrl.create({
                    message: myMessage,
                    duration: 2000
                  }).then(function (elToast) {
                    elToast.present();
                  }); //Se è andato bene chiudo la Modal e torno di aggiornare il cookie con la nuova password


                  if (elResult.RESULT) {
                    _this.modalController.dismiss({
                      action: 'update',
                      pwd: newPsw
                    });
                  }

                  ;
                });
              });
            }
          }
        }]);

        return EditLoginPage;
      }();

      EditLoginPage.ɵfac = function EditLoginPage_Factory(t) {
        return new (t || EditLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]));
      };

      EditLoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: EditLoginPage,
        selectors: [["app-edit-login"]],
        inputs: {
          myUser: "myUser",
          myUrlLogo: "myUrlLogo"
        },
        decls: 43,
        vars: 8,
        consts: [["color", "primary"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end"], ["fill", "clear", 3, "disabled", "click"], ["name", "checkmark"], [1, "titleicon"], [3, "src"], [1, "ion-margin-horizontal", 3, "formGroup"], ["name", "lock-open-outline", "slot", "start"], ["type", "password", "inputmode", "password", "formControlName", "oldPsw", "placeholder", "password attuale", "id", "oldpsw"], ["oldpsw", ""], ["slot", "end", "fill", "clear", 3, "click"], ["slot", "icon-only", 3, "name"], ["name", "lock-closed-outline", "slot", "start"], ["type", "password", "inputmode", "password", "formControlName", "newPsw1", "placeholder", "nuova password", "id", "newpsw1"], ["newpsw1", ""], ["type", "password", "inputmode", "password", "formControlName", "newPsw2", "placeholder", "conferma password", "id", "newpsw2"], ["newpsw2", ""], ["lines", "none", 4, "ngIf"], ["color", "tertiary", "expand", "block", 3, "disabled", "click"], ["lines", "none"], ["color", "danger"]],
        template: function EditLoginPage_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_3_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cambio Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_8_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-list-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Password Attuale");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "ion-input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);

              return ctx.showHideInput("oldpsw", _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-list-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Nuova Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ion-input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_31_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);

              return ctx.showHideInput("newpsw1", _r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "ion-input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_37_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);

              return ctx.showHideInput("newpsw2", _r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, EditLoginPage_ion_item_39_Template, 3, 1, "ion-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditLoginPage_Template_ion_button_click_41_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Conferma");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.myUrlLogo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx.showActual ? "eye-off-outline" : "eye-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx.showNew ? "eye-off-outline" : "eye-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx.showNewRetype ? "eye-off-outline" : "eye-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary-tint);\n}\n\n.titleicon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  padding: 0;\n  margin: 5px 0px 0px 0px;\n  display: -webkit-flex;\n  width: 100%;\n  height: 100px;\n  text-align: center;\n}\n\n.titleicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBSUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1IiLCJmaWxlIjoiZWRpdC1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxufVxyXG5cclxuLnRpdGxlaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "S9xc":
    /*!***********************************************!*\
      !*** ./src/app/pages/account/account.page.ts ***!
      \***********************************************/

    /*! exports provided: AccountPage */

    /***/
    function S9xc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
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


      var _edit_login_edit_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-login/edit-login.page */
      "IL2n");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AccountPage_ion_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountPage_ion_button_11_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.onClickAvatar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountPage_ion_avatar_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-avatar", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountPage_ion_avatar_12_Template_ion_avatar_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.onClickAvatar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.imgSrcProfilePic, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        }
      }

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(startSrv, alertCtrl, navCtrl, mdlController) {
          var _this2 = this;

          _classCallCheck(this, AccountPage);

          this.startSrv = startSrv;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.mdlController = mdlController; //Source da applicare come foto profilo

          this.imgSrcProfilePic = '';
          this.pictureExist = false; //Versione applicativo

          this.codeVersion = '';
          this.docUtenteListen = this.startSrv.utente.subscribe(function (element) {
            _this2.docUtente = element;
          }); //Ricavo la configurazione

          this.docConfigListen = this.startSrv.startConfig.subscribe(function (elConfig) {
            _this2.docConfig = elConfig;
          }); //Ascolto le modifiche della foto profilo

          this.onListenUserPicture(); //Richiedo la foto dell'utente

          this.requestPictureUtente();
          this.codeVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.docUtenteListen) {
              this.docUtenteListen.unsubscribe();
            }

            if (this.docConfigListen) {
              this.docConfigListen.unsubscribe();
            }

            if (this.listenUserPicture) {
              this.listenUserPicture.unsubscribe();
            }
          }
          /**
           * Ascolta i cambiamenti della foto profilo
           */

        }, {
          key: "onListenUserPicture",
          value: function onListenUserPicture() {
            var _this3 = this;

            this.listenUserPicture = this.startSrv.userPicture.subscribe(function (dataUrl) {
              if (dataUrl && dataUrl.length != 0) {
                _this3.imgSrcProfilePic = dataUrl;
                _this3.pictureExist = true;
              } else {
                _this3.imgSrcProfilePic = '';
                _this3.pictureExist = false;
              }
            });
          }
          /**
           * Richiede la foto dell'utente
           *
           */

        }, {
          key: "requestPictureUtente",
          value: function requestPictureUtente() {
            //Non mi interessa controllare cosa ricevo perchè ho la subscribe
            this.startSrv.loadPictureUtente();
          }
          /**
           * Effettuato il click sull'avatar
           */

        }, {
          key: "onClickAvatar",
          value: function onClickAvatar() {
            //Cattura e salva l'immagine
            this.startSrv.takePictureUtente();
          } // Chiedo se vuole veramente uscire

        }, {
          key: "requestLogout",
          value: function requestLogout() {
            var _this4 = this;

            this.alertCtrl.create({
              header: 'Vuoi disconnetterti ?',
              subHeader: 'Potrai sempre rieseguire il login',
              buttons: [{
                text: 'Si',
                handler: function handler() {
                  // Che faccio se mi disconnetto
                  //Segnalo che esco
                  _this4.startSrv.userLogoff(); //Chiudo la pagina e torno alla Home


                  _this4.navCtrl.navigateBack(['/']);
                }
              }, {
                text: 'No',
                role: 'cancel'
              }]
            }).then(function (elAlert) {
              elAlert.present();
            });
          }
          /**
           * Apertura Modale di Cambio Password
           */

        }, {
          key: "openChangePassword",
          value: function openChangePassword() {
            var _this5 = this;

            this.mdlController.create({
              component: _edit_login_edit_login_page__WEBPACK_IMPORTED_MODULE_2__["EditLoginPage"],
              componentProps: {
                'myUser': this.docUtente,
                'myUrlLogo': this.docConfig.getUrlLogo()
              }
            }).then(function (formModal) {
              formModal.present();
              /* Alla chiusura aggiorno le credenziali se necessario */

              formModal.onWillDismiss().then(function (objReceived) {
                if (objReceived) {
                  if (objReceived.data) {
                    if (objReceived.data.action == 'update') {
                      if (objReceived.data.pwd) {
                        //Devo aggiornare il cookie con le credenziali
                        var newPsw = objReceived.data.pwd; // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO

                        _this5.startSrv.saveStorageUtente(_this5.docUtente.WEBLOGIN, newPsw);
                      }
                    }
                  }
                }
              });
            });
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ɵfac = function AccountPage_Factory(t) {
        return new (t || AccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      AccountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AccountPage,
        selectors: [["app-account"]],
        decls: 68,
        vars: 5,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/"], [1, "top"], [1, "picture"], ["size", "large", "color", "danger", "class", "only-camera", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "name"], ["color", "primary", 1, "ion-text-wrap", "ion-text-center"], [1, "ion-margin-vertical"], ["button", "true", "routerLink", "edit-account", "routerDirection", "forward"], ["slot", "start", "name", "person-circle", "color", "primary"], ["button", "true", "routerLink", "sportlevels", "routerDirection", "forward"], ["slot", "start", "name", "stats-chart", "color", "primary"], ["button", "true", "routerLink", "documents", "routerDirection", "forward"], ["slot", "start", "name", "copy", "color", "primary"], ["button", "true", "routerLink", "invoices", "routerDirection", "forward"], ["slot", "start", "name", "logo-euro", "color", "primary"], ["button", "true", 3, "click"], ["slot", "start", "name", "key", "color", "primary"], ["slot", "start", "name", "log-out", "color", "primary"], [1, "ion-no-padding"], ["lines", "none"], ["slot", "start", "color", "medium"], ["size", "large", "color", "danger", 1, "only-camera", 3, "click"], ["name", "camera"], [3, "click"], [3, "src"]],
        template: function AccountPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Profilo");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-row", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AccountPage_ion_button_11_Template, 2, 0, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AccountPage_ion_avatar_12_Template, 2, 1, "ion-avatar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Qualcosa su di te");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Data e luogo di nascita, residenza, ecc..");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Livelli Attivit\xE0");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Visualizza i tuoi livelli");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Documenti");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Visualizza e scarica i tuoi documenti");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Ricevute Acquisti");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Scarica le ricevute dei tuoi acquisti");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountPage_Template_ion_item_click_49_listener() {
              return ctx.openChangePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "ion-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Security Access");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Cambia Password di accesso");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountPage_Template_ion_item_click_56_listener() {
              return ctx.requestLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "ion-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Esci");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Esegui il logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "ion-list", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "ion-note", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.pictureExist);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pictureExist);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.docUtente == null ? null : ctx.docUtente.NOMINATIVO);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.docUtente.EMAIL);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Version: ", ctx.codeVersion, " by AlchimistiLab");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"]],
        styles: [".top[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-warning);\n  height: 200px;\n  min-height: 200px;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n.top[_ngcontent-%COMP%]   ion-row.picture[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  height: 80px;\n  width: 80px;\n}\n.top[_ngcontent-%COMP%]   ion-row.picture[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.top[_ngcontent-%COMP%]   ion-row.picture[_ngcontent-%COMP%]    > ion-col[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n.top[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBR0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUZKO0FBT1c7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTGY7QUFRVztFQUNLLGFBQUE7RUFDQSx1QkFBQTtBQU5oQjtBQVFnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTnBCO0FBYVE7RUFFUSxpQkFBQTtBQVpoQiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZFQ0UwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgJi5waWN0dXJlIHtcclxuXHJcbiAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgPmlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBpb24tbGFiZWxcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "gTC4":
    /*!***************************************************************!*\
      !*** ./src/app/pages/account/edit-login/edit-login.module.ts ***!
      \***************************************************************/

    /*! exports provided: EditLoginPageModule */

    /***/
    function gTC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLoginPageModule", function () {
        return EditLoginPageModule;
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


      var _edit_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-login-routing.module */
      "4YXz");
      /* harmony import */


      var _edit_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-login.page */
      "IL2n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditLoginPageModule = function EditLoginPageModule() {
        _classCallCheck(this, EditLoginPageModule);
      };

      EditLoginPageModule.ɵfac = function EditLoginPageModule_Factory(t) {
        return new (t || EditLoginPageModule)();
      };

      EditLoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: EditLoginPageModule
      });
      EditLoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _edit_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditLoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EditLoginPageModule, {
          declarations: [_edit_login_page__WEBPACK_IMPORTED_MODULE_4__["EditLoginPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _edit_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditLoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_edit_login_page__WEBPACK_IMPORTED_MODULE_4__["EditLoginPage"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-account-account-module-es5.js.map