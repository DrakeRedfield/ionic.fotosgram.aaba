import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { UiServiceService } from '../../services/ui-service.service';
import { IUser } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('mainSlide',{static: true}) mainSlide:IonSlides;

  loginUser = {
    email: 'drake.redfield@hotmail.com',
    password: '123456'
  }

  registerData: IUser ={
    email:'testing1@hotmail.com',
    password: '123456',
    nombre: 'Roberto Carlos',
    avatar: 'av-1.png'
  }

  constructor(
    private userService: UsersService,
    private uiServ: UiServiceService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.mainSlide.lockSwipes(true);
  }

  async login( fLogin: NgForm ){
    if( fLogin.invalid ) return;
    const successLogin = await this.userService.login(this.loginUser.email,this.loginUser.password);
    console.log(successLogin,'Valor Temporal');
    if( successLogin ) this.navCtrl.navigateRoot('/main/home',{animated: true});
    else this.uiServ.showMessage('Usuario y contraseña incorrecto.');
  }

  async registro( fRegistro:NgForm ){
    if( fRegistro.invalid ) return;
    const successRegister = await this.userService.register(this.registerData)
    if( successRegister ) this.navCtrl.navigateRoot('/main/home',{animated: true});
    else this.uiServ.showMessage('El email ya está en uso.');
  }

  selectAvatar( avatar ){
    this.registerData.avatar = avatar;
  }

  next(){
    this.mainSlide.lockSwipes(false);
    this.mainSlide.slideNext();
    this.mainSlide.lockSwipes(true);
  }

  back(){
    this.mainSlide.lockSwipes(false);
    this.mainSlide.slidePrev();
    this.mainSlide.lockSwipes(true);
  }
}
