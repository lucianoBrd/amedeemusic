import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';

@Component({
  selector: 'app-music-footer',
  templateUrl: './music-footer.component.html',
  styleUrls: ['./music-footer.component.scss']
})
export class MusicFooterComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private artistService: ArtistService,
  ) {
  }

  ngOnInit() {
    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
