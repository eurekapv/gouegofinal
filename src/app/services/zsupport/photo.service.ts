import { Injectable } from '@angular/core';
import {Camera, CameraResultType, Photo, CameraSource, ImageOptions } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private PHOTO_STORAGE: string = 'photos';
  
  constructor() { }

   /**
    * 
    * @param typePhoto Tipo della foto
    * @param idPhoto Nel caso di foto profilo è IDUtente
    * @param title Eventuale titolo da mostrare nel menu di scelta
    * @return DataUrl memorizzato
    */
   public takePicure(typePhoto: PhotoType, idPhoto: string, title?:string):Promise<string>{

    return new Promise<string>((resolve, reject) => {

      let myTitle: string = 'Immagine';

      if (title && title.length != 0) {
        myTitle = title;
      }

      let photoParams: ImageOptions = {
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        correctOrientation: true,
        promptLabelHeader: myTitle,
        promptLabelCancel: 'Annulla',
        promptLabelPhoto: 'dalla Gallery',
        promptLabelPicture: 'Scatta Foto'        
      }      
      
      Camera.getPhoto(photoParams)
            .then((data:Photo) => {
        
              let myImageDataUrl:string  = data.dataUrl;
        
              //Salvo nello Storage
              this.storageSave(myImageDataUrl, typePhoto, idPhoto)
                      .then(() => {
                        //Salvataggio corretto, ritorno il dataUrl
                        resolve(myImageDataUrl);
                      })
                      .catch(error => {
                        reject(error);
                      })
            });
    })
    

   }

   /**
    * Salvataggio di un DataURL nello storage
    * @param typePhoto Tipo della foto
    * @param idPhoto Identificativo
    */
   storageSave(dataUrlPhoto: string, typePhoto:PhotoType, idPhoto:string):Promise<void> {
    let keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;
    return new Promise<void>((resolve, reject) => {
      
      let myPhoto: IPhoto = {
        type: typePhoto,
        dataUrl: dataUrlPhoto
      }

      
      Preferences.set({
        key: keyStorage,
        value: JSON.stringify(myPhoto)
      })
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      })
    })
   }

   /**
    * Recupero di un DATAURL dallo storage
    * @param typePhoto Tipo della foto
    * @param idPhoto Identificativo
    * @returns 
    */
   storageLoad(typePhoto:PhotoType, idPhoto:string):Promise<string> {
    let keyStorage = this.PHOTO_STORAGE + '_' + typePhoto + '_' + idPhoto;



    return new Promise<string>((resolve, reject) => {
      Preferences.get({
        key: keyStorage
      })
      .then(data => {

        let myPhoto:IPhoto = JSON.parse(data.value)

        resolve(myPhoto.dataUrl);

      })
      .catch(error => {
        reject(error);
      })

    })
   }

  
}

export interface IPhoto {
  type: PhotoType;
  dataUrl: string;
}

export enum PhotoType {
  account = 10
}


