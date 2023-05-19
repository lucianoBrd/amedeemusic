import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../models/artist.interface';
import { ArtistAbout } from '../models/artistAbout.interface';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artist$ = new BehaviorSubject<Artist|undefined>(undefined);
  loadedArtist$ = this.artist$.asObservable();
  constructor() {}

  setArtist(artist: Artist) {
    this.artist$.next(artist);
  }

  getArtistAbout(artist: Artist): ArtistAbout {
    if (artist && artist.artistAbouts) {
      let artistAbouts: ArtistAbout[] = artist.artistAbouts;
      artistAbouts.sort((a, b) => a.id - b.id);

      for (let index = artistAbouts.length - 1; index >= 0; index--) {
        const artistAbout: ArtistAbout = artistAbouts[index];
        if (artistAbout.local.local == LanguageService.getLanguageCodeOnly()) {
          return artistAbout;
        }
      }
    }
    return null;
  }

}
