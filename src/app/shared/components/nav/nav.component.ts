import { Component, OnDestroy, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.interface';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../service/data.service';
import { ArtistService } from '../../service/artist.service';
import { ConfigDB } from '../../data/config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public artist: Artist;

  public logoImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerLogoImages;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
  ) {
  }

  ngOnInit() {
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
