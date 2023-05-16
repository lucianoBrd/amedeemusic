import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Music Layout
import { MusicComponent } from './music/music.component';
import { MusicHeaderComponent } from './music/music-header/music-header.component';
import { MusicEventComponent } from './music/music-event/music-event.component';
import { MusicProjectComponent } from './music/music-project/music-project.component';
import { MusicSidebarComponent } from './music/music-sidebar/music-sidebar.component';
import { MusicSocialComponent } from './music/music-social/music-social.component';
import { MusicGalleryComponent } from './music/music-gallery/music-gallery.component';
import { MusicVideoComponent } from './music/music-video/music-video.component';
import { MusicBookingComponent } from './music/music-booking/music-booking.component';
import { MusicBlogComponent } from './music/music-blog/music-blog.component';
import { MusicSubscribeComponent } from './music/music-subscribe/music-subscribe.component';
import { MusicTestimonialComponent } from './music/music-testimonial/music-testimonial.component';
import { MusicFooterComponent } from './music/music-footer/music-footer.component';

@NgModule({
  declarations: [
    MusicComponent, 
    MusicHeaderComponent, 
    MusicEventComponent, 
    MusicProjectComponent, 
    MusicSidebarComponent, 
    MusicSocialComponent, 
    MusicGalleryComponent, 
    MusicVideoComponent, 
    MusicBookingComponent, 
    MusicBlogComponent, 
    MusicSubscribeComponent, 
    MusicTestimonialComponent, 
    MusicFooterComponent, 
  ],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule,
    SharedModule,
    CountToModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    LightboxModule,
    NgxMasonryModule,
  ],
})

export class LayoutsModule { }
