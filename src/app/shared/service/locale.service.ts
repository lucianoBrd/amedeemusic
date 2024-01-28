import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private locale$ = new BehaviorSubject<string|undefined|null>(undefined);
  loadedLocale$ = this.locale$.asObservable();
  constructor() {}

  setLocale(locale: string|null) {
    this.locale$.next(locale);
  }

}
