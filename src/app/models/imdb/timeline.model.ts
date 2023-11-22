import { Time } from '@angular/common';
import { StatoSlot } from '../zsupport/valuelist.model';


export class Timeline {
    private _start: Time;
    private _end: Time;
    private _minutiSlot: number;
    private _lineTime: TimelineElement[];

        
    public get start() : Time {
        return this._start;
    }

    public get end() : Time {
        return this._end;
    }

    public get minutiSlot() : number {
        return this._minutiSlot;
    }


    public get lineTime(): TimelineElement[] {
        return this._lineTime;
    }

    
    
    public set start(v : Time) {
        this._start = v;
    }

    public set end(v : Time) {
        this._end = v;
    }    
    
    public set minutiSlot(v : number) {
        this._minutiSlot = v;
    }    

    
    public set lineTime(v : TimelineElement[]) {
        this._lineTime = v;
    }
    
   


    constructor(start: Time, end: Time, slotMinutes?:number) {
        this._lineTime = [];

        this._start = start;
        this._end = end;
        if (slotMinutes != undefined || slotMinutes != null) {
            this._minutiSlot = slotMinutes;
        }
        else {
            this._minutiSlot = 30;
        }

        this.creaElement();
    }


    public creaElement(): void {

        this._lineTime = [];


    }
}

export class TimelineElement {
    timeStart: Time;
    timeEnd: Time;

    statoCorso: StatoSlot;
    statoPrenotazione: StatoSlot;

    constructor(start: Time, end: Time) {
        this.timeStart = start;
        this.timeEnd = end;

        this.statoCorso = StatoSlot.libero;
        this.statoPrenotazione = StatoSlot.libero;
    }
}