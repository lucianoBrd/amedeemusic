import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Project } from 'src/app/shared/models/project.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { SocialService } from 'src/app/shared/service/social.service';
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
  public project: Project;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public projectImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'project/';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService, 
    private sidebarService: SidebarService,
    private artistService: ArtistService,
    private socialService: SocialService,
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.socialService.loadedSocials$.subscribe((data: Social[]) => {
      this.socials = data;
    });
    this.artistService.loadedArtist$.subscribe((data: Artist) => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/projects/last/light').pipe(takeUntil(this.destroy$)).subscribe((data: Project) => {
      this.project = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sideBar(project: Project) {
    this.sidebarService.setProject(project);
  }

}
