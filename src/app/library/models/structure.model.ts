import {Sport} from '../../models/sport.model';
import {Corso} from '../../models/corso.model';
import { Area } from 'src/app/models/area.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { CampoSport } from 'src/app/models/camposport.model';
import { AperturaLocation } from 'src/app/models/aperturalocation.model';
import { Account } from 'src/app/models/account.model';
import { AreaLink } from 'src/app/models/arealink.model';
import { Campo } from 'src/app/models/campo.model';
import { CategoriaEta } from 'src/app/models/categoriaeta.model';
import { CorsoProgramma } from 'src/app/models/corsoprogramma.model';
import { Livello } from 'src/app/models/livello.model';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { NewsEvento } from 'src/app/models/newsevento.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Utente } from 'src/app/models/utente.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { UtenteLivello } from 'src/app/models/utentelivello.model';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { Impegno } from 'src/app/models/impegno.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { AccountOperationResponse, AccountRequestCode, AccountVerifyCode } from 'src/app/models/accountregistration.model';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';
import { Documentazione } from 'src/app/models/documentazione.model';
import { CorsoPresenze } from 'src/app/models/corsopresenze.model';
import { MasterDocumento } from 'src/app/models/ricevuta.model';
import { Articolo } from 'src/app/models/articolo.model';
import { ArticoloColore } from 'src/app/models/articolocolore.model';
import { ArticoloTaglieMisura } from 'src/app/models/articolotagliemisura.model';
import { UnitaMisura } from 'src/app/models/unitamisura.model';
import { Valuta } from 'src/app/models/valuta.model';









//https://medium.com/@buddhi.amigo/how-to-create-typescript-classes-dynamically-b29ca7767ee5

export const Structure: any = {
    Sport,
    Corso,
    Area,
    AreaLink,
    AreaPaymentSetting,
    Gruppo,
    CampoSport,
    AperturaLocation,
    Account,
    Campo,
    CategoriaEta,
    CorsoProgramma,
    Livello,
    Location, 
    LocationImage,
    NewsEvento,
    PianificazioneCorso,
    Prenotazione,
    PrenotazionePianificazione,
    Utente,
    UtenteIscrizione,
    UtenteLivello,
    UtentePrenotazione,
    Impegno,
    AccountOperationResponse , 
    AccountRequestCode, 
    AccountVerifyCode,
    OccupazioneCampi,
    TipoDocumentazione,
    Documentazione,
    CorsoPresenze,
    MasterDocumento,
    Articolo,
    ArticoloColore,
    ArticoloTaglieMisura,
    Valuta,
    UnitaMisura
}

export class DynamicClass {

    constructor(className: string, opts?: any) {
        if (Structure[className] === undefined || Structure[className] === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new Structure[className](opts);

        
        
    }

    

}