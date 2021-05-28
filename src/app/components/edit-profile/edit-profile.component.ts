import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IUser } from '../../interfaces/interfaces';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  userData: IUser = {

  };
  constructor(
    private modalController: ModalController,
    private userService: UsersService,
    private uiUser: UiServiceService,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  close(){
    this.modalController.dismiss({status:false});
  }

  async saveData( fSetting: NgForm ){
    if( fSetting.invalid ) return;
    const response = await this.userService.updateUser( this.userData );
    if( response ){
      this.uiUser.showMessage('Usuario Actualizado con éxito.');
      this.modalController.dismiss({status:true, user:this.userData});
    }else{
      this.uiUser.showMessage('Error al actualizar el usuario.');
    }
  }

  selectAvatar( avatar ){
    this.userData.avatar = avatar;
  }

  getUser(){
    this.userData = this.userService.getUser();
  }

}
