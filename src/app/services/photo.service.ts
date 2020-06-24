import { Injectable } from '@angular/core';
import {Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

const {Camera, Filesystem, Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = 'photos';

  //Cerca nell'array la foto dell'account
  get myAccountPhoto() {
    let myPhoto: Photo;

    if (this.photos) {
      myPhoto = this.photos.find(el => {
        return el.type == PhotoType.account
      });
    }

    return myPhoto;
  }

  constructor() { }

  public async addNewToGallery(typePhoto: PhotoType) {
    //Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    //Salvo sul file systema
    const savedImageFile = await this.savePicture(capturedPhoto, typePhoto);

    //Inserisco nell'array
    this.photos.unshift(savedImageFile);

    //Scrivo nello storage
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos.map(p => {
              // Don't save the base64 representation of the photo data, 
              // since it's already saved on the Filesystem
              const photoCopy = { ...p };
              delete photoCopy.base64;
    
              return photoCopy;
              }))
    });


    
  }

  //Salvataggio immagini
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
  
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      type: typePhoto,
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };

  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;  
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

interface Photo {
  type: PhotoType;
  filepath: string;
  webviewPath: string;
  base64?: string;
}

export enum PhotoType {
  account = 10
}


