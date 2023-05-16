import { Component, OnInit } from '@angular/core';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';

@Component({
  selector: 'app-music-footer',
  templateUrl: './music-footer.component.html',
  styleUrls: ['./music-footer.component.scss']
})
export class MusicFooterComponent implements OnInit {
  public artist: Artist;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';

  constructor(
    private artistService: ArtistService,
  ) {
  }

  ngOnInit() {
    this.artistService.loadedArtist$.subscribe((data: Artist) => {
      this.artist = data;
    });
  }

}
