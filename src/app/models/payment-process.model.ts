import { PaymentChannel, PaymentMode } from "./valuelist.model";

  //Documento per la gestione del processo di pagamento
  export class PaymentProcess {

    modePayment: PaymentMode; //Modo del pagamento (OnSite, Bonifico, Elettronico)
    channelPayment : PaymentChannel; //Canale di pagamento (OnSite, Bonifico, o esattamente il tipo elettronico)
    
    //Parametri per eseguire il pagamento
    amount: number; //Valore del pagamento
    currency: string; //Valuta
    description: string; //Descrizione da associare
    
    //Risultato del processo di pagamento
    processResult: boolean; //TRUE quanto il processo del pagamento è concluso
    messageResult: string;
    idElectronicResult : string; //Identificativo della transazione


    constructor(myModePayment: PaymentMode) {

        this.idElectronicResult = '';
        
        //Impostare la modalita di pagamento
        this.modePayment = myModePayment;

        //In caso di pagaStruttura o Bonifico viene subito impostato il canale
         if (myModePayment == PaymentMode.pagaStruttura) {
            this.channelPayment = PaymentChannel.onSite;
            //Processo di pagamento concluso
            this.processResult = true;
         }
         else if (myModePayment == PaymentMode.pagaBonifico) {
             this.channelPayment = PaymentChannel.bonifico;
             //Processo di pagamento concluso
             this.processResult = true;
         }
    }

    

  }