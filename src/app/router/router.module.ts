import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterRoutingModule } from './router-routing.module';
import { SharedModule } from '../shared/shared.module'
import { RouterComponent } from './router.component';
import { BlogModule } from '../blog/blog.module';
import { MusicModule } from '../music/music.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    RouterComponent,
  ],
  imports: [
    CommonModule,
    RouterRoutingModule,
    MusicModule,
    SharedModule,
    PagesModule,
    BlogModule,
  ],
})
export class RouterModule { }
