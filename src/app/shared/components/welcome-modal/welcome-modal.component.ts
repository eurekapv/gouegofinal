import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss'],
})
export class WelcomeModalComponent implements OnInit {

  backgroundImageUrl: string = '';
  paymentFeature: { icon: string; label: string } = { icon: 'card', label: 'Pagamento con carta' };

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.loadBackgroundImage();
    this.setPaymentFeature();
  }

  /**
   * Imposta la feature di pagamento in base alla piattaforma
   */
  setPaymentFeature() {
    if (this.platform.is('ios') && this.platform.is('capacitor')) {
      this.paymentFeature = {
        icon: 'phone-portrait',
        label: 'Apple Pay integrato'
      };
    } else if (this.platform.is('android') && this.platform.is('capacitor')) {
      this.paymentFeature = {
        icon: 'logo-google',
        label: 'Google Pay integrato'
      };
    } else {
      this.paymentFeature = {
        icon: 'card',
        label: 'Pagamento con carta di credito'
      };
    }
  }

  /**
   * Carica un'immagine di sfondo da Pexels
   */
  loadBackgroundImage() {
    const searchQuery = 'modern app interface design';
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=portrait`;

    this.http.get(pexelsUrl, {
      headers: {
        'Authorization': environment.additionalConfig.pexelsApiKey
      }
    }).subscribe({
      next: (response: any) => {
        if (response.photos && response.photos.length > 0) {
          this.backgroundImageUrl = response.photos[0].src.large2x;
        }
      },
      error: (error) => {
        console.error('Errore nel caricamento immagine Pexels:', error);
      }
    });
  }

  /**
   * Chiude la modal
   */
  closeModal() {
    this.modalController.dismiss();
  }
}
