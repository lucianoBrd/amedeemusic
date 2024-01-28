import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { Project } from 'src/app/shared/models/project.interface';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { Artist } from 'src/app/shared/models/artist.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-project',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.scss'],
})
export class PageProjectComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public projects: Project[];
  public listProjects: List<Project>;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public projectImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'project/';

  public currentPage: number;
  public totalPage: number;

  public route: string = '/api/projects';
  public paginationRoute: string = this.route;
  public filterRoute: string = this.route + '/filter';
  public filtersPagination: string = '';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private paginationService: PaginationService,
    private sidebarService: SidebarService,
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.myProjects);
    this.metaService.setKeywords(this.language.myProjects);
    this.metaService.setDescription(this.language.myProjects);

    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });

    this.getProjects(this.route);

    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      /* Get slug */
      let slug: string = params['slug'];
      
      if (slug) {
        this.dataService.sendGetRequest('/api/projects/' + slug).pipe(takeUntil(this.destroy$)).subscribe(
          (data: Project) => {
            let project: Project = data;
  
            if(project) {
              this.sideBar(project);
            }
          },
        );
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSearch(search: string) {
    if(!search?.length) {
      this.paginationRoute = this.route;
    } else {
      this.paginationRoute = this.filterRoute;
    }
    this.filtersPagination = 'search=' + search;
  }

  public getProjects = (route: string) => {
    this.listProjects = undefined;
    this.projects = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Project>) => {
        this.listProjects = data;
        this.projects = this.listProjects['hydra:member'];

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Project>(this.listProjects);

        let keywords:string = this.language.myProjects;

        for (let index = 0; index < this.projects.length; index++) {
          const project: Project = this.projects[index];
          keywords += ',' + project.name;
        }

        this.metaService.setKeywords(keywords);
      },
      (error) => {
        this.listProjects = null;
        this.projects = [];
      }
    );
  }

  sideBar(project: Project) {
    this.sidebarService.setProject(project);
  }

}
