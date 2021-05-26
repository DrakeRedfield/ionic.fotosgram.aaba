import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostsComponent,
    PostComponent,
  ],
  exports:[
    HeaderComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
})
export class ComponentsModule { }
