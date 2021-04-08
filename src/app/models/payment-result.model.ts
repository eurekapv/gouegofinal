import { PaymentChannel } from "./valuelist.model";

  
  export class PaymentResult {
    paymentRequestInApp: boolean; //Pagamento con l'App richiesto (Se false pagherà dopo)
    paymentExecuted: boolean;   //Indica se il sistema remoto ha autorizzato il pagamento
    result: boolean;     //Indica se il processo del pagamento è completato (o siamo in attesa)
    message: string;
    private _responseJson: string;
    tipoPagamento : PaymentChannel
    idPagamento : string;
    desktop : boolean; //la modalità di richiesta (desktop o mobile)

    constructor(tipoPagamento? : PaymentChannel, desktop: boolean = false) {

        //recupero la modalità (desktop o mobile)
        this.desktop = desktop;

        //mi salvo anche il tipo di pagamento, così so come fare il parsing del json
        this.tipoPagamento = tipoPagamento;

        
        //se il pagamento non è elettronico, faccio finta che sia già andato a buon fine
        switch (this.tipoPagamento){
            case PaymentChannel.onSite:
            case PaymentChannel.bonifico:
                this.paymentExecuted = true;
                this.result = true;
                this.paymentRequestInApp = false;
                this.message = 'Pagamento in struttura';

            break;
            
            case PaymentChannel.paypal:
                this.paymentExecuted = false;
                this.result = false;
                this.paymentRequestInApp = true;
            break;

            case PaymentChannel.stripe:
                this.paymentExecuted = false;
                this.result = false;
                this.paymentRequestInApp = true;
            break;   
            
            default:
                this.paymentExecuted = false;
                this.result = false;
                this.paymentRequestInApp = false;                
            break;
        }
    }

    decodeResponseJson (response){

        //prima di tutto mi salvo la risposta
        this._responseJson = response;

        //ora, in base a quale metodo di pagamento ho scelto, cerco di interpretare la risposta
        switch (this.tipoPagamento){

            //se è una risposta di paypal
            case PaymentChannel.paypal:
                //se è arrivata una risposta
                if (this._responseJson){
                    if (this.desktop){
                        //siamo su desktop 
                        if (this._responseJson['status']=='COMPLETED'){

                            //la transazione è andata a buon fine
                            this.paymentExecuted = true;
                            this.result = true;
                            this.message = 'Pagamento effettuato';
                            this.idPagamento = this._responseJson['id'];
                        }
                    }
                    else{
                        //siamo su mobile
                        //se è arrivata una risposta corretta
                        if (this._responseJson['response']){
        
                            if (this._responseJson['response']['state']=='approved'){
        
                                //qui so che il pagamento è andato a buon fine
                                this.paymentExecuted = true;
                                this.result = true;
                                this.message = 'Pagamento effettuato';
                                this.idPagamento = this._responseJson['response']['id'];
                            }
                        }

                    }
                }
            break;

        }
    }

  }