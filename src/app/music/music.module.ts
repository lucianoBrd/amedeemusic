import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Music
import { MusicComponent } from './music.component';
import { MusicHeaderComponent } from './music-header/music-header.component';
import { MusicEventComponent } from './music-event/music-event.component';
import { MusicProjectComponent } from './music-project/music-project.component';
import { MusicSocialComponent } from './music-social/music-social.component';
import { MusicGalleryComponent } from './music-gallery/music-gallery.component';
import { MusicVideoComponent } from './music-video/music-video.component';
import { MusicBookingComponent } from './music-booking/music-booking.component';
import { MusicBlogComponent } from './music-blog/music-blog.component';
import { MusicSubscribeComponent } from './music-subscribe/music-subscribe.component';
import { MusicTestimonialComponent } from './music-testimonial/music-testimonial.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';

@NgModule({
  declarations: [
    MusicComponent, 
    MusicHeaderComponent, 
    MusicEventComponent, 
    MusicProjectComponent, 
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
    MusicRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    LightboxModule,
  ],
})

export class MusicModule { }
