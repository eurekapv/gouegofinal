import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendarscroll',
  templateUrl: './calendarscroll.component.html',
  styleUrls: ['./calendarscroll.component.scss']
})
export class CalendarscrollComponent implements OnInit {

  // Giorno selezionato
  _activeDay: Date = new Date();
  
  // Lista dei giorni da mostrare
  listDay: CalendarDay[] = [];

  @Input() set activeDay(value: Date) {
    this._activeDay = value;
    this.prepareListDays();
  }

  @Output() onChangeActiveDay = new EventEmitter<Date>();

  constructor() {}

  ngOnInit() {
    this.prepareListDays();
  }

  // =====================================================
  // PREPARAZIONE LISTA GIORNI
  // =====================================================
  prepareListDays() {
    this.listDay = [];
    
    const year = this._activeDay.getFullYear();
    const month = this._activeDay.getMonth();
    
    // Calcola il numero di giorni nel mese
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Crea la lista di giorni
    for (let day = 1; day <= daysInMonth; day++) {
      const dateValue = new Date(year, month, day);
      this.listDay.push({
        dateValue: dateValue
      });
    }
  }

  // =====================================================
  // NAVIGAZIONE MESI
  // =====================================================
  goToPreviousMonth() {
    const newDate = new Date(this._activeDay);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(1); // Vai al primo giorno del mese
    this.changeActiveDay(newDate);
  }

  goToNextMonth() {
    const newDate = new Date(this._activeDay);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(1); // Vai al primo giorno del mese
    this.changeActiveDay(newDate);
  }

  // =====================================================
  // CLICK SU GIORNO
  // =====================================================
  onClickDay(day: CalendarDay) {
    this.changeActiveDay(day.dateValue);
  }

  private changeActiveDay(newDate: Date) {
    this._activeDay = newDate;
    this.prepareListDays();
    this.onChangeActiveDay.emit(newDate);
  }

  // =====================================================
  // HELPERS
  // =====================================================
  isActiveDay(day: CalendarDay): boolean {
    return this.isSameDay(day.dateValue, this._activeDay);
  }

  isToday(day: CalendarDay): boolean {
    return this.isSameDay(day.dateValue, new Date());
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }
}

// =====================================================
// INTERFACCIA GIORNO
// =====================================================
export interface CalendarDay {
  dateValue: Date;
}
