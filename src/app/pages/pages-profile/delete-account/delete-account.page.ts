import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl } from '@angular/forms';
import { StartService } from 'src/app/services/start.service';
import { AlertButton, NavController } from '@ionic/angular';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  
  // Form Group
  form: UntypedFormGroup;
  
  // Visibilità password
  showNew = false;
  showNewRetype = false;
  
  constructor(
    private startService: StartService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  // =====================================================
  // GESTIONE NAVIGAZIONE E BACK
  // =====================================================

  /**
   * Ritorna l'array del percorso di ritorno
   */
  get backPathArray(): string[] {
    return ['/', 'appstart-home', 'tab-profile'];
  }

  /**
   * Ritorna il path di back come stringa concatenata
   */
  get backButtonHref(): string {
    return this.backPathArray.join('/').substring(1);
  }

  /**
   * Naviga indietro alla pagina del profilo
   */
  onGoToBack(): void {
    this.navController.navigateBack(this.backPathArray);
  }

  // =====================================================
  // GESTIONE FORM
  // =====================================================

  /**
   * Inizializza il form con validatori
   */
  private initializeForm(): void {
    this.form = new UntypedFormGroup({
      actualPassword1: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      actualPassword2: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      })
    }, this.passwordMatchValidator);
  }

  /**
   * Validatore custom per verificare che le password coincidano
   */
  private passwordMatchValidator(control: AbstractControl): { invalid: boolean } | null {
    const password1 = control.get('actualPassword1')?.value;
    const password2 = control.get('actualPassword2')?.value;

    if (password1 && password2 && password1 === password2) {
      return null;
    }
    
    return { invalid: true };
  }

  /**
   * Ritorna il messaggio di errore appropriato
   */
  invalidMessage(): string {
    const password1 = this.form.value.actualPassword1;
    const password2 = this.form.value.actualPassword2;

    if (!password1 || !password2) {
      return 'Inserisci la password in entrambi i campi';
    }

    if (password1 !== password2) {
      return 'Le password non coincidono';
    }

    if (password1.length < 6) {
      return 'La password deve contenere almeno 6 caratteri';
    }

    return '';
  }

  /**
   * Mostra/nasconde la password nei campi input
   */
  showHideInput(idElement: string, elementDOM: any): void {
    switch (idElement) {
      case 'actualPassword1':
        this.showNew = !this.showNew;
        elementDOM.type = this.showNew ? 'text' : 'password';
        break;

      case 'actualPassword2':
        this.showNewRetype = !this.showNewRetype;
        elementDOM.type = this.showNewRetype ? 'text' : 'password';
        break;

      default:
        break;
    }
  }

  // =====================================================
  // GESTIONE ELIMINAZIONE PROFILO
  // =====================================================

  /**
   * Mostra alert di conferma prima dell'eliminazione
   */
  onClickElimina(): void {
    const alertButtons: AlertButton[] = [
      {
        text: 'No, aspetta',
        role: 'cancel',
        cssClass: 'alert-button-cancel'
      },
      {
        text: 'Sì, elimina',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: () => {
          this.requestDeletionProfile();
        }
      }
    ];

    const message = `
      <p style="text-align: center; line-height: 1.6;">
        Sei sicuro di voler eliminare definitivamente il tuo profilo?<br><br>
        <strong>Questa azione non può essere annullata.</strong>
      </p>
    `;

    this.startService.presentAlertMessage(
      message,
      'Conferma Eliminazione',
      alertButtons
    );
  }

  /**
   * Esegue la richiesta di eliminazione del profilo
   */
  private async requestDeletionProfile(): Promise<void> {
    const actualPassword = this.form.value.actualPassword1;
    const loadingMessage = 'Eliminazione in corso...';

    try {
      // Mostra loading
      const loading = await this.startService.showLoadingMessage(loadingMessage);
      await loading.present();

      // Esegue la richiesta
      const response = await this.startService.requestDeleteProfile(actualPassword);

      // Chiude loading
      await loading.dismiss();

      // Gestisce la risposta
      if (response.result === false) {
        this.showErrorAlert(response.message);
      } else {
        this.showSuccessAlert();
      }

    } catch (error) {
      console.error('Errore durante l\'eliminazione del profilo:', error);
      this.showErrorAlert('Si è verificato un errore. Riprova più tardi.');
    }
  }

  /**
   * Mostra alert di errore
   */
  private showErrorAlert(message: string): void {
    this.startService.presentAlertMessage(
      message,
      'Eliminazione Fallita'
    );
  }

  /**
   * Mostra alert di successo e naviga indietro
   */
  private showSuccessAlert(): void {
    const successButtons: AlertButton[] = [
      {
        text: 'Ok',
        role: 'confirm',
        handler: () => {
          this.onGoToBack();
        }
      }
    ];

    const successMessage = `
      <p style="text-align: center; line-height: 1.6;">
        Il tuo profilo è stato eliminato con successo.<br><br>
        Ci spiace che tu te ne sia andato, potrai tornare con noi quando lo desideri.
      </p>
    `;

    this.startService.presentAlertMessage(
      successMessage,
      'Profilo Eliminato',
      successButtons
    );
  }
}