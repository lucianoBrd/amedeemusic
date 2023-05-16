import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';
import { MetaService } from './shared/service/meta.service';
import { Politic } from './shared/models/politic.interface';
import { TextService } from './shared/service/text.service';
import { Language } from './shared/models/language.interface';
import { ConfigDB } from './shared/data/config';
import { DOCUMENT } from '@angular/common';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public url: any;
  title = ConfigDB.data.appName;
  public layoutType: string = 'light';
  public language: Language;

  public politic: Politic;
  public documentPath: String;

  constructor(
    public customize: CustomizerService,
    private router: Router,
    private metaService: MetaService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
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
  }

  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src  = `/assets/tilt.js`;   
    this._renderer2.appendChild(this._document.body, script);
    
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
    if (val === 'en' || val === 'fr') {
      this.customize.setLanguage(val);
      /* Refresh page */
      window.location.reload();
    }
  }
}
