import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from '../shared/models/language.interface';
import { MetaService } from '../shared/service/meta.service';
import { TextService } from '../shared/service/text.service';
import { Social } from '../shared/models/social.interface';
import { Subject, takeUntil } from 'rxjs';
import { List } from '../shared/models/list.interface';
import { DataService } from '../shared/service/data.service';
import { ConfigDB } from '../shared/data/config';

@Component({
  selector: 'app-page-maintenance',
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.scss']
})
export class PageMaintenanceComponent implements OnInit, OnDestroy {
  public language: Language;
  public socials: Social[];
  public appName: string = ConfigDB.data.appName;

  constructor(
    private metaService: MetaService,
    private dataService: DataService, 
  ) {
    this.language = TextService.getTextByLocal();
  }

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.maintenance);
    this.metaService.setDescription(this.language.maintenanceInProcess);

    this.dataService.sendGetRequest('/api/socials').pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Social>) => {
        this.socials = data['hydra:member'];
      },
      (error) => {
        this.socials = [];
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
