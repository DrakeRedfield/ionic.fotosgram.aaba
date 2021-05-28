import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { EditProfileComponent } from '../../components/edit-profile/edit-profile.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: IUser = {}

  constructor(
    private userService: UsersService,
    private modalController: ModalController,
  ) {}
  
  ionViewWillEnter(){
    this.user = this.userService.getUser();
  }

  async setUser(){
    const modal = await this.modalController.create({
      component: EditProfileComponent,
      cssClass: 'half-modal-class',
    });
    await modal.present();
    const { data } = await modal.onWillDismiss()
    if(data.status){
      this.user = data.user;
    }
  }
}
