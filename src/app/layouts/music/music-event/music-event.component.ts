import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { Event } from 'src/app/shared/models/event.interface';
import { List } from 'src/app/shared/models/list.interface';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { PaginationService } from 'src/app/shared/service/pagination.service';

@Component({
  selector: 'app-music-event',
  templateUrl: './music-event.component.html',
  styleUrls: ['./music-event.component.scss']
})
export class MusicEventComponent implements OnInit, OnDestroy {
  public events: Event[];
  public listEvents: List<Event>;
  public language: Language;

  public currentPage: number;
  public totalPage: number;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService,
    private paginationService: PaginationService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.getEvents('/api/events');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
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
      },
      (error) => {
        this.listEvents = null;
        this.events = [];
      }
    );
  }

  onFocusOutEvent(event: any){
    let number: number = event.target.value;
    if (this.paginationService.checkPageNumber(number, this.totalPage)) {
      this.getEvents('/api/events?page=' + number);
    }
  }

}
