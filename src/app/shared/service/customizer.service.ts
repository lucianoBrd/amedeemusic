import { Injectable } from '@angular/core';
import { ConfigDB } from '../data/config';
import { Cookie } from '../data/cookie';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {
  private languageCode: string;

  constructor() {
    /* Set local of navigator */
    this.languageCode = LanguageService.getLanguageCodeOnly();
    this.data.settings.languageCode = this.languageCode;

    var layoutVersion = localStorage.getItem(Cookie.layoutVersion) || this.data.settings.layout_version;
    var layoutType = localStorage.getItem(Cookie.layoutType) || this.data.settings.layout_type;
    var lc = localStorage.getItem(Cookie.languageCode) || this.data.settings.languageCode;
    if (layoutVersion) {
      document.body.classList.add(layoutVersion);
      this.data.settings.layout_version = layoutVersion;
    }
    if (layoutType){
      document.body.classList.add(layoutType);
    }
    if (lc){
      this.data.settings.languageCode = lc;
    }
    /* Change lang attribute */
    document.documentElement.lang = this.data.settings.languageCode;
  }

  // Configration Layout
  public data = ConfigDB.data

  // Set Customize layout Version
  setLayoutVersion(layout: string) {
    document.body.classList.remove(this.data.settings.layout_version);
    this.data.settings.layout_version = layout;
    document.body.classList.add(layout);
    localStorage.setItem(Cookie.layoutVersion, layout);
  }

  setLayoutType(layout: string) {
    document.body.classList.remove(this.data.settings.layout_type);
    this.data.settings.layout_type = layout;
    document.body.classList.add(layout);
    localStorage.setItem(Cookie.layoutType, layout);
  }

  setLanguage(language: string):boolean {
    if (language === 'en' || language === 'fr') {
      this.data.settings.languageCode = language;
      localStorage.setItem(Cookie.languageCode, language);
      return true;
    }
    return false;
  }

}
