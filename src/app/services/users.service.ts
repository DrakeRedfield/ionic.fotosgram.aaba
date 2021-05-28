import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { IResponse, IUser } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private token: string = null;
  tokenTemp: string = '';
  private user: IUser = {};

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
  ) { }

  getUser(){
    return {...this.user};
  }

  login( email: string, password:string ){
    return new Promise( ( resolve => {
      const data = { email, password};
      this.http.post(`${URL}/user/login`,data).subscribe( async ( resp: IResponse ) => {
        resolve(await this.responseLoginReg(resp));
      });
    }));
  }

  register( userData: IUser ){
    return new Promise( ( resolve => {
      this.http.post(`${URL}/user/create`,userData).subscribe( async ( resp: IResponse ) => {
        resolve(await this.responseLoginReg(resp));
      });
    }));
  }

  updateUser( userData: IUser ){
    return new Promise( resolve => {
      const headers = new HttpHeaders({
        'X-Token': this.token
      });
      this.http.post(`${URL}/user/update`,userData,{headers}).subscribe( async (resp:IResponse) => {
        if( resp.status ){
          await this.saveToken(resp.token);
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }

  async responseLoginReg( resp: IResponse ){
    if( resp.status ){
      await this.saveToken(resp.token);
      return true;
    }else{
      this.token = null;
      this.storage.clear();
      return false;
    }
  }

  async saveToken(token:string){
    this.token = token;
    this.tokenTemp = token;
    await this.storage.set('token',token);
  }

  async loadToken(){
    this.token = await this.storage.get('token') || null;
  }

  async validateToken():Promise<boolean>{
    await this.loadToken();
    return new Promise<boolean>( resolve => {
      if( !this.token ){
        this.navCtrl.navigateRoot('/login');
        resolve(false);
      }
      const header = new HttpHeaders({
        'X-Token': this.token,
      })
      this.http.get(`${URL}/user`, {headers: header}).subscribe( ( resp: IResponse ) => {
        if( resp.status ){
          this.user = resp.user;
          resolve(true);
        }else{
          this.navCtrl.navigateRoot('/login');
          resolve(false);
        }
      });
    })
  }
}
