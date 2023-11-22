import { IDDocument } from '../../library/models/iddocument.model';
import { TipoSport} from '../zsupport/valuelist.model';
import { Livello } from './livello.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';



export class Sport extends IDDocument {
    
    DENOMINAZIONE:  string;
    TIPOLOGIA:      TipoSport;
    PARTECIPANTI:   number;
    ICONA:          string; // Formato Icon-Sport non Ionic Icon
    LIVELLO:        Livello[]; //Livelli dello sport
    DATACANC:       Date;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        this.LIVELLO = [];
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DENOMINAZIONE',
                    'ICONA'
                    ];
    let arNumber = ['TIPOLOGIA','PARTECIPANTI'];
    let arBoolean = [];
    let arDate = ['DATACANC'];
    let arDateTime =[];
    let arTime = [];
    

    objDescriptor.className = 'Sport';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'SPORT';
    objDescriptor.describeField = 'DENOMINAZIONE';

    
    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addCollection('LIVELLO','Livello', 'IDSPORT');
    
    return objDescriptor;
}    

    

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }

    /**
     * Imposta le collection
     * @param data JSON Received
     */
    setCollection(data:any) {

        this.LIVELLO = [];

        if (data.LIVELLO) {
            this.setCollectionLivello(data.LIVELLO);
        }

    }


    /**
     * Imposta la collection dei Livelli
     * @param data JSON Received
     */
    setCollectionLivello(dataLivello: any) {

        dataLivello.forEach(elLivello => {

            let newLivello = new Livello();
            newLivello.setJSONProperty(dataLivello);

            this.LIVELLO.push(newLivello);

        });
    };

}

/*
    Le icone di tipo Stringa sono icone Sportsfont

    INSTALLARE IL MODULO CON:
    > npm install sportsfont
    
    UTILIZZO HTML
    per inserire le icone usare il tag i con la classe opportuna tra quelle disponibili.

    ESEMPI:
    <i class="icon-soccer"></i>
    Usare Style per modificare Colore o Dimensione
    <i class="icon-soccer" style="font-size:20pt;color:red;"></i>

    Class Possibili:
        icon-cricket
        icon-bicycle
        icon-baseball
        icon-golf
        icon-skiing
        icon-soccer
        icon-swimming
        icon-tennis
        icon-theatre
        icon-football
        icon-basketball-1
        icon-pitch
        icon-badminton
        icon-rowing
        icon-rugby
        icon-archery
        icon-baking
        icon-dance
        icon-bouldering
        icon-canoe
        icon-shooting
        icon-climbing
        icon-bowl
        icon-cycling
        icon-volleyball
        icon-unichallenge
        icon-trampoline
        icon-tabletennis
        icon-squash
        icon-sail
        icon-run
        icon-pool
        icon-goal
        icon-lacrosse
        icon-martial
        icon-hockey
        icon-frisbee
        icon-handball
        icon-fencing
        icon-horse
        icon-netball
        icon-darts
        icon-fulltime
        icon-halftime
        icon-kickoff
        icon-debate
        icon-starttime
        icon-cheerleader
        icon-pokemon
        icon-computer
        icon-boxing
        icon-croquet
        icon-cinema
*/