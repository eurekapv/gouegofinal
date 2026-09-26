import { Injectable } from '@angular/core';
import { defer, from, map, Observable } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { StripeIntent } from 'src/app/models/pagamenti/stripe-intent';

@Injectable({
  providedIn: 'root'
})
export class StripeIntentServiceService {

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Richiede elenco degli stripe intent con le chiavi passate
   * @param guidPrimaryKey
   * @param guidSecondaryKey Facoltativa, se non passata non viene filtrata
   * @returns
   */
  requestBy(guidPrimaryKey: string,
            guidSecondaryKey?: string): Observable<StripeIntent[]> {

      let filterDoc: StripeIntent = new StripeIntent(true);
      filterDoc.GUIDPRIMARYKEY = guidPrimaryKey;
      if (guidSecondaryKey) {
        filterDoc.GUIDSECONDARYKEY = guidSecondaryKey;
      }


      //Effettuo la richiesta (parte ad ogni subscribe)
      return defer(() => from(this.docStructureService.requestNew(filterDoc)))
               .pipe(map(listReceived => <StripeIntent[]>listReceived));

  }

}
