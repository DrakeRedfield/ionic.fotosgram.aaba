import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { IPostResponse } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private pagePost = 0;

  constructor(
    private http: HttpClient,
  ) { }

  getPost(isPull: boolean = false){
    if ( isPull ) this.pagePost = 0;
    this.pagePost++;
    return this.http.get<IPostResponse>(`${URL}/posts/?page=${this.pagePost}`);
  }
}
