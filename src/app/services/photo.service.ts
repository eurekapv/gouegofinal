import { Injectable } from '@angular/core';
import {Plugins, CameraResultType, CameraPhoto, CameraSource } from '@capacitor/core';


const {Camera, Filesystem, Storage} = Plugins;

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
    * @return DataUrl memorizzato
    */
   public takePicure(typePhoto: PhotoType, idPhoto: string):Promise<string>{

    return new Promise<string>((resolve, reject) => {
      
      Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        quality: 100
      })
      .then((data:CameraPhoto) => {
  
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
      })
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

      
      Storage.set({
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
      Storage.get({
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


