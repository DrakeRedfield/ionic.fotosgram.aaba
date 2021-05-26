import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  posts: IPost[] = [];

  constructor(
    private postsHttp: PostsService,
  ) {}

  ngOnInit(){
    this.postsHttp.getPost().subscribe( resp => {
      console.log(resp.post)
      this.posts.push(...resp.post);
    });
  }

  updatePosts( event ){
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
