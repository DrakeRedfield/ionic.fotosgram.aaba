import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { UrlAvatarPipe } from './url-avatar.pipe';



@NgModule({
  declarations: [
    DomSanitizerPipe,
    UrlAvatarPipe,
  ],
  exports:[
    DomSanitizerPipe,
    UrlAvatarPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
