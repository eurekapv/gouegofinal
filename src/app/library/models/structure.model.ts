import {Sport} from '../../models/archivi/sport.model';
import {Corso} from '../../models/corso/corso.model';
import { Area } from 'src/app/models/struttura/area.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { CampoSport } from 'src/app/models/struttura/camposport.model';
import { AperturaLocation } from 'src/app/models/struttura/aperturalocation.model';
import { Account } from 'src/app/models/utente/account.model';
import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { Campo } from 'src/app/models/struttura/campo.model';
import { CategoriaEta } from 'src/app/models/archivi/categoriaeta.model';
import { CorsoProgramma } from 'src/app/models/corso/corsoprogramma.model';
import { Livello } from 'src/app/models/archivi/livello.model';
import { Location } from 'src/app/models/struttura/location.model';
import { LocationImage } from 'src/app/models/struttura/locaton-image.model';
import { NewsEvento } from 'src/app/models/evento/newsevento.model';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { Prenotazione } from 'src/app/models/prenotazioni/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazioni/prenotazionepianificazione.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { UtenteIscrizione } from 'src/app/models/utente/utenteiscrizione.model';
import { UtenteLivello } from 'src/app/models/utente/utentelivello.model';
import { UtentePrenotazione } from 'src/app/models/utente/utenteprenotazione.model';
import { Impegno } from 'src/app/models/utente/impegno.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { AccountOperationResponse, AccountRequestCode, AccountVerifyCode } from 'src/app/models/utente/accountregistration.model';
import { OccupazioneCampi } from 'src/app/models/struttura/occupazionecampi.model';
import { TipoDocumentazione } from 'src/app/models/archivi/tipodocumentazione.model';
import { Documentazione } from 'src/app/models/utente/documentazione.model';
import { CorsoPresenze } from 'src/app/models/corso/corsopresenze.model';
import { MasterDocumento } from 'src/app/models/utente/master-documento.model';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { ArticoloColore } from 'src/app/models/shop/articolocolore.model';
import { ArticoloTaglieMisura } from 'src/app/models/shop/articolotagliemisura.model';
import { UnitaMisura } from 'src/app/models/archivi/unitamisura.model';
import { Valuta } from 'src/app/models/archivi/valuta.model';
import { DataChiusura } from 'src/app/models/struttura/datachiusura.model';
import { CorsoAllegato } from 'src/app/models/corso/corsoallegato.model';
import { TipoPagamento } from 'src/app/models/archivi/tipopagamento.model';
import { TipoTessera } from 'src/app/models/archivi/tipo-tessera';
import { PrenotaTesseramento } from 'src/app/models/prenotazioni/prenota_tesseramento.model';
import { TipoTesseraTemplate } from 'src/app/models/archivi/tipo-tessera-template';
import { Tesseramento } from 'src/app/models/utente/tesseramento';
import { ImpegnoCollaboratore } from 'src/app/models/utente/impegno-collaboratore.model';
import { ImpegnoCustode } from 'src/app/models/utente/impegno-custode.model';
import { Evento } from 'src/app/models/evento/evento.model';
import { TipoEvento } from 'src/app/models/archivi/tipo-evento.model';
import { Authorization } from 'src/app/models/zsupport/authorization.model';
import { EventoPianificazione } from 'src/app/models/evento/evento-pianificazione.model';
import { TipoPagamentoScadenza } from 'src/app/models/archivi/tipo-pagamento-scadenza.model';
import { IscrizioneIncasso } from 'src/app/models/corso/iscrizione-incasso.model';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { DetailCarrello } from 'src/app/models/shop/detail-carrello.model';
import { RiepilogoCarrello } from 'src/app/models/shop/riepilogo-carrello.model';
import { ArticoloScorta } from 'src/app/models/shop/articolo-scorta.model';



//https://medium.com/@buddhi.amigo/how-to-create-typescript-classes-dynamically-b29ca7767ee5

export const Structure: any = {
    Sport,
    Corso,
    Area,
    AreaLink,
    AreaPaymentSetting,
    Authorization,
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
    PrenotaTesseramento,
    Utente,
    UtenteIscrizione,
    UtenteLivello,
    UtentePrenotazione,
    Impegno,
    ImpegnoCollaboratore,
    ImpegnoCustode,
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
    ArticoloScorta,
    Valuta,
    UnitaMisura,
    DataChiusura,
    CorsoAllegato,
    TipoPagamento,
    TipoPagamentoScadenza,
    TipoTessera,
    TipoTesseraTemplate,
    Tesseramento,
    Evento,
    EventoPianificazione,
    TipoEvento,
    IscrizioneCorso,
    IscrizioneIncasso,
    ShopCarrello,
    DetailCarrello,
    RiepilogoCarrello

}

export class DynamicClass {

    constructor(className: string, opts?: any) {
        if (Structure[className] === undefined || Structure[className] === null) {
            throw new Error(`Class type of \'${className}\' is not in the store`);
        }
        return new Structure[className](opts);

        
        
    }

    

}