import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { Event } from 'src/app/shared/models/event.interface';
import { ConfigDB } from 'src/app/shared/data/config';

@Component({
  selector: 'app-page-event',
  templateUrl: './page-event.component.html',
  styleUrls: ['./page-event.component.scss'],
})
export class PageEventComponent implements OnInit, OnDestroy {
  public events: Event[];
  public listEvents: List<Event>;
  public language: Language;
  public eventImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'event/';

  public currentPage: number;
  public totalPage: number;

  public route: string = '/api/events';
  public paginationRoute: string = this.route;
  public filterRoute: string = this.route + '/filter';
  public filtersPagination: string = '';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private paginationService: PaginationService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.listOfEvents);
    this.metaService.setKeywords(this.language.listOfEvents);
    this.metaService.setDescription(this.language.listOfEvents);

    this.getEvents(this.route);
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

  public getEvents = (route: string) => {
    this.listEvents = undefined;
    this.events = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Event>) => {
        this.listEvents = data;
        this.events = this.listEvents['hydra:member'];

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Event>(this.listEvents);

        let keywords:string = this.language.listOfEvents;

        for (let index = 0; index < this.events.length; index++) {
          const event: Event = this.events[index];
          keywords += ',' + event.name;
        }

        this.metaService.setKeywords(keywords);
      },
      (error) => {
        this.listEvents = null;
        this.events = [];
      }
    );
  }

}
