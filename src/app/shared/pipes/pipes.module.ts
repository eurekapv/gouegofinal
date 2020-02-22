import { NgModule } from '@angular/core';
import { LabelGiornoPipe } from './label-giorno.pipe';
import { StrutturaCampoPipe } from './struttura-campo.pipe';
import { TipoCampoPipe } from './tipo-campo.pipe';

@NgModule({
    declarations: [LabelGiornoPipe, StrutturaCampoPipe, TipoCampoPipe],
    imports: [],
    exports: [LabelGiornoPipe, StrutturaCampoPipe, TipoCampoPipe]
})
export class PipesModule{}

/**
 * Questo Modulo serve a includere tutti i Pipes definiti
 * Quindi per ogni nuovo pipe è necessario importarlo qui 
 * e specificarlo in declarations ed exports
 * 
 * NON INCLUDERE NESSUN MODULO IN app.module.ts
 * 
 * Quando serve un pipe usare la 
 * page.module.ts (Il file modulo della pagina dove bisogna usare il pipe)
 * importare il modulo Pipes.Module.ts e aggiungere in ngModel imports PipesModule
 * 
 * Non serve fare riferimento diretto al pipe che si vuole usare
 */