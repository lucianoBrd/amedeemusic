import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, SecurityContext } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
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
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { ConfigDB } from './shared/data/config';
import { AlertService } from './shared/service/alert.service';
import { CustomizerService } from './shared/service/customizer.service';
import { DataService } from './shared/service/data.service';
import { FormService } from './shared/service/form.service';
import { MetaService } from './shared/service/meta.service';
import { NavService } from './shared/service/nav.service';
import { PoliticService } from './shared/service/politic.service';
import { SidebarService } from './shared/service/sidebar.service';
import { SocialService } from './shared/service/social.service';
import { TextService } from './shared/service/text.service';
import { ArtistService } from './shared/service/artist.service';
import { Language } from './shared/models/language.interface';
import { Cookie } from './shared/data/cookie';
registerLocaleData(localeFr);

const language: Language = TextService.getTextByLocal();
const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: ConfigDB.domain
  },
  position: "bottom",
  theme: "edgeless",
  palette: {
    popup: {
      background: "#131313",
      text: "#d1d1d1",
      link: "#ffffff"
    },
    button: {
      background: "#591e1e",
      text: "#d1d1d1",
      border: "transparent"
    }
  },
  type: "info",
  content: {
    message: language.cookieMessage,
    dismiss: language.cookieDismiss,
    deny: language.cookieDeny,
    link: language.learnMore,
    href: ConfigDB.data.appServer + '/privacy-policy',
    policy: language.cookiePolicy,
    header: language.cookieHeader,
    allow: language.cookieAllow,
  },
  autoOpen: !(localStorage.getItem(Cookie.coockieDismiss) === Cookie.coockieDismissed)
};

RecaptchaComponent.prototype.ngOnDestroy = function() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

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
    NgcCookieConsentModule.forRoot(cookieConfig),
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'  })

  ],
  providers: [
    DataService,
    AlertService,
    ArtistService,
    CustomizerService,
    FormService,
    JsonDateInterceptorService,
    LanguageService,
    MetaService,
    NavService,
    PoliticService,
    SidebarService,
    SocialService,
    TextService,
    ConfigDB,
    Cookie,
    { provide: LOCALE_ID, useValue: LanguageService.getLanguage() },
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
