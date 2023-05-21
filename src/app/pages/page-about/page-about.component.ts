import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { ArtistAbout } from 'src/app/shared/models/artistAbout.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
})
export class PageAboutComponent implements OnInit, OnDestroy {
  public language: Language;
  public artist: Artist;
  public artistAbout: ArtistAbout;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public artistImage: string = 'assets/images/music/artist/man.png';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private metaService: MetaService, 
    private artistService: ArtistService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.about);
    this.metaService.setKeywords(this.language.about);
    this.metaService.setDescription(this.language.about);

    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artistAbout = this.artistService.getArtistAbout(data);
      this.artist = data;

      if (this.artist && this.artist.man) {
        this.artistImage = this.artistImagePath + this.artist.man;
      }
      if (this.artistAbout) {
        this.metaService.setDescription(this.artistAbout.about);
        this.metaService.setKeywords(this.language.about + ',' + this.artistAbout.about);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
