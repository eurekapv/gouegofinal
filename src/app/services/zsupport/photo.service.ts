import { Injectable } from '@angular/core';
import { Camera, CameraResultType, Photo, CameraSource, ImageOptions } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private PHOTO_STORAGE: string = 'photos';
  
  constructor(private actionSheetController: ActionSheetController) { }

  /**
   * NUOVO METODO - Mostra Action Sheet moderno e scatta foto
   * @param typePhoto Tipo della foto
   * @param idPhoto Nel caso di foto profilo è IDUtente
   * @param title Eventuale titolo da mostrare
   * @param showRemove Se mostrare opzione "Rimuovi foto"
   * @return DataUrl memorizzato
   */
  public async takePicture(
    typePhoto: PhotoType, 
    idPhoto: string, 
    title?: string,
    showRemove: boolean = false
  ): Promise<string> {
    
    return new Promise<string>(async (resolve, reject) => {
      
      const myTitle = title && title.length !== 0 ? title : '📸 Foto Profilo';

      // Crea Action Sheet personalizzato
      const actionSheet = await this.actionSheetController.create({
        header: myTitle,
        cssClass: 'photo-action-sheet',
        buttons: [
          {
            text: 'Scatta Foto',
            icon: 'camera',
            cssClass: 'action-sheet-camera',
            handler: () => {
              this.capturePhoto(CameraSource.Camera, typePhoto, idPhoto)
                .then(dataUrl => resolve(dataUrl))
                .catch(error => reject(error));
            }
          },
          {
            text: 'Scegli dalla Galleria',
            icon: 'images',
            cssClass: 'action-sheet-gallery',
            handler: () => {
              this.capturePhoto(CameraSource.Photos, typePhoto, idPhoto)
                .then(dataUrl => resolve(dataUrl))
                .catch(error => reject(error));
            }
          },
          // Opzionale: Rimuovi foto
          ...(showRemove ? [{
            text: 'Rimuovi Foto',
            icon: 'trash',
            cssClass: 'action-sheet-remove',
            role: 'destructive',
            handler: () => {
              this.storageRemove(typePhoto, idPhoto)
                .then(() => resolve(''))
                .catch(error => reject(error));
            }
          }] : []),
          {
            text: 'Annulla',
            icon: 'close',
            role: 'cancel',
            cssClass: 'action-sheet-cancel',
            handler: () => {
              reject('User cancelled');
            }
          }
        ]
      });

      await actionSheet.present();
    });
  }

  /**
   * Cattura foto dalla camera o galleria
   */
  private async capturePhoto(
    source: CameraSource,
    typePhoto: PhotoType,
    idPhoto: string
  ): Promise<string> {
    
    const photoParams: ImageOptions = {
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: source,
      width: 800,
      height: 800,
      correctOrientation: true
    };

    try {
      const photo: Photo = await Camera.getPhoto(photoParams);
      const myImageDataUrl: string = photo.dataUrl;

      // Salva nello storage
      await this.storageSave(myImageDataUrl, typePhoto, idPhoto);
      
      return myImageDataUrl;
      
    } catch (error) {
      throw error;
    }
  }

  /**
   * METODO VECCHIO - Mantienilo per retrocompatibilità
   * @deprecated Usa il nuovo takePicture() invece
   */
  public takePicure(typePhoto: PhotoType, idPhoto: string, title?: string): Promise<string> {
    // Chiamaa il nuovo metodo
    return this.takePicture(typePhoto, idPhoto, title);
  }

  /**
   * Salvataggio di un DataURL nello storage
   */
  storageSave(dataUrlPhoto: string, typePhoto: PhotoType, idPhoto: string): Promise<void> {
    const keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
    
    return new Promise<void>((resolve, reject) => {
      
      const myPhoto: IPhoto = {
        type: typePhoto,
        dataUrl: dataUrlPhoto
      };

      Preferences.set({
        key: keyStorage,
        value: JSON.stringify(myPhoto)
      })
      .then(() => resolve())
      .catch(error => reject(error));
    });
  }

  /**
   * Recupero di un DATAURL dallo storage
   */
  storageLoad(typePhoto: PhotoType, idPhoto: string): Promise<string> {
    const keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;

    return new Promise<string>((resolve, reject) => {
      Preferences.get({ key: keyStorage })
        .then(data => {
          if (data.value) {
            const myPhoto: IPhoto = JSON.parse(data.value);
            resolve(myPhoto.dataUrl);
          } else {
            reject('No photo found');
          }
        })
        .catch(error => reject(error));
    });
  }

  /**
   * Rimozione foto dallo storage
   */
  storageRemove(typePhoto: PhotoType, idPhoto: string): Promise<void> {
    const keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
    
    return Preferences.remove({ key: keyStorage });
  }
}

export interface IPhoto {
  type: PhotoType;
  dataUrl: string;
}

export enum PhotoType {
  account = 10
}