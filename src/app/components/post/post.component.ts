import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: IPost = {};
  img = '/assets/img/perro-1.jpg'
  constructor() { }

  ngOnInit() {}

}
