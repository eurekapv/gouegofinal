import { IDDocument } from './iddocument.model';

export enum TipoSport {
    gruppo =  10,
    coppia = 20,
    individuale = 30
}

export class Sport extends IDDocument {
    
    DENOMINAZIONE:  string;
    TIPOLOGIA:      TipoSport;
    PARTECIPANTI:   number;
    ICONA:          string; // Formato Icon-Sport non Ionic Icon

    constructor() {
        super();
    }
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