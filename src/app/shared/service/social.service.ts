import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Social } from '../models/social.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private socials$ = new BehaviorSubject<Social[]|undefined>(undefined);
  loadedSocials$ = this.socials$.asObservable();
  constructor() {}

  setSocials(socials: Social[]) {
    this.socials$.next(socials);
  }

}
