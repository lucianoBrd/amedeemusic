import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderBisWhiteComponent } from './components/loader-bis-white/loader-bis-white.component';
import { LoaderBisRedComponent } from './components/loader-bis-red/loader-bis-red.component';
import { LoaderBisComponent } from './components/loader-bis/loader-bis.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NavComponent } from './components/nav/nav.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent, 
    TapToTopComponent, 
    LoaderComponent, 
    LoaderBisComponent, 
    LoaderBisWhiteComponent,
    LoaderBisRedComponent,
    ContactComponent,
    CopyrightComponent,
    NavComponent,
    PaginationComponent,
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderBisComponent,
    LoaderBisWhiteComponent,
    LoaderBisRedComponent,
    TapToTopComponent,
    ContactComponent,
    CopyrightComponent,
    NavComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
