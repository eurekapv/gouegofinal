export class StripePaymentIntent {

    _id!:           string;
    _clientSecret!: string;
    _amount!:       number;
    _currency!:     string;
    _status!:       string;
    _next_action!:  string;

    constructor() {

    }

    init() {
        this._clientSecret = '';
        this._amount = 0;
        this._id = '';
        this._currency = '';
        this._status = '';
        this._next_action = '';
    }
    
    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }

    public get clientSecret() {
        return this._clientSecret;
    }
    public set clientSecret(value) {
        this._clientSecret = value;
    }

    public get next_action() {
        return this._next_action;
    }
    public set next_action(value) {
        this._next_action = value;
    }

    public get amount() {
        return this._amount;
    }
    public set amount(value) {
        this._amount = value;
    }

    public get currency() {
        return this._currency;
    }
    public set currency(value) {
        this._currency = value;
    }

    public get status() {
        return this._status;
    }
    public set status(value) {
        this._status = value;
    }


    /**
     * Prepara un oggetto Stripe Payment Intent e lo ritorna con i
     * dati presenti in data
     * @param data 
     */
    static prepareDocFrom(data: Object): StripePaymentIntent {
        let docReturn: StripePaymentIntent;

        docReturn = new StripePaymentIntent();
        docReturn.init();
        docReturn.setJSONProperty(data);

        return docReturn;
    }

    /**
     * Imposta le proprietà dell'oggetto con i dati in arrivo
     * @param data 
     */
    setJSONProperty(data: Object) {
        
        if (data) {
            let arKeys = Object.keys(data);

            //Ciclo i nomi di proprietà arrivati
            arKeys.forEach(elNameProp => {
                //Cerco la proprietà privata
                if (this.hasOwnProperty(`_${elNameProp}`)) {
                    this[`_${elNameProp}`] = data[elNameProp];
                }
            })
        }
    }


}