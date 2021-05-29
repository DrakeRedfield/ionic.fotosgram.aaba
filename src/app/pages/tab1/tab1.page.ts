import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  disableInfiniteS = false;
  posts: IPost[] = [];

  constructor(
    private postsHttp: PostsService,
  ) {}

  ngOnInit(){
    this.loadPost();
    this.postsHttp.newPost.subscribe( this.posts.unshift );
  }

  loadPost( event?, pull:boolean = false ){
    this.postsHttp.getPost(pull).subscribe( resp => {
      // console.log(resp.post)
      this.posts.push(...resp.post);
      if( event ){
        event.target.complete();
        if( resp.post.length === 0){
          this.disableInfiniteS = true;
        }
      }
    });
  }

  updatePosts( event ){
    setTimeout(() => {
      this.posts = [];
      this.disableInfiniteS = false;
      this.loadPost(event,true);
    }, 1000);
  }
}
