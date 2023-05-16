import { Component, OnInit } from '@angular/core';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
})
export class PageContactComponent implements OnInit {
  public language: Language;
  public artist: Artist;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  
  constructor(
    private metaService: MetaService, 
    private textService: TextService,
    private artistService: ArtistService,
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.contact);
    this.metaService.setKeywords(this.language.contact + ',' + this.language.contactDesc);
    this.metaService.setDescription(this.language.contactDesc);

    this.artistService.loadedArtist$.subscribe((data: Artist) => {
      this.artist = data;
    });
  }

}
