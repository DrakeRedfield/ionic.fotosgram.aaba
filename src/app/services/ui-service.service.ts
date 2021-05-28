import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(
    private toastController: ToastController,
  ) { }

  async showMessage( msg: string ){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'middle'
    })
    await toast.present();
  }
}
