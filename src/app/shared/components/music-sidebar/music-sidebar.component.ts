import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { Project } from 'src/app/shared/models/project.interface';
import { ConfigDB } from 'src/app/shared/data/config';
import { Language } from 'src/app/shared/models/language.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';
import { Subject, takeUntil } from 'rxjs';
import { ProjectPlatform } from 'src/app/shared/models/projectPlatform.interface';
import { Title } from 'src/app/shared/models/title.interface';
import { TitlePlatform } from 'src/app/shared/models/titlePlatform.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { Artist } from 'src/app/shared/models/artist.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocaleService } from '../../service/locale.service';

@Component({
  selector: 'app-music-sidebar',
  templateUrl: './music-sidebar.component.html',
  styleUrls: ['./music-sidebar.component.scss']
})
export class MusicSidebarComponent implements OnInit, OnDestroy {
  @Input()
  public fullscreen: boolean = false;

  public artist: Artist;
  public locale: string;
  public project: Project;
  public language: Language;
  public projectImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'project/';
  public sideBarDispaly: string = "none";
  public selectedTitle: Title;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private sidebarService: SidebarService,
    private artistService: ArtistService,
    private modalService: NgbModal,
    private localeService: LocaleService,
  ) { 
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });

    this.sidebarService.setProject(this.project);
    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });
    this.sidebarService.project$.pipe(takeUntil(this.destroy$)).subscribe((data: Project) => {
      this.sideBar(data);
    });
  }

  getProject(project: Project = undefined) {
    this.project = project;

    if (project) {
      if(this.project) {
        this.project.projectPlatforms = undefined;
        this.project.titles = undefined;
      }
      this.dataService.sendGetRequest('/api/projects/' + project.slug).pipe(takeUntil(this.destroy$)).subscribe(
        (data: Project) => {
          if (data) {
            if (data.projectPlatforms) {
              let projectPlatforms: ProjectPlatform[] = data.projectPlatforms;
              projectPlatforms.sort((a, b) => a.fa.localeCompare(b.fa));

              data.projectPlatforms = projectPlatforms;
            }
            if (data.titles) {
              let titles: Title[] = data.titles;
              titles.sort((a, b) => a.name.localeCompare(b.name));

              data.titles = titles;

              for (let index = 0; index < titles.length; index++) {
                const title: Title = titles[index];
                if (title.titlePlatforms) {
                  let titlePlatforms: TitlePlatform[] = title.titlePlatforms;
                  titlePlatforms.sort((a, b) => a.fa.localeCompare(b.fa));

                  data.titles[index].titlePlatforms = titlePlatforms;
                }
              }
            }
          }
          this.project = data;
        },
        (error) => {
          this.project = null;
        }
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sideBar(project: Project = undefined){
    if (this.sideBarDispaly == 'none' && project) {
      this.sideBarDispaly = 'block';
    } else if (project === undefined) {
      this.sideBarDispaly = 'none';
    }
    this.getProject(project);
  }

  openVerticallyCentered(content, selectedTitle: Title) {
    if (selectedTitle.lyrics) {
      this.selectedTitle = selectedTitle;
      this.modalService.open(content, { centered: true, size: 'lg' });
    }
  }

}
