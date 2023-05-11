import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { Artist } from 'src/app/shared/models/artist.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { TextService } from 'src/app/shared/service/text.service';
import { ConfigDB } from 'src/app/shared/data/config';

@Component({
  selector: 'app-music-header',
  templateUrl: './music-header.component.html',
  styleUrls: ['./music-header.component.scss']
})
export class MusicHeaderComponent implements OnInit {
  public socials: Social[];
  public artist: Artist;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService, 
    private sidebarService: SidebarService
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest('/api/socials').pipe(takeUntil(this.destroy$)).subscribe((data: Social[]) => {
      this.socials = data;
    });
    this.dataService.sendGetRequest('/api/artists/last/light').pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sideBar(value) {
    this.sidebarService.sendClickEvent(value);
  }

}
