import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPostResponse, IPost } from '../interfaces/interfaces';
import { UsersService } from './users.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  pagePost = 0;
  newPost = new EventEmitter<IPost>();

  constructor(
    private http: HttpClient,
    private userService: UsersService,
    private fileTransfer: FileTransfer,
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

  uploadFiles( img: string ){
    const options:FileUploadOptions = {
      fileKey: 'image',
      headers:{
        'X-Token': this.userService.token
      }
    };
    const filetransfer: FileTransferObject = this . fileTransfer.create();
    filetransfer.upload( img, `${URL}/posts/upload`, options ).then( resp => {
      console.log('success')
    }).catch( err => {
      console.log(err);
    });
  }
}
