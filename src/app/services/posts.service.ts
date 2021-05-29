import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPostResponse, IPost } from '../interfaces/interfaces';
import { UsersService } from './users.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private pagePost = 0;
  newPost = new EventEmitter<IPost>();

  constructor(
    private http: HttpClient,
    private userService: UsersService,
  ) { }

  getPost(isPull: boolean = false){
    if ( isPull ) this.pagePost = 0;
    this.pagePost++;
    return this.http.get<IPostResponse>(`${URL}/posts/?page=${this.pagePost}`);
  }

  createPost( post: IPost ){
    return new Promise( resolve => {
      const headers = new HttpHeaders({
        'X-Token': this.userService.token
      });
      this.http.post(`${URL}/posts/create`,post,{headers}).subscribe( resp => {
        this.newPost.emit(resp);
        resolve(true);
      });
    });
  }
}
