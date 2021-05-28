import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: IUser = {}

  constructor(
    private userService: UsersService,
  ) {}
  
  ionViewWillEnter(){
    this.user = this.userService.user;
  }
}
