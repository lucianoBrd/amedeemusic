import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist.interface';
import { ArtistAbout } from 'src/app/shared/models/artistAbout.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {

  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private metaService: MetaService, 
    private artistService: ArtistService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.home + ',' + this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);

    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      let artistAbouts: ArtistAbout[] = data.artistAbouts;
        artistAbouts.sort((a, b) => a.id - b.id);

        for (let index = artistAbouts.length - 1; index >= 0; index--) {
          const artistAbout: ArtistAbout = artistAbouts[index];
          if (artistAbout.local.local == LanguageService.getLanguageCodeOnly()) {
            this.metaService.setDescription(artistAbout.about);
            this.metaService.setKeywords(this.language.home + ',' + artistAbout.about);
            break;
          }
        }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
