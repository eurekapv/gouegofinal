import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, ToastController, ActionSheetController, Platform } from '@ionic/angular';
import { Utente } from 'src/app/models/utente/utente.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import * as htmlToImage from 'html-to-image';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-badge-account',
  templateUrl: './badge-account.page.html',
  styleUrls: ['./badge-account.page.scss'],
})
export class BadgeAccountPage implements OnInit, OnDestroy {

  // Dati utente
  actualUtente: Utente;
  docActualUtenteListen: Subscription;
  
  // Stato badge
  isFlipped = false;

  constructor(
    private navController: NavController,
    private startService: StartService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private platform: Platform
  ) {
    // Ascolta i cambiamenti dell'utente
    this.docActualUtenteListen = this.startService.activeUtenteDoc$.subscribe(element => {
      this.actualUtente = element;
    });
  }

  ngOnInit() {
    // Inizializzazione
  }

  ngOnDestroy() {
    if (this.docActualUtenteListen) {
      this.docActualUtenteListen.unsubscribe();
    }
  }

  // =====================================================
  // GESTIONE NAVIGAZIONE
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
  // GESTIONE BADGE
  // =====================================================

  /**
   * Genera un ID member univoco (simulato)
   */
  getMemberID(): string {
    if (!this.actualUtente) {
      return '000000';
    }
    
    // Genera un ID basato su dati utente (esempio)
    const name = this.actualUtente.NOMINATIVO || 'USER';
    const date = this.actualUtente.NATOIL ? new Date(this.actualUtente.NATOIL).getTime() : Date.now();
    const hash = Math.abs(this.hashCode(name + date.toString()));
    return hash.toString().substring(0, 6).padStart(6, '0');
  }

  /**
   * Funzione hash semplice per generare ID
   */
  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }

  /**
   * Gira il badge per mostrare il retro
   */
  flipBadge(): void {
    this.isFlipped = !this.isFlipped;
  }

  // =====================================================
  // AZIONI BADGE
  // =====================================================

  /**
   * Salva il badge (screenshot o download)
   */
  async onSaveBadge(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Salva Badge',
      buttons: [
        {
          text: 'Salva come Immagine',
          icon: 'image-outline',
          handler: () => {
            this.saveBadgeAsImage();
          }
        },
        {
          text: 'Aggiungi a Wallet',
          icon: 'wallet-outline',
          handler: () => {
            this.addToWallet();
          }
        },
        {
          text: 'Stampa Badge',
          icon: 'print-outline',
          handler: () => {
            this.printBadge();
          }
        },
        {
          text: 'Annulla',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  /**
   * Salva il badge come immagine
   */
  private async saveBadgeAsImage(): Promise<void> {
    try {
      // Mostra loading
      const loading = await this.startService.showLoadingMessage('Creazione immagine...');
      await loading.present();

      // Seleziona l'elemento badge (usa il badge non flippato)
      const badgeElement = document.querySelector('.badge-front') as HTMLElement;
      
      if (!badgeElement) {
        throw new Error('Badge element not found');
      }

      // Nascondi temporaneamente il bottone flip
      const flipButton = badgeElement.querySelector('.flip-button') as HTMLElement;
      if (flipButton) {
        flipButton.style.display = 'none';
      }

      // Genera l'immagine PNG con alta qualità
      const dataUrl = await htmlToImage.toPng(badgeElement, {
        quality: 1,
        pixelRatio: 2, // Aumenta la risoluzione
        cacheBust: true,
        backgroundColor: '#192333'
      });

      // Ripristina il bottone flip
      if (flipButton) {
        flipButton.style.display = '';
      }

      // Chiudi loading
      await loading.dismiss();

      // Salva in base alla piattaforma
      if (this.platform.is('capacitor')) {
        // Mobile: salva con Capacitor Filesystem
        await this.saveBadgeToDevice(dataUrl);
      } else {
        // Web: download diretto
        await this.downloadBadgeWeb(dataUrl);
      }

    } catch (error) {
      console.error('Errore nel salvataggio del badge:', error);
      this.showErrorToast('Errore nel salvataggio del badge');
    }
  }

  /**
   * Salva il badge su dispositivo mobile
   */
  private async saveBadgeToDevice(dataUrl: string): Promise<void> {
    try {
      const fileName = `badge-${this.sanitizeFileName(this.actualUtente.NOMINATIVO)}-${Date.now()}.png`;
      
      // Rimuovi il prefisso data:image/png;base64,
      const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');

      // Salva il file
      const result = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Documents
      });

      console.log('Badge salvato:', result.uri);

      // Mostra toast di successo
      const toast = await this.toastController.create({
        message: '📸 Badge salvato con successo!',
        duration: 3000,
        position: 'bottom',
        color: 'success',
        cssClass: 'toast-success',
        buttons: [
          {
            text: 'Condividi',
            handler: () => {
              this.shareImageFile(result.uri);
            }
          }
        ]
      });
      await toast.present();

    } catch (error) {
      console.error('Errore salvataggio su device:', error);
      throw error;
    }
  }

  /**
   * Download badge per browser web
   */
  private async downloadBadgeWeb(dataUrl: string): Promise<void> {
    const link = document.createElement('a');
    link.download = `badge-${this.sanitizeFileName(this.actualUtente.NOMINATIVO)}-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();

    const toast = await this.toastController.create({
      message: '📸 Badge scaricato con successo!',
      duration: 2500,
      position: 'bottom',
      color: 'success',
      cssClass: 'toast-success'
    });
    await toast.present();
  }

  /**
   * Condividi il file immagine salvato
   */
  private async shareImageFile(fileUri: string): Promise<void> {
    try {
      await Share.share({
        title: 'Il mio Badge Open Beach',
        text: 'Guarda il mio badge digitale!',
        url: fileUri,
        dialogTitle: 'Condividi Badge'
      });
    } catch (error) {
      console.error('Errore nella condivisione:', error);
    }
  }

  /**
   * Sanitizza il nome file rimuovendo caratteri speciali
   */
  private sanitizeFileName(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .substring(0, 30);
  }

  /**
   * Aggiunge il badge al wallet (Apple Wallet / Google Pay)
   */
  private async addToWallet(): Promise<void> {
    const toast = await this.toastController.create({
      message: '💳 Funzionalità wallet in arrivo!',
      duration: 2500,
      position: 'bottom',
      color: 'warning',
      cssClass: 'toast-warning'
    });
    await toast.present();
  }

  /**
   * Stampa il badge
   */
  private async printBadge(): Promise<void> {
    try {
      window.print();
      const toast = await this.toastController.create({
        message: '🖨️ Apertura finestra di stampa...',
        duration: 2000,
        position: 'bottom',
        color: 'primary',
        cssClass: 'toast-info'
      });
      await toast.present();
    } catch (error) {
      this.showErrorToast('Errore durante la stampa');
    }
  }

  /**
   * Condivide il badge
   */
  async onShareBadge(): Promise<void> {
    try {
      // Check se il browser supporta Web Share API
      if (navigator.share) {
        await navigator.share({
          title: 'Il mio Badge Open Beach',
          text: `Guarda il mio badge digitale per Open Beach Group!`,
          url: window.location.href
        });
      } else {
        // Fallback: mostra action sheet con opzioni di condivisione
        this.showShareActionSheet();
      }
    } catch (error) {
      console.error('Errore nella condivisione:', error);
    }
  }

  /**
   * Mostra action sheet con opzioni di condivisione
   */
  private async showShareActionSheet(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Condividi Badge',
      buttons: [
        {
          text: 'Copia Link',
          icon: 'link-outline',
          handler: () => {
            this.copyToClipboard();
          }
        },
        {
          text: 'Condividi via Email',
          icon: 'mail-outline',
          handler: () => {
            this.shareViaEmail();
          }
        },
        {
          text: 'Condividi via SMS',
          icon: 'chatbubble-outline',
          handler: () => {
            this.shareViaSMS();
          }
        },
        {
          text: 'Annulla',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  /**
   * Copia il link negli appunti
   */
  private async copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const toast = await this.toastController.create({
        message: '📋 Link copiato negli appunti!',
        duration: 2000,
        position: 'bottom',
        color: 'success',
        cssClass: 'toast-success'
      });
      await toast.present();
    } catch (error) {
      this.showErrorToast('Errore nella copia del link');
    }
  }

  /**
   * Condivide via email
   */
  private shareViaEmail(): void {
    const subject = 'Il mio Badge Open Beach';
    const body = `Guarda il mio badge digitale per Open Beach Group!`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  /**
   * Condivide via SMS
   */
  private shareViaSMS(): void {
    const message = 'Guarda il mio badge Open Beach!';
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
  }

  // =====================================================
  // QUICK ACTIONS - NAVIGAZIONE
  // =====================================================

  /**
   * Naviga alla pagina di prenotazione campi
   */
  onNavigateToBooking(): void {
    this.navController.navigateForward(['/', 'appstart-home', 'tab-agenda']);
    this.showToast('📅 Vai alle prenotazioni');
  }

  /**
   * Naviga alla pagina dei corsi
   */
  onNavigateToCourses(): void {
    // Implementa la navigazione ai corsi
    this.showToast('📚 Sezione corsi');
  }

  /**
   * Naviga al profilo
   */
  onNavigateToProfile(): void {
    this.onGoToBack();
  }

  /**
   * Naviga allo storico
   */
  onNavigateToHistory(): void {
    // Implementa la navigazione allo storico
    this.showToast('📊 Storico attività');
  }

  // =====================================================
  // UTILITY FUNCTIONS
  // =====================================================

  /**
   * Mostra un toast generico
   */
  private async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary',
      cssClass: 'toast-info'
    });
    await toast.present();
  }

  /**
   * Mostra un toast di errore
   */
  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: `❌ ${message}`,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      cssClass: 'toast-error'
    });
    await toast.present();
  }
}