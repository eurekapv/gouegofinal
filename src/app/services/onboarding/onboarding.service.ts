import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private readonly ONBOARDING_KEY = 'app_redesign_v2_shown';

  constructor() {}

  /**
   * Verifica se l'onboarding del redesign è già stato mostrato
   * Usa localStorage per compatibilità web e mobile
   */
  hasSeenRedesign(): boolean {
    try {
      const seen = localStorage.getItem(this.ONBOARDING_KEY);
      return seen === 'true';
    } catch (error) {
      console.error('Errore lettura localStorage:', error);
      return false;
    }
  }

  /**
   * Segna l'onboarding come visto
   */
  markRedesignAsSeen(): void {
    try {
      localStorage.setItem(this.ONBOARDING_KEY, 'true');
    } catch (error) {
      console.error('Errore scrittura localStorage:', error);
    }
  }

  /**
   * Reset per testing (da rimuovere in produzione)
   */
  resetOnboarding(): void {
    try {
      localStorage.removeItem(this.ONBOARDING_KEY);
    } catch (error) {
      console.error('Errore rimozione localStorage:', error);
    }
  }
}
