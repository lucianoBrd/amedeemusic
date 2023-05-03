import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { ElementsComponent } from './elements.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsModule } from '../layouts/layouts.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';
import { DownloadComponent } from './download/download.component';
import { JsonDateInterceptorService } from '../shared/service/jsonDateInterceptor.service';

RecaptchaComponent.prototype.ngOnDestroy = function() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  declarations: [
    ElementsComponent, 
    AboutComponent, 
    ContactComponent, 
    PageNotFoundComponent, 
    DownloadComponent,
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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptorService, multi: true}
  ],
})
export class ElementsModule { }
