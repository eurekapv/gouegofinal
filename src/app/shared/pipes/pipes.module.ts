import { NgModule } from '@angular/core';
import { LabelGiornoPipe } from './label-giorno.pipe';
import { StrutturaCampoPipe } from './struttura-campo.pipe';
import { TipoCampoPipe } from './tipo-campo.pipe';
import { SettoreAttivitaPipe } from './settore-attivita.pipe';
import { TipoCorsoPipe } from './tipo-corso.pipe';
import { TargetSessoPipe } from './target-sesso.pipe';
import { StatoSlotPipe } from './stato-slot.pipe';
import { StatoPrenotazionePipe } from './stato-prenotazione.pipe';
import { AmbitoNewsPipe } from './ambito-news.pipe';
import { GiorniPrevistiPipe } from './giorni-previsti.pipe';
import { ClasseDocumentoPipe } from './classe-documento.pipe';
import { TipomasterdocumentoPipe } from './tipomasterdocumento.pipe';

@NgModule({
    declarations: [LabelGiornoPipe, 
                   StrutturaCampoPipe, 
                   TipoCampoPipe, 
                   SettoreAttivitaPipe, 
                   TipoCorsoPipe, 
                   TargetSessoPipe, 
                   StatoSlotPipe, 
                   StatoPrenotazionePipe, 
                   AmbitoNewsPipe, 
                   GiorniPrevistiPipe, 
                   ClasseDocumentoPipe, 
                   TipomasterdocumentoPipe],
    imports: [],
    exports: [LabelGiornoPipe, 
              StrutturaCampoPipe, 
              TipoCampoPipe, 
              SettoreAttivitaPipe, 
              TipoCorsoPipe,
              TargetSessoPipe,
              StatoSlotPipe,
              StatoPrenotazionePipe, 
              AmbitoNewsPipe,
              GiorniPrevistiPipe,
              ClasseDocumentoPipe, 
              TipomasterdocumentoPipe]
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