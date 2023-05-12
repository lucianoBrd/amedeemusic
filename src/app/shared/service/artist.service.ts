import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artist$ = new BehaviorSubject<any>(undefined);
  selectedArtist$ = this.artist$.asObservable();
  constructor() {}

  setArtist(artist: Artist) {
    this.artist$.next(artist);
  }

}
