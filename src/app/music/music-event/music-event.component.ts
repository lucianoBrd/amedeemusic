import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { Event } from 'src/app/shared/models/event.interface';
import { List } from 'src/app/shared/models/list.interface';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-event',
  templateUrl: './music-event.component.html',
  styleUrls: ['./music-event.component.scss']
})
export class MusicEventComponent implements OnInit, OnDestroy {
  public events: Event[];
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.dataService.sendGetRequest('/api/events/lasts').pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Event>) => {
        this.events = data['hydra:member'];
      },
      (error) => {
        this.events = [];
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
