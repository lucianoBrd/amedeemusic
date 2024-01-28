import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';
import { MetaService } from './shared/service/meta.service';
import { TextService } from './shared/service/text.service';
import { Language } from './shared/models/language.interface';
import { ConfigDB } from './shared/data/config';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subject, takeUntil } from 'rxjs';
import { Cookie } from './shared/data/cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public url: any;
  public layoutType: string = 'light';
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public customize: CustomizerService,
    private router: Router,
    private metaService: MetaService,
    private cookieService: NgcCookieConsentService,
  ) {
    this.language = TextService.getTextByLocal();

    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.home + ',' + this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);

    let favIcon: HTMLLinkElement = document.querySelector('#favIcon'); 
    favIcon.href = ConfigDB.data.apiServer + ConfigDB.data.apiServerLogoImages + 'favicon.ico';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });

    this.cookieService.popupClose$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      localStorage.setItem(Cookie.coockieDismiss, Cookie.coockieDismissed);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  customizeLayoutVersion(val) {
    this.customize.setLayoutVersion(val);
    this.layoutType = val;
  }

  customizeLayoutType(val) {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }

  customizeLanguage(val) {
    let result:boolean = this.customize.setLanguage(val);

    if (result) {
      /* Refresh page */
      window.location.replace(val);
    }
  }
}
