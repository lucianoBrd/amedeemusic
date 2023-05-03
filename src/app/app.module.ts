import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { LayoutsModule } from './layouts/layouts.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LanguageService } from './shared/service/language.service';
import { JsonDateInterceptorService } from './shared/service/jsonDateInterceptor.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    SharedModule,
    ElementsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'  })

  ],
  providers: [
    LanguageService,
    { provide: LOCALE_ID, useValue: LanguageService.getLanguage() },
    {provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
