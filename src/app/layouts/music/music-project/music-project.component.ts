import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { Project } from 'src/app/shared/models/project.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { DataService } from 'src/app/shared/service/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-project',
  templateUrl: './music-project.component.html',
  styleUrls: ['./music-project.component.scss']
})
export class MusicProjectComponent implements OnInit {
  public artist: Artist;
  public projects: Project[];
  public lastProject: Project;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public projectImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'project/';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private textService: TextService, 
    private sidebarService: SidebarService,
    private artistService: ArtistService,
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.artistService.selectedArtist$.subscribe((data: Artist) => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/projects').pipe(takeUntil(this.destroy$)).subscribe((data: Project[]) => {
      this.projects = data;
      if (data && data.length > 0) {
        this.lastProject = data.slice(-1)[0];
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sideBar(idProject: number) {
    this.sidebarService.sendClickEvent(idProject);
  }
  
  projectscarouselOptions= {
    items: 3,
    margin: 60,
    nav: false,
    dots:false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3,
            margin: 30
        },
        1600: {
            margin: 30
        }
    }
  }

}
