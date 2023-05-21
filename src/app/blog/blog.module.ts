import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    BlogComponent, 
    BlogListComponent,
    BlogDetailComponent,
    BlogSidebarComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxMasonryModule,
    CarouselModule,
    NgbModule
  ],
})
export class BlogModule { }
