import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-avatar',
  templateUrl: './selector-avatar.component.html',
  styleUrls: ['./selector-avatar.component.scss'],
})
export class SelectorAvatarComponent implements OnInit {

  @Output() avatarSelect = new EventEmitter<string>();
  @Input() avatarSelected: string = 'av-1.png';

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlides = {
    slidesPerView: 3.5
  }

  constructor() { }

  ngOnInit() {
    this.avatars.map( el => {
      if( el.img === this.avatarSelected ) el.seleccionado = true;
      else el.seleccionado = false;
    })
  }

  selectAvatar( avatar ){
    this.avatars.map( el => el.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSelect.emit(avatar.img);
  }

}
