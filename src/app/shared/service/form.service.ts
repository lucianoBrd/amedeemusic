import { Injectable } from '@angular/core';
import { ConfigDB } from '../data/config';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private siteKey: String = ConfigDB.data.siteKey;

  constructor() {
  }

  public ValidateEmail(mail: String): Boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

  public getSiteKey(): String {
    return this.siteKey;
  }

}
