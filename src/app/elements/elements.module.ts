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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NgxMasonryModule } from 'ngx-masonry';

RecaptchaComponent.prototype.ngOnDestroy = function() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  declarations: [
    ElementsComponent, 
    PageContactComponent, 
    PageNotFoundComponent, 
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
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxMasonryModule,
  ],
})
export class ElementsModule { }
