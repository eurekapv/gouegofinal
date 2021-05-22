import { Injectable } from '@angular/core';
import {Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const {Camera, Filesystem, Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = 'photos';
  private platform: Platform;

  //Cerca nell'array la foto dell'account
  get myAccountPhoto(): Photo {
    let myPhoto: Photo;

    if (this.photos) {
      myPhoto = this.photos.find(el => {
        return el.type == PhotoType.account
      });
    }

    return myPhoto;
  }

  constructor(platform: Platform) {
    this.platform = platform;

    if (this.platform.is('hybrid')) {
      //hibrida
    }
    else {
      //Desktop
    }
   }

  public async addNewToGallery(typePhoto: PhotoType) {
    //Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100
    });

    //Salvo sul file system
    const savedImageFile = await this.savePicture(capturedPhoto, typePhoto);

    //Inserisco nell'array
    this.photos.unshift(savedImageFile);

    //Scrivo nello storage l'array delle Photos
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: this.platform.is('hybrid')
      ? JSON.stringify(this.photos)
      : JSON.stringify(this.photos.map(p => {
              // Don't save the base64 representation of the photo data, 
              // since it's already saved on the Filesystem
              const photoCopy = { ...p };
              delete photoCopy.base64;
    
              return photoCopy;
              }))
    });


    
  }

  //Salvataggio immagini
  /**
   * Salvataggio immagini
   * Su Mobile 
   * set filepath to the result of the writeFile() operation - savedFile.uri. 
   * When setting the webviewPath, use the special Capacitor.convertFileSrc()
   * 
   * @param cameraPhoto 
   * @param typePhoto 
   */
  private async savePicture(cameraPhoto: CameraPhoto, typePhoto:PhotoType): Promise<Photo> {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        type: typePhoto,
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        type: typePhoto,
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
  }


  private async readAsBase64(cameraPhoto: CameraPhoto) {
    //hybrid detect Cordova, Capacitor
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: cameraPhoto.path
      });

      return file.data;
    }
    else {
      // Recupero la foto come Blob e la converto in Base64
      const response = await fetch(cameraPhoto.webPath!);
      const blob = await response.blob();
    
      return await this.convertBlobToBase64(blob) as string;  
    }

  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  //Carica il file dal filesystem
  public async loadSaved() {
    // Retrieve cached photo array data
    const photos = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photos.value) || [];
    if (!this.platform.is('hybrid')) {
    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
    // Read each saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
                      path: photo.filepath,
                      directory: FilesystemDirectory.Data
        });

        // For Web platform only: Save the photo into the base64 field
        photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }
  
}

export interface Photo {
  type: PhotoType;
  filepath: string;
  webviewPath: string;
  base64?: string;
}

export enum PhotoType {
  account = 10
}


