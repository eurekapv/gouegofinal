import { Component, OnInit, Input } from '@angular/core';
import { Corso } from 'src/app/models/corso/corso.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { Subscription } from 'rxjs';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-course-detail-calendar',
  templateUrl: './periodic-course-detail-calendar.page.html',
  styleUrls: ['./periodic-course-detail-calendar.page.scss'],
})
export class PeriodicCourseDetailCalendarPage implements OnInit {

  @Input() myCorso: Corso;
  calendarCorso: PianificazioneCorso[] = [];
  listenCalendarCorso: Subscription;
  ricevuti = false; // Indica se gli orari sono stati ricevuti

  constructor(
    private mdlController: ModalController,
    private loadingController: LoadingController,
    private startService: StartService
  ) { }

  ngOnInit() {
    // Creo il loading 
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: "circular",
      backdropDismiss: true
    })
    .then(elLoading => {
      elLoading.present();

      this.startService.requestCalendarioCorso(this.myCorso.ID, true)
      .then(listCalendar => {
        // Dismetto il loading e salvo il calendario
        elLoading.dismiss();
        this.calendarCorso = listCalendar;
        this.ricevuti = true;
      })
      .catch(error => {
        // Dismetto il loading e mostro l'errore
        elLoading.dismiss();
        this.startService.presentToastMessage('Errore di connessione');
        this.ricevuti = true;
        LogApp.consoleLog(error, 'error');
      });
    });
  }

  /**
   * Chiude il calendario
   */
  closeCalendar() {
    this.mdlController.dismiss();
  }

  /**
   * Determina il colore dell'item in base allo stato
   * @deprecated - Non più usato nel nuovo design
   */
  colorItem(itemCalendarCorso: PianificazioneCorso) {
    let color = 'success';
    if (itemCalendarCorso.eventoPassato()) {
      color = 'danger';
    }
    return color;
  }

  /**
   * Verifica se deve mostrare il separatore del mese
   * @param index Indice dell'elemento corrente
   */
  shouldShowMonthSeparator(index: number): boolean {
    if (index === 0) {
      return true; // Mostra sempre il primo mese
    }

    const currentDate = this.calendarCorso[index].DATA;
    const previousDate = this.calendarCorso[index - 1].DATA;

    if (!currentDate || !previousDate) {
      return false;
    }

    const currentMonth = new Date(currentDate).getMonth();
    const currentYear = new Date(currentDate).getFullYear();
    const previousMonth = new Date(previousDate).getMonth();
    const previousYear = new Date(previousDate).getFullYear();

    // Mostra il separatore se il mese o l'anno cambiano
    return currentMonth !== previousMonth || currentYear !== previousYear;
  }

  /**
   * Verifica se una data è oggi
   * @param date Data da verificare
   */
  isToday(date: Date): boolean {
    if (!date) {
      return false;
    }

    const today = new Date();
    const checkDate = new Date(date);

    return today.getDate() === checkDate.getDate() &&
           today.getMonth() === checkDate.getMonth() &&
           today.getFullYear() === checkDate.getFullYear();
  }
}