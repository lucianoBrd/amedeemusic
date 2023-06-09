import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesComponent } from './pages.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePrivacyPolicyComponent } from './page-privacy-policy/page-privacy-policy.component';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageEventComponent } from './page-event/page-event.component';
import { PageSocialComponent } from './page-social/page-social.component';
import { PageTestimonialComponent } from './page-testimonial/page-testimonial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [
    PagesComponent, 
    PageContactComponent,
    PagePrivacyPolicyComponent,
    PageGalleryComponent,
    PageProjectComponent,
    PageAboutComponent,
    PageEventComponent,
    PageSocialComponent,
    PageTestimonialComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    LightboxModule,
  ],
})
export class PagesModule { }
