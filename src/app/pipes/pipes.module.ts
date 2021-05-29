import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { UrlAvatarPipe } from './url-avatar.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';



@NgModule({
  declarations: [
    DomSanitizerPipe,
    UrlAvatarPipe,
    ImageSanitizerPipe,
  ],
  exports:[
    DomSanitizerPipe,
    UrlAvatarPipe,
    ImageSanitizerPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
