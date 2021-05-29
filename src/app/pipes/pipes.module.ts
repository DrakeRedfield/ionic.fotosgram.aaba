import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { UrlAvatarPipe } from './url-avatar.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImageserverPipe } from './imageserver.pipe';



@NgModule({
  declarations: [
    DomSanitizerPipe,
    UrlAvatarPipe,
    ImageSanitizerPipe,
    ImageserverPipe,
  ],
  exports:[
    DomSanitizerPipe,
    UrlAvatarPipe,
    ImageSanitizerPipe,
    ImageserverPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
