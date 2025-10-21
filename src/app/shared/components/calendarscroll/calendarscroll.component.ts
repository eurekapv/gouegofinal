import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

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

  // Riferimento al container scrollabile
  @ViewChild('daysScrollContainer', { read: ElementRef }) daysScrollContainer: ElementRef;

  // Flag per evitare chiamate multiple durante lo scroll
  private isLoadingNextMonth = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.prepareListDays();
  }

  ngAfterViewInit() {
    // Attacca il listener per lo scroll infinito
    this.attachScrollListener();
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

    // Scroll automatico al giorno attivo dopo aver preparato la lista
    this.scrollToActiveDay();
  }

  // =====================================================
  // CAMBIO DATA ATTIVA
  // =====================================================
  private changeActiveDay(newDate: Date) {
    this._activeDay = newDate;
    
    // Se la nuova data è in un mese diverso, ricarica i giorni
    if (this.isInDifferentMonth(newDate)) {
      this.prepareListDays();
    } else {
      // Altrimenti fai solo scroll al giorno
      this.scrollToActiveDay();
    }
    
    this.onChangeActiveDay.emit(newDate);
  }

  /**
   * Verifica se la data è in un mese diverso dall'attuale lista
   */
  private isInDifferentMonth(date: Date): boolean {
    if (this.listDay.length === 0) {
      return true;
    }

    const firstDay = this.listDay[0].dateValue;
    return date.getMonth() !== firstDay.getMonth() || 
           date.getFullYear() !== firstDay.getFullYear();
  }

  // =====================================================
  // SCROLL AUTOMATICO
  // =====================================================
  
  /**
   * Scrolla automaticamente al giorno attivo
   */
  private scrollToActiveDay(): void {
    setTimeout(() => {
      // Trova il bottone del giorno attivo
      const activeButton = document.querySelector('.day-button--active');
      
      if (activeButton) {
        // Scrolla il bottone in vista (centrato)
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }, 150);
  }

  // =====================================================
  // SCROLL INFINITO - PASSA AL MESE SUCCESSIVO
  // =====================================================
  
  /**
   * Attacca il listener per rilevare quando si arriva alla fine dello scroll
   */
  private attachScrollListener(): void {
    if (!this.daysScrollContainer) {
      return;
    }

    const scrollElement = this.daysScrollContainer.nativeElement;

    scrollElement.addEventListener('scroll', () => {
      this.checkIfNearEnd(scrollElement);
    });
  }

  /**
   * Controlla se siamo vicini alla fine dello scroll
   * Se sì, carica automaticamente il mese successivo
   */
  private checkIfNearEnd(scrollElement: HTMLElement): void {
    // Se stiamo già caricando, non fare nulla
    if (this.isLoadingNextMonth) {
      return;
    }

    const scrollLeft = scrollElement.scrollLeft;
    const scrollWidth = scrollElement.scrollWidth;
    const clientWidth = scrollElement.clientWidth;

    // Calcola la distanza dalla fine (in pixel)
    const distanceFromEnd = scrollWidth - (scrollLeft + clientWidth);

    // Se siamo a meno di 100px dalla fine, carica il mese successivo
    const THRESHOLD = 100;

    if (distanceFromEnd < THRESHOLD) {
      this.loadNextMonthAutomatically();
    }
  }

  /**
   * Carica automaticamente i giorni del mese successivo
   */
  private loadNextMonthAutomatically(): void {
    this.isLoadingNextMonth = true;

    // Trova l'ultimo giorno nella lista corrente
    const lastDay = this.listDay[this.listDay.length - 1].dateValue;
    
    // Calcola il primo giorno del mese successivo
    const nextMonth = new Date(lastDay);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);

    // Aggiungi i giorni del mese successivo alla lista esistente
    const year = nextMonth.getFullYear();
    const month = nextMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    console.log(`📅 CARICAMENTO MESE: ${nextMonth.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}`);

    // Crea i nuovi giorni
    const newDays: CalendarDay[] = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateValue = new Date(year, month, day);
      newDays.push({
        dateValue: dateValue
      });
    }

    // IMPORTANTE: Aggiorna l'array creando una nuova referenza
    this.listDay = [...this.listDay, ...newDays];

    // Forza Angular a rilevare i cambiamenti
    this.cdr.detectChanges();

    // Dopo un breve delay, consenti il caricamento del prossimo mese
    setTimeout(() => {
      this.isLoadingNextMonth = false;
    }, 500);
  }

  // =====================================================
  // NAVIGAZIONE MESI (Bottoni)
  // =====================================================
  goToPreviousMonth() {
    const newDate = new Date(this._activeDay);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(1);
    this.changeActiveDay(newDate);
  }

  goToNextMonth() {
    const newDate = new Date(this._activeDay);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(1);
    this.changeActiveDay(newDate);
  }

  // =====================================================
  // CLICK SU GIORNO
  // =====================================================
  onClickDay(day: CalendarDay) {
    this.changeActiveDay(day.dateValue);
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

  /**
   * Verifica se è il primo giorno del mese
   */
  isFirstDayOfMonth(day: CalendarDay): boolean {
    return day.dateValue.getDate() === 1;
  }

  /**
   * Determina se mostrare il nome del mese
   * Mostra il mese per:
   * - Il primo elemento della lista (index 0)
   * - Il primo giorno di ogni mese (day = 1)
   */
  shouldShowMonth(index: number): boolean {
    // Mostra sempre per il primo elemento
    if (index === 0) {
      return true;
    }

    // Mostra se è il primo giorno del mese
    const currentDay = this.listDay[index].dateValue;
    return currentDay.getDate() === 1;
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  /**
   * TrackBy function per ottimizzare il rendering
   */
  trackByDayFn(index: number, item: CalendarDay): string {
    return `${item.dateValue.getTime()}-${index}`;
  }
}

// =====================================================
// INTERFACCIA GIORNO
// =====================================================
export interface CalendarDay {
  dateValue: Date;
}