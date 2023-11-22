import { TipoVerificaAccount } from "../zsupport/valuelist.model";

export class ParamsVerificaAccount{

    tipoVerifica : TipoVerificaAccount;
    updateDocUtente : boolean;

    constructor() {
        this.tipoVerifica = TipoVerificaAccount.noverifica;
        this.updateDocUtente = false;
    }
}