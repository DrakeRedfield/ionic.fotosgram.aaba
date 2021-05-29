import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: IPost = {};
  urlImages = '';
  img = '/assets/img/perro-1.jpg'
  constructor() { }

  ngOnInit() {
    this.urlImages = `${environment.url}/posts/image/${this.post.user._id}/`
    console.log(this.post)
  }

}
