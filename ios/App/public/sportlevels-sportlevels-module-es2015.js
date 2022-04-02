(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sportlevels-sportlevels-module"],{

/***/ "H2v/":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/sportlevels/sportlevels-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SportlevelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportlevelsPageRoutingModule", function() { return SportlevelsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sportlevels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sportlevels.page */ "boUX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _sportlevels_page__WEBPACK_IMPORTED_MODULE_1__["SportlevelsPage"]
    }
];
class SportlevelsPageRoutingModule {
}
SportlevelsPageRoutingModule.ɵfac = function SportlevelsPageRoutingModule_Factory(t) { return new (t || SportlevelsPageRoutingModule)(); };
SportlevelsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SportlevelsPageRoutingModule });
SportlevelsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SportlevelsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "boUX":
/*!***************************************************************!*\
  !*** ./src/app/pages/account/sportlevels/sportlevels.page.ts ***!
  \***************************************************************/
/*! exports provided: SportlevelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportlevelsPage", function() { return SportlevelsPage; });
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SportlevelsPage_div_9_ion_col_10_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.logoGruppoBase64, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function SportlevelsPage_div_9_ion_col_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-card-header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SportlevelsPage_div_9_ion_col_10_img_3_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const livello_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", livello_r3.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("button", !ctx_r2.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showLogoGruppo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](livello_r3.DESCRSPORT);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](livello_r3.DESCRLIVELLO);
} }
function SportlevelsPage_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " I tuoi livelli verranno utilizzati per determinare i corsi pi\u00F9 adatti a te. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SportlevelsPage_div_9_ion_col_10_Template, 15, 5, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.utente.UTENTILIVELLI);
} }
function SportlevelsPage_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Per il momento non hai ancora nessun livello assegnato, potrai ottenere un livello dopo aver frequentato una prova presso le nostre strutture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SportlevelsPage {
    constructor(startService, socialSharing) {
        this.startService = startService;
        this.socialSharing = socialSharing;
        this.showLogoGruppo = false;
        //Attendo la ricezione dei dati Utente
        this.utenteListener = this.startService.utente.subscribe(data => {
            this.utente = data;
        });
        //Recupero il logo del gruppo
        this.startService.requestBase64Image(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoPrivateImage"].logo)
            .then(b64Image => {
            //Arriva in Base64
            this.logoGruppoBase64 = b64Image;
            if (this.logoGruppoBase64.length != 0) {
                this.showLogoGruppo = true;
            }
            else {
                this.showLogoGruppo = false;
            }
        })
            .catch(error => {
            this.showLogoGruppo = false;
            console.log('Logo Gruppo failed: ' + error);
        });
    }
    ngOnInit() {
        this.isDesktop = this.startService.isDesktop;
    }
    /**
     * FUNZIONE DEPRECATA NON SUPPORTATA E NON COMPLETA
     * HTML TO IMAGE E' STATO ELIMINATO
     * @param sportLevelPrimaryKey Chiave Primaria del record di SportLevel
     */
    onShare(sportLevelPrimaryKey) {
        let method = 'SVG';
        let options = { width: 350, height: 600 };
        let messaggio = '';
        if (!this.startService.isDesktop || this.startService.isDesktop) {
            //recupero il livello
            let docLivello;
            docLivello = this.utente.UTENTILIVELLI.find(elem => {
                return elem.ID == sportLevelPrimaryKey;
            });
            if (docLivello) {
                //compongo il messaggio
                messaggio = this.utente.NOME + ' ha ottenuto il livello ' + docLivello.DESCRLIVELLO + ' a ' + docLivello.DESCRSPORT + '! Complimenti!!';
                //recupero l'immagine della card
                let DOMCard = document.getElementById(sportLevelPrimaryKey);
            }
        }
    }
    doRefresh(event) {
        event.target.complete();
    }
}
SportlevelsPage.ɵfac = function SportlevelsPage_Factory(t) { return new (t || SportlevelsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_0__["StartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_1__["SocialSharing"])); };
SportlevelsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SportlevelsPage, selectors: [["app-sportlevels"]], decls: 11, vars: 2, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/account"], ["slot", "fixed", 3, "ionRefresh"], ["class", "ion-no-padding", 4, "ngIf"], ["class", "nofind-cnt", 4, "ngIf"], [1, "ion-no-padding"], [2, "height", "1vh"], [1, "info"], ["color", "light", "lines", "none"], [1, "ion-text-wrap"], ["name", "information-circle-outline", "color", "primary"], ["sizeXs", "10", "offsetXs", "1", "sizeSm", "6", "offsetSm", "0", "sizeMd", "4", "sizeLg", "3", 3, "id", 4, "ngFor", "ngForOf"], ["sizeXs", "10", "offsetXs", "1", "sizeSm", "6", "offsetSm", "0", "sizeMd", "4", "sizeLg", "3", 3, "id"], [1, "card-livello", 3, "button"], [1, "ion-no-padding", "ion-text-center"], ["id", "img-logo", 3, "src", 4, "ngIf"], [1, "ion-text-center"], ["size", "12", 1, "ion-text-center"], ["src", "/assets/trophy2.png"], ["size", "12"], [1, "level-label"], ["id", "img-logo", 3, "src"], [1, "nofind-cnt"]], template: function SportlevelsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "I tuoi livelli");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-refresher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function SportlevelsPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SportlevelsPage_div_9_Template, 11, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SportlevelsPage_div_10_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.utente.UTENTILIVELLI && ctx.utente.UTENTILIVELLI.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.utente.UTENTILIVELLI || ctx.utente.UTENTILIVELLI.length == 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"]], styles: [".card-livello[_ngcontent-%COMP%] {\n  background-color: #FFF9E1;\n}\n.card-livello[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n}\n.card-livello[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: auto;\n  color: black;\n  font-weight: 600;\n}\n.card-livello[_ngcontent-%COMP%]   div.level-label[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 7px;\n  border-color: var(--ion-color-tertiary);\n  background-color: var(--ion-color-tertiary);\n  border-radius: 10px;\n  color: #494949;\n}\n.card-livello[_ngcontent-%COMP%]   div.level-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 25px;\n}\ndiv.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n}\ndiv.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\ndiv.nofind-cnt[_ngcontent-%COMP%] {\n  padding: 10px;\n}\ndiv.nofind-cnt[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BvcnRsZXZlbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7QUFBSjtBQUNJO0VBRUksV0FBQTtFQUNBLGFBQUE7QUFBUjtBQUVJO0VBR0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZSO0FBSUk7RUFFSSxtQkFBQTtFQUNBLGlCQUFBO0VBR0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUxSO0FBTVE7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMWjtBQWVJO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtBQWJSO0FBY1E7RUFDSSxlQUFBO0FBWlo7QUFpQkE7RUFDSSxhQUFBO0FBZEo7QUFlSTtFQUNJLGtCQUFBO0FBYlIiLCJmaWxlIjoic3BvcnRsZXZlbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbGl2ZWxsb1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUUxO1xyXG4gICAgaW1nXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIGgyXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgZGl2LmxldmVsLWxhYmVsXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcclxuICAgICAgICAvLyBib3JkZXItY29sb3I6IHJnYigyNTUsIDIzMCwgODYpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjMwLCA4Nik7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgICAgICAgaDFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjVweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodClcclxuLy8gfVxyXG5cclxuZGl2LmluZm97XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5ub2ZpbmQtY250e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "mA1B":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/sportlevels/sportlevels.module.ts ***!
  \*****************************************************************/
/*! exports provided: SportlevelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportlevelsPageModule", function() { return SportlevelsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sportlevels_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sportlevels-routing.module */ "H2v/");
/* harmony import */ var _sportlevels_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sportlevels.page */ "boUX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SportlevelsPageModule {
}
SportlevelsPageModule.ɵfac = function SportlevelsPageModule_Factory(t) { return new (t || SportlevelsPageModule)(); };
SportlevelsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SportlevelsPageModule });
SportlevelsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _sportlevels_routing_module__WEBPACK_IMPORTED_MODULE_3__["SportlevelsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SportlevelsPageModule, { declarations: [_sportlevels_page__WEBPACK_IMPORTED_MODULE_4__["SportlevelsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _sportlevels_routing_module__WEBPACK_IMPORTED_MODULE_3__["SportlevelsPageRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sportlevels-sportlevels-module-es2015.js.map