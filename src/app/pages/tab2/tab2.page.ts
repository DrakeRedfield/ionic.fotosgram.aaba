import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from '../../interfaces/interfaces';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  post: IPost = {
    coords: null,
    message: '',
    hasCoords: false,
  };
  gettingLocation: boolean = false;
  tempImages: any[] = [];

  constructor(
    private postService: PostsService,
    private routes: Router,
    private geoLocation: Geolocation,
    private camera: Camera,
  ) {}

  useGalery(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.getImage(options);
  }

  useCamera(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.getImage(options);
    
  }

  getImage(options: CameraOptions){
    this.camera.getPicture(options).then((imageData) => {
      const img = window.Ionic.WebView.convertFileSrc( imageData );
      console.log(img);
      this.postService.uploadFiles( imageData );
      this.tempImages.push(img);
    }, (err) => {
     // Handle error
    });
  }

  async createPost(){
    const createdPost = await this.postService.createPost(this.post);
    this.post = {
      coords: null,
      message: '',
      hasCoords: false,
    };
    this.tempImages = [];
    this.routes.navigateByUrl('/main/home');
  }

  setLocation(){
    if( !this.post.hasCoords ){
      this.post.coords = null;
      return;
    }
    this.gettingLocation = true;
    this.geoLocation.getCurrentPosition().then( resp => {
      this.gettingLocation = false;
      const coords = `${resp.coords.latitude},${resp.coords.longitude}`;
      this.post.coords = coords;
    }).catch( err => {
      this.gettingLocation = false;
    });
  }

}
