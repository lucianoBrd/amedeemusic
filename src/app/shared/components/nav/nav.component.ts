import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.interface';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../service/data.service';
import { ArtistService } from '../../service/artist.service';
import { ConfigDB } from '../../data/config';
import { LocaleService } from '../../service/locale.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public locale: string;

  @Input()
  public headerClass: string = 'music';

  public logoImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerLogoImages;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
    private localeService: LocaleService,
  ) {
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });

    this.dataService.sendGetRequest('/api/artists/last').pipe(takeUntil(this.destroy$)).subscribe(
      (data: Artist) => {
        this.artist = data;
        this.artistService.setArtist(data);
      },
      (error) => {
        this.artist = null;
        this.artistService.setArtist(null);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  changeSource(event) {
    event.target.src = 'assets/images/logo/logo.png';
  }

}
