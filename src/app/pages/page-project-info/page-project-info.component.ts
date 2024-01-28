import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { DataService } from 'src/app/shared/service/data.service';
import { Project } from 'src/app/shared/models/project.interface';
import { Title } from 'src/app/shared/models/title.interface';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-project-info',
  templateUrl: './page-project-info.component.html',
  styleUrls: ['./page-project-info.component.scss'],
})
export class PageProjectInfoComponent implements OnInit, OnDestroy {
  public project: Project;
  public language: Language;

  public route: string = '/api/projects';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.myProjects);
    this.metaService.setKeywords(this.language.myProjects);
    this.metaService.setDescription(this.language.myProjects);

    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      /* Get slug */
      let slug: string = params['slug'];

      if (slug) {
        this.dataService.sendGetRequest('/api/projects/' + slug).pipe(takeUntil(this.destroy$)).subscribe(
          (data: Project) => {
            let keywords:string = this.language.myProjects;

            if (data) {
              keywords = ',' + 
                data.name + ',' + 
                data.type.name + ',' +
                data.slug + ',' +
                data.name
              ;
              if (data.titles) {
                let titles: Title[] = data.titles;
                titles.sort((a, b) => a.name.localeCompare(b.name));
  
                data.titles = titles;
  
                for (let index = 0; index < titles.length; index++) {
                  const title: Title = titles[index];
                  keywords += ',' + title.name;
                }
              }
            }
            this.project = data;
            this.metaService.setKeywords(keywords);
            this.sideBar(this.project);
          },
          (error) => {
            this.project = null;
          }
        );
      }
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
