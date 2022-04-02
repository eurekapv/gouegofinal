(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12"],{

/***/ "/tcz":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sport-scroll/sport-scroll.component.ts ***!
  \**************************************************************************/
/*! exports provided: SportScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportScrollComponent", function() { return SportScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_sport_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sport.model */ "A++g");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["sliderSport"];
function SportScrollComponent_ion_slides_1_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportScrollComponent_ion_slides_1_ion_slide_2_Template_ion_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const sport_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onChangeSport(sport_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sport_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r2.getColor(sport_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", sport_r3.htmlIconHex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sport_r3.DENOMINAZIONE);
} }
function SportScrollComponent_ion_slides_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slides", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportScrollComponent_ion_slides_1_ion_slide_2_Template, 11, 3, "ion-slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.getSliderOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sportList);
} }
class SportScrollComponent {
    constructor(startService) {
        this.startService = startService;
        this.sportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sliderOpts1 = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts2 = {
            slidesPerView: 2,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts3 = {
            slidesPerView: 2.5,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts4 = {
            slidesPerView: 3.5,
            spaceBetween: 0,
            initialSlide: 0
        };
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    ionViewDidEnter() {
    }
    /**
     * Si posiziona sulla Slide richiesta
     * @param indexSlideZeroBased Indice della Slide
     */
    goToSlide(indexSlideZeroBased) {
        if (this.sliderSport) {
            this.sliderSport.slideTo(indexSlideZeroBased);
        }
    }
    /**
     * Scelta di un nuovo sport
     * @param newSport Nuovo Sport da applicare
     */
    onChangeSport(newSport) {
        let indexSport = this.getIndexSport(newSport);
        //Posizionamento della Slide sul bottone premuto
        if (indexSport != -1) {
            this.goToSlide(indexSport);
        }
        //Emissione evento di cambio campo
        this.sportChanged.emit(newSport);
    }
    /**
   * A seconda del numero di sport presenti, ritorna le opzioni da impostare
   * @returns
   */
    getSliderOptions() {
        let slidOpt;
        if (this.sportList.length == 1) {
            slidOpt = this.sliderOpts1;
        }
        else if (this.sportList.length == 2) {
            slidOpt = this.sliderOpts2;
        }
        else if (this.sportList.length == 3) {
            slidOpt = this.sliderOpts3;
        }
        else {
            slidOpt = this.sliderOpts3;
        }
        return slidOpt;
    }
    /**
     * Ritorna il colore da applicare a seconda dello sport selezionato
     * @param mySport Sport da analizzare
     * @returns Colore da applicare al bottone/card
     */
    getColor(mySport) {
        let myColor = 'light';
        if (this.selectedSport && mySport) {
            if (this.selectedSport.ID == mySport.ID) {
                myColor = 'secondary';
            }
        }
        return myColor;
    }
    /**
   * Ricerca un campo nell'Array e ne torna l'indice
   * @param mySport Campo da cercare
   */
    getIndexSport(mySport) {
        let myPos = -1;
        if (mySport) {
            myPos = this.sportList.findIndex(el => {
                return el.ID == mySport.ID;
            });
        }
        return myPos;
    }
}
SportScrollComponent.ɵfac = function SportScrollComponent_Factory(t) { return new (t || SportScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"])); };
SportScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportScrollComponent, selectors: [["app-sport-scroll"]], viewQuery: function SportScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderSport = _t.first);
    } }, inputs: { selectedSport: "selectedSport", sportList: "sportList" }, outputs: { sportChanged: "sportChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [["class", "ion-text-center", 3, "options", 4, "ngIf"], [1, "ion-text-center", 3, "options"], ["sliderSport", ""], [4, "ngFor", "ngForOf"], ["mode", "md", "button", "", 1, "card-sport", 3, "color", "click"], [1, "ion-align-items-center"], ["size", "4"], [1, "icon-sport"], [3, "innerHTML"], [1, "text-sport"]], template: function SportScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportScrollComponent_ion_slides_1_Template, 3, 2, "ion-slides", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sportList.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: [".icon-sport[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"sports\";\n}\n\n.text-sport[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.card-sport[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BvcnQtc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBS0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUVJLFVBQUE7QUFKSiIsImZpbGUiOiJzcG9ydC1zY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pY29uLXNwb3J0e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwic3BvcnRzXCI7XHJcblxyXG59XHJcblxyXG4udGV4dC1zcG9ydFxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FyZC1zcG9ydFxyXG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "05dH":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/hide-header.directive.ts ***!
  \************************************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





/**
 * Moves away the header when scrolling down.
 */
class HideHeaderDirective {
    constructor(renderer, domCtrl, el, platform) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.el = el;
        this.platform = platform;
        this.lastY = 0;
        this.heightForScroll = -1;
        // Doing nothing.
    }
    ngOnInit() {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 500ms');
        });
    }
    getHeightForScrollContent(myEl) {
        if (this.heightForScroll == -1 || isNaN(this.heightForScroll)) {
            if (myEl && myEl.nativeElement) {
                let domDivCont = myEl.nativeElement.firstElementChild;
                if (domDivCont) {
                    this.heightForScroll = domDivCont.clientHeight - this.platform.height() - this.scrollThreshold;
                }
            }
        }
    }
    onContentScroll($event) {
        //Faccio calcolare l'altezza utile al calcolo
        //L'altezza è l'intera altezza del contenuto dello Scroll - Altezza del Canvas della pagina
        this.getHeightForScrollContent(this.el);
        if (this.heightForScroll != -1) {
            if ($event.detail.scrollTop > (this.scrollThreshold || 0) &&
                $event.detail.scrollTop > this.lastY) {
                this.domCtrl.write(() => {
                    this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
                });
            }
            else if ($event.detail.scrollTop < this.heightForScroll) {
                this.domCtrl.write(() => {
                    this.renderer.setStyle(this.header, 'margin-top', '0');
                });
            }
            this.lastY = $event.detail.scrollTop;
        }
        else {
            console.warn('Directive Scroll: heightForScroll not valid');
        }
    }
}
HideHeaderDirective.ɵfac = function HideHeaderDirective_Factory(t) { return new (t || HideHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["DomController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
HideHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HideHeaderDirective, selectors: [["", "appHideHeader", ""]], hostBindings: function HideHeaderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionScroll", function HideHeaderDirective_ionScroll_HostBindingHandler($event) { return ctx.onContentScroll($event); });
    } }, inputs: { header: "header", scrollThreshold: "scrollThreshold" } });


/***/ }),

/***/ "07+x":
/*!********************************************!*\
  !*** ./src/app/models/buttoncard.model.ts ***!
  \********************************************/
/*! exports provided: ButtonHomeParams, ButtonCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonHomeParams", function() { return ButtonHomeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCard", function() { return ButtonCard; });
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");
/* harmony import */ var _settimana_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settimana.model */ "w48H");
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ButtonHomeParams {
}
class ButtonCard {
    constructor() {
        this.settore = 0;
        this.id = '';
        this.idRefer = '';
        this.disabled = false;
    }
    /**
     * Ritorna i Botton Action per la location
     * @param canBooking E' possibile prenotare ?
     */
    static getButtonActionLocation(canBooking, tipoSocieta) {
        let arButton = [];
        let newBtn;
        if (canBooking) {
            newBtn = new ButtonCard();
            if (tipoSocieta == undefined) {
                newBtn.title = 'Prenota';
                newBtn.subtitle = 'organizza un evento in questa location';
            }
            else if (tipoSocieta == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoSocieta"].formazione) {
                newBtn.title = 'Prenota un\'aula';
                newBtn.subtitle = 'organizza un corso per il tuo team';
            }
            else if (tipoSocieta == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoSocieta"].sportiva) {
                newBtn.title = 'Prenota un campo';
                newBtn.subtitle = 'organizza un incontro con i tuoi amici';
            }
            newBtn.nameicon = 'calendar';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;
            newBtn.functionCod = 'book';
            arButton.push(newBtn);
        }
        newBtn = new ButtonCard();
        newBtn.title = 'Impara con noi';
        newBtn.subtitle = 'guarda i corsi che abbiamo preparato per te';
        newBtn.nameicon = 'library-outline';
        newBtn.sloticon = "start";
        newBtn.color = "primary";
        newBtn.iconLink = true;
        newBtn.functionCod = 'course';
        arButton.push(newBtn);
        return arButton;
    }
    /**
     * Ritorna i Buttoni da mostrare nella Home
     * nella parte dedicata agli Eventi in programma,
     * quando non sono presenti eventi
     * @param params Informazioni per la creazione dei Bottoni
     */
    static getButtonHomeImpegni(params) {
        let arButton = [];
        let newBtn;
        let numImpegni = 0;
        let registrationInApp = false;
        let userLogged = false;
        let listImpegni = [];
        //Recupero dei parametri
        if (params) {
            userLogged = params.utenteLoggato;
            listImpegni = params.listImpegni;
            registrationInApp = params.registrazioneInApp;
        }
        /** UTENTE LOGGATO */
        if (userLogged) {
            //Determino il numero degli impegni
            if (listImpegni && listImpegni.length !== 0) {
                numImpegni = listImpegni.length;
            }
            //Non ci sono impegni 
            if (numImpegni == 0) {
                newBtn = new ButtonCard();
                newBtn.title = 'Nessun appuntamento previsto';
                newBtn.subtitle = 'Organizza un incontro con i tuoi amici';
                newBtn.nameicon = 'calendar-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = false;
                newBtn.functionCod = 'noevents';
                arButton.push(newBtn);
            }
            else {
                //Ci sono impegni e creo le varie card
                listImpegni.forEach(element => {
                    newBtn = new ButtonCard();
                    if (element.SETTORE == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"].settoreCorso) {
                        newBtn.title = element.DENOMINAZIONE;
                        newBtn.subtitle = _settimana_model__WEBPACK_IMPORTED_MODULE_1__["Settimana"].getLabel(element.DATAORAINIZIO.getDay()) + ' ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatDate(element.DATAORAINIZIO, 'DD/MM') + ' alle ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatTime(element.DATAORAINIZIO);
                        newBtn.nameicon = 'school-outline';
                        newBtn.sloticon = "start";
                        newBtn.color = "primary";
                        newBtn.iconLink = true;
                        newBtn.functionCod = "show";
                        newBtn.id = element.IDREFER;
                        newBtn.settore = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"].settoreCorso;
                        arButton.push(newBtn);
                    }
                    else if (element.SETTORE == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"].settorePrenotazione) {
                        newBtn.title = element['_DENOMINAZIONE_Location'];
                        newBtn.subtitle = _settimana_model__WEBPACK_IMPORTED_MODULE_1__["Settimana"].getLabel(element.DATAORAINIZIO.getDay()) + ' ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatDate(element.DATAORAINIZIO, 'DD/MM') + ' alle ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatTime(element.DATAORAINIZIO);
                        newBtn.nameicon = 'calendar-outline';
                        newBtn.sloticon = "start";
                        newBtn.color = "primary";
                        newBtn.iconLink = true;
                        newBtn.functionCod = "show";
                        newBtn.id = element.IDREFER + '-' + element.ID;
                        newBtn.settore = _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"].settorePrenotazione;
                        arButton.push(newBtn);
                    }
                });
            }
        }
        else {
            //Non loggato
            newBtn = new ButtonCard();
            if (registrationInApp) {
                newBtn.title = 'Registrati o accedi';
                newBtn.subtitle = 'crea il tuo account o accedi';
                newBtn.nameicon = 'person-add-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = true;
                newBtn.functionCod = 'register';
                arButton.push(newBtn);
            }
            else {
                newBtn.title = 'Inizia ed accedi';
                newBtn.subtitle = 'accedi al tuo account';
                newBtn.nameicon = 'person-add-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = true;
                newBtn.functionCod = 'login';
                arButton.push(newBtn);
            }
        }
        return arButton;
    }
    /**
     * Ritorna i Buttoni da mostrare nella Home
     * nella parte dedicata agli Eventi in programma,
     * quando non sono presenti eventi
     * @param params Informazioni per la creazione dei Bottoni
     */
    static getButtonAgendaFromOccupazioni(collOccupazioni) {
        let arButton = [];
        let newBtn;
        if (collOccupazioni) {
            // Occupazioni presenti
            if (collOccupazioni.length != 0) {
                collOccupazioni.forEach(element => {
                    newBtn = new ButtonCard();
                    newBtn.title = element['_DENOMINAZIONE_Location'];
                    newBtn.subtitle = _settimana_model__WEBPACK_IMPORTED_MODULE_1__["Settimana"].getLabel(element.DATAORAINIZIO.getDay()) + ' ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatDate(element.DATAORAINIZIO, 'DD/MM') + ' alle ' + _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_2__["MyDateTime"].formatTime(element.DATAORAINIZIO);
                    newBtn.nameicon = 'calendar-outline';
                    newBtn.sloticon = "start";
                    newBtn.color = "primary";
                    newBtn.iconLink = true;
                    newBtn.functionCod = "show";
                    newBtn.id = element.ID;
                    newBtn.idRefer = element.IDREF;
                    newBtn.settore = element.TIPO;
                    if (newBtn.settore == _valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"].settoreCorso) {
                        newBtn.nameicon = 'calendar-outline';
                    }
                    else {
                        newBtn.nameicon = 'school-outline';
                    }
                    arButton.push(newBtn);
                });
            }
        }
        if (arButton.length == 0) {
            newBtn = new ButtonCard();
            newBtn.title = 'Nessuna programmazione per la giornata';
            newBtn.subtitle = 'nessun corso o prenotazione';
            newBtn.nameicon = 'calendar-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = false;
            newBtn.functionCod = 'noevents';
            arButton.push(newBtn);
        }
        return arButton;
    }
    static getButtonAgendaFromPianificazioneCorso(pianificazioneElem) {
        let buttonElem = new ButtonCard();
        let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('it');
        let strSubtitle = datePipe.transform(pianificazioneElem.DATAORAINIZIO, 'HH:mm') + ' - ' + datePipe.transform(pianificazioneElem.DATAORAFINE, 'HH:mm');
        buttonElem.title = pianificazioneElem['_DENOMINAZIONE_Corso'];
        buttonElem.subtitle = strSubtitle;
        buttonElem.nameicon = 'school-outline';
        buttonElem.sloticon = 'start';
        buttonElem.iconLink = true;
        buttonElem.color = 'primary';
        return buttonElem;
    }
}


/***/ }),

/***/ "0Xnq":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/aperture/aperture.component.ts ***!
  \******************************************************************/
/*! exports provided: ApertureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApertureComponent", function() { return ApertureComponent; });
/* harmony import */ var _models_aperturalocation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/aperturalocation.model */ "w5Je");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ApertureComponent_ion_row_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.colorChip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, ctx_r0.myApertura.DALLE1, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 6, ctx_r0.myApertura.ALLE1, "HH:mm"), "");
} }
function ApertureComponent_ion_row_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.colorChip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, ctx_r1.myApertura.DALLE2, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 6, ctx_r1.myApertura.ALLE2, "HH:mm"), "");
} }
function ApertureComponent_ion_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " SEMPRE APERTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.colorChip);
} }
function ApertureComponent_ion_row_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " CHIUSO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ApertureComponent {
    constructor() {
        this.myApertura = new _models_aperturalocation_model__WEBPACK_IMPORTED_MODULE_0__["AperturaLocation"]();
        this.colorChip = 'primary';
    }
    ngOnInit() { }
    getIcon() {
        let icon = 'close';
        if (this.myApertura.isOpen()) {
            icon = 'flag';
        }
        return icon;
    }
}
ApertureComponent.ɵfac = function ApertureComponent_Factory(t) { return new (t || ApertureComponent)(); };
ApertureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApertureComponent, selectors: [["app-aperture"]], inputs: { myApertura: "myApertura" }, decls: 9, vars: 7, consts: [[1, "ion-padding-start", "ion-align-items-center", "row-border"], ["size", "6"], ["size", "6", 1, "ion-no-padding"], ["class", "ion-no-padding", 4, "ngIf"], [1, "ion-no-padding"], [1, "ion-text-center", "ion-no-padding"], [3, "color"], ["name", "time"], ["color", "danger"]], template: function ApertureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApertureComponent_ion_row_5_Template, 8, 9, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ApertureComponent_ion_row_6_Template, 8, 9, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ApertureComponent_ion_row_7_Template, 5, 1, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ApertureComponent_ion_row_8_Template, 5, 0, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.myApertura.getLabel()), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myApertura.DALLE1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myApertura.DALLE2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myApertura.isAlwaysOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.myApertura.isOpen());
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".row-border[_ngcontent-%COMP%] {\n  border-bottom: var(--ion-color-success-tint) thin;\n  border-bottom-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBlcnR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpREFBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoiYXBlcnR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KSB0aGluO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xyXG59Il19 */"] });


/***/ }),

/***/ "1hMp":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/level-setter/level-setter.component.ts ***!
  \**************************************************************************/
/*! exports provided: LevelSetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelSetterComponent", function() { return LevelSetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_corsovalutazionelivello_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/corsovalutazionelivello.model */ "eRJB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LevelSetterComponent_ion_list_0_ion_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.collapsed ? "chevron-down-outline" : "chevron-up-outline");
} }
function LevelSetterComponent_ion_list_0_ion_radio_group_16_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r4.DENOMINAZIONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.readOnly)("value", level_r4.ID);
} }
function LevelSetterComponent_ion_list_0_ion_radio_group_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function LevelSetterComponent_ion_list_0_ion_radio_group_16_Template_ion_radio_group_ionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onChangeRadioGroup(); })("ngModelChange", function LevelSetterComponent_ion_list_0_ion_radio_group_16_Template_ion_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.myValutazione.IDLIVELLOFINALE = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelSetterComponent_ion_list_0_ion_radio_group_16_ion_item_1_Template, 4, 3, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.myValutazione.IDLIVELLOFINALE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.listLivelli);
} }
function LevelSetterComponent_ion_list_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelSetterComponent_ion_list_0_Template_ion_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onChangeCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Conseguito:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LevelSetterComponent_ion_list_0_ion_icon_15_Template, 1, 1, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LevelSetterComponent_ion_list_0_ion_radio_group_16_Template, 2, 2, "ion-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.flagComplete ? "success" : "warning")("name", ctx_r0.flagComplete ? "checkmark-done-circle-outline" : "alert-circle-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.myValutazione.NOMINATIVO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attuale:\u00A0", ctx_r0.getLabelLevel(ctx_r0.myValutazione.IDLIVELLOENTRATA), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getLabelLevel(ctx_r0.myValutazione.IDLIVELLOFINALE));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
} }
class LevelSetterComponent {
    /**
     * Costruisce un elemento stile Accordion per la scelta del Livello
     *
     */
    constructor() {
        this.readOnly = false;
        this.listLivelli = [];
        this.onChoose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //Elemento collassato
        this.collapsed = true;
        //Indica se è stato impostato un livello Finale
        this.flagComplete = false;
    }
    set valutazione(value) {
        this.myValutazione = value;
        if (this.myValutazione) {
            if (this.myValutazione.IDLIVELLOFINALE) {
                this.idSelectedLevel = this.myValutazione.IDLIVELLOFINALE;
            }
            else {
                this.idSelectedLevel = this.myValutazione.IDLIVELLOENTRATA;
            }
        }
        //Controllo la situazione Livello Finale
        this.setFlagComplete();
    }
    ;
    /**
     * Apre o Chiude la lista dei Livelli
     */
    onChangeCollapse() {
        //Se non sono in Sola lettura
        if (!this.readOnly) {
            if (this.collapsed) {
                this.collapsed = false;
            }
            else {
                this.collapsed = true;
            }
        }
    }
    ngOnInit() { }
    /**
     * Imposta il flag che indica che è stato completato con
     * il livello finale l'elemento
     */
    setFlagComplete() {
        let value = false;
        if (this.myValutazione && this.myValutazione.IDLIVELLOFINALE && this.myValutazione.IDLIVELLOFINALE.length != 0) {
            value = true;
        }
        this.flagComplete = value;
    }
    /**
     * Ritorna una stringa che rappresenta idSelectedLevel
     */
    getLabelLevel(idLevel) {
        let label = 'non definito';
        let myLevel;
        if (idLevel) {
            myLevel = this.listLivelli.find(element => {
                return element.ID == idLevel;
            });
            if (myLevel) {
                label = myLevel.DENOMINAZIONE;
            }
        }
        return label;
    }
    /**
     * Modificato il valore nel Radio Group
     * @param value Valore Cambiato
     */
    onChangeRadioGroup() {
        this.setFlagComplete();
        //Segnalo la modifica del valore
        this.onChoose.emit(this.myValutazione);
    }
}
LevelSetterComponent.ɵfac = function LevelSetterComponent_Factory(t) { return new (t || LevelSetterComponent)(); };
LevelSetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelSetterComponent, selectors: [["app-level-setter"]], inputs: { readOnly: "readOnly", listLivelli: "listLivelli", valutazione: "valutazione" }, outputs: { onChoose: "onChoose" }, decls: 1, vars: 1, consts: [["class", "ion-no-margin", 4, "ngIf"], [1, "ion-no-margin"], ["color", "light"], ["lines", "none", "color", "light", 3, "click"], ["slot", "start", 3, "color", "name"], ["color", "medium", 2, "font-style", "italic"], ["color", "medium", 2, "font-style", "italic", "font-weight", "bold"], ["slot", "end", 3, "name", 4, "ngIf"], [3, "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["slot", "end", 3, "name"], [3, "ngModel", "ionChange", "ngModelChange"], [4, "ngFor", "ngForOf"], ["slot", "start", "color", "success", 3, "disabled", "value"]], template: function LevelSetterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LevelSetterComponent_ion_list_0_Template, 17, 7, "ion-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myValutazione);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RadioValueAccessor"]], styles: ["ion-item-group[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGV2ZWwtc2V0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJsZXZlbC1zZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1ncm91cCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "2BDZ":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/item-calendario/item-calendario.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemCalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCalendarioComponent", function() { return ItemCalendarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/library/models/mydatetime.model */ "K4nM");
/* harmony import */ var src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/itemCalendario.model */ "IidP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ItemCalendarioComponent_h2_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.params.riga1Text);
} }
function ItemCalendarioComponent_h3_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.params.riga2Text);
} }
function ItemCalendarioComponent_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.params.riga3Text);
} }
function ItemCalendarioComponent_ion_badge_20_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r4.params.badgeIcon);
} }
function ItemCalendarioComponent_ion_badge_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.params.badgeText, " ");
} }
function ItemCalendarioComponent_ion_badge_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemCalendarioComponent_ion_badge_20_ion_icon_1_Template, 1, 1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemCalendarioComponent_ion_badge_20_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r3.params.badgeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.tipoBadge == ctx_r3.TipoBadge.iconAndText || ctx_r3.tipoBadge == ctx_r3.TipoBadge.onlyIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.tipoBadge == ctx_r3.TipoBadge.iconAndText || ctx_r3.tipoBadge == ctx_r3.TipoBadge.onlyText);
} }
class ItemCalendarioComponent {
    constructor() {
        this.params = new src_app_models_itemCalendario_model__WEBPACK_IMPORTED_MODULE_2__["ItemCalendario"]();
        this.showDate = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.TipoBadge = TipoBadge;
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
    get tipoBadge() {
        let tipo;
        if (this.params.badgeText && this.params.badgeText.length > 0) {
            if (this.params.badgeIcon && this.params.badgeIcon.length > 0) {
                //abbiamo entrambi 
                tipo = TipoBadge.iconAndText;
            }
            else {
                // abbiamo solo il testo
                tipo = TipoBadge.onlyText;
            }
        }
        else if (this.params.badgeIcon && this.params.badgeIcon.length > 0) {
            //abbiamo solo l'icona
            tipo = TipoBadge.onlyIcon;
        }
        else {
            //non abbiamo nulla
            tipo = TipoBadge.noBadge;
        }
        return tipo;
    }
    get badgeClass() {
        let myCssClass = '';
        if (this.tipoBadge == TipoBadge.onlyIcon) {
            myCssClass = 'badge-icon-only';
        }
        else if (this.tipoBadge == TipoBadge.iconAndText) {
            myCssClass = 'badge-icon-text';
        }
        return myCssClass;
    }
    /**
   * Ritorna il colore da applicare alla riga verticale che separa
   * la colonna Sinistra dalla destra
   * @param elItem
   */
    getClassColorColumn(elItem) {
        let color = 'undef';
        let dataitem;
        let today = new Date(src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].formatDateISO(new Date));
        if (elItem && elItem.oraInizio) {
            dataitem = src_app_library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_1__["MyDateTime"].getOnlyDate(elItem.oraInizio);
            if (dataitem < today) {
                //Passata
                color = 'past';
            }
            else if (dataitem > today) {
                color = 'future';
            }
            else {
                color = 'today';
            }
        }
        return color;
    }
}
ItemCalendarioComponent.ɵfac = function ItemCalendarioComponent_Factory(t) { return new (t || ItemCalendarioComponent)(); };
ItemCalendarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemCalendarioComponent, selectors: [["app-item-calendario"]], inputs: { params: "params", showDate: "showDate" }, outputs: { click: "click" }, decls: 21, vars: 17, consts: [[1, "custom-element"], [1, "ion-no-padding"], [1, "ion-align-items-center"], ["size", "auto", 1, "ion-no-padding", "col-left"], [1, "left-label"], [1, "ion-no-padding", "col-center", 3, "ngClass"], [4, "ngIf"], [1, "ion-no-padding", "col-right"], [3, "color", "class", 4, "ngIf"], [3, "color"], [3, "name", 4, "ngIf"], [3, "name"]], template: function ItemCalendarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ItemCalendarioComponent_h2_16_Template, 2, 1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ItemCalendarioComponent_h3_17_Template, 2, 1, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ItemCalendarioComponent_h3_18_Template, 2, 1, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ItemCalendarioComponent_ion_badge_20_Template, 3, 5, "ion-badge", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 8, ctx.params.oraInizio, "HH.mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, ctx.params.oraFine, "HH.mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getClassColorColumn(ctx.params));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 14, ctx.params.oraInizio, "EEE dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.riga1Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.riga2Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.riga3Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipoBadge != ctx.TipoBadge.noBadge);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 12px;\n  font-weight: 480;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\ndiv.custom-element[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 8px;\n  padding-left: 15px;\n  padding-right: 10px;\n  border-bottom: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #b5b5b5;\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-left[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-center[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  border-left: 2px;\n  border-left-style: solid;\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-center.past[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-danger);\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-center.undef[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-primary);\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-center.future[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-warning);\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-center.today[_ngcontent-%COMP%] {\n  border-left-color: var(--ion-color-success);\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-col.col-right[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-badge.badge-icon-only[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\ndiv.custom-element[_ngcontent-%COMP%]   ion-badge.badge-icon-only[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXRlbS1jYWxlbmRhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBRUksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBSUk7RUFDSSxtQkFBQTtBQUZSOztBQUtJO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBSlI7O0FBU0k7RUFDSSwwQ0FBQTtBQVBSOztBQVVJO0VBQ0ksMkNBQUE7QUFSUjs7QUFXSTtFQUNJLDJDQUFBO0FBVFI7O0FBWUk7RUFDSSwyQ0FBQTtBQVZSOztBQWNJO0VBQ0ksZUFBQTtBQVpSOztBQWlCSTtFQUNJLGVBQUE7QUFmUjs7QUFpQlE7RUFDSSxnQkFBQTtBQWZaIiwiZmlsZSI6Iml0ZW0tY2FsZW5kYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaDN7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0ODA7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5kaXYuY3VzdG9tLWVsZW1lbnR7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDE4MSwgMTgxLCAxODEpO1xyXG5cclxuICAgIGlvbi1jb2wuY29sLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29sLmNvbC1jZW50ZXJ7XHJcblxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICBpb24tY29sLmNvbC1jZW50ZXIucGFzdHtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbC5jb2wtY2VudGVyLnVuZGVme1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbC5jb2wtY2VudGVyLmZ1dHVyZXtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2wuY29sLWNlbnRlci50b2RheXtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgfSAgICBcclxuXHJcblxyXG4gICAgaW9uLWNvbC5jb2wtcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaW9uLWJhZGdlLmJhZGdlLWljb24tb25seXtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYmFkZ2UuYmFkZ2UtaWNvbi10ZXh0e1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
var TipoBadge;
(function (TipoBadge) {
    TipoBadge[TipoBadge["onlyIcon"] = 0] = "onlyIcon";
    TipoBadge[TipoBadge["onlyText"] = 1] = "onlyText";
    TipoBadge[TipoBadge["iconAndText"] = 2] = "iconAndText";
    TipoBadge[TipoBadge["noBadge"] = 3] = "noBadge";
})(TipoBadge || (TipoBadge = {}));


/***/ }),

/***/ "31Zp":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/alert-input-prezzo/alert-input-prezzo.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AlertInputPrezzoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInputPrezzoComponent", function() { return AlertInputPrezzoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AlertInputPrezzoComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
} }
class AlertInputPrezzoComponent {
    constructor() {
        this.onDismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClickBtn() {
        this.onDismiss.emit(this.value);
    }
    onClickBackdrop() {
        this.onDismiss.emit(undefined);
    }
}
AlertInputPrezzoComponent.ɵfac = function AlertInputPrezzoComponent_Factory(t) { return new (t || AlertInputPrezzoComponent)(); };
AlertInputPrezzoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertInputPrezzoComponent, selectors: [["app-alert-input-prezzo"]], inputs: { placeholder: "placeholder", description: "description", btnText: "btnText" }, outputs: { onDismiss: "onDismiss" }, decls: 9, vars: 10, consts: [[1, "input-prezzo"], [3, "tappable", "visible", "stopPropagation", "ionBackdropTap"], [4, "ngIf"], ["clearInput", "true", "inputmode", "numeric", 3, "placeholder", "ngModel", "ngModelChange"], ["expand", "block", "color", "primary", "fill", "clear", 3, "click"], ["name", "information-circle-outline", "color", "primary"]], template: function AlertInputPrezzoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-backdrop", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionBackdropTap", function AlertInputPrezzoComponent_Template_ion_backdrop_ionBackdropTap_1_listener() { return ctx.onClickBackdrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertInputPrezzoComponent_p_4_Template, 4, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlertInputPrezzoComponent_Template_ion_input_ngModelChange_5_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertInputPrezzoComponent_Template_ion_button_click_7_listener() { return ctx.onClickBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tappable", true)("visible", true)("stopPropagation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.placeholder, "EUR"))("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnText ? ctx.btnText : "Conferma", " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackdrop"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".input-prezzo[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.input-prezzo[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: auto;\n  z-index: 30;\n  width: 260px;\n}\n.input-prezzo[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.input-prezzo[_ngcontent-%COMP%]   ion-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxlcnQtaW5wdXQtcHJlenpvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFLSSxZQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0ksZUFBQTtBQUhWO0FBT0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUxSIiwiZmlsZSI6ImFsZXJ0LWlucHV0LXByZXp6by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1wcmV6em97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcblxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiBmaXhlZDsgIFxyXG4gICAgLy8gICB0b3A6IDUwJTtcclxuICAgIC8vICAgbGVmdDogNTAlO1xyXG4gICAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHotaW5kZXg6IDMwO1xyXG4gICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24taW5wdXR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJhY2tkcm9we1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "3U+j":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/calendarscroll/calendarscroll.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarscrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarscrollComponent", function() { return CalendarscrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["sliderDays"];
function CalendarscrollComponent_ion_slide_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarscrollComponent_ion_slide_13_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const day_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onClickButton(day_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fill", ctx_r1.getFillButton(day_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", day_r2, " ");
} }
class CalendarscrollComponent {
    constructor(pickController) {
        this.pickController = pickController;
        this.activeDay = new Date();
        this.onChangeActiveDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listDay = [];
        this.listMesi = []; //Elenco dei mesi da visualizzare nel Picker
        this.sliderOpts = {
            slidesPerView: 15,
            spaceBetween: 3,
            initialSlide: 1,
            // Responsive breakpoints   
            breakpoints: {
                // when window width is <= 320px     
                320: {
                    slidesPerView: 5,
                    spaceBetween: 1
                },
                // when window width is <= 480px     
                480: {
                    slidesPerView: 7,
                    spaceBetween: 3
                },
                // when window width is <= 640px     
                640: {
                    slidesPerView: 10,
                    spaceBetween: 1
                },
                1000: {
                    slidesPerView: 15,
                    spaceBetween: 1
                }
            }
        };
        this.setStartSlide();
        //Creo l'Array dei Mesi che utilizzero nel Picker Date
        this.listMesi = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["ValueList"].getArray(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_4__["Mesi"]);
    }
    /**
     * Imposta la Slide del giorno da mostrare a seconda del ActiveDay
     */
    setStartSlide() {
        //Prendo il giorno attivo -1
        let startSlide = this.activeDay.getDate() - 1;
        //Sottraggo 2 per dare più respiro
        startSlide -= 2;
        if (startSlide < 0) {
            startSlide = 0;
        }
        this.sliderOpts.initialSlide = startSlide;
    }
    /**
     * Si posiziona sulla Slide richiesta
     * @param indexSlideZeroBased Indice della Slide
     */
    goToSlide(indexSlideZeroBased) {
        if (this.sliderDays) {
            this.sliderDays.slideTo(indexSlideZeroBased);
        }
    }
    ngOnInit() {
        this.setListDay();
    }
    /* Ricava tutti i giorni del mese presente in activeDay */
    setListDay() {
        let endDay = 30;
        let endWrapper = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(this.activeDay.getFullYear(), this.activeDay.getMonth(), 1)).add(1, 'M');
        endWrapper.subtract(1, 'day');
        endDay = endWrapper.date();
        this.listDay = [];
        endDay += 1; //Incremento EndDay per usare la condizione <
        for (let index = 1; index < endDay; index++) {
            this.listDay.push(index);
        }
    }
    // Ritorna il colore del Button
    getFillButton(day) {
        let fill = 'outline';
        if (this.activeDay.getDate() == day) {
            fill = 'solid';
        }
        return fill;
    }
    //Bottone del giorno premuto
    onClickButton(day) {
        let anno = this.activeDay.getFullYear();
        let mese = this.activeDay.getMonth();
        let giorno = day;
        this.activeDay = new Date(anno, mese, giorno);
        //Lancio evento di cambio giorno
        this.onChangeActiveDay.emit(this.activeDay);
    }
    /**
     * Usato per creare la colonna del mese del ion picker
     * @param meseZeroBased è il numero del Mese Zero Base (0 = Gennaio)
     */
    initColumnMesi(meseZeroBased) {
        let optionColMesi = [];
        for (let index = 0; index < this.listMesi.length; index++) {
            const element = this.listMesi[index];
            let isDisabled = (index >= meseZeroBased ? false : true);
            let pickColMese = {
                text: element.description,
                value: element.value,
                disabled: isDisabled
            };
            optionColMesi.push(pickColMese);
        }
        return optionColMesi;
    }
    /**
     * Crea la colonna degli anni
     */
    initColumnAnni() {
        //Creo l'elenco sulla colonna dell'Anno
        let optionColAnni = [];
        let startAnno = (new Date()).getFullYear();
        for (let index = startAnno; index < startAnno + 5; index++) {
            let pickColAnno = {
                text: index + '',
                value: index
            };
            optionColAnni.push(pickColAnno);
        }
        return optionColAnni;
    }
    /**
     * Crea l'insieme delle colonne da passare al Picker
     * @param optColMesi       Colonna del Mese
     * @param indexActiveMese  Index Selezionato Mese
     * @param optColAnni       Colonna degli Anni
     * @param indexActiveAnno  Index Selezionato Anno
     */
    initColumnsPicker(optColMesi, indexActiveMese, optColAnni, indexActiveAnno) {
        // Colonne del Picker
        let pickColumns = [
            {
                name: 'mese',
                options: optColMesi,
                selectedIndex: indexActiveMese
            },
            {
                name: 'anno',
                options: optColAnni,
                selectedIndex: indexActiveAnno
            }
        ];
        return pickColumns;
    }
    /**
     * Visualizza il Picker Date
     */
    showPickerDate() {
        let _this = this;
        // Indici delle voci selezionate
        let indexActiveMese = 0;
        let indexActiveAnno = (_this.activeDay.getFullYear() - (new Date()).getFullYear());
        const myMese = (new Date()).getMonth();
        let pickButtons = [{
                text: 'Conferma',
                handler: (data) => {
                    //Recupero Mese e Anno
                    let m = data.mese.value;
                    let a = data.anno.value;
                    //Imposto la nuova Data attiva
                    _this.setNewActiveDateFromPicker(m, a);
                }
            }, {
                role: 'cancel',
                text: 'Annulla'
            }];
        //Creo l'elenco sulla colonna del Mese
        let optionColMesi = this.initColumnMesi(myMese);
        //Creo l'elenco sulla colonna dell'Anno
        let optionColAnni = [];
        optionColAnni = this.initColumnAnni();
        // Colonne del Picker
        let pickColumns = this.initColumnsPicker(optionColMesi, indexActiveMese, optionColAnni, indexActiveAnno);
        //Opzioni del Picker
        let pickOptions = {
            columns: pickColumns,
            buttons: pickButtons,
            keyboardClose: true
        };
        //Mostro il Picker
        this.pickController
            .create(pickOptions)
            .then(elPicker => {
            elPicker.addEventListener('ionPickerColChange', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const data = event.detail;
                //Cambiare la colonna dei Mesi a seconda dell'anno
                if (data.name == 'anno') {
                    const myAnno = (new Date()).getFullYear();
                    const myMese = (new Date()).getMonth();
                    let optionColMesi = [];
                    let optionColAnni = [];
                    let pickColumns = [];
                    //Indice di posizione dell'array
                    const colSelectedIndex = data.selectedIndex;
                    //Tutto il contenuto della colonna 
                    const colOptions = data.options;
                    //Vediamo quale anno ha scelto
                    const chooseAnno = colOptions[colSelectedIndex].value;
                    //Creo la Colonna dell'Anno
                    optionColAnni = this.initColumnAnni();
                    //Stesso Anno attuale devo filtrare i mesi
                    if (chooseAnno == myAnno) {
                        //Devo filtrare i mesi visualizzando solo i mancanti
                        optionColMesi = this.initColumnMesi(myMese);
                    }
                    else {
                        //Tutti i mesi
                        optionColMesi = this.initColumnMesi(0);
                    }
                    //Unisco le colonne
                    pickColumns = this.initColumnsPicker(optionColMesi, 0, optionColAnni, colSelectedIndex);
                    //Applico le nuove colonne
                    elPicker.columns = pickColumns;
                    //Il metodo ForceUpdate non esiste più
                    //elPicker.forceUpdate();
                }
            }));
            elPicker.present();
        });
    }
    /**
     * Imposta activeDay sulla base della scelta fatta nel picker
     * @param meseOneBasedNew Numero del Mese (da 1 a 12)
     * @param annoNew Anno scelto
     */
    setNewActiveDateFromPicker(meseOneBasedNew, annoNew) {
        let activeM = this.activeDay.getMonth();
        let activeA = this.activeDay.getFullYear();
        let activeG = this.activeDay.getDate();
        let message = '';
        let oggi = new Date();
        // message = `Nuovo (M-A): ${meseOneBasedNew} - ${annoNew} / Attuali (M-A): ${activeM} - ${activeA}`;
        // console.log(message);
        // Cambiato il mese o l'anno
        if ((meseOneBasedNew - 1) !== activeM || annoNew !== activeA) {
            //Ci siamo spostati sul mese/anno di oggi
            if ((meseOneBasedNew - 1) == oggi.getMonth() && annoNew == oggi.getFullYear()) {
                //Allora spostiamo il giorno scelto a oggi
                activeG = oggi.getDate();
            }
            else {
                //Lo portiamo al primo del mese
                activeG = 1;
                // //Qual'e' il giorno piu' alto nel nuovo mese scelto
                // let maxDay = this.getMaxDayInMont((meseOneBasedNew - 1), annoNew);
                // if (activeG > maxDay) {
                //   activeG = maxDay;
                // }
            }
            //Cambio il Giorno attivo
            this.activeDay = new Date(annoNew, (meseOneBasedNew - 1), activeG);
            //Ripreparo la lista dei giorni
            this.setListDay();
            //Si posiziona sulla Slide
            this.goToSlide(this.activeDay.getDate() - 1);
            //Lancio evento di cambio giorno
            this.onChangeActiveDay.emit(this.activeDay);
        }
    }
    /**
     * Ritorna il numero del giorno piu' alto del mese
     * @param meseZeroBase Numero del Mese (o Based)
     * @param anno Anno
     */
    getMaxDayInMont(meseZeroBase, anno) {
        let newDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(anno, meseZeroBase, 1));
        newDate.add(1, 'month');
        newDate.subtract(1, 'day');
        return newDate.toDate().getDate();
    }
}
CalendarscrollComponent.ɵfac = function CalendarscrollComponent_Factory(t) { return new (t || CalendarscrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"])); };
CalendarscrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarscrollComponent, selectors: [["app-calendarscroll"]], viewQuery: function CalendarscrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sliderDays = _t.first);
    } }, inputs: { activeDay: "activeDay" }, outputs: { onChangeActiveDay: "onChangeActiveDay" }, decls: 14, vars: 8, consts: [[1, "ion-no-padding", "ion-no-margin"], [1, "date-row"], ["size", "", 1, "ion-text-center", 3, "click"], [1, "custom-div"], [1, "ion-no-margin", "custom-h5", "ion-text-center"], ["name", "chevron-down", "color", "primary", 1, ""], [1, "ion-no-margin", "ion-padding-horizontal"], [3, "options"], ["sliderDays", ""], [4, "ngFor", "ngForOf"], ["shape", "round", "size", "large", "color", "secondary", 1, "ion-no-padding", "ion-no-margin", 3, "fill", "click"]], template: function CalendarscrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarscrollComponent_Template_ion_col_click_2_listener() { return ctx.showPickerDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-slides", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CalendarscrollComponent_ion_slide_13_Template, 3, 2, "ion-slide", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 5, ctx.activeDay, "MMMM yyyy")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.sliderOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDay);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["ion-grid[_ngcontent-%COMP%] {\n  background-color: white;\n}\nion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n}\nion-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n}\nion-slides[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  height: 60px;\n}\n.flessibile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: thin;\n  border-color: var(--ion-color-light-shade);\n  width: 50px;\n  height: 50px;\n}\n.icon-calendar[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.date-row[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.custom-h5[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.custom-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n}\n.custom-div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FsZW5kYXJzY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBR0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0FBQUo7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBSUE7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRko7QUFHSTtFQUNJLGdCQUFBO0FBRFIiLCJmaWxlIjoiY2FsZW5kYXJzY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmZsZXNzaWJpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaWNvbi1jYWxlbmRhcntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmRhdGUtcm93e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20taDV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tZGl2XHJcbntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "EuO+":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/payment-choose/payment-choose.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaymentChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentChooseComponent", function() { return PaymentChooseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/areapaymentsetting.model */ "MO7j");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PaymentChooseComponent_ion_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagamento non supportato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentChooseComponent_ion_item_1_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedPayment == null ? null : ctx_r2.selectedPayment.label);
} }
function PaymentChooseComponent_ion_item_1_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Scegli metodo di pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentChooseComponent_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentChooseComponent_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onOpenChoose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentChooseComponent_ion_item_1_ion_label_2_Template, 2, 1, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentChooseComponent_ion_item_1_ion_label_3_Template, 2, 0, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.itemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedPayment);
} }
class PaymentChooseComponent {
    constructor(platform, actionSheetController) {
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        //Elenco dei pagamenti accettati
        this.arPayment = [];
        this.onPaymentChoosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMobile = false;
        if (platform.is('hybrid')) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    }
    get itemIcon() {
        let nameIcon = 'cart-outline';
        if (this.selectedPayment) {
            nameIcon = this.selectedPayment.icon;
        }
        return nameIcon;
    }
    ngOnInit() {
    }
    /**
     * Apertura delle voci di scelta
     * Mobile: ActionSheet
     * Desktop:
     */
    onOpenChoose() {
        let buttonsArray = [];
        let singleButton;
        if (this.arPayment) {
            if (this.arPayment.length !== 0) {
                //Popolo i Bottoni
                for (const iterator of this.arPayment) {
                    singleButton = {
                        text: iterator.label,
                        icon: iterator.icon,
                        handler: () => {
                            //Cambio metodo pagamento
                            this.onChangePaymentSelection(iterator);
                        }
                    };
                    buttonsArray.push(singleButton);
                }
                //Pulsante Annulla
                singleButton = {
                    text: 'Annulla',
                    icon: 'arrow-undo-sharp',
                    role: 'cancel'
                };
                buttonsArray.push(singleButton);
                this.actionSheetController.create({
                    header: 'Come desideri pagare ?',
                    buttons: buttonsArray
                })
                    .then(elAction => {
                    elAction.present();
                });
            }
        }
    }
    /**
     * Cambio di selezione nel pagamento
     * @param value Nuova selezione
     */
    onChangePaymentSelection(value) {
        //Memorizzo il pagamento
        this.selectedPayment = value;
        //Invio l'informazione al padre
        this.onPaymentChoosed.emit(value);
    }
}
PaymentChooseComponent.ɵfac = function PaymentChooseComponent_Factory(t) { return new (t || PaymentChooseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"])); };
PaymentChooseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentChooseComponent, selectors: [["app-payment-choose"]], inputs: { arPayment: "arPayment", selectedPayment: "selectedPayment" }, outputs: { onPaymentChoosed: "onPaymentChoosed" }, decls: 2, vars: 2, consts: [["lines", "none", 4, "ngIf"], ["button", "", "lines", "none", 3, "detail", "click", 4, "ngIf"], ["lines", "none"], ["button", "", "lines", "none", 3, "detail", "click"], ["slot", "start", 3, "name"], [4, "ngIf"]], template: function PaymentChooseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaymentChooseComponent_ion_item_0_Template, 3, 0, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentChooseComponent_ion_item_1_Template, 4, 4, "ion-item", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arPayment.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arPayment.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWNob29zZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "GYAn":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/settimana-block/settimana-block.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettimanaBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettimanaBlockComponent", function() { return SettimanaBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




function SettimanaBlockComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function SettimanaBlockComponent_td_2_Template_ion_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const giorno_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickDay(giorno_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const giorno_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.getColorDay(giorno_r1))("fill", ctx_r0.getFillDay(giorno_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getLabelDay(giorno_r1), " ");
} }
class SettimanaBlockComponent {
    constructor() {
        this.listDays = [];
        this.colorSelected = 'primary';
        this.colorNotSelected = 'secondary';
        this.clickable = false;
        this.isDesktop = false;
        this.clickElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    /**
     * Ritorna il colore da applicare
     * @param myDay Giornata
     */
    getColorDay(myDay) {
        let myColor = this.colorNotSelected;
        if (myDay && myDay.selected) {
            myColor = this.colorSelected;
        }
        return myColor;
    }
    /**
     * Ritorna il Fill da applicare
     * @param myDay Giornata
     */
    getFillDay(myDay) {
        let myColor = 'outline';
        if (myDay && myDay.selected) {
            myColor = 'solid';
        }
        return myColor;
    }
    /**
     * Ritorna la Label da applicare
     * @param myDay Giornata
     */
    getLabelDay(myDay) {
        let myLabel = '';
        if (this.isDesktop) {
            myLabel = myDay.label.toUpperCase();
        }
        else {
            myLabel = myDay.xsLabel.toUpperCase();
        }
        return myLabel;
    }
    /**
     * Evento di click sul button
     * @param giorno Giorno cliccato
     */
    onClickDay(giorno) {
        if (this.clickable) {
            //Emetto l'evento con il giorno
            this.clickElement.emit(giorno);
        }
    }
}
SettimanaBlockComponent.ɵfac = function SettimanaBlockComponent_Factory(t) { return new (t || SettimanaBlockComponent)(); };
SettimanaBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettimanaBlockComponent, selectors: [["app-settimana-block"]], inputs: { listDays: "listDays", colorSelected: "colorSelected", colorNotSelected: "colorNotSelected", clickable: "clickable", isDesktop: "isDesktop" }, outputs: { clickElement: "clickElement" }, decls: 3, vars: 1, consts: [[1, "ion-margin-vertical", 2, "width", "100%"], ["class", "ion-text-center", 4, "ngFor", "ngForOf"], [1, "ion-text-center"], ["size", "small", 3, "color", "fill", "onClick"]], template: function SettimanaBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettimanaBlockComponent_td_2_Template, 4, 3, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listDays);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW1hbmEtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Hm2W":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/button-card/button-card.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCardComponent", function() { return ButtonCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/buttoncard.model */ "07+x");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ButtonCardComponent_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.myButtonCard.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.myButtonCard.subtitle, " ");
} }
function ButtonCardComponent_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.myButtonCard.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.myButtonCard.subtitle, " ");
} }
const _c0 = function (a0, a1) { return { "card-small-version": a0, "card-home-custode": a1 }; };
class ButtonCardComponent {
    constructor() {
        this.myButtonCard = new src_app_models_buttoncard_model__WEBPACK_IMPORTED_MODULE_1__["ButtonCard"]();
        this.smallVersion = false; //Small Version usa H2 e P invece di H1 e H3
        this.disabled = false;
        this.clickElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    /**
     * Click sull'elemento
     * @param objButtonCard Card scelta
     */
    onClickElement(objButtonCard) {
        if (objButtonCard) {
            this.clickElement.emit(objButtonCard);
        }
    }
}
ButtonCardComponent.ɵfac = function ButtonCardComponent_Factory(t) { return new (t || ButtonCardComponent)(); };
ButtonCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonCardComponent, selectors: [["app-button-card"]], inputs: { myButtonCard: "myButtonCard", smallVersion: "smallVersion", homeCustodeVersion: "homeCustodeVersion", disabled: "disabled" }, outputs: { clickElement: "clickElement" }, decls: 5, vars: 12, consts: [[3, "ngClass"], ["lines", "none", 3, "button", "detail", "disabled", "click"], [3, "slot", "name", "color"], [4, "ngIf"], [1, "ion-text-wrap"]], template: function ButtonCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonCardComponent_Template_ion_item_click_1_listener() { return ctx.onClickElement(ctx.myButtonCard); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonCardComponent_ion_label_3_Template, 5, 2, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonCardComponent_ion_label_4_Template, 5, 2, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.smallVersion, ctx.homeCustodeVersion));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button", ctx.myButtonCard.iconLink)("detail", ctx.myButtonCard.iconLink)("disabled", ctx.myButtonCard.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slot", ctx.myButtonCard.sloticon)("name", ctx.myButtonCard.nameicon)("color", ctx.myButtonCard.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smallVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smallVersion);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], styles: [".card-small-version[_ngcontent-%COMP%] {\n  margin: 8px 0px 8px 0px;\n  width: 100%;\n}\n\n.card-home-custode[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFGSiIsImZpbGUiOiJidXR0b24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNhcmQtc21hbGwtdmVyc2lvbiB7XHJcbiAgICBtYXJnaW46IDhweCAwcHggOHB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1ob21lLWN1c3RvZGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDM1cHggO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4IDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "IidP":
/*!************************************************!*\
  !*** ./src/app/models/itemCalendario.model.ts ***!
  \************************************************/
/*! exports provided: ItemCalendario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCalendario", function() { return ItemCalendario; });
/* harmony import */ var _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/models/mydatetime.model */ "K4nM");
/* harmony import */ var _valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuelist.model */ "W8X0");


class ItemCalendario {
    static getParamsPianificazioneCorso(pianificazioneElem) {
        let paramsItem;
        paramsItem = new ItemCalendario();
        paramsItem.oraInizio = pianificazioneElem.DATAORAINIZIO;
        paramsItem.oraFine = pianificazioneElem.DATAORAFINE;
        paramsItem.riga1Text = pianificazioneElem['_DENOMINAZIONE_Corso'];
        paramsItem.riga2Text = pianificazioneElem['_DENOMINAZIONE_Location'];
        paramsItem.riga3Text = pianificazioneElem['_DENOMINAZIONE_Campo'];
        paramsItem.badgeText = pianificazioneElem.getDocPropertyInRepository(['IDCORSO', 'IDLIVELLOENTRATA'], 'DENOMINAZIONE');
        paramsItem.badgeColor = "primary";
        return paramsItem;
    }
    //mi dice se l'impegno a cui si riferisce l'item è già finito
    get isPast() {
        let now = new Date;
        if (this.oraFine < now) {
            return true;
        }
        else {
            return false;
        }
    }
    static getParamsOccupazioneCampo(occupazioneElem) {
        let paramsItem = new ItemCalendario();
        paramsItem.oraInizio = occupazioneElem.DATAORAINIZIO;
        paramsItem.oraFine = occupazioneElem.DATAORAFINE;
        if (occupazioneElem.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreCorso) {
            paramsItem.riga1Text = occupazioneElem.getDocPropertyInRepository(['IDREF'], 'DENOMINAZIONE');
            paramsItem.badgeIcon = "school-outline";
        }
        else if (occupazioneElem.TIPO == _valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settorePrenotazione) {
            paramsItem.riga1Text = occupazioneElem.getDocPropertyInRepository(['IDREF'], 'NOMINATIVO');
            paramsItem.badgeIcon = "calendar-outline";
        }
        paramsItem.riga2Text = `${occupazioneElem['_DENOMINAZIONE_Location']} - ${occupazioneElem['_DENOMINAZIONE_Campo']}`;
        paramsItem.riga3Text = _library_models_mydatetime_model__WEBPACK_IMPORTED_MODULE_0__["MyDateTime"].formatDate(occupazioneElem.DATAINIZIO, 'DD/MM/YYYY');
        paramsItem.badgeColor = "primary";
        return paramsItem;
    }
}


/***/ }),

/***/ "JI/N":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/player-number/player-number.component.ts ***!
  \****************************************************************************/
/*! exports provided: PlayerNumberComponent, typeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerNumberComponent", function() { return PlayerNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeIcon", function() { return typeIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PlayerNumberComponent_ion_col_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerNumberComponent_ion_col_14_Template_ion_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const icona_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickPlayer(icona_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icona_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", icona_r1 <= ctx_r0.numPlayer ? "secondary" : "light");
} }
class PlayerNumberComponent {
    constructor(pickerController) {
        this.pickerController = pickerController;
        this.maxPlayerIcon = 6;
        this.maxPlayers = 30;
        this.changeNumPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icone = [];
    }
    ngOnInit() {
        this.initIcone();
    }
    initIcone() {
        // 6 FACCE e 1 PLUS
        for (let index = 0; index <= 5; index++) {
            this.icone[index] = index + 1;
        }
    }
    /**
     * Invia alla pagina il nuovo numero player
     * @param nPlayer Numero Player
     */
    onClickPlayer(nPlayer, event) {
        this.changeNumPlayer.emit(nPlayer);
    }
    /**
     * invia alla pagina la richiesta di aggiunta giocatori
     */
    onClickPlusPlayer() {
        let _this = this;
        //array di bottoni del picker (per ora vuoto)
        let pickerButtons = [
            {
                text: 'Conferma',
                handler: (nPlayers) => {
                    _this.changeNumPlayer.emit(nPlayers.column.value);
                }
            },
            {
                text: 'Annulla',
                role: 'cancel'
            }
        ];
        //Valori della colonna 
        let pickerValues = [];
        for (let i = (this.maxPlayerIcon + 1); i < this.maxPlayers; i++) {
            let pickerValue = {
                text: String(i),
                value: i
            };
            pickerValues.push(pickerValue);
        }
        //Intestazione della colonna
        let pickerColumns = [{
                name: 'column',
                options: pickerValues
            }];
        //caratteristiche del picker
        let pickerOptions = {
            columns: pickerColumns,
            buttons: pickerButtons,
            keyboardClose: true
        };
        this.pickerController
            .create(pickerOptions)
            .then(picker => {
            picker.present();
        });
    }
}
PlayerNumberComponent.ɵfac = function PlayerNumberComponent_Factory(t) { return new (t || PlayerNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PickerController"])); };
PlayerNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerNumberComponent, selectors: [["app-player-number"]], inputs: { numPlayer: "numPlayer" }, outputs: { changeNumPlayer: "changeNumPlayer" }, decls: 18, vars: 4, consts: [[1, "ion-align-items-center"], ["size", "3", 1, "ion-text-center", "ion-no-padding"], ["size", "12", 1, "ion-no-padding"], ["name", "person-circle", "color", "secondary", 1, "player-indicator-icon"], ["size", "7", 1, "left-border", "ion-no-padding"], [1, "ion-no-padding"], ["size", "4", "class", "ion-no-padding", 4, "ngFor", "ngForOf"], ["size", "2", 1, "ion-no-padding"], ["shape", "round", 1, "add-buttons", 3, "color", "click"], ["name", "add", 1, "add-icons"], ["size", "4", 1, "ion-no-padding"], ["shape", "round", 1, "player-buttons", 3, "color", "click"], ["name", "person", "slot", "icon-only", 1, "player-icons"]], template: function PlayerNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerNumberComponent_ion_col_14_Template, 3, 1, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerNumberComponent_Template_ion_button_click_16_listener() { return ctx.onClickPlusPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.numPlayer, " ", ctx.numPlayer > 1 ? "Giocatori" : "Giocatore", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.numPlayer > ctx.maxPlayerIcon ? "secondary" : "light");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\nion-card[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.left-border[_ngcontent-%COMP%] {\n  border-left-style: solid;\n  border-width: thin;\n  border-color: #eff1f8;\n}\n.orario-black[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: medium;\n  color: black;\n}\n.orario-light[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: medium;\n  color: #9da2b3;\n}\n.player-buttons[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.add-buttons[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.add-icons[_ngcontent-%COMP%] {\n  min-width: 30px;\n}\n.player-icons[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n.player-indicator-icon[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGxheWVyLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRUFBQTtBQUVSO0VBQ0ksdUJBQUE7QUFBSjtBQUdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFDQTtFQUVJLGVBQUE7QUFDSjtBQUVBO0VBRUksWUFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJwbGF5ZXItbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxlZnQtYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogI2VmZjFmODtcclxuICAgIFxyXG59XHJcblxyXG4ub3JhcmlvLWJsYWNrIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9yYXJpby1saWdodCB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogIzlkYTJiMztcclxufVxyXG4ucGxheWVyLWJ1dHRvbnN7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5hZGQtYnV0dG9uc1xyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4uYWRkLWljb25ze1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcbi5wbGF5ZXItaWNvbnNcclxue1xyXG4gICAgbWluLXdpZHRoOjIwcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItaW5kaWNhdG9yLWljb25cclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
var typeIcon;
(function (typeIcon) {
    typeIcon[typeIcon["player"] = 10] = "player";
    typeIcon[typeIcon["add"] = 20] = "add";
})(typeIcon || (typeIcon = {}));


/***/ }),

/***/ "LjOq":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/circular/circular.component.ts ***!
  \******************************************************************/
/*! exports provided: CircularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularComponent", function() { return CircularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

//TODO: componente dichiarato momentaneamente nell'home.module per evitare errori, da rimuovere
class CircularComponent {
    constructor() {
        this.open = false;
    }
    ngOnInit() { }
    switchMenu() {
        this.open = !this.open;
    }
}
CircularComponent.ɵfac = function CircularComponent_Factory(t) { return new (t || CircularComponent)(); };
CircularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircularComponent, selectors: [["app-circular"]], decls: 4, vars: 0, consts: [["id", "cn-button", 1, "cn-button", 3, "click"], [2, "display", "flex", "align-items", "center"]], template: function CircularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircularComponent_Template_button_click_0_listener() { return ctx.switchMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Accedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%] {\n  font-size: 1em;\n  width: 26em;\n  height: 26em;\n  overflow: hidden;\n  position: fixed;\n  z-index: 10;\n  bottom: -13em;\n  left: 50%;\n  border-radius: 50%;\n  margin-left: -13em;\n  transform: scale(0.1);\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .opened-nav[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  pointer-events: auto;\n  transform: scale(1);\n}\n\n.cn-overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 2;\n}\n\n.cn-overlay.on-overlay[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n\n.cn-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n  font-size: 1.8em;\n  padding-bottom: 1em;\n  height: 5em;\n  width: 100%;\n  position: fixed;\n  bottom: -2.5em;\n  border-radius: 80%;\n  cursor: pointer;\n  z-index: 11;\n}\n\n.cn-button-original[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  background-color: #f06060;\n  color: #fff;\n  text-align: center;\n  font-size: 1.8em;\n  padding-bottom: 1em;\n  height: 3.5em;\n  width: 3.5em;\n  position: fixed;\n  left: 50%;\n  margin-left: -1.75em;\n  bottom: -1.75em;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 11;\n}\n\n.cn-button[_ngcontent-%COMP%]:hover, .cn-button[_ngcontent-%COMP%]:active, .cn-button[_ngcontent-%COMP%]:focus {\n  color: #fff;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 1.5em;\n  width: 10em;\n  height: 10em;\n  transform-origin: 100% 100%;\n  overflow: hidden;\n  left: 50%;\n  top: 50%;\n  margin-top: -1.3em;\n  margin-left: -10em;\n  transition: border 0.3s ease;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.18em;\n  height: 14.5em;\n  width: 14.5em;\n  position: absolute;\n  bottom: -7.25em;\n  right: -7.25em;\n  border-radius: 50%;\n  text-decoration: none;\n  color: #fff;\n  padding-top: 1.8em;\n  text-align: center;\n  transform: skew(-50deg) rotate(-70deg) scale(1);\n  -webkit-backface-visibility: hidden;\n  transition: opacity 0.3s, color 0.3s;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  opacity: 0.7;\n}\n\n\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  transform: rotate(-10deg) skew(50deg);\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(30deg) skew(50deg);\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(70deg) skew(50deg);\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(110deg) skew(50deg);\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(150deg) skew(50deg);\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   a[_ngcontent-%COMP%] {\n  background-color: #a11313;\n  background-color: #f44e4e;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   a[_ngcontent-%COMP%] {\n  background-color: #a61414;\n  background-color: #f45757;\n}\n\n\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #b31515;\n  background-color: #f66f6f;\n}\n\n\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover, .csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:active, .csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:focus {\n  background-color: #b31515;\n  background-color: #f66f6f;\n}\n\n.csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:focus {\n  position: fixed;\n}\n\n\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: static;\n  float: left;\n  font-size: 1em;\n  height: 5em;\n  width: 5em;\n  background-color: #eee;\n  text-align: center;\n  line-height: 5em;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  color: inherit;\n  font-size: 1.3em;\n  border-right: 1px solid #ddd;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background-color: white;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #6F325C;\n  color: #fff;\n}\n\n.no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%] {\n  font-size: 1em;\n  height: 5em;\n  width: 25.15em;\n  bottom: 0;\n  margin-left: -12.5em;\n  overflow: hidden;\n  position: fixed;\n  z-index: 10;\n  left: 50%;\n  border: 1px solid #ddd;\n}\n\n@media screen and (max-width: 480px) {\n  .csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%] {\n    font-size: 0.68em;\n  }\n\n  .cn-button[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1.52em;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%] {\n    width: 15.15px;\n    margin-left: -7.5em;\n  }\n\n  .no-csstransforms[_ngcontent-%COMP%]   .cn-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 3em;\n    width: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2lyY3VsYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBSUEscUJBQUE7RUFDQSxvQkFBQTtFQUdBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBSUEsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUdBLHlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFHQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9FO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFVRTs7O0VBSUUsV0FBQTtBQVJKOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBSUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLDRCQUFBO0FBUko7O0FBV0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFJQSwrQ0FBQTtFQUNBLG1DQUFBO0VBR0Esb0NBQUE7QUFSSjs7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdFOzs2RUFBQTs7QUFJQTtFQUlFLHFDQUFBO0FBVEo7O0FBWUU7RUFJRSxvQ0FBQTtBQVRKOztBQVlFO0VBSUUsb0NBQUE7QUFUSjs7QUFZRTtFQUlFLHFDQUFBO0FBVEo7O0FBWUU7RUFJRSxxQ0FBQTtBQVRKOztBQVlFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQVRKOztBQVlFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQVRKOztBQVlFLGlCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQVRKOztBQWFFLGdCQUFBOztBQUNBOzs7RUFHRSx5QkFBQTtFQUNBLHlCQUFBO0FBVko7O0FBWUU7RUFFSSxlQUFBO0FBVk47O0FBY0UsYUFBQTs7QUFDQTtFQUNFLGFBQUE7QUFYSjs7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQVhKOztBQWNFO0VBQ0UsWUFBQTtBQVhKOztBQWNFOzs7RUFHRSx1QkFBQTtBQVhKOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBWEo7O0FBY0U7RUFDRTtJQUNFLGlCQUFBO0VBWEo7O0VBY0U7SUFDRSxjQUFBO0VBWEo7O0VBY0U7SUFDRSxpQkFBQTtFQVhKO0FBQ0Y7O0FBY0U7RUFDRTtJQUNFLGNBQUE7SUFDQSxtQkFBQTtFQVpKOztFQWVFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFaSjtBQUNGIiwiZmlsZSI6ImNpcmN1bGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDI2ZW07XHJcbiAgICBoZWlnaHQ6IDI2ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3R0b206IC0xM2VtO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM2VtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5jc3N0cmFuc2Zvcm1zIC5vcGVuZWQtbmF2IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICBcclxuICAuY24tb3ZlcmxheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLmNuLW92ZXJsYXkub24tb3ZlcmxheSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5jbi1idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgYm90dG9tOiAtMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICB9XHJcbiAgXHJcbiAgLmNuLWJ1dHRvbi1vcmlnaW5hbCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNjA2MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHdpZHRoOiAzLjVlbTtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuNzVlbTtcclxuICAgIGJvdHRvbTogLTEuNzVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNuLWJ1dHRvbjpob3ZlcixcclxuICAuY24tYnV0dG9uOmFjdGl2ZSxcclxuICAuY24tYnV0dG9uOmZvY3VzIHtcclxuICAgIC8vY29sb3I6ICNhYTEwMTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4zZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjE4ZW07XHJcbiAgICBoZWlnaHQ6IDE0LjVlbTtcclxuICAgIHdpZHRoOiAxNC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC03LjI1ZW07XHJcbiAgICByaWdodDogLTcuMjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDEuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTUwZGVnKSByb3RhdGUoLTcwZGVnKSBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNrZXcoLTUwZGVnKSByb3RhdGUoLTcwZGVnKSBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC01MGRlZykgcm90YXRlKC03MGRlZykgc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTUwZGVnKSByb3RhdGUoLTcwZGVnKSBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIGNvbG9yIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGkgYSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGZvciBhIGNlbnRyYWwgYW5nbGUgeCwgdGhlIGxpc3QgaXRlbXMgbXVzdCBiZSBza2V3ZWQgYnkgOTAteCBkZWdyZWVzXHJcbiAgaW4gb3VyIGNhc2UgeD00MGRlZyBzbyBza2V3IGFuZ2xlIGlzIDUwZGVnXHJcbiAgaXRlbXMgc2hvdWxkIGJlIHJvdGF0ZWQgYnkgeCwgbWludXMgKHN1bSBvZiBhbmdsZXMgLSAxODApMnMgKGZvciB0aGlzIGRlbW8pICovXHJcbiAgXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDUwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDUwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDUwZGVnKVxyXG4gIH1cclxuICBcclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDExMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDExMGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaTpudGgtY2hpbGQoNSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZykgc2tldyg1MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIHNrZXcoNTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaTpudGgtY2hpbGQob2RkKSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTEzMTM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDg4JSwgNjMlLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGk6bnRoLWNoaWxkKGV2ZW4pIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2MTQxNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgODglLCA2NSUsIDEpO1xyXG4gIH1cclxuICBcclxuICAvKiBhY3RpdmUgc3R5bGUgKi9cclxuICAuY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaS5hY3RpdmUgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjMxNTE1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCA4OCUsIDcwJSwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIGhvdmVyIHN0eWxlICovXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGk6bm90KC5hY3RpdmUpIGE6aG92ZXIsXHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGk6bm90KC5hY3RpdmUpIGE6YWN0aXZlLFxyXG4gIC5jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpOm5vdCguYWN0aXZlKSBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMzE1MTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDg4JSwgNzAlLCAxKTtcclxuICB9XHJcbiAgLmNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGk6bm90KC5hY3RpdmUpIGE6Zm9jdXNcclxuICB7XHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gIH1cclxuICAgXHJcbiAgXHJcbiAgLyogZmFsbGJhY2sgKi9cclxuICAubm8tY3NzdHJhbnNmb3JtcyAuY24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpIGE6aG92ZXIsXHJcbiAgLm5vLWNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGkgYTphY3RpdmUsXHJcbiAgLm5vLWNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGkgYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLm5vLWNzc3RyYW5zZm9ybXMgLmNuLXdyYXBwZXIgbGkuYWN0aXZlIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZGMzI1QztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAubm8tY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgd2lkdGg6IDI1LjE1ZW07XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyLjVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHtcclxuICAgIC5jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIHtcclxuICAgICAgZm9udC1zaXplOiAuNjhlbTtcclxuICAgIH1cclxuICBcclxuICAgIC5jbi1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICBcclxuICAgIC5jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjUyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAgIC5uby1jc3N0cmFuc2Zvcm1zIC5jbi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDE1LjE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNy41ZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubm8tY3NzdHJhbnNmb3JtcyAuY24td3JhcHBlciBsaSB7XHJcbiAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICB3aWR0aDogM2VtO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "NA+3":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/advertising/advertising.component.ts ***!
  \************************************************************************/
/*! exports provided: AdvertisingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisingComponent", function() { return AdvertisingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdvertisingComponent {
    //TODO: componente dichiarato momentaneamente nell'home.module per evitare errori, da rimuovere
    constructor() { }
    ngOnInit() { }
}
AdvertisingComponent.ɵfac = function AdvertisingComponent_Factory(t) { return new (t || AdvertisingComponent)(); };
AdvertisingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertisingComponent, selectors: [["app-advertising"]], decls: 2, vars: 0, template: function AdvertisingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " advertising works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZlcnRpc2luZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Nzk7":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/centri/centri.component.ts ***!
  \**************************************************************/
/*! exports provided: CentriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentriComponent", function() { return CentriComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/location.model */ "V6dt");
/* harmony import */ var src_app_models_start_configuration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/start-configuration.model */ "OH1o");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CentriComponent_ion_fab_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-fab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentriComponent_ion_fab_2_Template_ion_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r1.onClickPrenota(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PRENOTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CentriComponent {
    constructor() {
        this.location = new src_app_models_location_model__WEBPACK_IMPORTED_MODULE_1__["Location"]();
        this.clickPrenota = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clickLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myStartConfig = new src_app_models_start_configuration_model__WEBPACK_IMPORTED_MODULE_2__["StartConfiguration"]();
    }
    ngOnInit() { }
    onClickFavorite() {
        this.location.FAVORITE = !this.location.FAVORITE;
    }
    // Lancio l'evento di Click di Prenotazione
    onClickPrenota() {
        this.clickPrenota.emit(this.location);
    }
    /**
     * Lancio l'evento di Click per la scheda Location
     */
    onClickLocation(event) {
        this.clickLocation.emit(this.location);
    }
    /**
     * Ritorna il testo dell'indirizzo, in caso non fosse presente
     * ritorna l'etichetta del tipo di società
     */
    getTextIndirizzo() {
        let testo = 'Centro';
        let setStandard = false;
        //Imposto la frase standard
        setStandard = true;
        if (this.location && this.location.INDIRIZZO) {
            if (this.location.INDIRIZZO.length !== 0) {
                setStandard = false;
                testo = this.location.INDIRIZZO;
            }
        }
        if (setStandard) {
            if (this.myStartConfig && this.myStartConfig.gruppo) {
                if (this.myStartConfig.gruppo) {
                    switch (this.myStartConfig.gruppo.TIPOGRUPPO) {
                        case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__["TipoSocieta"].sportiva:
                            testo = 'Centro Sportivo';
                            break;
                        case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_3__["TipoSocieta"].formazione:
                            testo = 'Centro di Formazione';
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return testo;
    }
    getUrlCoverImage() {
        let tipoSocieta;
        let urlImage = '';
        if (this.myStartConfig && this.myStartConfig.gruppo) {
            tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
        }
        urlImage = this.location.getUrlImage(tipoSocieta);
        return urlImage;
    }
}
CentriComponent.ɵfac = function CentriComponent_Factory(t) { return new (t || CentriComponent)(); };
CentriComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentriComponent, selectors: [["app-centri"]], inputs: { location: "location", myStartConfig: "myStartConfig" }, outputs: { clickPrenota: "clickPrenota", clickLocation: "clickLocation" }, decls: 11, vars: 4, consts: [["mode", "ios", "button", "true", 3, "click"], [3, "src"], ["horizontal", "start", "vertical", "top", 4, "ngIf"], ["horizontal", "start", "vertical", "top"], ["color", "danger", 3, "click"], ["slot", "start", "name", "calendar-outline"]], template: function CentriComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentriComponent_Template_ion_card_click_0_listener($event) { ctx.onClickLocation($event); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CentriComponent_ion_fab_2_Template, 4, 0, "ion-fab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getUrlCoverImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location.ENABLEPRENOTAZIONI);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.location.DENOMINAZIONE, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTextIndirizzo());
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], styles: ["ion-card-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 300px;\n  min-width: 300px;\n}\n\nion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: 18px;\n}\n\nion-fab[_ngcontent-%COMP%] {\n  font-size: 16;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2VudHJpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNSOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFGUjs7QUFNQTtFQUNJLGFBQUE7QUFISiIsImZpbGUiOiJjZW50cmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogIDIwMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZmFie1xyXG4gICAgZm9udC1zaXplOiAxNjtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "TOtl":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/campi-scroll/campi-scroll.component.ts ***!
  \**************************************************************************/
/*! exports provided: CampiScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampiScrollComponent", function() { return CampiScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_campo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/campo.model */ "R5r1");
/* harmony import */ var src_app_models_location_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/location.model */ "V6dt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["sliderCampi"];
function CampiScrollComponent_ion_slides_1_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampiScrollComponent_ion_slides_1_ion_slide_2_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const campo_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onChangeCampo(campo_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campo_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fill", ctx_r3.getFill(campo_r4))("color", ctx_r3.getColor(campo_r4))("disabled", !ctx_r3.canChoose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.isSelected(campo_r4) ? "location-outline" : "locate-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campo_r4.DENOMINAZIONE);
} }
function CampiScrollComponent_ion_slides_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slides", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CampiScrollComponent_ion_slides_1_ion_slide_2_Template, 6, 5, "ion-slide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.getSliderOptions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.campiList);
} }
function CampiScrollComponent_div_2_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stai visualizzando le disponibilit\u00E0 di ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " presso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0(in caso di slot occupati ricercare su altre giornate/struttura)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedCampo == null ? null : ctx_r7.selectedCampo.DENOMINAZIONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.selectedLocation == null ? null : ctx_r7.selectedLocation.DENOMINAZIONE, ".");
} }
function CampiScrollComponent_div_2_ion_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " presso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.selectedCampo == null ? null : ctx_r8.selectedCampo.DENOMINAZIONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.selectedLocation == null ? null : ctx_r8.selectedLocation.DENOMINAZIONE, ".");
} }
function CampiScrollComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampiScrollComponent_div_2_Template_ion_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onChangeInfoStyle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CampiScrollComponent_div_2_ion_label_4_Template, 12, 2, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CampiScrollComponent_div_2_ion_label_5_Template, 8, 2, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.styleInfoMessage == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.styleInfoMessage == 2);
} }
class CampiScrollComponent {
    constructor() {
        this.campoChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.styleInfoMessage = 2; //Stile del messaggio visualizzato
        this.sliderOpts1 = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts2 = {
            slidesPerView: 2,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts3 = {
            slidesPerView: 2.5,
            spaceBetween: 0,
            initialSlide: 0,
        };
        this.sliderOpts4 = {
            slidesPerView: 3.5,
            spaceBetween: 0,
            initialSlide: 0
        };
    }
    /**
     * A seconda del numero di campi presenti, ritorna le opzioni da impostare
     * @returns
     */
    getSliderOptions() {
        let slidOpt;
        if (this.campiList.length == 1) {
            slidOpt = this.sliderOpts1;
        }
        else if (this.campiList.length == 2) {
            slidOpt = this.sliderOpts2;
        }
        else if (this.campiList.length == 3) {
            slidOpt = this.sliderOpts3;
        }
        else {
            slidOpt = this.sliderOpts3;
        }
        return slidOpt;
    }
    /**
   * Si posiziona sulla Slide richiesta
   * @param indexSlideZeroBased Indice della Slide
   */
    goToSlide(indexSlideZeroBased) {
        if (this.sliderCampi) {
            this.sliderCampi.slideTo(indexSlideZeroBased);
        }
    }
    ngOnInit() {
    }
    /**
     * Scelta di un nuovo campo inviata al chiamante
     * @param newCampo
     */
    onChangeCampo(newCampo) {
        let indexCampo = this.getIndexCampo(newCampo);
        //Posizionamento della Slide sul bottone premuto
        if (indexCampo != -1) {
            this.goToSlide(indexCampo);
        }
        //Emissione evento di cambio campo
        this.campoChanged.emit(newCampo);
    }
    /**
     * Ricerca un campo nell'Array e ne torna l'indice
     * @param myCampo Campo da cercare
     */
    getIndexCampo(myCampo) {
        let myPos = -1;
        if (myCampo) {
            myPos = this.campiList.findIndex(el => {
                return el.ID == myCampo.ID;
            });
        }
        return myPos;
    }
    /**
     * Ritorna il colore da applicare a seconda del campo selezionato
     * @param myCampo Campo da analizzare
     * @returns Colore da applicare al bottone/card
     */
    getColor(myCampo) {
        let myColor = 'primary';
        if (this.selectedCampo && myCampo) {
            if (this.selectedCampo.ID == myCampo.ID) {
                //myColor = 'danger';
                myColor = 'tertiary';
            }
        }
        return myColor;
    }
    /**
     * Ritorna il valore di Fill da applicare a seconda del campo selezionato
     * @param myCampo Campo da analizzare
     * @returns Fill da applicare al bottone/card
     */
    getFill(myCampo) {
        let myFill = 'outline';
        if (this.selectedCampo && myCampo) {
            if (this.selectedCampo.ID == myCampo.ID) {
                myFill = 'solid';
            }
        }
        return myFill;
    }
    /**
     * Ritorna se il campo è selezionato oppure no
     * @param myCampo Campo da controllare
     * @returns TRUE/FALSE
     */
    isSelected(myCampo) {
        let isSel = false;
        if (this.selectedCampo && myCampo) {
            if (this.selectedCampo.ID == myCampo.ID) {
                isSel = true;
            }
        }
        return isSel;
    }
    /**
     * Cambia la modalità del messaggio informativo
     */
    onChangeInfoStyle() {
        if (this.styleInfoMessage == 1) {
            this.styleInfoMessage = 2;
        }
        else {
            this.styleInfoMessage = 1;
        }
    }
}
CampiScrollComponent.ɵfac = function CampiScrollComponent_Factory(t) { return new (t || CampiScrollComponent)(); };
CampiScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampiScrollComponent, selectors: [["app-campi-scroll"]], viewQuery: function CampiScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderCampi = _t.first);
    } }, inputs: { selectedCampo: "selectedCampo", campiList: "campiList", selectedLocation: "selectedLocation", canChoose: "canChoose" }, outputs: { campoChanged: "campoChanged" }, decls: 3, vars: 2, consts: [[1, "slideCampi"], ["class", "ion-text-center", 3, "options", 4, "ngIf"], [4, "ngIf"], [1, "ion-text-center", 3, "options"], ["sliderCampi", ""], [4, "ngFor", "ngForOf"], ["expand", "block", "size", "large", "shape", "round", "mode", "ios", 3, "fill", "color", "disabled", "click"], ["slot", "start", 3, "name"], [1, "ion-text-wrap"], [1, "list-nopadding"], ["lines", "none", "color", "tertiary", "type", "header", 3, "click"], ["slot", "start", "name", "information-circle-outline"], ["class", "ion-text-wrap ion-padding-start", 4, "ngIf"], [1, "ion-text-wrap", "ion-padding-start"], [2, "font-size", "small"]], template: function CampiScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CampiScrollComponent_ion_slides_1_Template, 3, 2, "ion-slides", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CampiScrollComponent_div_2_Template, 6, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campiList.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCampo && ctx.selectedLocation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"]], styles: ["ion-button[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.list-nopadding[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FtcGktc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY2FtcGktc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubGlzdC1ub3BhZGRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4vLyBcdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4vLyBcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbi8vIFx0LW8tdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4vLyBcdHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuLy8gfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "UWV4":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic-native/chooser/__ivy_ngcc__/ngx/index.js ***!
  \**********************************************************************/
/*! exports provided: Chooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chooser", function() { return Chooser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var Chooser = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (accept) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFile", {}, arguments); };
    Chooser.prototype.getFileMetadata = function (accept) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFileMetadata", {}, arguments); };
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
Chooser.ɵfac = function Chooser_Factory(t) { return ɵChooser_BaseFactory(t || Chooser); };
Chooser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Chooser, factory: function (t) { return Chooser.ɵfac(t); } });
var ɵChooser_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Chooser);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Chooser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Chooser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2hvb3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7SUFxRDZCLDJCQUFpQjs7OztJQVE1Qyx5QkFBTyxhQUFDLE1BQWU7SUFXdkIsaUNBQWUsYUFBQyxNQUFlOzs7OzsyQ0FJME07MkNBeEIxTyxVQUFVOzs7OzswQkFDTDtrQkF2RE47RUF1RDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XG4gIGRhdGE/OiBVaW50OEFycmF5O1xuICBkYXRhVVJJPzogc3RyaW5nO1xuICBtZWRpYVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBDaG9vc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZpbGUgY2hvb3NlciBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxuICogYGBgeG1sXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICA8ZWRpdC1jb25maWdcbiAqICAgIGZpbGU9XCJhcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbFwiXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XG4gKiAgICA8YXBwbGljYXRpb24gYW5kcm9pZDpsYXJnZUhlYXA9XCJ0cnVlXCIgLz5cbiAqICA8L2VkaXQtY29uZmlnPlxuICogPC9wbGF0Zm9ybT5cbiAqIGBgYFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2hvb3Nlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZSgpXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENob29zZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXB0XSBPcHRpb25hbCBNSU1FIHR5cGUgZmlsdGVyIChlLmcuICdpbWFnZS9naWYsdmlkZW8vKicpLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3MgcmF3IGJpbmFyeSBkYXRhLFxuICAgKiBiYXNlNjQtZW5jb2RlZCBkYXRhOiBVUkksIE1JTUUgdHlwZSwgZGlzcGxheSBuYW1lLCBhbmQgb3JpZ2luYWwgVVJJLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRGaWxlKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogRGlzcGxheXMgbmF0aXZlIHByb21wdCBmb3IgdXNlciB0byBzZWxlY3QgYSBmaWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2VwdF0gT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSBjb250YWluaW5nIHNlbGVjdGVkIGZpbGUncyBNSU1FIHR5cGUsIGRpc3BsYXkgbmFtZSwgYW5kIG9yaWdpbmFsIFVSSS5cbiAgICogSWYgdXNlciBjYW5jZWxzLCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgYXMgdW5kZWZpbmVkLlxuICAgKiBJZiBlcnJvciBvY2N1cnMsIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZU1ldGFkYXRhKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "badR":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/card-course/card-course.component.ts ***!
  \************************************************************************/
/*! exports provided: CardCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCourseComponent", function() { return CardCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_corso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/corso.model */ "F/re");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/start.service */ "EXUU");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CardCourseComponent_ion_fab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-fab", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardCourseComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const giorno_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fill", giorno_r7.selected ? "solid" : "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, giorno_r7.xsLabel), " ");
} }
function CardCourseComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.myCorso.NUMEROLEZIONI, " ", ctx_r2.myCorso.NUMEROLEZIONI > 1 ? "Incontri " : "Incontro ", "");
} }
function CardCourseComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inizia il ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.myCorso.DATAINIZIO, "dd/MM/yyyy"), "");
} }
function CardCourseComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Termina il ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r4.myCorso.DATAFINE, "dd/MM/yyyy"), "");
} }
function CardCourseComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Concluso il ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.myCorso.DATAFINE, "dd/MM/yyyy"), "");
} }
function CardCourseComponent_ion_row_49_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardCourseComponent_ion_row_49_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onClickIscrizione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Iscriviti adesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardCourseComponent_ion_row_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCourseComponent_ion_row_49_ion_button_2_Template, 2, 0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showIscrizioniButton());
} }
class CardCourseComponent {
    constructor(startService) {
        this.startService = startService;
        this.myCorso = new _models_corso_model__WEBPACK_IMPORTED_MODULE_1__["Corso"]();
        //Se impostato a TRUE significa che nell'area sono abilitate le iscrizioni con l'app
        //e quindi controllare se è possibile iscriversi con le date ed
        //enfatizzare la scheda con un colore speciale
        this.useIscrizioniColor = false;
        this.clickDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clickIscrizione = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconColor = 'primary';
    }
    ngOnInit() {
    }
    /**
     * Indica se mostrare il pulsante delle Iscrizioni
     */
    showIscrizioniButton() {
        let show = false;
        if (this.myCorso) {
            if (this.useIscrizioniColor && this.myCorso.flagIscrizioniAperte()) {
                show = true;
            }
        }
        return show;
    }
    /**
    * Emetto un evento per il pulsante di Iscrizione
     */
    onClickIscrizione() {
        //Emetto l'evento per segnalare la richiesta di Iscrizione
        this.clickIscrizione.emit(this.myCorso);
    }
    /**
     * Torna l'eventuale classe speciale da applicare
     */
    getClassHeader() {
        let myClass = '';
        if (this.myCorso) {
            if (this.useIscrizioniColor && this.myCorso.flagIscrizioniAperte()) {
                myClass = 'special';
            }
        }
        return myClass;
    }
    /**
     * Indica se mostrare o no il Bollino Prova
     * @returns TRUE/FALSE
     */
    showFabProva() {
        let show = false;
        if (this.myCorso && this.myCorso.TIPO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TipoCorso"].prova) {
            show = true;
        }
        return show;
    }
    getLabelTargetSesso() {
        let toDecode = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TargetSesso"].maschileFemminile;
        let label = '';
        if (this.myCorso.TARGETSESSO) {
            toDecode = this.myCorso.TARGETSESSO;
        }
        label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["TargetSesso"], toDecode);
        return label;
    }
    goToDetail() {
        //Emetto l'evento per andare al dettaglio corso
        this.clickDetail.emit(this.myCorso);
    }
    /**
     * Dato un oggetto corso, ritorna la stringa dell'icona corrispondente
     * @param corso L'oggetto corso
     */
    getSportIcon(corso) {
        if (corso) {
            return this.startService.getSportIcon(corso.IDSPORT);
        }
    }
}
CardCourseComponent.ɵfac = function CardCourseComponent_Factory(t) { return new (t || CardCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_start_service__WEBPACK_IMPORTED_MODULE_3__["StartService"])); };
CardCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCourseComponent, selectors: [["app-card-course"]], inputs: { myCorso: "myCorso", useIscrizioniColor: "useIscrizioniColor" }, outputs: { clickDetail: "clickDetail", clickIscrizione: "clickIscrizione" }, decls: 50, vars: 23, consts: [["button", "", 1, "ion-no-margin", "ion-margin-horizontal", 3, "click"], [3, "ngClass"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], [1, "ion-no-padding"], [1, "ion-no-padding", "ion-align-items-center"], ["size", "2", 1, "ion-no-padding"], [1, "icon-sport"], [3, "innerHTML"], ["size", "10", 1, "ion-no-padding"], ["size", "6", "size-sm", "6"], ["size", "small", "color", "primary", "expand", "block", "fill", "outline"], ["name", "time", "slot", "start"], ["name", "infinite", "slot", "start"], [1, "div-giornate", "ion-text-center"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], ["class", "contentLezioni ion-margin-horizontal", 4, "ngIf"], ["name", "stats-chart-outline", "slot", "start", 3, "color"], ["name", "bookmark-outline", "slot", "start", 3, "color"], ["lines", "none"], ["name", "transgender-outline", "slot", "start", 3, "color"], ["size", "12", "size-sm", "12"], ["class", "footer", 4, "ngIf"], [4, "ngIf"], ["vertical", "top", "horizontal", "end"], ["color", "danger"], ["color", "secondary", "size", "small", 3, "fill"], [1, "contentLezioni", "ion-margin-horizontal"], [1, "footer"], ["color", "success", "fill", "solid", "expand", "block", 3, "click", 4, "ngIf"], ["color", "success", "fill", "solid", "expand", "block", 3, "click"]], template: function CardCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardCourseComponent_Template_ion_card_click_0_listener() { return ctx.goToDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardCourseComponent_ion_fab_2_Template, 3, 0, "ion-fab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CardCourseComponent_td_29_Template, 4, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CardCourseComponent_div_30_Template, 4, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-col", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CardCourseComponent_p_46_Template, 3, 4, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CardCourseComponent_p_47_Template, 3, 4, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CardCourseComponent_p_48_Template, 3, 4, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CardCourseComponent_ion_row_49_Template, 3, 1, "ion-row", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getClassHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFabProva());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.getSportIcon(ctx.myCorso), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myCorso["_DENOMINAZIONE_Sport"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myCorso.DENOMINAZIONE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 20, ctx.myCorso.ORAINIZIO, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.myCorso.ORELEZIONE, " ", ctx.myCorso.ORELEZIONE > 1 ? "Ore" : "Ora", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myCorso._SETTIMANA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myCorso.NUMEROLEZIONI);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myCorso["_DENOMINAZIONE_Livello"] ? ctx.myCorso["_DENOMINAZIONE_Livello"] : "Tutti i Livelli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myCorso.IDCATEGORIEETA ? ctx.myCorso["_DESCTOOLTIP_CategoriaEta"] : "Per tutte le et\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getLabelTargetSesso());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "during");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myCorso.tempoCorso() == "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIscrizioniButton());
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFabButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".contentLezioni[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.div-giornate[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 8px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light-alpha);\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light-tint);\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header.special[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success-tint);\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 5px;\n}\n\nion-card[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light-tint);\n  padding: 4px 16px 4px 16px;\n}\n\nion-card[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 5px;\n}\n\nion-card[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success-tint);\n  --color: var(--ion-color-dark);\n  --color-activated: var(--ion-color-dark);\n  font-weight: bold;\n}\n\nion-card[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18;\n  font-weight: 600;\n}\n\ni.icon-sport[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFJQTtFQUNJLHdCQUFBO0FBREo7O0FBSUE7RUFFSSwwQ0FBQTtBQUZKOztBQUlJO0VBQ0kseUNBQUE7QUFGUjs7QUFLSTtFQUNJLDJDQUFBO0FBSFI7O0FBT1E7RUFDSSx3QkFBQTtBQUxaOztBQVNJO0VBRUksNkNBQUE7RUFFQSwwQkFBQTtBQVRSOztBQVlZO0VBQ0ksd0JBQUE7QUFWaEI7O0FBWWdCO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUFWcEI7O0FBY1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVpaOztBQXNCQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxlQUFBO0FBcEJKIiwiZmlsZSI6ImNhcmQtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250ZW50TGV6aW9uaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIFxyXG59XHJcblxyXG4uZGl2LWdpb3JuYXRlIHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgXHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1hbHBoYSk7XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVyLnNwZWNpYWwge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbiAgICB9IFxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tZm9vdGVyIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4IDRweCAxNnB4O1xyXG5cclxuICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiwgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQpOyBcclxuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuaS5pY29uLXNwb3J0XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "bmv8":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/footbooked/footbooked.component.ts ***!
  \**********************************************************************/
/*! exports provided: FootbookedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbookedComponent", function() { return FootbookedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_prenotazionepianificazione_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/prenotazionepianificazione.model */ "FAI+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class FootbookedComponent {
    constructor() {
        this.clickPrenota = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    /** Emette un evento di Click sul pulsante di prenotazione */
    onClickPrenota() {
        this.clickPrenota.emit(this.myPrenotaPianifica);
    }
}
FootbookedComponent.ɵfac = function FootbookedComponent_Factory(t) { return new (t || FootbookedComponent)(); };
FootbookedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FootbookedComponent, selectors: [["app-footbooked"]], inputs: { myPrenotaPianifica: "myPrenotaPianifica" }, outputs: { clickPrenota: "clickPrenota" }, decls: 14, vars: 14, consts: [["color", "tertiary"], ["lines", "none", "detail", "false"], ["slot", "start", "name", "calendar", "color", "tertiary"], ["slot", "end", "color", "tertiary", "expand", "block", "size", "default", 3, "click"]], template: function FootbookedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FootbookedComponent_Template_ion_button_click_12_listener() { return ctx.onClickPrenota(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prenota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx.myPrenotaPianifica == null ? null : ctx.myPrenotaPianifica.DATAORAINIZIO, "EEE dd/MM/yyyy")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" dalle ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx.myPrenotaPianifica == null ? null : ctx.myPrenotaPianifica.DATAORAINIZIO, "HH:mm"), " alle ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, ctx.myPrenotaPianifica == null ? null : ctx.myPrenotaPianifica.DATAORAFINE, "HH:mm"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["ion-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGJvb2tlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rib29rZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "eL7t":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/impegni/impegni.component.ts ***!
  \****************************************************************/
/*! exports provided: ImpegniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpegniComponent", function() { return ImpegniComponent; });
/* harmony import */ var src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/impegno.model */ "M0fm");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class ImpegniComponent {
    constructor() {
        this.impegno = new src_app_models_impegno_model__WEBPACK_IMPORTED_MODULE_0__["Impegno"];
    }
    ngOnInit() {
        if (this.impegno.SETTORE === _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreCorso) {
            this.iconName = 'school';
        }
        else if (this.impegno.SETTORE === _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settorePrenotazione) {
            this.iconName = 'calendar';
        }
        else if (this.impegno.SETTORE === _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["SettoreAttivita"].settoreTorneo) {
            this.iconName = 'medal';
        }
    }
}
ImpegniComponent.ɵfac = function ImpegniComponent_Factory(t) { return new (t || ImpegniComponent)(); };
ImpegniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImpegniComponent, selectors: [["app-impegni"]], inputs: { impegno: "impegno" }, decls: 13, vars: 8, consts: [[1, "ActivityCard", "scroll-item"], [1, "ActivityLabel"], ["lines", "none"], ["slot", "start", "size", "large", "color", "primary", "fill", "outline"], [3, "name"]], template: function ImpegniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.iconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.impegno.DATAORAINIZIO.getHours(), ":", ctx.impegno.DATAORAINIZIO.getMinutes(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 5, ctx.impegno.DATAORAINIZIO, "EEEE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.locationName);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".ActivityCard[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n  --border-radius: 5px;\n}\n\n.ActivityLabel[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1wZWduaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBS0E7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKIiwiZmlsZSI6ImltcGVnbmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQWN0aXZpdHlDYXJkXHJcbntcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59O1xyXG5cclxuLkFjdGl2aXR5TGFiZWxcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "jgPy":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _advertising_advertising_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertising/advertising.component */ "NA+3");
/* harmony import */ var _aperture_aperture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aperture/aperture.component */ "0Xnq");
/* harmony import */ var _button_card_button_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-card/button-card.component */ "Hm2W");
/* harmony import */ var _calendarscroll_calendarscroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendarscroll/calendarscroll.component */ "3U+j");
/* harmony import */ var _card_course_card_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-course/card-course.component */ "badR");
/* harmony import */ var _centri_centri_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./centri/centri.component */ "Nzk7");
/* harmony import */ var _circular_circular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./circular/circular.component */ "LjOq");
/* harmony import */ var _footbooked_footbooked_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footbooked/footbooked.component */ "bmv8");
/* harmony import */ var _hor_timeline_hor_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hor-timeline/hor-timeline.component */ "kwJe");
/* harmony import */ var _impegni_impegni_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./impegni/impegni.component */ "eL7t");
/* harmony import */ var _item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-calendario/item-calendario.component */ "2BDZ");
/* harmony import */ var _news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news-eventi/news-eventi.component */ "nqF+");
/* harmony import */ var _payment_choose_payment_choose_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment-choose/payment-choose.component */ "EuO+");
/* harmony import */ var _player_number_player_number_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./player-number/player-number.component */ "JI/N");
/* harmony import */ var _slottime_slottime_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slottime/slottime.component */ "xaSw");
/* harmony import */ var _sport_scroll_sport_scroll_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sport-scroll/sport-scroll.component */ "/tcz");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./upload/upload.component */ "omi/");
/* harmony import */ var _alert_input_prezzo_alert_input_prezzo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./alert-input-prezzo/alert-input-prezzo.component */ "31Zp");
/* harmony import */ var _campi_scroll_campi_scroll_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./campi-scroll/campi-scroll.component */ "TOtl");
/* harmony import */ var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../directives/hide-header.directive */ "05dH");
/* harmony import */ var _payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-mode/payment-mode.component */ "wyWT");
/* harmony import */ var _settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settimana-block/settimana-block.component */ "GYAn");
/* harmony import */ var _level_setter_level_setter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./level-setter/level-setter.component */ "1hMp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");



























/**
 * Questo modulo, come quello delle pipes, dichiara tutti i componenti e li esporta;
 * è possibile importarlo in altri moduli per utilizzare i componenti all'interno degli stessi
 */
class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_advertising_advertising_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisingComponent"],
        _aperture_aperture_component__WEBPACK_IMPORTED_MODULE_4__["ApertureComponent"],
        _button_card_button_card_component__WEBPACK_IMPORTED_MODULE_5__["ButtonCardComponent"],
        _calendarscroll_calendarscroll_component__WEBPACK_IMPORTED_MODULE_6__["CalendarscrollComponent"],
        _card_course_card_course_component__WEBPACK_IMPORTED_MODULE_7__["CardCourseComponent"],
        _centri_centri_component__WEBPACK_IMPORTED_MODULE_8__["CentriComponent"],
        _circular_circular_component__WEBPACK_IMPORTED_MODULE_9__["CircularComponent"],
        _footbooked_footbooked_component__WEBPACK_IMPORTED_MODULE_10__["FootbookedComponent"],
        _hor_timeline_hor_timeline_component__WEBPACK_IMPORTED_MODULE_11__["HorTimelineComponent"],
        _impegni_impegni_component__WEBPACK_IMPORTED_MODULE_12__["ImpegniComponent"],
        _item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_13__["ItemCalendarioComponent"],
        _news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_14__["NewsEventiComponent"],
        _payment_choose_payment_choose_component__WEBPACK_IMPORTED_MODULE_15__["PaymentChooseComponent"],
        _payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_23__["PaymentModeComponent"],
        _player_number_player_number_component__WEBPACK_IMPORTED_MODULE_16__["PlayerNumberComponent"],
        _slottime_slottime_component__WEBPACK_IMPORTED_MODULE_17__["SlottimeComponent"],
        _sport_scroll_sport_scroll_component__WEBPACK_IMPORTED_MODULE_18__["SportScrollComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_19__["UploadComponent"],
        _alert_input_prezzo_alert_input_prezzo_component__WEBPACK_IMPORTED_MODULE_20__["AlertInputPrezzoComponent"],
        _campi_scroll_campi_scroll_component__WEBPACK_IMPORTED_MODULE_21__["CampiScrollComponent"],
        _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_22__["HideHeaderDirective"],
        _settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_24__["SettimanaBlockComponent"],
        _level_setter_level_setter_component__WEBPACK_IMPORTED_MODULE_25__["LevelSetterComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_advertising_advertising_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisingComponent"],
        _aperture_aperture_component__WEBPACK_IMPORTED_MODULE_4__["ApertureComponent"],
        _button_card_button_card_component__WEBPACK_IMPORTED_MODULE_5__["ButtonCardComponent"],
        _calendarscroll_calendarscroll_component__WEBPACK_IMPORTED_MODULE_6__["CalendarscrollComponent"],
        _card_course_card_course_component__WEBPACK_IMPORTED_MODULE_7__["CardCourseComponent"],
        _centri_centri_component__WEBPACK_IMPORTED_MODULE_8__["CentriComponent"],
        _circular_circular_component__WEBPACK_IMPORTED_MODULE_9__["CircularComponent"],
        _footbooked_footbooked_component__WEBPACK_IMPORTED_MODULE_10__["FootbookedComponent"],
        _hor_timeline_hor_timeline_component__WEBPACK_IMPORTED_MODULE_11__["HorTimelineComponent"],
        _impegni_impegni_component__WEBPACK_IMPORTED_MODULE_12__["ImpegniComponent"],
        _item_calendario_item_calendario_component__WEBPACK_IMPORTED_MODULE_13__["ItemCalendarioComponent"],
        _news_eventi_news_eventi_component__WEBPACK_IMPORTED_MODULE_14__["NewsEventiComponent"],
        _payment_choose_payment_choose_component__WEBPACK_IMPORTED_MODULE_15__["PaymentChooseComponent"],
        _payment_mode_payment_mode_component__WEBPACK_IMPORTED_MODULE_23__["PaymentModeComponent"],
        _player_number_player_number_component__WEBPACK_IMPORTED_MODULE_16__["PlayerNumberComponent"],
        _slottime_slottime_component__WEBPACK_IMPORTED_MODULE_17__["SlottimeComponent"],
        _sport_scroll_sport_scroll_component__WEBPACK_IMPORTED_MODULE_18__["SportScrollComponent"],
        _alert_input_prezzo_alert_input_prezzo_component__WEBPACK_IMPORTED_MODULE_20__["AlertInputPrezzoComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_19__["UploadComponent"],
        _campi_scroll_campi_scroll_component__WEBPACK_IMPORTED_MODULE_21__["CampiScrollComponent"],
        _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_22__["HideHeaderDirective"],
        _settimana_block_settimana_block_component__WEBPACK_IMPORTED_MODULE_24__["SettimanaBlockComponent"],
        _level_setter_level_setter_component__WEBPACK_IMPORTED_MODULE_25__["LevelSetterComponent"]] }); })();


/***/ }),

/***/ "kwJe":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/hor-timeline/hor-timeline.component.ts ***!
  \**************************************************************************/
/*! exports provided: HorTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorTimelineComponent", function() { return HorTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HorTimelineComponent {
    constructor() { }
    ngOnInit() { }
}
HorTimelineComponent.ɵfac = function HorTimelineComponent_Factory(t) { return new (t || HorTimelineComponent)(); };
HorTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorTimelineComponent, selectors: [["app-hor-timeline"]], decls: 2, vars: 0, template: function HorTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " hor-timeline works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ItdGltZWxpbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "nqF+":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/news-eventi/news-eventi.component.ts ***!
  \************************************************************************/
/*! exports provided: NewsEventiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEventiComponent", function() { return NewsEventiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/newsevento.model */ "h27B");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NewsEventiComponent_ion_thumbnail_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-thumbnail", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.myNews.LINKIMAGE);
} }
function NewsEventiComponent_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.myNews._NAMEICON)("color", ctx_r1.myNews._COLOR);
} }
function NewsEventiComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.myNews.SUBTITLE, " ");
} }
function NewsEventiComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r3.myNews.PUBBLICATADAL, "dd/MM/yyyy"));
} }
class NewsEventiComponent {
    constructor() {
        this.myNews = new src_app_models_newsevento_model__WEBPACK_IMPORTED_MODULE_1__["NewsEvento"]();
        this.clickNews = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    /**
     * Emetto l'evento di click
     */
    onClickNews() {
        this.clickNews.emit(this.myNews);
    }
}
NewsEventiComponent.ɵfac = function NewsEventiComponent_Factory(t) { return new (t || NewsEventiComponent)(); };
NewsEventiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsEventiComponent, selectors: [["app-news-eventi"]], inputs: { myNews: "myNews" }, outputs: { clickNews: "clickNews" }, decls: 9, vars: 6, consts: [["lines", "none", 3, "button", "click"], ["slot", "start", 4, "ngIf"], ["slot", "start", 3, "name", "color", 4, "ngIf"], [1, "ion-text-wrap"], ["class", "ion-text-wrap", 4, "ngIf"], ["color", "medium", "class", "ion-text-right ion-padding-horizontal", 4, "ngIf"], ["slot", "start"], [3, "src"], ["slot", "start", 3, "name", "color"], ["color", "medium", 1, "ion-text-right", "ion-padding-horizontal"]], template: function NewsEventiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsEventiComponent_Template_ion_item_click_1_listener() { return ctx.onClickNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsEventiComponent_ion_thumbnail_2_Template, 2, 1, "ion-thumbnail", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsEventiComponent_ion_icon_3_Template, 1, 2, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsEventiComponent_p_7_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewsEventiComponent_p_8_Template, 4, 4, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button", !ctx.myNews.do_inserted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myNews.LINKIMAGE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myNews.LINKIMAGE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.myNews.TITLE, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myNews.SUBTITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myNews.PUBBLICATADAL);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWV2ZW50aS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "omi/":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/upload/upload.component.ts ***!
  \**************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/tipodocumentazione.model */ "ci2e");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "UWV4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_documentazione_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/documentazione.model */ "PVTr");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function UploadComponent_ion_item_group_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Carica da");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-radio-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UploadComponent_ion_item_group_11_Template_ion_radio_group_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.sorgenteFile = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cartella Documenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-radio", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Photo Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-radio", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.sorgenteFile);
} }
function UploadComponent_ion_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Scegli una tipologia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UploadComponent_ion_item_30_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Fai clic e scegli il file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UploadComponent_ion_item_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadComponent_ion_item_30_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.onDesktopSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UploadComponent_ion_item_30_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.onChangedDesktopFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UploadComponent_ion_item_30_ion_label_3_Template, 2, 0, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.loadedDesktopFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.fileNameShow);
} }
function UploadComponent_ion_item_31_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Scegli il file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UploadComponent_ion_item_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadComponent_ion_item_31_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.onMobileSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UploadComponent_ion_item_31_ion_label_2_Template, 2, 0, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.fileLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.fileNameShow, " ");
} }
const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
class UploadComponent {
    constructor(chooser, toastController, pickerController, modalController) {
        this.chooser = chooser;
        this.toastController = toastController;
        this.pickerController = pickerController;
        this.modalController = modalController;
        //File caricato
        this.fileLoaded = false;
        //Nome File da mostrare
        this.fileNameShow = '';
        //Sorgente da cui caricare il file
        this.sorgenteFile = src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["SorgenteFile"].photoGallery;
        //Descrizione opzionale del documento
        this.docDescription = '';
    }
    ngOnInit() {
    }
    //#region EVENTI DI SEARCH FILE
    /**
     * Evento Click per la scelta di un file in versione Mobile
     */
    onMobileSearch() {
        //Sorgente FileSystem uso il Chooser
        if (this.sorgenteFile == src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["SorgenteFile"].filesystem) {
            //Caricamento con il metodo File
            this.chooser.getFile()
                .then(file => {
                //Questo è il file caricato
                this.loadedMobileFile = file;
                this.fileLoaded = true;
                this.fileNameShow = this.loadedMobileFile.name;
            })
                .catch((error) => {
                this.loadedMobileFile = null;
                this.fileLoaded = false;
                this.fileNameShow = '';
                console.error(error);
            });
        }
        else if (this.sorgenteFile == src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["SorgenteFile"].photoGallery) {
            //Utilizzo la Gallery/Fotocamera
            //Devo aprire la fotocamera sulla gallery
            Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].DataUrl,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Prompt,
                quality: 100
            })
                .then((data) => {
                //Questo è il file caricato
                this.loadedMobilePhoto = data;
                this.fileLoaded = true;
                this.fileNameShow = 'Immagine ' + this.loadedMobilePhoto.format;
            })
                .catch(error => {
                //Questo è il file caricato
                this.loadedMobilePhoto = null;
                this.fileLoaded = false;
                this.fileNameShow = '';
                this.showMessage('Errore apertura Photo Gallery');
            });
        }
    }
    /**
     * Evento Click dell'Item riferito alla ricerca File Desktop
     */
    onDesktopSearch() {
        let myInput = document.getElementById('myInput');
        myInput.click();
    }
    /**
     * Evento generato dal TAG INPUT al cambio di File
     * @param event
     */
    onChangedDesktopFile(event) {
        let myFile;
        if (event.target.files && event.target.files.length != 0) {
            myFile = event.target.files[0];
            this.loadedDesktopFile = myFile;
            this.fileLoaded = true;
            this.fileNameShow = this.loadedDesktopFile.name;
        }
        else {
            this.loadedDesktopFile = null;
            this.fileLoaded = false;
            this.fileNameShow = '';
        }
    }
    //#endregion
    //#region VISUALIZZAZIONE MESSAGGI / PICKER
    /**
     * Mostra un Message Toast
     * @param message Messaggio
     */
    showMessage(message) {
        this.toastController.create({
            message: message,
            duration: 3000
        })
            .then(elToast => {
            elToast.present();
        });
    }
    /**
     * Mostra il Picker per la scelta della tipologia documento
     */
    showPicker() {
        let pickerOptions = [];
        this.docTypeList.forEach(docType => {
            let option = {
                text: docType.DENOMINAZIONE,
                value: docType
            };
            pickerOptions.push(option);
        });
        this.pickerController.create({
            columns: [
                {
                    name: 'tipo',
                    options: pickerOptions
                }
            ],
            buttons: [
                {
                    text: 'Annulla',
                    role: 'cancel',
                },
                {
                    text: 'Conferma',
                    handler: (data) => {
                        this.selectedDocType = data.tipo.value;
                    }
                }
            ]
        })
            .then(elPicker => {
            elPicker.present();
        });
    }
    //#endregion
    /**
     * Converte un Blob in un dataUrl string
     * @param blob Blob da convertire
     * @returns
     */
    convertBlobToDataUrl(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result.toString());
            };
            reader.readAsDataURL(blob);
        });
        //ALTRO ESEMPIO CHE FORSE USAVO PRIMA  
        //@ts-ignore 
        // this.loadedDesktopFile.arrayBuffer().then(blob => {
        //   console.log(blob);
        //   //IMPORTANTE! QUESTO CONVERTE UN ARRAYBUFFER (BLOB) IN BASE64
        //   //TEST 1
        //   //let base64 = btoa(String.fromCharCode(...new Uint8Array(blob)));
        //   //FINE TEST 1
        //   //TEST 2
        //   //const uint8Array = new Uint8Array(blob);
        //   //const base64 = uint8Array.reduce((acc, i) => acc += String.fromCharCode.apply(null, [i]), '');
        //   //console.log(base64);
        //   // FINE TEST 2
        // })    
    }
    //#region EVENTI DI INVIO
    /**
     * Evento Click di Interfaccia per il caricamento
     */
    onClickCarica() {
        //File non caricato
        if (!this.fileLoaded) {
            this.showMessage('Prima scegli il documento');
        }
        else if (!this.selectedDocType) {
            //Tipologia non selezionata
            this.showMessage('Scegli una tipologia di documento');
        }
        else {
            //Possiamo procedere al caricamento
            this.SendFileDocumentToParent();
        }
    }
    /**
     * Crea e ritorna il DataUrl da inviare al server
     */
    prepareDataUrl() {
        let myDataUrl;
        return new Promise((resolve, reject) => {
            //File Desktop
            if (this.loadedDesktopFile) {
                //Effettuo la conversione 
                this.convertBlobToDataUrl(this.loadedDesktopFile)
                    .then(strDataUrl => {
                    myDataUrl = strDataUrl;
                    resolve(myDataUrl);
                })
                    .catch(error => {
                    reject(error);
                });
            }
            else if (this.loadedMobilePhoto) {
                myDataUrl = this.loadedMobilePhoto.dataUrl;
                if (myDataUrl.length != 0) {
                    resolve(myDataUrl);
                }
                else {
                    reject('No base 64 founded');
                }
            }
            else if (this.loadedMobileFile) {
                resolve(this.loadedMobileFile.dataURI);
            }
        });
    }
    /**
     * Prepara un documento InvioDocumentazione e
     * lo ritorna alla pagina chiamante
     */
    SendFileDocumentToParent() {
        this.prepareDataUrl()
            .then(dataUrl => {
            //abbiamo tutto, posso creare l'oggetto da ritornare, e chiudere
            let myDocument = new src_app_models_documentazione_model__WEBPACK_IMPORTED_MODULE_3__["InvioDocumentazione"];
            myDocument.FILE = dataUrl;
            myDocument.IDTIPODOCUMENTAZIONE = this.selectedDocType.ID;
            myDocument.DESCRIZIONE = this.docDescription;
            this.modalController.dismiss(myDocument);
        })
            .catch(error => {
            this.showMessage('Si sono verificati errori');
        });
    }
    /**
     * Chiusura modale senza parametri
     */
    close() {
        this.modalController.dismiss();
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__["Chooser"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], inputs: { isDesktop: "isDesktop", docTypeList: "docTypeList" }, decls: 36, vars: 6, consts: [["color", "primary"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "icon-container"], ["name", "cloud-upload-outline"], [4, "ngIf"], [1, "ion-margin-vertical"], ["color", "light"], ["button", "", 3, "click"], ["slot", "start", "name", "document-outline"], ["class", "myPlaceholder", 4, "ngIf"], ["slot", "start", "name", "information-circle-outline"], ["placeholder", "Inserisci una descrizione", "maxlength", "50", 3, "ngModel", "ngModelChange"], ["button", "", 3, "click", 4, "ngIf"], ["expand", "block", 3, "click"], ["slot", "start", "name", "cloud-upload-outline"], [3, "ngModel", "ngModelChange"], ["slot", "start", "name", "document-text-outline"], ["slot", "end", "value", "file"], ["slot", "start", "name", "camera-outline"], ["slot", "end", "value", "photo"], [1, "myPlaceholder"], ["accept", ".pdf, image/*", "hidden", "", "id", "myInput", "type", "file", 3, "change"], ["slot", "start", "name", "folder-open-outline"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Carica");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadComponent_Template_ion_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, UploadComponent_ion_item_group_11_Template, 16, 1, "ion-item-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-item-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Cosa stai caricando");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadComponent_Template_ion_item_click_17_listener() { return ctx.showPicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UploadComponent_ion_label_19_Template, 2, 0, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_ion_textarea_ngModelChange_24_listener($event) { return ctx.docDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-item-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-item-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Scegli il documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, UploadComponent_ion_item_30_Template, 6, 2, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, UploadComponent_ion_item_31_Template, 4, 2, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UploadComponent_Template_ion_button_click_33_listener() { return ctx.onClickCarica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Carica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedDocType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedDocType ? ctx.selectedDocType.DENOMINAZIONE : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.docDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDesktop);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RadioValueAccessor"]], styles: [".myPlaceholder[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  text-align: center;\n}\n\n.icon-container[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  font-size: 150px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ1IiLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15UGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgPmlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "wyWT":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/payment-mode/payment-mode.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModeComponent", function() { return PaymentModeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/areapaymentsetting.model */ "MO7j");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PaymentModeComponent_ion_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagamento non supportato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentModeComponent_ion_item_1_ion_label_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clicca per altri metodi di pagamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentModeComponent_ion_item_1_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentModeComponent_ion_item_1_ion_label_2_p_3_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedPaymentMode == null ? null : ctx_r2.selectedPaymentMode.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.arPaymentModeList.length > 1);
} }
function PaymentModeComponent_ion_item_1_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Scegli metodo di pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentModeComponent_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentModeComponent_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onOpenChoose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentModeComponent_ion_item_1_ion_label_2_Template, 4, 2, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentModeComponent_ion_item_1_ion_label_3_Template, 2, 0, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.itemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedPaymentMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedPaymentMode);
} }
class PaymentModeComponent {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
        this.arPayment = [];
        this.onPaymentModeChoosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arPaymentModeList = []; //Il contenuto dell'array è al max 3 record (Paga struttura, adesso, bonifico)
    }
    ngOnInit() {
        //Creo una lista con le possibilità
        this.arPaymentModeList = src_app_models_areapaymentsetting_model__WEBPACK_IMPORTED_MODULE_1__["AreaPaymentSetting"].prepareArPaymentMode(this.arPayment);
        this.chooseStartPayment();
    }
    /**
     * Scegli un pagamento da proporre
     * Se presente il metodo elettronico sceglie quello, altrimenti onSite o in ultimo il Bonifico
     */
    chooseStartPayment() {
        if (this.arPaymentModeList) {
            console.log(this.arPaymentModeList);
            if (this.arPaymentModeList.length != 0) {
                //Metto in ordine decrescente
                this.arPaymentModeList.sort((a, b) => b.value - a.value);
                //Se non ho un paga Adesso giro nuovamente in ordine crescente
                if (this.arPaymentModeList[0].value != src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["PaymentMode"].pagaAdesso) {
                    this.arPaymentModeList.sort((a, b) => a.value - b.value);
                }
                //In prima posizione ho il pagamenti che cercavo
                this.arPaymentModeList[0].selected = true;
                //Emetto un evento di modifica e imposto il pagamento selezionato
                this.onChangePaymentSelection(this.arPaymentModeList[0]);
            }
        }
    }
    get itemIcon() {
        let nameIcon = 'cart-outline';
        if (this.selectedPaymentMode) {
            nameIcon = this.selectedPaymentMode.itemIcon;
        }
        return nameIcon;
    }
    /**
     * Apertura delle voci di scelta
     * Mobile: ActionSheet
     * Desktop:
     */
    onOpenChoose() {
        let buttonsArray = [];
        let singleButton;
        if (this.arPaymentModeList) {
            if (this.arPaymentModeList.length !== 0) {
                //Popolo i Bottoni
                for (const iterator of this.arPaymentModeList) {
                    singleButton = {
                        text: iterator.description,
                        icon: iterator.itemIcon,
                        handler: () => {
                            //Cambio metodo pagamento
                            this.onChangePaymentSelection(iterator);
                        }
                    };
                    buttonsArray.push(singleButton);
                }
                //Pulsante Annulla
                singleButton = {
                    text: 'Annulla',
                    icon: 'arrow-undo-sharp',
                    role: 'cancel'
                };
                buttonsArray.push(singleButton);
                this.actionSheetController.create({
                    header: 'Come desideri pagare ?',
                    buttons: buttonsArray
                })
                    .then(elAction => {
                    elAction.present();
                });
            }
        }
    }
    /**
     * Cambio di selezione nel pagamento
     * @param value Nuova selezione
     */
    onChangePaymentSelection(mySelection) {
        //Memorizzo il pagamento
        this.selectedPaymentMode = mySelection;
        //Invio l'informazione al padre
        this.onPaymentModeChoosed.emit(mySelection.value);
    }
}
PaymentModeComponent.ɵfac = function PaymentModeComponent_Factory(t) { return new (t || PaymentModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"])); };
PaymentModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentModeComponent, selectors: [["app-payment-mode"]], inputs: { arPayment: "arPayment" }, outputs: { onPaymentModeChoosed: "onPaymentModeChoosed" }, decls: 2, vars: 2, consts: [["lines", "none", 4, "ngIf"], ["button", "", "lines", "full", 3, "detail", "click", 4, "ngIf"], ["lines", "none"], ["button", "", "lines", "full", 3, "detail", "click"], ["slot", "start", 3, "name"], [4, "ngIf"]], template: function PaymentModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaymentModeComponent_ion_item_0_Template, 3, 0, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentModeComponent_ion_item_1_Template, 4, 4, "ion-item", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arPaymentModeList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arPaymentModeList.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], styles: ["ion-item[_ngcontent-%COMP%] {\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1;\n}\nion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGF5bWVudC1tb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsNkNBQUE7RUFDQSx3QkFBQTtBQUNSO0FBQ1E7RUFDUSxlQUFBO0FBQ2hCIiwiZmlsZSI6InBheW1lbnQtbW9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "xaSw":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/slottime/slottime.component.ts ***!
  \******************************************************************/
/*! exports provided: SlottimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlottimeComponent", function() { return SlottimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_imdb_slottime_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/imdb/slottime.model */ "TORv");
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SlottimeComponent_ion_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.getIconButton());
} }
class SlottimeComponent {
    constructor() {
        this.clickSlot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.captionBtn = ''; //Caption da visualizzare nel bottone
        this.readOnly = false; //Gli slot sono ReadOnly
    }
    ngOnInit() {
    }
    getClassButton() {
        let myClass = '';
        if (this.readOnly) {
            myClass = "slot-read-only";
        }
        else {
            if (this.mySlot.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].occupato) {
                myClass = 'slot-busy';
            }
            else if (this.mySlot.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].chiuso) {
                myClass = "slot-read-only";
            }
            else if (this.mySlot.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].contattare) {
                myClass = "slot-free-contact";
            }
            else {
                // Button utilizzabile
                if (this.mySlot.selected) {
                    myClass = 'slot-selected';
                }
                else {
                    myClass = 'slot-free';
                }
            }
        }
        return myClass;
    }
    getDisableButton() {
        let disable = false;
        if (this.mySlot.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].occupato || this.mySlot.STATO == src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].chiuso || this.readOnly) {
            disable = true;
        }
        return disable;
    }
    getCaptionButton() {
        let caption = '';
        if (!this.readOnly) {
            if (this.mySlot.selected) {
                caption = this.captionBtn;
            }
            else {
                switch (this.mySlot.STATO) {
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].occupato:
                        caption = 'occupato';
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].contattare:
                        caption = 'contattare';
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].chiuso:
                        caption = '';
                        break;
                    default:
                        break;
                }
            }
        }
        return caption;
    }
    /**
     *
     * @returns Nome Icona da visualizzare
     */
    getIconButton() {
        let nameIcon = '';
        if (!this.readOnly) {
            if (this.mySlot.selected) {
                nameIcon = 'checkmark';
            }
            else {
                switch (this.mySlot.STATO) {
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].occupato:
                        nameIcon = 'thumbs-down';
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].contattare:
                        nameIcon = 'call';
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].chiuso:
                        nameIcon = '';
                        break;
                    default:
                        nameIcon = '';
                        break;
                }
            }
        }
        return nameIcon;
    }
    showIconButton() {
        let showIcon = false;
        if (!this.readOnly) {
            if (this.mySlot.selected) {
                showIcon = true;
            }
            else {
                switch (this.mySlot.STATO) {
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].occupato:
                        showIcon = true;
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].contattare:
                        showIcon = true;
                        break;
                    case src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_2__["StatoSlot"].chiuso:
                        showIcon = false;
                        break;
                    default:
                        showIcon = false;
                        break;
                }
            }
        }
        return showIcon;
    }
    /**
     * Emetto un evento di scelta slot
     */
    chooseSlot() {
        this.clickSlot.emit(this.mySlot);
    }
}
SlottimeComponent.ɵfac = function SlottimeComponent_Factory(t) { return new (t || SlottimeComponent)(); };
SlottimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlottimeComponent, selectors: [["app-slottime"]], inputs: { mySlot: "mySlot", captionBtn: "captionBtn", readOnly: "readOnly" }, outputs: { clickSlot: "clickSlot" }, decls: 20, vars: 12, consts: [[1, "ion-align-items-center"], ["size", "2", "size-xs", "3", "id", "col-orari", 1, "ion-no-padding"], [1, "ion-no-margin"], [1, "ion-text-center"], [1, "orario-black"], [1, "orario-light"], ["size-xs", "9", "size", "10", "id", "col-slot", 1, "ion-padding-horizontal"], ["expand", "block", 3, "ngClass", "disabled", "click"], ["slot", "start", 3, "name", 4, "ngIf"], ["slot", "start", 3, "name"]], template: function SlottimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlottimeComponent_Template_ion_button_click_17_listener() { return ctx.chooseSlot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SlottimeComponent_ion_icon_18_Template, 1, 1, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.mySlot.START, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 9, ctx.mySlot.END, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getClassButton())("disabled", ctx.getDisableButton());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIconButton());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getCaptionButton(), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\nion-card[_ngcontent-%COMP%] {\n  background-color: white;\n  min-height: 50px;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n#col-orari[_ngcontent-%COMP%] {\n  border-right-style: solid;\n  border-width: thin;\n  border-color: #eff1f8;\n}\n.orario-black[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: medium;\n  color: black;\n}\n.orario-light[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: medium;\n  color: #9da2b3;\n}\n.slot-busy[_ngcontent-%COMP%] {\n  --background: var(--ion-color-danger);\n  \n}\n.slot-free[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success);\n}\n.slot-free-contact[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success-tint);\n}\n.slot-selected[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n}\n.slot-read-only[_ngcontent-%COMP%] {\n  --background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2xvdHRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFFUjtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBSUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFFSSxxQ0FBQTtFQUNBOzs7Ozs7Ozs7Ozs7O0dBQUE7QUFXSjtBQUtBO0VBRUksc0NBQUE7QUFISjtBQU9BO0VBQ0ksMkNBQUE7QUFKSjtBQU9BO0VBRVEsd0NBQUE7QUFMUjtBQVFBO0VBQ0ksdUJBQUE7QUFMSiIsImZpbGUiOiJzbG90dGltZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiNjb2wtb3Jhcmkge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogI2VmZjFmODtcclxuICAgIFxyXG59XHJcblxyXG4ub3JhcmlvLWJsYWNrIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9yYXJpby1saWdodCB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogIzlkYTJiMztcclxufVxyXG5cclxuLnNsb3QtYnVzeSB7XHJcbiAgICAvL0JhY2tncm91bmQgb2YgdGhlIGJ1dHRvblxyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIC8qXHJcbiAgICAvL0JhY2tncm91bmQgb2YgdGhlIGJ1dHRvbiB3aGVuIHByZXNzZWQuIE5vdGU6IHNldHRpbmcgdGhpcyB3aWxsIGludGVyZmVyZSB3aXRoIHRoZSBNYXRlcmlhbCBEZXNpZ24gcmlwcGxlLlxyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDpcclxuICAgIC8vT3BhY2l0eSBvZiB0aGUgYnV0dG9uIHdoZW4gcHJlc3NlZFxyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OlxyXG4gICAgLy9CYWNrZ3JvdW5kIG9mIHRoZSBidXR0b24gd2hlbiBmb2N1c2VkIHdpdGggdGhlIHRhYiBrZXlcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkXHRcclxuICAgIC8vT3BhY2l0eSBvZiB0aGUgYnV0dG9uIHdoZW4gZm9jdXNlZCB3aXRoIHRoZSB0YWIga2V5XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5XHJcbiAgICAvL0JhY2tncm91bmQgb2YgdGhlIGJ1dHRvbiBvbiBob3ZlclxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyXHRcclxuICAgIC8vT3BhY2l0eSBvZiB0aGUgYmFja2dyb3VuZCBvbiBob3ZlclxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHlcclxuICAgICovXHJcbn1cclxuXHJcbi5zbG90LWZyZWUge1xyXG4gICAgLy9CYWNrZ3JvdW5kIG9mIHRoZSBidXR0b25cclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgLy92YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcclxufVxyXG5cclxuLnNsb3QtZnJlZS1jb250YWN0IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbn1cclxuXHJcbi5zbG90LXNlbGVjdGVkIHtcclxuICAgICAgICAvL0JhY2tncm91bmQgb2YgdGhlIGJ1dHRvblxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5zbG90LXJlYWQtb25seSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=default~documents-documents-module~pages-agenda-agenda-module~pages-agenda-custode-agenda-custode-mo~ba213e12-es2015.js.map