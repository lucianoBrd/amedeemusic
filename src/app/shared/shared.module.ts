import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderBisWhiteComponent } from './components/loader-bis-white/loader-bis-white.component';
import { LoaderBisComponent } from './components/loader-bis/loader-bis.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NavComponent } from './components/nav/nav.component';
import { RecaptchaComponent, RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';

RecaptchaComponent.prototype.ngOnDestroy = function() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

@NgModule({
  declarations: [
    MenuComponent, 
    TapToTopComponent, 
    LoaderComponent, 
    LoaderBisComponent, 
    LoaderBisWhiteComponent,
    ContactComponent,
    CopyrightComponent,
    NavComponent,
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    LoaderBisComponent,
    LoaderBisWhiteComponent,
    TapToTopComponent,
    ContactComponent,
    CopyrightComponent,
    NavComponent,
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
