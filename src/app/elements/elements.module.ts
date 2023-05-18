import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { ElementsComponent } from './elements.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { LayoutsModule } from '../layouts/layouts.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagePrivacyPolicyComponent } from './page-privacy-policy/page-privacy-policy.component';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [
    ElementsComponent, 
    PageContactComponent,
    PageNotFoundComponent, 
    PagePrivacyPolicyComponent,
    PageGalleryComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CountToModule,
    LayoutsModule,
    NgxMasonryModule,
    GalleryModule,
    LightboxModule,
  ],
})
export class ElementsModule { }
