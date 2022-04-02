(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-course-listcourses-listcourses-module"],{

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-giorno.pipe */ "Tgan");
/* harmony import */ var _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struttura-campo.pipe */ "OOC/");
/* harmony import */ var _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo-campo.pipe */ "Hx3r");
/* harmony import */ var _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settore-attivita.pipe */ "ozjt");
/* harmony import */ var _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tipo-corso.pipe */ "KU5w");
/* harmony import */ var _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target-sesso.pipe */ "ukHt");
/* harmony import */ var _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stato-slot.pipe */ "s17d");
/* harmony import */ var _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stato-prenotazione.pipe */ "YH3n");
/* harmony import */ var _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ambito-news.pipe */ "UfKR");
/* harmony import */ var _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./giorni-previsti.pipe */ "uxXW");
/* harmony import */ var _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classe-documento.pipe */ "YFTx");
/* harmony import */ var _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tipomasterdocumento.pipe */ "xVAv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"],
        _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"],
        _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"],
        _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"],
        _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"],
        _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"],
        _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"],
        _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"],
        _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"],
        _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"],
        _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"],
        _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]], exports: [_label_giorno_pipe__WEBPACK_IMPORTED_MODULE_0__["LabelGiornoPipe"],
        _struttura_campo_pipe__WEBPACK_IMPORTED_MODULE_1__["StrutturaCampoPipe"],
        _tipo_campo_pipe__WEBPACK_IMPORTED_MODULE_2__["TipoCampoPipe"],
        _settore_attivita_pipe__WEBPACK_IMPORTED_MODULE_3__["SettoreAttivitaPipe"],
        _tipo_corso_pipe__WEBPACK_IMPORTED_MODULE_4__["TipoCorsoPipe"],
        _target_sesso_pipe__WEBPACK_IMPORTED_MODULE_5__["TargetSessoPipe"],
        _stato_slot_pipe__WEBPACK_IMPORTED_MODULE_6__["StatoSlotPipe"],
        _stato_prenotazione_pipe__WEBPACK_IMPORTED_MODULE_7__["StatoPrenotazionePipe"],
        _ambito_news_pipe__WEBPACK_IMPORTED_MODULE_8__["AmbitoNewsPipe"],
        _giorni_previsti_pipe__WEBPACK_IMPORTED_MODULE_9__["GiorniPrevistiPipe"],
        _classe_documento_pipe__WEBPACK_IMPORTED_MODULE_10__["ClasseDocumentoPipe"],
        _tipomasterdocumento_pipe__WEBPACK_IMPORTED_MODULE_11__["TipomasterdocumentoPipe"]] }); })();


/***/ }),

/***/ "Hx3r":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/tipo-campo.pipe.ts ***!
  \*************************************************/
/*! exports provided: TipoCampoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCampoPipe", function() { return TipoCampoPipe; });
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TipoCampoPipe {
    transform(value) {
        let label = '';
        label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCampo"], value);
        return label;
    }
}
TipoCampoPipe.ɵfac = function TipoCampoPipe_Factory(t) { return new (t || TipoCampoPipe)(); };
TipoCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tipoCampo", type: TipoCampoPipe, pure: true });


/***/ }),

/***/ "KU5w":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/tipo-corso.pipe.ts ***!
  \*************************************************/
/*! exports provided: TipoCorsoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCorsoPipe", function() { return TipoCorsoPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TipoCorsoPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoCorso"], value);
        return label;
    }
}
TipoCorsoPipe.ɵfac = function TipoCorsoPipe_Factory(t) { return new (t || TipoCorsoPipe)(); };
TipoCorsoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tipoCorso", type: TipoCorsoPipe, pure: true });


/***/ }),

/***/ "OOC/":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/struttura-campo.pipe.ts ***!
  \******************************************************/
/*! exports provided: StrutturaCampoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrutturaCampoPipe", function() { return StrutturaCampoPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StrutturaCampoPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StrutturaCampo"], value);
        return label;
    }
}
StrutturaCampoPipe.ɵfac = function StrutturaCampoPipe_Factory(t) { return new (t || StrutturaCampoPipe)(); };
StrutturaCampoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "strutturaCampo", type: StrutturaCampoPipe, pure: true });


/***/ }),

/***/ "Tgan":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/label-giorno.pipe.ts ***!
  \***************************************************/
/*! exports provided: LabelGiornoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelGiornoPipe", function() { return LabelGiornoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LabelGiornoPipe {
    transform(value) {
        let label = '';
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
}
LabelGiornoPipe.ɵfac = function LabelGiornoPipe_Factory(t) { return new (t || LabelGiornoPipe)(); };
LabelGiornoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "labelGiorno", type: LabelGiornoPipe, pure: true });


/***/ }),

/***/ "UfKR":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/ambito-news.pipe.ts ***!
  \**************************************************/
/*! exports provided: AmbitoNewsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbitoNewsPipe", function() { return AmbitoNewsPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AmbitoNewsPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["AmbitoNews"], value);
        return label;
    }
}
AmbitoNewsPipe.ɵfac = function AmbitoNewsPipe_Factory(t) { return new (t || AmbitoNewsPipe)(); };
AmbitoNewsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "ambitoNews", type: AmbitoNewsPipe, pure: true });


/***/ }),

/***/ "YFTx":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/classe-documento.pipe.ts ***!
  \*******************************************************/
/*! exports provided: ClasseDocumentoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasseDocumentoPipe", function() { return ClasseDocumentoPipe; });
/* harmony import */ var src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/tipodocumentazione.model */ "ci2e");
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ClasseDocumentoPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_1__["ValueList"].decode(src_app_models_tipodocumentazione_model__WEBPACK_IMPORTED_MODULE_0__["ClasseDocumento"], value);
        return label;
    }
}
ClasseDocumentoPipe.ɵfac = function ClasseDocumentoPipe_Factory(t) { return new (t || ClasseDocumentoPipe)(); };
ClasseDocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "classeDocumento", type: ClasseDocumentoPipe, pure: true });


/***/ }),

/***/ "YH3n":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/stato-prenotazione.pipe.ts ***!
  \*********************************************************/
/*! exports provided: StatoPrenotazionePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoPrenotazionePipe", function() { return StatoPrenotazionePipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StatoPrenotazionePipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoPrenotazione"], value);
        return label;
    }
}
StatoPrenotazionePipe.ɵfac = function StatoPrenotazionePipe_Factory(t) { return new (t || StatoPrenotazionePipe)(); };
StatoPrenotazionePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "statoPrenotazione", type: StatoPrenotazionePipe, pure: true });


/***/ }),

/***/ "ozjt":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/settore-attivita.pipe.ts ***!
  \*******************************************************/
/*! exports provided: SettoreAttivitaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettoreAttivitaPipe", function() { return SettoreAttivitaPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SettoreAttivitaPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["SettoreAttivita"], value);
        return label;
    }
}
SettoreAttivitaPipe.ɵfac = function SettoreAttivitaPipe_Factory(t) { return new (t || SettoreAttivitaPipe)(); };
SettoreAttivitaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "settoreAttivita", type: SettoreAttivitaPipe, pure: true });


/***/ }),

/***/ "s17d":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/stato-slot.pipe.ts ***!
  \*************************************************/
/*! exports provided: StatoSlotPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatoSlotPipe", function() { return StatoSlotPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StatoSlotPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["StatoSlot"], value);
        return label;
    }
}
StatoSlotPipe.ɵfac = function StatoSlotPipe_Factory(t) { return new (t || StatoSlotPipe)(); };
StatoSlotPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "statoSlot", type: StatoSlotPipe, pure: true });


/***/ }),

/***/ "ukHt":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/target-sesso.pipe.ts ***!
  \***************************************************/
/*! exports provided: TargetSessoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSessoPipe", function() { return TargetSessoPipe; });
/* harmony import */ var _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TargetSessoPipe {
    transform(value) {
        let label = '';
        label = _models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TargetSesso"], value);
        return label;
    }
}
TargetSessoPipe.ɵfac = function TargetSessoPipe_Factory(t) { return new (t || TargetSessoPipe)(); };
TargetSessoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "targetSesso", type: TargetSessoPipe, pure: true });


/***/ }),

/***/ "uxXW":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/giorni-previsti.pipe.ts ***!
  \******************************************************/
/*! exports provided: GiorniPrevistiPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiorniPrevistiPipe", function() { return GiorniPrevistiPipe; });
/* harmony import */ var src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/settimana.model */ "w48H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GiorniPrevistiPipe {
    //Il Pipe serve a trasformare una sequenza di numeri che rappresentano giorni
    //ad esempio 2;3;4 nel rispettivo stringa Martedi, Mercoledi, Giovedi
    //I giorni previsti sono in versione C# 1 = Dom, 2 Lun, etc
    //Qui li passo in versione JS che sono zero-base
    transform(value, language, ...args) {
        let strDay = '';
        let arGiorni = [];
        let valueReturn = '';
        let smallVersion = false;
        let indexDay = 0;
        if (value !== undefined) {
            if (value.length !== 0) {
                arGiorni = value.split(';');
            }
        }
        if (arGiorni.length !== 0) {
            //Se ho più di 3 giorni chiedo la versione short
            if (arGiorni.length > 3) {
                smallVersion = true;
            }
            //Ciclo sui giorni e li decodifico
            arGiorni.forEach(element => {
                try {
                    indexDay = parseInt(element);
                    indexDay--;
                    if (smallVersion) {
                        strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getsmallLabel(indexDay, language);
                    }
                    else {
                        strDay = src_app_models_settimana_model__WEBPACK_IMPORTED_MODULE_0__["Settimana"].getLabel(indexDay, language);
                    }
                    if (valueReturn.length !== 0) {
                        valueReturn += ', ';
                    }
                    valueReturn += strDay;
                }
                catch (error) {
                    console.log('Error Parse');
                }
            });
        }
        return valueReturn;
    }
}
GiorniPrevistiPipe.ɵfac = function GiorniPrevistiPipe_Factory(t) { return new (t || GiorniPrevistiPipe)(); };
GiorniPrevistiPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "giorniPrevisti", type: GiorniPrevistiPipe, pure: true });


/***/ }),

/***/ "xVAv":
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/tipomasterdocumento.pipe.ts ***!
  \**********************************************************/
/*! exports provided: TipomasterdocumentoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipomasterdocumentoPipe", function() { return TipomasterdocumentoPipe; });
/* harmony import */ var src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/valuelist.model */ "W8X0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TipomasterdocumentoPipe {
    transform(value) {
        let label = '';
        label = src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["ValueList"].decode(src_app_models_valuelist_model__WEBPACK_IMPORTED_MODULE_0__["TipoMasterDocumento"], value);
        return label;
    }
}
TipomasterdocumentoPipe.ɵfac = function TipomasterdocumentoPipe_Factory(t) { return new (t || TipomasterdocumentoPipe)(); };
TipomasterdocumentoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "tipomasterdocumento", type: TipomasterdocumentoPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=pages-location-course-listcourses-listcourses-module-es2015.js.map