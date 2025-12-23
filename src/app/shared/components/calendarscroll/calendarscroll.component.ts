import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-calendarscroll',
  templateUrl: './calendarscroll.component.html',
  styleUrls: ['./calendarscroll.component.scss']
})
export class CalendarscrollComponent implements OnInit, OnDestroy {

  // Giorno selezionato
  _activeDay: Date = new Date();
  
  // Lista dei giorni da mostrare
  listDay: CalendarDay[] = [];

  // Aggiungi queste proprietà
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private intersectionObserver: IntersectionObserver;

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

    // Aggiungi il drag scroll
    this.attachDragScrollListener();

    // Osserva i cambiamenti di visibilità del componente
    this.observeVisibility();
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
 * Abilita lo scroll trascinando con il mouse
 */
  private attachDragScrollListener(): void {
      if (!this.daysScrollContainer) {
        return;
      }

      const scrollElement = this.daysScrollContainer.nativeElement;

      // Mouse down - inizia il drag
      scrollElement.addEventListener('mousedown', (e: MouseEvent) => {
        this.isDragging = true;
        scrollElement.style.cursor = 'grabbing';
        this.startX = e.pageX - scrollElement.offsetLeft;
        this.scrollLeft = scrollElement.scrollLeft;
      });

      // Mouse leave - ferma il drag
      scrollElement.addEventListener('mouseleave', () => {
        this.isDragging = false;
        scrollElement.style.cursor = 'grab';
      });

      // Mouse up - ferma il drag
      scrollElement.addEventListener('mouseup', () => {
        this.isDragging = false;
        scrollElement.style.cursor = 'grab';
      });

      // Mouse move - esegue lo scroll
      scrollElement.addEventListener('mousemove', (e: MouseEvent) => {
        if (!this.isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollElement.offsetLeft;
        const walk = (x - this.startX) * 2; // Velocità dello scroll
        scrollElement.scrollLeft = this.scrollLeft - walk;
      });
  }

  // =====================================================
  // OSSERVATORE VISIBILITÀ
  // =====================================================

  /**
   * Osserva quando il componente diventa visibile e ricentra sul giorno attivo
   */
  private observeVisibility(): void {
    if (!this.daysScrollContainer) {
      return;
    }

    const scrollElement = this.daysScrollContainer.nativeElement;

    // Crea un IntersectionObserver per rilevare quando il componente diventa visibile
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se il componente è diventato visibile
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // Ricentra il calendario sul giorno attivo
            this.scrollToActiveDay();
          }
        });
      },
      {
        threshold: 0.1 // Trigger quando almeno il 10% del componente è visibile
      }
    );

    // Inizia ad osservare il container
    this.intersectionObserver.observe(scrollElement);
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
  
  // CORREZIONE: Crea il primo giorno del mese successivo in modo sicuro
  const year = lastDay.getFullYear();
  const month = lastDay.getMonth();
  
  // Crea direttamente il primo giorno del mese successivo
  const nextMonthFirstDay = new Date(year, month + 1, 1);

  // Aggiungi i giorni del mese successivo
  const nextYear = nextMonthFirstDay.getFullYear();
  const nextMonth = nextMonthFirstDay.getMonth();
  const daysInMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

  console.log(`📅 CARICAMENTO MESE: ${nextMonthFirstDay.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}`);

  // Crea i nuovi giorni
  const newDays: CalendarDay[] = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dateValue = new Date(nextYear, nextMonth, day);
    newDays.push({
      dateValue: dateValue
    });
  }

  // Aggiorna l'array
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

  /**
   * Cleanup quando il componente viene distrutto
   */
  ngOnDestroy() {
    // Disconnetti l'IntersectionObserver per evitare memory leaks
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}

// =====================================================
// INTERFACCIA GIORNO
// =====================================================
export interface CalendarDay {
  dateValue: Date;
}