import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PipesModule } from '../pipes/pipes.module';
import { SelectorAvatarComponent } from './selector-avatar/selector-avatar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostsComponent,
    PostComponent,
    SelectorAvatarComponent,
  ],
  exports:[
    HeaderComponent,
    PostsComponent,
    PostComponent,
    SelectorAvatarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
  ],
})
export class ComponentsModule { }
